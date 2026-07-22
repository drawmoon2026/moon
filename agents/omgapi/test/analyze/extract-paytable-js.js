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
const jsFull = fs.readFileSync(process.argv[2], 'utf8');

// 抽出 'GameConstant': [function(V,N,q){ ... }, ...] 里的那个 function
function extractModuleFn(src, moduleName) {
    const key = "'" + moduleName + "'";
    const ki = src.indexOf(key);
    if (ki < 0) return null;
    const fi = src.indexOf('function', ki);
    if (fi < 0) return null;
    const bodyStart = src.indexOf('{', fi);
    let d = 0;
    for (let k = bodyStart; k < src.length; k++) {
        const c = src[k];
        if (c === '{') d++;
        else if (c === '}') { d--; if (d === 0) return src.slice(fi, k + 1); }
        else if (c === "'" || c === '"' || c === '`') { const q = c; k++; while (k < src.length && src[k] !== q) { if (src[k] === '\\') k++; k++; } }
    }
    return null;
}

const fnSrc = extractModuleFn(jsFull, 'GameConstant');
if (!fnSrc) { console.error('清晰代码里找不到 GameConstant 模块(先跑 deob-clean.js)'); process.exit(1); }

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
