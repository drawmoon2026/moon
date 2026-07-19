#!/bin/zsh
# 启动本地推理服务(OpenAI 兼容 API,http://localhost:8080/v1)
# 用法: ./scripts/serve.sh
set -e
cd "$(dirname "$0")/.."
exec uv run mlx_lm.server \
  --model mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit \
  --port 8080 \
  --max-tokens 4096
