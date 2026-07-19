"""向量编码:Qwen3-Embedding,跑在 Apple Silicon GPU(MPS)上。"""
from functools import lru_cache

from . import config


@lru_cache(maxsize=1)
def _model():
    import torch
    from sentence_transformers import SentenceTransformer
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    return SentenceTransformer(config.EMBEDDING_MODEL, device=device)


def embed_documents(texts: list[str]) -> list[list[float]]:
    embs = _model().encode(
        texts, batch_size=16, normalize_embeddings=True, show_progress_bar=len(texts) > 64
    )
    return [e.tolist() for e in embs]


def embed_query(text: str) -> list[float]:
    # Qwen3-Embedding 要求查询侧加检索指令前缀(prompt_name="query"),文档侧不加
    return _model().encode([text], prompt_name="query", normalize_embeddings=True)[0].tolist()
