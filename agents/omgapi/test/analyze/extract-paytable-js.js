/**
 * extract-paytable-js.js — 从深度反混淆后的清晰 JS 提取赔表(不用采样、不用答案)。
 *
 * 前置:先用 deob-clean.js 得到清晰代码。清晰代码里 GameConstant 模块有:
 *   q["PayOutData"] = { 0x0:h, 0x1:g, 0x2:l, ... }   ← 符号码 → 赔付变量
 *   var l={}; l['5']=0x32; l['4']=0x19; l['3']=0xa;   ← 该符号 5/4/3 连的赔率(16进制)
 * 本脚本解析出符号码→变量→{3,4,5:赔率}。只有 label(wild/scatter)的跳过。
 *
 * 用法: node analyze/extract-paytable-js.js <clean.js>
 */
const fs = require('fs');
const path = require('path');
const jsFull = fs.readFileSync(process.argv[2], 'utf8');

// 单字母变量在全文到处都是 → 必须把搜索限制在 GameConstant 模块作用域内。
const podIdx = jsFull.search(/PayOutData"?\]?\s*=\s*\{/);
if (podIdx < 0) { console.error('找不到 PayOutData 定义(先跑 deob-clean 得到清晰代码)'); process.exit(1); }
const modStart = jsFull.lastIndexOf("'GameConstant'", podIdx);
const podEnd = jsFull.indexOf('}', podIdx);
// 作用域:模块开头 → PayOutData 定义结束(变量声明都在这段里)
const js = jsFull.slice(modStart >= 0 ? modStart : Math.max(0, podIdx - 8000), podEnd + 1);

// 1) PayOutData = { 0xN: varName, ... }
const podMatch = js.match(/PayOutData"?\]?\s*=\s*\{([^}]+)\}/);
const symToVar = {};
for (const m of podMatch[1].matchAll(/(0x[0-9a-f]+|\d+)\s*:\s*([A-Za-z_$][\w$]*)/gi))
    symToVar[parseInt(m[1])] = m[2];

// 2) 每个变量的 X['3']=0x.. / X['4'] / X['5'](仅在模块作用域内搜)
function payOf(varName) {
    const pay = {};
    const re = new RegExp('\\b' + varName + "\\s*\\[\\s*['\"]?([345])['\"]?\\s*\\]\\s*=\\s*(0x[0-9a-f]+|\\d+)", 'g');  // 大小写敏感:l≠L
    for (const m of js.matchAll(re)) pay[m[1]] = parseInt(m[2]);
    return pay;
}

const paytable = {};
for (const [sym, v] of Object.entries(symToVar)) {
    const pay = payOf(v);
    if (Object.keys(pay).length) paytable[sym] = pay;   // 只有 label 的(wild/scatter)自动跳过
}

const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'paytable_from_js.json'),
    JSON.stringify({ source: 'client-js-deobfuscation (GameConstant.PayOutData)', paytable }, null, 2));

console.log('=== 从 JS 提取的赔表(深度反混淆,无采样)===');
console.log('PayOutData 符号→变量:', JSON.stringify(symToVar));
const syms = Object.keys(paytable).map(Number).sort((a, b) => a - b);
console.log('符号  3连  4连  5连');
for (const s of syms) console.log(`  ${String(s).padStart(2)}  ${[3, 4, 5].map(N => String(paytable[s][N] ?? '-').padStart(4)).join(' ')}`);
console.log(`\n共 ${syms.length} 个赔付符号 → analyze/inferred/paytable_from_js.json`);
