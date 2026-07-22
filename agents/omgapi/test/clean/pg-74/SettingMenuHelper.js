// module: SettingMenuHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SettingMenuHelper(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "35d29M3VudMFqjm4gRoo2G6", "SettingMenuHelper")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.BackButtonType = exports.settingMenuHelper = exports.SettingMenuType = exports.ButtonPrefabType = exports.SubControllers = undefined;
    var X,
      Z,
      T,
      M = require("Utils"),
      V = require("SettingMenuButtonHelper"),
      N = require("NotifyHelper"),
      q = require("Preference"),
      K = require("BVFramework"),
      O = require("GameEventHandler"),
      x = System.get("wallet"),
      L = System.get("slot-menu"),
      H = System.get("game-history"),
      U = System.get("paytable-rules"),
      k = cc._decorator.ccclass,
      Y = q.getPreference("setting_menu");
    Y.defineItem("soundOn", true), function (A) {
      A[A.SPIN_OPTIONS = 0] = "SPIN_OPTIONS", A[A.BET_OPTIONS = 1] = "BET_OPTIONS", A[A.SOUND = 2] = "SOUND", A[A.HISTORY = 3] = "HISTORY", A[A.PAYTABLE = 4] = "PAYTABLE", A[A.RULE = 5] = "RULE", A[A.WALLET = 6] = "WALLET";
    }(exports.SubControllers || (exports.SubControllers = {})), function (A) {
      A[A.SPIN_OPTIONS = 2] = "SPIN_OPTIONS", A[A.BET_OPTIONS = 3] = "BET_OPTIONS", A[A.MORE_MENU = 4] = "MORE_MENU", A[A.SOUND = 5] = "SOUND", A[A.PAYTABLE = 6] = "PAYTABLE", A[A.RULE = 7] = "RULE", A[A.HISTORY = 8] = "HISTORY", A[A.HIDE_MORE = 9] = "HIDE_MORE", A[A.MINUS_BET = 10] = "MINUS_BET", A[A.PLUS_BET = 11] = "PLUS_BET", A[A.WALLET = 12] = "WALLET", A[A.WIN = 13] = "WIN", A[A.TURBO_SPIN = 14] = "TURBO_SPIN", A[A.QUIT = 15] = "QUIT", A[A.MAX_BET = 16] = "MAX_BET";
    }(X = exports.ButtonPrefabType || (exports.ButtonPrefabType = {})), function (A) {
      A[A.HIDDEN = 0] = "HIDDEN", A[A.NORMAL_BACK_FUNC = 1] = "NORMAL_BACK_FUNC";
    }(Z || (Z = {})), exports.BackButtonType = Z, function (A) {
      A[A.LEGACY = 0] = "LEGACY", A[A.NEW = 1] = "NEW";
    }(T = exports.SettingMenuType || (exports.SettingMenuType = {}));
    var y = new (function (A) {
      function w() {
        {
          var W = A.call(this) || this;
          var D = {};
          D.sliderEffect = "audio/slider_effect";
          D.listItemClick = "audio/list_item_click";
          D.menuIconPress = "audio/menu_icon_press";
          D.walletCountingAbove = "audio/wallet_counting_above";
          var J = {};
          J.sliderEffect = false;
          J.listItemClick = false;
          J.menuIconPress = false;
          J.walletCountingAbove = false;
          return W.soundOn = Y.soundOn, W.turboSpinOn = false, W.isFreeGameMode = false, W.Ev = false, W.Nv = true, W.Gv = Z.HIDDEN, W.kv = 0, W.Rv = '', W.jv = 0, W.Lv = [], W.Pv = [], W.vt = 0, W.ft = 0, W.Dv = '', W.Uv = D, W.xv = J, W.Fv = 0, W.balanceAmountLessThan = 0, W.autoSpinCount = 0, W.balanceAmountMoreThan = 0, W.singleWinAmount = 0, W.Wv = false, W.Jv = false, W.Vv = false, W.zv = new V.default(), W.wv = K.getGameContext(), W.Kv = false, W.qv(), W.Qv(), W.wv.on("Game.Initialized", W.Yv.bind(W)), W;
        }
      }
      return __extends(w, A), Object.defineProperty(w.prototype, "path", {
        'get': function () {
          {
            return this.Rv;
          }
        },
        'set': function (W) {
          this.Rv = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.setSettingMenuController = function (W) {
        this.Zv = W;
      }, Object.defineProperty(w.prototype, "settingMenuController", {
        'get': function () {
          if (!this.Zv) throw Error("SettingMenuHelper :: settingMenuController : Cannot find settingMenuController. Please setup using setSettingMenuController first!");
          return this.Zv;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.initAudio = function (W) {
        {
          this.Xv(W);
        }
      }, w.prototype.loadAudio = function (W) {
        this.$v(W);
      }, w.prototype.setButtonPrefab = function (W, D, J) {
        undefined === J && (J = false), this.zv.setButtonPrefab(W, D, J);
      }, Object.defineProperty(w.prototype, "autoSpinButtonLocaleIcon", {
        'get': function () {
          if (!this.t_) throw Error("SettingMenuHelper :: autoSpinButtonLocaleIcon : Cannot find autoSpinButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
          return this.t_;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "historyButtonLocaleIcon", {
        'get': function () {
          {
            if (!this.i_) throw Error("SettingMenuHelper :: historyButtonLocaleIcon : Cannot find historyButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
            return this.i_;
          }
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "settingInfoFooterLocaleWinIcon", {
        'get': function () {
          {
            if (!this.s_) throw Error("SettingMenuHelper :: settingInfoFooterLocaleWinIcon : Cannot find settingInfoFooterLocaleWinIcon. Please setup using settingMenuLocaleIcons setter first!");
            return this.s_;
          }
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "turboOnButtonLocaleIcon", {
        'get': function () {
          if (!this.e_) throw Error("SettingMenuHelper :: turboOnButtonLocaleIcon : Cannot find turboOnButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
          return this.e_;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "turboOffButtonLocaleIcon", {
        'get': function () {
          if (!this.n_) throw Error("SettingMenuHelper :: turboOffButtonLocaleIcon : Cannot find turboOffButtonLocaleIcon. Please setup using settingMenuLocaleIcons setter first!");
          return this.n_;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "settingMenuLocaleIcons", {
        'set': function (W) {
          {
            this.t_ = W.getSpriteFrame("txt_auto"), this.i_ = W.getSpriteFrame("ic_hist"), this.o_ && this.o_.setIconSprite(this.i_), this.s_ = W.getSpriteFrame("ic_win"), this.c_ && this.c_.setWinIcon(this.s_), this.e_ = W.getSpriteFrame("txt_turbo_on"), this.n_ = W.getSpriteFrame("txt_turbo_off");
          }
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.h_ = function () {
        var W = this,
          D = this.settingMenuController,
          J = this.zv.setupSettingMenuButtonInList(X.TURBO_SPIN, function () {
            D.isSwitchingMenuLayer() || (W.setTurboSpinButtonState(!W.turboSpinOn), W.playMenuIconPressSound(), P() && D.hideMoreMenuLayer());
          });
        J.setTurboSprites(this.turboOnButtonLocaleIcon, this.turboOffButtonLocaleIcon), J.getTurboSpinCallback = function () {
          {
            return this.turboSpinOn;
          }
        }.bind(this), J.setButtonOnColor("setting", "color_button_transition_a"), J.setButtonOffColor("setting", "white_button_transition_a"), J.sprite.spriteFrame = J.turboSpinOn, J.spriteEffect.spriteFrame = J.turboSpinEffectOn, J.changeButtonColor(true), J.changeSpriteEffectColor();
        var E = this;
        this.r_ = function () {
          this.stopTurboLighting(), E.turboSpinOn ? this.playTurboLighting() : (this.sprite.spriteFrame = this.turboSpinOff, this.spriteEffect.spriteFrame = J.turboSpinEffectOff), this.changeButtonColor(true), D.showSettingTurboToast(E.turboSpinOn ? shell.I18n.t("SettingMenu.TurboSpinEnable") : shell.I18n.t("SettingMenu.TurboSpinDisable"), E.turboSpinOn, 2), E.sendEventToGoogleAnalytic(E.turboSpinOn);
        }.bind(J), this.a_ = M.observeCallback(this, "turboSpinOn")(this.r_), D.addMenuItem(J.node), this.wv.on("Game.OnTurboSpin", function () {
          W.setTurboSpinButtonState(true);
        }), this.wv.on("Game.OffTurboSpin", function () {
          W.setTurboSpinButtonState(false);
        });
      }, w.prototype.setTurboSpinButtonState = function (W) {
        {
          this.turboSpinOn = W, this.wv.emit("Game.TurboSpinStateChanged", this.turboSpinOn);
        }
      }, w.prototype.sendEventToGoogleAnalytic = function (W) {
        var D = {};
        D.name = "Turbo Spin";
        D.index = W;
        cc.sys.isBrowser && shell.ga.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_CHANGE_SETTING, D);
      }, w.prototype.setupSettingMenuButtons = function () {
        var W = this,
          D = this.settingMenuController,
          J = this.zv,
          E = this;
        this.u_ = function () {
          P() ? D.muteIcon.active = false : D.isIdle() && (D.muteIcon.active = !W.soundOn);
        }, this.u_(), this.l_ = M.observeCallback(this, "soundOn")(this.u_);
        var Q0,
          Q1 = function (Q2) {
            var Q3 = J.setupSettingMenuButtonInList(X.SOUND, function () {
              W.f_(), P() && D.hideMoreMenuLayer();
            });
            Q3.setTitle(shell.I18n.t("SettingMenu.SettingSoundWord"));
            var Q4 = D.addMenuItem(Q3.node);
            W.d_ = function () {
              this.sprite.spriteFrame = E.soundOn ? this.soundOn : this.soundOff, this.largeSprite && (this.largeSprite.spriteFrame = E.soundOn ? this.largeSoundOnIcon : this.largeSoundOffIcon);
            }.bind(Q3), W.v_ = Q3.node, W.__ = Q4, W.Nv || (W.soundEnable = W.Nv, W.setLockAccess(X.SOUND, true)), W.d_(), W.m_ = M.observeCallback(W, "soundOn")(W.d_), Q2 && Q3.customSetup();
          };
        this.b_ ? (this.h_(), P() && function () {
          var Q2 = J.setupIndependentSettingMenuButton(X.SOUND, function () {
            W.f_(), D.hideMoreMenuLayer();
          });
          if (!Q2) throw Error("SettingMenuHelper :: setupSettingMenuButtons : fail to setupIndependentSettingMenuButton when creating landscape sound button");
          Q2.setTitle(shell.I18n.t("SettingMenu.SettingSoundWord")), D.landscapeSoundButtonHolder.addChild(Q2.node), W.d_ = function () {
            {
              this.sprite.spriteFrame = E.soundOn ? this.soundOn : this.soundOff, this.largeSprite && (this.largeSprite.spriteFrame = E.soundOn ? this.largeSoundOnIcon : this.largeSoundOffIcon);
            }
          }.bind(Q2), W.v_ = Q2.node, W.__ = D.landscapeSoundButtonHolder, W.Nv || (W.soundEnable = W.Nv, W.setLockAccess(X.SOUND, true)), W.d_(), W.m_ = M.observeCallback(W, "soundOn")(W.d_), Q2.customSetup();
        }()) : Q1(true), (Q0 = this.p_ = J.setupSettingMenuButtonInList(X.MINUS_BET, this.decreaseBet.bind(this))).setShowSettingToastCallback(D.showSettingToast.bind(D)), Q0.setHideSettingToastCallback(D.hideSettingToast.bind(D)), D.addMenuItem(Q0.node), (Q0 = this.S_ = J.setupSettingMenuButtonInList(X.PLUS_BET, this.increaseBet.bind(this))).setShowSettingToastCallback(D.showSettingToast.bind(D)), Q0.setHideSettingToastCallback(D.hideSettingToast.bind(D)), D.addMenuItem(Q0.node), this.g_ && ((Q0 = this.C_ = J.setupSettingMenuButtonInList(X.SPIN_OPTIONS, this.M_.bind(this))).setAutoSpinSprite(this.autoSpinButtonLocaleIcon), D.addMenuItem(Q0.node)), Q0 = J.setupSettingMenuButtonInList(X.MORE_MENU, this.showMoreMenuLayer.bind(this), this.g_ ? "white_button_transition_a" : "color_button_transition_a"), D.addMenuItem(Q0.node), this.g_ || (Q0.customSetup(), D.addEmptyItem(), this.kv += 1), this.Gv === Z.NORMAL_BACK_FUNC && (Q0 = J.setupSettingMenuButtonInList(X.QUIT, this.onClickQuitButton.bind(this)), D.addMenuItem(Q0.node)), this.b_ && !P() && Q1(false), Q0 = J.setupSettingMenuButtonInList(X.PAYTABLE, this.y_.bind(this)), D.addMenuItem(Q0.node), Q0 = J.setupSettingMenuButtonInList(X.RULE, this.w_.bind(this)), D.addMenuItem(Q0.node), (Q0 = this.o_ = J.setupSettingMenuButtonInList(X.HISTORY, this.B_.bind(this))).setIconSprite(this.historyButtonLocaleIcon), D.addMenuItem(Q0.node), Q0 = J.setupSettingMenuButtonInList(X.HIDE_MORE, this.A_.bind(this)), D.addMenuItem(Q0.node), (Q0 = this.H_ = this.zv.setupIndependentSettingMenuButton(X.MAX_BET, this.maxBet.bind(this))) && (this.settingInfoFooter.maxBetButtonHolder.addChild(Q0.node), Q0.setShowSettingToastCallback(D.showSettingToast.bind(D)), Q0.setHideSettingToastCallback(D.hideSettingToast.bind(D))), this.O_(), D.updateLayout(G());
      }, w.prototype.O_ = function () {
        {
          for (var W = this.settingMenuController.buttonsHolder(), D = this.zv.totalButtonsOccupied(), J = W.length - D - this.kv, E = W.length - 1; E >= 0 && !(J <= 0); E--) W[E].active = false, J--;
        }
      }, w.prototype.setFeatureBuyToastNodePosition = function (W, D, J) {
        {
          this.settingMenuController.setFeatureBuyToastNodePosition(W, D, J);
        }
      }, Object.defineProperty(w.prototype, "menuChangedCallBack", {
        'set': function (W) {
          this.I_ = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "backButtonType", {
        'get': function () {
          return this.Gv;
        },
        'set': function (W) {
          this.Gv = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.setOnClickReturnButtonCallback = function (W) {
        this.T_ = W;
      }, w.prototype.setIsControllerPresenting = function (W) {
        {
          this.settingMenuController.setIsControllerPresenting(W);
        }
      }, w.prototype.M_ = function () {
        this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openAutoSpinMenu();
      }, w.prototype.E_ = function () {
        this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openBetMenu();
      }, w.prototype.f_ = function () {
        this.playMenuIconPressSound(), this.toggleSound();
      }, w.prototype.B_ = function (W) {
        undefined === W && (W = false), this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openHistoryMenu(W);
      }, w.prototype.y_ = function () {
        {
          this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openPayoutMenu();
        }
      }, w.prototype.w_ = function () {
        {
          this.playMenuIconPressSound(), this.settingMenuController.isPanelTouchMoving() || this.openRulesMenu();
        }
      }, w.prototype.N_ = function () {
        this.playMenuIconPressSound(), this.openWalletMenu();
      }, w.prototype.A_ = function () {
        this.playMenuIconPressSound(), this.hideMoreMenuLayer();
      }, w.prototype.openAutoSpinMenu = function () {
        var W = this.settingMenuController;
        W.isControllerPresenting() || W.isSwitchingMenuLayer() || (this.G_(), P() && W.hideMoreMenuLayer(), W.setIsControllerPresenting(true), this.wv.emit("SlotMenu.ShowSpinOptions", undefined));
      }, w.prototype.openBetMenu = function () {
        var W = this.settingMenuController;
        W.isControllerPresenting() || W.isSwitchingMenuLayer() || (this.G_(), this.hideMoreMenuLayer(), W.setIsControllerPresenting(true), this.k_(true), this.wv.emit("SlotMenu.ShowBetOptions", undefined));
      }, w.prototype.toggleSound = function () {
        var W = this.settingMenuController;
        if (!W.isControllerPresenting() && !W.isSwitchingMenuLayer()) {
          {
            this.soundEnable = !this.soundEnable;
            var D = true === this.soundEnable ? "OnGameSound" : "OffGameSound";
            this.R_(D), this.playMenuIconPressSound();
          }
        }
      }, w.prototype.openHistoryMenu = function (W) {
        undefined === W && (W = false);
        var D = this.settingMenuController;
        D.isControllerPresenting() || D.isSwitchingMenuLayer() || (W && this.hideMoreMenuLayer(), D.setIsControllerPresenting(true), this.wv.emit("History.ShowGame"), this.G_());
      }, w.prototype.openPayoutMenu = function () {
        var W = this.settingMenuController;
        W.isControllerPresenting() || W.isSwitchingMenuLayer() || (P() && W.hideMoreMenuLayer(), W.setIsControllerPresenting(true), this.wv.emit("Paytable.Show"));
      }, w.prototype.openRulesMenu = function () {
        var W = this.settingMenuController;
        W.isControllerPresenting() || W.isSwitchingMenuLayer() || (P() && W.hideMoreMenuLayer(), W.setIsControllerPresenting(true), this.wv.emit("GameRules.Show"));
      }, w.prototype.openWalletMenu = function () {
        var W = this.settingMenuController;
        W.isControllerPresenting() || W.isSwitchingMenuLayer() || x && (this.activateWalletNotify(false), this.j_(x.WalletEventEnum.EN_WALLET_LIST_ANIM));
      }, w.prototype.showMoreMenuLayer = function () {
        var W = this.settingMenuController;
        if (this.playMenuIconPressSound(), "port" === shell.environment.getOrientationMode() && (W.muteIcon.active = false), !W.isControllerPresenting() && !W.isSwitchingMenuLayer()) {
          this.G_(), W.showMoreMenuLayer(this.Vv);
          var D = this.I_;
          D && D(true, true);
        }
      }, w.prototype.hideMoreMenuLayer = function () {
        var W = this.settingMenuController;
        if (P() ? W.muteIcon.active = false : this.soundOn ? W.muteIcon.active = false : W.muteIcon.active = true, !W.isControllerPresenting() && !W.isSwitchingMenuLayer()) {
          this.settingInfoFooter.changeHolder(W.getSettingInfoFooterFrontHolder()), W.hideMoreMenuLayer();
          var D = this.I_;
          D && D(false, true);
        }
      }, w.prototype.onClickQuitButton = function () {
        {
          var W = this,
            D = this.settingMenuController;
          if (!D.isSwitchingMenuLayer() && !D.isControllerPresenting()) {
            var J = {
              'title_message': shell.I18n.t("SettingMenuHelper.QuitGameTitle"),
              'content_message': shell.I18n.t("SettingMenuHelper.QuitGameMessage"),
              'actions': [{
                'title': shell.I18n.t("SettingMenuHelper.Cancel"),
                'handler': function () {
                  D.setIsControllerPresenting(false);
                }
              }, {
                'title': shell.I18n.t("SettingMenuHelper.Quit"),
                'handler': function () {
                  {
                    D.setIsControllerPresenting(false), W.T_ && W.T_();
                  }
                },
                'auto_dismiss': false
              }]
            };
            D.setIsControllerPresenting(true), N.showDialog(J), this.playMenuIconPressSound();
          }
        }
      }, w.prototype.isBalanceHitTargetInAutoSpinMode = function (W, D) {
        var J = false,
          E = this.singleWinAmount,
          Q0 = this.balanceAmountMoreThan,
          Q1 = this.balanceAmountLessThan,
          Q2 = this.Fv;
        return E && W > E && (J = true), Q0 && D >= Q2 + Q0 && (J = true), Q1 && D <= Q2 - Q1 && (J = true), J;
      }, w.prototype.stopSpinOptionButtonAnim = function () {
        this.C_ && this.C_.stopAutoSpinAnim();
      }, w.prototype.playSpinOptionButtonAnim = function () {
        this.C_ && this.C_.playAutoSpinAnim();
      }, Object.defineProperty(w.prototype, "autoSpinCallback", {
        'set': function (W) {
          {
            var D = this;
            this.L_ = function (J) {
              {
                var E = J.payload;
                D.autoSpinCount = E.autoSpinCount, D.singleWinAmount = E.singleWinAmount, D.balanceAmountMoreThan = E.balanceAmountMoreThan, D.balanceAmountLessThan = E.balanceAmountLessThan, D.Fv = E.autoSpinStartBalance, D.autoSpinCount > 0 && D.playSpinOptionButtonAnim(), W && W();
              }
            };
          }
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "turboSpinCallback", {
        'set': function (W) {
          this.P_ && (this.D_ && this.D_(), this.P_ = undefined), this.P_ = function () {
            W && W();
          }, this.D_ = M.observeCallback(this, "turboSpinOn")(this.P_);
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "additionalBetCalculationCallback", {
        'set': function (W) {
          this.wv.emit("SlotMenu.UpdateAdditionalBetCalculation", W), this.U_ = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "audioConfigure", {
        'get': function () {
          {
            return this.Nv;
          }
        },
        'set': function (W) {
          this.Nv = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "showChangeBetReminder", {
        'set': function (W) {
          this.Wv = W, this.wv.emit("SlotMenu.SetShowChangeBetReminder", W);
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "showForfeitProgressReminder", {
        'set': function (W) {
          this.Jv = W, this.wv.emit("SlotMenu.SetShowForfeitProgressReminder", W);
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "manualUpdateBetFactorCallBack", {
        'set': function (W) {
          var D = this;
          this.x_ = function (J, E) {
            {
              D.checkSelectedValue(M.toDecimalWithExp(J * E * D.betLineValue, 2)), W(J, E);
            }
          };
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "finishBetPickCallback", {
        'set': function (W) {
          this.F_ = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "cancelBetPanelCallback", {
        'set': function (W) {
          this.W_ = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.updateBetLabelCallback = function (W) {
        this.J_ = W;
      }, w.prototype.updateBetValues = function (W) {
        undefined === W && (W = 0), this.U_ || (this.U_ = function (E, Q0, Q1) {
          return E * Q0 * Q1;
        }, this.wv.emit("SlotMenu.UpdateAdditionalBetCalculation", this.U_)), this.V_ = M.toFixed(this.betLineValue * this.betLevelValue * this.betSizeValue, 2);
        var D = this.U_(this.betLineValue, this.betLevelValue, this.betSizeValue),
          J = M.formatCurrency(D);
        this.J_ && this.J_(J, W), this.z_({
          'totalBet': M.toDecimalWithExp(D, 2)
        });
      }, w.prototype.K_ = function () {
        var W = this.betSizeList,
          D = this.betSizeValue;
        return !(!W || !cc.js.isNumber(D)) && -1 !== W.indexOf(D);
      }, w.prototype.q_ = function () {
        var W = this.betLevelList,
          D = this.betLevelValue;
        return !(!W || !cc.js.isNumber(D)) && -1 !== W.indexOf(D);
      }, w.prototype.Q_ = function () {
        {
          var W = M.toDecimalWithExp(this.betLineValue * this.betLevelValue * this.betSizeValue, 2);
          return this.Y_ && W < this.Y_ && (!this.Z_ || W > this.Z_) && W.toFixed(2) !== this.X_;
        }
      }, w.prototype.reevaluateBet = function () {
        {
          return !(this.K_() && this.q_() && !this.Q_() || (this.tm(), this.checkSelectedValue(M.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)), this.im && this.im(this.betSizeValue, this.betLevelValue), 0));
        }
      }, w.prototype.showInvalidBetDialog = function () {
        {
          var W = this,
            D = {
              'title_message': undefined,
              'content_message': shell.I18n.t("SettingMenuHelper.ReevaluateBet"),
              'actions': [{
                'title': shell.I18n.t("SettingMenuHelper.Select"),
                'handler': function () {
                  W.openBetMenu();
                }
              }]
            };
          N.showDialog(D);
        }
      }, Object.defineProperty(w.prototype, "betModifierUpdateCallback", {
        'get': function () {
          return this.sm;
        },
        'set': function (W) {
          this.sm = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "reevaluateBetCallback", {
        'set': function (W) {
          this.im = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.G_ = function () {
        var W = this.settingMenuController;
        W.isSettingBetReminderBoardShowed() && (this.V_ = this.em, this.betSizeValue = this.nm, this.betLevelValue = this.om, this.cm = this.hm, this.updateBetValues(), this.checkSelectedValue(this.em), W.hideBetReminderBoard(), this.rm && this.rm());
      }, w.prototype.setBetReminderCancelAndConfirmCallback = function (W, D) {
        var J = this,
          E = this.settingMenuController;
        this.rm = W, E.setBetReminderCancelAndConfirmCallback(this.G_.bind(this), function () {
          J.nm !== J.betSizeValue || J.om !== J.betLevelValue ? (E.hideBetReminderBoard(), D && D(J.betSizeValue, J.betLevelValue), J.wv.emit("SlotMenu.ChangeBet", J.V_)) : J.G_();
        });
      }, w.prototype.setBetReminderTriggerCallback = function (W) {
        this.am = W;
      }, w.prototype.preCalculateCombination = function () {
        var W = this.betSizeList || [],
          D = this.betLevelList || [],
          J = this.betLineValue || 0;
        if (0 !== W.length && 0 !== D.length && 0 !== J) {
          {
            var E,
              Q0 = this.Y_,
              Q1 = this.Z_,
              Q2 = [];
            if (this.X_ = undefined, Q0) {
              Q1 && (E = []), Q7 = 0;
              for (var Q3 = W.length; Q7 < Q3; Q7++) for (var Q4 = 0, Q5 = D.length; Q4 < Q5; Q4++) {
                {
                  var Q6 = M.toDecimalWithExp(W[Q7] * D[Q4] * J, 2);
                  if (Q6 >= Q0) {
                    undefined === this.X_ && (this.X_ = M.toFixed(Q6, 2)), Q2[Q7] = D.slice(Q4);
                    break;
                  }
                  Q1 && (Q1 < Q0 && Q6 <= Q1 || Q1 >= Q0 && Q6 < Q0) && (E[Q7] || (E[Q7] = []), E[Q7].push(D[Q4])), Q4 === Q5 - 1 && (Q2[Q7] = []);
                }
              }
              if (undefined === this.X_) return this.X_ = M.toFixed(W[0] * D[0] * J, 2), this.um = Object.create(null), void (this.um[this.X_] = {
                'betSize': W[0],
                'betLevel': D[0]
              });
            } else {
              for (var Q7 = 0; Q7 < W.length; Q7++) Q2[Q7] = D;
              this.X_ = M.toFixed(W[0] * D[0] * J, 2);
            }
            var Q8 = function (Qn, Qc) {
                if (Qn < 2) return Qc.slice();
                var Qj = Qc.length;
                if (Qj < (Qn > 2 ? 4 : 6)) return Qc.slice();
                var Qi = Qc[Qc.length - 1],
                  QI = [Qi];
                2 === Qn && QI.unshift(Qi - (Math.round(Qj / 5) || 1)), QI.unshift(Qi - (Math.floor(Qj / 2) || 1)), 2 === Qn && QI.unshift(QI[0] - (Math.floor(Qj / 5) || 1));
                var Qm = Qc[0];
                return QI.unshift(Qm + (Math.floor(Qj / 10) || 1)), QI.unshift(Qm), QI;
              },
              Q9 = Object.create(null);
            for (Q7 = 0, Q3 = W.length; Q7 < Q3; Q7++) {
              var QQ = Q8(Q7, Q2[Q7]);
              if (E && E[Q7] && (QQ = QQ.concat(E[Q7])), 0 !== QQ.length) for (Q4 = 0, Q5 = D.length; Q4 < Q5; Q4++) if (QQ.includes(D[Q4])) {
                var QF = M.toFixed(W[Q7] * D[Q4] * J, 2);
                var QR = {};
                QR.betSize = W[Q7];
                QR.betLevel = D[Q4];
                Q9[QF] || (Q9[QF] = QR);
              }
            }
            this.um = Q9;
          }
        }
      }, w.prototype.tm = function () {
        {
          var W = this.um[this.X_];
          this.betSizeValue = W.betSize, this.betLevelValue = W.betLevel;
        }
      }, w.prototype.checkSelectedValue = function (W) {
        var D,
          J,
          E = +W;
        if (this.Y_ && E < this.Y_ && (!this.Z_ || E > this.Z_) && (E = this.Y_), W = M.toFixed(E, 2), !this.um) throw Error("SettingMenuHelper :: checkSelectedValue : bet combination did not generate due to size or level empty");
        var Q0 = Object.keys(this.um).sort(function (Q2, Q3) {
            var Q4 = parseFloat(Q2),
              Q5 = parseFloat(Q3);
            return Q4 < Q5 ? -1 : Q4 > Q5 ? 1 : 0;
          }),
          Q1 = Q0.indexOf(W);
        -1 === Q1 ? (this.V_ = W, this.cm = undefined, this.p_.updateBetModifierColor(1), this.S_.updateBetModifierColor(1, Q0.length - 1), null === (D = this.H_) || undefined === D || D.updateBetModifierColor(1, Q0.length - 1)) : (this.cm = Q1, this.p_.updateBetModifierColor(Q1), this.S_.updateBetModifierColor(Q1, Q0.length - 1), null === (J = this.H_) || undefined === J || J.updateBetModifierColor(Q1, Q0.length - 1));
      }, w.prototype.lm = function (W) {
        var D,
          J = this,
          E = this.settingMenuController;
        this.Wv || this.Jv ? E.isSettingBetReminderBoardShowed() || (this.em = this.V_, this.nm = this.betSizeValue, this.om = this.betLevelValue, this.hm = this.cm, W.selectedBet !== this.hm && (null === (D = this.wv) || undefined === D || D.emit("SlotMenu.GetShowChangeBetReminder", undefined, function (Q0) {
          {
            var Q1,
              Q2 = '';
            Q0.response ? (Q2 = shell.I18n.t("BetOptions.BetChangeProgressRemind"), E.setBetChangeReminderLabel(Q2)) : null === (Q1 = J.wv) || undefined === Q1 || Q1.emit("SlotMenu.GetShowForfeitProgressReminder", undefined, function (Q3) {
              Q3.response && (Q2 = shell.I18n.t("BetOptions.BetChangeForfeitProgressRemind"), E.setBetChangeReminderLabel(Q2));
            }), E.showBetReminderBoard(M.formatCurrency(parseFloat(J.em)));
          }
        }), this.am && this.am())) : this.fm(parseFloat(W.selectedBetAmount));
      }, w.prototype.dm = function (W, D) {
        var J = RegExp('<' + W + " style=['\"]color:\\s*([^'\"]+)['\"]>", 'gi');
        return D.replace(J, "<color=$1>").replace('</' + W + '>', "</color>");
      }, w.prototype.vm = function (W) {
        if (this.Y_ && this.Z_) if (W < this.Y_ && W <= this.Z_) {
          {
            var D = this.dm("span", shell.I18n.t("FeatureBuy.BetForFeatureBuyOnly")),
              J = this.dm("span", shell.I18n.t("FeatureBuy.BetSuggestion", {
                'amount': M.formatCurrency(this.Y_)
              }));
            this.settingMenuController.showFeatureBuyToast(D + '\x0a' + J, 2);
          }
        } else this.settingMenuController.hideFeatureBuyToast();
      }, w.prototype.increaseBet = function () {
        var W,
          D = this.settingMenuController;
        if (!D.isSwitchingMenuLayer()) {
          if (!this.um) throw Error("SettingMenuHelper :: increaseBet : bet combination did not generate");
          var J = Object.keys(this.um).sort(function (Q1, Q2) {
              var Q3 = parseFloat(Q1),
                Q4 = parseFloat(Q2);
              return Q3 < Q4 ? -1 : Q3 > Q4 ? 1 : 0;
            }),
            E = this.S_.increaseBet(J, this.cm, this.V_);
          this.lm(E), this.vm(+E.selectedBetAmount), this.p_.updateBetModifierColor(E.selectedBet), this.S_.updateBetModifierColor(E.selectedBet, J.length - 1), null === (W = this.H_) || undefined === W || W.updateBetModifierColor(E.selectedBet, J.length - 1);
          var Q0 = this.cm = E.selectedBet;
          this.V_ = E.selectedBetAmount, this.betSizeValue = this.um[J[Q0]].betSize, this.betLevelValue = this.um[J[Q0]].betLevel, this.updateBetValues(z(Q0, this.um)), this.Wv || this.Jv || this.sm && this.sm(this.betSizeValue, this.betLevelValue), P() && D.hideMoreMenuLayer();
        }
      }, w.prototype.decreaseBet = function () {
        {
          var W,
            D = this.settingMenuController;
          if (!D.isSwitchingMenuLayer()) {
            if (!this.um) throw Error("SettingMenuHelper :: decreaseBet : bet combination did not generate");
            var J = Object.keys(this.um).sort(function (Q1, Q2) {
                var Q3 = parseFloat(Q1),
                  Q4 = parseFloat(Q2);
                return Q3 < Q4 ? -1 : Q3 > Q4 ? 1 : 0;
              }),
              E = this.p_.decreaseBet(J, this.cm, this.V_);
            this.lm(E), this.vm(+E.selectedBetAmount), this.p_.updateBetModifierColor(E.selectedBet), this.S_.updateBetModifierColor(E.selectedBet, J.length - 1), null === (W = this.H_) || undefined === W || W.updateBetModifierColor(E.selectedBet, J.length - 1);
            var Q0 = this.cm = E.selectedBet;
            this.V_ = E.selectedBetAmount, this.betSizeValue = this.um[J[Q0]].betSize, this.betLevelValue = this.um[J[Q0]].betLevel, this.updateBetValues(z(Q0, this.um)), this.Wv || this.Jv || this.sm && this.sm(this.betSizeValue, this.betLevelValue), P() && D.hideMoreMenuLayer();
          }
        }
      }, w.prototype.maxBet = function () {
        {
          var W = this.settingMenuController;
          if (!W.isSwitchingMenuLayer()) {
            {
              if (!this.um) throw Error("SettingMenuHelper :: maxBet : bet combination did not generate");
              if (!this.H_) throw Error("SettingMenuHelper :: maxBet : max bet button cannot be found");
              var D = Object.keys(this.um).sort(function (Q0, Q1) {
                  var Q2 = parseFloat(Q0),
                    Q3 = parseFloat(Q1);
                  return Q2 < Q3 ? -1 : Q2 > Q3 ? 1 : 0;
                }),
                J = this.H_.maxBet(D);
              this.lm(J), this.p_.updateBetModifierColor(J.selectedBet), this.S_.updateBetModifierColor(J.selectedBet, D.length - 1), this.H_.updateBetModifierColor(J.selectedBet, D.length - 1);
              var E = this.cm = J.selectedBet;
              this.V_ = J.selectedBetAmount, this.betSizeValue = this.um[D[E]].betSize, this.betLevelValue = this.um[D[E]].betLevel, this.updateBetValues(z(E, this.um)), this.Wv || this.Jv || this.sm && this.sm(this.betSizeValue, this.betLevelValue), P() && W.hideMoreMenuLayer();
            }
          }
        }
      }, Object.defineProperty(w.prototype, "changeSoundVolume", {
        'set': function (W) {
          {
            var D = this;
            this._m && (this.mm && this.mm(), this._m = undefined), this._m = function () {
              D.bm(D.soundOn), W && W(D.soundOn);
            }, this.mm = M.observeCallback(this, "soundOn")(this._m);
          }
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.setBalance = function (W, D) {
        var J = this;
        undefined === D && (D = true);
        var E = this.pm(W);
        this.Sm(function (Q0) {
          E && J.playWalletCountingAboveSfx();
          var Q1 = M.toDecimalWithExp(Q0 && Q0.balance || W, 2);
          J.settingInfoFooter.updateBalance(undefined, Q1, D), J.z_({
            'balance': Q1
          });
        });
      }, w.prototype.setWinAmount = function (W, D, J) {
        undefined === D && (D = true), undefined === J && (J = true), this.settingInfoFooter.updateWinAmount(W, D, J), this.wv.emit("SlotMenu.UpdateWinAmount", W), this.z_({
          'totalWin': M.toDecimalWithExp(W, 2)
        });
      }, w.prototype.setAllButtonsInteractable = function (W, D) {
        {
          undefined === D && (D = true), this.zv.setAllButtonsInteractable(W), W && this.checkSelectedValue(M.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2));
        }
      }, w.prototype.setLockAccess = function (W, D) {
        this.zv.setLockAccess(W, D);
      }, w.prototype.isButtonLocked = function (W) {
        return this.zv.isButtonLocked(W);
      }, w.prototype.setButtonInteractableFlag = function (W, D) {
        undefined === D && (D = false), this.zv.setButtonInteractableFlag(W, D);
      }, w.prototype.setButtonInteractable = function (W) {
        this.zv.setButtonInteractable(W);
      }, w.prototype.setLockAccessAutoSpinPanel = function (W) {
        this.setLockAccess(X.SPIN_OPTIONS, W);
      }, w.prototype.setLockAccessBetPanel = function (W) {
        this.setLockAccess(X.BET_OPTIONS, W);
      }, w.prototype.setLockMoreMenuButton = function (W) {
        this.setLockAccess(X.MORE_MENU, W);
      }, w.prototype.setHidden = function (W) {
        this.Ev = W, this.settingMenuController.setHidden(W);
      }, w.prototype.isIdle = function () {
        {
          return this.settingMenuController.isIdle();
        }
      }, Object.defineProperty(w.prototype, "isShowBlackTintBg", {
        'set': function (W) {
          this.Vv = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.activateWalletNotify = function (W) {
        this.settingInfoFooter.activateWalletNotify(W);
      }, w.prototype.addSettingInfoFooter = function (W) {
        this.c_ = W, this.zv.setupOtherButtonInList(X.WALLET, W.interactableWalletButton.bind(W)), W.updateLayout(G()), W.setWinIcon(this.settingInfoFooterLocaleWinIcon), W.setOpenWalletMenuCallback(this.N_.bind(this)), W.showBackground(false), W.changeHolder(this.settingMenuController.getSettingInfoFooterFrontHolder()), this.zv.setupOtherButtonInList(X.BET_OPTIONS, W.interactableBetOptionsButton.bind(W)), W.setOpenBetOptionsMenuCallback(this.E_.bind(this)), this.updateBetLabelCallback(W.updateBetAmount.bind(W)), this.zv.setupOtherButtonInList(X.WIN, W.interactableWinButton.bind(W)), W.setOpenWinMenuCallback(this.B_.bind(this, true)), W.boot();
      }, w.prototype.getSettingInfoFooter = function () {
        return this.settingInfoFooter;
      }, Object.defineProperty(w.prototype, "settingInfoFooter", {
        'get': function () {
          {
            if (!this.c_) throw Error("SettingMenuHelper :: settingInfoFooter : Cannot find settingInfoFooter. Please setup setting info footer first! (addSettingInfoFooter)");
            return this.c_;
          }
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.showSettingInfoFooterBackground = function (W) {
        this.settingInfoFooter.showBackground(W);
      }, w.prototype.setFreeGameMode = function (W) {
        var D, J;
        this.isFreeGameMode = W, W ? (this.setLockAccess(X.BET_OPTIONS, true), this.S_.buttonActivate(false), this.p_.buttonActivate(false), null === (D = this.H_) || undefined === D || D.buttonActivate(false)) : (this.setLockAccess(X.BET_OPTIONS, false), this.S_.buttonActivate(true), this.p_.buttonActivate(true), null === (J = this.H_) || undefined === J || J.buttonActivate(true), this.checkSelectedValue(M.toDecimalWithExp(this.betSizeValue * this.betLevelValue * this.betLineValue, 2)));
      }, w.prototype.getCurrentBalance = function () {
        return this.settingInfoFooter.currentBalance;
      }, w.prototype.additionalBetCalculation = function () {
        if (!this.U_) throw Error("SettingMenuHelper :: additionalBetCalculation : Please set calculation callback via additionalBetCalculationCallback setter first!");
        return this.U_(this.betLineValue, this.betLevelValue, this.betSizeValue);
      }, Object.defineProperty(w.prototype, "betLineValue", {
        'get': function () {
          return this.jv;
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetBetLineValue", W), this.jv = W, this.preCalculateCombination();
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "betSizeList", {
        'get': function () {
          return this.Lv;
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetBetSizeList", W), this.Lv = W, this.preCalculateCombination();
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "betSizeValue", {
        'get': function () {
          {
            return this.vt;
          }
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetBetSizeValue", W), this.vt = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "minimumBetAmount", {
        'get': function () {
          {
            return this.Y_;
          }
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetMinimumBetAmount", W), this.Y_ = W, this.preCalculateCombination();
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "featureBuyThreshold", {
        'get': function () {
          return this.Z_;
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetFeatureBuyThreshold", W), this.Z_ = W, this.preCalculateCombination();
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "betLevelList", {
        'get': function () {
          return this.Pv;
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetBetLevelList", W), this.Pv = W, this.preCalculateCombination();
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "betLevelValue", {
        'get': function () {
          return this.ft;
        },
        'set': function (W) {
          this.wv.emit("SlotMenu.SetBetLevelValue", W), this.ft = W;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "baseBet", {
        'get': function () {
          return this.Dv;
        },
        'set': function (W) {
          this.Dv = W, this.wv.emit("SlotMenu.SetBaseBet", W);
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(w.prototype, "soundEnable", {
        'get': function () {
          {
            return Y.soundOn;
          }
        },
        'set': function (W) {
          this.soundOn = W, Y.soundOn = W;
        },
        'enumerable': false,
        'configurable': true
      }), w.prototype.playWalletCountingAboveSfx = function () {
        {
          var W = this.walletCountingAbove;
          W && W.play();
        }
      }, w.prototype.playMenuIconPressSound = function () {
        var W = this.menuIconPress;
        W && W.play();
      }, w.prototype.playListItemClickSound = function () {
        {
          var W = this.listItemClick;
          W && W.play();
        }
      }, w.prototype.playSliderEffectSound = function () {
        var W = this.sliderEffect;
        W && W.play();
      }, w.prototype.Xv = function (W) {
        for (var D in this.Uv) this[D] = new W({
          'preload': false,
          'src': M.getCocosMajor() >= 4 ? "/lib/setting_menu/" + this.Uv[D] : cc.url.raw("/resources/lib/setting_menu/" + this.Uv[D] + ".mp3")
        });
      }, w.prototype.$v = function (W) {
        {
          var D = this;
          if (this.gm) {
            {
              var J = this.gm;
              this.gm = undefined, J && J();
            }
          }
          this.gm = M.sequenceCallback(function (E) {
            {
              D.Cm("menuIconPress", function (Q0) {
                Q0 ? W(Q0) : E();
              });
            }
          }, function (E) {
            D.Cm("listItemClick", function (Q0) {
              Q0 ? W(Q0) : E();
            });
          }, function (E) {
            D.Cm("sliderEffect", function (Q0) {
              {
                Q0 ? W(Q0) : E();
              }
            });
          }, function (E) {
            D.Cm("walletCountingAbove", function (Q0) {
              Q0 ? W(Q0) : E();
            });
          })(W);
        }
      }, w.prototype.Cm = function (W, D) {
        {
          var J = this;
          if (this.xv[W]) D && D();else {
            {
              var E = this[W],
                Q0 = function () {
                  E.off("loaderror", Q1), J.xv[W] = true, D && D();
                },
                Q1 = function (Q2, Q3) {
                  E.off("load", Q0), D && D(Q3);
                };
              E.once("load", Q0), E.once("loaderror", Q1), E.load();
            }
          }
        }
      }, w.prototype.reset = function () {
        var W = {};
        W.sliderEffect = false;
        W.listItemClick = false;
        W.menuIconPress = false;
        this.a_ && this.a_(), this.D_ && this.D_(), this.m_ && this.m_(), this.mm && this.mm(), this.l_ && this.l_(), this.J_ = undefined, this.L_ = undefined, this.P_ = undefined, this._m = undefined, this.I_ = undefined, this.d_ = undefined, this.r_ = undefined, this.zv = new V.default(), this.gm = undefined, this.xv = W;
      }, w.prototype.j_ = function (W) {
        this.wv.emit("Wallet.ShowWalletList", W);
      }, w.prototype.z_ = function (W) {
        this.wv.emit("Game.TransactionInfoChanged", W);
      }, w.prototype.bm = function (W) {
        {
          var D = W ? 'On' : "Off";
          this.wv.emit("Game.AudioStateChanged", D);
        }
      }, w.prototype.qv = function () {
        var W = this;
        O.setGamePlayUIBlockEventCallback("settingmenu", function (D) {
          {
            W.settingMenuController.setMenuUIBlock(D);
          }
        }), x && (this.wv.on("Wallet.Hidden", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        }), this.wv.on("Wallet.Shown", function () {
          W.G_(), W.hideMoreMenuLayer(), W.settingMenuController.setIsControllerPresenting(true), W.activateWalletNotify(false);
        }), this.wv.on("SlotMenu.StartAutoSpin", function (D) {
          W.L_ && W.L_(D);
        }, this)), L && (this.wv.on("SlotMenu.HiddenBetOptions", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        }), this.wv.on("SlotMenu.HiddenSpinOptions", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        }), this.wv.on("Game.ShowOptions", this.openBetMenu, this), this.wv.on("Game.HideOptions", this.Mm, this), this.wv.on("SlotMenu.ManualUpdateBetFactorCallback", function (D) {
          var J = D.payload,
            E = J.betSize,
            Q0 = J.betLevel;
          W.x_ && W.x_(E, Q0);
        }, this), this.wv.on("SlotMenu.CancelBetPanelCallback", function () {
          W.W_ && W.W_();
        }, this), this.wv.on("SlotMenu.FinishBetPickCallback", function (D) {
          {
            var J = D.payload,
              E = J.betSize,
              Q0 = J.betLevel;
            W.F_ && W.F_(E, Q0);
          }
        }, this)), U && (this.wv.on("Paytable.Hide", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        }), this.wv.on("GameRules.Hide", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        })), H && this.wv.on("History.Close", function () {
          W.settingMenuController.setIsControllerPresenting(false);
        }), this.wv.on("Game.OnAudio", function () {
          W.soundEnable = true;
        }), this.wv.on("Game.OffAudio", function () {
          {
            W.soundEnable = false;
          }
        }), this.wv.on("Game.RequestAudioState", function (D) {
          true === W.soundEnable ? D.response = 'On' : D.response = "Off";
        }), this.wv.on("SettingMenuHelper.GetSettingMenuType", function (D) {
          D.response = T.NEW;
        }), this.wv.on("Game.GetSettingMenuType", function (D) {
          D.response = T.NEW;
        }), this.wv.on("Game.ReplayInitiated", function () {
          {
            var D = W.settingMenuController;
            if (P() ? D.muteIcon.active = false : W.soundOn ? D.muteIcon.active = false : D.muteIcon.active = true, !D.isControllerPresenting() && !D.isSwitchingMenuLayer()) {
              {
                D.hideMoreMenuLayer();
                var J = W.I_;
                J && J(W.Ev, true);
              }
            }
          }
        });
      }, w.prototype.Qv = function () {
        var W = this;
        this.wv.on("Game.TransactionStateComplete", function (D) {
          if (W.ym) {
            {
              var J = D.payload.to;
              "setup" === J && W.Kv && (W.Kv = false), "action" !== J || W.Kv || (W.Kv = true);
            }
          }
        }), this.wv.on("Game.TransactionInfoUpdated", function (D) {
          {
            W.ym && (W.wm = D.payload.tbb);
          }
        });
      }, w.prototype.Yv = function () {
        var W = this;
        this.wv.emit("Game.RequestSession", undefined, function (D) {
          var J = D.response;
          if (!J || !J.gameId) throw Error("SettingMenuHelper:: Game.RequestSession return invalid data");
          W.b_ = J.operatorJurisdictionConfig.turboSpinEnable, W.g_ = J.operatorJurisdictionConfig.autoPlayConfig, W.ym = J.operatorJurisdictionConfig.hideNonProfitEffect, W.Gv = J.operatorJurisdictionConfig.backButton;
        }), this.wv.off("Game.Initialized", this.Yv.bind(this));
      }, w.prototype.k_ = function (W) {
        W ? this.wv.on("Game.HideOptions", this.Mm, this) : this.wv.off("Game.HideOptions", this.Mm, this);
      }, w.prototype.Mm = function () {
        this.k_(false), this.wv.emit("SlotMenu.HideBetOptions");
      }, w.prototype.Sm = function (W) {
        W && this.wv.emit("Game.RequestTransactionInfo", undefined, function (D) {
          W(D.response);
        });
      }, w.prototype.R_ = function (W) {
        var D = {};
        D.actionName = W;
        this.wv.emit("Analytics.Event", D);
      }, w.prototype.fm = function (W) {
        {
          var D = this;
          this.Bm ? this.Bm() : this.Am = parseFloat(this.V_), this.Bm = M.delayCallback(0.6)(function () {
            {
              W !== D.Am && D.wv.emit("SlotMenu.ChangeBet", W), D.Bm = undefined, D.Am = undefined;
            }
          });
        }
      }, w.prototype.changeSoundButtonHolder = function () {
        if (P()) {
          var W = this.settingInfoFooter;
          W.landscapeSoundButtonHolder && this.v_ && (this.v_.parent = W.landscapeSoundButtonHolder, this.b_ || (this.v_.getComponent("GenericSettingButton").sprite.node.active = true, this.v_.getComponent("GenericSettingButton").largeSprite.node.active = false));
        }
      }, w.prototype.returnSoundButtonHolder = function () {
        P() && this.__ && this.v_ && (this.v_.parent = this.__, this.b_ || (this.v_.getComponent("GenericSettingButton").largeSprite.node.active = true, this.v_.getComponent("GenericSettingButton").sprite.node.active = false));
      }, w.prototype.getSettingMenuButtonNode = function (W) {
        {
          return this.zv.getButtonNode(W);
        }
      }, w.prototype.pm = function (W) {
        var D = this.settingInfoFooter;
        if (this.Kv && this.ym) {
          var J = D.currentBalance,
            E = +M.toFixed(W - D.currentBalance, 2);
          if (this.wm && W > J && E > this.wm) return true;
        }
        return false;
      }, __decorate([k("SettingMenuHelper")], w);
    }(cc.Object))();
    exports.settingMenuHelper = y, cc._RF.pop();
  }
  function z(A, w) {
    return (A + 1) / Object.keys(w).length;
  }
  function P() {
    return "land" === shell.environment.getOrientationMode();
  }
  function G() {
    return shell.isRTLLanguage && shell.isRTLLanguage();
  }
}
module.exports = SettingMenuHelper;
