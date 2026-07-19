/**
 * infer-cascade.js — 从 spin 样本纯脚本验证级联(tumble)机制(不用答案)
 *
 * 级联是确定性的(新符号写在下一步 rs.rns 里,非未知 RNG),所以可逐步精确重建:
 *   上一步板 rl/orl + ptbr(消除位) + 重力下落(高 idx=底) + rns(补顶) = 下一步板
 *   规则细节:限制性 wild(rl=0,orl≠0)存活时转通用 wild(orl→0)。
 * 按 psid(回合)把步骤串起来,逐相邻对重建并与真实下一步比对。
 *
 * 产出: analyze/inferred/cascade.json(答案无关:轴结构 + 规则 + 实测通过率)
 * 用法: node analyze/infer-cascade.js [spin目录]
 */
const fs = require('fs');
const path = require('path');

const REELS = [[0, 6], [7, 13], [14, 20], [21, 27], [28, 34]];
const spinDir = process.argv[2] || path.join(__dirname, '..', 'env', 'mock', '74', 'spin');
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json')).sort();

// 按 psid 分组
const seqs = new Map();
for (const f of files) {
    let si;
    try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; }
    catch { continue; }
    if (!si || !si.psid) continue;
    if (!seqs.has(si.psid)) seqs.set(si.psid, []);
    seqs.get(si.psid).push({ f, si });
}
for (const arr of seqs.values()) arr.sort((a, b) => a.f.localeCompare(b.f));

// 重建:prev + ptbr + rns → next
function rebuild(siPrev, rns) {
    const ptbr = new Set(siPrev.ptbr || []);
    const nextRl = new Array(35).fill(0), nextOrl = new Array(35).fill(0);
    for (let r = 0; r < 5; r++) {
        const [rstart, rend] = REELS[r];
        const kept = [];
        for (let i = rstart; i <= rend; i++) {
            if (ptbr.has(i)) continue;
            const rv = siPrev.rl[i], ov = siPrev.orl[i];
            kept.push(rv === 0 && ov !== 0 ? [0, 0] : [rv, ov]);   // 限制性 wild 转通用
        }
        const newSyms = rns[r] || [];
        const newCount = (rend - rstart + 1) - kept.length;
        const column = [];
        for (let k = 0; k < newCount; k++) { const s = k < newSyms.length ? newSyms[k] : 0; column.push([s, s]); }
        column.push(...kept);
        for (let o = 0; o < column.length; o++) { nextRl[rstart + o] = column[o][0]; nextOrl[rstart + o] = column[o][1]; }
    }
    return { nextRl, nextOrl };
}
// 差异格若全部是「金色变 wild」(next 限制性 wild:rl=0,orl≠0)则算结构命中——
// 金色变 wild 是 RNG 叠加层(见 infer-triggers),不属于确定性级联结构。
let pairs = 0, pass = 0, goldWildCells = 0;
const fails = [];
for (const arr of seqs.values()) {
    for (let i = 0; i + 1 < arr.length; i++) {
        const prev = arr[i].si, next = arr[i + 1].si;
        if (!prev.ptbr || prev.ptbr.length === 0) continue;    // 无消除 → 非级联步
        const rns = next.rs && next.rs.rns;
        if (!rns) continue;                                    // 下一步没给新符号,跳过
        pairs++;
        const { nextRl } = rebuild(prev, rns);
        const diffs = [];
        for (let k = 0; k < 35; k++) if (nextRl[k] !== next.rl[k]) diffs.push(k);
        const allGoldWild = diffs.every(k => next.rl[k] === 0 && next.orl[k] !== 0);
        if (diffs.length === 0 || allGoldWild) { pass++; goldWildCells += diffs.length; }
        else if (fails.length < 5) fails.push({ f: arr[i + 1].f, diffs });
    }
}

const rate = pairs ? pass / pairs : 0;
const result = {
    description: '级联(tumble)机制,答案无关地从 rs.rns 逐步重建验证',
    reels: REELS,
    rule: '上一步板 + ptbr消除 + 重力下落(高idx=底) + rns补顶;限制性wild存活转通用(orl→0)',
    note: '金色变wild(限制性wild)是RNG叠加层,不属确定性级联结构,验证时豁免',
    cascade_pairs: pairs, passed: pass, pass_rate: +rate.toFixed(4),
    gold_wild_cells_excluded: goldWildCells,
};
const OUT_DIR = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'cascade.json'), JSON.stringify(result, null, 2));

console.log(`\n级联相邻步对: ${pairs},结构重建命中: ${pass}(豁免金色变wild格 ${goldWildCells} 个)`);
console.log(`通过率: ${(rate * 100).toFixed(2)}%  ${rate === 1 ? '✅ 100%(级联结构确定性成立)' : '⚠️ <100%'}`);
if (fails.length) { console.log('真失败样例(非金色变wild):'); fails.forEach(x => console.log('  ' + x.f + ' 差异格 ' + x.diffs.join(','))); }
console.log(`\n已写反推参数 → analyze/inferred/cascade.json`);

// 答案无关:级联是确定性的,自洽标准就是 100% 重建(不依赖任何外部答案)。
console.log(`\n级联确定性(重建应 100%): ${rate === 1 ? '✅ 成立' : '❌ 未达标,需回查'}`);
process.exit(rate === 1 ? 0 : 1);
