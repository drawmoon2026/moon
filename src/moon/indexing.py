"""构建检索索引:BM25(词法)+ LanceDB(向量)双路。"""
import json
import re

import bm25s

from . import config
from .chunking import Chunk, chunk_file, iter_files

_IDENT = re.compile(r"[A-Za-z0-9_]+")
_CAMEL = re.compile(r"(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])")


def tokenize(text: str) -> list[str]:
    """代码感知分词:标识符整体保留,同时按 snake_case/camelCase 拆出子词。"""
    tokens: list[str] = []
    for ident in _IDENT.findall(text):
        lower = ident.lower()
        tokens.append(lower)
        parts = [p.lower() for seg in ident.split("_") if seg for p in _CAMEL.split(seg) if p]
        if len(parts) > 1 or (parts and parts[0] != lower):
            tokens.extend(parts)
    return tokens


def collect_chunks(paths: list[str]) -> list[Chunk]:
    chunks: list[Chunk] = []
    from pathlib import Path
    for raw in paths:
        root = Path(raw).expanduser().resolve()
        if not root.exists():
            print(f"警告: 路径不存在,跳过 {root}")
            continue
        for f in iter_files(root):
            source = str(f.relative_to(root) if root.is_dir() else f.name)
            source = f"{root.name}/{source}" if root.is_dir() else source
            chunks.extend(chunk_file(f, source))
    return chunks


def build_index(paths: list[str]) -> int:
    chunks = collect_chunks(paths)
    if not chunks:
        print("没有可索引的内容")
        return 0
    config.index_dir().mkdir(parents=True, exist_ok=True)

    # 1) chunk 元数据(两路索引共用,行号即 id)
    with open(config.index_dir() / "chunks.jsonl", "w", encoding="utf-8") as f:
        for c in chunks:
            f.write(json.dumps(c.__dict__, ensure_ascii=False) + "\n")

    # 2) BM25
    corpus_tokens = [tokenize(c.text) for c in chunks]
    retriever = bm25s.BM25()
    retriever.index(corpus_tokens)
    retriever.save(str(config.index_dir() / "bm25"))

    # 3) 向量(LanceDB)
    import lancedb
    from .embedding import embed_documents
    vectors = embed_documents([c.text for c in chunks])
    db = lancedb.connect(str(config.index_dir() / "lance"))
    db.create_table(
        "chunks",
        data=[{"id": i, "vector": v} for i, v in enumerate(vectors)],
        mode="overwrite",
    )
    print(f"索引完成: {len(chunks)} chunks,来自 {len({c.source for c in chunks})} 个文件")
    return len(chunks)
