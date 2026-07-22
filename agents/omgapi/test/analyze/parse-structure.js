/**
 * parse-structure.js — 解析游戏结构(第一步:算法解析 JS + 数据)。
 *
 * 从客户端 JS 反混淆结果拿【特性】(free spin / respin / scatter / wild / multiplier / bonus),
 * 从 spin 数据拿【网格】(行/列/轴)与【符号数】。赔付表此步先占位,最后用样本校验(算法是核心)。
 * 产出 analyze/inferred/structure.json,作为生成 JS server 的结构输入。
 *
 * 用法: node analyze/parse-structure.js <反混淆js> <spin目录>
 */
const fs = require('fs');
const path = require('path');
const { deriveLayout } = require('./lib-layout');

const jsPath = process.argv[2];
const spinDir = process.argv[3];

// ── 从 JS 提取特性(类名/常量名是反混淆后的明文标识)──
let features = {};
let symbolsFromJs = { scatter_index: null, wild_index: null };
if (jsPath && fs.existsSync(jsPath)) {
    const js = fs.readFileSync(jsPath, 'utf8');
    const has = (re) => re.test(js);
    features = {
        free_spin: has(/FreeSpin(Controller|GameState|Model)/i),
        respin_or_hold: has(/(re-?spin|sticky|hold.?spin|lockreel)/i),
        scatter: has(/ScatterController|SCATTER_INDE/i),
        wild: has(/WildSymbolController|WILD_INDE/i),
        multiplier: has(/MultiplierBoardController|MultiplierItem/i),
        bonus: has(/BonusGame|isBonusGameMode|BonusFreeSpin/i),
        cascade_tumble: has(/tumble|cascade|dropDown|gravity/i),
    };
    // scatter/wild 的符号索引(如有明文数值)
    const sc = js.match(/SCATTER_INDE[^=]{0,6}=\s*(0x[0-9a-f]+|\d+)/i);
    const wi = js.match(/WILD_INDE[^=]{0,6}=\s*(0x[0-9a-f]+|\d+)/i);
    if (sc) symbolsFromJs.scatter_index = Number(sc[1]);
    if (wi) symbolsFromJs.wild_index = Number(wi[1]);
}

// ── 从 spin 数据拿网格 + 符号数 ──
let grid = null, symbolCount = null, mechanic = 'unknown';
if (spinDir && fs.existsSync(spinDir)) {
    try {
        const L = deriveLayout(spinDir);
        grid = { reels: L.num_reels, rows_per_reel: L.rows_per_reel, board_cells: L.rl_length, visible: L.visible.map(v => v.length) };
    } catch {}
    // 符号种类:扫牌面里出现的非零符号(wild=0 另算)
    const symSet = new Set();
    let hasPtbr = false, wpKeyed = 'symbol';
    for (const f of fs.readdirSync(spinDir).filter(x => x.endsWith('.json')).slice(0, 3000)) {
        let si; try { si = JSON.parse(fs.readFileSync(path.join(spinDir, f), 'utf8')).response.body.dt.si; } catch { continue; }
        const board = si && (si.rl || si.frl);
        if (Array.isArray(board)) for (const s of board) if (s !== 0) symSet.add(s);
        if (si && si.ptbr && si.ptbr.length) hasPtbr = true;
        // wp 是按符号还是按线:key 若不在牌面符号集里 → 线号(paylines)
        if (si && si.wp && si.frl) { const k = Object.keys(si.wp)[0]; if (k && !si.frl.includes(+k)) wpKeyed = 'payline'; }
    }
    symbolCount = symSet.size;
    mechanic = hasPtbr ? 'ways-tumble' : (wpKeyed === 'payline' ? 'paylines' : 'ways');
}

const structure = {
    description: '游戏结构:特性来自JS反混淆,网格/符号来自spin数据;赔表另行(占位→样本校验)',
    mechanic,
    grid,
    symbol_count: symbolCount,
    symbol_indices_from_js: symbolsFromJs,
    features,
    paytable_source: 'placeholder → validate by spin rwsp',
};
const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'structure.json'), JSON.stringify(structure, null, 2));

console.log('=== 游戏结构解析 ===');
console.log('机制:', mechanic);
console.log('网格:', grid ? `${grid.reels}轴 × ${grid.rows_per_reel}行(可视 ${grid.visible.join('/')})` : '(无spin数据)');
console.log('符号种类:', symbolCount, '| scatter_idx:', symbolsFromJs.scatter_index, 'wild_idx:', symbolsFromJs.wild_index);
console.log('特性:', Object.entries(features).filter(([, v]) => v).map(([k]) => k).join(', ') || '(未解析JS)');
console.log('→ analyze/inferred/structure.json');
