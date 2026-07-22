// module: PrizeState
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PrizeState(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "b8e16tOyU5GT4m5ZQseMAOn", "PrizeState")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), require("TweaksData");
      var x = require("SettingMenuHelper"),
        C = require("Utils"),
        H = require("GameEventHandler"),
        r = function () {
          {
            function V(M, q, m, D) {
              this.name = "Prize State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.Tl = undefined, this.dataSource = M, this.generalControllers = q.generalControllers, this.finalCallback = m, D && (this.Tl = D);
            }
            return V.prototype.setAvailableActions = function () {}, V.prototype.clearAvailableActions = function () {}, V.prototype.renderPrize = function () {
              {
                C.spawnCallback(this.renderLines.bind(this), this.playPrize.bind(this))(this.exitState.bind(this));
              }
            }, V.prototype.renderLines = function (M) {
              this.dataSource.transactionModel.winLines ? this.playAllLines(M) : M && M();
            }, V.prototype.playAllLines = function (M) {
              {
                var q = this.dataSource.transactionModel;
                this.generalControllers.paySelectEffectController.playAllLines(q.winLines, q.reels, M, true);
              }
            }, V.prototype.playPrize = function (M) {
              var q = this,
                m = this.dataSource.transactionModel.totalWinAmount,
                D = this.getWinThresholds();
              var k = {};
              k.displayState = "Start";
              k.effectType = "BigWin";
              if (D.bigWinThreshold && W >= D.bigWinThreshold) H.emitGameEffectStateChangedEvent(k), this.runBigPrizeState(W, function () {
                var L = {};
                L.displayState = "End";
                L.effectType = "BigWin";
                H.emitGameEffectStateChangedEvent(L), q.winAnnouncement("BigWin", M)();
              });else if (D.mediumWinThreshold && W >= D.mediumWinThreshold) this.runMediumPrizeState(W, this.winAnnouncement("MediumWin", M));else if (W > 0) this.runSmallPrizeState(W, this.winAnnouncement("SmallWin", M));else {
                {
                  var z = this.dataSource.playerModel.balance;
                  x.settingMenuHelper.setBalance(z), M && M();
                }
              }
            }, V.prototype.exitState = function () {
              {
                var M = this;
                this.Tl && this.Tl.clearAvailableActions && this.Tl.clearAvailableActions(), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
                  {
                    var q = M.finalCallback;
                    M.finalCallback = undefined, M.destroy(), C.deferCallback(true)(function () {
                      {
                        C.deferCallback(true)(q);
                      }
                    });
                  }
                });
              }
            }, V.prototype.preExitStateCleanup = function () {}, V.prototype.additionalDestroyCleanups = function () {}, V.prototype.run = function () {
              {
                this.Tl && this.Tl.setAvailableActions && this.Tl.setAvailableActions(), this.setAvailableActions(), this.renderPrize();
              }
            }, V.prototype.destroy = function () {
              {
                this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Tl && (this.Tl.destroy(), this.Tl = undefined), this.additionalDestroyCleanups();
              }
            }, V.prototype.winAnnouncement = function (M, q) {
              return function () {
                {
                  q && q();
                }
              };
            }, V.prototype.getWinThresholds = function () {
              var M = this.dataSource.systemModel,
                q = M.maxLineNumber,
                m = M.winThresholds,
                D = this.dataSource.transactionModel,
                W = D.betSizeValue,
                k = D.betLevelValue;
              return m.getAllThresholds(W, k, q);
            }, V.prototype.runBigPrizeState = function (M, q) {
              q && q();
            }, V.prototype.runMediumPrizeState = function (M, q) {
              q && q();
            }, V.prototype.onExitState = function (M) {
              M();
            }, V;
          }
        }();
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = PrizeState;
