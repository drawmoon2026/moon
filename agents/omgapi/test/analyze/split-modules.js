/**
 * split-modules.js — 把清晰代码按 Cocos 模块注册表拆成独立文件(unbundle)。
 *
 * Cocos bundle 是带名字的模块注册表:{'ModuleName':[function(require,module,exports){...}, {deps}], ...}
 * 每个 'use strict' 开头的模块函数 = 一个类/模块。本脚本用 AST(严格作用域)逐个拆:
 *   'GameConstant' → clean/pg-<gid>/GameConstant.js   模块名直接当文件名
 * 并写一份 _index.json(模块清单 + 依赖)。方便按模块翻代码找逻辑。
 *
 * 用法: node analyze/split-modules.js <clean.js> <输出目录>
 */
const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

const cleanFile = process.argv[2];
const outDir = process.argv[3] || cleanFile.replace(/\.clean\.js$/, '').replace(/\.js$/, '') + '_modules';
const code = fs.readFileSync(cleanFile, 'utf8');
const ast = parser.parse(code, { errorRecovery: true, sourceType: 'script' });

const safe = (name) => name.replace(/[^A-Za-z0-9_.-]/g, '_');
fs.mkdirSync(outDir, { recursive: true });

const modules = [];
traverse(ast, {
    ObjectProperty(p) {
        const { key, value } = p.node;
        const name = t.isStringLiteral(key) ? key.value : (t.isIdentifier(key) ? key.name : null);
        // 模块 = 'Name': [function(...){...}, {deps}]
        if (!name || !t.isArrayExpression(value) || !value.elements.length) return;
        const fn = value.elements[0];
        if (!t.isFunctionExpression(fn) && !t.isArrowFunctionExpression(fn)) return;
        // 依赖表(第二个元素,{alias: realName})
        let deps = null;
        if (value.elements[1] && t.isObjectExpression(value.elements[1])) {
            deps = {};
            for (const pr of value.elements[1].properties)
                if (t.isObjectProperty(pr)) {
                    const k = t.isStringLiteral(pr.key) ? pr.key.value : pr.key.name;
                    const v = t.isStringLiteral(pr.value) ? pr.value.value : (pr.value.name || '');
                    deps[k] = v;
                }
        }
        const params = fn.params.map(pp => pp.name || '_').join(', ');
        const bodyCode = generate(fn.body, { comments: false, concise: false }).code;
        // 函数名必须是合法标识符:所有非 [A-Za-z0-9_$] 换成 _,首字符若是数字加 _
        const fname = name.replace(/[^A-Za-z0-9_$]/g, '_').replace(/^([0-9])/, '_$1');
        const src = `// module: ${name}\n// Cocos 模块函数,参数 (require, module, exports) = (${params})\n` +
            `function ${fname}(${params}) ${bodyCode}\nmodule.exports = ${fname};\n`;
        fs.writeFileSync(path.join(outDir, safe(name) + '.js'), src);
        modules.push({ name, file: safe(name) + '.js', params, deps, lines: bodyCode.split('\n').length });
        p.skip();
    },
});

modules.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync(path.join(outDir, '_index.json'), JSON.stringify({ total: modules.length, modules }, null, 2));
console.log(`拆出 ${modules.length} 个模块 → ${outDir}/`);
console.log('赔付/结算/消除相关模块:');
modules.filter(m => /payout|symbol|spin|game.?constant|cascade|drop|scatter|wild|free.?spin/i.test(m.name))
    .slice(0, 12).forEach(m => console.log(`  ${m.file}  (${m.lines}行)`));
