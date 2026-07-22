// module: MJPrizeState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJPrizeState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "5077aPdiJVBfYT9UA7aHlh1", "MJPrizeState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("PrizeState"),
      X = require("Utils"),
      Z = (require("TweaksData"), require("GameEventHandler")),
      T = require("SettingMenuHelper"),
      M = require("GameConstant"),
      C = require("TransactionStateMachineHandler"),
      V = require("AudioManager"),
      N = require("SlotHandler"),
      q = require("SlotGameTools"),
      g = require("GameUtil"),
      K = function (O) {
        function x(p, b, L, H) {
          var U = O.call(this, p, b, L, H) || this;
          return U.name = "MJPrizeState", U.dataSource = undefined, U.generalControllers = undefined, U.finalCallback = undefined, U.dataSource = p, U.generalControllers = b.generalControllers, U.finalCallback = L, U;
        }
        return __extends(x, O), x.prototype.renderPrize = function () {
          X.sequenceCallback(this.Fr.bind(this), X.spawnCallback(this.renderLines.bind(this), this.playPrize.bind(this)), this.Wr.bind(this), this.Jr.bind(this))(this.exitState.bind(this));
        }, x.prototype.playPrize = function (p) {
          var b = this.dataSource.transactionModel,
            L = this.getWinThresholds(),
            H = b.singleSpinAccumulatedWin,
            U = b.totalWinAmount;
          var k = {};
          k.displayState = "Start";
          k.effectType = "BigWin";
          this.Vr() ? q.isBigWinThreshold(H, L) ? (Z.emitGameEffectStateChangedEvent(k), this.zr(H, function () {
            var Y = {};
            Y.displayState = "End";
            Y.effectType = "BigWin";
            Z.emitGameEffectStateChangedEvent(Y), p && p();
          })) : (this.Kr(), p && p()) : q.isMediumWinThreshold(H, L) ? this.runMediumPrizeState(U, p) : H > 0 ? this.runSmallPrizeState(U, p) : (this.Kr(), p && p());
        }, x.prototype.playAllLines = function (p) {
          this.qr(p);
        }, x.prototype.runBigPrizeState = function (p, b) {
          X.sequenceCallback(this.Qr(p, false), this.Kr.bind(this))(b);
        }, x.prototype.runMediumPrizeState = function (p, b) {
          X.sequenceCallback(this.Yr(p), this.Kr.bind(this))(b);
        }, x.prototype.runSmallPrizeState = function (p, b) {
          X.sequenceCallback(this.Zr(p), this.Kr.bind(this))(b);
        }, x.prototype.zr = function (p, b) {
          var L = this.generalControllers,
            H = this.getWinThresholds(),
            U = this.dataSource.isGameReplaying;
          L.bigWinController.play(p, H, U, b);
        }, x.prototype.Zr = function (p) {
          var b = this;
          return function (L) {
            var H = b.dataSource.transactionModel.transitionTo,
              U = H === M.TransitionState.FREE_SPIN || H === M.TransitionState.NORMAL;
            b.generalControllers.infoboardController.showWin(p, U, function () {}), b.checkCallbackDelay(L);
          };
        }, x.prototype.Qr = function (p, b) {
          var L = this;
          return function (H) {
            L.generalControllers.infoboardController.showBigWin(p, b, L.Vr(), X.emptyFunc), L.checkCallbackDelay(H);
          };
        }, x.prototype.Yr = function (p) {
          var b = this;
          return function (L) {
            b.generalControllers.infoboardController.showMediumWin(p, b.Vr(), X.emptyFunc), b.checkCallbackDelay(L, true);
          };
        }, x.prototype.Jr = function (p) {
          var b = this.dataSource.transactionModel.singleSpinAccumulatedWin,
            L = this.getWinThresholds();
          this.Vr() ? q.isBigWinThreshold(b, L) ? this.runBigPrizeState(b, p) : q.isMediumWinThreshold(b, L) ? this.runMediumPrizeState(b, p) : this.runSmallPrizeState(b, p) : p && p();
        }, x.prototype.Wr = function (p) {
          if (this.dataSource.transactionModel.winLines) {
            var b = this.generalControllers.slotController;
            X.sequenceCallback(X.spawnCallback(b.removeSymbols.bind(b), b.disableDim.bind(b, false)), function (L) {
              b.playSlotItemsShakeEffect(), L();
            })(p);
          } else p();
        }, x.prototype.checkCallbackDelay = function (p, b) {
          undefined === b && (b = false);
          var L = this.dataSource.transactionModel.transitionTo;
          if (L === M.TransitionState.FREE_SPIN || L === M.TransitionState.NORMAL) {
            var H = b && L === M.TransitionState.FREE_SPIN ? 2 : 1;
            X.delayCallback(H)(p);
          } else p && p();
        }, x.prototype.Kr = function (p) {
          var b = this.dataSource.playerModel.balance,
            L = this.dataSource.transactionModel.accumulatedWinAmount;
          T.settingMenuHelper.setWinAmount(L), T.settingMenuHelper.setBalance(b), p && p();
        }, x.prototype.qr = function (L) {
          var U = this.dataSource.transactionModel,
            k = U.winLines.winPositions,
            Y = this.generalControllers.slotController,
            z = U.positionToBeRemove,
            P = U.originalReels,
            G = g.getWinPoitionArr(U.winLines),
            W = g.differentArray(G, z),
            D = g.generateGroupOfSlotItemWin(G),
            J = W.length + z.length,
            Q0 = [[], [], [], [], []],
            Q1 = [];
          if (k.length < 3) (function () {
            var QI = 0;
            k.forEach(function (Qm) {
              X.delayCallback(QI)(function () {
                V.playVocal(V.winVocals[parseInt(Qm, 10) - 2]);
              }), QI += 0.5;
            });
          })();else {
            V.getWinCount() > 1 && V.setWinCount(0), V.playVocal(V.multiWinVocals[V.getWinCount()]);
            var Q2 = V.getWinCount() + 1;
            V.setWinCount(Q2);
          }
          for (var Q3 = function (QI) {
              return -1 === D.indexOf(QI);
            }, Q4 = function () {
              0 == --J && L();
            }, Q5 = Y.getSlotItems(z), Q6 = function (QI) {
              var Qm = Q5[QI],
                Qt = z[QI],
                QB = P[Qt];
              Q0[Qm.slotViewIndex].push(function (QX) {
                Qm.playHighLightEffect(QB, Q3(Qt), Q4), QX && QX();
              });
            }, Q7 = 0; Q7 < z.length; Q7++) Q6(Q7);
          for (var Q8 = Y.getSlotItems(W), Q9 = function (QI) {
              var Qm = Q8[QI],
                Qt = W[QI],
                QB = P[Qt];
              Q0[Qm.slotViewIndex].push(function (QX) {
                Qm.playHighLightEffect(QB, Q3(Qt), Q4), QX && QX();
              });
            }, QQ = 0; QQ < W.length; QQ++) Q9(QQ);
          var QF = Y.isTurboMode() ? 0 : 0.05,
            QR = function (QI) {
              Q0[QI].length && Q1.push(function (Qm) {
                X.spawnCallback(Q0[QI])(function () {
                  return X.delayCallback(QF)(Qm);
                });
              });
            };
          for (Q7 = 0; Q7 < Q0.length; Q7++) QR(Q7);
          var Qn = [];
          if (U.scatterCount > 2) for (var Qc = 0; Qc < P.length; Qc++) P[Qc] === M.SLOT_SYMBOLS.SCATTER && Qn.push(Qc);
          for (var Qj = [], Qi = 0; Qi < N.NUMBER_OF_COLUMN * N.NUMBER_OF_ROW; Qi++) -1 === G.indexOf(Qi) && -1 === Qn.indexOf(Qi) && Qj.push(Qi);
          Y.enableDimSlotItems(Qj), Y.enableDimBackground(), X.sequenceCallback(Q1)(function () {});
        }, x.prototype.Fr = function (p) {
          var b = this.dataSource.transactionModel.transitionTo;
          if (b === M.TransitionState.NORMAL || b === M.TransitionState.FREE_SPIN) {
            var L = b === M.TransitionState.NORMAL ? "setup" : "idle";
            X.sequenceCallback(C.transitionCompleteCallback("prize"), C.goToStateCallback(L, true))(p);
          } else p && p();
        }, x.prototype.Vr = function () {
          var p = this.dataSource.transactionModel,
            b = p.transitionTo,
            L = p.singleSpinAccumulatedWin;
          return (b === M.TransitionState.NORMAL || b === M.TransitionState.FREE_SPIN) && L > 0;
        }, x;
      }(B.default);
    exports.default = K, cc._RF.pop();
  }
}
module.exports = MJPrizeState;
