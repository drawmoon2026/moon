// module: RefreshWorldHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function RefreshWorldHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4ef5cJw0YpAx5UIePlauVio", "RefreshWorldHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.RefreshWorldGameState = undefined;
    var x,
      C = require("RequestHandler"),
      H = require("Utils"),
      V = require("GenericLoadingScreenController");
    (function (m) {
      m[m.STANDARD = 0] = "STANDARD", m[m.PROGRESSING = 1] = "PROGRESSING";
    })(x = exports.RefreshWorldGameState || (exports.RefreshWorldGameState = {}));
    var M = cc._decorator.ccclass,
      q = function () {
        function m() {
          this.refreshWorldGameState = x.STANDARD;
        }
        return m.prototype.initialize = function (D) {
          this.generalControllers = D.generalController, this.bonusControllers = D.bonusController ? D.bonusController : undefined, this.extraControllers = D.extraController ? D.extraController : undefined, this.dataSource = D.dataSource, this.apiClient = D.apiClient, this.settingMenuHelper = D.settingMenuHelper, this.refreshWorldGameState = D.refreshWorldGameState ? D.refreshWorldGameState : x.STANDARD;
        }, m.prototype.refreshWorldByChangeWalletIdle = function (D, W) {
          H.sequenceCallback(this.loadBundle.bind(this), this.kl.bind(this), this.Ll.bind(this), this.El.bind(this), this.resetController.bind(this), H.deferCallback(true), H.deferCallback(true), this.executeTransition.bind(this), D, this.jl.bind(this), this.Dl.bind(this), this.changeWalletIdleSetUp.bind(this), this.reenableSpinButton.bind(this))(W);
        }, m.prototype.refreshWorldByBetOptionIdle = function (D, W) {
          var k = W || function () {};
          H.sequenceCallback(this.loadBundle.bind(this), this.Ll.bind(this), this.Ul.bind(this), this.El.bind(this), this.Wl.bind(this), this.resetController.bind(this), H.deferCallback(true), H.deferCallback(true), this.executeTransition.bind(this), D, this.Dl.bind(this), this.betOptionPreIdleSetUp.bind(this), this.Fl.bind(this), this.betOptionIdleSetUp.bind(this), this.reenableSpinButton.bind(this))(k);
        }, m.prototype.Ul = function (D) {
          V.showLoadingPage(D);
        }, m.prototype.Fl = function (D) {
          V.hideLoadingPage(D);
        }, m.prototype.Dl = function (D) {
          var W = this.dataSource.transactionModel.transactionId > 0;
          this.settingMenuHelper.setVerifyInteractable(W), D && D();
        }, m.prototype.kl = function (D) {
          var W = this.dataSource,
            k = this.settingMenuHelper,
            z = W.systemModel,
            L = z.betSizeList,
            v = z.betLevelList,
            b = z.featureBuy,
            U = W.transactionModel,
            Q = U.betLevelValue,
            w = U.betSizeValue,
            P = W.playerModel.minimumBetAmount;
          k.betSizeList = L, k.betSizeValue = w, k.betLevelList = v, k.betLevelValue = Q, k.featureBuyThreshold = b && b.threshold, k.minimumBetAmount = P, k.updateBetValues(), D && D();
        }, m.prototype.Wl = function (D) {
          var W = this.dataSource.transactionModel,
            k = {
              'cs': W.betSizeValue,
              'ml': W.betLevelValue
            };
          this.xl(D, k);
        }, m.prototype.xl = function (D, W) {
          var k = this.apiClient,
            z = this.dataSource,
            L = this.settingMenuHelper;
          C.doAPIRequest({
            'name': "Update Game Info",
            'apiRequest': k.updateGameInfo.bind(k),
            'apiRequestParam': W,
            'errorTitle': shell.I18n.t("General.ErrorChangeFailed")
          }, function (v, b) {
            if (b && b.dt) {
              var U = z.systemModel,
                Q = U.betSizeList,
                w = U.betLevelList,
                P = z.transactionModel,
                R = P.betLevelValue,
                T = P.betSizeValue;
              L.betSizeList = Q, L.betSizeValue = T, L.betLevelList = w, L.betLevelValue = R, L.updateBetValues(), D && D();
            }
          });
        }, m.prototype.Ll = function (D) {
          var W = this.generalControllers;
          W.spinButtonController.exitAutoSpinMode(), W.spinButtonController.disableButton(), D && D();
        }, m.prototype.El = function (D) {
          this.settingMenuHelper.setWinAmount(0), D && D();
        }, m.prototype.jl = function (D) {
          var W = this.settingMenuHelper;
          W.reevaluateBet() ? (W.updateBetValues(), this.Vl(D)) : D && D();
        }, m.prototype.Vl = function (D) {
          switch (this.refreshWorldGameState) {
            case x.STANDARD:
              D && D();
              break;
            case x.PROGRESSING:
              this.Wl(D);
          }
        }, m.prototype.loadBundle = function (D) {
          D && D();
        }, m.prototype.reenableSpinButton = function (D) {
          var W = this.generalControllers.spinButtonController;
          W.idle(), W.enableButton(), D && D();
        }, m.prototype.resetController = function (D) {
          D && D();
        }, m.prototype.executeTransition = function (D) {
          D && D();
        }, m.prototype.changeWalletIdleSetUp = function (D) {
          D && D();
        }, m.prototype.betOptionPreIdleSetUp = function (D) {
          D && D();
        }, m.prototype.betOptionIdleSetUp = function (D) {
          D && D();
        }, __decorate([M], m);
      }();
    exports.default = q, cc._RF.pop();
  }
}
module.exports = RefreshWorldHandler;
