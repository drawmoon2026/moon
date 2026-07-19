#!/bin/zsh
# 启动本地推理服务(OpenAI 兼容 API,http://localhost:7070/v1)
# 推理引擎:mlx-openai-server(mlx_lm.server 在长提示 + prompt cache 下有崩溃 bug,
# 且工具调用解析弱;此实现自带 qwen3_coder 工具解析器,适配智能体 CLI)
# 用法: ./scripts/serve.sh                # 原始基座模型
#       ADAPTER=1 ./scripts/serve.sh     # 挂载微调后的 LoRA 适配器
set -e
cd "$(dirname "$0")/.."
ADAPTER_ARGS=()
if [[ -n "$ADAPTER" ]]; then
  ADAPTER_ARGS=(--lora-paths models/adapters/qwen3-coder-30b-lora)
fi
exec mlx-openai-server launch \
  --model-path mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2 \
  --model-type lm \
  --port 7070 \
  --context-length 32768 \
  --tool-call-parser qwen3_coder \
  "${ADAPTER_ARGS[@]}"
