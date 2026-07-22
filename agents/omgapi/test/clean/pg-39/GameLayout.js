// module: GameLayout
// Cocos 模块函数,参数 (require, module, exports) = (q, m, exports)
function GameLayout(q, m, exports) {
  'use strict';

  var W = {};
  W.value = true;
  var k = {};
  k.x = 0;
  k.y = -35;
  var o = {};
  o.width = 1080;
  o.height = 630;
  var z = {};
  z.position = k;
  z.size = o;
  var c = {};
  c.x = 0;
  c.y = -685;
  var L = {};
  L.width = 1080;
  L.height = 275;
  var v = {};
  v.position = c;
  v.size = L;
  var b = {};
  b.x = 0;
  b.y = -660;
  var U = {};
  U.width = 1080;
  U.height = 300;
  var Q = {};
  Q.position = b;
  Q.size = U;
  var w = {};
  w.uiFreeSpace = z;
  w.uiSettingMenu = v;
  w.uiBigWinFreeSpace = Q;
  cc._RF.push(m, "74808w89ABLOo061KyIdopY", "GameLayout") || (Object.defineProperty(exports, "__esModule", W), exports.gameLayout = undefined, exports.gameLayout = w, cc._RF.pop());
}
module.exports = GameLayout;
