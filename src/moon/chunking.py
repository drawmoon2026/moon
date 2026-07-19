"""把文件切成检索用的 chunk。

代码文件走 AST 结构感知分块(cAST 方法,astchunk 实现),
保证函数/类不被从中间切断;其他文本按空行边界贪心合并。
"""
from dataclasses import dataclass
from pathlib import Path

from astchunk import ASTChunkBuilder

from . import config


@dataclass
class Chunk:
    text: str
    source: str        # 相对路径或绝对路径字符串
    start_line: int    # 1-based
    end_line: int

    @property
    def ref(self) -> str:
        return f"{self.source}:{self.start_line}-{self.end_line}"


_builders: dict[str, ASTChunkBuilder] = {}


def _builder(language: str) -> ASTChunkBuilder:
    if language not in _builders:
        _builders[language] = ASTChunkBuilder(
            max_chunk_size=config.MAX_CHUNK_SIZE,
            language=language,
            metadata_template="default",
        )
    return _builders[language]


def _chunk_code(text: str, source: str, language: str) -> list[Chunk]:
    chunks = []
    for c in _builder(language).chunkify(text):
        meta = c["metadata"]
        content = c["content"]
        if not content.strip():
            continue
        chunks.append(Chunk(
            text=content,
            source=source,
            start_line=meta["start_line_no"] + 1,
            end_line=meta["end_line_no"] + 1,
        ))
    return chunks


def _chunk_text(text: str, source: str) -> list[Chunk]:
    """按空行分段,贪心合并到 MAX_CHUNK_SIZE(按非空白字符数,与 cAST 一致)。"""
    lines = text.splitlines()
    blocks: list[tuple[int, int, str]] = []  # (start, end, text) 1-based
    start = None
    for i, line in enumerate(lines, 1):
        if line.strip():
            if start is None:
                start = i
        elif start is not None:
            blocks.append((start, i - 1, "\n".join(lines[start - 1:i - 1])))
            start = None
    if start is not None:
        blocks.append((start, len(lines), "\n".join(lines[start - 1:])))

    def nws(s: str) -> int:
        return sum(1 for ch in s if not ch.isspace())

    chunks: list[Chunk] = []
    cur: list[tuple[int, int, str]] = []
    cur_size = 0
    for b in blocks:
        b_size = nws(b[2])
        if cur and cur_size + b_size > config.MAX_CHUNK_SIZE:
            chunks.append(Chunk("\n\n".join(x[2] for x in cur), source, cur[0][0], cur[-1][1]))
            cur, cur_size = [], 0
        cur.append(b)
        cur_size += b_size
    if cur:
        chunks.append(Chunk("\n\n".join(x[2] for x in cur), source, cur[0][0], cur[-1][1]))
    return chunks


def chunk_file(path: Path, source: str) -> list[Chunk]:
    try:
        text = path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, OSError):
        return []
    if not text.strip():
        return []
    suffix = path.suffix.lower()
    if suffix in config.AST_LANGUAGES:
        try:
            return _chunk_code(text, source, config.AST_LANGUAGES[suffix])
        except Exception:
            return _chunk_text(text, source)  # 语法解析失败时退化为文本分块
    if suffix in config.TEXT_EXTENSIONS:
        return _chunk_text(text, source)
    return []


def iter_files(root: Path):
    """遍历待索引文件,跳过隐藏目录、依赖目录和超大文件。"""
    if root.is_file():
        yield root
        return
    for p in sorted(root.rglob("*")):
        if not p.is_file():
            continue
        if any(part in config.SKIP_DIRS or part.startswith(".") for part in p.relative_to(root).parts[:-1]):
            continue
        if p.name.startswith("."):
            continue
        if p.stat().st_size > config.MAX_FILE_BYTES:
            continue
        yield p
