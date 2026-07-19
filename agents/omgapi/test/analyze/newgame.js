/**
 * newgame.js — 一条命令,对一款新游戏从零跑通(无参考答案)。
 *
 * 串起:下载 → 抓 GameInfo → 采集 spin → 分析(布局/赔表/权重/倍率/级联)
 *       → 合成规格 → 答案无关自校验门槛 → 生成算法 → 诚实推演报告。
 * 幂等:已完成的步骤自动跳过(下载/样本已在则不重复)。
 * ⚠️ 采集会真实请求线上 PG 服务器。
 *
 * 用法: node analyze/newgame.js <gid> <gameCode> [目标样本数=800]
 * 例:  node analyze/newgame.js 65 mahjong-ways 800
 */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const [gid, gameCode] = [process.argv[2], process.argv[3]];
const target = parseInt(process.argv[4] || '800', 10);
if (!gid || !gameCode) { console.error('用法: node analyze/newgame.js <gid> <gameCode> [样本数]'); process.exit(1); }
const ROOT = path.join(__dirname, '..');
const sh = (cmd) => { console.log('\n$ ' + cmd); execSync(cmd, { cwd: ROOT, stdio: 'inherit' }); };
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const countSpins = () => ['env/mock/' + gid + '/spin', 'env/mock/' + gid + '/spin-live']
    .reduce((n, d) => n + (exists(d) ? fs.readdirSync(path.join(ROOT, d)).filter(f => f.endsWith('.json')).length : 0), 0);

console.log(`######## 新游戏 ${gid} (${gameCode}) 从零跑通(无参考答案)########`);

// 1) 下载前端
if (!exists(`out/pg/${gid}/gate.json`)) sh(`node download-game.js ${gid} --provider=pg`);
else console.log(`\n[1] 下载:已完成(out/pg/${gid}),跳过`);

// 2) GameInfo(boot 配置)
if (!exists(`env/mock/${gid}/api`)) sh(`node env/capture-gameinfo.js ${gid} ${gameCode}`);
else console.log(`\n[2] GameInfo:已有,跳过`);

// 3) 采集 spin(不足目标才补)
const have = countSpins();
if (have < target) sh(`node analyze/capture-spins.js ${gid} ${target - have} ${gameCode}`);
else console.log(`\n[3] 采集:已有 ${have} 个样本(≥${target}),跳过`);

// 4) 分析 → 规格 → 自校验 → 生成
let validated = true;
try { sh(`node analyze/run.js ${gid}`); }
catch { validated = false; }

// 5) 诚实推演报告
console.log('\n######## 推演报告 ########');
const spec = JSON.parse(fs.readFileSync(path.join(ROOT, 'config', `pg-${gid}.json`), 'utf8'));
const c = spec.completeness || {};
console.log(`游戏:${spec.identity.game_code} | 类型:${spec.identity.type} | ${spec.identity.ways} ways | 布局 ${spec.layout.visible.map(v => v.length).join('/')}`);
console.log(`\n确定性算法(从数据推演 + 数据自校验):`);
console.log(`  赔付/结算:${c.paytable_coverage} 格  ${c.paytable_complete ? '✅ 完整' : '⚠️ 不完整'}`);
console.log(`  级联规则:${spec.cascade.verified_pass_rate === null ? '无此机制(N/A)' : (spec.cascade.verified_pass_rate * 100).toFixed(0) + '% 重建'}`);
console.log(`  布局/倍率/金色wild:${spec.gold_wild.reels.length ? '金色轴 ' + JSON.stringify(spec.gold_wild.reels) : '无金色wild'}`);
console.log(`  自校验门槛:${validated ? '✅ PASS(config 与真实 spin 数据自洽)' : '❌ 未过(见上)'}`);
console.log(`\n黑盒(无法从数据复现,已诚实标注):`);
console.log(`  出目 RNG:真实条带序列是服务端黑盒;生成算法用采样近似,RTP 由 target-ratio 调,非复现`);
if (c.warnings && c.warnings.length) { console.log(`\n不完整项(补样本可消除):`); c.warnings.forEach(w => console.log(`  ⚠️ ${w}`)); }
console.log(`\n核心产物:config/pg-${gid}.json(全程未用任何参考答案)`);
process.exit(validated ? 0 : 1);
