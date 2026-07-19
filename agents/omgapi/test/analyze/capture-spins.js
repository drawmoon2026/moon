/**
 * capture-spins.js — 自主采集真实 spin 样本(不依赖 omgapi)。
 *
 * 会话链(纯 HTTP,自己重实现):
 *   games API 拿真 token → ingame(真token) 拿 gameurl → verify(otk/cp/os) 拿 atk
 *   → 反复 POST Spin(服务端按会话推进回合:base→级联→免费局)→ 逐个记录。
 *
 * ⚠️ 会真实请求线上 PG 服务器。默认小量(30),仅验证链路;上量前请评估。
 * 用法: node analyze/capture-spins.js [gid] [次数] [gameCode]
 * 产出: env/mock/<gid>/spin-live/<n>_<type>_cs_tb_tw_<sid>.json(与拷来的样本同格式)
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

const gid = process.argv[2] || '74';
const COUNT = Math.min(parseInt(process.argv[3] || '30', 10), 200);   // 硬上限 200,防误上量
const gameCode = process.argv[4] || 'mahjong-ways-two';

function req(method, host, p, body, headers) {
    return new Promise((res, rej) => {
        const data = body ? (typeof body === 'string' ? body : JSON.stringify(body)) : null;
        const r = https.request({ method, hostname: host, path: p, port: 443, timeout: 15000, rejectUnauthorized: false,
            headers: { ...(data ? { 'Content-Length': Buffer.byteLength(data) } : {}), ...headers } },
            x => { let d = ''; x.on('data', c => d += c); x.on('end', () => res({ status: x.statusCode, body: d })); });
        r.on('error', rej); r.on('timeout', () => { r.destroy(); rej(new Error('timeout')); });
        if (data) r.write(data); r.end();
    });
}
const form = (o) => Object.entries(o).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&');
const PORTAL = { Origin: 'https://omgapi.cc', Referer: 'https://omgapi.cc/' };

async function getSession() {
    const g = await req('GET', 'api.omgapi.cc', '/api/v1/pg/live-api/games', null, PORTAL);
    const token = JSON.parse(g.body).data.token;
    const ig = await req('POST', 'api.omgapi.cc', '/api/usr/ingame?trace_id=t' + Date.now(),
        { app_id: '10013', gameid: gid, token, lang: 'zh', nick: 'demo', cid: 0 }, { 'Content-Type': 'application/json', sign: 'x', ...PORTAL });
    const u = new URL(JSON.parse(ig.body).data.gameurl);
    const P = Object.fromEntries(u.searchParams);
    const gameHeaders = { 'Content-Type': 'application/x-www-form-urlencoded', Origin: `https://${P.__refer}`, Referer: `https://${P.__refer}/` };
    const vr = await req('POST', P.ao, '/web-api/auth/session/v2/verifyOperatorPlayerSession?traceId=V' + Date.now(),
        form({ cp: P.op, btt: P.btt || '1', vc: '2', pf: '5', l: P.l || 'zh', gi: P.gi, os: P.ops, otk: P.ot }), gameHeaders);
    const atk = JSON.parse(vr.body).dt.tk;
    if (!atk) throw new Error('拿不到 atk: ' + vr.body.slice(0, 120));
    return { atk, apiHost: P.ao, gameHeaders, cs: (P.cs || '0.02'), ml: (P.ml || '10') };
}

function typeOf(si) {
    if (si.st >= 21 || si.nst >= 21) return si.nst === 21 && si.st < 21 ? 'fsTrig' : (si.nst < 21 ? 'fsEnd' : 'fsMid');
    return 'norm';
}

(async () => {
    console.log(`采集 gid=${gid} ${gameCode},计划 ${COUNT} 次(小量试跑,真实请求线上服务器)...`);
    const s = await getSession();
    console.log('会话就绪 atk len', s.atk.length, '| api', s.apiHost);
    const outDir = path.join(__dirname, '..', 'env', 'mock', gid, 'spin-live');
    fs.mkdirSync(outDir, { recursive: true });
    let ok = 0;
    for (let i = 0; i < COUNT; i++) {
        const bodyObj = { cs: '0.02', ml: '10', sn: '1', id: '0', ss: '[]', wk: '0_C', btt: '1', atk: s.atk };
        let sp;
        try { sp = await req('POST', s.apiHost, `/game-api/${gameCode}/v2/Spin?traceId=S${Date.now()}${i}`, form(bodyObj), s.gameHeaders); }
        catch (e) { console.log(`  [${i}] 请求失败: ${e.message}`); continue; }
        let j; try { j = JSON.parse(sp.body); } catch { continue; }
        if (!j.dt || !j.dt.si) { console.log(`  [${i}] 无 si: ${JSON.stringify(j.err)}`); continue; }
        const si = j.dt.si;
        const envelope = { request: { method: 'POST', url: `https://${s.apiHost}/game-api/${gameCode}/v2/Spin`, body: bodyObj },
            response: { status: sp.status, body: j }, captured_at: 'capture-spins' };
        const nn = String(i).padStart(8, '0');
        const fname = `${nn}_${typeOf(si)}_cs${si.cs}_tb${si.tb || 0}_tw${si.tw}_${si.sid || si.psid}.json`;
        fs.writeFileSync(path.join(outDir, fname), JSON.stringify(envelope));
        ok++;
        if (i % 10 === 0) process.stdout.write(`  ${i}/${COUNT}\r`);
    }
    console.log(`\n✅ 采集完成:${ok}/${COUNT} 个真实样本 → env/mock/${gid}/spin-live/`);
})().catch(e => { console.error('采集出错:', e.message); process.exit(1); });
