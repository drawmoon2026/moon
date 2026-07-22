// module: AutoSpinHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function AutoSpinHandler(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "6a62eVFmd1Ng5ghvfVXBlUq", "AutoSpinHandler")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(exports, "__esModule", I), exports.exitAutoSpin = exports.decrementAutoSpinCount = exports.resetAutoSpinCount = exports.startAutoSpin = exports.getAutoSpinCount = exports.shouldAutoSpin = undefined;
      var m = require("GameEventHandler"),
        B = -1;
      exports.shouldAutoSpin = function () {
        return B > 0;
      }, exports.getAutoSpinCount = function () {
        return B;
      }, exports.startAutoSpin = function (Z, T, M) {
        B = Z, T.enterAutoSpinMode(Z, M), m.emitAutoplayStarted(function () {
          X(T);
        });
      }, exports.resetAutoSpinCount = function () {
        {
          B = -1;
        }
      }, exports.decrementAutoSpinCount = function (Z) {
        B -= 1, Z.updateAutoSpinCount(B);
      }, exports.exitAutoSpin = function (Z) {
        X(Z), m.emitAutoplayStopped();
      }, cc._RF.pop();
    }
  }
  function X(Z) {
    B = -1, Z.exitAutoSpinMode();
  }
}
module.exports = AutoSpinHandler;
