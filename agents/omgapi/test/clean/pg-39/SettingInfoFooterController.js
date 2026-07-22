// module: SettingInfoFooterController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SettingInfoFooterController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "06e65rpYzVNHbDR0e2vljl/", "SettingInfoFooterController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x), exports.SettingInfoFooterController = exports.ICON_STATE = exports.ICON_FOOTER_TYPE = exports.WALLET_FOOTER_TYPE = undefined;
    var C,
      H,
      V = require("Utils"),
      M = require("UIAppearanceHelper"),
      q = require("BVFramework"),
      m = require("Preference").getPreference("setting_menu"),
      D = cc._decorator,
      W = D.ccclass,
      k = D.property;
    (function (L) {
      L[L.CASH = 1] = "CASH", L[L.FREE_GAME = 2] = "FREE_GAME", L[L.BONUS = 3] = "BONUS", L[L.POINT = 4] = "POINT", L[L.CASH_BONUS = 5] = "CASH_BONUS";
    })(C = exports.WALLET_FOOTER_TYPE || (exports.WALLET_FOOTER_TYPE = {})), function (L) {
      L[L.SPIN = 2] = "SPIN", L[L.ROLL_OVER = 3] = "ROLL_OVER";
    }(exports.ICON_FOOTER_TYPE || (exports.ICON_FOOTER_TYPE = {})), function (L) {
      L[L.DEFAULT = 0] = "DEFAULT", L[L.SOUND_ON = 1] = "SOUND_ON", L[L.SOUND_OFF = 2] = "SOUND_OFF", L[L.OFFER_SOUND_ON = 3] = "OFFER_SOUND_ON", L[L.OFFER_SOUND_OFF = 4] = "OFFER_SOUND_OFF";
    }(H = exports.ICON_STATE || (exports.ICON_STATE = {}));
    var z = function (L) {
      function v() {
        var b = null !== L && L.apply(this, arguments) || this;
        return b.background = undefined, b.balanceNode = undefined, b.balanceValueHolder = undefined, b.balanceValueNode = undefined, b.leftSlotNode = undefined, b.leftSlotNodeBg = undefined, b.leftSlotNodeHover = undefined, b.midSlotNode = undefined, b.midSlotNodeBg = undefined, b.midSlotNodeHover = undefined, b.rightSlotNode = undefined, b.rightSlotNodeBg = undefined, b.rightSlotNodeHover = undefined, b.winValueNode = undefined, b.winHolderNode = undefined, b.winCashIconNode = undefined, b.winCashIconMask = undefined, b.winButton = undefined, b.midSlotElementHolder = undefined, b.pgIconHolder = undefined, b.pgIconBgLeft = undefined, b.pgIconBgRight = undefined, b.pgIconBgMid = undefined, b.pgIcon = undefined, b.pgIconOnSpriteFrame = undefined, b.pgIconOffSpriteFrame = undefined, b.freeGamesNode = undefined, b.specialIcon = undefined, b.freeSpinValue = undefined, b.walletButton = undefined, b.walletButtonSensor = undefined, b.walletNavigateIcon = [], b.walletNotificationIcon = undefined, b.menuIcon = undefined, b.muteIcon = [], b.betAmountHolder = undefined, b.betAmountLabel = undefined, b.betOptionsButton = undefined, b.betOptionsIcon = undefined, b.walletIconNode = [], b.walletIconSprite = [], b.userProfitMenuOnAudioSpriteFrame = undefined, b.userProfitMenuOffAudioSpriteFrame = undefined, b.userProfitSingleIconOnAudioSpriteFrame = undefined, b.userProfitSingleIconOffAudioSpriteFrame = undefined, b.userProfitMenuOnAudioDisableSpriteFrame = undefined, b.userProfitMenuOffAudioDisableSpriteFrame = undefined, b.userProfitSingleIconOnAudioDisableSpriteFrame = undefined, b.userProfitSingleIconOffAudioDisableSpriteFrame = undefined, b.freeGameSpriteFrame = [], b.freeGameDisableSpriteFrame = [], b.bonusGameSpriteFrame = [], b.bonusGameDisableSpriteFrame = [], b.rewardFooterTypeSFList = [], b.maxBetButtonHolder = undefined, b.languageSensitiveLayoutList = [], b.rightSpecialInfoHolderNode = undefined, b.leftGradientBg = undefined, b.leftSpecialInfoHolderNode = undefined, b.leftSpecialInfoLabel = undefined, b.leftSpecialInfoLayout = undefined, b.leftSpecialInfoTickHodler = undefined, b.leftSpecialInfoTickCircleOutline = undefined, b.leftSpecialInfoTickAnimation = undefined, b.missonBarNode = undefined, b.bonusWalletPrizeNode = undefined, b.bonusWalletIcon = undefined, b.rolloverPrizeValueNode = undefined, b.rolloverOnGoingValueNode = undefined, b.totalRolloverValueLabel = undefined, b.progressBarCircleMask = undefined, b.progressBarNode = undefined, b.progressBarShine = undefined, b.rightSpecialInfoTickHodler = undefined, b.rightSpecialInfoTickCircleOutline = undefined, b.rightSpecialInfoTickAnimation = undefined, b.rightSpecialInfoTextHolder = undefined, b.df = false, b.vf = false, b._f = false, b.bf = C.CASH, b.currentBalance = 0, b.rolloverPrizeBalance = 0, b.rolloverOnGoingBalance = 0, b.previousRolloverPrizeBalance = 0, b.previousRolloverOnGoingBalance = 0, b.barProgress = 0, b.targetBalance = 0, b.winBalance = 0, b.walletNotify = false, b.lockWalletButton = false, b.lockBetOptionsButton = false, b.userProfitSpriteFrame = [], b.userProfitDisableSpriteFrame = [], b.mf = 0, b.Sf = undefined, b.gf = 0, b.Cf = true, b;
      }
      return __extends(v, L), v.prototype.onLoad = function () {
        this.yf(), this.betAmountHolder.on(cc.Node.EventType.SIZE_CHANGED, this.yf.bind(this)), this.Mf(), this.balanceValueHolder.on(cc.Node.EventType.SIZE_CHANGED, this.Mf.bind(this)), this.balanceValueNode.on(cc.Node.EventType.SIZE_CHANGED, this.Mf.bind(this)), this.wf(), this.leftGradientBg.on(cc.Node.EventType.SIZE_CHANGED, this.wf.bind(this)), this.activateWalletNotify(false), this.leftSlotNodeHover.opacity = 0, this.midSlotNodeHover.opacity = 0, this.rightSlotNodeHover.opacity = 0;
      }, v.prototype.wf = function () {
        this.leftSpecialInfoLabel && (this.leftSpecialInfoLayout.node.setPosition(this.leftGradientBg.width / 2 - 188, this.leftSpecialInfoLayout.node.position.y), this.leftSpecialInfoLayout.node.scale = this.leftSpecialInfoLayout.node.width / this.leftGradientBg.width <= 1 ? 1 : 1 / (this.leftSpecialInfoLayout.node.width / this.leftGradientBg.width));
      }, v.prototype.Mf = function () {
        this.balanceValueHolder && this.balanceValueNode && (this.balanceValueNode.setPosition(this.balanceValueHolder.width / 2, 0), this.balanceValueNode.scale = this.balanceValueNode.width / this.balanceValueHolder.width <= 1 ? 1 : 1 / (this.balanceValueNode.width / this.balanceValueHolder.width));
      }, v.prototype.yf = function () {
        if (this.betAmountHolder) {
          this.betAmountLabel.node.setPosition(-this.betAmountHolder.width / 2 + 120, 0);
          var b = this.betAmountLabel.node;
          b.scale = b.width / this.betAmountHolder.width <= 1 ? 1 : 1 / (b.width / this.betAmountHolder.width);
        }
      }, v.prototype.updateBetAmount = function (b) {
        var U = this;
        if (isNaN(b)) throw Error("SettingInfoFooterController :: updateBetAmount : bet amount invalid");
        var Q = this.Af,
          w = this.betAmountLabel;
        if (!Q) return this.Pf = this.Af = b, w.string = V.formatCurrency(b), void V.delayCallback(0)(this.yf.bind(this));
        var P = w.node;
        var R = {};
        R.y = -15;
        R.opacity = 65;
        var T = {};
        T.y = 4.5;
        var Y = {};
        Y.opacity = 255;
        var X = {};
        X.y = -2;
        var E = {};
        E.y = 1;
        var F = {};
        F.y = 0;
        var N = {};
        N.y = 15;
        N.opacity = 65;
        var Z = {};
        Z.y = -4.5;
        var p = {};
        p.opacity = 255;
        var g = {};
        g.y = 2;
        var A = {};
        A.y = -1;
        var G = {};
        G.y = 0;
        cc.Tween.stopAllByTarget(P), this.Pf = Q, Q >= b ? (P.setPosition(P.position.x, 10), cc.tween(P).to(0.05, R).call(function () {
          w.string = V.formatCurrency(b), V.delayCallback(0)(U.yf.bind(U));
        }).parallel(cc.tween().to(0.1, T), cc.tween().to(0.05, Y)).to(0.05, X).to(0.1, E).to(0.15, F).start()) : Q <= b ? (P.setPosition(P.position.x, -10), cc.tween(P).to(0.05, N).call(function () {
          w.string = V.formatCurrency(b), V.delayCallback(0)(U.yf.bind(U));
        }).parallel(cc.tween().to(0.1, Z), cc.tween().to(0.05, p)).to(0.05, g).to(0.1, A).to(0.15, G).start()) : P.setPosition(P.position.x, 0), this.Af = b;
      }, Object.defineProperty(v.prototype, "currentBetAmount", {
        'get': function () {
          if (isNaN(this.Pf)) throw Error("SettingInfoFooterController :: currentBetAmount : Please set legit bet amount by calling updateBetAmount first!");
          return this.Pf;
        },
        'set': function (b) {
          this.Pf = b;
        },
        'enumerable': false,
        'configurable': true
      }), v.prototype.setOpenBetOptionsMenuCallback = function (b) {
        this.Bf = b;
      }, v.prototype.openBetOptionsMenu = function () {
        this.Bf && this.Bf(), this.Of();
      }, v.prototype.setBetOptionsButtonLock = function (b) {
        undefined === b && (b = false), this.lockBetOptionsButton = b;
      }, v.prototype.interactableBetOptionsButton = function (b) {
        if (this.betOptionsButton.interactable = b, b ? (this.betOptionsButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.If, this), this.betOptionsButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Of, this)) : (this.Of(), this.betOptionsButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.If, this), this.betOptionsButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Of, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableBetOptionsButton : Please call boot() to setup default label color first!");
        this.betAmountLabel.node.color = this.Gf;
      }, v.prototype.If = function () {
        this.rightSlotNodeHover.opacity = 51;
      }, v.prototype.Of = function () {
        this.rightSlotNodeHover.opacity = 0;
      }, v.prototype.setOpenWinMenuCallback = function (b) {
        this.Nf = b;
      }, v.prototype.openWinMenu = function () {
        this.Nf && this.Nf(), this.Tf();
      }, v.prototype.interactableWinButton = function (b) {
        if (this.winButton.interactable = b, b ? (this.winButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.Hf, this), this.winButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Tf, this)) : (this.Tf(), this.winButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.Hf, this), this.winButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Tf, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableWinButton : Please call boot() to setup default label color first!");
        this.winValueNode.color = this.freeSpinValue.node.color = this.Gf;
      }, v.prototype.Hf = function () {
        this.midSlotNodeHover.opacity = 51;
      }, v.prototype.Tf = function () {
        this.midSlotNodeHover.opacity = 0;
      }, v.prototype.setFooterLocaleAtlas = function (b) {
        this.winCashIconNode.spriteFrame = b.getSpriteFrame("win");
        var U = b.getSpriteFrame("win_shape");
        U ? (this.winCashIconMask.node.scale = 1, this.winCashIconMask.node.anchorX = 0.5, this.winCashIconMask.node.anchorY = 0.5) : (U = b.getSpriteFrame("win_shape_zh"), this.winCashIconMask.node.scale = 1.1, this.winCashIconMask.node.anchorX = 0.45, this.winCashIconMask.node.anchorY = 0.47), this.winCashIconMask.spriteFrame = U, this.Rf = b.getSpriteFrame("bet_options"), this.kf = b.getSpriteFrame("bet_options_grey");
      }, v.prototype.setFooterBackgroundOpacity = function (b) {
        undefined === b && (b = 127), this.midSlotNodeBg.opacity = b, this.leftSlotNodeBg.opacity = b, this.rightSlotNodeBg.opacity = b, this.pgIconBgLeft.opacity = b, this.pgIconBgRight.opacity = b, this.pgIconBgMid.opacity = b, this.missonBarNode.opacity = b, this.leftGradientBg.opacity = b, this.winCashIconMask.node.opacity = b;
      }, v.prototype.Lf = function () {
        var b = this.walletNotify,
          U = 0,
          Q = H.DEFAULT;
        Q = m.soundOn ? b ? H.OFFER_SOUND_ON : H.DEFAULT : b ? H.OFFER_SOUND_OFF : H.SOUND_OFF;
        var w = [],
          P = [];
        switch (this.bf) {
          case C.BONUS:
            w = this.bonusGameSpriteFrame, P = this.bonusGameDisableSpriteFrame, U = 2;
            break;
          case C.FREE_GAME:
            w = this.freeGameSpriteFrame, P = this.freeGameDisableSpriteFrame, U = 1;
            break;
          default:
          case C.CASH:
          case C.CASH_BONUS:
          case C.POINT:
            this.menuIcon.active = !this.walletNotificationIcon.active && 0 !== this.gf, w = this.userProfitSpriteFrame, P = this.userProfitDisableSpriteFrame, U = 0;
        }
        this.walletButton.target = this.walletNavigateIcon[U], this.walletButton.normalSprite = w[Q], this.walletButton.pressedSprite = P[Q], this.walletButton.hoverSprite = w[Q], this.walletButton.disabledSprite = P[Q], this.walletButton.interactable && 0 !== w.length && Q <= w.length ? this.walletIconSprite[U].spriteFrame = w && w[Q] : this.walletIconSprite[U].spriteFrame = P && P[Q];
      }, v.prototype.setWalletNavigateIcon = function (b) {
        var U;
        this.bf = U = b;
        var Q = this.walletIconNode;
        b !== C.POINT && b !== C.CASH_BONUS || (U = C.CASH);
        var w = U - 1;
        Q.forEach(function (P, R) {
          P.active = R === w;
        }), this.Lf();
      }, v.prototype.boot = function () {
        this.Ef = this.balanceValueNode.getComponent("NumberLabelControllerLite"), this.jf = this.winValueNode.getComponent("NumberLabelControllerLite"), this.Df = this.rolloverPrizeValueNode.getComponent("NumberLabelControllerLite"), this.Uf = this.rolloverOnGoingValueNode.getComponent("NumberLabelControllerLite");
        var b = this.betOptionsButton;
        b.normalSprite = this.Rf, b.pressedSprite = this.kf, b.hoverSprite = this.Rf, b.disabledSprite = this.kf, this.Gf = M.uiAppearanceHelper.v("setting.color_button_transition_a.normal"), this.Ef.skip(0), this.jf.skip(0), this.Df.skip(0), this.Uf.skip(0);
      }, v.prototype.changeWalletIconColor = function (b) {
        this.walletNavigateIcon.forEach(function (U) {
          U.opacity = b ? M.uiAppearanceHelper.v("setting.white_button_transition_a.pressed").a : M.uiAppearanceHelper.v("setting.white_button_transition_a.normal").a;
        });
      }, v.prototype.showBackground = function (b, U) {
        undefined === U && (U = 225);
        var Q = this.background;
        Q.active = b, Q.opacity = U;
      }, v.prototype.setOpenWalletMenuCallback = function (b) {
        this.Wf = b;
      }, v.prototype.setOpenUserProfileMenuCallback = function (b) {
        this.Ff = b;
      }, v.prototype.setWalletButtonLock = function (b) {
        undefined === b && (b = false), this.lockWalletButton = b;
      }, v.prototype.interactableWalletButton = function (b) {
        if (this.walletButton.interactable = b, b ? (this.walletButton.node.on(cc.Node.EventType.MOUSE_ENTER, this.xf, this), this.walletButton.node.on(cc.Node.EventType.MOUSE_LEAVE, this.Vf, this)) : (this.Vf(), this.walletButton.node.off(cc.Node.EventType.MOUSE_ENTER, this.xf, this), this.walletButton.node.off(cc.Node.EventType.MOUSE_LEAVE, this.Vf, this)), undefined === this.Gf) throw Error("SettingInfoFooter :: interactableWalletButton : Please call boot() to setup default label color first!");
        this.balanceValueNode.color = this.Gf;
      }, v.prototype.xf = function () {
        this.leftSlotNodeHover.opacity = 51;
      }, v.prototype.Vf = function () {
        this.leftSlotNodeHover.opacity = 0;
      }, v.prototype.changeWalletButtonColor = function (b) {
        this.walletNavigateIcon.forEach(function (U) {
          U.opacity = b ? M.uiAppearanceHelper.v("setting.white_button_transition_a.pressed").a : M.uiAppearanceHelper.v("setting.white_button_transition_a.normal").a;
        });
      }, v.prototype.showBalanceNode = function (b) {
        this.balanceNode.active = b;
      }, v.prototype.showFreeGamesNode = function (b) {
        this.freeGamesNode.active = b;
      }, v.prototype.activateWalletNotify = function (b) {
        this.walletNotify = b, this.walletNotificationIcon.active = b, q.getGameContext().emit("SlotMenu.setWalletReminder", b), this.Lf();
      }, v.prototype.openWalletMenu = function () {
        this.Wf && this.Wf();
      }, v.prototype.openUserProfileMenu = function () {
        this.Ff && this.Ff(), this.Vf();
      }, v.prototype.changeHolder = function (b) {
        this.zf || (this.zf = b);
        var U = this.node;
        U.removeFromParent(false), b.addChild(U), this.Kf(false), this.qf(false);
      }, v.prototype.returnHolder = function () {
        if (!this.zf) throw Error("SettingInfoFooter :: returnHolder : Do not have parent to return");
        var b = this.node;
        b.removeFromParent(false), this.zf.addChild(b), this.Kf(this.vf), this.qf(this._f);
      }, v.prototype.setPGIconsInteractableColor = function (b) {
        var U = this.pgIcon.getComponent(cc.Animation),
          Q = this.pgIcon.getComponent(cc.Sprite);
        b ? U.play() : (U.setCurrentTime(0), U.stop(), Q.spriteFrame = this.pgIconOffSpriteFrame);
      }, v.prototype.Kf = function (b) {
        this.missonBarNode.active = b, this.rightSpecialInfoHolderNode.active = b, this.rightSpecialInfoTextHolder.active = b, this.bonusWalletPrizeNode.active = b;
      }, v.prototype.qf = function (b) {
        this.leftGradientBg.active = b, this.leftSpecialInfoLabel.node.active = b;
      }, v.prototype.showCustomInfoFooter = function (b) {
        if (this.missonBarNode && this.rightSpecialInfoHolderNode && this.leftGradientBg && this.leftSpecialInfoLabel) switch (b) {
          case C.FREE_GAME:
            this.Kf(false), this.vf = false, this.qf(true), this._f = true;
            break;
          case C.BONUS:
            this.Kf(true), this.vf = true, this.qf(false), this._f = false, this.progressBarNode.color = this.progressBarShine.color = this.bonusWalletIcon.color = this.rightSpecialInfoTickAnimation.node.color = this.rightSpecialInfoTickCircleOutline.color = this.Gf, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0;
            break;
          default:
            this.Kf(false), this.vf = false, this.qf(false), this._f = false, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0;
        }
      }, v.prototype.hideCustomInfoFooter = function (b) {
        switch (b) {
          case C.BONUS:
            this.Kf(false);
            break;
          case C.FREE_GAME:
            this.qf(false);
            break;
          default:
            this.Kf(false), this.qf(false);
        }
        this.winHolderNode.active = true;
        var U = this.Jf;
        this.Jf = undefined, U && U();
        var Q = this.Yf;
        this.Yf = undefined, Q && Q(), this.midSlotNode && (cc.Tween.stopAllByTarget(this.midSlotNode), this.midSlotNode.scale = cc.v3(1, 1, 1));
      }, v.prototype.isCustomInfoFooter = function () {
        return this.df;
      }, v.prototype.updateBalance = function (b, U, Q) {
        var w = this.Ef;
        if (undefined === w) throw Error("SettingInfoFooter :: updateBalance : Please call boot() to setup balance label controller first!");
        b = this.currentBalance ? this.currentBalance : this.currentBalance = V.isNumeric(U) ? U : 0, V.isNumeric(U) ? this.targetBalance = U : U = this.targetBalance, U <= b && (Q = false), Q ? w.play(b, U) : w.skip(U), this.currentBalance = this.targetBalance, this.Mf();
      }, Object.defineProperty(v.prototype, "currentWinAmount", {
        'get': function () {
          return this.mf;
        },
        'enumerable': false,
        'configurable': true
      }), v.prototype.updateWinAmount = function (b, U) {
        var Q = this.jf;
        if (undefined === Q) throw Error("SettingInfoFooter :: updateWinAmount : Please call boot() to setup win label controller first!");
        var w = this.mf,
          P = this.winValueNode;
        V.isNumeric(b) ? this.winBalance = b : b = this.winBalance;
        var R = b > 0,
          T = b > w;
        var Y = {};
        Y.scale = 1.1;
        var X = {};
        X.easing = "sineOut";
        var E = {};
        E.scale = 1;
        this.Qf(R, U), R && (U && T ? (Q.play(w, b), cc.Tween.stopAllByTarget(P), P.scale = cc.v3(0.5, 0.5, 1), cc.tween(P).to(0.2, Y, X).to(0.1, E).start()) : Q.skip(b)), this.mf = this.winBalance;
      }, v.prototype.setRolloverSymbol = function (b) {
        this.Uf && this.Uf.setSymbol(b);
      }, v.prototype.setRolloverBaseUnit = function (b) {
        this.Uf && this.Uf.setBaseUnit(b);
      }, v.prototype.setRightSpecialInfoText = function (b) {
        undefined === b && (b = ''), this.totalRolloverValueLabel && (this.totalRolloverValueLabel.string = b);
      }, v.prototype.setleftSpecialInfoLabel = function (b) {
        undefined === b && (b = ''), this.leftSpecialInfoLabel && (this.leftSpecialInfoLabel.string = b);
      }, v.prototype.setFreeGameTick = function (b) {
        var U = this,
          Q = this.leftSpecialInfoTickHodler.active;
        var w = {};
        w.scale = 0.8;
        var P = {};
        P.scale = 1.1;
        var R = {};
        R.scale = 1;
        var T = {};
        T.easing = "cubicOut";
        this.leftSpecialInfoTickHodler.active = b, !Q && b && (this.leftSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0, this.leftSpecialInfoTickAnimation.stop(), this.leftSpecialInfoTickAnimation.setCurrentTime(0), cc.Tween.stopAllByTarget(this.leftSpecialInfoTickCircleOutline), cc.tween(this.leftSpecialInfoTickCircleOutline).set(w).to(0.1, P).call(function () {
          U.leftSpecialInfoTickAnimation.play();
        }).to(0.3, R, T).start());
      }, v.prototype.setBonusWalletIcon = function (b) {
        var U = this,
          Q = this.rightSpecialInfoTickHodler.active;
        var w = {};
        w.scale = 0.8;
        var P = {};
        P.scale = 1.1;
        var R = {};
        R.scale = 1;
        var T = {};
        T.easing = "cubicOut";
        this.rightSpecialInfoTickHodler.active = b, this.bonusWalletIcon.active = !b, !Q && b && (this.rightSpecialInfoTickAnimation.node.getComponent(cc.Sprite).fillRange = 0, this.rightSpecialInfoTickAnimation.stop(), this.rightSpecialInfoTickAnimation.setCurrentTime(0), cc.Tween.stopAllByTarget(this.rightSpecialInfoTickCircleOutline), cc.tween(this.rightSpecialInfoTickCircleOutline).set(w).to(0.1, P).call(function () {
          U.rightSpecialInfoTickAnimation.play();
        }).to(0.3, R, T).start());
      }, v.prototype.setLeftSpecialInfoLayout = function (b) {
        this.leftSpecialInfoLayout.horizontalDirection = b ? cc.Layout.HorizontalDirection.LEFT_TO_RIGHT : cc.Layout.HorizontalDirection.RIGHT_TO_LEFT;
      }, v.prototype.updateLayout = function (b) {
        this.languageSensitiveLayoutList.forEach(function (U) {
          return U.horizontalDirection = b ? cc.Layout.HorizontalDirection.RIGHT_TO_LEFT : cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
        });
      }, v.prototype.Qf = function (U, Q) {
        var R = this.midSlotElementHolder,
          T = this.midSlotNodeBg,
          Y = this.midSlotNodeHover,
          X = this.leftSlotNodeBg,
          E = this.leftSlotNodeHover,
          F = this.rightSlotNodeBg,
          N = this.rightSlotNodeHover,
          Z = this.walletButton.node,
          J = this.balanceValueHolder,
          K = this.betOptionsButton.node,
          l0 = this.betAmountHolder,
          l1 = this.winButton.node,
          l2 = this.pgIconHolder,
          l3 = this.pgIconBgLeft,
          l4 = this.pgIconBgRight,
          l5 = this.missonBarNode,
          l6 = this.rightSpecialInfoHolder,
          l7 = this.leftGradientBg,
          l8 = this.leftSpecialInfoLabel ? this.leftSpecialInfoLabel.node : undefined;
        cc.Tween.stopAllByTarget(T), cc.Tween.stopAllByTarget(Y), cc.Tween.stopAllByTarget(X), cc.Tween.stopAllByTarget(E), cc.Tween.stopAllByTarget(F), cc.Tween.stopAllByTarget(N), cc.Tween.stopAllByTarget(Z), cc.Tween.stopAllByTarget(J), cc.Tween.stopAllByTarget(K), cc.Tween.stopAllByTarget(l0), cc.Tween.stopAllByTarget(l1), cc.Tween.stopAllByTarget(l3), cc.Tween.stopAllByTarget(l4), l5 && cc.Tween.stopAllByTarget(l5), l6 && cc.Tween.stopAllByTarget(l6), l7 && cc.Tween.stopAllByTarget(l7), l8 && cc.Tween.stopAllByTarget(l8), l2.active = !U, R.active = U, T.active = U;
        var l9 = this.Xf(U),
          ll = Q ? l9.duration : 0,
          lj = cc.tween().to(ll, {
            'width': l9.midBg
          }, {
            'easing': l9.easing
          }),
          lI = cc.tween().to(ll, {
            'width': l9.midBg + 20
          }, {
            'easing': l9.easing
          }),
          ls = cc.tween().to(ll, {
            'width': l9.midButton
          }, {
            'easing': l9.easing
          }),
          lO = cc.tween().to(ll, {
            'width': l9.pgSideBg
          }, {
            'easing': l9.easing
          }),
          ly = cc.tween().to(ll, {
            'width': l9.sideBg
          }, {
            'easing': l9.easing
          }),
          lB = cc.tween().to(ll, {
            'width': l9.sideBg + 23
          }, {
            'easing': l9.easing
          }),
          lx = cc.tween().to(ll, {
            'width': l9.sideButton
          }, {
            'easing': l9.easing
          }),
          lC = cc.tween().to(ll, {
            'width': l9.sideLabel
          }, {
            'easing': l9.easing
          });
        lj.clone(T).start(), lI.clone(Y).start(), ls.clone(l1).start(), lO.clone(l3).start(), lO.clone(l4).start(), ly.clone(X).start(), lB.clone(E).start(), ly.clone(l5).start(), ly.clone(l7).start(), lx.clone(Z).start(), lC.clone(J).start(), ly.clone(F).start(), lB.clone(N).start(), lx.clone(K).start(), lC.clone(l0).start();
      }, v.prototype.Xf = function (b) {
        var U = {};
        U.midBg = 371.2;
        U.midButton = 330;
        U.pgSideBg = 147.2;
        U.sideBg = 371.2;
        U.sideButton = 330;
        U.sideLabel = 240;
        U.duration = 0.75;
        U.easing = "cubicOut";
        var Q = {};
        Q.midBg = 230.4;
        Q.midButton = 200;
        Q.pgSideBg = 76.8;
        Q.sideBg = 441.6;
        Q.sideButton = 396;
        Q.sideLabel = 295;
        Q.duration = 4;
        Q.easing = "sineOut";
        var w = {};
        w.show = U;
        w.hide = Q;
        return this.Sf || (this.Sf = w), b ? this.Sf.show : this.Sf.hide;
      }, v.prototype.onAudioStateUpdate = function (b) {
        var U = this;
        this.muteIcon.forEach(function (Q) {
          Q.active = !b && U.Cf;
        }), this.Lf();
      }, Object.defineProperty(v.prototype, "previousBetAmount", {
        'get': function () {
          return this.Af;
        },
        'set': function (b) {
          this.Af = b;
        },
        'enumerable': false,
        'configurable': true
      }), v.prototype.updateRollOverBalance = function (b, U) {
        var Q = this.Df,
          w = b <= U || !U ? b : U;
        this.rolloverPrizeBalance = V.isNumeric(w) ? w : 0, Q && Q.skip(this.rolloverPrizeBalance), this.previousRolloverPrizeBalance = this.rolloverPrizeBalance;
      }, v.prototype.updateOnGoingRollOverBalance = function (b) {
        var U = this.Uf;
        this.rolloverOnGoingBalance = V.isNumeric(b) ? b : 0, U && U.skip(b), this.previousRolloverOnGoingBalance = this.rolloverOnGoingBalance;
      }, v.prototype.updateRolloverProgressBar = function (b, U) {
        var Q = this,
          w = b > U ? U : b,
          P = w / U,
          R = this.barProgress;
        this.barProgress = P;
        var T = function (E) {
            var F = P > 0 ? 54 : 0;
            cc.Tween.stopAllByTarget(Q.progressBarNode), Q.progressBarNode.x = F, V.deferCallback(true)(function () {
              E && E();
            });
          },
          Y = function (E) {
            var F = {};
            F.x = 800 * P + 54;
            var N = {};
            N.easing = "sineOut";
            cc.Tween.stopAllByTarget(Q.progressBarNode), cc.tween(Q.progressBarNode).to(0.5, F, N).call(function () {
              E && E();
            }).start();
          },
          X = function () {
            R !== Q.barProgress && (Q.Zf(), Q.setBonusWalletIcon(w === U));
          };
        R !== this.barProgress && P >= 0 && (this.$f(), this.barProgress > R ? V.sequenceCallback(function (E) {
          0 === R ? T(E) : E && E();
        }, V.delayCallback(0.05), function (E) {
          Q.barProgress >= 0.0003 && (Q.progressBarCircleMask.enabled = false), E && E();
        }, Y)(X) : V.sequenceCallback(Y, function (E) {
          Q.barProgress < 0.0003 && (Q.progressBarCircleMask.enabled = true), E && E();
        }, V.delayCallback(0.05), function (E) {
          0 === Q.barProgress ? T(E) : E && E();
        })(X));
      }, v.prototype.Zf = function () {
        var b = {};
        b.x = 750;
        var U = {};
        U.x = -150;
        var Q = {};
        Q.easing = "sineOut";
        cc.Tween.stopAllByTarget(this.progressBarShine), cc.tween(this.progressBarShine).set(b).to(0.7, U, Q).delay(1.5).union().repeatForever().start();
      }, v.prototype.$f = function () {
        cc.Tween.stopAllByTarget(this.progressBarShine), this.progressBarShine.setPosition(750, 0);
      }, v.prototype.setUserProfileSpriteFrameList = function (b, U) {
        this.gf = b, this.Cf = U, this.td(b, U);
      }, v.prototype.td = function (b, U) {
        0 !== b ? (this.userProfitSpriteFrame[H.DEFAULT] = this.userProfitSpriteFrame[H.SOUND_ON] = this.userProfitMenuOnAudioSpriteFrame, this.userProfitSpriteFrame[H.SOUND_OFF] = U ? this.userProfitMenuOffAudioSpriteFrame : this.userProfitMenuOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.DEFAULT] = this.userProfitDisableSpriteFrame[H.SOUND_ON] = this.userProfitMenuOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.SOUND_OFF] = U ? this.userProfitMenuOffAudioDisableSpriteFrame : this.userProfitMenuOnAudioDisableSpriteFrame) : (this.userProfitSpriteFrame[H.DEFAULT] = this.userProfitSpriteFrame[H.SOUND_ON] = this.userProfitSingleIconOnAudioSpriteFrame, this.userProfitSpriteFrame[H.SOUND_OFF] = U ? this.userProfitSingleIconOffAudioSpriteFrame : this.userProfitSingleIconOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.DEFAULT] = this.userProfitDisableSpriteFrame[H.SOUND_ON] = this.userProfitSingleIconOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.SOUND_OFF] = U ? this.userProfitSingleIconOffAudioDisableSpriteFrame : this.userProfitSingleIconOnAudioDisableSpriteFrame), this.userProfitSpriteFrame[H.OFFER_SOUND_ON] = this.userProfitMenuOnAudioSpriteFrame, this.userProfitSpriteFrame[H.OFFER_SOUND_OFF] = U ? this.userProfitMenuOffAudioSpriteFrame : this.userProfitMenuOnAudioSpriteFrame, this.userProfitDisableSpriteFrame[H.OFFER_SOUND_ON] = this.userProfitMenuOnAudioDisableSpriteFrame, this.userProfitDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.userProfitMenuOffAudioDisableSpriteFrame, U && (this.freeGameSpriteFrame[H.OFFER_SOUND_OFF] = this.freeGameSpriteFrame[H.SOUND_OFF] = this.freeGameSpriteFrame[H.DEFAULT], this.freeGameDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.freeGameDisableSpriteFrame[H.SOUND_OFF] = this.freeGameDisableSpriteFrame[H.DEFAULT], this.bonusGameSpriteFrame[H.OFFER_SOUND_OFF] = this.bonusGameSpriteFrame[H.SOUND_OFF] = this.bonusGameSpriteFrame[H.DEFAULT], this.bonusGameDisableSpriteFrame[H.OFFER_SOUND_OFF] = this.bonusGameDisableSpriteFrame[H.SOUND_OFF] = this.bonusGameDisableSpriteFrame[H.DEFAULT]);
      }, __decorate([k(cc.Node)], v.prototype, "background", undefined), __decorate([k(cc.Node)], v.prototype, "balanceNode", undefined), __decorate([k(cc.Node)], v.prototype, "balanceValueHolder", undefined), __decorate([k(cc.Node)], v.prototype, "balanceValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "leftSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNode", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNodeBg", undefined), __decorate([k(cc.Node)], v.prototype, "rightSlotNodeHover", undefined), __decorate([k(cc.Node)], v.prototype, "winValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "winHolderNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "winCashIconNode", undefined), __decorate([k(cc.Mask)], v.prototype, "winCashIconMask", undefined), __decorate([k(cc.Button)], v.prototype, "winButton", undefined), __decorate([k(cc.Node)], v.prototype, "midSlotElementHolder", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconHolder", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgLeft", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgRight", undefined), __decorate([k(cc.Node)], v.prototype, "pgIconBgMid", undefined), __decorate([k(cc.Node)], v.prototype, "pgIcon", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "pgIconOnSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "pgIconOffSpriteFrame", undefined), __decorate([k(cc.Node)], v.prototype, "freeGamesNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "specialIcon", undefined), __decorate([k(cc.Label)], v.prototype, "freeSpinValue", undefined), __decorate([k(cc.Button)], v.prototype, "walletButton", undefined), __decorate([k(cc.Node)], v.prototype, "walletButtonSensor", undefined), __decorate([k([cc.Node])], v.prototype, "walletNavigateIcon", undefined), __decorate([k(cc.Node)], v.prototype, "walletNotificationIcon", undefined), __decorate([k(cc.Node)], v.prototype, "menuIcon", undefined), __decorate([k([cc.Node])], v.prototype, "muteIcon", undefined), __decorate([k(cc.Node)], v.prototype, "betAmountHolder", undefined), __decorate([k(cc.Label)], v.prototype, "betAmountLabel", undefined), __decorate([k(cc.Button)], v.prototype, "betOptionsButton", undefined), __decorate([k(cc.Node)], v.prototype, "betOptionsIcon", undefined), __decorate([k([cc.Node])], v.prototype, "walletIconNode", undefined), __decorate([k([cc.Sprite])], v.prototype, "walletIconSprite", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOnAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOffAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOnAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOffAudioSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOnAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitMenuOffAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOnAudioDisableSpriteFrame", undefined), __decorate([k(cc.SpriteFrame)], v.prototype, "userProfitSingleIconOffAudioDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "freeGameSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "freeGameDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "bonusGameSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "bonusGameDisableSpriteFrame", undefined), __decorate([k([cc.SpriteFrame])], v.prototype, "rewardFooterTypeSFList", undefined), __decorate([k(cc.Node)], v.prototype, "maxBetButtonHolder", undefined), __decorate([k([cc.Layout])], v.prototype, "languageSensitiveLayoutList", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoHolderNode", undefined), __decorate([k(cc.Node)], v.prototype, "leftGradientBg", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoHolderNode", undefined), __decorate([k(cc.RichText)], v.prototype, "leftSpecialInfoLabel", undefined), __decorate([k(cc.Layout)], v.prototype, "leftSpecialInfoLayout", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoTickHodler", undefined), __decorate([k(cc.Node)], v.prototype, "leftSpecialInfoTickCircleOutline", undefined), __decorate([k(cc.Animation)], v.prototype, "leftSpecialInfoTickAnimation", undefined), __decorate([k(cc.Node)], v.prototype, "missonBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "bonusWalletPrizeNode", undefined), __decorate([k(cc.Node)], v.prototype, "bonusWalletIcon", undefined), __decorate([k(cc.Node)], v.prototype, "rolloverPrizeValueNode", undefined), __decorate([k(cc.Node)], v.prototype, "rolloverOnGoingValueNode", undefined), __decorate([k(cc.Label)], v.prototype, "totalRolloverValueLabel", undefined), __decorate([k(cc.Mask)], v.prototype, "progressBarCircleMask", undefined), __decorate([k(cc.Node)], v.prototype, "progressBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "progressBarShine", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTickHodler", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTickCircleOutline", undefined), __decorate([k(cc.Animation)], v.prototype, "rightSpecialInfoTickAnimation", undefined), __decorate([k(cc.Node)], v.prototype, "rightSpecialInfoTextHolder", undefined), __decorate([W("SettingInfoFooterController")], v);
    }(cc.Component);
    exports.SettingInfoFooterController = z, cc._RF.pop();
  }
}
module.exports = SettingInfoFooterController;
