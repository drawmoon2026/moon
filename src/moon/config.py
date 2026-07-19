"""全局配置:路径、模型名、检索参数。"""
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]

# 语料与索引位置
CORPUS_DIR = PROJECT_ROOT / "data" / "corpus"   # 想让 AI 学习的代码/文档放这里(或 index 时指定其他路径)
INDEX_DIR = PROJECT_ROOT / "data" / "index"

# 模型
EMBEDDING_MODEL = "Qwen/Qwen3-Embedding-0.6B"   # 0.6B 索引速度快;追求精度可换 4B
CHAT_BASE_URL = "http://localhost:7070/v1"       # scripts/serve.sh 起的本地服务
CHAT_MODEL = "mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2"

# 分块(cAST:按非空白字符数预算)
MAX_CHUNK_SIZE = 1600
# astchunk 支持的语言,按扩展名映射
AST_LANGUAGES = {
    ".py": "python",
    ".java": "java",
    ".cs": "c_sharp",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".js": "typescript",   # tree-sitter-typescript 可解析绝大多数 JS
    ".jsx": "typescript",
}
# 走文本分块的扩展名(其余未知扩展名一律跳过)
TEXT_EXTENSIONS = {
    ".md", ".txt", ".rst", ".toml", ".yaml", ".yml", ".json",
    ".sh", ".zsh", ".sql", ".go", ".rs", ".c", ".h", ".cpp", ".hpp",
    ".rb", ".swift", ".kt", ".html", ".css", ".vue",
}
SKIP_DIRS = {".git", ".venv", "venv", "node_modules", "__pycache__",
             "dist", "build", ".idea", ".vscode", "data"}
MAX_FILE_BYTES = 2_000_000

# 检索
BM25_TOP_K = 20        # 两路各自召回数
VECTOR_TOP_K = 20
FINAL_TOP_N = 6        # 融合后送入生成的 chunk 数
RRF_K = 60             # Reciprocal Rank Fusion 常数
