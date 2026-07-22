/**
 * roundtrip.js — 闭环校验反混淆器(用户思路:混淆+反混淆做校验)。
 *
 *   干净代码 --obfuscate--> 混淆 --deob-clean--> 反混淆,归一化后应 == 干净代码。
 * 成立 = 反混淆器在"已知答案"上被证明正确(答案无关的自校验)。
 * 在真实清晰模块上跑,可回归验证反混淆器不被后续改动搞坏。
 *
 * 用法: node analyze/roundtrip.js <clean.js> [--offset=0x123]
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const input = process.argv[2];
const offset = (process.argv.find(a => a.startsWith('--offset=')) || '--offset=0x2a3');
const tmp = process.env.TMPDIR || '.';
const obf = path.join(tmp, 'rt.obf.js'), deob = path.join(tmp, 'rt.deob.js');
const A = __dirname;

// 归一化:去掉引号/进制的 raw 表示,只比语义
function norm(code) {
    const ast = parser.parse(code, { sourceType: 'script', errorRecovery: true });
    traverse(ast, { StringLiteral(p) { delete p.node.extra; }, NumericLiteral(p) { delete p.node.extra; } });
    return generate(ast, { comments: false }).code;
}

try {
    execSync(`node "${path.join(A, 'obfuscate.js')}" "${input}" "${obf}" ${offset}`, { stdio: 'pipe' });
    execSync(`node "${path.join(A, 'deob-clean.js')}" "${obf}" "${deob}"`, { stdio: 'pipe' });
} catch (e) { console.error('混淆/反混淆出错:', e.stderr ? e.stderr.toString().slice(0, 200) : e.message); process.exit(1); }

const orig = norm(fs.readFileSync(input, 'utf8'));
const back = norm(fs.readFileSync(deob, 'utf8'));
const pass = orig === back;
console.log(`闭环 [${path.basename(input)}]: ${pass ? '✅ 反混淆(混淆(x)) == x' : '❌ 不一致'}`);
if (!pass) {
    const o = orig.split('\n'), d = back.split('\n');
    for (let i = 0; i < Math.max(o.length, d.length); i++)
        if (o[i] !== d[i]) { console.log(`首个差异 行${i}:\n  原: ${(o[i] || '').slice(0, 80)}\n  反: ${(d[i] || '').slice(0, 80)}`); break; }
}
process.exit(pass ? 0 : 1);
