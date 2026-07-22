// module: RemainingFreeSpinController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function RemainingFreeSpinController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "4e9d4vU9Y1NB5cTHTdqss09", "RemainingFreeSpinController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("Utils"),
      X = F("AudioManager"),
      Z = F("AudioConstant"),
      T = F("GameConstant"),
      M = cc._decorator,
      C = M.ccclass,
      V = M.property,
      N = function (q) {
        function f() {
          var g = null !== q && q.apply(this, arguments) || this;
          return g.numberDisplayNode = undefined, g.numberDisplayContainer = undefined, g.remainingFreeSpinNode = undefined, g.remainingSprite = undefined, g.lastFreeSpinSprite = undefined, g.glowNode = undefined, g.particles = [], g.ci = undefined, g.fd = 0, g.dd = 0, g.vd = 0, g._d = -1, g.hi = undefined, g;
        }
        return __extends(f, q), Object.defineProperty(f.prototype, "numberDisplayController", {
          'get': function () {
            {
              return this.ci || (this.ci = this.numberDisplayNode.getComponent("NumberDisplayController")), this.ci;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(f.prototype, "freeSpinCount", {
          'get': function () {
            return this.fd;
          },
          'enumerable': false,
          'configurable': true
        }), f.prototype.init = function () {
          T.isRTL && (this.remainingFreeSpinNode.getComponent(cc.Layout).horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, this.remainingFreeSpinNode.x = -40);
        }, f.prototype.setLocalizedSpriteFrame = function (g, l) {
          this.remainingSprite.spriteFrame = g, this.lastFreeSpinSprite.spriteFrame = l;
        }, f.prototype.show = function () {
          {
            this.node.active = true;
          }
        }, f.prototype.hide = function () {
          {
            this.node.active = false;
          }
        }, f.prototype.setFreeSpinCount = function (g) {
          {
            this.numberDisplayController.clear(), this.fd = g, this.setRemainingFreeSpinCount(this.fd);
          }
        }, f.prototype.decrementFreeSpinCount = function (g) {
          this.fd--, this.setRemainingFreeSpinCount(this.fd), g && g();
        }, f.prototype.increaseFreeSpinCount = function (g, l) {
          {
            this.fd !== g ? (this.dd = this.fd, this.fd = g, this.scheduleOnce(this.md, 0), this.hi = l) : l && l();
          }
        }, f.prototype.setRemainingFreeSpinCount = function (g) {
          0 === g ? (this.numberDisplayNode.active = false, this.lastFreeSpinSprite.node.active = true, this.remainingFreeSpinNode.active = false, this.numberDisplayContainer.setScale(0)) : g > 0 && (this.numberDisplayContainer.setScale(1), this.numberDisplayNode.active = true, this.numberDisplayController.displayNumber(g), this.lastFreeSpinSprite.node.active = false, this.remainingFreeSpinNode.active = true), this.node.active = true;
        }, f.prototype.md = function () {
          this.fd != this.dd ? (X.playAudio(Z.GENERAL_AUDIO.freespinRemainingUp.key), this.dd++, this.numberDisplayNode.y = 25, this.numberDisplayNode.runAction(cc.moveTo(0.1, cc.v2(0, 0)).easing(cc.easeBackOut())), this._d++, this.particles[this._d].resetSystem(), 2 === this._d && (this._d = -1), this.setRemainingFreeSpinCount(this.dd), this.bd(), B.delayCallback(0.1)(this.md.bind(this))) : this.ri();
        }, f.prototype.ri = function () {
          {
            this._d = -1, this.vd = 0;
            var g = this.hi;
            this.hi = undefined, g && g();
          }
        }, f.prototype.bd = function () {
          this.vd += 1, this.glowNode.opacity = this.vd > 1 ? 150 : 0, this.glowNode.stopAllActions(), this.glowNode.runAction(cc.sequence(cc.fadeIn(0.4), cc.fadeOut(0.2)));
        }, f.prototype.pd = function () {
          this.ci = undefined, this.remainingSprite.spriteFrame = undefined, this.remainingSprite = undefined, this.lastFreeSpinSprite.spriteFrame = undefined, this.lastFreeSpinSprite = undefined, this.fd = 0, this.numberDisplayController.clear(), this.vd = 0;
        }, f.prototype.destroy = function () {
          return this.pd(), this.node.destroy(), q.prototype.destroy.call(this);
        }, __decorate([V(cc.Node)], f.prototype, "numberDisplayNode", undefined), __decorate([V(cc.Node)], f.prototype, "numberDisplayContainer", undefined), __decorate([V(cc.Node)], f.prototype, "remainingFreeSpinNode", undefined), __decorate([V(cc.Sprite)], f.prototype, "remainingSprite", undefined), __decorate([V(cc.Sprite)], f.prototype, "lastFreeSpinSprite", undefined), __decorate([V(cc.Node)], f.prototype, "glowNode", undefined), __decorate([V([cc.ParticleSystem])], f.prototype, "particles", undefined), __decorate([C], f);
      }(cc.Component);
    I.default = N, cc._RF.pop();
  }
}
module.exports = RemainingFreeSpinController;
