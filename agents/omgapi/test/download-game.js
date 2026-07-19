/**
 * download-game.js — omgapi 智能体「下载前端」硬流程(自包含测试版)
 *
 * 目标:给一个 gameId,直接把前端下载到本地,并用【完整性门槛】判定成败。
 *   - 软流程(omgapi 现状):下到 >0 个文件就算成功 → 残包也报成功
 *   - 硬流程(本脚本):核对 Cocos config 枚举的资源全集,覆盖率不达标 → 判 FAIL,退出码非 0
 *
 * 逻辑改写自 omgapi/tools/download.js,不依赖 omgapi 项目(puppeteer 装在本测试目录)。
 *
 * 用法:
 *   node download-game.js <gameId> [--provider=pg] [--min-coverage=0.98] [--visible]
 *
 * 产出:
 *   out/<provider>/<gameId>/webgame/<host>/...   下载的前端资源
 *   out/<provider>/<gameId>/gate.json            门槛判定证据(硬流程核心产物)
 *   退出码 0 = PASS,非 0 = FAIL
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const puppeteer = require('puppeteer');

const OUT_ROOT = path.join(__dirname, 'out');

// 关键 boot 文件:缺任一 → 游戏无法启动,直接判 FAIL
// (PG 用 Cocos 3.x:index.html + 各 bundle 的 config.*.json / index.*.js,无 application/project.js)
const CRITICAL_PATTERNS = [
    /(^|\/)index\.html$/,
    /assets\/main\/config\.[0-9a-f]+\.json$/,
    /assets\/main\/index\.[0-9a-f]+\.js$/,
];

// ---- 原子写(防中断留半截) ----
function writeFileAtomic(file, buf) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const tmp = file + '.tmp' + process.pid;
    fs.writeFileSync(tmp, buf);
    fs.renameSync(tmp, file);
}
function isComplete(file, expectedSize) {
    try { return fs.statSync(file).size === expectedSize && expectedSize > 0; }
    catch { return false; }
}

// ---- 直接 HTTP 拉(config 补全阶段用) ----
function httpFetch(urlStr, maxRedirects = 5) {
    return new Promise((resolve, reject) => {
        const req = https.get(urlStr, { timeout: 20000, rejectUnauthorized: false }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                res.resume();
                if (maxRedirects <= 0) return reject(new Error('too many redirects'));
                let next;
                try { next = new URL(res.headers.location, urlStr).toString(); }
                catch (e) { return reject(e); }
                return httpFetch(next, maxRedirects - 1).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) { res.resume(); return reject(new Error('HTTP ' + res.statusCode)); }
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => resolve(Buffer.concat(chunks)));
        });
        req.on('error', reject);
        req.on('timeout', () => req.destroy(new Error('timeout')));
    });
}

// ---- 调 InGame API 拿 launch URL ----
function getLaunchUrl(gameId) {
    const body = JSON.stringify({
        app_id: '10013', gameid: String(gameId), token: 'test', lang: 'zh', nick: 'test', cid: 0,
    });
    return new Promise((resolve, reject) => {
        const req = https.request({
            method: 'POST', hostname: 'api.omgapi.cc',
            path: `/api/usr/ingame?trace_id=t${gameId}${Date.now()}`,
            port: 443, timeout: 15000, rejectUnauthorized: false,
            headers: {
                'Content-Type': 'application/json', sign: 'x',
                'Content-Length': Buffer.byteLength(body),
                Origin: 'https://omgapi.cc', Referer: 'https://omgapi.cc/',
            },
        }, (res) => {
            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => {
                try {
                    const j = JSON.parse(Buffer.concat(chunks).toString());
                    if (j.code !== 0) return reject(new Error('InGame ' + j.code + ': ' + j.msg));
                    const u = new URL(j.data.gameurl);
                    resolve({ url: j.data.gameurl, m_host: u.hostname, or_host: u.searchParams.get('or') || null });
                } catch (e) { reject(e); }
            });
        });
        req.on('error', reject);
        req.on('timeout', () => req.destroy(new Error('timeout')));
        req.write(body); req.end();
    });
}

// ---- Cocos 压缩 UUID → 标准 UUID ----
const _b64 = new Array(128).fill(0);
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('').forEach((c, i) => _b64[c.charCodeAt(0)] = i);
const _hex = '0123456789abcdef';
function decompressUuid(s) {
    if (!s || s.length !== 22) return s;
    const r = new Array(36);
    r[0] = s[0]; r[1] = s[1];
    r[8] = '-'; r[13] = '-'; r[18] = '-'; r[23] = '-';
    let j = 2;
    for (let i = 2; i < 22; i += 2) {
        const lhs = _b64[s.charCodeAt(i)], rhs = _b64[s.charCodeAt(i + 1)];
        r[j++] = _hex[lhs >> 2];
        if (j === 8 || j === 13 || j === 18 || j === 23) j++;
        r[j++] = _hex[((lhs & 3) << 2) | (rhs >> 4)];
        if (j === 8 || j === 13 || j === 18 || j === 23) j++;
        r[j++] = _hex[rhs & 0xf];
        if (j === 8 || j === 13 || j === 18 || j === 23) j++;
    }
    return r.join('');
}

// ---- 解析 Cocos config,枚举「真实资源」列表 ----
// 每个真实资源返回一组候选 URL(压缩/解压 UUID 两种形式;native 试多种扩展名)。
// 关键:一个资源只要任一候选 URL 命中就算「有」——所以候选是"或"关系,不能当独立资源计数,
// 否则分母虚高(native ×7 扩展 + import ×2 形式)。omgapi 老逻辑把候选拉平成 URL 集,
// 用作"下载尝试列表"没问题,但当作门槛分母就错了。
function enumerateAssets(configPath, baseDir) {
    if (!fs.existsSync(configPath)) return [];
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const dir = path.dirname(configPath).replace(baseDir, '').replace(/^\//, '');
    const importBase = config.importBase || 'import';
    const nativeBase = config.nativeBase || 'native';
    const assets = [];
    const vi = config.versions?.import || [];
    for (let i = 0; i < vi.length; i += 2) {
        const ref = vi[i], hash = vi[i + 1];
        const cand = [];
        if (typeof ref === 'string') {
            cand.push(`/${dir}/${importBase}/${ref.substring(0, 2).toLowerCase()}/${ref}.${hash}.json`);
        } else if (typeof ref === 'number' && hash) {
            const cmp = config.uuids?.[ref]; if (!cmp) continue;
            const cmpClean = cmp.split('@')[0];
            const full = decompressUuid(cmpClean);
            cand.push(`/${dir}/${importBase}/${cmpClean.substring(0, 2).toLowerCase()}/${cmpClean}.${hash}.json`);
            if (full && full.includes('-')) cand.push(`/${dir}/${importBase}/${full.substring(0, 2).toLowerCase()}/${full}.${hash}.json`);
        }
        if (cand.length) assets.push({ kind: 'import', candidates: cand });
    }
    const vn = config.versions?.native || [];
    const NATIVE_EXTS = ['.png', '.jpg', '.mp3', '.plist', '.atlas', '.bin', '.webp'];
    for (let i = 0; i < vn.length; i += 2) {
        const ref = vn[i], hash = vn[i + 1];
        if (typeof ref !== 'number' || hash === undefined) continue;
        const cmp = config.uuids?.[ref]; if (!cmp) continue;
        const cmpClean = cmp.split('@')[0];
        const full = decompressUuid(cmpClean);
        const cand = [];
        for (const ext of NATIVE_EXTS) cand.push(`/${dir}/${nativeBase}/${cmpClean.substring(0, 2).toLowerCase()}/${cmpClean}.${hash}${ext}`);
        if (full && full.includes('-')) for (const ext of NATIVE_EXTS) cand.push(`/${dir}/${nativeBase}/${full.substring(0, 2).toLowerCase()}/${full}.${hash}${ext}`);
        assets.push({ kind: 'native', candidates: cand });
    }
    return assets;
}

// 扫一款游戏所有 bundle 的 config,汇总真实资源(main / resources / shared-internal 都算)
function allAssets(orDir, gameId) {
    if (!orDir) return [];
    const configs = [];
    (function findConfigs(d) {
        if (!fs.existsSync(d)) return;
        for (const e of fs.readdirSync(d, { withFileTypes: true })) {
            const f = path.join(d, e.name);
            if (e.isDirectory()) findConfigs(f);
            else if (/^config\.[0-9a-f]+\.json$/.test(e.name)) configs.push(f);
        }
    })(orDir);
    const assets = [];
    for (const cfg of configs) assets.push(...enumerateAssets(cfg, orDir));
    return assets;
}

function assetPresent(orDir, asset) {
    return asset.candidates.some(p => {
        const local = path.join(orDir, p.replace(/^\//, ''));
        return fs.existsSync(local) && fs.statSync(local).size > 0;
    });
}

async function main(gameId, opts) {
    const provider = opts.provider;
    console.log(`[${gameId}] provider=${provider}  开始下载...`);
    const launch = await getLaunchUrl(gameId);
    console.log(`[${gameId}] m_host=${launch.m_host}  or_host=${launch.or_host}`);

    const gameOut = path.join(OUT_ROOT, provider, String(gameId));
    const dlBase = path.join(gameOut, 'webgame');
    const mDir = path.join(dlBase, launch.m_host);
    const orDir = launch.or_host ? path.join(dlBase, launch.or_host) : null;
    fs.mkdirSync(mDir, { recursive: true });
    if (orDir) fs.mkdirSync(orDir, { recursive: true });

    // 1) puppeteer 抓 same-host 资源
    const browser = await puppeteer.launch({
        headless: opts.visible ? false : 'new',
        args: ['--no-sandbox', '--ignore-certificate-errors'],
    });
    let saved = 0, skipped = 0;
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 414, height: 896, isMobile: true, hasTouch: true });
        await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
        const seenPaths = new Set();
        const pending = [];
        page.on('response', (res) => {
            let u; try { u = new URL(res.url()); } catch { return; }
            let outDir = null;
            if (u.hostname === launch.m_host) outDir = mDir;
            else if (u.hostname === launch.or_host) outDir = orDir;
            else return;
            const rel = u.pathname.replace(/^\//, '') || 'index.html';
            const localPath = rel.endsWith('/') ? path.join(outDir, rel, 'index.html') : path.join(outDir, rel);
            const key = u.hostname + u.pathname;
            if (seenPaths.has(key) || res.status() !== 200) return;
            seenPaths.add(key);
            pending.push((async () => {
                try {
                    const body = await res.buffer();
                    if (isComplete(localPath, body.length)) { skipped++; return; }
                    writeFileAtomic(localPath, body); saved++;
                } catch { /* 忽略单资源失败,门槛阶段会统计缺失 */ }
            })());
        });
        await page.goto(launch.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
        let prev = 0, stable = 0;
        for (let s = 0; s < 60; s += 3) {
            await new Promise(r => setTimeout(r, 3000));
            const cur = seenPaths.size;
            if (cur === prev) { stable++; if (stable >= 4) break; } else stable = 0;
            prev = cur;
        }
        await Promise.allSettled(pending);
        console.log(`[${gameId}] puppeteer: ${seenPaths.size} 资源 (saved=${saved}, skipped=${skipped})`);

        // 2) 解析 config,按真实资源补全缺失(每个资源试候选 URL,命中一个就停)
        if (orDir) {
            const assets = allAssets(orDir, String(gameId));
            const todo = assets.filter(a => !assetPresent(orDir, a));
            console.log(`[${gameId}] config 枚举 ${assets.length} 个真实资源,缺 ${todo.length},补全中...`);
            let dl = 0, fail = 0;
            const CONCURRENCY = 12; let idx = 0;
            async function worker() {
                while (idx < todo.length) {
                    const a = todo[idx++];
                    let ok = false;
                    for (const p of a.candidates) {              // 候选是"或":命中一个即停
                        const local = path.join(orDir, p.replace(/^\//, ''));
                        try {
                            const buf = await httpFetch(`https://${launch.or_host}${p}`);
                            if (!isComplete(local, buf.length)) writeFileAtomic(local, buf);
                            ok = true; dl++; break;
                        } catch { /* 该变体不存在,试下一个候选 */ }
                    }
                    if (!ok) fail++;
                }
            }
            await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
            console.log(`[${gameId}] config 补全: 命中 ${dl}, 仍缺 ${fail}`);
        }
    } finally {
        await browser.close().catch(() => {});
    }

    // 3) 【完整性门槛】—— 硬流程核心
    return gate(gameId, provider, gameOut, orDir, opts.minCoverage, { m_host: launch.m_host, or_host: launch.or_host });
}

function walkFiles(dir) {
    const out = [];
    (function walk(d) {
        if (!fs.existsSync(d)) return;
        for (const e of fs.readdirSync(d, { withFileTypes: true })) {
            const f = path.join(d, e.name);
            if (e.isDirectory()) walk(f); else out.push(f);
        }
    })(dir);
    return out;
}

function gate(gameId, provider, gameOut, orDir, minCoverage, hosts) {
    // 按真实资源算覆盖率:每个资源只要任一候选变体在盘上就算"有"
    const assets = allAssets(orDir, String(gameId));
    const byKind = { import: [0, 0], native: [0, 0] };  // [present, total]
    const missingSample = [];
    for (const a of assets) {
        const present = assetPresent(orDir, a);
        byKind[a.kind][1]++;
        if (present) byKind[a.kind][0]++;
        else if (missingSample.length < 20) missingSample.push(a.candidates[0]);
    }
    const expectedN = assets.length;
    const presentN = byKind.import[0] + byKind.native[0];
    const missingN = expectedN - presentN;

    const totalFiles = walkFiles(path.join(gameOut, 'webgame'));
    const relFiles = totalFiles.map(f => f.replace(path.join(gameOut, 'webgame'), ''));
    const criticalMissing = CRITICAL_PATTERNS
        .filter(re => !relFiles.some(f => re.test(f)))
        .map(re => re.source);

    const coverage = expectedN === 0 ? null : presentN / expectedN;
    // config 无法枚举时退化:仅查关键文件 + 文件数下限
    const coverageOk = coverage === null ? totalFiles.length >= 20 : coverage >= minCoverage;
    const verdict = (coverageOk && criticalMissing.length === 0) ? 'pass' : 'fail';

    const gateResult = {
        gameId: String(gameId), provider, hosts,
        expected_assets: expectedN,
        present_assets: presentN,
        by_kind: { import: `${byKind.import[0]}/${byKind.import[1]}`, native: `${byKind.native[0]}/${byKind.native[1]}` },
        downloaded_total_files: totalFiles.length,
        missing_count: missingN,
        coverage: coverage === null ? null : Number(coverage.toFixed(4)),
        min_coverage: minCoverage,
        critical_missing: criticalMissing,
        missing_sample: missingSample,
        verdict,
        ts: new Date().toISOString(),
    };
    writeFileAtomic(path.join(gameOut, 'gate.json'), JSON.stringify(gateResult, null, 2));

    const cov = coverage === null ? 'N/A(config未枚举)' : (coverage * 100).toFixed(2) + '%';
    console.log(`\n===== 完整性门槛 [${gameId}] =====`);
    console.log(`  真实资源: ${expectedN}  (import ${gateResult.by_kind.import}, native ${gateResult.by_kind.native})`);
    console.log(`  已下: ${presentN}   缺失: ${missingN}   总文件: ${totalFiles.length}`);
    console.log(`  覆盖率: ${cov}  (门槛 ≥ ${(minCoverage * 100).toFixed(0)}%)`);
    console.log(`  关键文件缺失: ${criticalMissing.length ? criticalMissing.join(', ') : '无'}`);
    console.log(`  判定: ${verdict === 'pass' ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`  证据: ${path.relative(process.cwd(), path.join(gameOut, 'gate.json'))}`);
    return verdict === 'pass';
}

// ---- CLI ----
const args = process.argv.slice(2);
const gameId = args.find(a => /^\d+$/.test(a));
const provider = (args.find(a => a.startsWith('--provider=')) || '--provider=pg').split('=')[1];
const minCoverage = parseFloat((args.find(a => a.startsWith('--min-coverage=')) || '--min-coverage=0.98').split('=')[1]);
const visible = args.includes('--visible');
if (!gameId) {
    console.error('用法: node download-game.js <gameId> [--provider=pg] [--min-coverage=0.98] [--visible]');
    process.exit(1);
}
main(gameId, { provider, minCoverage, visible })
    .then(pass => process.exit(pass ? 0 : 1))
    .catch(e => { console.error(`[${gameId}] ✗ 出错:`, e.message); process.exit(1); });
