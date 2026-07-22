/**
 * deob-clean.js — 混淆 JS → 清晰可读代码(AST 严格变换)。
 *
 *   1. 提取字符串数组 R() + 解码器 n(j)=arr[j-OFF]
 *   2. 别名传递闭包(X=n, Y=X ... 链式,数百~数千个)
 *   3. 正则替换 <alias>(0xNNN) → 字符串字面量
 *   4. Babel AST 变换(严格,不用脆弱正则):
 *      · 折叠字符串拼接 "a"+"b" → "ab"
 *      · 消除恒真/恒假死分支 if("A"!=="B"){X}else{Y} → X
 *      · 十六进制数值 0x32 → 50
 *      · 删除死机关:字符串数组 R / 解码器 n / 悬空别名 var X=c0(会导致全局报错)
 *   5. 生成清晰代码
 *
 * 用法: node analyze/deob-clean.js <混淆js> [输出路径]
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const src = fs.readFileSync(process.argv[2], 'utf8');
const outPath = process.argv[3] || path.join(__dirname, '..', 'clean', 'clean.js');

function extractFn(name) {
    const i = src.indexOf('function ' + name + '(');
    if (i < 0) return null;
    const bs = src.indexOf('{', i);
    let d = 0;
    for (let k = bs; k < src.length; k++) {
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

// 别名传递闭包
const decoders = new Set(['n']);
const assigns = [...src.matchAll(/\b([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\b/g)].map(m => [m[1], m[2]]);
let changed = true;
while (changed) { changed = false; for (const [l, r] of assigns) if (decoders.has(r) && !decoders.has(l)) { decoders.add(l); changed = true; } }
console.log(`别名闭包 ${decoders.size} | 字符串数组 ${arr.length} | OFF 0x${OFF.toString(16)}`);

// 正则替换所有 <alias>(0xNNN) → 字面量
const aliasRe = new RegExp('(?:' + [...decoders].join('|') + ')\\((0x[0-9a-f]+)\\)', 'gi');
let replaced = 0;
let code = src.replace(aliasRe, (w, hex) => { const d = dec(hex); if (d === undefined) return w; replaced++; return JSON.stringify(d); });
console.log(`替换调用 ${replaced} 处`);

// ── Babel AST 变换 ──
const ast = parser.parse(code, { errorRecovery: true, sourceType: 'script' });
const stats = { fold: 0, deadBranch: 0, hex: 0, deadAlias: 0, deadFn: 0 };

traverse(ast, {
    // 折叠 "a"+"b" → "ab"
    BinaryExpression: {
        exit(p) {
            const { node } = p;
            if (node.operator === '+' && t.isStringLiteral(node.left) && t.isStringLiteral(node.right)) {
                p.replaceWith(t.stringLiteral(node.left.value + node.right.value)); stats.fold++;
            }
        },
    },
    // hex → 十进制(去掉 extra.raw 让生成器输出十进制)
    NumericLiteral(p) { if (p.node.extra && /^0x/i.test(p.node.extra.raw)) { delete p.node.extra; stats.hex++; } },
    // 死分支:if("A"!=="B"){X}else{Y} 两边字符串字面量 → 求值留一支。
    // 必须在 exit:此时子节点的字符串拼接("Dh"+"NIL")已折叠成字面量。
    IfStatement: {
        exit(p) {
            const test = p.node.test;
            if (t.isBinaryExpression(test) && ['===', '!==', '==', '!='].includes(test.operator)
                && t.isStringLiteral(test.left) && t.isStringLiteral(test.right)) {
                const eq = test.left.value === test.right.value;
                const truthy = (test.operator === '===' || test.operator === '==') ? eq : !eq;
                const keep = truthy ? p.node.consequent : p.node.alternate;
                if (keep) p.replaceWith(keep); else p.remove();
                stats.deadBranch++;
            }
        },
    },
    // 删死机关:字符串数组 R / 解码器 n
    FunctionDeclaration(p) { if (p.node.id && (p.node.id.name === 'R' || p.node.id.name === 'n')) { p.remove(); stats.deadFn++; } },
    // 删悬空死别名 var X = <decoder>(删 R/n 后会全局报错)
    VariableDeclarator(p) {
        if (t.isIdentifier(p.node.init) && decoders.has(p.node.init.name)) { p.remove(); stats.deadAlias++; }
    },
});

const out = generate(ast, { comments: false, compact: false, concise: false, retainLines: false }).code;
console.log(`AST变换: 折叠${stats.fold} 死分支${stats.deadBranch} hex${stats.hex} 死别名${stats.deadAlias} 死函数${stats.deadFn}`);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out);
console.log(`→ ${outPath} (${(out.length / 1e6).toFixed(2)}MB, ${out.split('\n').length} 行)`);
