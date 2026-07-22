// module: PGGPrizeState
// Cocos 模块函数,参数 (require, module, exports) = (require, y, module)
function PGGPrizeState(require, y, module) {
  'use strict';

  if (!cc._RF.push(y, "66291BwcDNB9ICAuxnTs1lf", "PGGPrizeState")) {
    var x = {};
    x.value = true;
    Object.defineProperty(module, "__esModule", x);
    var C = require("PrizeState"),
      H = require("MediumPrizeController"),
      V = require("BigPrizeController"),
      M = require("Utils"),
      q = require("SettingMenuHelper"),
      m = require("AutomationDecorator"),
      D = require("WinHighlight.spec"),
      W = require("TransactionStateMachineHandler"),
      k = cc._decorator.ccclass,
      z = function (L) {
        function v() {
          var b = null !== L && L.apply(this, arguments) || this;
          return b.name = "PGGResultState", b;
        }
        return __extends(v, L), v.prototype.renderPrize = function () {
          M.sequenceCallback(this.renderLines.bind(this), this.Da.bind(this), this.playPrize.bind(this))(this.exitState.bind(this));
        }, v.prototype.runBigPrizeState = function (b, U) {
          new V.default(this.dataSource, this.getWinThresholds(), this.generalControllers, U).run();
        }, v.prototype.runMediumPrizeState = function (b, U) {
          new H.default(this.dataSource, this.generalControllers, U).run();
        }, v.prototype.runSmallPrizeState = function (b, U) {
          new H.default(this.dataSource, this.generalControllers, U).run();
        }, v.prototype.playAllLines = function (b) {
          var U = this.dataSource.transactionModel,
            Q = U.totalWinAmount,
            w = U.reels;
          if (Q > 0) {
            var P = this.generalControllers.slotController,
              R = this.generalControllers.paySelectController,
              T = this.generalControllers.wildMultiplySpineController,
              Y = [];
            w.forEach(function (F) {
              var N;
              N = P.getSymbolSpriteFrames(F), Y.push(N.normal);
            });
            var X = [],
              E = T.getHidenSlotIndexList();
            [1, 4, 7].forEach(function (F) {
              -1 === E.indexOf(F) && X.push(F);
            }), X.length > 0 && P.getSlotItemWithIndex(X).forEach(function (F) {
              F.active = false;
            }), R.playNormalPaySelect(Y, w);
          }
          b && b();
        }, v.prototype.Da = function (b) {
          M.sequenceCallback(W.transitionCompleteCallback("prize"), W.goToStateCallback("setup", true))(b);
        }, v.prototype.Ua = function () {
          var b = this.dataSource.systemModel.maxLineNumber;
          return M.toDecimalWithExp(q.settingMenuHelper.betSizeValue * q.settingMenuHelper.betLevelValue * b, 2);
        }, __decorate([m.automationDec({
          'func': D.showWinHighlight
        })], v.prototype, "playAllLines", null), __decorate([k], v);
      }(C.default);
    module.default = z, cc._RF.pop();
  }
}
module.exports = PGGPrizeState;
