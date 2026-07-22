// module: SettingMenuHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SettingMenuHelper(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "35d29M3VudMFqjm4gRoo2G6", "SettingMenuHelper")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x), exports.BackButtonType = exports.settingMenuHelper = exports.SettingMenuType = exports.UIAudioIndex = exports.ButtonPrefabType = undefined;
      var C,
        H,
        V,
        M,
        q = require("Utils"),
        D = require("SettingMenuButtonHelper"),
        W = require("Preference"),
        k = require("BVFramework"),
        z = require("SettingInfoFooterController"),
        L = require("UIAudioHelper"),
        U = require("GameEventHandler"),
        Q = System.get("slot-menu"),
        w = cc._decorator.ccclass,
        P = W.getPreference("setting_menu");
      P.defineItem("soundOn", true), function (X) {
        X[X.SPIN_OPTIONS = 2] = "SPIN_OPTIONS", X[X.BET_OPTIONS = 3] = "BET_OPTIONS", X[X.MINUS_BET = 4] = "MINUS_BET", X[X.PLUS_BET = 5] = "PLUS_BET", X[X.WIN = 6] = "WIN", X[X.TURBO_SPIN = 7] = "TURBO_SPIN", X[X.WALLET = 8] = "WALLET", X[X.MORE_MENU = 9] = "MORE_MENU", X[X.SOUND = 10] = "SOUND";
      }(C = exports.ButtonPrefabType || (exports.ButtonPrefabType = {})), function (X) {
        {
          X[X.BACK_OR_CLOSE = 0] = "BACK_OR_CLOSE", X[X.BUTTON_CLICK = 1] = "BUTTON_CLICK", X[X.LIST_ITEN_CLICK = 2] = "LIST_ITEN_CLICK", X[X.SLIDER_EFFECT = 3] = "SLIDER_EFFECT", X[X.WALLET_COUNTING_ABOVE = 4] = "WALLET_COUNTING_ABOVE";
        }
      }(H = exports.UIAudioIndex || (exports.UIAudioIndex = {})), function (X) {
        X[X.HIDDEN = 0] = "HIDDEN", X[X.NORMAL_BACK_FUNC = 1] = "NORMAL_BACK_FUNC";
      }(V || (V = {})), exports.BackButtonType = V, function (X) {
        {
          X[X.NEW = 1] = "NEW";
        }
      }(M = exports.SettingMenuType || (exports.SettingMenuType = {}));
      var R = new (function (X) {
        {
          function E() {
            var F = X.call(this) || this;
            return F.soundOn = P.soundOn, F.turboSpinOn = false, F.isFreeGameMode = false, F.Td = false, F.Hd = true, F.Rd = V.HIDDEN, F.kd = '', F.Ld = 0, F.Ed = [], F.jd = [], F.rt = 0, F.ht = 0, F.Dd = '', F.Ud = 0, F.balanceAmountLessThan = 0, F.autoSpinCount = 0, F.balanceAmountMoreThan = 0, F.singleWinAmount = 0, F.Wd = false, F.Fd = false, F.xd = false, F.Vd = new D.default(), F.Md = k.getGameContext(), F.zd = false, F.Kd(), F.qd(), F.Md.on("Game.Initialized", F.Jd.bind(F)), F.Md.on("SettingMenu.SetWalletType", function (N) {
              var Z = N.payload;
              F.Yd(Z.type, Z.data);
            }), F.Md.on("SettingMenu.UpdateRollOverBalance", function (N) {
              var Z = N.payload;
              F.Qd(Z.data, true);
            }), F.Md.on("SettingMenu.UpdateFreeSpinCount", function (N) {
              var Z = N.payload;
              F.Xd(Z.data);
            }), F.Md.on("SettingMenu.SetWallatNavigateIcon", function (N) {
              {
                var Z = N.payload;
                F.settingInfoFooter.setWalletNavigateIcon(Z);
              }
            }), F.Md.on("Game.HasNewWallet", function (N) {
              {
                var Z = undefined === N.payload || N.payload;
                F.settingInfoFooter.activateWalletNotify(Z);
              }
            }), F.Md.on("Game.PlayUIClickSound", function (N) {
              1 === N.payload && F.playMenuIconPressSound();
            }), F;
          }
          return __extends(E, X), E.prototype.isEnableVRF = function () {
            {
              return 1 == +shell.environment.getURLSearchParam().get("type") && (shell.environment.getEIF() >> 24 & 16777215 & shell.environment.getEIF()) >= 1;
            }
          }, E.prototype.Yd = function (F, N) {
            switch (this.settingInfoFooter.showCustomInfoFooter(F), F) {
              case z.WALLET_FOOTER_TYPE.CASH:
                this.Zd(), this.settingInfoFooter.setFreeGameTick(false), this.setFreeGameMode(false);
                break;
              case z.WALLET_FOOTER_TYPE.FREE_GAME:
                this.Xd(N), this.setFreeGameMode(true), this.settingInfoFooter.setLeftSpecialInfoLayout(Y);
                break;
              case z.WALLET_FOOTER_TYPE.BONUS:
                this.Qd(N, false), this.settingInfoFooter.setBonusWalletIcon(false), this.settingInfoFooter.setFreeGameTick(false), this.setFreeGameMode(false);
            }
          }, E.prototype.Xd = function (F) {
            var N,
              Z = F.tg,
              g = F.tg - F.gc,
              A = shell.I18n.t("Wallet.Games");
            N = 0 === g ? q.formatGroup(Z) + " <color=#D2C3BD>" + A + "</color>" : g === Z ? q.formatGroup(Z) + '/' + q.formatGroup(Z) : q.formatGroup(g) + '/' + q.formatGroup(Z) + " <color=#D2C3BD>" + A + "</color>", this.settingInfoFooter.setleftSpecialInfoLabel(N), this.settingInfoFooter.setFreeGameTick(g === Z);
          }, E.prototype.Qd = function (F) {
            var N = F.ibra,
              Z = F.bra,
              g = 0 !== F.ba ? F.ba : F.ca,
              A = F.mca,
              G = N - Z,
              J = '/' + q.formatCurrency(N, '', '');
            this.settingInfoFooter.setRolloverSymbol(''), this.settingInfoFooter.setRolloverBaseUnit(''), this.settingInfoFooter.setRightSpecialInfoText(J), this.settingInfoFooter.updateRollOverBalance(g, A), this.settingInfoFooter.updateOnGoingRollOverBalance(G), this.settingInfoFooter.updateRolloverProgressBar(G, N);
          }, E.prototype.Zd = function () {}, Object.defineProperty(E.prototype, "path", {
            'get': function () {
              return this.kd;
            },
            'set': function (F) {
              this.kd = F;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.setSettingMenuController = function (F) {
            {
              this.$d = F;
            }
          }, Object.defineProperty(E.prototype, "settingMenuController", {
            'get': function () {
              if (!this.$d) throw Error("SettingMenuHelper :: settingMenuController : Cannot find settingMenuController. Please setup using setSettingMenuController first!");
              return this.$d;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.initAudio = function (F) {
            this.tv(F);
          }, E.prototype.loadAudio = function (F) {
            L.loadAudio(F);
          }, E.prototype.setButtonPrefab = function (F, N, Z) {
            {
              undefined === Z && (Z = false), this.Vd.setButtonPrefab(F, N, Z);
            }
          }, Object.defineProperty(E.prototype, "historyButtonLocaleIcon", {
            'get': function () {
              if (!this.iv) throw Error("SettingMenuHelper :: historyButtonLocaleIcon : Cannot find historyButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
              return this.iv;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "autoSpinButtonLocaleIcon", {
            'get': function () {
              {
                if (this.sv("autoSpinButtonLocaleIcon"), !this.ev) throw Error("SettingMenuHelper :: autoSpinButtonLocaleIcon : Cannot find autoSpinButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
                return this.ev;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "settingInfoFooterLocaleAtlas", {
            'get': function () {
              if (this.sv("settingInfoFooterAtlas"), !this.nv) throw Error("SettingMenuHelper :: settingInfoFooterAtlas : Cannot find settingInfoFooterAtlas. Please setup using settingMenuLocaleIcons setter first!");
              return this.nv;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "turboOnButtonLocaleIcon", {
            'get': function () {
              if (this.sv("turboOnButtonLocaleIcon"), !this.ov) throw Error("SettingMenuHelper :: turboOnButtonLocaleIcon : Cannot find turboOnButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
              return this.ov;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "turboOffButtonLocaleIcon", {
            'get': function () {
              if (this.sv("turboOffButtonLocaleIcon"), !this.cv) throw Error("SettingMenuHelper :: turboOffButtonLocaleIcon : Cannot find turboOffButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
              return this.cv;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.sv = function () {}, Object.defineProperty(E.prototype, "settingMenuLocaleIcons", {
            'set': function (F) {
              {
                this.nv = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.hv = function () {
            var F = this,
              N = this.settingMenuController,
              Z = this.Vd.setupSettingMenuButtonInList(C.TURBO_SPIN, function () {
                F.setTurboSpinButtonState(!F.turboSpinOn), F.turboSpinOn ? F.playMenuIconPressSound() : F.playCloseBtnPressSound();
              });
            Z.getTurboSpinCallback = function () {
              return this.turboSpinOn;
            }.bind(this), Z.setButtonOnColor("setting", "white_button_transition_a"), Z.setButtonOffColor("setting", "white_button_transition_a"), Z.sprite.spriteFrame = Z.turboSpinOn, Z.spriteEffect.spriteFrame = Z.turboSpinEffectOn, Z.changeButtonColor(true), Z.changeSpriteEffectColor();
            var g = this;
            this.rv = function () {
              this.stopTurboLighting(), g.turboSpinOn ? this.playTurboLighting() : (this.sprite.spriteFrame = this.turboSpinOff, this.spriteEffect.spriteFrame = Z.turboSpinEffectOff), this.changeButtonColor(true), N.showSettingTurboToast(g.turboSpinOn ? shell.I18n.t("SettingMenu.TurboSpinEnable") : shell.I18n.t("SettingMenu.TurboSpinDisable"), g.turboSpinOn, 2), g.sendEventToGoogleAnalytic(g.turboSpinOn);
            }.bind(Z), this.av = q.observeCallback(this, "turboSpinOn")(this.rv), N.addMenuItem(Z.node), this.Md.on("Game.OnTurboSpin", function () {
              F.setTurboSpinButtonState(true);
            }), this.Md.on("Game.OffTurboSpin", function () {
              F.setTurboSpinButtonState(false);
            });
          }, E.prototype.setTurboSpinButtonState = function (F) {
            this.turboSpinOn = F, this.Md.emit("Game.TurboSpinStateChanged", this.turboSpinOn);
          }, E.prototype.sendEventToGoogleAnalytic = function (F) {
            {
              var N = {};
              N.name = "Turbo Spin";
              N.index = F;
              cc.sys.isBrowser && shell.ga.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_CHANGE_SETTING, N);
            }
          }, E.prototype.setupSettingMenuButtons = function () {
            {
              var F,
                N = this,
                Z = this.settingMenuController,
                g = this.Vd,
                A = this;
              this.Cf ? this.hv() : function () {
                var G = g.setupSettingMenuButtonInList(C.SOUND, function () {
                  N.uv();
                });
                Z.addMenuItem(G.node), N.lv = function () {
                  this.updateSprite(A.soundOn);
                }.bind(G), N.Hd || (N.soundEnable = N.Hd, N.setLockAccess(C.SOUND, true)), N.lv(), N.fv = q.observeCallback(N, "soundOn")(N.lv);
              }(), (F = this.dv = g.setupSettingMenuButtonInList(C.MINUS_BET, this.decreaseBet.bind(this))).setShowSettingToastCallback(Z.showSettingToast.bind(Z)), F.setHideSettingToastCallback(Z.hideSettingToast.bind(Z)), Z.addMenuItem(F.node), (F = this.vv = g.setupSettingMenuButtonInList(C.PLUS_BET, this.increaseBet.bind(this))).setShowSettingToastCallback(Z.showSettingToast.bind(Z)), F.setHideSettingToastCallback(Z.hideSettingToast.bind(Z)), Z.addMenuItem(F.node), F = 0 !== this._v ? this.pv = g.setupSettingMenuButtonInList(C.SPIN_OPTIONS, this.bv.bind(this), true) : this.pv = g.setupSettingMenuButtonInList(C.MORE_MENU, this.mv.bind(this), true), Z.addMenuItem(F.node), this.Sv(), this.Md.emit("Wallet.SetupWalletType");
            }
          }, E.prototype.Sv = function () {
            for (var F = this.settingMenuController.buttonsHolder(), N = this.Vd.totalButtonsOccupied(), Z = F.length - N, g = F.length - 1; g >= 0 && !(Z <= 0); g--) F[g].active = false, Z--;
          }, E.prototype.setFeatureBuyToastNodePosition = function (F, N, Z) {
            this.settingMenuController.setFeatureBuyToastNodePosition(F, N, Z);
          }, Object.defineProperty(E.prototype, "backButtonType", {
            'get': function () {
              return this.Rd;
            },
            'set': function (F) {
              this.Rd = F;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.mv = function () {
            {
              this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openMoreMenu();
            }
          }, E.prototype.bv = function () {
            this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openAutoSpinMenu();
          }, E.prototype.gv = function () {
            {
              this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openBetMenu();
            }
          }, E.prototype.uv = function () {
            this.toggleSound();
          }, E.prototype.Cv = function (F) {
            undefined === F && (F = false), this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openHistoryMenu(F);
          }, E.prototype.yv = function () {
            {
              this.playMenuIconPressSound(), this.openUserProfileMenu();
            }
          }, E.prototype.openAutoSpinMenu = function () {
            this.Mv(), this.Md.emit("SlotMenu.ShowSpinOptions", this.settingInfoFooter.currentWinAmount > 0);
          }, E.prototype.openBetMenu = function () {
            this.Mv(), this.wv(true), this.Md.emit("SlotMenu.ShowBetOptions", this.settingInfoFooter.currentWinAmount > 0);
          }, E.prototype.toggleSound = function () {
            this.soundEnable ? this.playMenuIconPressSound() : this.playCloseBtnPressSound(), this.soundEnable = !this.soundEnable, this.settingInfoFooter.onAudioStateUpdate(this.soundEnable);
            var F = true === this.soundEnable ? "OnGameSound" : "OffGameSound";
            this.Av(F);
          }, E.prototype.openHistoryMenu = function (F) {
            undefined === F && (F = false), this.Md.emit("History.QuickVerify"), this.Mv();
          }, E.prototype.openUserProfileMenu = function () {
            this.Pv();
          }, E.prototype.openMoreMenu = function () {
            {
              this.Bv();
            }
          }, E.prototype.isBalanceHitTargetInAutoSpinMode = function (F, N) {
            {
              var Z = false,
                g = this.singleWinAmount,
                A = this.balanceAmountMoreThan,
                G = this.balanceAmountLessThan,
                J = this.Ud;
              return g && F > g && (Z = true), A && N >= J + A && (Z = true), G && N <= J - G && (Z = true), Z;
            }
          }, E.prototype.stopSpinOptionButtonAnim = function () {
            this.pv && this.pv.stopAutoSpinAnim();
          }, E.prototype.playSpinOptionButtonAnim = function () {
            this.pv && this.pv.playAutoSpinAnim();
          }, Object.defineProperty(E.prototype, "autoSpinCallback", {
            'set': function (F) {
              {
                var N = this;
                this.Ov = function (Z) {
                  {
                    var g = Z.payload;
                    N.autoSpinCount = g.autoSpinCount, N.singleWinAmount = g.singleWinAmount, N.balanceAmountMoreThan = g.balanceAmountMoreThan, N.balanceAmountLessThan = g.balanceAmountLessThan, N.Ud = g.autoSpinStartBalance, N.autoSpinCount > 0 && N.playSpinOptionButtonAnim(), F && F();
                  }
                };
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "turboSpinCallback", {
            'set': function (F) {
              this.Iv && (this.Gv && this.Gv(), this.Iv = undefined), this.Iv = function () {
                {
                  F && F();
                }
              }, this.Gv = q.observeCallback(this, "turboSpinOn")(this.Iv);
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "additionalBetCalculationCallback", {
            'set': function (F) {
              {
                this.Md.emit("SlotMenu.UpdateAdditionalBetCalculation", F), this.Nv = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "audioConfigure", {
            'get': function () {
              return this.Hd;
            },
            'set': function (F) {
              this.Hd = F;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "showChangeBetReminder", {
            'set': function (F) {
              this.Wd = F, this.Md.emit("SlotMenu.SetShowChangeBetReminder", F);
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "showForfeitProgressReminder", {
            'set': function (F) {
              this.Fd = F, this.Md.emit("SlotMenu.SetShowForfeitProgressReminder", F);
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "manualUpdateBetFactorCallBack", {
            'set': function (F) {
              {
                var N = this;
                this.Tv = function (Z, g) {
                  N.checkSelectedValue(q.toDecimalWithExp(Z * g * N.betLineValue, 2)), F(Z, g);
                };
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "finishBetPickCallback", {
            'set': function (F) {
              {
                this.Hv = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "cancelBetPanelCallback", {
            'set': function (F) {
              {
                this.Rv = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.updateBetLabelCallback = function (F) {
            this.kv = F;
          }, E.prototype.updateBetValues = function (F) {
            undefined === F && (F = 0), this.Nv || (this.Nv = function (Z, g, A) {
              return Z * g * A;
            }, this.Md.emit("SlotMenu.UpdateAdditionalBetCalculation", this.Nv)), this.Lv = q.toFixed(this.betLineValue * this.betLevelValue * this.betSizeValue, 2);
            var N = this.Nv(this.betLineValue, this.betLevelValue, this.betSizeValue);
            this.kv && this.kv(N, F), this.Ev({
              'totalBet': q.toDecimalWithExp(N, 2)
            });
          }, E.prototype.jv = function () {
            var F = this.betSizeList,
              N = this.betSizeValue;
            return !(!F || !cc.js.isNumber(N)) && -1 !== F.indexOf(N);
          }, E.prototype.Dv = function () {
            var F = this.betLevelList,
              N = this.betLevelValue;
            return !(!F || !cc.js.isNumber(N)) && -1 !== F.indexOf(N);
          }, E.prototype.reevaluateBet = function () {
            var F = this.betLineValue * this.betLevelValue * this.betSizeValue;
            return !(this.jv() && this.Dv() && !(this.Uv && F < this.Uv && (!this.Wv || F > this.Wv)) || (this.Fv(), this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)), this.xv && this.xv(this.betSizeValue, this.betLevelValue), 0));
          }, Object.defineProperty(E.prototype, "betModifierUpdateCallback", {
            'get': function () {
              {
                return this.Vv;
              }
            },
            'set': function (F) {
              {
                this.Vv = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "reevaluateBetCallback", {
            'set': function (F) {
              this.xv = F;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.Mv = function () {
            var F = this.settingMenuController;
            F.isSettingBetReminderBoardShowed() && (this.Lv = this.zv, this.betSizeValue = this.Kv, this.betLevelValue = this.qv, this.Jv = this.Yv, this.updateBetValues(), this.checkSelectedValue(this.zv), F.hideBetReminderBoard(), this.Qv && this.Qv());
          }, E.prototype.setBetReminderCancelAndConfirmCallback = function (F, N) {
            var Z = this,
              g = this.settingMenuController;
            this.Qv = F ? function () {
              {
                Z.playCloseBtnPressSound(), F();
              }
            } : q.emptyFunc, g.setBetReminderCancelAndConfirmCallback(this.Mv.bind(this), function () {
              Z.playMenuIconPressSound(), Z.Kv !== Z.betSizeValue || Z.qv !== Z.betLevelValue ? (g.hideBetReminderBoard(), N && N(Z.betSizeValue, Z.betLevelValue), Z.Md.emit("SlotMenu.ChangeBet", Z.Lv)) : Z.Mv();
            });
          }, E.prototype.setBetReminderTriggerCallback = function (F) {
            this.Xv = F;
          }, E.prototype.preCalculateCombination = function () {
            {
              var F = this.betSizeList || [],
                N = this.betLevelList || [],
                Z = this.betLineValue || 0;
              if (0 !== F.length && 0 !== N.length && 0 !== Z) {
                var g,
                  A = this.Uv,
                  G = this.Wv,
                  J = [];
                if (this.Zv = undefined, A) {
                  {
                    G && (g = []), l3 = 0;
                    for (var K = F.length; l3 < K; l3++) for (var l0 = 0, l1 = N.length; l0 < l1; l0++) {
                      {
                        var l2 = q.toDecimalWithExp(F[l3] * N[l0] * Z, 2);
                        if (l2 >= A) {
                          this.Zv = l2, J[l3] = N.slice(l0);
                          break;
                        }
                        G && (G < A && l2 <= G || G >= A && l2 < A) && (g[l3] || (g[l3] = []), g[l3].push(N[l0])), l0 === l1 - 1 && (J[l3] = []);
                      }
                    }
                    if (undefined === this.Zv) return this.Zv = q.toFixed(F[0] * N[0] * Z, 2), this.$v = Object.create(null), void (this.$v[this.Zv] = {
                      'betSize': F[0],
                      'betLevel': N[0]
                    });
                  }
                } else for (var l3 = 0; l3 < F.length; l3++) J[l3] = N;
                var l4 = function (l9, ll) {
                    {
                      if (l9 < 2) return ll.slice();
                      var lj = ll.length;
                      if (lj < (l9 > 2 ? 4 : 6)) return ll.slice();
                      var lI = ll[ll.length - 1],
                        ls = [lI];
                      2 === l9 && ls.unshift(lI - (Math.round(lj / 5) || 1)), ls.unshift(lI - (Math.floor(lj / 2) || 1)), 2 === l9 && ls.unshift(ls[0] - (Math.floor(lj / 5) || 1));
                      var lO = ll[0];
                      return ls.unshift(lO + (Math.floor(lj / 10) || 1)), ls.unshift(lO), ls;
                    }
                  },
                  l5 = Object.create(null);
                for (l3 = 0, K = F.length; l3 < K; l3++) {
                  var l6 = l4(l3, J[l3]);
                  if (g && g[l3] && (l6 = l6.concat(g[l3])), 0 !== l6.length) for (l0 = 0, l1 = N.length; l0 < l1; l0++) if (l6.includes(N[l0])) {
                    {
                      var l7 = q.toFixed(F[l3] * N[l0] * Z, 2);
                      var l8 = {};
                      l8.betSize = F[l3];
                      l8.betLevel = N[l0];
                      l5[l7] || (l5[l7] = l8);
                    }
                  }
                }
                this.$v = l5;
              }
            }
          }, E.prototype.Fv = function () {
            var F = this.betLineValue * this.betLevelValue * this.betSizeValue;
            if (undefined !== this.Zv && F < this.Zv && this.$v && (!this.Wv || F > this.Wv)) {
              var N = this.$v[q.toFixed(this.Zv, 2)];
              this.betSizeValue = N.betSize, this.betLevelValue = N.betLevel;
            } else this.betSizeValue = this.betSizeList[0], this.betLevelValue = this.betLevelList[0];
          }, E.prototype.checkSelectedValue = function (F) {
            var N = +F;
            if (this.Uv && N < this.Uv && (!this.Wv || N > this.Wv) && (N = this.Uv), F = q.toFixed(N, 2), !this.$v) throw Error("SettingMenuHelper :: checkSelectedValue : bet combination did not generate due to size or level empty");
            var Z = Object.keys(this.$v).sort(function (A, G) {
                var J = parseFloat(A),
                  K = parseFloat(G);
                return J < K ? -1 : J > K ? 1 : 0;
              }),
              g = Z.indexOf(F);
            -1 === g ? (this.Lv = F, this.Jv = undefined, this.dv.updateBetModifierColor(1), this.vv.updateBetModifierColor(1, Z.length - 1)) : (this.Jv = g, this.dv.updateBetModifierColor(g), this.vv.updateBetModifierColor(g, Z.length - 1));
          }, E.prototype.t_ = function (F) {
            {
              var N = this,
                Z = this.settingMenuController;
              this.Wd || this.Fd ? Z.isSettingBetReminderBoardShowed() || (this.zv = this.Lv, this.Kv = this.betSizeValue, this.qv = this.betLevelValue, this.Yv = this.Jv, F.selectedBet !== this.Yv && (this.Md.emit("SlotMenu.GetShowChangeBetReminder", undefined, function (g) {
                {
                  var A = '';
                  g.response ? (A = shell.I18n.t("BetOptions.BetChangeProgressRemind"), Z.setBetChangeReminderLabel(A)) : N.Md.emit("SlotMenu.GetShowForfeitProgressReminder", undefined, function (G) {
                    G.response && (A = shell.I18n.t("BetOptions.BetChangeForfeitProgressRemind"), Z.setBetChangeReminderLabel(A));
                  }), Z.showBetReminderBoard(q.formatCurrency(parseFloat(N.zv)));
                }
              }), this.Xv && this.Xv())) : this.i_(parseFloat(F.selectedBetAmount));
            }
          }, E.prototype.s_ = function (F, N) {
            var Z = RegExp('<' + F + " style=['\"]color:\\s*([^'\"]+)['\"]>", 'gi');
            return N.replace(Z, "<color=$1>").replace('</' + F + '>', "</color>");
          }, E.prototype.e_ = function (F) {
            if (this.Uv && this.Wv) if (F < this.Uv && F <= this.Wv) {
              {
                var N = this.s_("span", shell.I18n.t("FeatureBuy.BetForFeatureBuyOnly")),
                  Z = this.s_("span", shell.I18n.t("FeatureBuy.BetSuggestion", {
                    'amount': q.formatCurrency(this.Uv)
                  }));
                this.settingMenuController.showFeatureBuyToast(N + '\x0a' + Z, 2);
              }
            } else this.settingMenuController.hideFeatureBuyToast();
          }, E.prototype.increaseBet = function () {
            {
              if (!this.$v) throw Error("SettingMenuHelper :: increaseBet : bet combination did not generate");
              var F = Object.keys(this.$v).sort(function (g, A) {
                  var G = parseFloat(g),
                    J = parseFloat(A);
                  return G < J ? -1 : G > J ? 1 : 0;
                }),
                N = this.vv.increaseBet(F, this.Jv, this.Lv);
              this.t_(N), this.e_(+N.selectedBetAmount), this.dv.updateBetModifierColor(N.selectedBet), this.vv.updateBetModifierColor(N.selectedBet, F.length - 1);
              var Z = this.Jv = N.selectedBet;
              this.Lv = N.selectedBetAmount, this.betSizeValue = this.$v[F[Z]].betSize, this.betLevelValue = this.$v[F[Z]].betLevel, this.updateBetValues(T(Z, this.$v)), this.Wd || this.Fd || this.Vv && this.Vv(this.betSizeValue, this.betLevelValue), this.playMenuIconPressSound(), this.Md.emit("SettingMenu.PlusButtonPressed");
            }
          }, E.prototype.decreaseBet = function () {
            if (!this.$v) throw Error("SettingMenuHelper :: decreaseBet : bet combination did not generate");
            var F = Object.keys(this.$v).sort(function (g, A) {
                {
                  var G = parseFloat(g),
                    J = parseFloat(A);
                  return G < J ? -1 : G > J ? 1 : 0;
                }
              }),
              N = this.dv.decreaseBet(F, this.Jv, this.Lv);
            this.t_(N), this.e_(+N.selectedBetAmount), this.dv.updateBetModifierColor(N.selectedBet), this.vv.updateBetModifierColor(N.selectedBet, F.length - 1);
            var Z = this.Jv = N.selectedBet;
            this.Lv = N.selectedBetAmount, this.betSizeValue = this.$v[F[Z]].betSize, this.betLevelValue = this.$v[F[Z]].betLevel, this.updateBetValues(T(Z, this.$v)), this.Wd || this.Fd || this.Vv && this.Vv(this.betSizeValue, this.betLevelValue), this.playMenuIconPressSound(), this.Md.emit("SettingMenu.MinusButtonPressed");
          }, Object.defineProperty(E.prototype, "changeSoundVolume", {
            'set': function (F) {
              var N = this;
              this.n_ && (this.o_ && this.o_(), this.n_ = undefined), this.n_ = function () {
                N.c_(N.soundOn), F && F(N.soundOn);
              }, this.o_ = q.observeCallback(this, "soundOn")(this.n_);
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.setBalance = function (F, N) {
            var Z = this;
            undefined === N && (N = true);
            var g = this.h_(F);
            this.r_(function (A) {
              g && Z.playWalletCountingAboveSfx();
              var G = q.toDecimalWithExp(A && A.balance || F, 2);
              Z.settingInfoFooter.updateBalance(undefined, G, N), Z.Ev({
                'balance': G
              });
            }), this.Md.emit("Wallet.UpdateRollOverBalance");
          }, E.prototype.setWinAmount = function (F, N, Z) {
            undefined === N && (N = true), undefined === Z && (Z = true), this.settingInfoFooter.updateWinAmount(F, N, Z), this.Md.emit("SlotMenu.UpdateWinAmount", F), this.Ev({
              'totalWin': q.toDecimalWithExp(F, 2)
            });
          }, E.prototype.setAllButtonsInteractable = function (F, N) {
            {
              undefined === N && (N = true), this.Vd.setAllButtonsInteractable(F), F && this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2));
            }
          }, E.prototype.setLockAccess = function (F, N) {
            this.Vd.setLockAccess(F, N);
          }, E.prototype.isButtonLocked = function (F) {
            return this.Vd.isButtonLocked(F);
          }, E.prototype.setButtonInteractableFlag = function (F, N) {
            {
              undefined === N && (N = false), this.Vd.setButtonInteractableFlag(F, N);
            }
          }, E.prototype.setButtonInteractable = function (F) {
            this.Vd.setButtonInteractable(F);
          }, E.prototype.setLockAccessAutoSpinPanel = function (F) {
            this.setLockAccess(C.SPIN_OPTIONS, F);
          }, E.prototype.setLockAccessBetPanel = function (F) {
            this.setLockAccess(C.BET_OPTIONS, F);
          }, E.prototype.setLockMoreMenuButton = function (F) {
            {
              this.setLockAccess(C.MORE_MENU, F);
            }
          }, E.prototype.setHidden = function (F) {
            {
              this.Td = F, this.settingMenuController.setHidden(F);
            }
          }, E.prototype.isIdle = function () {
            return this.settingMenuController.isIdle();
          }, Object.defineProperty(E.prototype, "isShowBlackTintBg", {
            'set': function (F) {
              this.xd = F;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.activateWalletNotify = function (F) {
            {
              this.settingInfoFooter.activateWalletNotify(F);
            }
          }, E.prototype.addSettingInfoFooter = function (F) {
            this.a_ = F, this.Vd.setupOtherButtonInList(C.WALLET, F.interactableWalletButton.bind(F)), F.updateLayout(Y()), F.setFooterLocaleAtlas(this.settingInfoFooterLocaleAtlas), F.setOpenUserProfileMenuCallback(this.yv.bind(this)), F.showBackground(false), F.changeHolder(this.settingMenuController.getSettingInfoFooterFrontHolder()), this.Vd.setupOtherButtonInList(C.BET_OPTIONS, F.interactableBetOptionsButton.bind(F)), F.setOpenBetOptionsMenuCallback(this.gv.bind(this)), this.updateBetLabelCallback(F.updateBetAmount.bind(F)), this.Vd.setupOtherButtonInList(C.WIN, F.interactableWinButton.bind(F)), F.setOpenWinMenuCallback(this.Cv.bind(this, true)), F.boot(), F.setUserProfileSpriteFrameList(this._v, this.Cf), F.onAudioStateUpdate(this.soundOn), this.Md.emit("SettingMenu.SetUpButton", this.Vd.buttonSetUpConfig);
          }, E.prototype.getSettingInfoFooter = function () {
            return this.settingInfoFooter;
          }, Object.defineProperty(E.prototype, "settingInfoFooter", {
            'get': function () {
              if (!this.a_) throw Error("SettingMenuHelper :: settingInfoFooter : Cannot find settingInfoFooter. Please setup setting info footer first! (addSettingInfoFooter)");
              return this.a_;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.showSettingInfoFooterBackground = function (F) {
            {
              this.settingInfoFooter.showBackground(F);
            }
          }, E.prototype.setFreeGameMode = function (F) {
            var N, Z, g, A, G;
            this.isFreeGameMode = F;
            var J = null === (N = this.$d) || undefined === N ? undefined : N.buttonsHolder();
            F ? (this.setLockAccess(C.BET_OPTIONS, true), this.vv.buttonActivate(false), this.dv.buttonActivate(false), (null === (Z = J[0]) || undefined === Z ? undefined : Z.getComponent(cc.Widget)).left = 150, (null === (g = J[3]) || undefined === g ? undefined : g.getComponent(cc.Widget)).right = 150) : (this.setLockAccess(C.BET_OPTIONS, false), this.vv.buttonActivate(true), this.dv.buttonActivate(true), (null === (A = J[0]) || undefined === A ? undefined : A.getComponent(cc.Widget)).left = 60, (null === (G = J[3]) || undefined === G ? undefined : G.getComponent(cc.Widget)).right = 60, this.checkSelectedValue(q.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)));
          }, E.prototype.getCurrentBalance = function () {
            {
              return this.settingInfoFooter.currentBalance;
            }
          }, E.prototype.additionalBetCalculation = function () {
            if (!this.Nv) throw Error("SettingMenuHelper :: additionalBetCalculation : Please set calculation callback via additionalBetCalculationCallback setter first!");
            return this.Nv(this.betLineValue, this.betLevelValue, this.betSizeValue);
          }, Object.defineProperty(E.prototype, "betLineValue", {
            'get': function () {
              {
                return this.Ld;
              }
            },
            'set': function (F) {
              this.Md.emit("SlotMenu.SetBetLineValue", F), this.Ld = F, this.preCalculateCombination();
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "betSizeList", {
            'get': function () {
              {
                return this.Ed;
              }
            },
            'set': function (F) {
              {
                this.Md.emit("SlotMenu.SetBetSizeList", F), this.Ed = F, this.preCalculateCombination();
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "betSizeValue", {
            'get': function () {
              {
                return this.rt;
              }
            },
            'set': function (F) {
              this.Md.emit("SlotMenu.SetBetSizeValue", F), this.rt = F;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "minimumBetAmount", {
            'get': function () {
              return this.Uv;
            },
            'set': function (F) {
              {
                this.Md.emit("SlotMenu.SetMinimumBetAmount", F), this.Uv = F, this.preCalculateCombination();
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "featureBuyThreshold", {
            'get': function () {
              {
                return this.Wv;
              }
            },
            'set': function (F) {
              this.Md.emit("SlotMenu.SetFeatureBuyThreshold", F), this.Wv = F, this.preCalculateCombination();
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "betLevelList", {
            'get': function () {
              {
                return this.jd;
              }
            },
            'set': function (F) {
              this.Md.emit("SlotMenu.SetBetLevelList", F), this.jd = F, this.preCalculateCombination();
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "betLevelValue", {
            'get': function () {
              return this.ht;
            },
            'set': function (F) {
              {
                this.Md.emit("SlotMenu.SetBetLevelValue", F), this.ht = F;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "baseBet", {
            'get': function () {
              return this.Dd;
            },
            'set': function (F) {
              {
                this.Dd = F, this.Md.emit("SlotMenu.SetBaseBet", F);
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(E.prototype, "soundEnable", {
            'get': function () {
              return P.soundOn;
            },
            'set': function (F) {
              this.soundOn = F, P.soundOn = F;
            },
            'enumerable': false,
            'configurable': true
          }), E.prototype.playWalletCountingAboveSfx = function () {
            this.soundEnable && this.Md.emit("Game.PlayUISound", H.WALLET_COUNTING_ABOVE);
          }, E.prototype.playMenuIconPressSound = function () {
            this.soundEnable && this.Md.emit("Game.PlayUISound", H.BUTTON_CLICK);
          }, E.prototype.playCloseBtnPressSound = function () {
            this.soundEnable && this.Md.emit("Game.PlayUISound", H.BACK_OR_CLOSE);
          }, E.prototype.playListItemClickSound = function () {
            this.soundEnable && this.Md.emit("Game.PlayUISound", H.LIST_ITEN_CLICK);
          }, E.prototype.playSliderEffectSound = function () {
            this.soundEnable && this.Md.emit("Game.PlayUISound", H.SLIDER_EFFECT);
          }, E.prototype.tv = function (F) {
            {
              L.initUIAudioHelper(F);
            }
          }, E.prototype.reset = function () {
            {
              this.av && this.av(), this.Gv && this.Gv(), this.fv && this.fv(), this.o_ && this.o_(), this.u_ && this.u_(), this.kv = undefined, this.Ov = undefined, this.Iv = undefined, this.n_ = undefined, this.lv = undefined, this.rv = undefined, this.Vd = new D.default();
            }
          }, E.prototype.Bv = function () {
            var F = {};
            F.operationPageIndex = 2;
            this.Md.emit("UserProfile.Show", F);
          }, E.prototype.Pv = function () {
            this.Md.emit("UserProfile.Show");
          }, E.prototype.l_ = function (F) {
            {
              this.Md.emit("Wallet.ShowWalletList", F);
            }
          }, E.prototype.Ev = function (F) {
            this.Md.emit("Game.TransactionInfoChanged", F);
          }, E.prototype.c_ = function (F) {
            {
              var N = F ? 'On' : "Off";
              this.Md.emit("Game.AudioStateChanged", N);
            }
          }, E.prototype.Kd = function () {
            var F = this;
            U.addUIBlockEventCallback("settingmenu", function (N) {
              F.settingMenuController.setMenuUIBlock(N);
            }), this.Md.on("SlotMenu.StartAutoSpin", function (N) {
              F.Ov && F.Ov(N);
            }, this), Q && (this.Md.on("Game.ShowOptions", this.openBetMenu, this), this.Md.on("Game.HideOptions", this.f_, this), this.Md.on("SlotMenu.ManualUpdateBetFactorCallback", function (N) {
              var Z = N.payload,
                g = Z.betSize,
                A = Z.betLevel;
              F.Tv && F.Tv(g, A);
            }, this), this.Md.on("SlotMenu.CancelBetPanelCallback", function () {
              F.Rv && F.Rv();
            }, this), this.Md.on("SlotMenu.FinishBetPickCallback", function (N) {
              var Z = N.payload,
                g = Z.betSize,
                A = Z.betLevel;
              F.Hv && F.Hv(g, A);
            }, this)), this.Md.on("Game.OnAudio", function () {
              {
                F.soundEnable = true, F.settingInfoFooter.onAudioStateUpdate(true);
              }
            }), this.Md.on("Game.OffAudio", function () {
              {
                F.soundEnable = false, F.settingInfoFooter.onAudioStateUpdate(false);
              }
            }), this.Md.on("Game.RequestAudioState", function (N) {
              true === F.soundEnable ? N.response = 'On' : N.response = "Off";
            }), this.Md.on("Game.GetSettingMenuType", function (N) {
              {
                N.response = M.NEW;
              }
            });
          }, E.prototype.qd = function () {
            var F = this;
            this.Md.on("Game.TransactionStateComplete", function (N) {
              {
                if (F.d_) {
                  {
                    var Z = N.payload.to;
                    "setup" === Z && F.zd && (F.zd = false), "action" !== Z || F.zd || (F.zd = true);
                  }
                }
              }
            }), this.Md.on("Game.TransactionInfoUpdated", function (N) {
              F.d_ && (F.v_ = N.payload.tbb);
            });
          }, E.prototype.Jd = function () {
            {
              var F = this;
              this.Md.emit("Game.RequestSession", undefined, function (N) {
                var Z = N.response;
                if (!Z || !Z.gameId) throw Error("SettingMenuHelper:: Game.RequestSession return invalid data");
                F.Cf = Z.operatorJurisdictionConfig.turboSpinEnable, F._v = Z.operatorJurisdictionConfig.autoPlayConfig, F.d_ = Z.operatorJurisdictionConfig.hideNonProfitEffect, F.Rd = Z.operatorJurisdictionConfig.backButton;
              }), this.Md.off("Game.Initialized", this.Jd.bind(this));
            }
          }, E.prototype.wv = function (F) {
            F ? this.Md.on("Game.HideOptions", this.f_, this) : this.Md.off("Game.HideOptions", this.f_, this);
          }, E.prototype.f_ = function () {
            this.wv(false), this.Md.emit("SlotMenu.HideBetOptions");
          }, E.prototype.r_ = function (F) {
            F && this.Md.emit("Game.RequestTransactionInfo", undefined, function (N) {
              F(N.response);
            });
          }, E.prototype.setVerifyInteractable = function (F) {
            var N = F && this.isEnableVRF();
            this.settingInfoFooter.setPGIconsInteractableColor(N), this.settingInfoFooter.interactableWinButton(N);
          }, E.prototype.Av = function (F) {
            {
              var N = {};
              N.actionName = F;
              this.Md.emit("Analytics.Event", N);
            }
          }, E.prototype.i_ = function (F) {
            var N = this;
            this.__ ? this.__() : this.p_ = parseFloat(this.Lv), this.__ = q.delayCallback(0.6)(function () {
              F !== N.p_ && N.Md.emit("SlotMenu.ChangeBet", F), N.__ = undefined, N.p_ = undefined;
            });
          }, E.prototype.getSettingMenuButtonNode = function (F) {
            {
              return this.Vd.getButtonNode(F);
            }
          }, E.prototype.h_ = function (F) {
            var N = this.settingInfoFooter;
            if (this.zd && this.d_) {
              var Z = N.currentBalance,
                g = +q.toFixed(F - N.currentBalance, 2);
              if (this.v_ && F > Z && g > this.v_) return true;
            }
            return false;
          }, E.prototype.setFooterBackgroundOpacity = function (F) {
            undefined === F && (F = 127), this.settingInfoFooter.setFooterBackgroundOpacity(F);
          }, __decorate([shell.deprecated("getSettingInfoFooter")], E.prototype, "getSettingInfoFooter", null), __decorate([w], E);
        }
      }(cc.Object))();
      exports.settingMenuHelper = R, cc._RF.pop();
    }
  }
  function T(X, E) {
    return (X + 1) / Object.keys(E).length;
  }
  function Y() {
    return shell.isRTLLanguage && shell.isRTLLanguage();
  }
}
module.exports = SettingMenuHelper;
