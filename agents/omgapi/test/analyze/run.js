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

// spin 目录:拷来的样本在 spin/,自采的在 spin-live/;哪个有用哪个(step1 的 parse-structure 也要用)
const spinCands = [path.join(ROOT, 'env', 'mock', gid, 'spin'), path.join(ROOT, 'env', 'mock', gid, 'spin-live')];
const spinDir = spinCands.find(d => fs.existsSync(d) && fs.readdirSync(d).some(f => f.endsWith('.json')));
if (!spinDir) { console.error(`没有 ${gid} 的 spin 样本(env/mock/${gid}/spin 或 spin-live)`); process.exit(1); }
const spinRel = path.relative(ROOT, spinDir);

// inferred/ 是每次运行的临时产物区,多款游戏共用;清掉上一款的赔表/结构残留,避免串味。
const INF = path.join(__dirname, 'inferred');
for (const f of ['paytable_from_js.json', 'paytable_from_lines.json', 'paytable.json', 'structure.json'])
    try { fs.unlinkSync(path.join(INF, f)); } catch {}

console.log('======== 答案无关提取流程 gid=' + gid + ' ========');
// 【1】JS 深度反混淆链:混淆JS → 清晰代码 → 拆模块 → 赔表(执行式)+ 结构(模块名特性)。
// 赔表/机制的信息来源是 JS(基石);spin 数据在后面做交叉验证。混淆变体失败则整链退回 spin 反推。
const cleanJs = `clean/pg-${gid}.clean.js`;
console.log('\n【1/6】JS 深度反混淆 → 清晰代码 → 拆模块 → 赔表/结构' + (jsPath ? ` (${path.basename(jsPath)})` : ''));
if (jsPath) {
    try {
        run(`node analyze/deob-clean.js "${jsPath}" "${cleanJs}"`);
        run(`node analyze/split-modules.js "${cleanJs}" "clean/pg-${gid}"`);
        try { run(`node analyze/extract-paytable-js.js "${cleanJs}"`); }
        catch { console.log('  (JS 赔表提取失败:模块结构不同,退回 spin 反推)'); }
        try { run(`node analyze/parse-structure.js "${cleanJs}" "${spinRel}"`); }
        catch { console.log('  (结构解析失败)'); }
    } catch {
        console.log('  (深度反混淆失败:混淆变体不同,退回旧字符串反混淆 + spin 反推)');
        try { run(`node analyze/deob-strings.js "${jsPath}"`); } catch {}
    }
} else console.log('  (未找到主逻辑 JS,跳过 JS 逆向)');

console.log('\n【2/6】boot 配置');
run(`node analyze/infer-config.js ${gid}`);
console.log('\n【3/6】spin 反推(交叉验证 JS 赔表 + 反推数值)  (样本: ' + spinRel + ')');
for (const s of ['infer-paytable', 'infer-reel-weights', 'infer-triggers', 'infer-cascade'])
    run(`node analyze/${s}.js "${spinDir}"`);
// 线号游戏(如 39):赔表不在 JS,从服务器 spin 消息(wp/rwsp)反推;ways 游戏自动跳过。
try { run(`node analyze/extract-paytable-lines.js "${spinDir}"`); } catch { console.log('  (线号赔表提取失败)'); }

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
