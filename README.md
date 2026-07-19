# moon — 个人编码 AI

基于开源模型打造的个人 AI:强项是编码能力,并学习我自己的代码和文档。

技术方案见 [docs/技术方案调研报告.md](docs/技术方案调研报告.md)。

## 硬件与技术栈

- MacBook Pro M5 Max / 36GB 统一内存
- 基座模型:[Qwen3-Coder-30B-A3B-Instruct](https://huggingface.co/mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2)(MoE,4-bit 量化,约 17GB)
- 推理/训练框架:[MLX](https://github.com/ml-explore/mlx-lm)(Apple Silicon 原生)
- 包管理:[uv](https://github.com/astral-sh/uv)

## 路线图

- [x] 技术方案调研
- [x] 阶段 1:本地推理跑通 — M5 Max 实测生成 117.8 tok/s,峰值内存 17.3GB
- [x] 阶段 2:RAG 管线 — AST 分块(cAST)+ BM25/向量混合检索(RRF 融合),回答带出处引用
- [ ] 阶段 3:LoRA 微调 — 学习我的代码风格(先 7B 验证流程,再决定 30B 是否上云)

## 使用

```sh
uv sync                                                        # 安装依赖
uv run hf download mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2  # 下载模型(17GB,一次性)

./scripts/chat.sh    # 终端对话
./scripts/serve.sh   # 启动 OpenAI 兼容 API(http://localhost:7070/v1)
```

服务启动后,任何支持 OpenAI API 的工具(IDE 插件、脚本)都可以指向 `http://localhost:7070/v1` 使用本地模型。

### RAG:让 AI 学习我的代码和文档

```sh
uv run moon index ~/my-project ~/my-notes   # 索引任意目录/文件(默认 data/corpus)
uv run moon search "某个函数怎么实现的"      # 只检索,调试用
uv run moon ask "我的项目里鉴权是怎么做的?"  # 检索 + 生成,回答附出处(需先 serve.sh)
```

管线:AST 结构感知分块(astchunk,函数/类不被切断;文档按段落)→ BM25 词法检索 + Qwen3-Embedding 向量检索双路召回 → RRF 融合 → 30B 模型生成带 `文件:行号` 引用的回答。索引存在 `data/index/`(BM25 + LanceDB),不进 git。
