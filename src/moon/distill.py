"""知识蒸馏:用云端大模型(老师)生成高质量微调数据。

老师(默认 Qwen3-Coder-480B,DashScope API)读取个人代码库的 chunk,
生成"贴合该代码库风格的指令 + 参考答案"对;与 traindata(本地自生成)
的样本合并成最终训练集。同家族大模型蒸馏,风格衔接损耗最小。
"""
import json
import os
import time

import openai

from . import config
from .traindata import SYSTEM_PROMPT, TRAIN_DIR, _load_code_chunks, merge_and_split

_DISTILL_PROMPT = """\
下面是我个人代码库中的一段代码({source}):

```
{code}
```

请基于这段代码完成两件事,严格按 JSON 输出(不要 markdown 代码块包裹):
1. "instruction":设想一个用户会提出的具体编码请求(中文),这段代码所解决的问题正是该请求的场景。
2. "answer":作为精通这个代码库风格的助手,给出高质量回答:包含符合该代码库命名/注释/结构风格的完整代码实现,并附简短说明。回答可以比原代码更好(修 bug、补边界情况),但风格必须一致。

输出格式:{{"instruction": "...", "answer": "..."}}"""

RAW_FILE = TRAIN_DIR / "distill_raw.jsonl"  # *_raw.jsonl 命名约定:merge_and_split 会自动收集


def _teacher_client() -> openai.OpenAI:
    key = os.environ.get("DASHSCOPE_API_KEY")
    if not key:
        raise SystemExit(
            "未设置 DASHSCOPE_API_KEY 环境变量。\n"
            "到 https://bailian.console.aliyun.com 开通并创建 API key,然后:\n"
            "  export DASHSCOPE_API_KEY=sk-xxx"
        )
    return openai.OpenAI(base_url=config.TEACHER_BASE_URL, api_key=key)


def _gen_one(client: openai.OpenAI, chunk: dict) -> dict | None:
    for attempt in range(3):
        try:
            resp = client.chat.completions.create(
                model=config.TEACHER_MODEL,
                messages=[{"role": "user", "content": _DISTILL_PROMPT.format(
                    source=chunk["source"], code=chunk["text"])}],
                max_tokens=2048, temperature=0.7,
            )
            text = resp.choices[0].message.content.strip()
            if text.startswith("```"):
                text = text.strip("`").removeprefix("json").strip()
            obj = json.loads(text)
            instruction, answer = obj["instruction"].strip(), obj["answer"].strip()
            # 基本质量过滤:指令要具体,答案要含代码
            if len(instruction) < 10 or len(answer) < 50 or "```" not in answer:
                return None
            return {"messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": instruction},
                {"role": "assistant", "content": answer},
            ]}
        except (json.JSONDecodeError, KeyError):
            continue  # 老师输出格式不对,重试
        except openai.RateLimitError:
            time.sleep(5 * (attempt + 1))
        except openai.APIError as e:
            print(f"  API 错误(第{attempt + 1}次): {e}")
            time.sleep(2)
    return None


def build_distill_data(limit: int | None = None, rounds: int = 2):
    """每个代码 chunk 生成 rounds 条不同的蒸馏样本,累积追加后统一合并切分。"""
    chunks = _load_code_chunks()
    if limit:
        chunks = chunks[:limit]
    client = _teacher_client()
    TRAIN_DIR.mkdir(parents=True, exist_ok=True)

    n_existing = sum(1 for _ in open(RAW_FILE, encoding="utf-8")) if RAW_FILE.exists() else 0
    print(f"已有蒸馏样本 {n_existing} 条;本次目标新增 {len(chunks) * rounds} 条")

    new_samples = []
    with open(RAW_FILE, "a", encoding="utf-8") as f:
        for r in range(rounds):
            for i, c in enumerate(chunks, 1):
                s = _gen_one(client, c)
                if s is None:
                    print(f"  [round{r + 1} {i}/{len(chunks)}] {c['source']} -> 跳过(质量/格式不合格)")
                    continue
                f.write(json.dumps(s, ensure_ascii=False) + "\n")
                f.flush()
                new_samples.append(s)
                preview = s["messages"][1]["content"][:50]
                print(f"  [round{r + 1} {i}/{len(chunks)}] {c['source']} -> {preview}")

    print(f"本次新增 {len(new_samples)} 条(老师: {config.TEACHER_MODEL})")
    merge_and_split()
