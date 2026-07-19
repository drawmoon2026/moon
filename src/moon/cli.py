"""moon 命令行入口。moon 是"养智能体"的基础设施:
每个智能体(--agent)有独立语料/索引/规则。omgapi 是第一个智能体。
"""
import argparse
import os
import sys


def main():
    parser = argparse.ArgumentParser(prog="moon", description="个人 AI 智能体基础设施")
    parser.add_argument("--agent", default=None,
                        help="切换智能体(默认 default 或环境变量 MOON_AGENT)")
    sub = parser.add_subparsers(dest="command", required=True)

    p_agent = sub.add_parser("agent", help="管理智能体(注册语料、列表)")
    agent_sub = p_agent.add_subparsers(dest="agent_cmd", required=True)
    pa_add = agent_sub.add_parser("add", help="注册/更新一个智能体及其语料路径")
    pa_add.add_argument("name")
    pa_add.add_argument("corpus", nargs="+", help="语料目录或文件(可多个)")
    pa_add.add_argument("--desc", default="", help="智能体描述")
    agent_sub.add_parser("list", help="列出所有智能体")

    p_index = sub.add_parser("index", help="索引代码/文档目录(不传路径则用该智能体已注册的语料)")
    p_index.add_argument("paths", nargs="*", help="要索引的目录或文件")

    p_search = sub.add_parser("search", help="只检索,不生成(调试用)")
    p_search.add_argument("query")

    p_ask = sub.add_parser("ask", help="基于该智能体的语料提问")
    p_ask.add_argument("question")

    sub.add_parser("traindata", help="从已索引语料生成 LoRA 微调数据(需 serve.sh 在运行)")
    sub.add_parser("mcp", help="以 MCP server(stdio)暴露检索工具,供 Qwen Code 等接入")

    p_distill = sub.add_parser("distill", help="用云端老师模型生成蒸馏训练数据")
    p_distill.add_argument("--limit", type=int, default=None, help="只处理前 N 个 chunk(试跑用)")
    p_distill.add_argument("--rounds", type=int, default=2, help="每个 chunk 生成几条样本(默认 2)")

    args = parser.parse_args()

    # --agent 优先于环境变量;在导入 config 前设好,保证索引路径正确
    if args.agent:
        os.environ["MOON_AGENT"] = args.agent
    from . import config
    if args.agent:
        config.AGENT = args.agent

    if args.command == "agent":
        from . import agents
        if args.agent_cmd == "add":
            meta = agents.add(args.name, args.corpus, args.desc)
            print(f"智能体 {meta['name']} 已注册,语料 {len(meta['corpus'])} 项:")
            for c in meta["corpus"]:
                print(f"  - {c}")
        elif args.agent_cmd == "list":
            rows = agents.list_agents()
            if not rows:
                print("还没有智能体。用 moon agent add <名称> <语料路径...> 创建")
            for m in rows:
                idx = config.index_dir(m["name"]) / "chunks.jsonl"
                n = sum(1 for _ in open(idx, encoding="utf-8")) if idx.exists() else 0
                print(f"  {m['name']:<12} {n:>5} chunks  {m.get('description', '')}")
    elif args.command == "index":
        from . import agents
        from .indexing import build_index
        paths = args.paths
        if not paths:
            meta = agents.load(config.AGENT)
            paths = meta.get("corpus", [])
            if not paths:
                raise SystemExit(f"智能体 {config.AGENT} 没有已注册语料,请传路径或先 moon agent add")
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
