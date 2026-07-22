// module: MJSlotController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, module)
function MJSlotController(require, j, module) {
  'use strict';

  if (!cc._RF.push(j, "22b87qcl6BGuZI5q43faXjH", "MJSlotController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(module, "__esModule", B);
    var X = require("AutomationDecorator"),
      Z = require("SlotController.spec"),
      T = require("SlotStateMachine"),
      M = require("SlotHandler"),
      V = require("SymbolImageHandler"),
      N = require("MJDataSource"),
      q = require("GameConstant"),
      K = require("AudioManager"),
      O = require("Utils"),
      x = require("AudioConstant"),
      L = require("UIAppearanceHelper"),
      H = require("SpaceBarInterrupter"),
      U = require("NodePoolHandler"),
      k = require("GameUtil"),
      Y = require("SpinConfigHandler"),
      y = cc._decorator,
      z = y.ccclass,
      P = y.property,
      G = function (A) {
        function w() {
          {
            var W = null !== A && A.apply(this, arguments) || this;
            return W.aa = new T.default(), W.ua = false, W.la = false, W.fa = [0, 0, 0, 0, 0], W.da = true, W.slotItemPrefab = undefined, W.scatterPrefab = undefined, W.isTriggerScatter = false, W;
          }
        }
        return __extends(w, A), Object.defineProperty(w.prototype, "hasRemovedSymbols", {
          'get': function () {
            return this.da;
          },
          'set': function (W) {
            {
              this.da = W;
            }
          },
          'enumerable': false,
          'configurable': true
        }), w.prototype.setOnClickCallback = function (W) {
          this.Ss = W;
        }, w.prototype.setStopCompletedCallback = function (W) {
          this.va = W;
        }, w.prototype.setOnEachStopColumnCallback = function (W) {
          {
            this._a = W;
          }
        }, w.prototype.setPrefab = function (W) {
          {
            this.ma = W.symbol_prefab;
          }
        }, w.prototype.init = function (W, D, J) {
          this.Zh = D;
          var E = this.Zh.spinButtonController;
          H.spaceBarInterrupter.init({
            'spinButtonClickCallback': E.clickSpinButton.bind(E),
            'reelClickCallback': this.ba.bind(this)
          }), this.pa(W.transitionTo), U.nodePoolHandler.registerReusableItem("SlotItem", this.slotItemPrefab, "MJSlotItem", 50), U.nodePoolHandler.registerReusableItem("Symbol", this.ma, L.uiAppearanceHelper.v("game_skin.symbol_controller"), 10), U.nodePoolHandler.registerReusableItem("Scatter", this.scatterPrefab, "ScatterController", 5), M.slotHandler.init(W, this.node, V.symbolImageHandler.symbolImages, V.symbolImageHandler.blurredSymbolImages, this.Sa.bind(this), this.ga.bind(this)), M.slotHandler.onScatterEffectStart = this.Ca.bind(this), M.slotHandler.onScatterEffectStop = this.Ma.bind(this), this.ya(), J && J();
        }, w.prototype.setForceGoldBlock = function (W) {
          M.slotHandler.setForceGoldBlock(W);
        }, w.prototype.isTurboMode = function () {
          {
            return M.slotHandler.isTurboMode();
          }
        }, w.prototype.isFreeSpinTurboMode = function () {
          {
            return M.slotHandler.isFreeSpinTurboMode();
          }
        }, w.prototype.playShiftSlotEffect = function (W, D, J) {
          var E = N.mjDataSource.transactionModel.transitionTo,
            Q0 = this.Zh.backGroundController;
          this.ua = false, M.slotHandler.playShiftSlotEffect(W, false, function () {
            switch (E) {
              case q.TransitionState.RESPIN:
              case q.TransitionState.FREE_SPIN_RESPIN:
                J && J();
                break;
              case q.TransitionState.NORMAL:
              case q.TransitionState.FREE_SPIN:
                O.delayCallback(0.3)(function () {
                  Q0.stopFastSpinEffect(), J && J();
                });
                break;
              default:
                O.delayCallback(0.3)(function () {
                  J && J();
                });
            }
          });
        }, w.prototype.playSlotItemsShakeEffect = function () {
          var W = this;
          this.wa = O.delayCallback(0.5)(function () {
            {
              W.wa = undefined, W.la = true, W.getSlotItems().forEach(function (D) {
                D.playSymbolShake();
              });
            }
          });
        }, w.prototype.stopSlotItemsShakeEffect = function (W) {
          var D = this;
          if (this.wa) {
            var J = this.wa;
            this.wa = undefined, this.la = false, J && J(), W && W();
          } else if (this.la) {
            var E = this.getSlotItems();
            E.forEach(function (Q0, Q1) {
              Q0.stopSymbolShake(), Q1 === E.length - 1 && (D.la = false, W && W());
            });
          } else W && W();
        }, w.prototype.getAllSlotItemPosition = function () {
          {
            return M.slotHandler.getSlotItemsWorldPosition();
          }
        }, w.prototype.enableDim = function (W) {
          this.enableDimBackground(W.unshift() - 1), this.enableDimScroller(W);
        }, w.prototype.disableDim = function (W, D) {
          {
            this.disableDimBackground(W), this.disableDimScroller(undefined, W), W ? D && D() : O.delayCallback(0.3)(function () {
              {
                D && D();
              }
            });
          }
        }, w.prototype.enableDimBackgroundExcept = function (W) {
          this.Zh.backGroundController.enableFullDarkModeExcept(W);
        }, w.prototype.enableDimBackground = function (W) {
          {
            var D = this.Zh.backGroundController;
            undefined !== W ? D.enableDarkReel(W) : D.enableFullDarkMode();
          }
        }, w.prototype.disableDimBackground = function (W) {
          this.Zh.backGroundController.disableDarkMode(W);
        }, w.prototype.enableDimScroller = function (W) {
          {
            M.slotHandler.enableDimLight(W);
          }
        }, w.prototype.disableDimScroller = function (W, D) {
          M.slotHandler.disableDimLight(W, D);
        }, w.prototype.enableDimSlotItems = function (W) {
          this.getSlotItems(W).forEach(function (D) {
            D.enableDimLight(false);
          });
        }, w.prototype.enableDimExcludeScatter = function () {
          for (var W = this.getSlotItems(), D = 0; D < W.length; D++) {
            var J = W[D];
            J.symbolIndex !== q.SLOT_SYMBOLS.SCATTER && J.enableDimLight(false);
          }
        }, w.prototype.isIgnorableSlotItem = function (W) {
          return M.slotHandler.isIgnorableSlotItem(W);
        }, w.prototype.isIgnorableSlotIndex = function (W) {
          return M.slotHandler.isIgnorableSlotIndex(W);
        }, w.prototype.reloadData = function () {
          {
            var W = N.mjDataSource.transactionModel;
            M.slotHandler.reloadData(W);
          }
        }, w.prototype.setClickEffectController = function (W) {
          this.Ba = W;
        }, w.prototype.show = function () {
          {
            this.node.active = true;
          }
        }, w.prototype.hide = function () {
          this.node.active = false;
        }, w.prototype.getStopStyle = function () {
          return this.aa.getStopStyle();
        }, w.prototype.manualStartScroll = function () {
          M.slotHandler.slotHelper.startScroll();
        }, w.prototype.manualStopScroll = function () {
          M.slotHandler.slotHelper.stopScroll();
        }, w.prototype.blurScroll = function (W) {
          M.slotHandler.slotHelper.setItemsBlur(true, W);
        }, w.prototype.unBlurScroll = function (W) {
          M.slotHandler.slotHelper.setItemsBlur(false, W);
        }, w.prototype.spin = function (W) {
          var D = this.isFreeSpinTurboMode() ? Y.featureConfig.regularSpinningTime / M.TURBO_MODE_SPEED_FACTOR : Y.featureConfig.minimumSpinningTime;
          this.aa.spin(D, Y.featureConfig.regularSpinningTime), W ? this.markFastStop() : M.slotHandler.setFastStop(false), M.slotHandler.spin(Y.featureConfig, W), this.Aa(), this.ua = false, this.fa = [0, 0, 0, 0, 0], K.playAudio(x.GENERAL_AUDIO.reelLoop.key, true);
        }, w.prototype.stopSpin = function () {
          {
            this.getStopStyle() === T.StopStyle.NORMAL && this.aa.stop(M.slotHandler.stopSpin.bind(M.slotHandler));
          }
        }, w.prototype.fastStop = function () {
          var W = this;
          this.isFastSpinStarted() ? this.disableDim(true, function () {
            K.setAudioVolume(x.GENERAL_AUDIO.fastspinStart.key, 0), K.stopAudio(x.GENERAL_AUDIO.fastspinStart.key), W.Zh.scatterFastSpinController.stop(), M.slotHandler.setFastStop(), W.aa.fastStop(M.slotHandler.instantStopScroll.bind(M.slotHandler));
          }) : (M.slotHandler.setFastStop(), this.aa.fastStop(M.slotHandler.instantStopScroll.bind(M.slotHandler)));
        }, w.prototype.markFastStop = function () {
          M.slotHandler.setFastStop(), this.aa.markFastStop();
        }, w.prototype.unmarkFastStop = function () {
          {
            M.slotHandler.setFastStop(false), this.aa.unmarkFastStop();
          }
        }, w.prototype.setReelData = function (W, D) {
          M.slotHandler.setReelData(W, D);
        }, w.prototype.getFormattedData = function (W) {
          M.slotHandler.getFormattedData(W);
        }, w.prototype.isValidSlotItem = function (W) {
          {
            return W % M.NUMBER_OF_ROW != 0 && (W + 1) % M.NUMBER_OF_ROW != 0 && 5 !== W && 33 !== W;
          }
        }, w.prototype.getConvertedReelData = function (W) {
          var D = this,
            J = 0,
            E = [];
          return W.forEach(function (Q0, Q1) {
            D.isValidSlotItem(Q1) && (E[J] = Q0, J++);
          }), E;
        }, w.prototype.setSlotItemsVisible = function (W, D) {
          M.slotHandler.setSlotItemsVisible(W, D);
        }, w.prototype.getSlotItems = function (W) {
          {
            return M.slotHandler.getSlotItemByIndices(W);
          }
        }, w.prototype.Sa = function (W) {
          var D = this,
            E = function (Q1) {
              {
                D.playDimEffect(J, Q1);
              }
            },
            Q0 = function (Q1) {
              D.playScatterEffect(J, Q1);
            };
          O.deferCallback(this, true)(function () {
            O.spawnCallback(E, Q0)(function () {
              D._a && D._a(J);
            });
          });
        }, w.prototype.playDimEffect = function (W, D) {
          var J = W + 1 > M.NUMBER_OF_COLUMN - 1 ? undefined : W + 1;
          if (!M.slotHandler.getFastStop() && J && M.slotHandler.isFastSpinScroller(J)) {
            {
              for (var E = [], Q0 = 0; Q0 < J; Q0++) E.push(Q0);
              this.enableDim(E);
            }
          }
          D && D();
        }, w.prototype.playNewDropScatterEffect = function (W) {
          for (var D = this.getSlotItems(), J = this.isFastSpin(), E = this.fa.slice(0, this.fa.length), Q0 = 1, Q1 = function () {
              --Q0 || W && W();
            }, Q2 = D.length - 1; Q2 >= 0; Q2--) {
            {
              var Q3 = D[Q2];
              this.isIgnorableSlotItem(Q3) || Q3.symbolIndex !== q.SLOT_SYMBOLS.SCATTER || E[Q3.slotViewIndex]-- || (Q0++, Q3.playScatterEffect(Q1, J), this.fa[Q3.slotViewIndex] += 1, this.ua || (K.playAudio(x.GENERAL_AUDIO.symbolScatter.key), this.ua = true));
            }
          }
          Q1();
        }, w.prototype.playScatterEffect = function (W, D) {
          for (var J = this.getSlotItems(), E = this.isFastSpin(), Q0 = M.slotHandler.getFastStop(), Q1 = this.fa.slice(0, this.fa.length), Q2 = 1, Q3 = function () {
              {
                --Q2 || D && D();
              }
            }, Q4 = J.length - 1; Q4 >= 0; Q4--) {
            {
              var Q5 = J[Q4];
              this.isIgnorableSlotItem(Q5) || Q5.slotViewIndex !== W || Q5.symbolIndex !== q.SLOT_SYMBOLS.SCATTER || Q1[W]-- || (Q2++, Q5.playScatterEffect(Q3, E), this.fa[W] += 1, this.ua || (K.playAudio(x.GENERAL_AUDIO.symbolScatter.key), this.ua = true));
            }
          }
          Q0 || (this.ua = false), Q3();
        }, w.prototype.playAllScatterEffect = function (W, D, J) {
          var E = this;
          undefined === J && (J = false);
          var Q0 = 1,
            Q1 = this.getSlotItems(),
            Q2 = function () {
              {
                --Q0 || W && W();
              }
            },
            Q3 = N.mjDataSource.transactionModel.winLines;
          D ? J ? K.playAudio(x.GENERAL_AUDIO.symbolScatter.key) : (K.playAudio(x.GENERAL_AUDIO.fastspinSuccess.key), K.playVocal(x.VOX.maJiangHuLe.key)) : !Q3 && this.isFastSpin() && (J || (K.playAudio(x.GENERAL_AUDIO.fastspinSuccess.key), K.playVocal(x.VOX.maJiangHuLe.key))), Q1.forEach(function (Q4) {
            {
              E.isIgnorableSlotItem(Q4) || Q4.symbolIndex !== q.SLOT_SYMBOLS.SCATTER || (Q0++, D || !Q3 && E.isFastSpin() ? Q4.playScatterEffect(Q2, false) : Q4.idleScatterEffect(Q2));
            }
          }), Q2();
        }, w.prototype.isFastSpin = function () {
          {
            return M.slotHandler.isFastSpin();
          }
        }, w.prototype.isFastSpinStarted = function () {
          return M.slotHandler.isFastSpinStarted();
        }, w.prototype.removeSymbols = function (W) {
          {
            for (var D = this, J = N.mjDataSource.transactionModel, E = J.positionToBeRemove, Q0 = J.originalReels, Q1 = k.getWinPoitionArr(J.winLines), Q2 = k.differentArray(Q1, E), Q3 = [], Q4 = this.getSlotItems(E), Q5 = function (QQ) {
                var QF = Q4[QQ],
                  QR = E[QQ],
                  Qn = Q0[QR];
                Q3.push(function (Qc) {
                  0 === QQ && QF.playNormalSymbolWinAudio(), QF.playRotateEffect(Qn, function () {
                    D.setSlotItemsVisible(false, QR), Qc && Qc();
                  });
                });
              }, Q6 = 0; Q6 < E.length; Q6++) Q5(Q6);
            for (var Q7 = this.getSlotItems(Q2), Q8 = function (QQ) {
                var QF = Q7[QQ],
                  QR = Q2[QQ],
                  Qn = Q0[QR];
                Q3.push(function (Qc) {
                  0 === QQ && K.playAudio(x.GENERAL_AUDIO.symbolWild.key), QF.playRotateEffect(Qn, function () {
                    D.setSlotItemsVisible(true, QR), Qc && Qc();
                  });
                });
              }, Q9 = 0; Q9 < Q2.length; Q9++) Q8(Q9);
            O.delayCallback(0.05)(function () {
              O.spawnCallback(Q3)(W);
            });
          }
        }, w.prototype.pa = function (W) {
          {
            W !== q.TransitionState.RESPIN && W !== q.TransitionState.FREE_SPIN_RESPIN || (this.hasRemovedSymbols = false);
          }
        }, w.prototype.ya = function () {
          {
            for (var W = this.getSlotItems(), D = 0; D < W.length; D++) {
              {
                var J = W[D];
                this.isIgnorableSlotItem(J) || J.symbolIndex !== q.SLOT_SYMBOLS.SCATTER || (this.fa[J.slotViewIndex] += 1);
              }
            }
          }
        }, w.prototype.idleAllScatterEffect = function () {
          {
            this.getSlotItems().forEach(function (W) {
              W.symbolIndex === q.SLOT_SYMBOLS.SCATTER && W.idleScatterEffect();
            });
          }
        }, w.prototype.ga = function () {
          this.aa.stopped();
          var W = this.va;
          this.va = undefined, W && W();
        }, w.prototype.Aa = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.ba, this);
        }, w.prototype.Ha = function () {
          {
            this.node.off(cc.Node.EventType.TOUCH_START, this.ba, this);
          }
        }, w.prototype.ba = function (W) {
          var D = this.Ss;
          this.Ss = undefined, D && (this.Ha(), W && (this.Ba.showClickEffect(W.getLocation()), this.Ba.showFlash()), D());
        }, w.prototype.Ca = function (W) {
          {
            K.setAudioVolume(x.GENERAL_AUDIO.fastspinStart.key, 1), K.playAudio(x.GENERAL_AUDIO.fastspinStart.key), this.Zh.scatterFastSpinController.play(W);
          }
        }, w.prototype.Ma = function (W, D) {
          K.fadeAudio(x.GENERAL_AUDIO.fastspinStart.key, 1, 0, 0.7), K.playAudio(x.GENERAL_AUDIO.fastspinEnd.key), this.Zh.scatterFastSpinController.stop(), O.delayCallback(0.2)(function () {
            D && D();
          });
        }, __decorate([P(cc.Prefab)], w.prototype, "slotItemPrefab", undefined), __decorate([P(cc.Prefab)], w.prototype, "scatterPrefab", undefined), __decorate([X.automationDec({
          'func': Z.symbolDrop
        })], w.prototype, "playShiftSlotEffect", null), __decorate([X.automationDec({
          'func': Z.symbolShake
        })], w.prototype, "playSlotItemsShakeEffect", null), __decorate([X.automationDec({
          'func': Z.symbolBreak
        })], w.prototype, "removeSymbols", null), __decorate([z], w);
      }(cc.Component);
    module.default = G, cc._RF.pop();
  }
}
module.exports = MJSlotController;
