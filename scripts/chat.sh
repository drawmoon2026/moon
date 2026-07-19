#!/bin/zsh
# 终端里直接和模型对话
# 用法: ./scripts/chat.sh
set -e
cd "$(dirname "$0")/.."
exec uv run mlx_lm.chat --model mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2
