// module: PrizeState
// Cocos 模块函数,参数 (require, module, exports) = (require, module, I)
function PrizeState(require, module, I) {
  'use strict';

  if (!cc._RF.push(module, "b8e16tOyU5GT4m5ZQseMAOn", "PrizeState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m), require("TweaksData");
    var B = require("SettingMenuHelper"),
      X = require("Utils"),
      Z = require("GameEventHandler"),
      T = function () {
        function M(C, V, N, q) {
          this.name = "Prize State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.Yf = undefined, this.dataSource = C, this.generalControllers = V.generalControllers, this.finalCallback = N, q && (this.Yf = q);
        }
        return M.prototype.setAvailableActions = function () {}, M.prototype.clearAvailableActions = function () {}, M.prototype.renderPrize = function () {
          X.spawnCallback(this.renderLines.bind(this), this.playPrize.bind(this))(this.exitState.bind(this));
        }, M.prototype.renderLines = function (C) {
          this.dataSource.transactionModel.winLines ? this.playAllLines(C) : C && C();
        }, M.prototype.playAllLines = function (C) {
          var V = this.dataSource.transactionModel;
          this.generalControllers.paySelectEffectController.playAllLines(V.winLines, V.reels, C, true);
        }, M.prototype.playPrize = function (C) {
          var V = this,
            N = this.dataSource.transactionModel.totalWinAmount,
            q = this.getWinThresholds();
          var g = {};
          g.displayState = "Start";
          g.effectType = "BigWin";
          if (q.bigWinThreshold && f >= q.bigWinThreshold) Z.emitGameEffectStateChangedEvent(g), this.runBigPrizeState(f, function () {
            var K = {};
            K.displayState = "End";
            K.effectType = "BigWin";
            Z.emitGameEffectStateChangedEvent(K), V.winAnnouncement("BigWin", C)();
          });else if (q.mediumWinThreshold && f >= q.mediumWinThreshold) this.runMediumPrizeState(f, this.winAnnouncement("MediumWin", C));else if (f > 0) this.runSmallPrizeState(f, this.winAnnouncement("SmallWin", C));else {
            var l = this.dataSource.playerModel.balance;
            B.settingMenuHelper.setBalance(l), C && C();
          }
        }, M.prototype.exitState = function () {
          var C = this;
          this.Yf && this.Yf.clearAvailableActions && this.Yf.clearAvailableActions(), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
            var V = C.finalCallback;
            C.finalCallback = undefined, C.destroy(), X.deferCallback(true)(function () {
              X.deferCallback(true)(V);
            });
          });
        }, M.prototype.preExitStateCleanup = function () {}, M.prototype.additionalDestroyCleanups = function () {}, M.prototype.run = function () {
          this.Yf && this.Yf.setAvailableActions && this.Yf.setAvailableActions(), this.setAvailableActions(), this.renderPrize();
        }, M.prototype.destroy = function () {
          this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Yf && (this.Yf.destroy(), this.Yf = undefined), this.additionalDestroyCleanups();
        }, M.prototype.winAnnouncement = function (C, V) {
          return function () {
            V && V();
          };
        }, M.prototype.getWinThresholds = function () {
          var C = this.dataSource.systemModel,
            V = C.maxLineNumber,
            N = C.winThresholds,
            q = this.dataSource.transactionModel,
            f = q.betSizeValue,
            h = q.betLevelValue;
          return N.getAllThresholds(f, h, V);
        }, M.prototype.runBigPrizeState = function (C, V) {
          V && V();
        }, M.prototype.runMediumPrizeState = function (C, V) {
          V && V();
        }, M.prototype.onExitState = function (C) {
          C();
        }, M;
      }();
    I.default = T, cc._RF.pop();
  }
}
module.exports = PrizeState;
