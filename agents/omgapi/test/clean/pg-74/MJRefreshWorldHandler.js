// module: MJRefreshWorldHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJRefreshWorldHandler(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "6724bnLODlJTqyD0ZFYBKMz", "MJRefreshWorldHandler")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.mjRefreshWorldHandler = undefined;
    var B = require("RefreshWorldHandler"),
      X = require("GameConstant"),
      Z = cc._decorator.ccclass,
      T = function (M) {
        {
          function C() {
            return null !== M && M.apply(this, arguments) || this;
          }
          return __extends(C, M), C.prototype.initialize = function (V) {
            this.generalControllers = V.generalController, this.bonusControllers = V.bonusController ? V.bonusController : undefined, this.loadingController = V.loadingController, this.dataSource = V.dataSource, this.apiClient = V.apiClient, this.settingMenuHelper = V.settingMenuHelper, this.walletHelper = V.walletHelper;
          }, C.prototype.resetController = function (V) {
            var N = this.generalControllers,
              q = N.symbolPopoutController,
              f = N.slotController,
              g = N.infoboardController,
              l = this.dataSource.transactionModel,
              K = l.originalReels,
              O = l.specialSymbolsBefore,
              x = l.stateTransitionTo,
              p = f.getConvertedReelData(K);
            g.clear(), x !== X.TransitionState.NORMAL && x !== X.TransitionState.FREE_SPIN || f.reloadData(), q.hidePopOutItem(), x === X.TransitionState.NORMAL ? (q.setReelData(p), q.setAdditionalData(O), q.setupButtonEvent()) : (q.clearOnClickCallback(), q.disablePanel()), V && V();
          }, C.prototype.loadBundle = function (V) {
            var N = this.dataSource.transactionModel.stateTransitionTo,
              q = 2 === Math.floor(N / 10);
            this.loadingController.hasBonusLoaded() ? q ? V && V() : this.loadingController.releaseBonus(V) : q ? this.loadingController.loadBonusBundle(V) : V && V();
          }, C.prototype.changeWalletIdleSetUp = function (V) {
            {
              this.reenableSpinButton(V);
            }
          }, __decorate([Z], C);
        }
      }(B.default);
    exports.default = T, exports.mjRefreshWorldHandler = new T(), cc._RF.pop();
  }
}
module.exports = MJRefreshWorldHandler;
