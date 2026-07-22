/**
 * extract-paytable-js.js — 从深度反混淆的清晰 JS 提取赔表(执行式,严格作用域+大小写)。
 *
 * 不用正则去匹配 X['3']=..(单字母变量全文重名、大小写易错、作用域会串)。
 * 改为:抽出 GameConstant 模块函数,在 vm 沙箱里执行,读出 exports.PayOutData 的真实值。
 * JS 引擎天然保证词法作用域与大小写正确 —— 从根上杜绝解析错误。
 *
 * 前置:先 deob-clean.js 得到清晰代码。
 * 用法: node analyze/extract-paytable-js.js <clean.js>
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const jsFull = fs.readFileSync(process.argv[2], 'utf8');

// 用 AST 精确定位"PayOutData 赋值所在的模块函数"(名字无关,兼容整份清晰代码与拆出的单模块文件)。
// getFunctionParent 拿到的是外层模块函数,不会误取内层枚举 IIFE。
let fnNode = null;
{
    const ast = parser.parse(jsFull, { errorRecovery: true, sourceType: 'script' });
    traverse(ast, {
        AssignmentExpression(p) {
            if (fnNode) return;
            const left = p.node.left;
            const isPayout = t.isMemberExpression(left) &&
                ((t.isStringLiteral(left.property) && left.property.value === 'PayOutData') ||
                 (t.isIdentifier(left.property) && left.property.name === 'PayOutData'));
            if (isPayout && t.isObjectExpression(p.node.right)) {
                const fp = p.getFunctionParent();
                if (fp) fnNode = fp.node;
            }
        },
    });
}
if (!fnNode) { console.error('找不到定义 PayOutData 的模块(先跑 deob-clean.js;或此游戏非 PayOutData 结构)'); process.exit(1); }
const fnSrc = generate(fnNode).code;

// 沙箱:cc._RF.push 返回 falsy(进入定义分支);其余按需 stub。抛错也无妨,读已赋值的 exports。
const exportsObj = {};
const noop = () => {};
const stubProxy = new Proxy(function () { return stubProxy; }, {
    get: () => stubProxy, apply: () => stubProxy, construct: () => ({}),
});
const sandbox = {
    cc: { _RF: { push: () => false, pop: noop }, Enum: (x) => x, js: { getClassName: () => '' } },
    System: { get: () => ({}) }, __assign: Object.assign,
    Object, Array, Math, JSON, Number, String, Boolean, Symbol, console: { log: noop, warn: noop, error: noop },
    module: { exports: exportsObj }, exports: exportsObj, shell: stubProxy, window: {}, globalThis: {},
};
// 反混淆后残留的裸解码器别名引用(如 var ZB=c0)——全部 stub 掉,免得未定义抛错。
// 从模块源码里扫出 `var X = <单个标识符>` 的右值别名,注入 stub。
for (const m of fnSrc.matchAll(/\bvar\s+[A-Za-z_$][\w$]*\s*=\s*([A-Za-z_$][\w$]*)\s*[;,]/g)) {
    const rhs = m[1];
    if (!(rhs in sandbox)) sandbox[rhs] = () => '';
}
vm.createContext(sandbox);
try {
    // 用 require/module/exports stub 调用模块函数
    const runner = `(${fnSrc})(function(){return {}}, {exports: exports}, exports);`;
    vm.runInContext(runner, sandbox, { timeout: 3000 });
} catch (e) { /* 后续行缺依赖抛错无妨,PayOutData 已在前面赋值 */ }

const POD = exportsObj.PayOutData || sandbox.exports.PayOutData;
if (!POD) { console.error('执行后未拿到 PayOutData(模块结构可能不同,需针对性适配)'); process.exit(1); }

// PayOutData: { 符号码: {3:pay,4:pay,5:pay} 或 {label:..} }。只有 3/4/5 数值的才是赔付符号。
const paytable = {};
for (const sym of Object.keys(POD)) {
    const v = POD[sym]; if (!v || typeof v !== 'object') continue;
    const pay = {};
    for (const N of [3, 4, 5]) if (typeof v[N] === 'number') pay[N] = v[N];
    if (Object.keys(pay).length) paytable[Number(sym)] = pay;
}

const OUT = path.join(__dirname, 'inferred');
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'paytable_from_js.json'),
    JSON.stringify({ source: 'client-js-deobfuscation (执行 GameConstant.PayOutData,严格作用域)', paytable }, null, 2));

console.log('=== 从 JS 执行提取的赔表(严格作用域+大小写)===');
const syms = Object.keys(paytable).map(Number).sort((a, b) => a - b);
console.log('符号  3连  4连  5连');
for (const s of syms) console.log(`  ${String(s).padStart(2)}  ${[3, 4, 5].map(N => String(paytable[s][N] ?? '-').padStart(4)).join(' ')}`);
console.log(`\n共 ${syms.length} 个赔付符号 → analyze/inferred/paytable_from_js.json`);
