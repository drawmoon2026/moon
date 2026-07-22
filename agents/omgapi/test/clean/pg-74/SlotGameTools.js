// module: SlotGameTools
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotGameTools(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "7af7eB9HSdKRoSBXQ+sEWIw", "SlotGameTools")) {
    var I = {};
    I.value = true;
    Object.defineProperty(j, "__esModule", I), j.emitSocialBigWinEnd = j.emitSocialBigWinStart = j.isSuperMegaWinThreshold = j.isMegaWinThreshold = j.isBigWinThreshold = j.isMediumWinThreshold = j.getWinThresholds = undefined;
    var m = F("GameEventHandler");
    j.getWinThresholds = function (B) {
      {
        var X = B.systemModel,
          Z = X.maxLineNumber,
          T = X.winThresholds,
          M = B.transactionModel,
          C = M.betSizeValue,
          V = M.betLevelValue;
        return T.getAllThresholds(C, V, Z);
      }
    }, j.isMediumWinThreshold = function (B, X) {
      return !!(X.mediumWinThreshold && B >= X.mediumWinThreshold);
    }, j.isBigWinThreshold = function (B, X) {
      return !!(X.bigWinThreshold && B >= X.bigWinThreshold);
    }, j.isMegaWinThreshold = function (B, X) {
      return !!(X.megaWinThreshold && B >= X.megaWinThreshold);
    }, j.isSuperMegaWinThreshold = function (B, X) {
      return !!(X.superMegaWinThreshold && B >= X.superMegaWinThreshold);
    }, j.emitSocialBigWinStart = function (B) {
      {
        var X = {};
        X.displayState = "Start";
        X.effectType = "BigWin";
        m.emitGameEffectStateChangedEvent(X), B && B();
      }
    }, j.emitSocialBigWinEnd = function (B) {
      {
        var X = {};
        X.displayState = "End";
        X.effectType = "BigWin";
        m.emitGameEffectStateChangedEvent(X), B && B();
      }
    }, cc._RF.pop();
  }
}
module.exports = SlotGameTools;
