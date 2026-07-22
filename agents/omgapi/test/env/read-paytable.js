/**
 * read-paytable.js — 全自动从信息屏读赔付表(无人工)。
 * boot → 点 infoboard(信息)按钮 → 打开赔付表 → 读所有文本节点里的赔付值。
 * 用法: node env/read-paytable.js [gid] [port]
 */
const puppeteer = require('puppeteer');
const gid = process.argv[2] || '74';
const PORT = process.argv[3] || '8443';
const game = require('./game.json');

// 页面内:遍历场景收集文本(Label/LabelAtlas/RichText),可选按名字过滤
const COLLECT = `(function(filter){
  const out=[];
  if(typeof cc==='undefined'||!cc.director.getScene())return out;
  function txt(node){
    for(const T of ['Label','LabelAtlas','RichText']){
      try{const c=cc[T]&&node.getComponent(cc[T]);if(c&&c.string!==undefined&&String(c.string).trim()!=='')return String(c.string);}catch(e){}
    } return null;
  }
  function walk(n,d){ if(!n||d>45)return; const t=txt(n);
    if(t!==null&&(!filter||filter.test(n.name||'')||/^[x×]?\\d/.test(t))) out.push({name:n.name,text:t,active:n.activeInHierarchy});
    for(const k of (n.children||[])) walk(k,d+1);
  }
  walk(cc.director.getScene(),0); return out;
})(null)`;

(async () => {
    const rules = [game.m_host, game.static_host, game.api_host, 'api.omgapi.cc'].map(h => `MAP ${h} 127.0.0.1:${PORT}`).join(',')
        + `,MAP *.southasiabp-demo.cc 127.0.0.1:${PORT},MAP *.pgsoft-games-demo.cc 127.0.0.1:${PORT}`;
    const browser = await puppeteer.launch({ headless: 'new',
        args: [`--host-resolver-rules=${rules}`, '--ignore-certificate-errors', '--no-sandbox', '--disable-features=DnsOverHttps'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/150.0.0.0 Safari/537.36');
    await page.goto(game.url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {});
    for (let i = 0; i < 40; i++) { if (await page.evaluate(() => { try { return typeof cc !== 'undefined' && !!cc.director.getScene(); } catch { return false; } })) break; await new Promise(r => setTimeout(r, 1500)); }
    await new Promise(r => setTimeout(r, 6000));

    // 点 infoboard 按钮:算屏幕坐标后 tap(PG 用 touch listener,鼠标未必生效)
    const tap = await page.evaluate(() => {
        function find(name) { let hit = null; (function w(n){ if(hit||!n)return; if((n.name||'')===name||new RegExp('^'+name).test(n.name||'')) hit=n; for(const k of (n.children||[])) w(k); })(cc.director.getScene()); return hit; }
        const btn = find('infoboard_controller') || find('infoboard');
        if (!btn) return null;
        const wp = btn.convertToWorldSpaceAR ? btn.convertToWorldSpaceAR(cc.v2(0,0)) : btn.getPosition();
        const view = cc.view, fs = view.getFrameSize(), vs = view.getVisibleSize();
        // cocos 世界坐标 → 画布像素;canvas 在窗口里居中
        const canvas = document.querySelector('canvas'); const rect = canvas.getBoundingClientRect();
        const sx = rect.x + (wp.x / vs.width) * rect.width;
        const sy = rect.y + (1 - wp.y / vs.height) * rect.height;   // y 翻转
        return { x: Math.round(sx), y: Math.round(sy), name: btn.name };
    });
    console.log('信息按钮:', JSON.stringify(tap));
    if (tap) { await page.touchscreen.tap(tap.x, tap.y).catch(() => {}); await new Promise(r => setTimeout(r, 3500)); }

    const texts = await page.evaluate(COLLECT);
    const active = texts.filter(t => t.active);
    console.log(`\n打开后显示的文本节点(${active.length}):`);
    active.slice(0, 60).forEach(t => console.log(`  ${t.name}: "${t.text}"`));
    // 赔付值候选:纯数字 / x数字 / 含数字的
    const nums = active.filter(t => /^[x×]?[\d.,]+$/.test(t.text.trim()));
    console.log(`\n疑似赔付值(纯数字节点 ${nums.length}): ${nums.map(t => t.text).join('  ')}`);
    await browser.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
