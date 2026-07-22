// module: SlotGameTools
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function SlotGameTools(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "7af7eB9HSdKRoSBXQ+sEWIw", "SlotGameTools")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.emitSocialBigWinEnd = exports.emitSocialBigWinStart = exports.isSuperMegaWinThreshold = exports.isMegaWinThreshold = exports.isBigWinThreshold = exports.isMediumWinThreshold = exports.getWinThresholds = undefined;
    var m = require("GameEventHandler");
    exports.getWinThresholds = function (B) {
      {
        var X = B.systemModel,
          Z = X.maxLineNumber,
          T = X.winThresholds,
          M = B.transactionModel,
          C = M.betSizeValue,
          V = M.betLevelValue;
        return T.getAllThresholds(C, V, Z);
      }
    }, exports.isMediumWinThreshold = function (B, X) {
      return !!(X.mediumWinThreshold && B >= X.mediumWinThreshold);
    }, exports.isBigWinThreshold = function (B, X) {
      return !!(X.bigWinThreshold && B >= X.bigWinThreshold);
    }, exports.isMegaWinThreshold = function (B, X) {
      return !!(X.megaWinThreshold && B >= X.megaWinThreshold);
    }, exports.isSuperMegaWinThreshold = function (B, X) {
      return !!(X.superMegaWinThreshold && B >= X.superMegaWinThreshold);
    }, exports.emitSocialBigWinStart = function (B) {
      {
        var X = {};
        X.displayState = "Start";
        X.effectType = "BigWin";
        m.emitGameEffectStateChangedEvent(X), B && B();
      }
    }, exports.emitSocialBigWinEnd = function (B) {
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
