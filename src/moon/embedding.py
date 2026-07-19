"""向量编码:Qwen3-Embedding,跑在 Apple Silicon GPU(MPS)上。

MPS 显存有限且不会自动在批次间释放,所以:限制序列长度 + 小批次 + 每批清缓存,
避免大文档(如长 HTML)一次性撑爆显存。
"""
from functools import lru_cache

from . import config

# chunk 上限约 1600 非空白字符,1024 token 足够覆盖;超长截断而非 OOM
_MAX_SEQ_LEN = 1024
_ENCODE_BATCH = 8


@lru_cache(maxsize=1)
def _model():
    import torch
    from sentence_transformers import SentenceTransformer
    device = "mps" if torch.backends.mps.is_available() else "cpu"
    m = SentenceTransformer(config.EMBEDDING_MODEL, device=device)
    m.max_seq_length = min(m.max_seq_length, _MAX_SEQ_LEN)
    return m


def _empty_cache():
    try:
        import torch
        if torch.backends.mps.is_available():
            torch.mps.empty_cache()
    except Exception:
        pass


def embed_documents(texts: list[str]) -> list[list[float]]:
    model = _model()
    out: list[list[float]] = []
    show = len(texts) > 64
    for i in range(0, len(texts), _ENCODE_BATCH):
        batch = texts[i:i + _ENCODE_BATCH]
        embs = model.encode(batch, batch_size=_ENCODE_BATCH, normalize_embeddings=True,
                            show_progress_bar=False)
        out.extend(e.tolist() for e in embs)
        _empty_cache()
        if show:
            print(f"  向量化 {min(i + _ENCODE_BATCH, len(texts))}/{len(texts)}", end="\r")
    if show:
        print()
    return out


def embed_query(text: str) -> list[float]:
    # Qwen3-Embedding 要求查询侧加检索指令前缀(prompt_name="query"),文档侧不加
    return _model().encode([text], prompt_name="query", normalize_embeddings=True)[0].tolist()
