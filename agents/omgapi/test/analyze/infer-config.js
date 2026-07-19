/**
 * infer-config.js — 从 GameInfo boot mock 提取服务端配置常量(答案无关)
 * GameInfo 是服务器 boot 时下发给客户端的,含币值/线数/最大倍率/大奖档位等。
 * 产出: analyze/inferred/config.json
 * 用法: node analyze/infer-config.js [gid]
 */
const fs = require('fs');
const path = require('path');

const gid = process.argv[2] || '74';
const dir = path.join(__dirname, '..', 'env', 'mock', gid, 'api');
const giFile = fs.readdirSync(dir).find(f => /GameInfo/i.test(f));
if (!giFile) { console.error('找不到 GameInfo mock'); process.exit(1); }
const dt = JSON.parse(fs.readFileSync(path.join(dir, giFile), 'utf8')).response.body.dt;

const config = {
    description: '服务端 boot 配置(GameInfo),答案无关',
    coin_sizes: dt.cs, bet_multipliers: dt.ml, max_lines: dt.mxl,
    max_win_multiplier: dt.maxwm, win_tiers: dt.wt,
    feature_buy: dt.fb && dt.fb.is === true,
};
fs.mkdirSync(path.join(__dirname, 'inferred'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'inferred', 'config.json'), JSON.stringify(config, null, 2));

console.log('配置提取 → analyze/inferred/config.json');
console.log(`  币值 ${JSON.stringify(dt.cs)} | 投注档 x${dt.ml.length} | 最大倍率 ${dt.maxwm} | 大奖档位 ${JSON.stringify(dt.wt)} | 可买免费局 ${config.feature_buy}`);
