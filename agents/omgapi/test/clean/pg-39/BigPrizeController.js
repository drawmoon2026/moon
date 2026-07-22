// module: BigPrizeController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function BigPrizeController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "56ec0jrLzBG87IrwqxMdXpi", "BigPrizeController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = require("SettingMenuHelper"),
      H = (require("TweaksData"), require("GameEventHandler")),
      r = cc._decorator.ccclass,
      V = function () {
        {
          function M(q, m, D, W) {
            this.lt = undefined, this.ft = undefined, this.vt = undefined, this._t = undefined, this.pt = undefined;
            var k = q.transactionModel.totalWinAmount;
            this.lt = q, this.ft = k, this.vt = m, this._t = D, this.pt = W;
          }
          return M.prototype.run = function () {
            var q = this,
              m = this.ft,
              D = this.vt;
            x.sequenceCallback(this.bt(m, D), x.deferCallback(true), x.spawnCallback(this.St(), this.gt(m), this.Ct(m)))(function () {
              q.pt && q.pt();
            });
          }, M.prototype.bt = function (q, m) {
            {
              var D = this,
                W = this._t;
              return function (k) {
                var z = {
                  'onAnimationStopFunc': function () {
                    var L = {};
                    L.displayState = "DidUpdate";
                    L.effectType = "BigWin";
                    H.emitGameEffectStateChangedEvent(L);
                  },
                  'willCompleteFunc': function () {
                    var L = {};
                    L.displayState = "WillEnd";
                    L.effectType = "BigWin";
                    H.emitGameEffectStateChangedEvent(L);
                  }
                };
                W.bigWinController.setSocialShareEventCallback(z), W.bigWinController.play(q, m, k, D.lt.isGameReplaying);
              };
            }
          }, M.prototype.gt = function (q) {
            {
              var m = this._t;
              return function (D) {
                0 !== q ? m.infobarController.showWin(q, D) : D && D();
              };
            }
          }, M.prototype.St = function () {
            var q = this._t;
            return function (m) {
              {
                q.piggyController.playBigWin(), m && m();
              }
            };
          }, M.prototype.Ct = function (q) {
            var m = this.lt;
            return function (D) {
              {
                var W = m.playerModel.balance;
                C.settingMenuHelper.setBalance(W), C.settingMenuHelper.setWinAmount(q), D && D();
              }
            };
          }, __decorate([r], M);
        }
      }();
    exports.default = V, cc._RF.pop();
  }
}
module.exports = BigPrizeController;
