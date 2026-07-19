"""检索 + 生成:把检索到的代码/文档片段交给本地 30B 模型,生成带引用的回答。"""
import openai

from . import config
from .retrieval import search

SYSTEM_PROMPT = """\
你是用户的私人编码助手,熟悉用户的代码库和文档。
下面提供了从用户资料中检索到的片段,每段都标注了出处(文件:起始行-结束行)。
回答规则:
1. 优先依据检索片段回答;引用具体代码或结论时,标注出处,如 (moon/src/app.py:10-42)。
2. 检索片段不足以回答时,明确说明,再基于通用知识补充。
3. 用中文回答,代码保持原语言。"""


def _context(chunks) -> str:
    parts = []
    for i, (chunk, _score) in enumerate(chunks, 1):
        parts.append(f"[片段 {i}] {chunk.ref}\n```\n{chunk.text}\n```")
    return "\n\n".join(parts)


def ask(question: str, stream: bool = True):
    """返回生成器,逐段产出回答文本;首个元素之前会先打印检索来源。"""
    hits = search(question)
    client = openai.OpenAI(base_url=config.CHAT_BASE_URL, api_key="local")
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"检索到的资料片段:\n\n{_context(hits)}\n\n---\n问题:{question}"},
    ]
    try:
        resp = client.chat.completions.create(
            model=config.CHAT_MODEL, messages=messages, stream=stream, max_tokens=2048,
            # Qwen3-Coder 官方推荐采样参数;贪心解码会导致复读和字节级乱码
            temperature=0.7, top_p=0.8, extra_body={"repetition_penalty": 1.05},
        )
    except openai.APIConnectionError as e:
        raise SystemExit(
            f"连不上本地推理服务 {config.CHAT_BASE_URL}\n先在另一个终端运行: ./scripts/serve.sh"
        ) from e
    # 量化模型偶发吐出残缺 UTF-8 字节(解码为 U+FFFD),直接滤掉
    if stream:
        for event in resp:
            delta = event.choices[0].delta.content if event.choices else None
            if delta:
                yield delta.replace("�", "")
    else:
        yield resp.choices[0].message.content.replace("�", "")
    # 附上来源列表
    refs = "\n".join(f"  - {c.ref}" for c, _ in hits)
    yield f"\n\n—— 检索来源 ——\n{refs}\n"
