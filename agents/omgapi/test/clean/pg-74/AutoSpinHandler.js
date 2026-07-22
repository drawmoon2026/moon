// module: AutoSpinHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function AutoSpinHandler(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "6a62eVFmd1Ng5ghvfVXBlUq", "AutoSpinHandler")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I), j.exitAutoSpin = j.decrementAutoSpinCount = j.resetAutoSpinCount = j.startAutoSpin = j.getAutoSpinCount = j.shouldAutoSpin = undefined;
      var m = F("GameEventHandler"),
        B = -1;
      j.shouldAutoSpin = function () {
        return B > 0;
      }, j.getAutoSpinCount = function () {
        return B;
      }, j.startAutoSpin = function (Z, T, M) {
        B = Z, T.enterAutoSpinMode(Z, M), m.emitAutoplayStarted(function () {
          X(T);
        });
      }, j.resetAutoSpinCount = function () {
        {
          B = -1;
        }
      }, j.decrementAutoSpinCount = function (Z) {
        B -= 1, Z.updateAutoSpinCount(B);
      }, j.exitAutoSpin = function (Z) {
        X(Z), m.emitAutoplayStopped();
      }, cc._RF.pop();
    }
  }
  function X(Z) {
    B = -1, Z.exitAutoSpinMode();
  }
}
module.exports = AutoSpinHandler;
