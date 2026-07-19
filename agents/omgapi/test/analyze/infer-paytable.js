/**
 * infer-paytable.js — 从 spin 样本纯脚本反推赔表 PAYTABLE(不用 AI)
 *
 * 原理(麻将胡了2 = ways + tumble):
 *   每个中奖符号 s:
 *     wp[s]   = 中奖格的条带 idx 列表     → 位置 ÷ 7 = 轴号,覆盖的轴数 = N(几连)
 *     ways    = 各轴出现次数的乘积
 *     rwsp[s] = 该符号 N 连的基础赔率     = PAYTABLE[s][N]   ← 直接反推
 *     lw[s]   = 该符号本次总赢分          = rwsp[s] × ways × cs × ml   ← 自校验公式
 *
 * 因此扫一遍中奖样本即可重建整张 PAYTABLE,并用 lw 公式逐样本校验。
 * 正确性由 validate.js(答案无关)统一把关;可选的 qa-vs-omgapi.js 才做事后交叉核对。
 *
 * 用法: node analyze/infer-paytable.js [spin目录,默认 env/mock/74/spin]
 */
const fs = require('fs');
const path = require('path');
const { deriveLayout } = require('./lib-layout');

const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '74', 'spin');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));

// 布局从数据推导(轴数/每轴行数),不写死尺寸
const LAYOUT = deriveLayout(spinDir);
const ROWS_PER_REEL = LAYOUT.rows_per_reel;
const reelOf = (pos) => Math.floor(pos / ROWS_PER_REEL);

// paytable[sym][N] = { pay, count }  —— 同一 (sym,N) 多次观测应一致
const inferred = {};
const conflicts = [];
const visiblePos = new Set();   // 所有出现过中奖的条带 idx → 可视格(只有可视格能中奖)
let winSpins = 0, formulaChecked = 0, formulaFail = 0;

for (const f of files) {
    let si;
    try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; }
    catch { continue; }
    if (!si || !si.wp || !si.rwsp || !si.tw) continue;
    winSpins++;
    const { cs, ml, wp, rwsp, lw } = si;

    for (const sym of Object.keys(wp)) {
        const positions = wp[sym];
        if (!Array.isArray(positions) || positions.length === 0) continue;
        for (const p of positions) visiblePos.add(p);       // 可视格 = 能中奖的位置
        // 每轴出现次数
        const perReel = {};
        for (const p of positions) perReel[reelOf(p)] = (perReel[reelOf(p)] || 0) + 1;
        const N = Object.keys(perReel).length;                       // 几连(覆盖轴数)
        const ways = Object.values(perReel).reduce((a, b) => a * b, 1);
        const pay = rwsp[sym];                                        // = PAYTABLE[sym][N]

        // 记录反推值,检查一致性
        inferred[sym] = inferred[sym] || {};
        if (inferred[sym][N] === undefined) inferred[sym][N] = { pay, count: 1 };
        else if (inferred[sym][N].pay !== pay) conflicts.push({ sym, N, seen: inferred[sym][N].pay, now: pay, file: f });
        else inferred[sym][N].count++;

        // lw 公式自校验
        if (lw && lw[sym] !== undefined) {
            formulaChecked++;
            const expect = pay * ways * cs * ml;
            if (Math.abs(expect - lw[sym]) > 1e-6) formulaFail++;
        }
    }
}

// ── 输出 ──
console.log(`\n扫描 ${files.length} 样本,其中中奖 ${winSpins} 个`);
console.log(`lw 公式自校验: ${formulaChecked - formulaFail}/${formulaChecked} 通过` +
    (formulaFail ? ` ❌ ${formulaFail} 失败` : ' ✅'));
console.log(`赔率一致性冲突: ${conflicts.length}${conflicts.length ? ' ❌' : ' ✅'}`);

console.log(`\n反推赔表(sym: 3连/4连/5连,括号内=观测次数):`);
const syms = Object.keys(inferred).map(Number).sort((a, b) => a - b);
for (const s of syms) {
    const row = [3, 4, 5].map(N => {
        const v = inferred[s]?.[N];
        return v ? `${v.pay}(${v.count})` : '  —  ';
    });
    console.log(`  ${String(s).padStart(2)}: ${row.map(r => r.padStart(9)).join(' ')}`);
}

// ── 落盘反推参数(答案无关,供最终生成器读取)──
const outParams = {};
for (const s of syms) { outParams[s] = {}; for (const N of [3, 4, 5]) if (inferred[s]?.[N]) outParams[s][N] = inferred[s][N].pay; }
const OUT_DIR = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'paytable.json'), JSON.stringify(outParams, null, 2));

// 布局:推导出的轴数/每轴行数/可视格(全部答案无关)
const layout = { rows_per_reel: LAYOUT.rows_per_reel, num_reels: LAYOUT.num_reels, reels: LAYOUT.reels, visible: LAYOUT.visible };
fs.writeFileSync(path.join(OUT_DIR, 'layout.json'), JSON.stringify(layout, null, 2));
console.log(`\n已写反推参数 → analyze/inferred/paytable.json, layout.json`);
console.log(`  布局: ${LAYOUT.num_reels}轴 × ${LAYOUT.rows_per_reel}行,可视格 ${LAYOUT.visible.map(v => v.length).join('/')}`);
// 答案无关的质量信号:lw 公式自校验 + 赔率一致性(见上)。正确性由 validate.js 统一把关。
process.exit(conflicts.length || formulaFail ? 1 : 0);
