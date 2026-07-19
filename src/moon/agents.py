"""智能体注册表:moon 是"养智能体"的基础设施,每个智能体有独立语料/索引/规则。

一个 agent 记录:名称、描述、语料路径列表。数据落在 data/agents/<name>/agent.json,
索引落在 data/agents/<name>/index/。`moon --agent <name> ...` 切换当前智能体。
"""
import json

from . import config


def _meta_path(agent: str):
    return config.agent_dir(agent) / "agent.json"


def load(agent: str) -> dict:
    p = _meta_path(agent)
    if not p.exists():
        return {"name": agent, "description": "", "corpus": []}
    return json.loads(p.read_text(encoding="utf-8"))


def save(agent: str, meta: dict):
    config.agent_dir(agent).mkdir(parents=True, exist_ok=True)
    _meta_path(agent).write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")


def list_agents() -> list[dict]:
    if not config.AGENTS_DIR.exists():
        return []
    out = []
    for d in sorted(config.AGENTS_DIR.iterdir()):
        if d.is_dir() and (d / "agent.json").exists():
            out.append(load(d.name))
    return out


def add(agent: str, corpus: list[str], description: str = ""):
    from pathlib import Path
    meta = load(agent)
    if description:
        meta["description"] = description
    existing = set(meta.get("corpus", []))
    for c in corpus:
        existing.add(str(Path(c).expanduser().resolve()))
    meta["corpus"] = sorted(existing)
    save(agent, meta)
    return meta
