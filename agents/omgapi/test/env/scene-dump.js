/**
 * scene-dump.js — boot 游戏,遍历 Cocos 场景,收集所有文本(Label)与按钮节点。
 * 用途:判断赔付表数字是文本还是图片,并找到"信息/规则"入口。
 * 用法: node env/scene-dump.js [gid] [port]
 */
const puppeteer = require('puppeteer');
const gid = process.argv[2] || '74';
const PORT = process.argv[3] || '8443';
const game = require('./game.json');

(async () => {
    const rules = [game.m_host, game.static_host, game.api_host, 'api.omgapi.cc']
        .map(h => `MAP ${h} 127.0.0.1:${PORT}`).join(',')
        + `,MAP *.southasiabp-demo.cc 127.0.0.1:${PORT},MAP *.pgsoft-games-demo.cc 127.0.0.1:${PORT}`;
    const browser = await puppeteer.launch({ headless: 'new',
        args: [`--host-resolver-rules=${rules}`, '--ignore-certificate-errors', '--no-sandbox', '--disable-features=DnsOverHttps'] });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/150.0.0.0 Safari/537.36');
    await page.goto(game.url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(() => {});
    // 等引擎 + 主场景
    for (let i = 0; i < 40; i++) {
        const ready = await page.evaluate(() => { try { return typeof cc !== 'undefined' && !!cc.director.getScene(); } catch { return false; } });
        if (ready) break;
        await new Promise(r => setTimeout(r, 1500));
    }
    await new Promise(r => setTimeout(r, 5000));

    const dump = await page.evaluate(() => {
        const out = { labels: [], buttons: [], nodeCount: 0, hasCC: typeof cc !== 'undefined' };
        if (typeof cc === 'undefined' || !cc.director.getScene()) return out;
        function walk(node, depth) {
            if (!node || depth > 40) return;
            out.nodeCount++;
            // Label 文本(Cocos 2.x: cc.Label;组件也可能是 cc.LabelAtlas / RichText)
            try {
                const lbl = node.getComponent && node.getComponent(cc.Label);
                if (lbl && lbl.string !== undefined && String(lbl.string).trim() !== '')
                    out.labels.push({ name: node.name, text: String(lbl.string).slice(0, 20), active: node.activeInHierarchy });
            } catch {}
            // 疑似按钮/入口(名字含 info/rule/help/menu/paytable/setting)
            if (/info|rule|help|menu|pay|odds|setting|table/i.test(node.name || ''))
                out.buttons.push({ name: node.name, active: node.activeInHierarchy });
            const kids = node.children || [];
            for (const k of kids) walk(k, depth + 1);
        }
        walk(cc.director.getScene(), 0);
        return out;
    });

    console.log(`\n场景节点数: ${dump.nodeCount} | cc: ${dump.hasCC}`);
    console.log(`\n=== 文本节点(Label,共 ${dump.labels.length})===`);
    dump.labels.slice(0, 40).forEach(l => console.log(`  [${l.active ? '显示' : '隐藏'}] ${l.name}: "${l.text}"`));
    console.log(`\n=== 疑似信息/规则入口(共 ${dump.buttons.length})===`);
    dump.buttons.slice(0, 30).forEach(b => console.log(`  [${b.active ? '显示' : '隐藏'}] ${b.name}`));
    await browser.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
