// module: MJSpinState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJSpinState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "17edcxDqq9BuY88Uc4rdBbm", "MJSpinState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("MJAPIClient"),
      X = require("GameConstant"),
      Z = require("SpinState"),
      T = require("RequestHandler"),
      M = require("AudioManager"),
      C = require("AudioConstant"),
      V = require("SlotHandler"),
      N = require("Utils"),
      q = require("AutoSpinHandler"),
      g = require("TransactionStateMachineHandler"),
      K = function (O) {
        function x(p, b, L, H) {
          var U = O.call(this, p, b, L, H) || this;
          return U.name = "MJSpinState", U.generalControllers = undefined, U.dataSource = undefined, U.dataSource = p, U.generalControllers = b.generalControllers, U;
        }
        return __extends(x, O), x.prototype.callApi = function (p) {
          N.sequenceCallback(g.goToStateCallback("result", true), this.gu.bind(this))(p);
        }, x.prototype.gu = function (p) {
          {
            var b = this;
            T.doTransactionAPIRequest({
              'name': this.name,
              'apiRequest': B.mjApiClient.spin.bind(B.mjApiClient),
              'fallbackRequest': B.mjApiClient.getGameInfo.bind(B.mjApiClient)
            }, this.dataSource, function (L, H) {
              {
                H && H.dt && (L && q.shouldAutoSpin() && q.exitAutoSpin(b.generalControllers.spinButtonController), g.transitionCompleteCallback("result")(p));
              }
            });
          }
        }, x.prototype.stateWillStartSpin = function () {
          {
            switch (this.dataSource.transactionModel.transitionTo) {
              case X.TransitionState.NORMAL:
                this.Cu(), this.generalControllers.multiplierBoardController.resetMultiplier();
                break;
              case X.TransitionState.FREE_SPIN:
                M.playAudio(C.GENERAL_AUDIO.bonusReelSpin.key), this.Cu(), this.generalControllers.multiplierBoardController.resetMultiplier();
            }
          }
        }, x.prototype.Cu = function () {
          var p = this.generalControllers.infoboardController;
          p.hideWin();
          var b = this.dataSource.transactionModel.transitionTo,
            L = !(!V.slotHandler.isTurboMode() && !V.slotHandler.isFreeSpinTurboMode());
          b === X.TransitionState.NORMAL ? p.switchToTips(L) : b === X.TransitionState.FREE_SPIN && p.freeSpinTips(L);
        }, x;
      }(Z.default);
    exports.default = K, cc._RF.pop();
  }
}
module.exports = MJSpinState;
