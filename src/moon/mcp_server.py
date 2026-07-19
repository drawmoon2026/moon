"""把 moon 检索暴露为 MCP 工具(stdio),供 Qwen Code 等智能体 CLI 调用。

只暴露一个检索工具:工具描述会占用模型上下文,本地模型上下文有限,宜精不宜多。
"""
from fastmcp import FastMCP

mcp = FastMCP("moon-rag")


@mcp.tool
def search_personal_codebase(query: str, top_n: int = 5) -> str:
    """检索用户的个人代码库和文档(BM25+向量混合检索)。

    当问题涉及用户自己的项目、代码实现、个人笔记时使用。
    query 用自然语言或代码标识符均可;返回最相关的片段及其出处(文件:行号)。
    """
    from .retrieval import search
    hits = search(query, top_n=top_n)
    if not hits:
        return "没有检索到相关内容(索引可能为空,可用 `moon index <路径>` 建立)"
    parts = []
    for chunk, _score in hits:
        parts.append(f"### {chunk.ref}\n```\n{chunk.text}\n```")
    return "\n\n".join(parts)


def run():
    mcp.run()  # stdio 传输
