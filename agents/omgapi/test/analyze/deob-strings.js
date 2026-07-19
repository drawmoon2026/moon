/**
 * deob-strings.js — 还原 obfuscator.io 字符串数组,搜出客户端 JS 里的关键信息
 * 用法: node analyze/deob-strings.js <混淆js路径>
 * 思路:提取 function R(){...}(返回字符串数组)与解码器 n(j)=arr[j-0x179],
 *       eval 出数组,把文件里所有 c0(0x..)+c0(0x..)+... 解码拼接,再搜关键词。
 */
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');

// 大括号匹配抽出 function R(){...}
function extractFn(name) {
    const i = src.indexOf('function ' + name + '(');
    if (i < 0) return null;
    const bodyStart = src.indexOf('{', i);
    let d = 0;
    for (let k = bodyStart; k < src.length; k++) {
        const c = src[k];
        if (c === '{') d++;
        else if (c === '}') { d--; if (d === 0) return src.slice(i, k + 1); }
        // 跳过字符串(粗略:遇引号跳到配对)
        else if (c === "'" || c === '"') { k++; while (k < src.length && src[k] !== c) { if (src[k] === '\\') k++; k++; } }
    }
    return null;
}

const Rsrc = extractFn('R');
if (!Rsrc) { console.error('找不到 R 函数'); process.exit(1); }
// 求 offset:n=function(j,i){j=j-0xNNN;...}
const offMatch = src.match(/j=j-(0x[0-9a-f]+)/i);
const OFF = offMatch ? parseInt(offMatch[1], 16) : 0x179;

// eval R 得数组
let arr;
// R 是函数声明(自身可重赋值);必须按声明 eval 后再调用,不能包成表达式(否则自引用只读→无限递归)
try { arr = eval(Rsrc + '\n R();'); }
catch (e) { console.error('eval R 失败:', e.message); process.exit(1); }
console.log('字符串数组长度:', arr.length, '| 偏移 OFF =', '0x' + OFF.toString(16));
const dec = (hex) => arr[parseInt(hex, 16) - OFF];

// 把文件里所有 c0(0x..)[+c0(0x..)]* 序列解码成完整字符串
const seqRe = /c0\((0x[0-9a-f]+)\)(?:\s*\+\s*(?:c0\(0x[0-9a-f]+\)|'[^']*'))*/gi;
const strings = new Set();
let m;
while ((m = seqRe.exec(src))) {
    // 拼接:c0(0x..) 解码 + 'literal' 原样
    const parts = m[0].match(/c0\(0x[0-9a-f]+\)|'[^']*'/gi) || [];
    let out = '';
    for (const p of parts) {
        if (p[0] === "'") out += p.slice(1, -1);
        else { const h = p.match(/0x[0-9a-f]+/i)[0]; const d = dec(h); if (d === undefined) { out = null; break; } out += d; }
    }
    if (out && out.length > 2) strings.add(out);
}
console.log('还原出可读字符串:', strings.size, '个');

// 搜关键信息
const all = [...strings];
const KEYS = ['pay', 'symbol', 'wild', 'scatter', 'way', 'reel', 'free', 'multipl', 'tumble', 'atlas', 'low_payout', 'gold', 'visible', 'RTP', 'bet'];
console.log('\n=== 命中关键词的字符串(去重前 40)===');
const hits = all.filter(s => KEYS.some(k => s.toLowerCase().includes(k))).sort();
hits.slice(0, 40).forEach(s => console.log('  ' + s.slice(0, 80)));
console.log(`\n共 ${hits.length} 条命中关键词。全部还原串已写 analyze/deob/strings.txt`);
fs.mkdirSync('analyze/deob', { recursive: true });
fs.writeFileSync('analyze/deob/strings.txt', all.sort().join('\n'));

// 把命中的类名归类成"机制清单"(答案无关:纯从客户端 JS 标识符判定游戏有哪些机制)
const MECH = {
    scatter: /scatter/i, wild: /wild/i, multiplier: /multipl/i,
    free_spin: /freespin|free_spin/i, payout: /payout|pay(?![a-z])/i,
    cascade: /tumble|cascade|drop|gravity/i, symbol: /slotsymbol|symbolcontroller/i,
    feature_buy: /buy|feature/i,
};
const mechanics = {};
for (const [k, re] of Object.entries(MECH)) {
    const found = all.filter(s => re.test(s) && /[A-Z]/.test(s));   // 取类名风格标识符
    if (found.length) mechanics[k] = { present: true, evidence: found.slice(0, 6) };
}
fs.mkdirSync('analyze/inferred', { recursive: true });
fs.writeFileSync('analyze/inferred/mechanics.json', JSON.stringify({
    description: '从客户端 JS(反混淆字符串数组)识别的游戏机制,答案无关',
    source_js: process.argv[2].replace(/.*webgame\//, ''),
    string_array_size: arr.length, readable_strings: all.length,
    mechanics,
}, null, 2));
console.log(`机制识别 → analyze/inferred/mechanics.json (${Object.keys(mechanics).length} 类)`);
