/**
 * deob-clean.js — 把混淆 JS 彻底反混淆成一份清晰、可读的代码(第一步)。
 *
 *   1. 提取字符串数组 R() 与解码器 n(j)=arr[j-OFF]
 *   2. 传递闭包解析所有别名(X=n, Y=X, Z=Y ... 链式,共数百个)
 *   3. 全局替换 <alias>(0xNNN) → 解码后的字符串字面量
 *   4. 合并相邻字符串拼接 "a"+"b" → "ab"
 *   5. js-beautify 格式化成多行可读代码
 *
 * 用法: node analyze/deob-clean.js <混淆js> [输出路径]
 */
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js;

const src = fs.readFileSync(process.argv[2], 'utf8');
// 清晰代码是产物,放项目 clean/ 目录(不藏在临时/gitignore 的 deob 里)
const outPath = process.argv[3] || path.join(__dirname, '..', 'clean', 'clean.js');

// 提取 function R(){...}
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
if (!Rsrc) { console.error('找不到字符串数组函数 R'); process.exit(1); }
const OFF = parseInt((src.match(/j=j-(0x[0-9a-f]+)/i) || [])[1] || '0x179', 16);
const arr = eval(Rsrc + '\n R();');
const dec = (hex) => arr[parseInt(hex, 16) - OFF];

// 别名传递闭包:从 n 出发,X=<已知别名> 也是别名,迭代到稳定
const decoders = new Set(['n']);
const assigns = [...src.matchAll(/\b([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\b/g)].map(m => [m[1], m[2]]);
let changed = true;
while (changed) {
    changed = false;
    for (const [lhs, rhs] of assigns) if (decoders.has(rhs) && !decoders.has(lhs)) { decoders.add(lhs); changed = true; }
}
console.log(`解码器别名(传递闭包): ${decoders.size} 个 | 字符串数组 ${arr.length} | OFF 0x${OFF.toString(16)}`);

// 替换所有 <alias>(0xNNN)
const aliasRe = new RegExp('(?:' + [...decoders].join('|') + ')\\((0x[0-9a-f]+)\\)', 'gi');
let replaced = 0;
let out = src.replace(aliasRe, (whole, hex) => { const d = dec(hex); if (d === undefined) return whole; replaced++; return JSON.stringify(d); });

// 合并字符串拼接 "a"+"b" → "ab"(双引号+单引号混合也处理)
const foldRe = /"((?:[^"\\]|\\.)*)"\s*\+\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')/g;
let prev;
do { prev = out; out = out.replace(foldRe, (_, a, b, c) => JSON.stringify(JSON.parse('"' + a + '"') + (b !== undefined ? JSON.parse('"' + b + '"') : c))); }
while (out !== prev);

// 格式化
let pretty;
try { pretty = beautify(out, { indent_size: 2, max_preserve_newlines: 2, brace_style: 'collapse' }); }
catch (e) { console.log('格式化跳过(' + e.message + '),输出未格式化'); pretty = out; }

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, pretty);
console.log(`替换 ${replaced} 处 → ${outPath} (${(pretty.length / 1e6).toFixed(1)}MB, ${pretty.split('\n').length} 行)`);
