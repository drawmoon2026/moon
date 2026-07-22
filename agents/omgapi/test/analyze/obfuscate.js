/**
 * obfuscate.js — 仿 obfuscator.io 核心变换的迷你混淆器(用于闭环校验反混淆器)。
 *
 * 思路(用户提出):混淆 + 反混淆做校验 —— 反混淆(混淆(干净代码)) 应 == 干净代码。
 * 若成立,则反混淆器在"已知答案"上被证明正确(答案无关的自校验);
 * 让本混淆器输出逼近真实 PG 混淆,还能反推真实混淆算法。
 *
 * 覆盖的变换(与 deob-clean 一一对应,便于闭环):
 *   · 字符串字面量 → 字符串数组 + 解码器 decoder(0xIndex)
 *   · true/false → !0 / !1
 *   · 十进制数 → 十六进制
 *   · 点属性 X.name → 括号 X["name"]
 *
 * 用法: node analyze/obfuscate.js <clean.js> [输出] [--offset=0x100]
 */
const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const inPath = process.argv[2];
const outPath = process.argv[3] && !process.argv[3].startsWith('--') ? process.argv[3] : inPath.replace(/\.js$/, '.obf.js');
const OFFSET = parseInt((process.argv.find(a => a.startsWith('--offset=')) || '--offset=0x2a3').split('=')[1], 16);

const code = fs.readFileSync(inPath, 'utf8');
const ast = parser.parse(code, { sourceType: 'script' });

// 字符串数组:去重收集,index+OFFSET 作为解码键
const strings = [];
const strIndex = new Map();
function intern(s) {
    if (strIndex.has(s)) return strIndex.get(s);
    const i = strings.length; strings.push(s); strIndex.set(s, i); return i;
}
const DEC = '_d';     // 解码器名(固定,反混淆器按结构检测,不认名字)

traverse(ast, {
    StringLiteral(p) {
        // 跳过已经是解码调用的、以及对象键/import 等不便替换的位置
        if (p.parentPath.isObjectProperty({ key: p.node }) && !p.parentPath.node.computed) return;
        if (p.parentPath.isImportDeclaration() || p.parentPath.isExportDeclaration()) return;
        const idx = intern(p.node.value);
        p.replaceWith(t.callExpression(t.identifier(DEC), [t.numericLiteral(idx + OFFSET)]));
        p.skip();
    },
    BooleanLiteral(p) {
        // true → !0 ; false → !1
        p.replaceWith(t.unaryExpression('!', t.numericLiteral(p.node.value ? 0 : 1)));
        p.skip();
    },
    MemberExpression(p) {
        const n = p.node;
        if (!n.computed && t.isIdentifier(n.property)) {
            n.property = t.stringLiteral(n.property.name); n.computed = true;
        }
    },
});

// 数字 → 十六进制(在 generate 时通过 extra.raw)
traverse(ast, {
    NumericLiteral(p) {
        const v = p.node.value;
        if (Number.isInteger(v) && v >= 0) { p.node.extra = { raw: '0x' + v.toString(16), rawValue: v }; }
    },
});

let body = generate(ast, { comments: false }).code;

// 字符串数组机关:function _a(){var arr=[...];_a=function(){return arr};return _a()}
//                 function _d(i){var a=_a();_d=function(j){j=j-OFFSET;return a[j]};return _d(i)}
const arrLit = JSON.stringify(strings);
const prelude =
    `function _a(){var arr=${arrLit};_a=function(){return arr};return _a();}\n` +
    `function _d(i){var a=_a();_d=function(j){j=j-0x${OFFSET.toString(16)};return a[j];};return _d(i);}\n`;

fs.writeFileSync(outPath, prelude + body);
console.log(`混淆完成 → ${outPath}`);
console.log(`  字符串数组 ${strings.length} | 偏移 0x${OFFSET.toString(16)} | 解码器 ${DEC}`);
