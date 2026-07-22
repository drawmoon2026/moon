// module: PiggyController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PiggyController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "1fe875rK4ZNGb1Yuop0XJGn", "PiggyController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x,
        C = require("AudioManager"),
        H = cc._decorator,
        V = H.ccclass,
        M = H.property;
      (function (m) {
        m[m.NORMAL = 1] = "NORMAL", m[m.FASTSPIN = 2] = "FASTSPIN", m[m.FEATURE = 3] = "FEATURE", m[m.WILD_REACT = 4] = "WILD_REACT";
      })(x || (x = {}));
      var q = function (m) {
        function D() {
          {
            var W = null !== m && m.apply(this, arguments) || this;
            return W.piggySpine = undefined, W.piggyAnim = undefined, W.piggyWildReactFxAnim = undefined, W.flareAnimation = undefined, W.piggySprite = undefined, W.dl = 0, W.vl = 0, W;
          }
        }
        return __extends(D, m), D.prototype.init = function () {
          this.dl = 0, this.playIdle();
        }, D.prototype._l = function (W, k) {
          if ("shoot" === k.data.name) {
            var z = this.pl;
            z && z(), this.pl = undefined, this.piggySpine.setEventListener(undefined), this.flareAnimation.node.active = true, this.flareAnimation.on("finished", this.bl, this), this.flareAnimation.play("flash_frame");
          }
        }, D.prototype.bl = function () {
          this.flareAnimation.off("finished", this.bl, this), this.flareAnimation.node.active = false;
        }, D.prototype.playFeatureExit = function (W) {
          {
            var k = this.piggySpine;
            k.node.active || (k.node.active = true), this.Sl(), this.vl = x.FEATURE, this.onFeatureExitCallback = W, k.clearTrack(0), k.setCompleteListener(this.gl.bind(this)), k.setAnimation(0, "feature_exit", false);
          }
        }, D.prototype.gl = function () {
          var W = this.piggySpine;
          W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
          var k = this.onFeatureExitCallback;
          this.onFeatureExitCallback = undefined, k && k();
        }, D.prototype.playFeatureIdle = function () {
          var W = this.piggySpine;
          W.node.active || (W.node.active = true), this.Sl(), this.vl = x.FEATURE, W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "feature_idle", true);
        }, D.prototype.playFeatureStart = function (W) {
          var k = this.piggySpine;
          k.node.active || (k.node.active = true), this.Sl(), this.pl = W, this.vl = x.FEATURE, k.clearTrack(0), k.setToSetupPose(), k.setCompleteListener(this.playFeatureIdle.bind(this)), k.setEventListener(this._l.bind(this)), k.setAnimation(0, "feature_win", false);
        }, D.prototype.playIdle = function () {
          var W = this.piggySpine;
          W.node.active || (W.node.active = true), this.Sl();
          var k = Math.random();
          W.clearTrack(0), W.setCompleteListener(this.playIdle.bind(this)), k < 0.1 ? (C.GeneralAudioPool.cha_inactive.play(), W.setAnimation(0, "idle3", true)) : k < 0.3 ? W.setAnimation(0, "idle2", false) : W.setAnimation(0, "idle", true);
        }, D.prototype.forceIdle1 = function () {
          {
            var W = this.piggySpine;
            W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle", false);
          }
        }, D.prototype.forceIdle2 = function () {
          var W = this.piggySpine;
          W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle2", false);
        }, D.prototype.forceIdle3 = function () {
          {
            var W = this.piggySpine;
            W.node.active || (W.node.active = true), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "idle3", false);
          }
        }, D.prototype.playEnterFastSpin = function () {
          var W = this.piggySpine;
          W.node.active || (W.node.active = true), this.Sl(), this.vl = x.FASTSPIN, W.clearTrack(0), W.setToSetupPose(), W.setCompleteListener(this.playFastSpinning.bind(this)), W.setAnimation(0, "fastspin_start", false);
        }, D.prototype.playFastSpinning = function () {
          var W = this.piggySpine;
          W.node.active || (W.node.active = true), this.Sl(), W.clearTrack(0), W.setCompleteListener(undefined), W.setAnimation(0, "fastspin_idle", true);
        }, D.prototype.playExitFastSpin = function (W) {
          if (this.vl === x.FASTSPIN) {
            this.vl = x.NORMAL;
            var k = this.piggySpine;
            k.node.active || (k.node.active = true), this.Sl(), this.onFastSpinExitCallback = W, k.clearTrack(0), k.setCompleteListener(this.Cl.bind(this)), k.setAnimation(0, "fastspin_exit", false);
          }
          W && W();
        }, D.prototype.Cl = function () {
          var W = this.piggySpine;
          W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
          var k = this.onFastSpinExitCallback;
          this.onFastSpinExitCallback = undefined, k && k();
        }, D.prototype.playWildReact = function (W) {
          {
            this.vl = x.WILD_REACT;
            var k = this.piggySpine;
            k.node.active || (k.node.active = true), this.Sl(), this.onWildReactCallback = W, k.clearTrack(0), k.setCompleteListener(this.yl.bind(this)), k.setAnimation(0, "wild_react", false), this.Ml();
          }
        }, D.prototype.yl = function () {
          var W = this.piggySpine;
          W.clearTrack(0), W.setCompleteListener(undefined), this.playIdle();
          var k = this.onWildReactCallback;
          this.onWildReactCallback = undefined, k && k();
        }, D.prototype.Ml = function () {
          var W = this.piggyWildReactFxAnim;
          W.node.active = true, this.wl(), W.on("finished", this.Al, this), W.play("pig_wild_react");
        }, D.prototype.Al = function () {
          {
            var W = this.piggyWildReactFxAnim;
            W.off("finished", this.Al, this), W.node.active = false;
          }
        }, D.prototype.playBigWin = function () {
          this.piggySprite.node.active = true, this.wl(), C.GeneralAudioPool.cha_afterbigwin.play(), this.forceIdle1();
          var W = this.piggyAnim;
          W.on("finished", this.Pl, this), W.on("play", this.Bl, this), W.play("pig_big_win");
        }, D.prototype.playSmallWin = function () {
          this.piggySprite.node.active = true, this.wl(), this.Ol(), this.forceIdle1();
          var W = this.piggyAnim;
          W.on("finished", this.Pl, this), W.on("play", this.Bl, this), W.play("pig_small_win");
        }, D.prototype.Bl = function () {
          this.piggyAnim.off("play", this.Bl, this);
          var W = this.piggySpine;
          W.clearTrack(0), W.node.active = false;
        }, D.prototype.Pl = function () {
          this.piggyAnim.off("finished", this.Pl, this), this.piggySprite.node.active = false;
        }, D.prototype.stopAnim = function () {
          this.piggyAnim.stop(), this.piggySpine.clearTrack(0);
        }, D.prototype.Ol = function () {
          switch (this.dl) {
            case 0:
              C.GeneralAudioPool.cha_prize_win_a.play(), this.dl += 1;
              break;
            case 1:
              C.GeneralAudioPool.cha_prize_win_b.play(), this.dl += 1;
              break;
            case 2:
              C.GeneralAudioPool.cha_prize_win_c.play(), this.dl = 0;
          }
        }, D.prototype.wl = function () {
          C.GeneralAudioPool.cha_inactive.isPlaying() && C.GeneralAudioPool.cha_inactive.stop();
        }, D.prototype.Js = function (W, k) {
          return Math.floor(Math.random() * Math.floor(W) + k);
        }, D.prototype.Sl = function () {
          {
            this.piggyAnim.stop();
            var W = this.piggySprite;
            W.spriteFrame = undefined, W.node.active = false;
          }
        }, D.prototype.destroy = function () {
          {
            return this.stopAnim(), this.node.destroy(), m.prototype.destroy.call(this);
          }
        }, __decorate([M(sp.Skeleton)], D.prototype, "piggySpine", undefined), __decorate([M(cc.Animation)], D.prototype, "piggyAnim", undefined), __decorate([M(cc.Animation)], D.prototype, "piggyWildReactFxAnim", undefined), __decorate([M(cc.Animation)], D.prototype, "flareAnimation", undefined), __decorate([M(cc.Sprite)], D.prototype, "piggySprite", undefined), __decorate([V], D);
      }(cc.Component);
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = PiggyController;
