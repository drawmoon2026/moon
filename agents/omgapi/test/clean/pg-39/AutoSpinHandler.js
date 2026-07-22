// module: AutoSpinHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function AutoSpinHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "6a62eVFmd1Ng5ghvfVXBlUq", "AutoSpinHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.exitAutoSpin = exports.decrementAutoSpinCount = exports.resetAutoSpinCount = exports.startAutoSpin = exports.getAutoSpinCount = exports.shouldAutoSpin = undefined;
    var x = require("GameEventHandler"),
      C = -1;
    exports.shouldAutoSpin = function () {
      return C > 0;
    }, exports.getAutoSpinCount = function () {
      return C;
    }, exports.startAutoSpin = function (r, V, M) {
      C = r, V.enterAutoSpinMode(r, M), x.emitAutoplayStarted(function () {
        H(V);
      });
    }, exports.resetAutoSpinCount = function () {
      {
        C = -1;
      }
    }, exports.decrementAutoSpinCount = function (r) {
      C -= 1, r.updateAutoSpinCount(C);
    }, exports.exitAutoSpin = function (r) {
      H(r), x.emitAutoplayStopped();
    }, cc._RF.pop();
  }
  function H(r) {
    C = -1, r.exitAutoSpinMode();
  }
}
module.exports = AutoSpinHandler;
