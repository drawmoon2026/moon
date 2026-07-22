// module: UIKit
// Cocos 模块函数,参数 (require, module, exports) = (D, W, exports)
function UIKit(D, W, exports) {
  'use strict';

  var o = {};
  o.value = true;
  var z = {};
  z.height = 139.5;
  z.item_space_x = 48;
  var c = {};
  c.height = 186;
  c.item_space_x = 48;
  var L = {};
  L.landscape = z;
  L.portrait = c;
  var v = {};
  v.bar = L;
  var b = {};
  b.height = 180;
  var U = {};
  U.height = 180;
  var Q = {};
  Q.landscape = b;
  Q.portrait = U;
  var w = {};
  w.bar = Q;
  var h = {};
  h.top = 80;
  h.left = 0;
  h.bottom = 102;
  h.right = 0;
  var P = {};
  P.top = 50;
  P.left = 0;
  P.bottom = 0;
  P.right = 0;
  var R = {};
  R.top = 0;
  R.left = 0;
  R.bottom = 0;
  R.right = 0;
  var T = {};
  T.iphone_x = h;
  T.iphone = P;
  T.normal = R;
  cc._RF.push(W, "cfcacQ0hpxOzKvh1YNNRBbk", "UIKit") || (Object.defineProperty(exports, "__esModule", o), exports.safeArea = exports.TabBarConfigs = exports.NavigationConfigs = undefined, exports.NavigationConfigs = v, exports.TabBarConfigs = w, exports.safeArea = Object.freeze(T), cc._RF.pop());
}
module.exports = UIKit;
