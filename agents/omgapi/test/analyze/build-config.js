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

const paytable = rd('paytable.json') || {};
const layout = rd('layout.json') || {};
const reelW = rd('reel_weights.json') || {};
const trig = rd('triggers.json') || {};
const casc = rd('cascade.json') || {};
const cfg = rd('config.json') || {};
const mech = rd('mechanics.json') || {};

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
        type: hasCascade ? 'ways-tumble' : 'ways', ways,
    },
    // ① 机制(来源:客户端 JS 反混淆)
    mechanics: {
        source: 'client-js-deobfuscation',
        components: Object.keys(mech.mechanics || {}),
    },
    // ② 配置常量(来源:GameInfo boot)
    config: {
        source: 'gameinfo-boot',
        coin_sizes: cfg.coin_sizes, bet_multipliers: cfg.bet_multipliers,
        max_lines: cfg.max_lines, max_win_multiplier: cfg.max_win_multiplier,
        win_tiers: cfg.win_tiers, feature_buy: cfg.feature_buy,
    },
    // ③ 布局(来源:spin 中奖位置反推)
    layout: {
        source: 'spin-wp-inference',
        reels: layout.reels, rows_per_reel: layout.rows_per_reel, visible: layout.visible,
    },
    // ④ 赔付(来源:spin rwsp/wp)
    paytable: { source: 'spin-rwsp-inference', formula: 'win = pay[sym][N] × ways × cs × ml × wm', table: paytable },
    // ⑤ 卷轴权重(来源:spin 牌面统计)
    reels: { source: 'spin-board-statistics', base: compactReels(reelW.reels), free_spin: compactReels(reelW.fs_reels) },
    // ⑥ 倍率阶梯 + 金色变 wild(来源:spin wm / 限制性wild统计)
    multiplier: { source: 'spin-wm-inference', ladder_base: trig.wm_table && trig.wm_table.base, ladder_fs: trig.wm_table && trig.wm_table.fs },
    gold_wild: { source: 'spin-restricted-wild-statistics', reels: trig.gold_wild_reels, rate_per_reel: trig.gold_to_wild_rate_per_reel },
    // ⑦ 级联(来源:spin ptbr/rns 回放验证)
    cascade: { source: 'spin-ptbr-rns-replay', rule: casc.rule, verified_pass_rate: casc.pass_rate },
    // ⑧ RTP(target-ratio 层,庄家可调)
    rtp: { target: (cfg.max_win_multiplier ? undefined : undefined), method: 'target-ratio (no_win_prob)', note: '权重合成不复现PG概率,RTP由此层调到目标' },
};

const OUT_DIR = path.join(__dirname, '..', 'config');
fs.mkdirSync(OUT_DIR, { recursive: true });
const outFile = path.join(OUT_DIR, `pg-${gid}.json`);
fs.writeFileSync(outFile, JSON.stringify(spec, null, 2));

console.log(`✅ 游戏规格 → config/pg-${gid}.json`);
console.log(`   机制 ${spec.mechanics.components.length} 类 | 赔表 ${Object.keys(paytable).length} 符号 | 可视格 ${(layout.visible || []).map(v => v.length).join('/')}`);
console.log(`   倍率 base ${JSON.stringify(spec.multiplier.ladder_base)} fs ${JSON.stringify(spec.multiplier.ladder_fs)} | 金色轴 ${JSON.stringify(spec.gold_wild.reels)}`);
console.log(`   级联验证 ${(spec.cascade.verified_pass_rate * 100).toFixed(0)}% | 配置 币值${JSON.stringify(spec.config.coin_sizes)} 最大倍率${spec.config.max_win_multiplier}`);
