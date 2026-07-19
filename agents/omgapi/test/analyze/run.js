/**
 * run.js — 一键跑完整条"答案无关"提取流程,汇总关键信息并生成算法。
 *
 * 流程(spin 数据 + JS 逆向 → 关键信息 → 生成算法,全程不碰 omgapi 答案):
 *   1. JS 逆向    deob-strings.js   → 机制清单 mechanics.json
 *   2. boot 配置  infer-config.js   → config.json
 *   3. spin 反推  infer-paytable / reel-weights / triggers / cascade → 各 *.json
 *   4. 汇总       → inferred/keyinfo.json
 *   5. 生成       generate-algorithm.js → generated/algorithm-<gid>.js
 *
 * 用法: node analyze/run.js [gid] [主逻辑js路径]
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const gid = process.argv[2] || '74';
const ROOT = path.join(__dirname, '..');
// 自动发现主逻辑 JS(assets/main/index.<hash>.js);hash 每款不同,不能写死
function findMainJs() {
    if (process.argv[3]) return process.argv[3];
    const base = path.join(ROOT, 'out', 'pg', gid, 'webgame');
    let hit = null;
    (function walk(d) { if (hit || !fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (/assets\/main\/index\.[0-9a-f]+\.js$/.test(p)) hit = p; } })(base);
    return hit ? path.relative(ROOT, hit) : null;
}
const jsPath = findMainJs();
const run = (cmd) => { console.log('\n$ ' + cmd); execSync(cmd, { cwd: ROOT, stdio: 'inherit' }); };

console.log('======== 答案无关提取流程 gid=' + gid + ' ========');
console.log('\n【1/6】JS 逆向 → 机制' + (jsPath ? ` (${path.basename(jsPath)})` : ''));
if (jsPath) { try { run(`node analyze/deob-strings.js "${jsPath}"`); } catch { console.log('  (JS 逆向失败:混淆变体不同)'); } }
else console.log('  (未找到主逻辑 JS,跳过)');

console.log('\n【2/6】boot 配置');
run(`node analyze/infer-config.js ${gid}`);

// spin 目录:拷来的样本在 spin/,自采的在 spin-live/;哪个有用哪个
const spinCands = [path.join(ROOT, 'env', 'mock', gid, 'spin'), path.join(ROOT, 'env', 'mock', gid, 'spin-live')];
const spinDir = spinCands.find(d => fs.existsSync(d) && fs.readdirSync(d).some(f => f.endsWith('.json')));
if (!spinDir) { console.error(`没有 ${gid} 的 spin 样本(env/mock/${gid}/spin 或 spin-live)`); process.exit(1); }
console.log('\n【3/6】spin 反推  (样本: ' + path.relative(ROOT, spinDir) + ')');
for (const s of ['infer-paytable', 'infer-reel-weights', 'infer-triggers', 'infer-cascade'])
    run(`node analyze/${s}.js "${spinDir}"`);

console.log('\n【4/6】合成游戏规格(核心产物)');
run(`node analyze/build-config.js ${gid}`);

console.log('\n【5/6】答案无关自校验门槛(config 必须与数据自洽)');
try { run(`node analyze/validate.js ${gid} "${spinDir}"`); }
catch { console.log('  ❌ 自校验未过 —— config 与 spin 数据不符,不应放行下游。'); process.exitCode = 1; }
const IN = path.join(__dirname, 'inferred');
const rd = (n) => { try { return JSON.parse(fs.readFileSync(path.join(IN, n), 'utf8')); } catch { return null; } };
console.log('\n【6/6】生成算法(引擎读规格)');
run(`node analyze/generate-algorithm.js ${gid}`);

console.log('\n======== 完成。关键信息来源(全部答案无关)========');
console.log('  机制: 客户端 JS 反混淆   | 配置: GameInfo boot   | 数值: spin 样本反推');
console.log('  核心产物: config/pg-' + gid + '.json (游戏规格)');
console.log('  下游产物: generated/algorithm-' + gid + '.js (通用引擎 + 规格)');
