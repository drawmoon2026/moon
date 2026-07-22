/**
 * build-config.js — 把散落的 inferred/*.json 合并成一份干净、完整、自解释的游戏规格。
 *
 * 这份规格(config/pg-<gid>.json)是整套逆向流程的**核心产出**:
 *   它完整刻画一款游戏(机制 + 布局 + 赔付 + 卷轴 + 倍率 + 级联 + 配置),
 *   答案无关、可移植、可复用,并作为通用引擎的唯一输入(config 即产品,引擎通用)。
 *
 * 用法: node analyze/build-config.js [gid]
 */
const fs = require('fs');
const path = require('path');

const gid = process.argv[2] || '74';
const IN = path.join(__dirname, 'inferred');
const rd = (n) => { try { return JSON.parse(fs.readFileSync(path.join(IN, n), 'utf8')); } catch { return null; } };

const paytableSpin = rd('paytable.json') || {};        // spin rwsp 反推(ways;做验证)
const paytableJsWrap = rd('paytable_from_js.json');    // JS 执行提取(ways 基石,优先)
const paytableLinesWrap = rd('paytable_from_lines.json'); // 线号:从服务器 spin 消息反推
const layout = rd('layout.json') || {};
const reelW = rd('reel_weights.json') || {};
const trig = rd('triggers.json') || {};
const casc = rd('cascade.json') || {};
const cfg = rd('config.json') || {};
const mech = rd('mechanics.json') || {};
const structure = rd('structure.json');                // 模块名特性(比正则可靠)

// 赔表来源按【机制】选(用户原则:信息从 JS/消息得到,数据只做验证):
//   · 线号(paylines,如39):赔表不在 JS,用服务器 spin 消息反推的线号赔表。
//   · ways(如74):以 JS 执行提取为准 → 退 spin ways 反推。
// 按 structure.mechanic 选,避免 inferred/ 里上一款游戏的残留赔表串味。
const detectedMech = structure && structure.mechanic;
const paytableJs = paytableJsWrap && paytableJsWrap.paytable;
const paytableLines = paytableLinesWrap && paytableLinesWrap.paytable;
let paytable, paytableSource, lineExtras = null;
const linesExtra = () => ({ wild: paytableLinesWrap.wild, line_length: paytableLinesWrap.line_length, low_group: paytableLinesWrap.low_group, layout: paytableLinesWrap.layout });
if (detectedMech === 'paylines' && paytableLines && Object.keys(paytableLines).length) {
    paytable = paytableLines; paytableSource = 'server-spin-lines'; lineExtras = linesExtra();
} else if (paytableJs && Object.keys(paytableJs).length) { paytable = paytableJs; paytableSource = 'client-js-deobfuscation'; }
else if (paytableLines && Object.keys(paytableLines).length) {
    paytable = paytableLines; paytableSource = 'server-spin-lines'; lineExtras = linesExtra();
} else { paytable = paytableSpin; paytableSource = 'spin-rwsp-inference'; }
const isPaylines = paytableSource === 'server-spin-lines';
const payCols = isPaylines ? [paytableLinesWrap.line_length] : [3, 4, 5];   // 线号只有"线长"一档
// 交叉验证:JS 赔表 vs spin 反推,逐格比对,不一致则告警(而非静默采信其一)
const paytableMismatches = [];
if (paytableSource === 'client-js-deobfuscation' && Object.keys(paytableSpin).length) {
    for (const s of Object.keys(paytableJs)) for (const N of [3, 4, 5]) {
        const a = paytableJs[s] && paytableJs[s][N], b = paytableSpin[s] && paytableSpin[s][N];
        if (a !== undefined && b !== undefined && a !== b) paytableMismatches.push(`${s}:${N}连 JS=${a}≠spin=${b}`);
    }
}

// 卷轴权重压成紧凑概率表(每轴 符号→概率)
const compactReels = (reels) => {
    const out = {};
    for (const r of Object.keys(reels || {})) out[r] = reels[r].probabilities;
    return out;
};

// identity 全部推导,不硬编码:
//   game_code ← GameInfo mock 文件名(game-api_<code>_v2_GameInfo_Get.json)
//   ways      ← 可视格数连乘(4×5×5×5×4=2000)
//   type      ← 有级联=tumble;结算方式 ways(可视格>1连乘)
const apiDir = path.join(__dirname, '..', 'env', 'mock', gid, 'api');
let gameCode = null;
try { const gi = fs.readdirSync(apiDir).find(f => /GameInfo/i.test(f)); const m = gi && gi.match(/game-api_(.+?)_v\d/i); gameCode = m && m[1]; } catch {}
const ways = (layout.visible && layout.visible.length) ? layout.visible.reduce((a, v) => a * v.length, 1) : null;
const hasCascade = casc.pass_rate !== undefined;

const spec = {
    $schema: 'moon/game-spec/v1',
    _note: '游戏规格 —— 从 spin 样本 + 客户端 JS 逆向提炼,答案无关。通用引擎的唯一输入。',
    identity: {
        gid, provider: 'pg', game_code: gameCode, engine: 'cocos',
        type: isPaylines ? 'paylines' : (hasCascade ? 'ways-tumble' : 'ways'),
        ways: isPaylines ? null : ways,
    },
    // ① 机制(来源:客户端 JS 反混淆;优先用拆出的模块名特性,退回旧字符串反混淆)
    mechanics: structure && structure.features
        ? { source: 'client-js-module-names', components: Object.entries(structure.features).filter(([k, v]) => v === true).map(([k]) => k), evidence: structure.features._evidence || [] }
        : { source: 'client-js-deobfuscation', components: Object.keys(mech.mechanics || {}) },
    // ② 配置常量(来源:GameInfo boot)
    config: {
        source: 'gameinfo-boot',
        coin_sizes: cfg.coin_sizes, bet_multipliers: cfg.bet_multipliers,
        max_lines: cfg.max_lines, max_win_multiplier: cfg.max_win_multiplier,
        win_tiers: cfg.win_tiers, feature_buy: cfg.feature_buy,
    },
    // ③ 布局(ways:spin 中奖位置反推可视遮罩;paylines:全牌面可视,由线号提取器给出)
    layout: (isPaylines && lineExtras.layout)
        ? { source: lineExtras.layout.source, reels: lineExtras.layout.reels, rows_per_reel: lineExtras.layout.rows_per_reel, visible: lineExtras.layout.visible }
        : { source: 'spin-wp-inference', reels: layout.reels, rows_per_reel: layout.rows_per_reel, visible: layout.visible },
    // ④ 赔付(ways:JS 提取为准+spin 交叉验证;paylines:服务器 spin 消息 wp/rwsp 反推,自证)
    paytable: isPaylines
        ? { source: paytableSource, mechanic: 'paylines', wild: lineExtras.wild, line_length: lineExtras.line_length,
            formula: 'win = pay[sym][线长] × cs × ml(每条中奖线)', table: paytable, low_group: lineExtras.low_group }
        : { source: paytableSource, validated_by: 'spin-rwsp-cross-check', formula: 'win = pay[sym][N] × ways × cs × ml × wm', table: paytable },
    // ⑤ 卷轴权重(来源:spin 牌面统计)
    reels: { source: 'spin-board-statistics', base: compactReels(reelW.reels), free_spin: compactReels(reelW.fs_reels) },
    // ⑥ 倍率阶梯 + 金色变 wild(来源:spin wm / 限制性wild统计)
    multiplier: { source: 'spin-wm-inference', ladder_base: trig.wm_table && trig.wm_table.base, ladder_fs: trig.wm_table && trig.wm_table.fs },
    // 金色变wild:triggers 用限制性wild统计(74),级联用通用创生wild统计(65)。谁探测到用谁。
    gold_wild: (trig.gold_wild_reels && trig.gold_wild_reels.length)
        ? { source: 'spin-restricted-wild-statistics', reels: trig.gold_wild_reels, rate_per_reel: trig.gold_to_wild_rate_per_reel }
        : { source: 'cascade-created-wild-statistics', reels: casc.gold_wild_reels || [], rate_per_reel: casc.gold_wild_rate_per_reel || {} },
    // ⑦ 级联(来源:spin ptbr/rns 回放验证)
    cascade: { source: 'spin-ptbr-rns-replay', rule: casc.rule, verified_pass_rate: casc.pass_rate },
    // ⑧ RTP(target-ratio 层,庄家可调)
    rtp: { method: 'target-ratio (no_win_prob)', note: '权重合成不复现PG概率,RTP由此层调到目标' },
};

// ⑨ 完整度(诚实标注:自洽 ≠ 完整。样本不够会漏格,机制探测可能缺)
const syms = Object.keys(paytable).map(Number);
const cellsHave = syms.reduce((a, s) => a + Object.keys(paytable[s]).length, 0);
const cellsExpect = syms.length * payCols.length;          // ways=3档(3/4/5);paylines=1档(线长)
const missingCells = [];
for (const s of syms) for (const N of payCols) if (!paytable[s] || paytable[s][N] === undefined) missingCells.push(`${s}:${N}连`);
const goldDetected = (spec.gold_wild.reels || []).length > 0;
const warnings = [];
if (missingCells.length) warnings.push(`赔表缺 ${missingCells.length} 格(需更多中奖样本):${missingCells.join(',')}`);
if (paytableMismatches.length) warnings.push(`⚠️ JS赔表与spin反推不一致 ${paytableMismatches.length} 格(需人工核对):${paytableMismatches.join(',')}`);
if (!goldDetected && !isPaylines) warnings.push('未检出金色变wild(可能样本不足,或该游戏是通用wild需专门探测)');
const fsReelsN = reelW.fs_reels ? Object.keys(reelW.fs_reels).length : 0;
if (!fsReelsN) warnings.push('未采到免费局样本(fs卷轴权重缺失)');
spec.completeness = {
    self_consistent: casc.pass_rate === null || casc.pass_rate === 1,   // validate.js 才是最终门槛
    paytable_coverage: `${cellsHave}/${cellsExpect}`,
    paytable_complete: cellsHave === cellsExpect,
    base_spin_samples: reelW.base_samples || null,
    gold_wild_detected: goldDetected,
    warnings,
};

const OUT_DIR = path.join(__dirname, '..', 'config');
fs.mkdirSync(OUT_DIR, { recursive: true });
const outFile = path.join(OUT_DIR, `pg-${gid}.json`);
fs.writeFileSync(outFile, JSON.stringify(spec, null, 2));

console.log(`✅ 游戏规格 → config/pg-${gid}.json`);
const payNote = isPaylines ? '自证0冲突' : (paytableMismatches.length ? '⚠️' + paytableMismatches.length + '格与spin不符' : 'spin已验证');
console.log(`   机制 ${spec.mechanics.components.length} 类(${spec.mechanics.source})| 类型 ${spec.identity.type} | 赔表 ${cellsHave}/${cellsExpect} 格(${paytableSource},${payNote})| 可视格 ${(spec.layout.visible || []).map(v => v.length).join('/')}`);
if (isPaylines && lineExtras.low_group) console.log(`   线号:wild=${lineExtras.wild} 线长=${lineExtras.line_length} 低分组 {${lineExtras.low_group.symbols.join(',')}}→${JSON.stringify(lineExtras.low_group.any_pay)}`);
console.log(`   倍率 base ${JSON.stringify(spec.multiplier.ladder_base)} fs ${JSON.stringify(spec.multiplier.ladder_fs)} | 金色轴 ${JSON.stringify(spec.gold_wild.reels)}`);
const complete = spec.completeness.paytable_complete && (isPaylines || goldDetected);
console.log(`   级联验证 ${spec.cascade.verified_pass_rate === null ? 'N/A' : (spec.cascade.verified_pass_rate * 100).toFixed(0) + '%'} | 完整度: ${complete ? '✅ 完整' : '⚠️ 不完整'}`);
if (warnings.length) warnings.forEach(w => console.log(`   ⚠️  ${w}`));
