/**
 * extract-paytable-lines.js — 线号(paylines)游戏的线号赔表提取(来源:服务器 spin 消息,非OCR)。
 *
 * ways 游戏的赔表在客户端 JS(PayOutData);线号游戏(如 39)的赔表不在 JS,
 * 而在服务器消息里:每次中奖的 spin 响应带 wp(线→格位)+ rwsp(线→赔率)+ frl(牌面)。
 * 扫所有中奖样本即可重建线号赔表 —— 这属于"从消息得到",OCR 只做验证。
 *
 * 关键(全部从数据自证,不写死):
 *   · wild 符号:穷举候选,选"能把最多中奖线解析成单符号 N 连、且赔率无冲突"的那个。
 *   · 线长 line_length:中奖线覆盖的格数(3×3 单线=3)。
 *   · 单符号赔表 pay[sym][N]:一条线(wild 可代任意)解析成同一符号 S 的 N 连 → rwsp。
 *   · 低分组混合赔付:一条线全是低分符号但非同一符号(如 4/5/6 混合)→ 组合赔率(PG 常见"任意N个低分")。
 * 自证:同一 (符号,连数) 或同一混合集合观测到的赔率必须唯一,否则冲突报错。
 *
 * 用法: node analyze/extract-paytable-lines.js <spin目录>
 * 仅对线号游戏产出;若样本是 ways 键(wp 按符号)则判定非线号,退出。
 */
const fs = require('fs');
const path = require('path');

const spinDir = process.argv[2];
if (!spinDir || !fs.existsSync(spinDir)) { console.error('用法: node analyze/extract-paytable-lines.js <spin目录>'); process.exit(1); }

// 收集中奖线:{ syms:[线上符号], pay }。symbols 用 frl[wp位置] 取(兼容多线)。
const lines = [];
let winSpins = 0, filesN = 0;
for (const f of fs.readdirSync(spinDir).filter(x => x.endsWith('.json'))) {
    filesN++;
    let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
    if (!si || !si.wp || !si.rwsp) continue;
    const frl = si.frl || si.rl;
    if (!Array.isArray(frl)) continue;
    let any = false;
    for (const L of Object.keys(si.wp)) {
        const pos = si.wp[L];
        if (!Array.isArray(pos) || !pos.length) continue;
        const syms = pos.map(p => frl[p]);
        if (syms.some(s => s === undefined)) continue;
        if (si.rwsp[L] === undefined) continue;
        lines.push({ syms, pay: si.rwsp[L] });
        any = true;
    }
    if (any) winSpins++;
}
if (!lines.length) { console.error('没有中奖线样本(此游戏可能非线号,或样本无中奖)'); process.exit(1); }

// 线号 vs ways 判据:线号游戏每条中奖线长度一致(=可视行/列的固定线长,如 3×3 单线=3);
// ways 游戏每个中奖符号覆盖的格数随机不一。线长不一致 → 判定非线号,N/A 退出(exit 0,非报错)。
const lenCount = {};
for (const l of lines) lenCount[l.syms.length] = (lenCount[l.syms.length] || 0) + 1;
const lens = Object.keys(lenCount).map(Number);
const lineLen = lens.sort((a, b) => lenCount[b] - lenCount[a])[0];
const dominant = lenCount[lineLen] / lines.length;
if (lens.length > 1 && dominant < 0.9) {
    console.log(`线长不一致(${JSON.stringify(lenCount)})→ 判定非线号(ways),跳过线号赔表提取`);
    process.exit(0);
}

// ── 穷举 wild:选让"单符号解析数最多且无赔率冲突"的候选 ──
const allSyms = [...new Set(lines.flatMap(l => l.syms))].sort((a, b) => a - b);
function evalWild(W) {
    const single = {}, mixed = {};   // single[S][N]=pay ; mixed[sortedKey]=pay
    let singleCount = 0, conflicts = 0;
    for (const { syms, pay } of lines) {
        const nonW = syms.filter(s => s !== W);
        const distinct = [...new Set(nonW)];
        if (distinct.length <= 1) {                 // 单符号(或全 wild)
            const S = distinct.length ? distinct[0] : W;
            const N = syms.length;
            single[S] = single[S] || {};
            if (single[S][N] === undefined) single[S][N] = pay;
            else if (single[S][N] !== pay) conflicts++;
            singleCount++;
        } else {                                    // 混合
            const key = distinct.slice().sort((a, b) => a - b).join(',');
            if (mixed[key] === undefined) mixed[key] = pay;
            else if (mixed[key] !== pay) conflicts++;
        }
    }
    return { W, single, mixed, singleCount, conflicts };
}
let best = null;
for (const W of allSyms) {
    const r = evalWild(W);
    // 目标:单符号解析越多越好,冲突越少越好
    if (!best || r.conflicts < best.conflicts || (r.conflicts === best.conflicts && r.singleCount > best.singleCount)) best = r;
}
const WILD = best.W;

// ── 汇总输出 ──
// 单符号赔表 pay[sym][N](去掉 wild 自身当"符号"的伪项)
const paytable = {};
for (const S of Object.keys(best.single).map(Number).sort((a, b) => a - b)) {
    if (S === WILD) continue;
    paytable[S] = best.single[S];
}
// 低分组:出现在"混合中奖"里的符号集合 + 其赔率(应唯一)
const mixedKeys = Object.keys(best.mixed);
const lowGroupSet = [...new Set(mixedKeys.flatMap(k => k.split(',').map(Number)))].sort((a, b) => a - b);
const mixedPays = [...new Set(Object.values(best.mixed))];
const lowGroup = lowGroupSet.length
    ? { symbols: lowGroupSet, any_pay: mixedPays.length === 1 ? mixedPays[0] : mixedPays, line_length: lineLen,
        note: `任意 ${lineLen} 个属于 {${lowGroupSet.join(',')}} 的符号(非同一符号)按此组合赔付` }
    : null;

const out = {
    source: 'server-spin-messages (wp/rwsp/frl 反推,非OCR)',
    mechanic: 'paylines',
    wild: WILD,
    line_length: lineLen,
    win_lines_scanned: lines.length,
    paytable,               // { 符号: { 连数: 赔率 } }
    low_group: lowGroup,    // 低分符号混合组合赔付(若有)
    self_check: { conflicts: best.conflicts, single_resolved: best.singleCount },
};
const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'paytable_from_lines.json'), JSON.stringify(out, null, 2));

console.log('=== 线号赔表(来源:服务器 spin 消息,自证)===');
console.log(`扫描 ${filesN} 样本 | 中奖 ${winSpins} | 中奖线 ${lines.length} | wild=${WILD} | 线长 ${lineLen}`);
console.log('符号  N连  赔率');
for (const S of Object.keys(paytable).map(Number).sort((a, b) => a - b))
    for (const N of Object.keys(paytable[S])) console.log(`  ${String(S).padStart(2)}   ${N}连  ${paytable[S][N]}`);
if (lowGroup) console.log(`低分组 {${lowGroup.symbols.join(',')}} 任意${lineLen}混合 → ${JSON.stringify(lowGroup.any_pay)}`);
console.log(`自证:赔率冲突 ${best.conflicts}${best.conflicts ? ' ❌' : ' ✅'} → analyze/inferred/paytable_from_lines.json`);
process.exit(best.conflicts ? 1 : 0);
