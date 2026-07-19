/**
 * smoke-frontend.js — 验证前端能否经本地后端启动(headless,模拟启动前端.command)
 * 用法: node env/smoke-frontend.js [--gid=74] [--port=8443]
 */
const path = require('path');
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const gid = (args.find(a => a.startsWith('--gid=')) || '--gid=74').split('=')[1];
const PORT = (args.find(a => a.startsWith('--port=')) || '--port=8443').split('=')[1];
const game = require('./game.json');

(async () => {
    const rules = [game.m_host, game.static_host, game.api_host, 'api.omgapi.cc']
        .map(h => `MAP ${h} 127.0.0.1:${PORT}`).join(',');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: [`--host-resolver-rules=${rules}`, '--ignore-certificate-errors', '--no-sandbox', '--disable-features=DnsOverHttps'],
    });
    const page = await browser.newPage();
    const hosts = {}, errors = [];
    let external = 0;
    page.on('response', (res) => {
        try { const h = new URL(res.url()).hostname; hosts[h] = (hosts[h] || 0) + 1; if (h !== '127.0.0.1') external++; } catch {}
    });
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 120)); });
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message.slice(0, 120)));

    await page.goto(game.url, { waitUntil: 'networkidle2', timeout: 90000 }).catch(e => errors.push('goto: ' + e.message));
    await new Promise(r => setTimeout(r, 8000));

    // 探测 Cocos 引擎是否起来
    const cocos = await page.evaluate(() => ({
        hasCC: typeof window.cc !== 'undefined',
        hasDirector: typeof window.cc !== 'undefined' && !!cc.director,
        scene: (() => { try { return cc.director.getScene()?.name || null; } catch { return null; } })(),
        canvas: !!document.querySelector('canvas'),
    })).catch(() => ({}));

    const reqs = await page.evaluate(() => performance.getEntriesByType('resource').length).catch(() => 0);

    console.log('\n===== 前端冒烟 [' + gid + '] =====');
    console.log('  资源请求总数:', reqs, ' | host 分布:', JSON.stringify(hosts));
    console.log('  外部(非本地)请求:', external, external === 0 ? '✅ 全走本地' : '⚠️ 有外部请求');
    console.log('  Cocos: cc=' + cocos.hasCC + ' director=' + cocos.hasDirector + ' scene=' + cocos.scene + ' canvas=' + cocos.canvas);
    console.log('  console.error 数:', errors.length);
    errors.slice(0, 8).forEach(e => console.log('    - ' + e));
    await browser.close();
    // boot 判定:引擎起来 + canvas 存在
    const ok = cocos.hasDirector && cocos.canvas;
    console.log('  判定:', ok ? '✅ 引擎启动' : '❌ 未起来');
    process.exit(ok ? 0 : 1);
})();
