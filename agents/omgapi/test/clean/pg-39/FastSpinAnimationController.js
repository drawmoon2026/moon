// module: FastSpinAnimationController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function FastSpinAnimationController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "71b81mtzYVLsIN6c79edsP9", "FastSpinAnimationController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("AudioManager"),
      C = require("Utils"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          {
            var W = null !== m && m.apply(this, arguments) || this;
            return W.fastSpinNode = undefined, W.scrolleNode = undefined, W.fastSpinShineLeftNode = undefined, W.fastSpinShineRightNode = undefined, W.fastSpinShineLeftNodeSecond = undefined, W.fastSpinShineRightNodeSecond = undefined, W.fastSpinSpriteAnimation = undefined, W;
          }
        }
        return __extends(D, m), D.prototype.playFastSpinShine = function (W) {
          this.node.active = true, this.scrolleNode.active = true;
          var k = cc.repeatForever(cc.sequence(cc.tintTo(0.45, 255, 255, 255), cc.tintTo(0.45, 0, 0, 0)));
          this.fastSpinNode.runAction(k);
          var z = cc.repeatForever(cc.sequence(cc.fadeTo(0.25, 255), cc.fadeTo(0.25, 0)));
          this.scrolleNode.runAction(z);
          var L = cc.tintTo(0.3, 150, 150, 150),
            v = cc.tintTo(0.3, 150, 150, 150);
          this.fastSpinShineLeftNode.runAction(L), this.fastSpinShineRightNode.runAction(v);
          var b = cc.sequence(cc.tintTo(0.3, 150, 150, 150), cc.callFunc(this.Us, this)),
            U = cc.tintTo(0.3, 150, 150, 150);
          this.fastSpinShineLeftNodeSecond.runAction(b), this.fastSpinShineRightNodeSecond.runAction(U), this.fastSpinSpriteAnimation.play();
          var Q = cc.tintTo(0.6, 255, 255, 255);
          this.fastSpinSpriteAnimation.node.runAction(Q), C.delayCallback(W)(this.stopFastSpinSprite.bind(this)), x.GeneralAudioPool.fs_fastspin.setVolume(1), x.GeneralAudioPool.fs_fastspin.play();
        }, D.prototype.Us = function () {
          var W = cc.sequence(cc.scaleTo(0.5, 1, 1), cc.scaleTo(0.5, 0.5, 1)),
            k = cc.sequence(cc.scaleTo(0.5, -1, 1), cc.scaleTo(0.5, -0.5, 1)),
            z = cc.repeatForever(W),
            L = cc.repeatForever(k);
          this.fastSpinShineLeftNode.runAction(z), this.fastSpinShineRightNode.runAction(L);
          var v = cc.sequence(cc.scaleTo(0.5, 0.5, 1), cc.scaleTo(0.5, 1, 1)),
            b = cc.sequence(cc.scaleTo(0.5, -0.5, 1), cc.scaleTo(0.5, -1, 1)),
            U = cc.repeatForever(v),
            Q = cc.repeatForever(b);
          this.fastSpinShineLeftNodeSecond.runAction(U), this.fastSpinShineRightNodeSecond.runAction(Q);
        }, D.prototype.stopFastSpinSprite = function () {
          {
            this.fastSpinSpriteAnimation.node.stopAllActions();
            var W = cc.sequence(cc.tintTo(1, 0, 0, 0), cc.callFunc(this.Ws, this));
            this.fastSpinSpriteAnimation.node.runAction(W), x.GeneralAudioPool.fs_fastspin.isPlaying() && x.GeneralAudioPool.fs_fastspin.fade(x.GeneralAudioPool.fs_fastspin.getVolume(), 0, 1), x.GeneralAudioPool.reel_nearwin_slowdown.setVolume(1), x.GeneralAudioPool.reel_nearwin_slowdown.play();
          }
        }, D.prototype.stopFastSpinShine = function () {
          {
            this.fastSpinNode.stopAllActions(), this.fastSpinShineLeftNode.stopAllActions(), this.fastSpinShineRightNode.stopAllActions(), this.fastSpinShineLeftNodeSecond.stopAllActions(), this.fastSpinShineRightNodeSecond.stopAllActions(), this.fastSpinNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineLeftNode.runAction(cc.sequence(cc.tintTo(0.2, 0, 0, 0), cc.callFunc(this.Fs, this))), this.fastSpinShineRightNode.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineLeftNodeSecond.runAction(cc.tintTo(0.2, 0, 0, 0)), this.fastSpinShineRightNodeSecond.runAction(cc.tintTo(0.2, 0, 0, 0)), x.GeneralAudioPool.reel_nearwin_slowdown.isPlaying() && x.GeneralAudioPool.reel_nearwin_slowdown.fade(x.GeneralAudioPool.reel_nearwin_slowdown.getVolume(), 0, 0.2);
          }
        }, D.prototype.stopScrollerShine = function (W) {
          this.scrolleNode.stopAllActions();
          var k = W ? 255 : 0;
          this.scrolleNode.runAction(cc.fadeTo(0.2, k));
        }, D.prototype.Ws = function () {
          this.fastSpinSpriteAnimation.stop();
        }, D.prototype.activeScrollNode = function () {
          this.scrolleNode.opacity = 255, this.scrolleNode.active = true;
        }, D.prototype.reset = function () {
          {
            this.scrolleNode.opacity = 0, this.scrolleNode.active = false;
          }
        }, D.prototype.Fs = function () {
          this.fastSpinNode.stopAllActions(), this.fastSpinShineLeftNode.stopAllActions(), this.fastSpinShineRightNode.stopAllActions(), this.fastSpinShineLeftNodeSecond.stopAllActions(), this.fastSpinShineRightNodeSecond.stopAllActions(), this.node.active = false;
        }, __decorate([M(cc.Node)], D.prototype, "fastSpinNode", undefined), __decorate([M(cc.Node)], D.prototype, "scrolleNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineLeftNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineRightNode", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineLeftNodeSecond", undefined), __decorate([M(cc.Node)], D.prototype, "fastSpinShineRightNodeSecond", undefined), __decorate([M(cc.Animation)], D.prototype, "fastSpinSpriteAnimation", undefined), __decorate([V], D);
      }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = FastSpinAnimationController;
