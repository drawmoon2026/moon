// module: GenericLoadingScreenController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function GenericLoadingScreenController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "cb530nJjNxEeb1kcmn96QZc", "GenericLoadingScreenController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.hideLoadingPage = exports.showLoadingPage = undefined;
    var B = require("Utils"),
      X = require("NotifyHelper"),
      Z = false,
      T = false,
      M = undefined,
      C = undefined;
    exports.showLoadingPage = function (K) {
      X.showFullLoadingPage(), M = K, B.delayCallback(0.3)(g);
    }, exports.hideLoadingPage = function (K) {
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
    Z = true, T && N();
  }
  function g() {
    B.delayCallback(1)(q), M && M(), M = undefined;
  }
}
module.exports = GenericLoadingScreenController;
