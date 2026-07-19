/**
 * server.js — 本地镜像后端(测试环境)
 *
 * 一个自签 HTTPS 服务,按 Host 路由,让下载好的 PG 游戏在本地跑起来:
 *   - 静态 host(m_host / static_host)→ 发下载的前端文件(out/<provider>/<gid>/webgame/<host>/)
 *   - API host(api_host)            → 发 boot mock(env/mock/<gid>/api/),spin 暂用占位
 *
 * 配套 ../启动前端.command 用 Chrome --host-resolver-rules 把这些 host 映射到本机 8443。
 * 免 sudo:监听高端口 8443;免 /etc/hosts:靠 Chrome host-resolver-rules。
 *
 * 用法: node server.js [--gid=74] [--port=8443]
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const HERE = __dirname;
const TEST_ROOT = path.join(HERE, '..');

const args = process.argv.slice(2);
const gid = (args.find(a => a.startsWith('--gid=')) || '--gid=74').split('=')[1];
const PORT = parseInt((args.find(a => a.startsWith('--port=')) || '--port=8443').split('=')[1], 10);

const game = JSON.parse(fs.readFileSync(path.join(HERE, 'game.json'), 'utf8'));
const MOCK_DIR = path.join(HERE, 'mock', gid, 'api');
const WEBGAME = path.join(TEST_ROOT, 'out', 'pg', gid, 'webgame');

// MIME
const MIME = {
    '.html': 'text/html', '.js': 'application/javascript', '.json': 'application/json',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
    '.mp3': 'audio/mpeg', '.plist': 'text/xml', '.atlas': 'text/plain', '.bin': 'application/octet-stream',
    '.css': 'text/css', '.wasm': 'application/wasm', '.ico': 'image/x-icon',
};
function mimeOf(p) { return MIME[path.extname(p).toLowerCase()] || 'application/octet-stream'; }

// boot mock:API path → mock 文件(path 的 / 换成 _,去掉末尾 /Get 前的段用后缀匹配)
function findMock(pathname) {
    // 例:/web-api/auth/session/v2/verifyOperatorPlayerSession → web-api_auth_session_v2_verifyOperatorPlayerSession.json
    const base = pathname.replace(/^\//, '').replace(/\/Get$/i, '').replace(/\//g, '_');
    if (!fs.existsSync(MOCK_DIR)) return null;
    const files = fs.readdirSync(MOCK_DIR);
    // 精确前缀匹配(mock 文件名带 _Get 后缀的也要能命中)
    let hit = files.find(f => f.replace(/\.json$/, '') === base)
        || files.find(f => f.replace(/\.json$/, '') === base + '_Get')
        || files.find(f => f.replace(/\.json$/, '').endsWith(base) || f.replace(/\.json$/, '').endsWith(base + '_Get'));
    return hit ? path.join(MOCK_DIR, hit) : null;
}

// CORS:统一由本服务加(镜像里只有这一层),放行凭证 + 回声请求头
function setCors(req, res) {
    const origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', req.headers['access-control-request-headers'] || '*');
}

function serveStatic(host, pathname, res) {
    const rel = decodeURIComponent(pathname.replace(/^\//, '')) || 'index.html';
    let file = path.join(WEBGAME, host, rel);
    if (rel.endsWith('/')) file = path.join(file, 'index.html');
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('404 ' + host + pathname);
        return false;
    }
    res.writeHead(200, { 'content-type': mimeOf(file), 'cache-control': 'no-cache' });
    res.end(fs.readFileSync(file));
    return true;
}

function serveApi(pathname, res) {
    const mockFile = findMock(pathname);
    if (mockFile) {
        const m = JSON.parse(fs.readFileSync(mockFile, 'utf8'));
        const body = typeof m.response.body === 'string' ? m.response.body : JSON.stringify(m.response.body);
        res.writeHead(m.response.status || 200, { 'content-type': 'application/json' });
        res.end(body);
        return;
    }
    // 未捕获的 API(如 Spin / BetHistory):先给通用空成功,别让前端因 500 卡死
    // BetHistory/BetSummary 返空列表(PITFALLS #12);其余 err:null
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ err: null, dt: { list: [], total: 0 } }));
}

const options = {
    key: fs.readFileSync(path.join(HERE, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(HERE, 'cert', 'cert.pem')),
};

const server = https.createServer(options, (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

    const host = (req.headers.host || '').split(':')[0];
    let pathname;
    try { pathname = new URL(req.url, 'https://x').pathname; } catch { pathname = req.url; }

    // 消费 body(POST 的 API 需要,但 mock 回放不看入参)
    req.on('data', () => {});
    req.on('end', () => {
        const isApi = host.startsWith('api.') || pathname.startsWith('/web-api/') || pathname.startsWith('/game-api/');
        if (isApi) return serveApi(pathname, res);
        // 静态:精确 host 命中,否则按已知静态 host 兜底
        if (host === game.m_host || host === game.static_host) return void serveStatic(host, pathname, res);
        // host-resolver-rules 可能把未知 host 也导过来:按路径猜(/<gid>/... 属于 static)
        const fallbackHost = fs.existsSync(path.join(WEBGAME, host)) ? host : game.static_host;
        serveStatic(fallbackHost, pathname, res);
    });
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`\n端口 ${PORT} 已被占用 —— 后端可能已在运行。`);
        console.error(`直接双击「启动前端.command」即可;或先释放端口: lsof -ti :${PORT} | xargs kill`);
        process.exit(1);
    }
    throw e;
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`本地镜像后端已启动: https://127.0.0.1:${PORT}  (gid=${gid} ${game.gameCode})`);
    console.log(`  静态: ${game.m_host} / ${game.static_host}  →  ${path.relative(process.cwd(), WEBGAME)}`);
    console.log(`  API : ${game.api_host}  →  boot mock (${fs.existsSync(MOCK_DIR) ? fs.readdirSync(MOCK_DIR).length : 0} 个)`);
    console.log(`  现在双击「启动前端.command」打开游戏。Ctrl+C 停止。`);
});
