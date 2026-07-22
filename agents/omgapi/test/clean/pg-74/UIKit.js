// module: UIKit
// Cocos 模块函数,参数 (require, module, exports) = (N, q, f)
function UIKit(N, q, f) {
  'use strict';

  var h = {};
  h["value"] = !0;
  var g = {};
  g["height"] = 139.5;
  g["item_space_x"] = 48;
  var l = {};
  l["height"] = 186;
  l["item_space_x"] = 48;
  var K = {};
  K["landscape"] = g;
  K["portrait"] = l;
  var O = {};
  O["bar"] = K;
  var x = {};
  x["height"] = 180;
  var p = {};
  p["height"] = 180;
  var b = {};
  b["landscape"] = x;
  b["portrait"] = p;
  var L = {};
  L["bar"] = b;
  var H = {};
  H["top"] = 80;
  H["left"] = 0;
  H["bottom"] = 102;
  H["right"] = 0;
  var U = {};
  U["top"] = 50;
  U["left"] = 0;
  U["bottom"] = 0;
  U["right"] = 0;
  var r = {};
  r["top"] = 0;
  r["left"] = 0;
  r["bottom"] = 0;
  r["right"] = 0;
  var k = {};
  k["iphone_x"] = H;
  k["iphone"] = U;
  k["normal"] = r;
  cc["_RF"]["push"](q, "cfcacQ0hpxOzKvh1YNNRBbk", "UIKit") || (Object["defineProperty"](f, "__esModule", h), f["safeArea"] = f["TabBarConfigs"] = f["NavigationConfigs"] = void 0, f["NavigationConfigs"] = O, f["TabBarConfigs"] = L, f["safeArea"] = Object["freeze"](k), cc["_RF"]["pop"]());
}
module.exports = UIKit;
