// module: InfoBoardController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function InfoBoardController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "5144fyBpeZLZ6aZrW4gPoIN", "InfoBoardController")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m), I.InfoboardState = undefined;
      var B,
        X = F("Utils"),
        Z = F("AudioManager"),
        T = F("AudioConstant"),
        M = F("GameConstant"),
        C = F("SpaceBarInterrupter"),
        V = F("GameUtil");
      (function (O) {
        O[O.DISPLAY_TIP_N = 0] = "DISPLAY_TIP_N", O[O.SMALL_WIN = 1] = "SMALL_WIN", O[O.MEDIUM_WIN = 2] = "MEDIUM_WIN", O[O.BIG_WIN = 3] = "BIG_WIN", O[O.TOTAL_WIN = 4] = "TOTAL_WIN", O[O.FREE_SPIN = 5] = "FREE_SPIN", O[O.NONE = 6] = "NONE";
      })(B = I.InfoboardState || (I.InfoboardState = {}));
      var N = cc._decorator,
        q = N.ccclass,
        g = N.property,
        K = function (O) {
          function x() {
            var p = null !== O && O.apply(this, arguments) || this;
            return p.winAnimation = undefined, p.infoBoard = undefined, p.infoBoardMask = undefined, p.frontBoard = undefined, p.frontBoard_normal = undefined, p.frontBoard_bonus = undefined, p.frontBoard_mask_normal = undefined, p.frontBoard_mask_bonus = undefined, p.midWinHolder = undefined, p.smallWinHolder = undefined, p.midWinBoard = undefined, p.smallWinBoard = undefined, p.contentNode = undefined, p.winNode = undefined, p.winAmountNode = undefined, p.winSF = undefined, p.totalWinSF = undefined, p.skipButtonNode = undefined, p.mediumWinBoardSprite = undefined, p.infoVfxA = undefined, p.infoVfxD = undefined, p.infoVfxE = undefined, p.infoLv02VfxI = undefined, p.smallWinMask = undefined, p.infoLv02vfxC = undefined, p.infoVfxASprite = undefined, p.infoVfxABonusSprite = undefined, p.infoVfxDSprite = undefined, p.infoVfxDBonusSprite = undefined, p.infoVfxB = undefined, p.fo = [], p.do = [], p.vo = [], p._o = undefined, p.mo = undefined, p.bo = undefined, p.po = undefined, p.gt = false, p.So = false, p.Co = false, p.Mo = undefined, p.yo = undefined, p.wo = undefined, p.Bo = false, p;
          }
          return __extends(x, O), Object.defineProperty(x.prototype, "infoboardMessageController", {
            'get': function () {
              return this.Mo || (this.Mo = this.infoBoard.getComponent("InfoboardMessageController")), this.Mo;
            },
            'enumerable': false,
            'configurable': true
          }), x.prototype.switchBackground = function (p) {
            switch (this.yo = p, p) {
              case M.TransitionState.FREE_SPIN:
              case M.TransitionState.FREE_SPIN_RESPIN:
                this.frontBoard.spriteFrame = this.frontBoard_bonus, this.frontBoard.node.setScale(1.36, 1.44), this.frontBoard.node.y = 5, this.Ao(true), this.infoVfxA.spriteFrame = this.infoVfxABonusSprite, this.infoVfxD.spriteFrame = this.infoVfxDBonusSprite, this.infoVfxA.node.setScale(2.38, 2.65), this.infoVfxD.node.setScale(2.38, 2.9);
                break;
              case M.TransitionState.NORMAL:
              case M.TransitionState.RESPIN:
              default:
                this.frontBoard.spriteFrame = this.frontBoard_normal, this.frontBoard.node.setScale(1.4, 1.4), this.frontBoard.node.y = 0, this.Ao(false), this.infoVfxA.spriteFrame = this.infoVfxASprite, this.infoVfxD.spriteFrame = this.infoVfxDSprite, this.infoVfxA.node.setScale(2.45, 2.5), this.infoVfxD.node.setScale(2.45, 2.45);
            }
          }, x.prototype.init = function (p) {
            if (p) {
              var b = undefined;
              for (b = 0; b < p.length; b++) this.fo.push(p[b]);
              this.Ho();
            }
            this.infoboardMessageController.initNumberDisplayNodeEvent(), this.midWinBoard.active = false, this.smallWinBoard.active = false, this.So = true, M.isRTL && (this.winNode.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT);
          }, x.prototype.setWinTextSF = function (p, b) {
            this.winSF.spriteFrame = p, this.totalWinSF.spriteFrame = b;
          }, x.prototype.getInfoboardPosition = function () {
            return this.node.convertToWorldSpaceAR(this.infoBoard.getPosition());
          }, x.prototype.switchToTips = function (p) {
            {
              var b = this;
              if (this.Bo = true, this._o !== B.DISPLAY_TIP_N) {
                this.hideWin();
                var L = p ? 0 : 0.5,
                  H = function () {
                    b.infoboardMessageController.setSprites(b.do), b.Oo(), b.setInfoState(B.DISPLAY_TIP_N), b.infoBoardMask.active = true, b.po = undefined, b.wo = undefined;
                  };
                this.wo && this.wo(), this.wo = undefined, L ? this.wo = X.delayCallback(L)(H) : H();
              }
            }
          }, x.prototype.freeSpinTips = function (p) {
            var b = this;
            if (this.Bo = false, this._o !== B.FREE_SPIN) {
              this.hideWin();
              var L = p ? 0 : 0.5,
                H = function () {
                  {
                    b.infoboardMessageController.setSprites(b.vo), b.Oo(), b.infoBoardMask.active = true, b.setInfoState(B.FREE_SPIN), b.po = undefined, b.wo = undefined;
                  }
                };
              this.wo && this.wo(), this.wo = undefined, L ? this.wo = X.delayCallback(L)(H) : H();
            }
          }, x.prototype.setWinAmount = function (p) {
            V.isPassUKGC(p) ? (this.setInfoState(B.TOTAL_WIN), this.Io(), this.disableSkipButton(), this.infoboardMessageController.setTotalAndWinText(false, true), this.infoboardMessageController.showDisplayNumber(p)) : this.To();
          }, x.prototype.setTotalWinAmount = function (p) {
            {
              V.isPassUKGC(p) ? (this.setInfoState(B.TOTAL_WIN), this.Io(), this.disableSkipButton(), this.infoboardMessageController.setTotalAndWinText(true, false), this.infoboardMessageController.showDisplayNumber(p), this.So = false) : this.To();
            }
          }, x.prototype.showTotalText = function () {
            {
              this.infoboardMessageController.setTotalAndWinText(true, false);
            }
          }, x.prototype.showWin = function (p, b, L) {
            {
              if (!V.isPassUKGC(p)) return this.To(), void (L && L());
              switch (this.infoBoardMask.active = false, this.infoboardMessageController.setTotalAndWinText(b, !b), this.smallWinHolder.active = true, this.smallWinHolder.opacity = 255, this._o) {
                case B.BIG_WIN:
                  this.midWinHolder.active = true, this.midWinHolder.opacity = 255, this.smallWinBoard.active = false, this.midWinBoard.active = true;
                  break;
                case B.MEDIUM_WIN:
                  this.midWinHolder.active = false, this.midWinHolder.opacity = 255, this.midWinBoard.active = false, this.smallWinBoard.active = true, Z.playAudio(T.GENERAL_AUDIO.prizeMedwin.key);
                  break;
                default:
                  this.smallWinMask.active = false, this.midWinHolder.active = false, this.midWinHolder.opacity = 255, this.setInfoState(B.SMALL_WIN), b ? Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwin.key) : Z.playAudio(T.GENERAL_AUDIO.prizeSmallwin.key);
              }
              this.winAnimation.play("continuous_win_anim"), this.winAnimation.on("stop", this.Eo, this), this.winAnimation.on("finished", L), this.Io(), this.bo = p, this.No(), this.So = false;
            }
          }, x.prototype.showMediumWin = function (p, b, L) {
            var H = this;
            if (!V.isPassUKGC(p)) return this.To(), void (L && L());
            this.infoboardMessageController.setTotalAndWinText(b, !b), this._o !== B.MEDIUM_WIN || b ? (this.smallWinMask.active = true, this.infoBoardMask.active = false, this.winNode.active = false, this.midWinHolder.active = false, this.midWinHolder.opacity = 255, this.smallWinBoard.active = true, this.Io(), this.infoVfxA.node.opacity = 0, this.infoVfxB.active = false, this.infoVfxD.node.setScale(0), this.bo = p, X.deferCallback(true)(function () {
              H.smallWinHolder.active = true;
            }), b ? (Z.setAudioVolume(T.GENERAL_AUDIO.infoboardTotalwinMedwin.key, 1), this.So ? (this.winAnimation.play("small_win_anim", this.winAnimation.getClips()[1].duration), this.No(L)) : (Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwinMedwin.key), this.winAnimation.play("continuous_win_anim"), this.scheduleOnce(this.enableSkipButton, 0.2), this.Go(0, L))) : (this.infoVfxD.node.active = false, this.infoVfxA.node.active = false, this.infoVfxE.active = false, this.winNode.opacity = 0, this.winNode.active = false, Z.playAudio(T.GENERAL_AUDIO.prizeMedwin.key), this.winAnimation.play("small_win_anim"), this.No(L), this.So = false)) : this.showWin(p, b, L), this.setInfoState(B.MEDIUM_WIN);
          }, x.prototype.showBigWin = function (p, b, L, H) {
            {
              if (!V.isPassUKGC(p)) return this.To(), void (H && H());
              this._o === B.BIG_WIN ? (this.infoVfxD.node.active = false, this.showWin(p, L, H)) : (this.infoBoardMask.active = false, this.smallWinHolder.active = false, this.smallWinHolder.opacity = 255, this.midWinBoard.active = true, this.Io(), this.bo = p, this.infoVfxA.node.opacity = 0, this.infoVfxB.active = false, this.infoVfxD.node.setScale(0), this.infoboardMessageController.setTotalAndWinText(L, !L), this.midWinHolder.active = true, L && !this.So ? (Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwinBigwin.key), this.winAnimation.play("mid_win_anim"), this.winAnimation.on("finished", H)) : (this.winAnimation.play("mid_win_anim", this.winAnimation.getClips()[0].duration), H && H()), this.So = false, this.No(undefined), this.disableSkipButton()), this.setInfoState(B.BIG_WIN);
            }
          }, x.prototype.hideWin = function () {
            var p = this;
            this.disableSkipButton(), this.infoVfxA.node.opacity = 255, this.infoVfxB.active = true, this.yo === M.TransitionState.FREE_SPIN || this.yo === M.TransitionState.FREE_SPIN_RESPIN ? this.infoVfxD.node.setScale(2.38, 2.9) : this.infoVfxD.node.setScale(2.45, 2.45), this.Co && (this.switchBackground(M.TransitionState.NORMAL), this.Co = false), this.midWinHolder.runAction(cc.sequence(cc.fadeOut(0.25).easing(cc.easeIn(1)), cc.callFunc(function () {
              {
                p.midWinHolder.active = false, p.midWinHolder.opacity = 255, p.midWinBoard.active = false, p.midWinBoard.active = false, p.smallWinBoard.active = false;
              }
            }))), this.smallWinHolder.runAction(cc.sequence(cc.fadeOut(0.5).easing(cc.easeIn(1)), cc.callFunc(function () {
              p.smallWinHolder.active = false, p.smallWinHolder.opacity = 255, p.smallWinBoard.active = false, p.infoBoardMask.active = true;
            })));
          }, x.prototype.setSwitchToNormalBackgroundOnHide = function () {
            {
              this._o === B.SMALL_WIN ? (this.switchBackground(M.TransitionState.NORMAL), this.infoBoardMask.active = false, this.midWinHolder.active = false) : this.Co = true;
            }
          }, x.prototype.showTotalWin = function (p, b) {
            {
              if (!V.isPassUKGC(p)) return this.To(), void (b && b());
              Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwin.key), this.midWinHolder.opacity = 255, this.Io(), this.setInfoState(B.SMALL_WIN), this.bo = p, this.infoboardMessageController.setTotalAndWinText(true, false), X.sequenceCallback(this.No.bind(this))(b);
            }
          }, x.prototype.enableSkipButton = function () {
            {
              this.skipButtonNode.active || (this.skipButtonNode.active = true, C.spaceBarInterrupter.subscribeEventInterrupter("mediumTotalWin", this.node, this.skipButtonClick.bind(this)));
            }
          }, x.prototype.disableSkipButton = function () {
            this.skipButtonNode.active && (this.skipButtonNode.active = false, C.spaceBarInterrupter.unsubscribeEventInterrupter("mediumTotalWin"));
          }, x.prototype.skipButtonClick = function () {
            {
              this.disableSkipButton(), this.gt = true, Z.fadeAudio(T.GENERAL_AUDIO.infoboardTotalwinMedwin.key, 1, 0, 0.2), Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwinMedwinEnd.key), this.infoboardMessageController.skipNumberRoll();
            }
          }, x.prototype.clear = function () {
            this.Zt(), this.So = false;
          }, x.prototype.runVfxDLoopAnim = function () {
            this.infoVfxD.node.stopAllActions(), this.infoVfxD.node.active = true, this.infoVfxD.node.opacity = 255, this.winAnimation.playAdditive("vfx_d_loop");
          }, x.prototype.runVfxELoopAnim = function () {
            this.infoVfxE.stopAllActions(), this.infoVfxE.active = true, this.infoVfxE.opacity = 255, this.winAnimation.playAdditive("vfx_e_loop");
          }, x.prototype.stopLoopAnim = function () {
            var p = this;
            this.winAnimation.stop("vfx_d_loop"), this.winAnimation.stop("vfx_e_loop"), this.infoVfxD.node.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {
              p.infoVfxD.node.active = false;
            }))), this.infoVfxE.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {
              p.infoVfxE.active = false;
            })));
          }, x.prototype.Eo = function () {
            this.infoLv02VfxI.opacity = 0, this.infoLv02vfxC.active = false, this.infoLv02vfxC.skewX = 0, this.infoLv02vfxC.opacity = 255, this.infoLv02vfxC.x = 0, this.infoLv02vfxC.setScale(1.45, 1.45), this.infoLv02vfxC.anchorX = 0.5;
          }, x.prototype.Ao = function (p) {
            var b = this,
              L = 1;
            this.infoBoardMask.children.forEach(function (H) {
              p ? (H.getComponent(cc.Sprite).spriteFrame = b.frontBoard_mask_bonus, H.setScale(1.36 * L, 1.44), L = -L, H.setPosition(513.7 * L, 5)) : (H.getComponent(cc.Sprite).spriteFrame = b.frontBoard_mask_normal, H.setScale(1.4 * L, 1.4), L = -L, H.setPosition(498 * L, 7.5));
            });
          }, x.prototype.setInfoState = function (p) {
            this._o = p;
          }, x.prototype.No = function (p) {
            this.infoboardMessageController.clearDisplayNumber(), this.disableSkipButton(), this.infoboardMessageController.showDisplayNumber(this.bo), this.bo = undefined, this.Zt(), p && p();
          }, x.prototype.Go = function (p, b) {
            {
              undefined === p && (p = 0), this.mo = b, this.infoboardMessageController.clearDisplayNumber(), this.infoboardMessageController.showNumberRoll(1, p, this.bo, this.ko.bind(this)), this.bo = undefined;
            }
          }, x.prototype.ko = function () {
            this.gt || this.So || Z.playAudio(T.GENERAL_AUDIO.infoboardTotalwinMedwinEnd.key), this.disableSkipButton(), this.So = false;
            var p = this.mo;
            this.mo = undefined, this.Zt(), p && p();
          }, x.prototype.Io = function () {
            {
              this.winNode.active = true, this.winNode.opacity = 255, this.infoboardMessageController.hideInfoboardMessage();
            }
          }, x.prototype.Oo = function () {
            this.winNode.active = false, this.infoboardMessageController.showInfoboardMessage(), this.infoboardMessageController.clear(true);
          }, x.prototype.Ho = function () {
            this.do = this.fo.slice(0, 6), this.vo = this.fo.slice(6, 7);
          }, x.prototype.Zt = function () {
            {
              this.infoboardMessageController.stop(), this.setInfoState(B.NONE), this.gt = false;
            }
          }, x.prototype.To = function () {
            this.disableSkipButton(), this.Bo ? this.switchToTips(true) : this.freeSpinTips(true);
          }, x.prototype.destroy = function () {
            {
              return this.Zt(), this.node.destroy(), O.prototype.destroy.call(this);
            }
          }, __decorate([g(cc.Animation)], x.prototype, "winAnimation", undefined), __decorate([g(cc.Node)], x.prototype, "infoBoard", undefined), __decorate([g(cc.Node)], x.prototype, "infoBoardMask", undefined), __decorate([g(cc.Sprite)], x.prototype, "frontBoard", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "frontBoard_normal", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "frontBoard_bonus", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "frontBoard_mask_normal", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "frontBoard_mask_bonus", undefined), __decorate([g(cc.Node)], x.prototype, "midWinHolder", undefined), __decorate([g(cc.Node)], x.prototype, "smallWinHolder", undefined), __decorate([g(cc.Node)], x.prototype, "midWinBoard", undefined), __decorate([g(cc.Node)], x.prototype, "smallWinBoard", undefined), __decorate([g(cc.Node)], x.prototype, "contentNode", undefined), __decorate([g(cc.Node)], x.prototype, "winNode", undefined), __decorate([g(cc.Node)], x.prototype, "winAmountNode", undefined), __decorate([g(cc.Sprite)], x.prototype, "winSF", undefined), __decorate([g(cc.Sprite)], x.prototype, "totalWinSF", undefined), __decorate([g(cc.Node)], x.prototype, "skipButtonNode", undefined), __decorate([g(cc.Sprite)], x.prototype, "mediumWinBoardSprite", undefined), __decorate([g(cc.Sprite)], x.prototype, "infoVfxA", undefined), __decorate([g(cc.Sprite)], x.prototype, "infoVfxD", undefined), __decorate([g(cc.Node)], x.prototype, "infoVfxE", undefined), __decorate([g(cc.Node)], x.prototype, "infoLv02VfxI", undefined), __decorate([g(cc.Node)], x.prototype, "smallWinMask", undefined), __decorate([g(cc.Node)], x.prototype, "infoLv02vfxC", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "infoVfxASprite", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "infoVfxABonusSprite", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "infoVfxDSprite", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "infoVfxDBonusSprite", undefined), __decorate([g(cc.Node)], x.prototype, "infoVfxB", undefined), __decorate([q], x);
        }(cc.Component);
      I.default = K, cc._RF.pop();
    }
  }
}
module.exports = InfoBoardController;
