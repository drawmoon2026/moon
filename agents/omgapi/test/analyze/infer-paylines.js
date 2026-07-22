/**
 * infer-paylines.js — paylines 机制的赔表/支付线反推(不用答案),与 infer-paytable(ways)平行。
 *
 * paylines 与 ways 的本质区别:
 *   - ways:    wp 按符号索引;lw = pay × (各轴出现数乘积) × cs × ml
 *   - paylines: wp 按支付线编号索引;lw = pay × cs × ml(每条中奖线一份,无 ways 乘数)
 *   board 用 frl(完整格),线上符号 = 该线非 wild 的符号。
 *
 * 产出: analyze/inferred/paylines.json(支付线集合 + 赔表 + 布局)
 * 用法: node analyze/infer-paylines.js <spin目录>
 */
const fs = require('fs');
const path = require('path');

const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '39', 'spin-live');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));

const lineSet = new Map();          // 线路径(JSON) → 观测次数
const paytable = {};                // sym → {N: pay}(仅"全相同符号"的干净连)
const mixedPays = new Set();        // "任意混合符号" win 的赔率(如低符号混合)
let winLines = 0, formulaOk = 0, conflicts = 0;
let boardLen = 0;

for (const f of files) {
    let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
    const board = si && (si.frl || si.rl);
    if (!si || !si.wp || !si.rwsp || !si.tw || !Array.isArray(board)) continue;
    boardLen = Math.max(boardLen, board.length);
    for (const lineIdx of Object.keys(si.wp)) {
        const pos = si.wp[lineIdx];
        if (!Array.isArray(pos) || !pos.length) continue;
        lineSet.set(JSON.stringify(pos), (lineSet.get(JSON.stringify(pos)) || 0) + 1);
        winLines++;
        const N = pos.length, pay = si.rwsp[lineIdx];
        if (Math.abs(pay * si.cs * si.ml - si.lw[lineIdx]) < 1e-6) formulaOk++;   // 自校验 lw=pay×cs×ml
        // 线上非 wild 符号:全相同 → 归属该符号;不全同 → "任意混合"win
        const nonWild = pos.map(i => board[i]).filter(s => s !== 0);
        const allSame = nonWild.length && nonWild.every(s => s === nonWild[0]);
        if (allSame) {
            const sym = nonWild[0];
            paytable[sym] = paytable[sym] || {};
            if (paytable[sym][N] !== undefined && paytable[sym][N] !== pay) conflicts++;
            paytable[sym][N] = pay;
        } else if (nonWild.length) {
            mixedPays.add(pay);        // 混合符号 win(如"任意低符号")
        }
    }
}

const paylines = [...lineSet.keys()].map(s => JSON.parse(s));
const result = {
    description: 'paylines 机制:支付线 + 赔表,答案无关',
    mechanic: 'paylines', board_length: boardLen,
    paylines, paylines_count: paylines.length,
    paytable, mixed_symbol_pays: [...mixedPays],
    formula: 'lw = pay × cs × ml(每中奖线一份);混合符号线另有固定赔率',
};
const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'paylines.json'), JSON.stringify(result, null, 2));

console.log(`\n扫描 ${files.length} 样本,中奖线 ${winLines}`);
console.log(`lw=pay×cs×ml 自校验: ${formulaOk}/${winLines} ${formulaOk === winLines ? '✅' : '❌'} | 赔率冲突: ${conflicts}`);
console.log(`支付线 ${paylines.length} 条: ${paylines.map(l => '[' + l.join(',') + ']').join(' ')}`);
console.log(`赔表(干净连): ${JSON.stringify(paytable)}`);
console.log(`混合符号 win 赔率: ${JSON.stringify([...mixedPays])}`);
console.log(`\n已写 → analyze/inferred/paylines.json`);
process.exit(formulaOk === winLines && !conflicts ? 0 : 1);
