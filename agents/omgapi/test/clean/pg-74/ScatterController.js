// module: ScatterController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ScatterController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "26262Toe5JM2YL3I29am66v", "ScatterController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SymbolImageHandler"),
      X = require("GameConstant"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function N() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.screenModeNodes = [], q.otherNodes = [], q.scatterSymbol = undefined, q.symbolBase = undefined, q.scatterBlur = undefined, q.vfx = [], q.winGlowA = [], q.winAnim = undefined, q.heartBeatEffects = undefined, q.ri = undefined, q;
        }
        return __extends(N, V), N.prototype.init = function (q) {
          this.reset();
          var f = B.symbolImageHandler.symbolImages[X.SLOT_SYMBOLS.SCATTER],
            g = B.symbolImageHandler.blurredSymbolImages[X.SLOT_SYMBOLS.SCATTER];
          this.scatterSymbol.spriteFrame = q ? g : f, this.scatterSymbol.node.scale = q ? 2 : 1;
        }, N.prototype.play = function (q, f) {
          undefined === f && (f = true), this.stop(true), this.ri = q, this.vfx.forEach(function (g) {
            g.active = true, g.opacity = 255;
          }), f || (this.vfx[0].active = false), this.winAnim.play();
        }, N.prototype.playIdle = function () {
          this.playLoop();
        }, N.prototype.stop = function (q) {
          q ? (this.vfx[0] && (this.vfx[0].opacity = 0), this.winGlowA.forEach(function (f) {
            f.opacity = 0, f.angle = 0;
          })) : (this.vfx[0] && this.vfx[0].runAction(cc.fadeOut(0.2).easing(cc.easeIn(2))), this.winGlowA.forEach(function (f) {
            f.runAction(cc.fadeOut(0.2).easing(cc.easeIn(2))), f.angle = 0;
          })), this.finalCallback();
        }, N.prototype.reset = function () {
          this.winAnim.stop(), this.winAnim.setCurrentTime(0), this.unscheduleAllCallbacks(), this.disableDimLight(true), this.heartBeatEffects.active = false, this.vfx.forEach(function (q) {
            q.stopAllActions(), q.active = false, q.opacity = 255;
          }), this.winGlowA.forEach(function (q) {
            q.stopAllActions(), q.opacity = 0, q.angle = 0;
          }), this.scatterSymbol.node.color = cc.Color.WHITE, this.symbolBase.color = cc.Color.WHITE, this.ri = undefined;
        }, N.prototype.idle = function () {
          this.disableDimLight();
        }, N.prototype.enableDimLight = function () {
          this.winGlowA.forEach(function (q) {
            q.color = new cc.Color(76, 76, 76);
          }), this.screenModeNodes.forEach(function (q, f) {
            0 !== f && 1 !== f && 3 !== f && q.runAction(cc.tintTo(0.2, 76, 76, 76));
          }), this.otherNodes.forEach(function (q, f) {
            1 !== f && 4 !== f && 9 !== f && 7 !== f && q.runAction(cc.tintTo(0.2, 76, 76, 76));
          });
        }, N.prototype.disableDimLight = function (q) {
          this.winGlowA.forEach(function (f) {
            f.color = new cc.Color(255, 255, 255);
          }), this.screenModeNodes.forEach(function (f, g) {
            0 !== g && 1 !== g && 3 !== g && f.stopAllActions();
          }), this.otherNodes.forEach(function (f, g) {
            1 !== g && 4 !== g && 9 !== g && 7 !== g && f.stopAllActions();
          }), q ? (this.screenModeNodes.forEach(function (f, g) {
            0 !== g && 1 !== g && 3 !== g && (f.color = cc.Color.WHITE);
          }), this.otherNodes.forEach(function (f, g) {
            1 !== g && 4 !== g && 9 !== g && 7 !== g && (f.color = cc.Color.WHITE);
          })) : (this.screenModeNodes.forEach(function (f, g) {
            0 !== g && 1 !== g && 3 !== g && f.runAction(cc.tintTo(0.2, 255, 255, 255));
          }), this.otherNodes.forEach(function (f, g) {
            1 !== g && 4 !== g && 9 !== g && 7 !== g && f.runAction(cc.tintTo(0.2, 255, 255, 255));
          }));
        }, N.prototype.playLoop = function () {
          this.vfx.forEach(function (q) {
            q.active = true;
          }), this.winAnim.playAdditive("scatter_loop_anim"), this.xr();
        }, N.prototype.finalCallback = function () {
          var q = this.ri;
          this.ri = undefined, q && q();
        }, N.prototype.xr = function () {
          this.winGlowA.forEach(function (q) {
            q.active = true, q.opacity = 255;
          }), this.winGlowA[0] && this.winGlowA[0].runAction(cc.repeatForever(cc.rotateBy(10, 360))), this.winGlowA[1] && this.winGlowA[1].runAction(cc.repeatForever(cc.rotateBy(10, -360))), this.winGlowA[2] && this.winGlowA[2].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 1.2), cc.scaleTo(0.5, 0.8))));
        }, __decorate([M([cc.Node])], N.prototype, "screenModeNodes", undefined), __decorate([M([cc.Node])], N.prototype, "otherNodes", undefined), __decorate([M(cc.Sprite)], N.prototype, "scatterSymbol", undefined), __decorate([M(cc.Node)], N.prototype, "symbolBase", undefined), __decorate([M(cc.SpriteFrame)], N.prototype, "scatterBlur", undefined), __decorate([M([cc.Node])], N.prototype, "vfx", undefined), __decorate([M([cc.Node])], N.prototype, "winGlowA", undefined), __decorate([M(cc.Animation)], N.prototype, "winAnim", undefined), __decorate([M(cc.Node)], N.prototype, "heartBeatEffects", undefined), __decorate([T], N);
      }(cc.Component);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = ScatterController;
