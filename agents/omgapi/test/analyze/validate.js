/**
 * validate.js — 答案无关的自校验门槛:用 config 重算/回放 spin 数据本身。
 *
 * 不碰任何 omgapi 答案。逻辑:如果反推出的 config 是对的,那么用它:
 *   ① 结算:对每个中奖 spin,用 config 的 paytable+layout+公式 从牌面重算每符号赢分,
 *      应等于样本里的实际 lw。   ← 证明 赔表/布局/公式/wild规则 正确
 *   ② 级联:用 config 的规则 + 样本的 ptbr/rns 回放,应重建出下一步牌面。 ← 证明级联规则正确
 * 这是"新游戏没有答案时,凭什么信这份 config"的依据(数据自洽 = 高门槛)。
 *
 * 用法: node analyze/validate.js [gid]
 */
const fs = require('fs');
const path = require('path');

const gid = process.argv[2] || '74';
const ROOT = path.join(__dirname, '..');
const spec = JSON.parse(fs.readFileSync(path.join(ROOT, 'config', `pg-${gid}.json`), 'utf8'));
const spinDir = process.argv[3] || [path.join(ROOT, 'env', 'mock', gid, 'spin'), path.join(ROOT, 'env', 'mock', gid, 'spin-live')].find(d => fs.existsSync(d));
const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));

const PT = spec.paytable.table;
const VIS = spec.layout.visible;
const REELS = spec.layout.reels;
const NR = REELS.length, RL = REELS[REELS.length-1][1] + 1;

// ── 线号(paylines)自校验:用 config 的赔表/wild/低分组回放每条中奖线,应重现样本 rwsp ──
// 证明 线号赔表 + wild规则 + 低分组 正确。级联对纯线号 N/A(无 ptbr tumble)。
if ((spec.paytable.mechanic === 'paylines') || spec.identity.type === 'paylines') {
    const WILD = spec.paytable.wild, LL = spec.paytable.line_length, LG = spec.paytable.low_group;
    const inLow = (s) => LG && LG.symbols.includes(s);
    const lowPay = LG ? (Array.isArray(LG.any_pay) ? LG.any_pay : [LG.any_pay]) : [];
    // 一条线(wild 可代任意)→ config 赔付:全同符号=单符号赔;全低分混合=低分组赔;否则 0
    function linePay(syms) {
        const nonW = syms.filter(s => s !== WILD);
        const distinct = [...new Set(nonW)];
        if (distinct.length <= 1) { const S = distinct.length ? distinct[0] : null; return (S !== null && PT[S] && PT[S][syms.length] !== undefined) ? [PT[S][syms.length]] : [0]; }
        if (distinct.every(inLow)) return lowPay;            // 低分组任意混合
        return [0];
    }
    let lineChecked = 0, lineMatch = 0, winSpins2 = 0;
    for (const f of files) {
        let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
        if (!si || !si.wp || !si.rwsp) continue;
        const board = si.frl || si.rl; if (!Array.isArray(board)) continue;
        let any = false;
        for (const L of Object.keys(si.wp)) {
            const pos = si.wp[L]; if (!Array.isArray(pos) || si.rwsp[L] === undefined) continue;
            const syms = pos.map(p => board[p]); if (syms.some(s => s === undefined)) continue;
            lineChecked++; any = true;
            if (linePay(syms).includes(si.rwsp[L])) lineMatch++;
        }
        if (any) winSpins2++;
    }
    const rate = lineChecked ? lineMatch / lineChecked : 0;
    const ok = rate >= 0.999;
    console.log(`\n===== 答案无关自校验 [pg-${gid}] (线号) =====`);
    console.log(`结算:用 config 回放 ${lineChecked} 条中奖线,重现样本 rwsp: ${lineMatch}/${lineChecked} = ${(rate * 100).toFixed(2)}% (中奖样本 ${winSpins2})`);
    console.log(`\n门槛(≥99.9%): ${ok ? '✅ PASS —— 线号赔表/wild/低分组 与数据自洽,可信' : '❌ FAIL —— config 与数据不符,需回查'}`);
    console.log('(全程未使用任何 omgapi 答案)');
    process.exit(ok ? 0 : 1);
}

const WILD = 0;

// 某格能否用作符号 s:真符号 / 通用wild(rl=0,orl=0)/ 限制性wild匹配(rl=0,orl=s)
function usable(rv, ov, s) { return rv === s || (rv === WILD && (ov === 0 || ov === s)); }

// 用 config 从牌面重算某符号的 ways 赢分
// 注意:lw(每符号赢分)不含倍率 wm —— wm 只加在总分上(tw = Σlw × wm)
function symbolWin(board, orl, sym, cs, ml) {
    const per = [];
    for (let r = 0; r < NR; r++) {
        let cnt = 0;
        for (const idx of VIS[r]) if (usable(board[idx], orl[idx], sym)) cnt++;
        per.push(cnt);
    }
    let N = 0; for (let r = 0; r < NR; r++) { if (per[r] > 0) N++; else break; }
    const pay = PT[sym] && PT[sym][N];
    if (N < 3 || !pay) return 0;
    const ways = per.slice(0, N).reduce((a, b) => a * b, 1);
    return pay * ways * cs * ml;
}

// ① 结算自校验
let winSpins = 0, symChecked = 0, symMatch = 0;
// ② 级联自校验(复用 infer-cascade 的回放)
const seqs = new Map();

for (const f of files) {
    let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
    if (!si || !si.rl) continue;
    if (si.psid) { if (!seqs.has(si.psid)) seqs.set(si.psid, []); seqs.get(si.psid).push({ f, si }); }
    if (si.lw && si.tw) {
        winSpins++;
        for (const sym of Object.keys(si.lw)) {
            symChecked++;
            const got = symbolWin(si.rl, si.orl, +sym, si.cs, si.ml);   // lw 不含 wm
            if (Math.abs(got - si.lw[sym]) < 1e-6) symMatch++;
        }
    }
}

// 级联回放(与 infer-cascade 同逻辑,差异仅金色变wild格豁免)
for (const a of seqs.values()) a.sort((x, y) => x.f.localeCompare(y.f));
let cascPairs = 0, cascPass = 0;
function rebuild(p, rns) {
    const rm = new Set(p.ptbr || []); const R = new Array(RL).fill(0);
    for (let r = 0; r < NR; r++) {
        const [s, e] = REELS[r]; const kept = [];
        for (let i = s; i <= e; i++) if (!rm.has(i)) { const rv = p.rl[i], ov = p.orl[i]; kept.push(rv === 0 && ov !== 0 ? 0 : rv); }
        const ns = rns[r] || []; const nc = (e - s + 1) - kept.length; const col = [];
        for (let k = 0; k < nc; k++) col.push(k < ns.length ? ns[k] : 0);
        col.push(...kept); for (let o = 0; o < col.length; o++) R[s + o] = col[o];
    }
    return R;
}
for (const arr of seqs.values()) for (let i = 0; i + 1 < arr.length; i++) {
    const p = arr[i].si, n = arr[i + 1].si;
    if (!p.ptbr || !p.ptbr.length || !(n.rs && n.rs.rns)) continue;
    cascPairs++;
    const R = rebuild(p, n.rs.rns);
    // 差异仅在"新变成 wild 的格"(rl=0)可接受——金色变wild 是 RNG 叠加层(限制性或通用),不属确定性级联
    let ok = true; for (let k = 0; k < RL; k++) if (R[k] !== n.rl[k] && n.rl[k] !== 0) { ok = false; break; }
    if (ok) cascPass++;
}

const settleRate = symChecked ? symMatch / symChecked : 0;
const cascRate = cascPairs ? cascPass / cascPairs : 0;
const PASS = settleRate >= 0.999 && cascRate >= 0.999;

console.log(`\n===== 答案无关自校验 [pg-${gid}] =====`);
console.log(`① 结算:用 config 重算 ${symChecked} 个中奖符号赢分,对上样本 lw: ${symMatch}/${symChecked} = ${(settleRate * 100).toFixed(2)}%`);
console.log(`② 级联:用 config 回放 ${cascPairs} 个级联步,重建对上样本牌面: ${cascPass}/${cascPairs} = ${(cascRate * 100).toFixed(2)}%`);
console.log(`\n门槛(均 ≥99.9%): ${PASS ? '✅ PASS —— config 与数据自洽,可信' : '❌ FAIL —— config 与数据不符,需回查'}`);
console.log('(全程未使用任何 omgapi 答案;这是新游戏没有答案时判定 config 是否正确的依据)');
process.exit(PASS ? 0 : 1);
