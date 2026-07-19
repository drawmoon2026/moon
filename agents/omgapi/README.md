# omgapi 智能体 — 流程化测试 / 调试工作区

这是 moon 养的第一个智能体,负责 **PG 128 款老虎机本地镜像/逆向**(真实项目在 `~/project/drawmoon/omgapi`)。

本目录用于**在正式动手前,先在这里把一款游戏的标准流程走一遍、调试到通**,再落到 omgapi 主项目。

## 核心原则(为什么有这个智能体)

真实项目已有一套极严的标准流水线(`omgapi/NEW-GAME-PIPELINE.md`)和 27 条踩坑记录(`omgapi/PITFALLS.md`)。问题从来不是"没有流程",而是 **AI 执行时跳步、偷懒、重复踩坑**。这个智能体的职责是把流程变成**绕不过去的约束**:

> **机械步骤(采集/verify/analyze 脚本)可以批量;判断检查点必须一款一款过,未过门槛不许进下一步、不许标封板。**

## 目录

- `rules.md` — 智能体硬规则(动手前必须检索;门槛未过必须回滚)。也是 Qwen Code 的 QWEN.md 来源。
- `runs/` — 每款游戏走流程时的工作记录(`runs/<gid>/`:门槛证据、verify 日志、决策)。
- `gates/` — 门槛定义与检查脚本(②强制层,建设中)。

## 用法(当前:①规则+检索层)

```sh
# 检索这款游戏该怎么做(属于哪族、相关的坑、有无现成模板)
MOON_AGENT=omgapi uv run moon search "顶轴 ways 族 新款 封板 模板"
MOON_AGENT=omgapi uv run moon ask "接入 gid 95 majestic-treasures,标准流程第一步做什么?相关的坑有哪些?"
```

在 omgapi 项目里用 Qwen Code 时,`rules.md` 会作为 QWEN.md 强制加载,并通过 MCP 挂上 omgapi 的检索工具。
