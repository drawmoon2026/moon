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
