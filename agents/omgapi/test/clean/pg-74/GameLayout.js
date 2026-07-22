// module: GameLayout
// Cocos 模块函数,参数 (require, module, exports) = (q, f, h)
function GameLayout(q, f, h) {
  'use strict';

  var g = {};
  g["value"] = !0;
  var l = {};
  l['x'] = 0;
  l['y'] = 900;
  var K = {};
  K["width"] = 1080;
  K["height"] = 690;
  var O = {};
  O["position"] = l;
  O["size"] = K;
  var x = {};
  x['x'] = 0;
  x['y'] = -685;
  var p = {};
  p["width"] = 1080;
  p["height"] = 275;
  var b = {};
  b["position"] = x;
  b["size"] = p;
  var L = {};
  L['x'] = 0;
  L['y'] = -480;
  var H = {};
  H["width"] = 1080;
  H["height"] = 300;
  var U = {};
  U["position"] = L;
  U["size"] = H;
  var r = {};
  r['x'] = 0;
  r['y'] = -500;
  var k = {};
  k["width"] = 1080;
  k["height"] = 300;
  var Y = {};
  Y["position"] = r;
  Y["size"] = k;
  var y = {};
  y["uiFreeSpace"] = O;
  y["uiSettingMenu"] = b;
  y["uiTotalWinFreeSpace"] = U;
  y["uiBigWinFreeSpace"] = Y;
  cc["_RF"]["push"](f, "f46a9HjFHhBZLGf1Q6Olvfz", "GameLayout") || (Object["defineProperty"](h, "__esModule", g), h["gameLayout"] = void 0, h["gameLayout"] = y, cc["_RF"]["pop"]());
}
module.exports = GameLayout;
