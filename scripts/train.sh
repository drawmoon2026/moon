#!/bin/zsh
# LoRA 微调本地 30B 模型(先运行 moon traindata 生成 data/train)
# 用法: ./scripts/train.sh [迭代步数,默认 200]
# 注意: 训练前请停掉 serve.sh 腾出内存;实测峰值约 19.3GB
set -e
cd "$(dirname "$0")/.."
ITERS=${1:-200}
exec uv run mlx_lm.lora \
  --model mlx-community/Qwen3-Coder-30B-A3B-Instruct-4bit-dwq-v2 \
  --train --data data/train \
  --fine-tune-type lora \
  --batch-size 1 --num-layers 8 --iters "$ITERS" \
  --max-seq-length 2048 --grad-checkpoint \
  --adapter-path models/adapters/qwen3-coder-30b-lora \
  --steps-per-report 10 --val-batches 1
