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

// ── 从 JS 提取特性 ──
// 首选:拆出的模块名(_index.json)—— 每个机制一个独立模块,名字明文,最可靠。
// 退回:在清晰代码里正则(不如模块名可靠)。
let features = {}, featureSource = 'none';
let symbolsFromJs = { scatter_index: null, wild_index: null };

// 找模块索引:clean/pg-74.clean.js → clean/pg-74/_index.json
let idxPath = null;
if (jsPath) {
    const cand = jsPath.replace(/\.clean\.js$/, '').replace(/\.js$/, '') + '/_index.json';
    if (fs.existsSync(cand)) idxPath = cand;
}
if (idxPath) {
    const names = require(path.resolve(idxPath)).modules.map(m => m.name);
    const any = (re) => names.some(n => re.test(n));
    features = {
        free_spin: any(/FreeSpin/i),
        respin_or_hold: any(/Respin|StickyWild|HoldAndSpin|lockReel/i),
        scatter: any(/Scatter/i),
        wild: any(/Wild/i),
        multiplier: any(/Multiplier/i),
        bonus: any(/Bonus/i),
    };
    featureSource = 'module-names';
    features._evidence = names.filter(n => /FreeSpin|Respin|Scatter|Wild|Multiplier|Bonus/i.test(n)).slice(0, 8);
} else if (jsPath && fs.existsSync(jsPath)) {
    const js = fs.readFileSync(jsPath, 'utf8');
    const has = (re) => re.test(js);
    features = {
        free_spin: has(/FreeSpin(Controller|GameState|Model)/i),
        respin_or_hold: has(/ReSpinController|StickyWild|HoldAndSpin|lockReel/i),
        scatter: has(/ScatterController|SCATTER_INDE/i),
        wild: has(/WildSymbolController|WILD_INDE/i),
        multiplier: has(/MultiplierBoardController|MultiplierItem/i),
        bonus: has(/BonusGame|isBonusGameMode|BonusFreeSpin/i),
    };
    featureSource = 'js-regex(建议先 split-modules 用模块名更准)';
}
// scatter/wild 的符号索引(明文数值)
if (jsPath && fs.existsSync(jsPath)) {
    const js = fs.readFileSync(jsPath, 'utf8');
    const sc = js.match(/SCATTER_INDE[^=]{0,6}=\s*(0x[0-9a-f]+|\d+)/i);
    const wi = js.match(/WILD_INDE[^=]{0,6}=\s*(0x[0-9a-f]+|\d+)/i);
    if (sc) symbolsFromJs.scatter_index = Number(sc[1]);
    if (wi) symbolsFromJs.wild_index = Number(wi[1]);
}

// ── 从 spin 数据拿网格 + 符号数 + 消除规则 ──
let grid = null, symbolCount = null, mechanic = 'unknown';
let elimination = { has_elimination: null, type: 'unknown', rule: null };
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
    // 消除规则(部分游戏有):可靠来源是数据里的 ptbr(消除位),不是 JS 类名。
    // 有 ptbr = 中奖符号被消除→下落→补新(tumble);无 = 无消除(如 paylines)。
    elimination = hasPtbr
        ? { has_elimination: true, type: 'tumble', rule: '中奖符号消除 → 上方符号下落(重力) → 顶部补新符号;可再触发连续消除', verified_by: 'infer-cascade(逐步重建100%)' }
        : { has_elimination: false, type: 'none', rule: null };
}

const structure = {
    description: '游戏结构:特性来自JS反混淆,网格/符号来自spin数据;赔表另行(占位→样本校验)',
    mechanic,
    grid,
    symbol_count: symbolCount,
    symbol_indices_from_js: symbolsFromJs,
    feature_source: featureSource,
    features,
    elimination,          // 消除规则(来源:数据 ptbr;部分游戏有)
    paytable_source: 'placeholder → validate by spin rwsp',
};
const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'structure.json'), JSON.stringify(structure, null, 2));

console.log('=== 游戏结构解析 ===');
console.log('机制:', mechanic);
console.log('网格:', grid ? `${grid.reels}轴 × ${grid.rows_per_reel}行(可视 ${grid.visible.join('/')})` : '(无spin数据)');
console.log('符号种类:', symbolCount, '| scatter_idx:', symbolsFromJs.scatter_index, 'wild_idx:', symbolsFromJs.wild_index);
console.log('特性(来源 ' + featureSource + '):', Object.entries(features).filter(([k, v]) => v === true && k !== '_evidence').map(([k]) => k).join(', ') || '(无)');
if (features._evidence) console.log('  证据模块:', features._evidence.join(', '));
console.log('消除规则:', elimination.has_elimination === null ? '(无数据)' : (elimination.has_elimination ? elimination.type + ' —— ' + elimination.rule : '无(如 paylines)'));
console.log('→ analyze/inferred/structure.json');
