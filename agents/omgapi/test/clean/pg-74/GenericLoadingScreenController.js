// module: GenericLoadingScreenController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function GenericLoadingScreenController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "cb530nJjNxEeb1kcmn96QZc", "GenericLoadingScreenController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["hideLoadingPage"] = I["showLoadingPage"] = void 0;
    var B = F("Utils"),
      X = F("NotifyHelper"),
      Z = !1,
      T = !1,
      M = void 0,
      C = void 0;
    I["showLoadingPage"] = function (K) {
      {
        X["showFullLoadingPage"](), M = K, B["delayCallback"](0.3)(g);
      }
    }, I["hideLoadingPage"] = function (K) {
      C = K, T = !0, Z && N();
    }, cc["_RF"]["pop"]();
  }
  function V() {
    T = !1, Z = !1, C && C(), C = void 0;
  }
  function N() {
    X["hideFullLoadingPage"](), B["delayCallback"](0.3)(V);
  }
  function q() {
    {
      Z = !0, T && N();
    }
  }
  function g() {
    B["delayCallback"](1)(q), M && M(), M = void 0;
  }
}
module.exports = GenericLoadingScreenController;
