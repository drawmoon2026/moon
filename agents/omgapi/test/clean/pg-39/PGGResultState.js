// module: PGGResultState
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGGResultState(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "cfd90dFotVFuq3zVL6PFkg1", "PGGResultState")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("ResultState"),
      C = require("AudioManager"),
      H = require("SlotProperties"),
      V = require("Utils"),
      M = require("TransactionStateMachineHandler"),
      q = cc._decorator.ccclass,
      m = function (D) {
        function W() {
          var k = null !== D && D.apply(this, arguments) || this;
          return k.name = "PGGResultState", k;
        }
        return __extends(W, D), W.prototype.resultDidStartRender = function (k) {
          this.generalControllers.slotController.setOnEachStopColumnCallback(this.Wa.bind(this)), this.generalControllers.slotController.setFastSpinEndCallback(this.Fa.bind(this)), V.sequenceCallback(M.goToStateCallback("prize", true), this.xa.bind(this))(k);
        }, W.prototype.renderFeature = function (k) {
          V.sequenceCallback(this.Va.bind(this))(k);
        }, W.prototype.setSlotData = function () {
          var k = this.generalControllers,
            z = this.dataSource.transactionModel,
            L = z.fakeReels,
            v = z.reels,
            b = z.middleReelsMutiply,
            U = z.piggyFeature;
          k.slotController.setReelData(L, v, b, U);
        }, W.prototype.Va = function (k) {
          var z = this.generalControllers.payTableController,
            L = this.dataSource.transactionModel,
            v = L.totalWinAmount,
            b = L.winSymbolIndex;
          v > 0 ? (z.playActiveAllNode(), z.playWinFlash(b)) : z.playActiveAllNode(), V.sequenceCallback(this.za.bind(this), this.Ka.bind(this), V.deferCallback(true), this.qa.bind(this), this.Ja.bind(this), this.Ya.bind(this))(k);
        }, W.prototype.za = function (k) {
          var z = this.dataSource.transactionModel,
            L = z.piggyFeature,
            v = z.winSymbolIndex;
          L ? (this.generalControllers.piggyController.playFeatureExit(k), this.generalControllers.fastSpinAnimationController.stopScrollerShine(-1 !== v)) : k && k();
        }, W.prototype.Ka = function (k) {
          var z = this,
            L = this.dataSource.transactionModel,
            v = L.reels,
            b = L.winSymbolIndex,
            U = L.wildMultiply,
            Q = L.hasWild,
            w = this.generalControllers.slotController,
            P = [];
          if (Q) {
            var R = this.generalControllers.wildMultiplySpineController;
            v.forEach(function (Y, X) {
              if (Y === H.SlotIndexes.WILD) {
                var E = 1,
                  F = H.NumberOfRow * X + 1;
                P.push(F), 1 === X && (E = U, -1 !== b && R.playMultipleWinAudio(U)), -1 !== b ? (R.playWildSpineLoop(E, X), k && k()) : (R.playWildSpineStill(E, X, z.Qa.bind(z, P, k)), C.GeneralAudioPool.sym_wild_nowin.play(), C.GeneralAudioPool.angpau_shiny.play());
              }
            });
            var T = R.getHidenSlotIndexList();
            T.length > 0 && w.getSlotItemWithIndex(T).forEach(function (Y) {
              Y.active = false;
            });
          } else k && k();
        }, W.prototype.qa = function (k) {
          var z = this.generalControllers.payTableController,
            L = this.dataSource.transactionModel,
            v = L.hasWild,
            b = L.accumulatedWinAmount,
            U = L.wildMultiply;
          if (b > 0) if (v) {
            var Q = U || 1;
            z.fadeMultiply(Q, true);
          } else z.playWildInactive();
          k && k();
        }, W.prototype.Qa = function (k, z) {
          this.generalControllers.slotController.getSlotItemWithIndex(k).forEach(function (L) {
            L.active = true;
          }), z && z();
        }, W.prototype.Ja = function (k) {
          var z = this.dataSource.transactionModel,
            L = z.isPossibleWin,
            v = z.piggyFeature;
          L && false === v ? this.generalControllers.piggyController.playExitFastSpin(k) : k && k();
        }, W.prototype.Ya = function (k) {
          var z = this.dataSource.transactionModel,
            L = z.hasWild;
          0 === z.accumulatedWinAmount && L ? this.generalControllers.piggyController.playWildReact(k) : k && k();
        }, W.prototype.Wa = function (k) {
          var z = this.dataSource.transactionModel.possibleWinSymbolIndex;
          if (2 === k.Xa) {
            var L = this.generalControllers.payTableController;
            -1 !== z && L.playWinFlash(z);
          }
        }, W.prototype.Fa = function () {
          this.dataSource.transactionModel.piggyFeature && (this.generalControllers.fastSpinAnimationController.stopFastSpinShine(), this.generalControllers.featurePiggyController.stop());
        }, W.prototype.xa = function (k) {
          var z = this.dataSource.transactionModel.piggyFeature,
            L = this.generalControllers.piggyController;
          z ? (L.playFeatureStart(this.Za(k)), C.GeneralAudioPool.feature_raise_angpau.play()) : k && k();
        }, W.prototype.Za = function (k) {
          var z = this,
            L = this.generalControllers.featurePiggyController,
            v = this.generalControllers.backWorldController,
            b = this.generalControllers.fastSpinAnimationController;
          return function () {
            L.play(z.$a(k)), v.playShineDoorAnimation(), b.playFastSpinShine(0.8);
          };
        }, W.prototype.$a = function (k) {
          var z = this.generalControllers.scrollerManagerController;
          return function () {
            z.playSpawn(), k && k();
          };
        }, __decorate([q], W);
      }(x.default);
    exports.default = m, cc._RF.pop();
  }
}
module.exports = PGGResultState;
