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

// 大括号匹配抽出从 idx 起的 function{...}
function braceMatchFrom(text, startIdx) {
    const bs = text.indexOf('{', startIdx);
    let d = 0;
    for (let k = bs; k < text.length; k++) {
        const c = text[k];
        if (c === '{') d++;
        else if (c === '}') { d--; if (d === 0) return text.slice(startIdx, k + 1); }
        else if (c === "'" || c === '"') { k++; while (k < text.length && text[k] !== c) { if (text[k] === '\\') k++; k++; } }
    }
    return null;
}

// 按结构检测(不认名字,适配 obfuscator.io 随机命名):
// ① 字符串数组函数 = 函数体里含最大字符串数组字面量的那个 function NAME(){var V=[...]}
let arrayFn = null, arrayFnName = null, maxArr = 0;
for (const m of src.matchAll(/function\s+([A-Za-z0-9_$]+)\s*\(\s*\)\s*\{\s*var\s+[A-Za-z0-9_$]+\s*=\s*\[/g)) {
    const fnSrc = braceMatchFrom(src, m.index);
    if (!fnSrc) continue;
    const n = (fnSrc.match(/','/g) || []).length;
    if (n > maxArr) { maxArr = n; arrayFn = fnSrc; arrayFnName = m[1]; }
}
if (!arrayFn) { console.error('未检测到字符串数组函数'); process.exit(1); }
// ② 解码器 = 调用了数组函数、且带 -0x偏移 的函数
const decRe = new RegExp('function\\s+([A-Za-z0-9_$]+)\\s*\\([^)]*\\)\\s*\\{[\\s\\S]{0,120}?\\b' + arrayFnName + '\\(\\)[\\s\\S]{0,200}?[=-]\\s*(0x[0-9a-f]+)', 'i');
const dm = src.match(decRe);
if (!dm) { console.error('未检测到解码器函数'); process.exit(1); }
const decoderName = dm[1], OFF = parseInt(dm[2], 16);
const arr = eval(arrayFn.replace(/^function\s+[A-Za-z0-9_$]+/, 'function ' + arrayFnName) + '\n ' + arrayFnName + '();');
const dec = (hex) => arr[parseInt(hex, 16) - OFF];
console.log(`检测:数组函数 ${arrayFnName}(${arr.length}) | 解码器 ${decoderName} | 偏移 0x${OFF.toString(16)}`);

// 别名传递闭包(从检测到的解码器名出发)
const decoders = new Set([decoderName]);
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
const stats = { fold: 0, deadBranch: 0, hex: 0, deadAlias: 0, deadFn: 0, bool: 0, undef: 0, dot: 0 };

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
    // 删死机关:字符串数组函数 / 解码器(检测到的名字)
    FunctionDeclaration(p) { if (p.node.id && (p.node.id.name === arrayFnName || p.node.id.name === decoderName)) { p.remove(); stats.deadFn++; } },
    // 删悬空死别名 var X = <decoder>(删 R/n 后会全局报错)
    VariableDeclarator(p) {
        if (t.isIdentifier(p.node.init) && decoders.has(p.node.init.name)) { p.remove(); stats.deadAlias++; }
    },
});

// 第二遍:美化类变换(放单独一遍,避免第一遍的结构改动导致同级节点被跳过)
traverse(ast, {
    UnaryExpression(p) {
        const n = p.node;
        if (n.operator === '!' && t.isNumericLiteral(n.argument)) { p.replaceWith(t.booleanLiteral(n.argument.value === 0)); stats.bool++; }
        else if (n.operator === 'void' && t.isNumericLiteral(n.argument)) { p.replaceWith(t.identifier('undefined')); stats.undef++; }
    },
    MemberExpression(p) {
        const n = p.node;
        if (n.computed && t.isStringLiteral(n.property) && /^[A-Za-z_$][\w$]*$/.test(n.property.value)) {
            n.property = t.identifier(n.property.value); n.computed = false; stats.dot++;
        }
    },
});

// 第三遍:模块参数按【用法】重命名(不写死位置)。
//   require = 被当函数调用且传字符串;module = 被访问 .exports;exports = 被赋属性。
traverse(ast, {
    ObjectProperty(p) {
        const val = p.node.value;
        if (!t.isArrayExpression(val) || !val.elements.length) return;
        const fnPath = p.get('value.elements.0');
        if (!fnPath.isFunctionExpression() && !fnPath.isArrowFunctionExpression()) return;
        const wanted = {};   // paramName → 目标名(去重:require/module/exports 各一个)
        const taken = new Set();
        for (const paramPath of fnPath.get('params')) {
            if (!paramPath.isIdentifier()) continue;
            const name = paramPath.node.name;
            const binding = fnPath.scope.getBinding(name);
            if (!binding) continue;
            let req = 0, mod = 0, exp = 0;
            for (const ref of binding.referencePaths) {
                const par = ref.parent;
                if (t.isCallExpression(par) && par.callee === ref.node && par.arguments.some(a => t.isStringLiteral(a))) req++;
                else if (t.isMemberExpression(par) && par.object === ref.node) {
                    const key = t.isIdentifier(par.property) ? par.property.name : (t.isStringLiteral(par.property) ? par.property.value : null);
                    if (key === 'exports') mod++;
                    else if (ref.parentPath.parentPath && ref.parentPath.parentPath.isAssignmentExpression({ operator: '=' })
                        && ref.parentPath.parentPath.node.left === par) exp++;
                }
            }
            let target = null;
            if (req >= mod && req >= exp && req > 0) target = 'require';
            else if (mod >= exp && mod > 0) target = 'module';
            else if (exp > 0) target = 'exports';
            if (target && !taken.has(target)) { wanted[name] = target; taken.add(target); }
        }
        for (const [oldN, newN] of Object.entries(wanted)) {
            if (oldN !== newN && !fnPath.scope.hasBinding(newN)) { fnPath.scope.rename(oldN, newN); stats.param = (stats.param || 0) + 1; }
        }
        p.skip();
    },
});

const out = generate(ast, { comments: false, compact: false, concise: false, retainLines: false }).code;
console.log(`AST变换: 折叠${stats.fold} 死分支${stats.deadBranch} hex${stats.hex} 死别名${stats.deadAlias} 死函数${stats.deadFn} 布尔${stats.bool} undef${stats.undef} 点属性${stats.dot} 参数重命名${stats.param || 0}`);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, out);
console.log(`→ ${outPath} (${(out.length / 1e6).toFixed(2)}MB, ${out.split('\n').length} 行)`);
