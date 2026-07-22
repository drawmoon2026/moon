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
const DEC = '_d';     // 解码器基名
const ALIASES = ['_d', '_e0', '_e1', '_e2'];   // 链式别名(逼近真实 PG 的 pE=pJ=pb...)
const rnd = () => Math.random();
const randId = () => Array.from({ length: 5 }, () => 'abcdefghijklmnopqrstuvwxyz'[(rnd() * 26) | 0]).join('');
// 一个字符串 → 解码调用(随机用别名);长串随机拆成两段拼接(逼近真实的碎片拼接)
function decodeCall(str) {
    const alias = ALIASES[(rnd() * ALIASES.length) | 0];
    if (str.length >= 4 && rnd() < 0.6) {
        const cut = 1 + ((rnd() * (str.length - 1)) | 0);
        const a = ALIASES[(rnd() * ALIASES.length) | 0], b = ALIASES[(rnd() * ALIASES.length) | 0];
        return t.binaryExpression('+',
            t.callExpression(t.identifier(a), [t.numericLiteral(intern(str.slice(0, cut)) + OFFSET)]),
            t.callExpression(t.identifier(b), [t.numericLiteral(intern(str.slice(cut)) + OFFSET)]));
    }
    return t.callExpression(t.identifier(alias), [t.numericLiteral(intern(str) + OFFSET)]);
}

traverse(ast, {
    StringLiteral(p) {
        if (p.parentPath.isObjectProperty({ key: p.node }) && !p.parentPath.node.computed) return;
        if (p.parentPath.isImportDeclaration() || p.parentPath.isExportDeclaration()) return;
        p.replaceWith(decodeCall(p.node.value));
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

// 死分支(opaque predicate):把部分表达式语句包进 if("A"!=="B"){真}else{假}(A≠B 恒真)
traverse(ast, {
    ExpressionStatement(p) {
        // 只包语句列表里的语句(p.inList);裸 for/if 体是单语句槽,包了会多出块,无法完美还原
        if (p.inList && rnd() < 0.4 && !p.findParent(x => x.isObjectExpression())) {
            const a = randId(), b = randId();  // 两个不同随机串 → !== 恒真
            p.replaceWith(t.ifStatement(
                t.binaryExpression('!==', t.stringLiteral(a), t.stringLiteral(b)),
                t.blockStatement([p.node]),
                t.blockStatement([t.expressionStatement(t.callExpression(t.identifier('_junk'), []))])));
            p.skip();
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
    `function _d(i){var a=_a();_d=function(j){j=j-0x${OFFSET.toString(16)};return a[j];};return _d(i);}\n` +
    `var _e0=_d,_e1=_e0,_e2=_e1;\n`;   // 链式别名(逼近真实 PG 的 pE=pJ=pb...)

fs.writeFileSync(outPath, prelude + body);
console.log(`混淆完成 → ${outPath}`);
console.log(`  字符串数组 ${strings.length} | 偏移 0x${OFFSET.toString(16)} | 解码器 ${DEC}`);
