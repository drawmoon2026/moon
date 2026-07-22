// module: UIAppearanceHelper
// Cocos 模块函数,参数 (require, module, exports) = (M, C, V)
function UIAppearanceHelper(M, C, V) {
  'use strict';

  if (!cc["_RF"]["push"](C, "f4549VlHlxOL4w7V7h4rhZg", "UIAppearanceHelper")) {
    var N = {};
    N["value"] = !0;
    Object["defineProperty"](V, "__esModule", N), V["uiAppearanceHelper"] = V["getOffsetY"] = void 0;
    var q = {};
    q["native"] = 4;
    q["non_native"] = 3;
    var g = {};
    g["native"] = 4;
    g["non_native"] = 5;
    var K = {};
    K["native"] = 2;
    K["non_native"] = 2;
    var O = {};
    O["native"] = 5;
    O["non_native"] = 4;
    var x = {};
    x["native"] = 0;
    x["non_native"] = 5;
    var p = {};
    p["native"] = 2;
    p["non_native"] = 3;
    var b = {};
    b["native"] = 0;
    b["non_native"] = 3;
    var L = {};
    L["native"] = 4;
    L["non_native"] = 4;
    var H = M("BACKUP_DATA"),
      U = function () {
        function D() {}
        return D["prototype"]["interpret"] = function (J) {
          return J[0];
        }, D;
      }(),
      k = function () {
        function D() {}
        return D["prototype"]["interpret"] = function (J) {
          return new cc["Color"](J[0], J[1], J[2], J[3]);
        }, D;
      }(),
      Y = cc["_decorator"]["ccclass"],
      y = function (D) {
        {
          function J() {
            var E = D["call"](this) || this;
            E['Wg'] = void 0;
            var Q0 = E['Wg'] = shell["uiAppearance"];
            return Q0 && (Q0["registerInterpreter"]("font", new U()), Q0["registerInterpreter"]("value", new U()), Q0["registerInterpreter"]("path", new U()), Q0["registerInterpreter"]("color", new k()), Q0["registerInterpreter"]("classname", new U())), E;
          }
          return __extends(J, D), J["prototype"]['v'] = function (E) {
            {
              var Q0 = this['Wg'] && this['Wg']['v'](E);
              return null === Q0 && (Q0 = W(E)), Q0;
            }
          }, J["prototype"]["unregisterInterpreter"] = function (E) {
            return this['Wg'] && this['Wg']["unregisterInterpreter"](E);
          }, __decorate([Y("UIAppearanceHelper")], J);
        }
      }(cc["Object"]),
      z = Object["freeze"]({
        'windows': q,
        'macos': g,
        'ios': K,
        'android': O
      }),
      S = Object["freeze"]({
        'windows': x,
        'macos': p,
        'ios': b,
        'android': L
      }),
      P = shell["I18n"]["currentLocale"],
      G = shell["getBrowserBaseType"]()["toLowerCase"](),
      A = 'zh' === P || 'ko' === P || 'ja' === P ? S : z;
    V["getOffsetY"] = function () {
      switch (cc["sys"]['os']) {
        case cc["sys"]["OS_WINDOWS"]:
          return 'ie' === G || "edge" === G ? A["windows"]["native"] : A["windows"]["non_native"];
        case cc["sys"]["OS_ANDROID"]:
          return "chrome" === G ? A["android"]["native"] : A["android"]["non_native"];
        case cc["sys"]["OS_OSX"]:
          return "safari" === G ? A["macos"]["native"] : A["macos"]["non_native"];
        case cc["sys"]["OS_IOS"]:
          return "mobile safari" === G ? A["ios"]["native"] : A["ios"]["non_native"];
        default:
          return A["macos"]["non_native"];
      }
    };
    var w = new y();
    V["uiAppearanceHelper"] = w, cc["_RF"]["pop"]();
  }
  function W(D) {
    for (var J, E = D["split"]('.'), Q0 = 0, Q1 = E["length"]; Q0 < Q1; Q0++) {
      var Q2 = E[Q0];
      if (void 0 === (J = J && J[Q2] || H["default"][Q2])) return null;
    }
    return J;
  }
}
module.exports = UIAppearanceHelper;
