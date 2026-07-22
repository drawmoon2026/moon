import fs from 'fs';
import { REstringer } from 'restringer';
const code = fs.readFileSync(process.argv[2], 'utf8');
console.log('输入:', (code.length/1e6).toFixed(2)+'MB');
const r = new REstringer(code);
const t0 = Date.now();
try { r.deobfuscate(); } catch(e){ console.log('报错:', e.message.slice(0,120)); }
console.log('耗时:', ((Date.now()-t0)/1000).toFixed(1)+'s | 输出:', (r.script.length/1e6).toFixed(2)+'MB');
fs.writeFileSync('clean/restringer74.js', r.script);
console.log('含PayOutData:', r.script.includes('PayOutData'), '| 残留 x(0x..) 调用:', (r.script.match(/[a-zA-Z]\(0x[0-9a-f]+\)/g)||[]).length);
