# omgapi 测试目录 — 硬流程验证

在这里把 omgapi 每一步流程做成"硬流程"(带机器可查门槛)并实测,验证通过再落到主项目。

## 已验证:下载前端(硬流程)

`download-game.js` — 给游戏 ID,直接下载前端到本地,并用**完整性门槛**判定成败。

```sh
node download-game.js <gameId> [--provider=pg] [--min-coverage=0.98] [--visible]
```

- 产出:`out/<provider>/<gameId>/webgame/...`(前端资源)+ `out/<provider>/<gameId>/gate.json`(门槛证据)
- 退出码:0 = PASS,非 0 = FAIL(批量循环会被 FAIL 的这一款卡住,标不了完成)

**与 omgapi 老逻辑的区别 = 硬在哪:**
老 `download.js` 判成功只看"下到 >0 个文件",残包也报成功。本脚本按 Cocos config 枚举的**真实资源**算覆盖率:每个资源只要任一候选变体(压缩/解压 UUID、多扩展名)在盘上就算"有",覆盖率不达标或关键 boot 文件缺失就判 FAIL。

**实测(游戏 74 麻将胡了 2):**
- 711 个真实资源,下到 709(import 393/393、native 316/318),覆盖率 99.72% → ✅ PASS
- 2 个缺失 native 是该 demo CDN 的资源缺口(PITFALLS #23:PG demo 域名资源分布不均)。下一步优化 = 加 CDN fallback 链 [southasiabp, mulawan, pgsoft-games-demo, static1, static5] 补这最后一点。

**过程中的教训(为什么门槛必须自己验证过):** 门槛第一版用 config 枚举的 URL 总数当分母(native ×7 扩展 + import ×2 形式),虚高 7 倍,把一个 99.7% 完整的下载误判成 14% FAIL。修正为"按真实资源、候选取或"才对。门槛算法本身也得实测,不能想当然。

## 已验证:本地运行环境(双击起前后端)

`env/` 下是自包含的本地镜像(不依赖 omgapi 的 docker/nginx):

- **双击 `启动后端.command`** → `env/server.js`:自签 HTTPS 服务(127.0.0.1:8443),按 Host 路由——静态 host 发 `out/` 下载的前端,API host 发 `env/mock/<gid>/api/` 的 boot mock(verify/GameInfo/GameName/GameRule/Resources),spin 等未捕获 API 返空成功。CORS 由本层统一加。
- **双击 `启动前端.command`** → 用 puppeteer 的 Chrome 打开游戏,`--host-resolver-rules` 把所有 demo host 映射到本地 8443(免 sudo、免改 /etc/hosts),`--ignore-certificate-errors` 吃自签证书。
- **验证**:`node env/smoke-frontend.js` headless 冒烟。实测游戏 74 → 245 请求全走本地后端、Cocos `director=true scene=main`、进入主场景 ✅。

**关键教训(UA):** headless/HeadlessChrome UA 下 Cocos **不启动**(只 19 个请求就停,cc=undefined);换真实**桌面 UA** 后满血启动(245 请求、进主场景)。所以启动器**绝不能设 mobile/iPhone UA**(PITFALLS #18/#22b)。桌面 UA 会弹"浏览器不支持",点『继续游戏』即可。

## 下一步:分析脚本

游戏能进 = 具备了跑分析脚本的前提。接下来在这里做 Stage B 的分析脚本(从 spin 样本反推算法),门槛化每一步。
