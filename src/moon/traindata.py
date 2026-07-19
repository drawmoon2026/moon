"""从已索引的语料生成 LoRA 微调数据(指令反向生成)。

对每个代码 chunk,让本地 30B 模型写出"以这段代码为标准答案的用户指令",
组成 (指令 -> 代码) 对话样本;模型由此学习你的代码风格与惯用写法。
"""
import json
import random

import openai

from . import config

_GEN_PROMPT = """\
阅读下面这段来自我个人代码库的代码({source}):

```
{code}
```

写出一个用户可能提出的中文指令或问题,要求这段代码正是它的理想答案。
指令要具体(提到功能、输入输出或场景),但不要直接透露实现细节。
只输出指令本身,不要任何解释或引号。"""

SYSTEM_PROMPT = "你是我的私人编码助手,熟悉我的代码风格:回答时遵循我惯用的命名、注释和结构习惯。"

# 太短的 chunk(如只有 import)学不到风格,跳过
MIN_CHUNK_CHARS = 200
TRAIN_DIR = config.PROJECT_ROOT / "data" / "train"
VALID_RATIO = 0.1


def _load_code_chunks() -> list[dict]:
    path = config.index_dir() / "chunks.jsonl"
    if not path.exists():
        raise SystemExit("索引不存在,先运行: moon index <路径...>")
    code_suffixes = tuple(config.AST_LANGUAGES) + (".sh", ".zsh", ".go", ".rs", ".c", ".cpp", ".rb", ".swift", ".kt", ".sql")
    chunks = []
    with open(path, encoding="utf-8") as f:
        for line in f:
            c = json.loads(line)
            if c["source"].endswith(code_suffixes) and len(c["text"]) >= MIN_CHUNK_CHARS:
                chunks.append(c)
    return chunks


RAW_SELFGEN = TRAIN_DIR / "selfgen_raw.jsonl"


def merge_and_split(seed: int = 7) -> tuple[int, int]:
    """合并所有来源的 raw 样本(自生成 + 蒸馏),统一切分出 train/valid。"""
    samples = []
    for raw in sorted(TRAIN_DIR.glob("*_raw.jsonl")):
        with open(raw, encoding="utf-8") as f:
            samples.extend(json.loads(line) for line in f)
    if not samples:
        raise SystemExit("没有任何 raw 样本,先运行 moon traindata 或 moon distill")
    random.Random(seed).shuffle(samples)
    n_valid = max(1, int(len(samples) * VALID_RATIO))
    valid, train = samples[:n_valid], samples[n_valid:]
    for name, rows in (("train", train), ("valid", valid)):
        with open(TRAIN_DIR / f"{name}.jsonl", "w", encoding="utf-8") as f:
            for r in rows:
                f.write(json.dumps(r, ensure_ascii=False) + "\n")
    print(f"训练集合并完成: train {len(train)} 条, valid {len(valid)} 条(来源: 全部 *_raw.jsonl)")
    return len(train), len(valid)


def build_traindata(seed: int = 7) -> tuple[int, int]:
    chunks = _load_code_chunks()
    if not chunks:
        raise SystemExit("没有符合条件的代码 chunk(语料太少或都太短)")
    client = openai.OpenAI(base_url=config.CHAT_BASE_URL, api_key="local")

    samples = []
    for i, c in enumerate(chunks, 1):
        try:
            resp = client.chat.completions.create(
                model=config.CHAT_MODEL,
                messages=[{"role": "user", "content": _GEN_PROMPT.format(source=c["source"], code=c["text"])}],
                max_tokens=200, temperature=0.7, top_p=0.8,
            )
        except openai.APIConnectionError:
            raise SystemExit(f"连不上 {config.CHAT_BASE_URL},先运行 ./scripts/serve.sh")
        instruction = resp.choices[0].message.content.strip().replace("�", "")
        if not instruction:
            continue
        samples.append({"messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": instruction},
            {"role": "assistant", "content": f"```\n{c['text']}\n```"},
        ]})
        print(f"[{i}/{len(chunks)}] {c['source']} -> {instruction[:60]}")

    TRAIN_DIR.mkdir(parents=True, exist_ok=True)
    with open(RAW_SELFGEN, "w", encoding="utf-8") as f:
        for s in samples:
            f.write(json.dumps(s, ensure_ascii=False) + "\n")
    print(f"自生成完成: {len(samples)} 条 -> {RAW_SELFGEN.name}")
    return merge_and_split(seed)
