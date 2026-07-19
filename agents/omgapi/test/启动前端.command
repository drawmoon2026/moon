#!/bin/bash
# 双击启动:打开游戏。检测不到本地后端会自动拉起(所以双击这一个就够)。
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")" || exit 1

GID="${1:-74}"
PORT="${2:-8443}"

# 后端没起就自动在后台拉起,并等它就绪
if ! curl -sk -o /dev/null "https://127.0.0.1:${PORT}/" 2>/dev/null; then
  echo "本地后端未运行,自动拉起中..."
  nohup node env/server.js --gid="$GID" --port="$PORT" > env/backend.log 2>&1 &
  for i in $(seq 1 20); do
    sleep 0.5
    curl -sk -o /dev/null "https://127.0.0.1:${PORT}/" 2>/dev/null && break
  done
  if ! curl -sk -o /dev/null "https://127.0.0.1:${PORT}/" 2>/dev/null; then
    echo "❌ 后端拉起失败,看 env/backend.log:"; tail -5 env/backend.log; exit 1
  fi
  echo "✅ 后端已就绪 (127.0.0.1:${PORT})"
fi

# 读取该游戏的 host 与启动 URL
read -r M S A URL <<< "$(node -e 'const g=require("./env/game.json");process.stdout.write([g.m_host,g.static_host,g.api_host,g.url].join(" "))')"

# puppeteer 自带的 Chrome for Testing
CHROME="$(node -e 'require("puppeteer").executablePath().then(p=>process.stdout.write(p))')"
if [ ! -x "$CHROME" ]; then
  echo "找不到 Chrome,请先在 test 目录跑 npm i puppeteer"; exit 1
fi

# 所有 demo host 解析到本机后端;忽略自签证书。
# 关键:不要设 iPhone/mobile UA!Cocos 在 mobile/headless UA 下不启动;用 Chrome 默认桌面 UA。
RULES="MAP $M 127.0.0.1:$PORT,MAP $S 127.0.0.1:$PORT,MAP $A 127.0.0.1:$PORT,MAP *.southasiabp-demo.cc 127.0.0.1:$PORT,MAP *.pgsoft-games-demo.cc 127.0.0.1:$PORT,MAP api.omgapi.cc 127.0.0.1:$PORT"

echo "打开游戏 $GID → 本地后端 127.0.0.1:$PORT"
echo "(若弹「浏览器不支持」:点『继续游戏』即可 —— PITFALLS #18)"

# 每次用独立的全新 profile:避免 Chrome 单实例转发(旧实例还活着时,新 URL 会被塞成新标签,越叠越多)。
# 关窗后自动删除该 profile,保持干净。
PROFILE="$(pwd)/env/.chrome-profile-$$"
rm -rf "$(pwd)"/env/.chrome-profile-* 2>/dev/null   # 清理上次被强杀留下的残留 profile
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" \
  --user-data-dir="$PROFILE" \
  --host-resolver-rules="$RULES" \
  --ignore-certificate-errors \
  --disable-features=DnsOverHttps \
  --no-first-run \
  --no-default-browser-check \
  --hide-crash-restore-bubble \
  --disable-session-crashed-bubble \
  --window-size=440,900 \
  "$URL"
