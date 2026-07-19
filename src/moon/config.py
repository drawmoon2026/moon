"""全局配置:路径、模型名、检索参数。"""
import os
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]

# 智能体(agent):moon 是"养智能体"的基础设施,每个智能体有独立语料/索引/规则。
# 用 --agent 参数或 MOON_AGENT 环境变量切换;默认 default。
AGENT = os.environ.get("MOON_AGENT", "default")
AGENTS_DIR = PROJECT_ROOT / "data" / "agents"


def agent_dir(agent: str = None) -> Path:
    return AGENTS_DIR / (agent or AGENT)


def index_dir(agent: str = None) -> Path:
    return agent_dir(agent) / "index"


# 兼容旧接口(单智能体时代);运行时按当前 AGENT 解析
CORPUS_DIR = PROJECT_ROOT / "data" / "corpus"   # 默认放置想索引的代码/文档(也可 index 时指定其他路径)
INDEX_DIR = index_dir()

# 模型
EMBEDDING_MODEL = "Qwen/Qwen3-Embedding-0.6B"   # 0.6B 索引速度快;追求精度可换 4B
CHAT_BASE_URL = "http://localhost:7070/v1"       # scripts/serve.sh 起的本地服务
CHAT_MODEL = "mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2"

# 蒸馏老师模型(阿里 DashScope,OpenAI 兼容模式;API key 走环境变量 DASHSCOPE_API_KEY)
# 可用 MOON_TEACHER_BASE_URL / MOON_TEACHER_MODEL 覆盖(换 DeepSeek 等其他老师,或本地联调)
import os as _os
TEACHER_BASE_URL = _os.environ.get("MOON_TEACHER_BASE_URL", "https://dashscope.aliyuncs.com/compatible-mode/v1")
TEACHER_MODEL = _os.environ.get("MOON_TEACHER_MODEL", "qwen3-coder-480b-a35b-instruct")

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
