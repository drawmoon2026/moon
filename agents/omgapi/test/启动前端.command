#!/bin/bash
# 双击启动:用 Chrome 打开游戏,所有 demo host 映射到本地后端(免 sudo / 免改 hosts)
cd "$(dirname "$0")" || exit 1

GID="${1:-74}"
PORT="${2:-8443}"

# 后端没起就提示(前端必须配合后端)
if ! curl -sk -o /dev/null "https://127.0.0.1:${PORT}/" 2>/dev/null; then
  echo "⚠️  本地后端 127.0.0.1:${PORT} 没响应 —— 请先双击「启动后端.command」"
  echo "    (继续尝试打开,若空白请起后端后重试)"
fi

# 读取该游戏的 host 与启动 URL(node 输出 4 个空格分隔字段)
read -r M S A URL <<< "$(node -e 'const g=require("./env/game.json");process.stdout.write([g.m_host,g.static_host,g.api_host,g.url].join(" "))')"

# puppeteer 自带的 Chrome for Testing
CHROME="$(node -e 'require("puppeteer").executablePath().then(p=>process.stdout.write(p))')"
if [ ! -x "$CHROME" ]; then
  echo "找不到 Chrome,请先在 test 目录跑 npm i puppeteer"; exit 1
fi

# 把游戏用到的所有 host 解析到本机后端端口;忽略自签证书
# 关键:不要设 iPhone/mobile UA!Cocos 在 mobile/headless UA 下不启动;用 Chrome 默认桌面 UA。
RULES="MAP $M 127.0.0.1:$PORT,MAP $S 127.0.0.1:$PORT,MAP $A 127.0.0.1:$PORT,MAP *.southasiabp-demo.cc 127.0.0.1:$PORT,MAP *.pgsoft-games-demo.cc 127.0.0.1:$PORT,MAP api.omgapi.cc 127.0.0.1:$PORT"

echo "打开游戏 $GID → 本地后端 127.0.0.1:$PORT"
echo "(若弹「浏览器不支持」:点『继续游戏』即可 —— PITFALLS #18)"
exec "$CHROME" \
  --user-data-dir="$(pwd)/env/.chrome-profile" \
  --host-resolver-rules="$RULES" \
  --ignore-certificate-errors \
  --disable-features=DnsOverHttps \
  --window-size=440,900 \
  "$URL"
