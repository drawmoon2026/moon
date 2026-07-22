// module: SlotHandler
// Cocos 模块函数,参数 (require, module, exports) = (Z, T, M)
function SlotHandler(Z, T, M) {
  'use strict';

  if (!cc._RF.push(T, "ac75aE+OW1CSZAxyWVyAWei", "SlotHandler")) {
    {
      var C = {};
      C.value = true;
      Object.defineProperty(M, "__esModule", C), M.slotHandler = M.TURBO_MODE_SPEED_FACTOR = M.NORMAL_STOP_SCROLL_INTERVAL = M.NORMAL_START_SCROLL_INTERVAL = M.NUMBER_OF_ROW = M.NUMBER_OF_COLUMN = undefined;
      var V = Z("SlotGenerator"),
        N = Z("SlotHelper"),
        q = Z("MJSlotHelper"),
        K = Z("MJDataSource"),
        O = Z("GameUtil"),
        x = Z("MJSlotItem"),
        L = Z("MJSlotItemPool"),
        H = Z("GameConstant"),
        U = Z("ShiftSlotHandler"),
        k = Z("Utils"),
        Y = Z("BounceBackStopScroller"),
        y = Z("SettingMenuHelper");
      M.NUMBER_OF_COLUMN = 5, M.NUMBER_OF_ROW = 7, M.NORMAL_START_SCROLL_INTERVAL = 0.1, M.NORMAL_STOP_SCROLL_INTERVAL = 0.1, M.TURBO_MODE_SPEED_FACTOR = 1.4;
      var z = {};
      z.accelerateDuration = 0.1;
      z.accelerateFactor = 1.68;
      z.accelerateDistance = -300;
      z.bounceDistance = 60;
      z.bounceDuration = 0.1;
      z.bounceFactor = 1;
      var P = {};
      P.accelerateDuration = 0.1 * M.TURBO_MODE_SPEED_FACTOR;
      P.accelerateFactor = 1.68 * M.TURBO_MODE_SPEED_FACTOR;
      P.accelerateDistance = -300 * M.TURBO_MODE_SPEED_FACTOR;
      P.bounceDistance = 60;
      P.bounceDuration = 0.1;
      P.bounceFactor = 1;
      var G = {};
      G.accelerateDuration = 0.24;
      G.accelerateFactor = 2.5;
      G.accelerateDistance = -1000;
      G.bounceDistance = 60;
      G.bounceDuration = 0.1;
      G.bounceFactor = 1;
      var A = {};
      A.endSpeed = -3550;
      A.bounceDistance = 15;
      A.bounceDuration = 0.15;
      A.bounceFactor = 1.7;
      var w = {};
      w.endSpeed = -500;
      w.bounceDistance = -30;
      w.bounceDuration = 0.2;
      w.bounceFactor = 2;
      var W = Object.freeze(z),
        D = Object.freeze(P),
        J = Object.freeze(G),
        E = Object.freeze(A),
        Q0 = Object.freeze(w),
        Q1 = new (function () {
          {
            function Q2() {
              {
                this.Eb = undefined, this.Nb = undefined, this.Gb = undefined, this.kb = undefined, this.Ca = undefined, this.Ma = undefined, this.Rb = undefined, this.jb = undefined, this.Lb = false, this.Pb = false, this.Db = true, this.Ub = false, this.xb = undefined, this.Fb = [0, 0, 0, 0, 0], this.Wb = false, this.Jb = undefined;
              }
            }
            return Object.defineProperty(Q2.prototype, "onReelStart", {
              'set': function (Q3) {
                this.Gb = Q3;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(Q2.prototype, "onReelStop", {
              'set': function (Q3) {
                {
                  this.kb = Q3;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(Q2.prototype, "onScatterEffectStart", {
              'set': function (Q3) {
                this.Ca = Q3;
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(Q2.prototype, "onScatterEffectStop", {
              'set': function (Q3) {
                {
                  this.Ma = Q3;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Q2.prototype.init = function (Q3, Q4, Q5, Q6, Q7, Q8) {
              {
                var Q9 = this,
                  QQ = Q3.originalReels,
                  QF = Q3.specialSymbolsBefore;
                this.Jb = this.Vb.bind(this);
                var QR = {};
                QR.up = 0;
                QR.down = 0;
                QR.left = 80;
                QR.right = 80;
                var Qn = cc.size(Q4.width / M.NUMBER_OF_COLUMN, Q4.height / M.NUMBER_OF_ROW),
                  Qc = V.generateSlot({
                    'containerNode': Q4,
                    'numberOfColumn': M.NUMBER_OF_COLUMN,
                    'maskMargin': QR
                  }),
                  Qj = this.Eb = new q.default(),
                  Qi = K.mjDataSource.transactionModel.transitionTo;
                var QI = {};
                QI.maxSpeed = -5000;
                var Qm = {};
                Qm.maxSpeed = -5000;
                Qj.init({
                  'slotItem': x.default,
                  'slotItemPool': new L.default(),
                  'spinType': Qi,
                  'numberOfColumn': M.NUMBER_OF_COLUMN,
                  'numberOfRow': M.NUMBER_OF_ROW,
                  'topBufferRow': 1,
                  'bottomBufferRow': 1,
                  'sortBottomItemToFront': true,
                  'getSymbolZOrder': this.zb.bind(this),
                  'startScrollerConfig': __assign(__assign({}, W), QI),
                  'stopScrollerConfig': __assign(__assign({}, E), Qm),
                  'reelData': this.Kb(QQ, QF),
                  'symbolSize': Qn,
                  'normalSymbolScale': 1,
                  'blurSymbolScale': 1,
                  'slotViews': Qc.slotViews,
                  'slotScrollerController': Qc.slotScrollerController,
                  'normalSymbolSpriteFrame': Q5,
                  'blurSymbolSpriteFrame': Q6,
                  'getRandomSymbol': this.qb.bind(this),
                  'runScroller': this.Qb.bind(this),
                  'stopScroller': Y.default
                }), Q7 && Qj.setOnReelStopCallback(function (Qt) {
                  if (Q7(Qt), !Q9.Lb && Q9.isFastSpin()) {
                    {
                      var QX = function (QZ) {
                        var QT = QZ + 1;
                        QT < M.NUMBER_OF_COLUMN && Q9.isFastSpinScroller(QT) && (Q9.Rb && Q9.Rb(QT), Q9.Ub = true, Q9.xb = QT);
                      };
                      Q9.isFastSpinScroller(QB) ? Q9.Ma && Q9.Ma(QB, function () {
                        QX(QB);
                      }) : QX(QB);
                    }
                  }
                }), Q8 && Qj.setOnSlotStopCallback(function () {
                  Q8(), Q9.Ub = false, Q9.xb = undefined;
                }), (this.Nb = new U.default()).init({
                  'slotItemHolder': Qc.slotScrollerController.node,
                  'slotViews': Qc.slotViews,
                  'slotItemPool': Qj.slotItemPool,
                  'numberOfRow': M.NUMBER_OF_ROW,
                  'symbolSize': Qn,
                  'symbolSpawnSpacing': Qn.height,
                  'columnDropInterval': 0.1,
                  'slowDropDelay': 0.5,
                  'columnSlowDropInterval': 0.5,
                  'acceleration': 10000,
                  'accelerationFactor': 2.5,
                  'bounceDistance': 30,
                  'bounceDistanceFactor': 0,
                  'bounceDuraion': 0.15,
                  'bounceFactor': 1.7
                });
              }
            }, Object.defineProperty(Q2.prototype, "slotHelper", {
              'get': function () {
                return this.Eb;
              },
              'enumerable': false,
              'configurable': true
            }), Q2.prototype.isTurboMode = function () {
              return y.settingMenuHelper.turboSpinOn && !this.isFreeSpin();
            }, Q2.prototype.isFreeSpinTurboMode = function () {
              {
                return y.settingMenuHelper.turboSpinOn && this.isFreeSpin();
              }
            }, Q2.prototype.isFreeSpin = function () {
              {
                var Q3 = K.mjDataSource.transactionModel.transitionFrom === H.TransitionState.FREE_SPIN,
                  Q4 = K.mjDataSource.transactionModel.transitionFrom === H.TransitionState.FREE_SPIN_RESPIN;
                return Q3 || Q4;
              }
            }, Q2.prototype.playShiftSlotEffect = function (Q3, Q4, Q5) {
              var Q6 = this.Yb(Q3);
              this.Nb.reset(), this.Nb.playEffect(Q6, Q4, Q5);
            }, Q2.prototype.reloadData = function (Q3, Q4) {
              {
                undefined === Q4 && (Q4 = false);
                var Q5 = Q3.originalReels,
                  Q6 = Q3.reels,
                  Q7 = Q3.specialSymbolsBefore,
                  Q8 = Q3.specialSymbols,
                  Q9 = this.Eb;
                this.Jb(Q4 ? Q6 : Q5, Q4 ? Q8 : Q7), this.Nb.releaseAllSlotItem(), Q9.reloadSlot();
              }
            }, Q2.prototype.spin = function (Q3, Q4) {
              undefined === Q4 && (Q4 = false);
              var Q5 = this.Eb,
                Q6 = K.mjDataSource.transactionModel.transitionTo;
              this.jb = Date.now(), this.Db = true, this.Pb = Q4;
              var Q7 = -5000;
              this.isTurboMode() ? (Q7 *= 1.67, Q8 = J) : this.isFreeSpinTurboMode() && (Q7 *= M.TURBO_MODE_SPEED_FACTOR, Q8 = D);
              var Q9 = {};
              Q9.maxSpeed = Q7;
              var QQ = {};
              QQ.maxSpeed = Q7;
              for (var QF = 0; QF < M.NUMBER_OF_COLUMN; QF++) Q5.setStartScrollerConfig(QF, __assign(Q9, Q8)), Q5.setStopScrollerConfig(QF, QQ);
              Q5.setSpinType(Q6), Q5.startScroll();
            }, Q2.prototype.stopSpin = function () {
              {
                this.Eb.stopScroll();
              }
            }, Q2.prototype.instantStopScroll = function () {
              {
                var Q3 = this;
                if (this.Db) {
                  this.Db = false;
                  var Q4 = this.Eb,
                    Q5 = function () {
                      {
                        Q4.instantStopScroll(), Q3.reloadData(K.mjDataSource.transactionModel);
                      }
                    };
                  if (Q4.getSlotState() === N.SlotState.START) {
                    {
                      var Q6,
                        Q7 = (Date.now() - this.jb) / 1000;
                      if (Q6 = y.settingMenuHelper.turboSpinOn ? 0 - Q7 : 0.7 - Q7) return void k.delayCallback(Q6)(Q5);
                    }
                  }
                  Q5();
                }
              }
            }, Q2.prototype.setReelData = function (Q3, Q4) {
              this.Jb(Q3, Q4);
            }, Q2.prototype.setResult = function (Q3) {
              {
                var Q4 = Q3.originalReels,
                  Q5 = Q3.specialSymbolsBefore;
                this.Jb(Q4, Q5);
              }
            }, Q2.prototype.setFastStop = function (Q3) {
              {
                undefined === Q3 && (Q3 = true), this.Lb = Q3;
              }
            }, Q2.prototype.getFastStop = function () {
              return this.Lb;
            }, Q2.prototype.changeSymbol = function (Q3, Q4) {
              this.Eb.changeSymbol(Q3, Q4);
            }, Q2.prototype.getSlotItemsWorldPosition = function () {
              {
                for (var Q3, Q4 = [], Q5 = 0; Q5 < arguments.length; Q5++) Q4[Q5] = arguments[Q5];
                return (Q3 = this.Eb).getItemsWorldPositionAR.apply(Q3, __spread(Q4));
              }
            }, Q2.prototype.getFormattedData = function (Q3) {
              {
                return this.Eb.getFormattedData(Q3);
              }
            }, Q2.prototype.setSlotItemsVisible = function (Q3) {
              for (var Q4, Q5 = [], Q6 = 1; Q6 < arguments.length; Q6++) Q5[Q6 - 1] = arguments[Q6];
              return (Q4 = this.Eb).setItemsVisible.apply(Q4, __spread([Q3], Q5));
            }, Q2.prototype.getSlotItemByIndices = function (Q3) {
              var Q4;
              return Q3 || (Q3 = []), (Q4 = this.Eb.slotItemHandler).getSlotItems.apply(Q4, __spread(Q3));
            }, Q2.prototype.isIgnorableSlotItem = function (Q3) {
              {
                var Q4 = Q3.positionIndex,
                  Q5 = Q3.slotViewIndex;
                return 0 === Q4 || Q4 === M.NUMBER_OF_ROW - 1 || (0 === Q5 || Q5 === M.NUMBER_OF_COLUMN - 1) && 1 === Q4;
              }
            }, Q2.prototype.isIgnorableSlotIndex = function (Q3) {
              {
                return Q3 % M.NUMBER_OF_ROW == 0 || (Q3 + 1) % M.NUMBER_OF_ROW == 0 || 5 === Q3 || 33 === Q3;
              }
            }, Q2.prototype.showAllSymbolBase = function () {
              this.getSlotItemByIndices().forEach(function (Q3) {
                Q3.showBackground();
              });
            }, Q2.prototype.isFastSpin = function () {
              return K.mjDataSource.transactionModel.scatterCount >= 2;
            }, Q2.prototype.isFastSpinScroller = function (Q3) {
              for (var Q4 = K.mjDataSource.transactionModel.reels, Q5 = 0, Q6 = 0; Q6 < Q4.length; Q6++) {
                {
                  var Q7 = Math.floor(Q6 / M.NUMBER_OF_ROW);
                  if (this.isIgnorableSlotIndex(Q6) || Q4[Q6] !== H.SLOT_SYMBOLS.SCATTER || Q5++, Q5 >= 2) return Q3 > Q7;
                }
              }
              return false;
            }, Q2.prototype.isFastSpinStarted = function () {
              return this.Ub;
            }, Q2.prototype.getFastSpinReelIndex = function () {
              {
                return this.xb;
              }
            }, Q2.prototype.enableDimLight = function (Q3) {
              var Q4 = this.isFastSpin(),
                Q5 = this.getSlotItemByIndices();
              Q3 ? Q5.forEach(function (Q6) {
                {
                  -1 !== Q3.indexOf(Q6.slotViewIndex) && Q6.enableDimLight(Q4);
                }
              }) : Q5.forEach(function (Q6) {
                Q6.enableDimLight(Q4);
              });
            }, Q2.prototype.disableDimLight = function (Q3, Q4) {
              var Q5 = this.getSlotItemByIndices();
              Q3 ? Q5.forEach(function (Q6) {
                -1 !== Q3.indexOf(Q6.slotViewIndex) && Q6.disableDimLight(Q4);
              }) : Q5.forEach(function (Q6) {
                {
                  Q6.disableDimLight(Q4);
                }
              });
            }, Q2.prototype.setForceGoldBlock = function (Q3) {
              {
                this.Wb = Q3;
              }
            }, Q2.prototype.qb = function (Q3, Q4, Q5, Q6, Q7) {
              var Q8 = undefined;
              if (Q7 || this.Fb[Q3] < 3 * M.NUMBER_OF_ROW) {
                this.Fb[Q3]++, Q8 = k.randomInt(2, 10);
                var Q9 = Q3 > 0 && Q3 < M.NUMBER_OF_COLUMN - 1,
                  QQ = Q3 === Math.floor(M.NUMBER_OF_COLUMN / 2) && this.Wb;
                Q8 += Q9 && Math.random() > 0.85 || QQ ? H.BLOCK_TYPE.GOLD : H.BLOCK_TYPE.NORMAL;
              } else (Q8 = k.randomInt(1, 10)) === H.SLOT_SYMBOLS.SCATTER ? this.Fb[Q3] = 0 : (Q9 = Q3 > 0 && Q3 < M.NUMBER_OF_COLUMN - 1, QQ = Q3 === Math.floor(M.NUMBER_OF_COLUMN / 2) && this.Wb, Q8 += Q9 && Math.random() > 0.85 || QQ ? H.BLOCK_TYPE.GOLD : H.BLOCK_TYPE.NORMAL);
              return Q8;
            }, Q2.prototype.zb = function () {
              return 1;
            }, Q2.prototype.Qb = function (Q3, Q4) {
              return Q3 === N.SlotState.START ? this.Zb(Q4) : Q3 === N.SlotState.STOP ? this.Xb(Q4) : undefined;
            }, Q2.prototype.Zb = function (Q3) {
              var Q4 = this.Gb;
              if (!this.Pb) {
                {
                  var Q5 = 0,
                    Q6 = O.scheduleIterator(function (Q8, Q9) {
                      Q3(Q8), Q4 && Q4(Q8), Q5++, Q9();
                    }, M.NORMAL_START_SCROLL_INTERVAL, M.NUMBER_OF_COLUMN);
                  return function () {
                    {
                      Q6();
                      for (; Q8 < M.NUMBER_OF_COLUMN; Q8++) Q4 && Q4(Q8);
                    }
                  };
                }
              }
              for (var Q7 = 0; Q7 < M.NUMBER_OF_COLUMN; Q7++) Q3(Q7), Q4 && Q4(Q7);
            }, Q2.prototype.Xb = function (Q3) {
              {
                var Q4 = this;
                if (this.Lb) return this.Rb = undefined, void (this.Db && this.instantStopScroll());
                this.Rb = function (Q7) {
                  {
                    var Q8 = Q4.Eb.scrollerAtIndex(Q7);
                    Q8 && Q8.changeIdleSpeed && Q8.updateRunTimeConfig && (Q8.changeIdleSpeed(1.5, -1000), Q8.updateRunTimeConfig(Q0), Q4.Ca && Q4.Ca(Q7), k.delayCallback(1.5)(function () {
                      Q3(Q7);
                    }));
                  }
                };
                var Q5 = M.NUMBER_OF_COLUMN;
                if (this.isFastSpin()) for (var Q6 = 0; Q6 < M.NUMBER_OF_COLUMN; Q6++) if (Q6 >= 2 && this.isFastSpinScroller(Q6)) {
                  {
                    Q5 = Q6;
                    break;
                  }
                }
                return O.scheduleIterator(function (Q7, Q8) {
                  {
                    Q3(Q7), Q8();
                  }
                }, M.NORMAL_STOP_SCROLL_INTERVAL, Q5);
              }
            }, Q2.prototype.Kb = function (Q3, Q4) {
              var Q5 = [],
                Q6 = Q4 ? Object.keys(Q4) : [];
              Q3.forEach(function (QQ) {
                {
                  Q5.push(QQ + H.BLOCK_TYPE.NORMAL);
                }
              });
              for (var Q7 = 0; Q7 < Q6.length; Q7++) {
                var Q8 = Q4[Q6[Q7]],
                  Q9 = Q5[Q8] % 100;
                Q5[Q8] = Q9 + H.BLOCK_TYPE.GOLD;
              }
              return Q5;
            }, Q2.prototype.Yb = function (Q3) {
              for (var Q4 = [[], [], [], [], []], Q5 = Q3.reelNextSymbol, Q6 = Q3.reelNextSpecialSymbol, Q7 = 0; Q7 < Q5.length; Q7++) for (var Q8 = Q5[Q7], Q9 = 0; Q9 < Q8.length; Q9++) Q6[Q7].indexOf(Q9) >= 0 ? Q4[Q7].push(Q8[Q9] + H.BLOCK_TYPE.GOLD) : Q4[Q7].push(Q8[Q9] + H.BLOCK_TYPE.NORMAL);
              return Q4;
            }, Q2.prototype.Vb = function (Q3, Q4) {
              var Q5 = this.Kb(Q3, Q4);
              this.Eb.setReelData(Q5);
            }, Q2;
          }
        }())();
      M.slotHandler = Q1, cc._RF.pop();
    }
  }
}
module.exports = SlotHandler;
