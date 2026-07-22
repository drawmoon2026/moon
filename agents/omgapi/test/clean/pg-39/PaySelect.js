// module: PaySelect
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function PaySelect(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "13c91j1YBNNraBMILpxtarV", "PaySelect")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.animation = undefined, q.symbolAnimation = undefined, q.glowNode = undefined, q.symbolSprite = undefined, q.payLineLeft = undefined, q.payLineRight = undefined, q.ku = undefined, q;
        }
        return __extends(M, V), M.prototype.playBg = function () {
          this.ku && (this.animation.off("finished", this.Lu, this), this.ku = undefined), this.animation.on("finished", this.Eu, this), this.animation.play("pay_select_show"), this.glowNode.runAction(cc.repeatForever(cc.rotateBy(1, 50)));
        }, M.prototype.playWithSymbol = function (q) {
          this.playBg(), this.symbolSprite.spriteFrame = q, this.symbolAnimation.play(), this.schedule(this.ju, 1.5);
        }, M.prototype.ju = function () {
          this.symbolAnimation.play();
        }, M.prototype.payLineGlow = function () {
          var q = cc.sequence(cc.tintTo(0.2, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0)),
            m = cc.sequence(cc.tintTo(0.2, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0));
          this.payLineLeft.runAction(q), this.payLineRight.runAction(m);
        }, M.prototype.Eu = function () {
          this.animation.off("finished", this.Eu, this), this.animation.play("pay_select_circle");
        }, M.prototype.stop = function (q) {
          this.animation.stop(), q && (this.ku = q, this.animation.on("finished", this.Lu, this)), this.animation.play("pay_select_hide"), this.glowNode.stopAllActions(), this.payLineLeft.stopAllActions(), this.payLineRight.stopAllActions(), this.unschedule(this.ju), this.symbolAnimation.stop(), this.symbolSprite.node.scale = 1, this.symbolSprite.spriteFrame = undefined;
        }, M.prototype.Lu = function () {
          this.animation.off("finished", this.Lu, this);
          var q = this.ku;
          this.ku = undefined, q && q();
        }, M.prototype.destroy = function () {
          return this.stop(undefined), this.node.destroy(), V.prototype.destroy.call(this);
        }, __decorate([H(cc.Animation)], M.prototype, "animation", undefined), __decorate([H(cc.Animation)], M.prototype, "symbolAnimation", undefined), __decorate([H(cc.Node)], M.prototype, "glowNode", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbolSprite", undefined), __decorate([H(cc.Node)], M.prototype, "payLineLeft", undefined), __decorate([H(cc.Node)], M.prototype, "payLineRight", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = PaySelect;
