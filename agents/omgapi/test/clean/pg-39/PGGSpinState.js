// module: PGGSpinState
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGGSpinState(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "46bf6P0fq9A86HAiiJDCia0", "PGGSpinState")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("SpinState"),
        C = require("PGGAPIClient"),
        H = require("RequestHandler"),
        V = require("AutoSpinHandler"),
        M = require("Utils"),
        q = require("TransactionStateMachineHandler"),
        m = cc._decorator.ccclass,
        D = function (W) {
          function k() {
            {
              var z = null !== W && W.apply(this, arguments) || this;
              return z.name = "PGGSpinState", z;
            }
          }
          return __extends(k, W), k.prototype.stateWillStartSpin = function () {
            var z = this.dataSource.transactionModel,
              L = z.accumulatedWinAmount,
              v = z.piggyFeature,
              b = z.hasWild,
              U = this.generalControllers;
            v && U.scrollerManagerController.playExit();
            var Q = [];
            b && (Q = U.wildMultiplySpineController.getHidenSlotIndexList(), U.wildMultiplySpineController.stop()), L > 0 && (Q = [1, 4, 7], U.paySelectController.hide(), U.payTableController.playActiveAllNode()), Q.length > 0 && (U.slotController.getSlotItemWithIndex(Q).forEach(function (w) {
              w.active = true;
            }), this.generalControllers.fastSpinAnimationController.reset()), U.infobarController.displayNormalTip(), U.payTableController.playWildInactive();
          }, k.prototype.callApi = function (z) {
            M.sequenceCallback(q.goToStateCallback("result", true), this.tu.bind(this))(z);
          }, k.prototype.tu = function (z) {
            var L = this;
            H.doTransactionAPIRequest({
              'name': this.name,
              'apiRequest': C.pgApiClient.spin.bind(C.pgApiClient),
              'fallbackRequest': C.pgApiClient.getGameInfo.bind(C.pgApiClient)
            }, this.dataSource, function (v, b) {
              b && (v && V.shouldAutoSpin() && V.exitAutoSpin(L.generalControllers.spinButtonController), q.transitionCompleteCallback("result")(z));
            });
          }, __decorate([m], k);
        }(x.default);
      exports.default = D, cc._RF.pop();
    }
  }
}
module.exports = PGGSpinState;
