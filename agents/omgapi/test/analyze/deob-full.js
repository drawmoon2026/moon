/**
 * deob-full.js — 全量反混淆:把 bundle 里所有字符串数组调用替换成真实字符串,
 *   产出可读版本,便于从中找算法逻辑(赔表/布局/公式常量)。
 * 用法: node analyze/deob-full.js <混淆js> [输出路径]
 */
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');
const outPath = process.argv[3] || 'analyze/deob/index74.deob.js';

// 抽 R 函数(返回字符串数组)
function extractFn(name) {
    const i = src.indexOf('function ' + name + '(');
    if (i < 0) return null;
    const bodyStart = src.indexOf('{', i);
    let d = 0;
    for (let k = bodyStart; k < src.length; k++) {
        const c = src[k];
        if (c === '{') d++;
        else if (c === '}') { d--; if (d === 0) return src.slice(i, k + 1); }
        else if (c === "'" || c === '"') { k++; while (k < src.length && src[k] !== c) { if (src[k] === '\\') k++; k++; } }
    }
    return null;
}
const Rsrc = extractFn('R');
const OFF = parseInt((src.match(/j=j-(0x[0-9a-f]+)/i) || [])[1] || '0x179', 16);
const arr = eval(Rsrc + '\n R();');
const dec = (hex) => arr[parseInt(hex, 16) - OFF];

// 找所有 = n 的解码别名(var c0=n; var c1=n; ...)
const aliases = new Set(['n']);
for (const m of src.matchAll(/([A-Za-z_$][\w$]*)\s*=\s*n\b/g)) aliases.add(m[1]);
console.log('解码别名:', [...aliases].join(', '), '| 数组', arr.length, '| OFF 0x' + OFF.toString(16));

// 全局替换 alias(0xNNN) → 解码后的字符串字面量
const aliasRe = new RegExp('(?:' + [...aliases].join('|') + ')\\((0x[0-9a-f]+)\\)', 'gi');
let replaced = 0;
const out = src.replace(aliasRe, (whole, hex) => {
    const d = dec(hex);
    if (d === undefined) return whole;
    replaced++;
    return JSON.stringify(d);
});
// 合并相邻字符串字面量拼接 "a"+"b" → "ab",还原完整标识符
let folded = out, passes = 0;
const foldRe = /"((?:[^"\\]|\\.)*)"\s*\+\s*"((?:[^"\\]|\\.)*)"/g;
let prev;
do { prev = folded; folded = folded.replace(foldRe, (_, a, b) => JSON.stringify(JSON.parse('"' + a + '"') + JSON.parse('"' + b + '"'))); passes++; }
while (folded !== prev && passes < 12);

fs.mkdirSync('analyze/deob', { recursive: true });
fs.writeFileSync(outPath, folded);
console.log(`替换 ${replaced} 处调用,合并拼接 ${passes} 轮 → ${outPath} (${(folded.length / 1e6).toFixed(1)}MB)`);
