// module: NormalSpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function NormalSpinButtonController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "cf150DqXjNKya/LvYgDW43R", "NormalSpinButtonController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.normalSpinHolder = undefined, q.arrowSpriteNode = undefined, q.arrowSprite = undefined, q.arrowNormalSprite = undefined, q.arrowBlurSprite = undefined, q.arrowGreySprite = undefined, q.arrowGreyBlurSprite = undefined, q;
        }
        return __extends(M, V), M.prototype.init = function () {
          this.arrowSprite.spriteFrame = this.arrowNormalSprite, this.ia(), this.show(false);
        }, M.prototype.setSpriteFrame = function (q, m, D, W) {
          this.arrowNormalSprite = q, this.arrowBlurSprite = m, this.arrowGreySprite = D, this.arrowGreyBlurSprite = W;
        }, M.prototype.setIdleLook = function () {
          this.arrowSprite.spriteFrame = this.arrowNormalSprite, this.ia();
        }, M.prototype.setSpinningLook = function () {
          this.arrowSprite.spriteFrame = this.arrowBlurSprite, this.sa();
        }, M.prototype.setFastSpinLook = function () {
          this.arrowSprite.spriteFrame = this.arrowGreyBlurSprite, this.sa();
        }, M.prototype.setFastStopLook = function () {
          {
            this.arrowSprite.spriteFrame = this.arrowGreyBlurSprite, this.arrowSpriteNode.stopAllActions();
          }
        }, M.prototype.setStopLook = function () {
          {
            this.arrowSprite.spriteFrame = this.arrowGreySprite, this.arrowSpriteNode.stopAllActions();
          }
        }, M.prototype.show = function (q) {
          undefined === q && (q = true), this.normalSpinHolder.active = true, this.normalSpinHolder.stopAllActions(), q ? (this.normalSpinHolder.opacity = 0, this.normalSpinHolder.runAction(cc.fadeIn(0.3))) : this.normalSpinHolder.opacity = 255;
        }, M.prototype.hide = function () {
          this.arrowSpriteNode.stopAllActions(), this.normalSpinHolder.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(this.ea, this)));
        }, M.prototype.ea = function () {
          this.normalSpinHolder.active = false;
        }, M.prototype.ia = function () {
          this.arrowSpriteNode.runAction(cc.repeatForever(cc.rotateBy(4, 360)));
        }, M.prototype.sa = function () {
          {
            this.arrowSpriteNode.runAction(cc.repeatForever(cc.rotateBy(0.4, 360)));
          }
        }, M.prototype.q = function () {
          this.arrowSpriteNode.stopAllActions(), this.normalSpinHolder.stopAllActions();
        }, M.prototype.destroy = function () {
          {
            return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
          }
        }, __decorate([H(cc.Node)], M.prototype, "normalSpinHolder", undefined), __decorate([H(cc.Node)], M.prototype, "arrowSpriteNode", undefined), __decorate([H(cc.Sprite)], M.prototype, "arrowSprite", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = NormalSpinButtonController;
