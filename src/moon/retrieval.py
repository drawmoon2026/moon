"""混合检索:BM25 + 向量,RRF 融合。"""
import json

import bm25s

from . import config
from .chunking import Chunk
from .indexing import tokenize


def _load_chunks() -> list[Chunk]:
    path = config.index_dir() / "chunks.jsonl"
    if not path.exists():
        raise FileNotFoundError("索引不存在,先运行: moon index <路径...>")
    with open(path, encoding="utf-8") as f:
        return [Chunk(**json.loads(line)) for line in f]


def search(query: str, top_n: int = config.FINAL_TOP_N) -> list[tuple[Chunk, float]]:
    chunks = _load_chunks()

    # BM25 一路
    retriever = bm25s.BM25.load(str(config.index_dir() / "bm25"))
    q_tokens = tokenize(query)
    ranks: dict[int, float] = {}
    if q_tokens:
        k = min(config.BM25_TOP_K, len(chunks))
        ids, _scores = retriever.retrieve([q_tokens], k=k, show_progress=False)
        for rank, idx in enumerate(ids[0]):
            ranks[int(idx)] = ranks.get(int(idx), 0) + 1 / (config.RRF_K + rank + 1)

    # 向量一路
    import lancedb
    from .embedding import embed_query
    db = lancedb.connect(str(config.index_dir() / "lance"))
    table = db.open_table("chunks")
    hits = table.search(embed_query(query)).limit(config.VECTOR_TOP_K).to_list()
    for rank, hit in enumerate(hits):
        idx = int(hit["id"])
        ranks[idx] = ranks.get(idx, 0) + 1 / (config.RRF_K + rank + 1)

    best = sorted(ranks.items(), key=lambda kv: -kv[1])[:top_n]
    return [(chunks[i], score) for i, score in best]
