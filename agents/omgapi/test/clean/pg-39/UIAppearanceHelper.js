// module: UIAppearanceHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, D, exports)
function UIAppearanceHelper(require, D, exports) {
  'use strict';

  if (!cc._RF.push(D, "f4549VlHlxOL4w7V7h4rhZg", "UIAppearanceHelper")) {
    var k = {};
    k.value = true;
    Object.defineProperty(exports, "__esModule", k), exports.uiAppearanceHelper = exports.getOffsetY = undefined;
    var z = {};
    z.native = 4;
    z.non_native = 3;
    var L = {};
    L.native = 4;
    L.non_native = 5;
    var b = {};
    b.native = 2;
    b.non_native = 2;
    var U = {};
    U.native = 5;
    U.non_native = 4;
    var Q = {};
    Q.windows = z;
    Q.macos = L;
    Q.ios = b;
    Q.android = U;
    var w = {};
    w.native = 0;
    w.non_native = 5;
    var P = {};
    P.native = 2;
    P.non_native = 3;
    var R = {};
    R.native = 0;
    R.non_native = 3;
    var T = {};
    T.native = 4;
    T.non_native = 4;
    var Y = require("BACKUP_DATA"),
      X = function () {
        function K() {}
        return K.prototype.interpret = function (l0) {
          return l0[0];
        }, K;
      }(),
      E = function () {
        function K() {}
        return K.prototype.interpret = function (l0) {
          return new cc.Color(l0[0], l0[1], l0[2], l0[3]);
        }, K;
      }(),
      F = cc._decorator.ccclass,
      N = function (K) {
        function l0() {
          var l1 = K.call(this) || this;
          l1.aS = undefined;
          var l2 = l1.aS = shell.uiAppearance;
          return l2 && (l2.registerInterpreter("font", new X()), l2.registerInterpreter("value", new X()), l2.registerInterpreter("path", new X()), l2.registerInterpreter("color", new E()), l2.registerInterpreter("classname", new X())), l1;
        }
        return __extends(l0, K), l0.prototype.v = function (l1) {
          var l2 = this.aS && this.aS.v(l1);
          return null === l2 && (l2 = S(l1)), l2;
        }, l0.prototype.unregisterInterpreter = function (l1) {
          return this.aS && this.aS.unregisterInterpreter(l1);
        }, __decorate([F("UIAppearanceHelper")], l0);
      }(cc.Object),
      Z = Object.freeze(Q),
      p = Object.freeze({
        'windows': w,
        'macos': P,
        'ios': R,
        'android': T
      }),
      g = shell.I18n.currentLocale,
      A = shell.getBrowserBaseType().toLowerCase(),
      G = 'zh' === g || 'ko' === g || 'ja' === g ? p : Z;
    exports.getOffsetY = function () {
      switch (cc.sys.os) {
        case cc.sys.OS_WINDOWS:
          return 'ie' === A || "edge" === A ? G.windows.native : G.windows.non_native;
        case cc.sys.OS_ANDROID:
          return "chrome" === A ? G.android.native : G.android.non_native;
        case cc.sys.OS_OSX:
          return "safari" === A ? G.macos.native : G.macos.non_native;
        case cc.sys.OS_IOS:
          return "mobile safari" === A ? G.ios.native : G.ios.non_native;
        default:
          return G.macos.non_native;
      }
    };
    var J = new N();
    exports.uiAppearanceHelper = J, cc._RF.pop();
  }
  function S(K) {
    for (var l0, l1 = K.split('.'), l2 = 0, l3 = l1.length; l2 < l3; l2++) {
      var l4 = l1[l2];
      if (undefined === (l0 = l0 && l0[l4] || Y.default[l4])) return null;
    }
    return l0;
  }
}
module.exports = UIAppearanceHelper;
