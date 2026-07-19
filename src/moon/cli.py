"""moon 命令行入口: moon index / moon search / moon ask"""
import argparse
import sys


def main():
    parser = argparse.ArgumentParser(prog="moon", description="个人编码 AI")
    sub = parser.add_subparsers(dest="command", required=True)

    p_index = sub.add_parser("index", help="索引代码/文档目录")
    p_index.add_argument("paths", nargs="*", help="要索引的目录或文件,默认 data/corpus")

    p_search = sub.add_parser("search", help="只检索,不生成(调试用)")
    p_search.add_argument("query")

    p_ask = sub.add_parser("ask", help="基于你的代码/文档提问")
    p_ask.add_argument("question")

    sub.add_parser("traindata", help="从已索引语料生成 LoRA 微调数据(需 serve.sh 在运行)")

    sub.add_parser("mcp", help="以 MCP server(stdio)方式暴露检索工具,供 Qwen Code 等接入")

    p_distill = sub.add_parser("distill", help="用云端老师模型(Qwen3-Coder-480B)生成蒸馏训练数据")
    p_distill.add_argument("--limit", type=int, default=None, help="只处理前 N 个 chunk(试跑用)")
    p_distill.add_argument("--rounds", type=int, default=2, help="每个 chunk 生成几条样本(默认 2)")

    args = parser.parse_args()

    if args.command == "index":
        from . import config
        from .indexing import build_index
        paths = args.paths or [str(config.CORPUS_DIR)]
        build_index(paths)
    elif args.command == "search":
        from .retrieval import search
        for chunk, score in search(args.query):
            print(f"\n=== {chunk.ref}  (rrf={score:.4f}) ===")
            text = chunk.text
            print(text[:500] + ("…" if len(text) > 500 else ""))
    elif args.command == "distill":
        from .distill import build_distill_data
        build_distill_data(limit=args.limit, rounds=args.rounds)
    elif args.command == "mcp":
        from .mcp_server import run
        run()
    elif args.command == "traindata":
        from .traindata import build_traindata
        build_traindata()
    elif args.command == "ask":
        from .rag import ask
        for piece in ask(args.question):
            sys.stdout.write(piece)
            sys.stdout.flush()
        print()


if __name__ == "__main__":
    main()
