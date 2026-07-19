/**
 * qa-vs-omgapi.js — 【可选 QA,不属于流程】拿反推出的 config 跟 omgapi 已有答案交叉核对。
 *
 * ⚠️ 这个脚本会读取 omgapi 的答案文件,仅用于"74 这种已知游戏"做事后交叉验证,
 *    确认反推流程本身没跑偏。它**不在 run.js 里**,新游戏(无答案)不需要、也不能用它。
 *    流程内真正的正确性把关是 validate.js(答案无关的数据自洽)。
 *
 * 用法: node analyze/qa-vs-omgapi.js [gid]
 */
const fs = require('fs');
const path = require('path');

const gid = process.argv[2] || '74';
const OMG = `/Users/tom/project/drawmoon/omgapi/mocks/pg/${gid}`;
if (!fs.existsSync(OMG)) { console.error(`omgapi 没有 ${gid} 的答案,无法 QA(新游戏本就没有,用 validate.js)`); process.exit(0); }

const spec = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', `pg-${gid}.json`), 'utf8'));
let allOk = true;

// ① 赔表 vs verify_algorithm.js 的 PAYTABLE
const va = fs.readFileSync(path.join(OMG, 'verify_algorithm.js'), 'utf8');
const ptBlock = va.match(/const PAYTABLE = \{([\s\S]*?)\n\};/);
if (ptBlock) {
    let ptCells = 0, ptMatch = 0;
    for (const m of ptBlock[1].matchAll(/(\d+):\s*\{\s*3:\s*(\d+),\s*4:\s*(\d+),\s*5:\s*(\d+)/g)) {
        const [, sym, p3, p4, p5] = m;
        const t = spec.paytable.table[sym] || {};
        for (const [N, ans] of [[3, +p3], [4, +p4], [5, +p5]]) { ptCells++; if (t[N] === ans) ptMatch++; }
    }
    const ok = ptMatch === ptCells;
    allOk = allOk && ok;
    console.log(`① 赔表 vs omgapi verify_algorithm.js: ${ptMatch}/${ptCells} ${ok ? '✅' : '❌'}`);
}

// ② wm 阶梯 / 金色轴(omgapi 文档已知)
const wmOk = JSON.stringify(spec.multiplier.ladder_base) === '[1,2,3,5]' && JSON.stringify(spec.multiplier.ladder_fs) === '[2,4,6,10]';
console.log(`② wm 阶梯 vs 已知 [1,2,3,5]/[2,4,6,10]: ${wmOk ? '✅' : '❌'}`); allOk = allOk && wmOk;

// ③ 卷轴权重 vs reel_strip_weights.json
const rsw = path.join(OMG, 'reel_strip_weights.json');
if (fs.existsSync(rsw)) {
    const ans = JSON.parse(fs.readFileSync(rsw, 'utf8'));
    let maxDev = 0;
    for (let r = 1; r <= 5; r++) {
        const mine = spec.reels.base['R' + r] || {};
        const theirs = (ans.reels?.['R' + r] || {}).probabilities || {};
        for (let s = 1; s <= 10; s++) maxDev = Math.max(maxDev, Math.abs((mine[s] || 0) - (theirs[s] || 0)));
    }
    console.log(`③ 卷轴权重 vs reel_strip_weights.json: 最大偏差 ${(maxDev * 100).toFixed(2)}pp ${maxDev < 0.02 ? '✅' : '⚠️'}`);
}

console.log(`\n[QA] ${allOk ? '✅ 反推 config 与 omgapi 答案一致' : '❌ 有出入,需回查'}`);
console.log('(这是事后交叉核对;流程内的正确性把关是 validate.js,答案无关)');
