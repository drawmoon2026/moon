// module: GenericLoadingScreenController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function GenericLoadingScreenController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "cb530nJjNxEeb1kcmn96QZc", "GenericLoadingScreenController")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x), exports.hideLoadingPage = exports.showLoadingPage = undefined;
      var C = require("Utils"),
        H = require("NotifyHelper"),
        V = false,
        M = false,
        q = undefined,
        m = undefined;
      exports.showLoadingPage = function (L) {
        H.showFullLoadingPage(), q = L, C.delayCallback(0.3)(z);
      }, exports.hideLoadingPage = function (L) {
        {
          m = L, M = true, V && W();
        }
      }, cc._RF.pop();
    }
  }
  function D() {
    M = false, V = false, m && m(), m = undefined;
  }
  function W() {
    H.hideFullLoadingPage(), C.delayCallback(0.3)(D);
  }
  function k() {
    V = true, M && W();
  }
  function z() {
    {
      C.delayCallback(1)(k), q && q(), q = undefined;
    }
  }
}
module.exports = GenericLoadingScreenController;
