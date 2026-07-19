/**
 * infer-reel-weights.js — 从 spin 样本纯脚本反推卷轴权重(不用答案)
 *
 * 原理:每轴(条带 idx ÷ 7)显示 7 个连续条带位置;多次独立 spin 下,
 *   每个符号在该轴出现的频率 ≈ 该轴条带上该符号的权重占比。
 *   用 orl(原始卷轴布局,级联前的新鲜落点)统计最干净。
 *   base 卷轴用 norm 样本;fs 卷轴用 fs* 样本。
 *
 * 产出: analyze/inferred/reel_weights.json(答案无关)
 * 用法: node analyze/infer-reel-weights.js [spin目录]
 */
const fs = require('fs');
const path = require('path');
const { deriveLayout } = require('./lib-layout');

const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '74', 'spin');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));
const _L = deriveLayout(spinDir);            // 布局从数据推导
const ROWS_PER_REEL = _L.rows_per_reel, REELS = _L.num_reels;

// 按类别累计:base(norm) 与 fs(fs*)分开;每轴一张 符号→计数 表
function newCounts() { return Array.from({ length: REELS }, () => ({})); }
const base = newCounts(), fsr = newCounts();
let nBase = 0, nFs = 0;

for (const f of files) {
    let si;
    try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; }
    catch { continue; }
    const board = si && (si.orl || si.rl);
    if (!Array.isArray(board) || board.length < REELS * ROWS_PER_REEL) continue;
    const isFs = /_fs(Trig|Mid|End)?_/.test(f) || /_fs_/.test(f);
    const tgt = isFs ? fsr : base;
    isFs ? nFs++ : nBase++;
    for (let idx = 0; idx < REELS * ROWS_PER_REEL; idx++) {
        const reel = Math.floor(idx / ROWS_PER_REEL);
        const sym = board[idx];
        tgt[reel][sym] = (tgt[reel][sym] || 0) + 1;
    }
}

function toReport(counts) {
    const out = {};
    for (let r = 0; r < REELS; r++) {
        const w = counts[r];
        const total = Object.values(w).reduce((a, b) => a + b, 0) || 1;
        const probs = {};
        for (const s of Object.keys(w).sort((a, b) => a - b)) probs[s] = +(w[s] / total).toFixed(5);
        out['R' + (r + 1)] = { total, weights: w, probabilities: probs };
    }
    return out;
}

const result = {
    description: '从 spin 样本反推的卷轴符号权重(答案无关)',
    base_samples: nBase, fs_samples: nFs,
    reels: toReport(base),
    fs_reels: toReport(fsr),
};

const OUT_DIR = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'reel_weights.json'), JSON.stringify(result, null, 2));

console.log(`\n扫描 ${files.length} 样本(base ${nBase}, fs ${nFs})`);
console.log('base 卷轴符号概率(每轴,符号1..10):');
for (let r = 0; r < REELS; r++) {
    const p = result.reels['R' + (r + 1)].probabilities;
    const row = [];
    for (let s = 1; s <= 10; s++) row.push((p[s] !== undefined ? (p[s] * 100).toFixed(1) : '0.0').padStart(5));
    console.log(`  R${r + 1}: ${row.join(' ')}`);
}
console.log(`\n已写反推参数 → analyze/inferred/reel_weights.json`);
// 纯统计产物,不做答案对照;样本越多概率越准。
