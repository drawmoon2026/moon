#!/bin/bash
# 双击启动:本地镜像后端(静态前端 + boot mock API)
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1
echo "=== omgapi 测试环境 · 后端 ==="
exec node env/server.js "$@"
