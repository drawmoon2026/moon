/**
 * infer-triggers.js — 从 spin 样本纯脚本反推触发/倍率参数(不用答案)
 *
 * 推两样(麻将胡了2):
 *   1) wm 阶梯倍率表 WM_TABLE:每有奖级联步 wm 走一格。按状态分类观测 wm 取值集合:
 *        base 局(st ∈ {1,4})  → 排序后 = base 阶梯
 *        免费局(st ∈ {21,22}) → 排序后 = fs 阶梯
 *   2) 金色变 wild 的每轴发生率:限制性 wild = (rl=0 且 orl≠0) 的格,按轴统计占比。
 *
 * 产出: analyze/inferred/triggers.json(答案无关)
 * 用法: node analyze/infer-triggers.js [spin目录]
 */
const fs = require('fs');
const path = require('path');

const ROWS_PER_REEL = 7, REELS = 5;
const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '74', 'spin');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));

const wmSeen = { base: {}, fs: {} };        // 状态类 → {wm值: 次数}
const stSeen = {};
const restrictedWildByReel = Array(REELS).fill(0);
const cellsByReel = Array(REELS).fill(0);
let steps = 0;

for (const f of files) {
    let si;
    try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; }
    catch { continue; }
    if (!si) continue;
    steps++;
    if (si.st !== undefined) stSeen[si.st] = (stSeen[si.st] || 0) + 1;
    const cls = si.st >= 21 ? 'fs' : 'base';
    if (si.wm !== undefined && si.wm !== null) wmSeen[cls][si.wm] = (wmSeen[cls][si.wm] || 0) + 1;

    if (Array.isArray(si.rl) && Array.isArray(si.orl)) {
        for (let i = 0; i < REELS * ROWS_PER_REEL; i++) {
            const r = Math.floor(i / ROWS_PER_REEL);
            cellsByReel[r]++;
            if (si.rl[i] === 0 && si.orl[i] !== 0) restrictedWildByReel[r]++;   // 限制性 wild = 金色原地变
        }
    }
}

// wm 阶梯:出现次数 ≥ 阈值的 wm 值,升序(过滤偶发噪声)
const MIN_OBS = 3;
const ladder = (cls) => Object.entries(wmSeen[cls])
    .filter(([, c]) => c >= MIN_OBS).map(([v]) => +v).sort((a, b) => a - b);
const wmBase = ladder('base'), wmFs = ladder('fs');

const goldWildRate = {};
for (let r = 0; r < REELS; r++)
    goldWildRate['R' + (r + 1)] = +(restrictedWildByReel[r] / (cellsByReel[r] || 1)).toFixed(5);

const result = {
    description: '从 spin 样本反推的触发/倍率参数(答案无关)',
    steps_scanned: steps,
    state_distribution: stSeen,
    wm_table: { base: wmBase, fs: wmFs },
    gold_to_wild_rate_per_reel: goldWildRate,
    gold_wild_reels: Object.entries(goldWildRate).filter(([, v]) => v > 0.001).map(([k]) => k),
};

const OUT_DIR = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'triggers.json'), JSON.stringify(result, null, 2));

console.log(`\n扫描 ${steps} 步。状态分布: ${JSON.stringify(stSeen)}`);
console.log(`wm 阶梯表(反推):`);
console.log(`  base 局: [${wmBase.join(', ')}]`);
console.log(`  免费局: [${wmFs.join(', ')}]`);
console.log(`金色变 wild 每轴发生率:`);
for (let r = 0; r < REELS; r++) console.log(`  R${r + 1}: ${(goldWildRate['R' + (r + 1)] * 100).toFixed(2)}%`);
console.log(`  → 生效轴: ${result.gold_wild_reels.join(', ')}`);
console.log(`\n已写反推参数 → analyze/inferred/triggers.json`);
// 反推产物,不做答案对照;wm 阶梯/金色轴由 spin 数据直接统计得出。
