// module: UISetupHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function UISetupHandler(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "fac27RnOUFFZqvCCEitlo83", "UISetupHandler")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.BonusGameUI = exports.NormalGameUI = exports.settingMenuInteractable = exports.renderUIBaseOnState = undefined;
    var B = require("MJDataSource"),
      X = require("GameConstant"),
      Z = require("SettingMenuHelper"),
      T = require("Utils"),
      M = require("AudioManager"),
      C = (require("SlotHandler"), require("MultiplierBoardController"));
    exports.renderUIBaseOnState = function (O, x, p, b, L, H) {
      var U = {};
      U.generalControllers = b;
      U.bonusControllers = L;
      H || 2 === Math.floor(x / 10) && 2 === Math.floor(p / 10) ? new N().setup(U, O) : new V().setup(b, O);
    }, exports.settingMenuInteractable = function (O) {
      Z.settingMenuHelper.setAllButtonsInteractable(O);
    };
    var V = function () {
      function O() {}
      return O.prototype.setup = function (x, p) {
        this.Zh = x, q(), this.Jg(), T.sequenceCallback(this.Pg.bind(this), this.Vg.bind(this), this.zg.bind(this), this.Tr.bind(this), this.Kg.bind(this))(p);
      }, O.prototype.Vg = function (x) {
        var p = this.Zh.spinButtonController;
        Z.settingMenuHelper.isIdle() && p.show(), x && x();
      }, O.prototype.Pg = function (x) {
        this.Zh.backGroundController.switchBackground(X.TransitionState.NORMAL), this.Zh.foregroundController.switchBackground(X.TransitionState.NORMAL), this.Zh.multiplierBoardController.switchMultiplier(X.TransitionState.NORMAL), this.Zh.infoboardController.switchBackground(X.TransitionState.NORMAL), x && x();
      }, O.prototype.Jg = function () {
        this.Zh.slotController.playAllScatterEffect(undefined, false, true);
      }, O.prototype.zg = function (x) {
        var p = this.Zh.multiplierBoardController,
          b = B.mjDataSource.transactionModel,
          L = b.winMultiplier,
          H = b.transitionFrom,
          U = b.transitionTo,
          k = H === X.TransitionState.FREE_SPIN_RESPIN && U === X.TransitionState.NORMAL ? 0 : L,
          Y = C.PlayAnimType.None;
        U !== X.TransitionState.FREE_SPIN_RESPIN && U !== X.TransitionState.RESPIN || (Y = C.PlayAnimType.Loop), p.initMultiplier(k, Y), x && x();
      }, O.prototype.Tr = function (x) {
        var p = this.Zh,
          b = p.slotController,
          L = p.settingMenuFooterController;
        Z.settingMenuHelper.setHidden(false), L.returnHolder(), b.stopSlotItemsShakeEffect(), b.disableDim(true), M.unscheduleVocals(), x && x();
      }, O.prototype.Kg = function (x) {
        g(this.Zh, x);
      }, O;
    }();
    exports.NormalGameUI = V;
    var N = function () {
      function O() {}
      return O.prototype.setup = function (x, p) {
        this.Zh = x.generalControllers, this.Xh = x.bonusControllers, M.unscheduleVocals(), q(), T.sequenceCallback(this.Pg.bind(this), this.Du.bind(this), this.zg.bind(this))(p);
      }, O.prototype.Pg = function (x) {
        this.Zh.backGroundController.switchBackground(X.TransitionState.FREE_SPIN), this.Zh.foregroundController.switchBackground(X.TransitionState.FREE_SPIN), this.Zh.infoboardController.switchBackground(X.TransitionState.FREE_SPIN), this.Zh.infoboardController.freeSpinTips(true), x && x();
      }, O.prototype.Du = function (x) {
        this.Jg(), T.sequenceCallback(this.qg.bind(this), this.Kg.bind(this))(x);
      }, O.prototype.zg = function (x) {
        var p = this.Zh.multiplierBoardController,
          b = B.mjDataSource.transactionModel.winMultiplier,
          L = B.mjDataSource.transactionModel.transitionTo;
        2 === Math.floor(L / 10) ? p.switchMultiplier(X.TransitionState.FREE_SPIN, undefined, false) : p.switchMultiplier(X.TransitionState.FREE_SPIN), p.initMultiplier(b), x && x();
      }, O.prototype.Jg = function () {
        this.Zh.slotController.playAllScatterEffect(undefined, false, true);
      }, O.prototype.qg = function (x) {
        var p = B.mjDataSource.transactionModel.freeSpin.step,
          b = this.Zh,
          L = b.settingMenuFooterHolder,
          H = b.settingMenuFooterController,
          U = b.spinButtonController;
        Z.settingMenuHelper.setHidden(true), H.changeHolder(L), U.hide();
        var k = this.Xh.remainingFreeSpinController;
        k.show(), k.setFreeSpinCount(p), x && x();
      }, O.prototype.Kg = function (x) {
        g(this.Zh, x);
      }, O;
    }();
    exports.BonusGameUI = N, cc._RF.pop();
  }
  function q() {
    var O = B.mjDataSource.playerModel.balance,
      x = B.mjDataSource.transactionModel.accumulatedWinAmount;
    Z.settingMenuHelper.setBalance(O), Z.settingMenuHelper.setWinAmount(x);
  }
  function g(O, x) {
    var p = B.mjDataSource.transactionModel,
      b = p.totalWinAmount,
      L = p.accumulatedWinAmount,
      H = p.transitionTo,
      U = p.transitionFrom,
      k = K(),
      Y = H === X.TransitionState.NORMAL || H === X.TransitionState.FREE_SPIN,
      y = U === X.TransitionState.FREE_SPIN && H === X.TransitionState.NORMAL,
      z = Y ? L : b;
    O.infoboardController.init(), z > 0 ? y ? O.infoboardController.setTotalWinAmount(z) : Y && k.bigWinThreshold && L >= k.bigWinThreshold ? O.infoboardController.showBigWin(z, false, Y, function () {}) : k.mediumWinThreshold && L >= k.mediumWinThreshold ? O.infoboardController.showMediumWin(z, Y, function () {}) : Y ? (O.infoboardController.hideWin(), O.infoboardController.setTotalWinAmount(z)) : O.infoboardController.showWin(z, false, function () {}) : (O.infoboardController.clear(), H === X.TransitionState.NORMAL ? O.infoboardController.switchToTips(true) : H === X.TransitionState.FREE_SPIN && O.infoboardController.freeSpinTips(true)), x && x();
  }
  function K() {
    var O = B.mjDataSource.systemModel,
      x = O.maxLineNumber,
      p = O.winThresholds,
      b = B.mjDataSource.transactionModel,
      L = b.betSizeValue,
      H = b.betLevelValue;
    return p.getAllThresholds(L, H, x);
  }
}
module.exports = UISetupHandler;
