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
const jsPath = process.argv[3] ||
    `out/pg/${gid}/webgame/static.southasiabp-demo.cc/${gid}/assets/main/index.74c8a.js`;
const ROOT = path.join(__dirname, '..');
const run = (cmd) => { console.log('\n$ ' + cmd); execSync(cmd, { cwd: ROOT, stdio: 'inherit' }); };

console.log('======== 答案无关提取流程 gid=' + gid + ' ========');
console.log('\n【1/5】JS 逆向 → 机制');
try { run(`node analyze/deob-strings.js "${jsPath}"`); }
catch { console.log('  (JS 逆向跳过:路径不存在或混淆变体不同)'); }

console.log('\n【2/5】boot 配置');
run(`node analyze/infer-config.js ${gid}`);

console.log('\n【3/5】spin 反推');
for (const s of ['infer-paytable', 'infer-reel-weights', 'infer-triggers', 'infer-cascade'])
    run(`node analyze/${s}.js`);

console.log('\n【4/6】合成游戏规格(核心产物)');
run(`node analyze/build-config.js ${gid}`);

console.log('\n【5/6】答案无关自校验门槛(config 必须与数据自洽)');
try { run(`node analyze/validate.js ${gid}`); }
catch { console.log('  ❌ 自校验未过 —— config 与 spin 数据不符,不应放行下游。'); process.exitCode = 1; }
const IN = path.join(__dirname, 'inferred');
const rd = (n) => { try { return JSON.parse(fs.readFileSync(path.join(IN, n), 'utf8')); } catch { return null; } };
console.log('\n【6/6】生成算法(引擎读规格)');
run(`node analyze/generate-algorithm.js ${gid}`);

console.log('\n======== 完成。关键信息来源(全部答案无关)========');
console.log('  机制: 客户端 JS 反混淆   | 配置: GameInfo boot   | 数值: spin 样本反推');
console.log('  核心产物: config/pg-' + gid + '.json (游戏规格)');
console.log('  下游产物: generated/algorithm-' + gid + '.js (通用引擎 + 规格)');
