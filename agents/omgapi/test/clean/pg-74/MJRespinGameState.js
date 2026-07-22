// module: MJRespinGameState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJRespinGameState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "03f8b7u8t5Ek5sUHJN0fey0", "MJRespinGameState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("MJSpinState"),
      X = require("MJPrizeState"),
      Z = require("MJResultState"),
      T = require("Utils"),
      M = require("GameConstant"),
      C = require("SettingMenuHelper"),
      V = require("MJScatterState"),
      N = require("MJNormalSpinDecorator"),
      q = require("NormalResultDecorator"),
      g = require("NormalPrizeDecorator"),
      K = require("TransactionStateMachineHandler"),
      O = require("GameEventHandler"),
      x = function () {
        function p(b, L, H, U) {
          this.name = "Respin", this.dataSource = undefined, this.generalControllers = undefined, this.bonusControllers = undefined, this.loadingController = undefined, this.finalCallback = undefined, this.dataSource = b, this.generalControllers = L.generalControllers, this.bonusControllers = L.bonusControllers, this.loadingController = H, this.finalCallback = U;
        }
        return p.prototype.run = function () {
          var b = this;
          T.spawnCallback(this.Xr.bind(this), this.$r.bind(this))(function () {
            b.mr = T.sequenceCallback(b.Sr.bind(b), b.Mr.bind(b), b.yr.bind(b), b.wr.bind(b), b.Br.bind(b))(b.ro.bind(b));
          });
        }, p.prototype.forceExit = function () {
          var b = this.mr;
          b && b(), this.ro();
        }, p.prototype.$r = function (b) {
          var L = this;
          var H = {};
          H.noBet = true;
          K.goToStateCallback("action", true, H)(function () {
            if (L.dataSource) {
              var U = L.dataSource.transactionModel.stateTransitionTo;
              U !== M.TransitionState.RESPIN && U !== M.TransitionState.FREE_SPIN_RESPIN || K.transitionCompleteCallback("action")(b);
            }
          });
        }, p.prototype.Sr = function (b) {
          new B.default(this.dataSource, {
            'generalControllers': this.generalControllers
          }, b, new N.default(this.dataSource, {
            'generalControllers': this.generalControllers
          })).run();
        }, p.prototype.Mr = function (b) {
          new Z.default(this.dataSource, {
            'generalControllers': this.generalControllers,
            'bonusControllers': this.bonusControllers
          }, b, new q.default(this.dataSource, {
            'generalControllers': this.generalControllers
          })).run();
        }, p.prototype.yr = function (b) {
          new X.default(this.dataSource, {
            'generalControllers': this.generalControllers
          }, b, new g.default(this.dataSource, {
            'generalControllers': this.generalControllers
          })).run();
        }, p.prototype.Br = function (b) {
          var L = this.dataSource.transactionModel,
            H = L.transitionFrom,
            U = L.transitionTo,
            k = L.freeSpin;
          if (H === M.TransitionState.FREE_SPIN_RESPIN && U === M.TransitionState.NORMAL) {
            var Y = k ? k.accumulatedWin : 0,
              y = this.generalControllers;
            var z = {};
            z.displayState = "Start";
            z.effectType = "TotalWin";
            Y > 0 && O.emitGameEffectStateChangedEvent(z), T.sequenceCallback(T.delayCallback(1), T.spawnCallback(this.Hr.bind(this), this.Ar.bind(this), this.Or.bind(this)), this.Ir.bind(this))(function () {
              var P = {};
              P.displayState = "End";
              P.effectType = "TotalWin";
              Y > 0 && O.emitGameEffectStateChangedEvent(P), y.spinButtonController.show(), b && b();
            });
          } else {
            var S = U === M.TransitionState.NORMAL ? "setup" : "idle";
            K.transitionCompleteCallback(S)(b);
          }
        }, p.prototype.Xr = function (b) {
          var L = this.dataSource.transactionModel.winLines,
            H = this.generalControllers.slotController;
          L && false === H.hasRemovedSymbols ? (T.sequenceCallback(T.spawnCallback(H.removeSymbols.bind(H), H.disableDim.bind(H, false)), function (U) {
            H.playSlotItemsShakeEffect(), U && U();
          })(b), H.hasRemovedSymbols = true) : b && b();
        }, p.prototype.ro = function () {
          var b = this.finalCallback;
          this.finalCallback = undefined, this.destroy(), b && b();
        }, p.prototype.Hr = function (b) {
          var L = this.dataSource.transactionModel.freeSpin,
            H = L ? L.accumulatedWin : 0,
            U = this.dataSource.isGameReplaying,
            k = this.generalControllers,
            Y = function (z) {
              K.transitionCompleteCallback("setup")(z);
            };
          if (H > 0) {
            var y = {
              'numberRollingEndCallback': function () {
                var z = {};
                z.displayState = "DidUpdate";
                z.effectType = "TotalWin";
                O.emitGameEffectStateChangedEvent(z);
              },
              'collectButtonClickedCallback': function (z) {
                var S = {};
                S.displayState = "WillEnd";
                S.effectType = "TotalWin";
                O.emitGameEffectStateChangedEvent(S), Y(z);
              }
            };
            k.totalWinController.setSocialShareEventCallback(y), k.totalWinController.play(H, U, b);
          } else Y(b);
        }, p.prototype.Ar = function (b) {
          this.loadingController.releaseBonus(b);
        }, p.prototype.Tr = function () {
          C.settingMenuHelper.setHidden(false), this.generalControllers.settingMenuFooterController.returnHolder();
        }, p.prototype.Or = function (b) {
          var L = this;
          T.delayCallback(0.5)(function () {
            var H = L.generalControllers,
              U = H.backGroundController,
              k = H.foregroundController,
              Y = H.infoboardController,
              y = H.multiplierBoardController,
              z = L.dataSource.transactionModel.transitionTo;
            U.switchBackground(z), k.switchBackground(z), Y.setSwitchToNormalBackgroundOnHide(), L.Tr(), y.switchMultiplier(z, b);
          });
        }, p.prototype.Ir = function (b) {
          var L = this.dataSource.transactionModel,
            H = L.transitionFrom,
            U = L.transitionTo,
            k = L.accumulatedWinAmount;
          H === M.TransitionState.FREE_SPIN_RESPIN && U === M.TransitionState.NORMAL ? this.generalControllers.infoboardController.showTotalWin(k, b) : b && b();
        }, p.prototype.wr = function (b) {
          this.dataSource.transactionModel.transitionFrom === M.TransitionState.FREE_SPIN_RESPIN ? new V.default(this.dataSource, {
            'generalControllers': this.generalControllers,
            'bonusControllers': this.bonusControllers
          }, b).run() : b && b();
        }, p.prototype.destroy = function () {
          this.mr = undefined, this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined;
        }, p;
      }();
    exports.default = x, cc._RF.pop();
  }
}
module.exports = MJRespinGameState;
