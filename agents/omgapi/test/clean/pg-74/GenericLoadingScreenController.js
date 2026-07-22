// module: GenericLoadingScreenController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function GenericLoadingScreenController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "cb530nJjNxEeb1kcmn96QZc", "GenericLoadingScreenController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m), I.hideLoadingPage = I.showLoadingPage = undefined;
    var B = F("Utils"),
      X = F("NotifyHelper"),
      Z = false,
      T = false,
      M = undefined,
      C = undefined;
    I.showLoadingPage = function (K) {
      {
        X.showFullLoadingPage(), M = K, B.delayCallback(0.3)(g);
      }
    }, I.hideLoadingPage = function (K) {
      C = K, T = true, Z && N();
    }, cc._RF.pop();
  }
  function V() {
    T = false, Z = false, C && C(), C = undefined;
  }
  function N() {
    X.hideFullLoadingPage(), B.delayCallback(0.3)(V);
  }
  function q() {
    {
      Z = true, T && N();
    }
  }
  function g() {
    B.delayCallback(1)(q), M && M(), M = undefined;
  }
}
module.exports = GenericLoadingScreenController;
