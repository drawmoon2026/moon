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
 * 由于 omgapi 已有答案(verify_algorithm.js 的 PAYTABLE),脚本结果可直接对照。
 *
 * 用法: node analyze/infer-paytable.js [spin目录,默认 env/mock/74/spin]
 */
const fs = require('fs');
const path = require('path');

const ROWS_PER_REEL = 7;                 // 结构常量:条带每轴 7 格(位置÷7=轴号)
const reelOf = (pos) => Math.floor(pos / ROWS_PER_REEL);

// ── 答案(来自 omgapi mocks/pg/74/verify_algorithm.js,仅用于最后对照)──
const ANSWER = {
    2: { 3: 10, 4: 25, 5: 50 }, 3: { 3: 8, 4: 20, 5: 40 }, 4: { 3: 6, 4: 15, 5: 30 },
    5: { 3: 5, 4: 10, 5: 15 }, 6: { 3: 3, 4: 5, 5: 12 }, 7: { 3: 3, 4: 5, 5: 12 },
    8: { 3: 2, 4: 4, 5: 10 }, 9: { 3: 1, 4: 3, 5: 6 }, 10: { 3: 1, 4: 3, 5: 6 },
};

const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '74', 'spin');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));

// paytable[sym][N] = { pay, count }  —— 同一 (sym,N) 多次观测应一致
const inferred = {};
const conflicts = [];
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
let cells = 0, matched = 0, missing = 0;
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
console.log(`\n已写反推参数 → analyze/inferred/paytable.json`);

// ── 对照答案(仅开发期验证,最终生成器不依赖)──
console.log(`\n[dev 校验] 对照答案(omgapi verify_algorithm.js):`);
for (const s of Object.keys(ANSWER).map(Number)) {
    for (const N of [3, 4, 5]) {
        cells++;
        const inf = inferred[s]?.[N]?.pay;
        const ans = ANSWER[s][N];
        if (inf === undefined) { missing++; continue; }
        if (inf === ans) matched++;
        else console.log(`  ❌ 符号${s} ${N}连: 反推=${inf} 答案=${ans}`);
    }
}
const coverage = ((matched + missing > 0) ? matched / (cells) * 100 : 0).toFixed(1);
console.log(`\n结果: ${matched}/${cells} 格与答案一致` +
    (missing ? `,${missing} 格样本未覆盖(需更多中奖样本)` : '') +
    (matched === cells ? '  ✅ 完全一致' : matched + missing === cells ? '  ✅ 覆盖到的全对' : '  ❌ 有不符'));
process.exit(conflicts.length || formulaFail ? 1 : 0);
