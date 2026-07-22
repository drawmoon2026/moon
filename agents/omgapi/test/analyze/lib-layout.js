/**
 * lib-layout.js — 从 spin 数据推导布局(轴数、每轴行数、可视格),不写死任何尺寸。
 *
 * 原理:
 *   - 可视格 = 所有中奖位(wp)的并集(只有可视格能中奖)。
 *   - 轴数 = 可视格按位置排序后的"连续段"数量(每段是一轴的可视窗口)。
 *   - 每轴行数 = 牌面长度 rl.length / 轴数(顶轴 ways 各轴等高条带)。
 *   - 轴 r 占据条带 idx [r*rows, r*rows+rows-1]。
 * 74 → 5轴×7行(可视4/5/5/5/4);65 → 5轴×6行(可视4/4/4/4/2);自动适配。
 */
const fs = require('fs');
const path = require('path');

function deriveLayout(spinDir) {
    const files = fs.readdirSync(spinDir).filter(f => f.endsWith('.json'));
    const visPos = new Set();
    const boardLens = new Set();     // 见过的候选 board 长度(rl 与 frl)
    for (const f of files) {
        let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
        if (!si) continue;
        if (Array.isArray(si.rl)) boardLens.add(si.rl.length);
        if (Array.isArray(si.frl)) boardLens.add(si.frl.length);   // paylines 牌面在 frl
        // wp 位是牌面下标(ways 按符号、paylines 按线号,取值都是位置)
        if (si.wp) for (const s of Object.values(si.wp)) if (Array.isArray(s)) for (const p of s) visPos.add(p);
    }
    const pos = [...visPos].sort((a, b) => a - b);
    if (!pos.length) throw new Error('样本不足,无法推导布局(需要含中奖的样本)');
    // board = 能容纳所有中奖位的最小数组长度(ways→rl 35;paylines→frl 9)
    const maxWp = pos[pos.length - 1];
    const rlLen = Math.min(...[...boardLens].filter(L => L > maxWp));
    if (!rlLen || !isFinite(rlLen)) throw new Error('找不到能容纳中奖位的牌面数组');

    // 连续段 = 轴数
    const runs = [[pos[0]]];
    for (let i = 1; i < pos.length; i++) {
        if (pos[i] - pos[i - 1] === 1) runs[runs.length - 1].push(pos[i]);
        else runs.push([pos[i]]);
    }
    const numReels = runs.length;
    if (rlLen % numReels !== 0) {
        // 尺寸对不齐:可能样本不够(某轴没观测到中奖)。退化:用段起点间距估行数
        const starts = runs.map(r => r[0]);
        const stride = starts.length > 1 ? starts[1] - starts[0] : Math.round(rlLen / numReels);
        var rows = stride;
    } else {
        var rows = rlLen / numReels;
    }
    const reels = Array.from({ length: numReels }, (_, r) => [r * rows, r * rows + rows - 1]);
    // 可视格按轴归组
    const visible = Array.from({ length: numReels }, () => []);
    for (const p of pos) { const r = Math.floor(p / rows); if (r < numReels) visible[r].push(p); }
    return { rows_per_reel: rows, num_reels: numReels, reels, visible, rl_length: rlLen };
}

module.exports = { deriveLayout };
