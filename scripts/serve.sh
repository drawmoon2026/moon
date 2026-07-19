#!/bin/zsh
# 启动本地推理服务(OpenAI 兼容 API,http://localhost:7070/v1)
# 用法: ./scripts/serve.sh                # 原始基座模型
#       ADAPTER=1 ./scripts/serve.sh     # 挂载微调后的 LoRA 适配器
set -e
cd "$(dirname "$0")/.."
ADAPTER_ARGS=()
if [[ -n "$ADAPTER" ]]; then
  ADAPTER_ARGS=(--adapter-path models/adapters/qwen3-coder-30b-lora)
fi
exec uv run mlx_lm.server \
  --model mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2 \
  --port 7070 \
  --max-tokens 4096 \
  "${ADAPTER_ARGS[@]}"
