// module: BigWinController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function BigWinController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "4cf10FfM45HlrSaOLMFcjNn", "BigWinController")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x);
      var C,
        H,
        V = require("AutomationDecorator"),
        M = require("AudioManager"),
        q = require("BigWinController.spec"),
        m = require("BGMHandler"),
        D = cc._decorator,
        W = D.ccclass,
        k = D.property;
      (function (L) {
        L[L.INITIAL = 1] = "INITIAL", L[L.PLAYING = 2] = "PLAYING", L[L.WAITING = 3] = "WAITING", L[L.DISMISING = 4] = "DISMISING";
      })(C || (C = {})), function (L) {
        L[L.BIG_WIN = 1] = "BIG_WIN", L[L.MEGA_WIN = 2] = "MEGA_WIN", L[L.SUPER_MEGA_WIN = 3] = "SUPER_MEGA_WIN";
      }(H || (H = {}));
      var z = function (L) {
        function v() {
          var Q = null !== L && L.apply(this, arguments) || this;
          return Q.bigWinSprite = undefined, Q.megaWinSprite = undefined, Q.superMegaWinSprite = undefined, Q.contentNode = undefined, Q.winAmountNode = undefined, Q.backGroundNode = undefined, Q.backDropNode = undefined, Q.bgTintNode = undefined, Q.stopButtonNode = undefined, Q.coinParticleNode = undefined, Q.allBackPatternNode = undefined, Q.patternANode = undefined, Q.patternBNode = undefined, Q.backLightNode = undefined, Q.underLightNode = undefined, Q.sparklesNode = undefined, Q.fireWorkNode = undefined, Q.backGlowNode = undefined, Q.sparkleAnimation = [], Q.yt = undefined, Q.Mt = C.INITIAL, Q.At = H.BIG_WIN, Q.Pt = 0, Q.Bt = undefined, Q.Ot = undefined, Q.It = false, Q.Gt = undefined, Q.Nt = undefined, Q.Tt = undefined, Q.Ht = undefined, Q;
        }
        var b = {};
        b.func = q.initBigWinNodes;
        var U = {};
        U.func = q.skipBigWinButtonActiveEvent;
        return __extends(v, L), Object.defineProperty(v.prototype, "winRollController", {
          'get': function () {
            return this.Gt || (this.Gt = this.winAmountNode.getComponent("TimedWinRollController")), this.Gt;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(v.prototype, "randomShakingController", {
          'get': function () {
            return this.Nt || (this.Nt = this.backDropNode.getComponent("RandomShakingController")), this.Nt;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(v.prototype, "coinParticleController", {
          'get': function () {
            return this.Tt || (this.Tt = this.coinParticleNode.getComponent("CoinParticleController")), this.Tt;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(v.prototype, "fireWorkController", {
          'get': function () {
            return this.Ht || (this.Ht = this.fireWorkNode.getComponent("MainFireWorkController")), this.Ht;
          },
          'enumerable': false,
          'configurable': true
        }), v.prototype.init = function () {
          this.fireWorkController.init(), this.Rt({
            'skipButtonNode': this.stopButtonNode
          });
        }, v.prototype.setSocialShareEventCallback = function (Q) {
          {
            this.kt = Q.onAnimationStopFunc, this.Lt = Q.willCompleteFunc;
          }
        }, v.prototype.setBigWinLocalizeSF = function (Q) {
          {
            this.bigWinSprite.spriteFrame = Q;
          }
        }, v.prototype.setMegaWinlocalizeSF = function (Q) {
          {
            this.megaWinSprite.spriteFrame = Q;
          }
        }, v.prototype.setSuperMegaWinlocalizeSF = function (Q) {
          {
            this.superMegaWinSprite.spriteFrame = Q;
          }
        }, v.prototype.play = function (Q, w, P, R) {
          if (this.Mt === C.INITIAL) {
            var T = this.node;
            T.active = true, T.opacity = 0, T.runAction(cc.fadeIn(0.2)), this.stopButtonNode.active = true, this.Mt = C.PLAYING, this.Bt = P, this.Pt = Q, this.Et = w, this.It = R, this.jt();
          }
        }, v.prototype.stopButtonOnClick = function () {
          this.stopButtonNode.active = false, this.Mt === C.PLAYING ? (this.Dt(), this.scheduleOnce(this.Ut, 1)) : this.Mt === C.WAITING && (M.GeneralAudioPool.bgm_bigwin_end.fade(M.GeneralAudioPool.bgm_bigwin_end.getVolume(), 0, 2), this.Wt());
        }, v.prototype.jt = function () {
          this.Ft(), this.bt(), this.xt(), this.Vt(), this.randomShakingController.play();
        }, v.prototype.Ft = function () {
          {
            var Q = this.winRollController,
              w = this.Et;
            Q.setNumbersCallback([w.megaWinThreshold, w.superMegaWinThreshold]), Q.init({
              'bigWinThreshold': w.bigWinThreshold,
              'megaWinThreshold': w.megaWinThreshold,
              'superMegaWinThreshold': w.superMegaWinThreshold,
              'bigWinDuration': [3.871, 3.097],
              'megaWinDuration': [3.097, 3.097],
              'superMegaWinDuration': [3.097, 3.097],
              'totalWin': this.Pt
            }), Q.play(this.zt.bind(this)), this.stopButtonNode.active = true;
          }
        }, v.prototype.zt = function (Q) {
          {
            var w = this.Et,
              P = this.At;
            Q >= w.megaWinThreshold && Q < w.superMegaWinThreshold && P !== H.MEGA_WIN ? (this.At = H.MEGA_WIN, this.Kt()) : Q >= w.superMegaWinThreshold && P !== H.SUPER_MEGA_WIN && (this.At = H.SUPER_MEGA_WIN, this.qt()), Q === this.Pt && this.Mt === C.PLAYING && (this.Mt = C.WAITING, this.Jt());
          }
        }, v.prototype.Ut = function () {
          this.stopButtonNode.active = true;
        }, v.prototype.Jt = function () {
          M.GeneralAudioPool.bgm_bigwin.fade(M.GeneralAudioPool.bgm_bigwin.getVolume(), 0, 1), M.GeneralAudioPool.bgm_bigwin_end.setVolume(1), M.GeneralAudioPool.bgm_bigwin_end.play(), this.scheduleOnce(this.Yt, 2), this.Qt(), this.Xt(), this.Zt();
          var Q = this.Ot;
          Q && Q(), this.Ot = undefined;
          var w = this.kt;
          this.kt = undefined, w && w();
          var P = this.It ? 1 : 6;
          this.scheduleOnce(this.Wt, P);
        }, v.prototype.xt = function () {
          this.bgTintNode.active = true, this.bgTintNode.runAction(cc.fadeTo(0.2, 180));
        }, v.prototype.bt = function () {
          m.bgmHandler.fadeOutBgm(0.3), M.GeneralAudioPool.bgm_bigwin.setVolume(1), M.GeneralAudioPool.bgm_bigwin.play(), M.GeneralAudioPool.bgm_bigwin_cue.play(), (this.Ot = this.$t(1.4, 1, 1.2))(), this.ti(), this.sparklesNode.runAction(cc.scaleTo(0.2, 1.1)), this.fireWorkController.play(), this.coinParticleController.playBottomCoin(), this.schedule(this.ii, 3), this.si(), this.ei(), this.allBackPatternNode.runAction(cc.scaleTo(0.3, 1.2).easing(cc.easeBackOut())), this.ni(this.backLightNode, 6, 360), this.ni(this.patternBNode, 8, 360), this.oi(1), this.ci();
        }, v.prototype.Kt = function () {
          {
            this.sparklesNode.runAction(cc.scaleTo(0.2, 1.3)), this.coinParticleController.playBottomIngot(), this.hi(), this.allBackPatternNode.runAction(cc.scaleTo(0.2, 1.4)), (this.Ot = this.$t(1.6, 1.2, 1.4))(), this.oi(1.2), this.ci(), M.GeneralAudioPool.bgm_bigwin_cue.play();
          }
        }, v.prototype.qt = function () {
          this.sparklesNode.runAction(cc.scaleTo(0.2, 2)), this.allBackPatternNode.runAction(cc.scaleTo(0.2, 1.6)), this.patternANode.active = true, this.patternANode.color = cc.color(255, 255, 255, 255), this.patternANode.runAction(cc.scaleTo(0.2, 1.7)), this.ni(this.patternANode, 8, -360), (this.Ot = this.$t(1.8, 1.4, 1.6))(), this.oi(1.4), this.ci(), M.GeneralAudioPool.bgm_bigwin_cue.play();
        }, v.prototype.ci = function () {
          var Q,
            w,
            P = 0;
          switch (this.At) {
            case H.BIG_WIN:
              Q = this.yt = this.bigWinSprite.node, P = 0;
              break;
            case H.MEGA_WIN:
              w = this.yt, Q = this.yt = this.megaWinSprite.node, P = 0.1;
              break;
            case H.SUPER_MEGA_WIN:
              w = this.yt, Q = this.yt = this.superMegaWinSprite.node, P = 0.1;
          }
          var R = cc.view.getVisibleSize().width;
          w && w.runAction(cc.moveTo(0.2, cc.v2(R, w.y)).easing(cc.easeSineInOut())), Q.runAction(cc.sequence(cc.delayTime(P), cc.moveTo(0.2, cc.v2(25, Q.y)).easing(cc.easeBackOut())));
        }, v.prototype.$t = function (Q, w, P) {
          var R = this;
          return function () {
            R.backGroundNode.runAction(cc.sequence(cc.scaleTo(0.2, Q), cc.callFunc(R.ri, R), cc.scaleTo(0.15, w), cc.scaleTo(0.15, P)));
          };
        }, v.prototype.ri = function () {
          var Q = this.backGlowNode;
          Q.setScale(this.backGroundNode.scale + 0.3), Q.opacity = 255, Q.runAction(cc.spawn(cc.scaleBy(0.4, 1.3).easing(cc.easeSineOut()), cc.fadeOut(0.8).easing(cc.easeSineOut())));
        }, v.prototype.Yt = function () {
          this.unschedule(this.Yt), m.bgmHandler.fadeInBgm(2);
        }, v.prototype.ni = function (Q, w, P) {
          Q.runAction(cc.repeatForever(cc.rotateBy(w, P)));
        }, v.prototype.ti = function () {
          this.sparkleAnimation.forEach(function (Q) {
            Q.play();
          });
        }, v.prototype.ii = function () {
          this.coinParticleController.playMiddleCoin();
        }, v.prototype.si = function () {
          this.coinParticleController.playGravityCoin();
        }, v.prototype.hi = function () {
          this.coinParticleController.playGravityIngot();
        }, v.prototype.ei = function () {
          {
            this.underLightNode.active = true, this.underLightNode.opacity = 0, this.underLightNode.runAction(cc.fadeIn(0.5));
          }
        }, v.prototype.oi = function (Q) {
          {
            this.contentNode.runAction(cc.scaleTo(0.2, Q));
          }
        }, v.prototype.Xt = function () {
          if (!(this.contentNode.getNumberOfRunningActions() > 0)) {
            var Q = this.contentNode.scale;
            this.contentNode.runAction(cc.sequence(cc.scaleBy(0.15, 1.5), cc.scaleTo(0.15, Q - 0.1), cc.scaleTo(0.2, Q).easing(cc.easeBackOut())));
          }
        }, v.prototype.Zt = function () {
          if (!(this.yt.getNumberOfRunningActions() > 0)) {
            var Q = this.yt.scale;
            this.yt.runAction(cc.sequence(cc.scaleBy(0.1, 1.5), cc.scaleTo(0.15, Q - 0.1), cc.scaleTo(0.2, Q).easing(cc.easeBackOut()))), this.yt = undefined;
          }
        }, v.prototype.Dt = function () {
          this.Mt === C.PLAYING && this.winRollController.skip();
        }, v.prototype.Wt = function () {
          if (this.Mt === C.WAITING) {
            this.Mt = C.DISMISING, this.stopButtonNode.active = false;
            var Q = this.Lt;
            this.Lt = undefined, Q && Q(), this.ai();
          }
        }, v.prototype.ai = function () {
          this.node.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(this.ui, this))), this.patternBNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.backLightNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.patternANode.active && this.patternANode.runAction(cc.tintTo(0.2, 0, 0, 0));
        }, v.prototype.Qt = function () {
          this.randomShakingController.stop();
        }, v.prototype.li = function () {
          this.allBackPatternNode.scale = 0, this.patternANode.scale = 0, this.patternANode.active = false, this.patternBNode.color = cc.color(255, 255, 255, 255), this.backLightNode.color = cc.color(255, 255, 255, 255);
        }, v.prototype.ui = function () {
          {
            var Q = this.Bt;
            this.Bt = undefined, this.fi(), Q && Q();
          }
        }, v.prototype.di = function () {
          this.coinParticleController.stopMiddleCoin(), this.coinParticleController.stopBottomCoin(), this.coinParticleController.stopBottomIngot(), this.coinParticleController.stopGravityCoin(), this.coinParticleController.stopGravityIngot();
        }, v.prototype.vi = function () {
          {
            this.patternANode.stopAllActions(), this.patternBNode.stopAllActions(), this.backLightNode.stopAllActions();
          }
        }, v.prototype.fi = function () {
          M.GeneralAudioPool.bgm_bigwin.stop(), M.GeneralAudioPool.bgm_bigwin_end.stop(), m.bgmHandler.fadeInBgm(1), this.unschedule(this.Wt), this.unschedule(this.Ut), this.unschedule(this.ii), this.unschedule(this.Yt);
          var Q = cc.view.getVisibleSize().width;
          this.bigWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.megaWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.superMegaWinSprite.node.position = cc.v2(-Q, this.bigWinSprite.node.y), this.underLightNode.active = false, this.fireWorkController.stop(), this.backGroundNode.scale = 0, this.contentNode.scale = 0, this.backGlowNode.stopAllActions(), this.li(), this.di(), this.vi(), this.Mt = C.INITIAL, this.At = H.BIG_WIN, this.Bt = undefined, this.Ot = undefined, this.Pt = undefined, this.Et = undefined;
          var w = this.node;
          w.opacity = 0, w.stopAllActions(), w.active = false;
        }, v.prototype.Rt = function () {}, v.prototype.Vt = function () {}, __decorate([k(cc.Sprite)], v.prototype, "bigWinSprite", undefined), __decorate([k(cc.Sprite)], v.prototype, "megaWinSprite", undefined), __decorate([k(cc.Sprite)], v.prototype, "superMegaWinSprite", undefined), __decorate([k(cc.Node)], v.prototype, "contentNode", undefined), __decorate([k(cc.Node)], v.prototype, "winAmountNode", undefined), __decorate([k(cc.Node)], v.prototype, "backGroundNode", undefined), __decorate([k(cc.Node)], v.prototype, "backDropNode", undefined), __decorate([k(cc.Node)], v.prototype, "bgTintNode", undefined), __decorate([k(cc.Node)], v.prototype, "stopButtonNode", undefined), __decorate([k(cc.Node)], v.prototype, "coinParticleNode", undefined), __decorate([k(cc.Node)], v.prototype, "allBackPatternNode", undefined), __decorate([k(cc.Node)], v.prototype, "patternANode", undefined), __decorate([k(cc.Node)], v.prototype, "patternBNode", undefined), __decorate([k(cc.Node)], v.prototype, "backLightNode", undefined), __decorate([k(cc.Node)], v.prototype, "underLightNode", undefined), __decorate([k(cc.Node)], v.prototype, "sparklesNode", undefined), __decorate([k(cc.Node)], v.prototype, "fireWorkNode", undefined), __decorate([k(cc.Node)], v.prototype, "backGlowNode", undefined), __decorate([k(cc.Animation)], v.prototype, "sparkleAnimation", undefined), __decorate([V.automationDec(b)], v.prototype, "_initBigWinNodes", null), __decorate([V.automationDec(U)], v.prototype, "_skipButtonActive", null), __decorate([W], v);
      }(cc.Component);
      exports.default = z, cc._RF.pop();
    }
  }
}
module.exports = BigWinController;
