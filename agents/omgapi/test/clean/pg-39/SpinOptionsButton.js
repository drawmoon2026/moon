// module: SpinOptionsButton
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SpinOptionsButton(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "3ee68qGxY9G3q+WVKsHebfZ", "SpinOptionsButton")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("GenericSettingButton"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.autoSpinCircle = undefined, m.autoSpinCircleNormalSpriteFrame = undefined, m.autoSpinCircleDisableSpriteFrame = undefined, m.$b = undefined, m;
        }
        return __extends(q, M), q.prototype.playAutoSpinAnim = function () {}, q.prototype.stopAutoSpinAnim = function () {}, q.prototype.onLoad = function () {
          M.prototype.onLoad.call(this), this.$b = this.autoSpinCircle.getComponent(cc.Sprite);
        }, q.prototype.interactableButtonColor = function (m) {
          M.prototype.interactableButtonColor.call(this, m), this.$b.spriteFrame = m ? this.autoSpinCircleNormalSpriteFrame : this.autoSpinCircleDisableSpriteFrame;
        }, q.prototype.changeButtonPressedColor = function (m) {
          var D = {};
          D.scale = 0.9;
          var W = {};
          W.scale = 1;
          var k = {};
          k.angle = -20;
          var z = {};
          z.easing = "sineOut";
          var L = {};
          L.angle = 0;
          var v = {};
          v.easing = "sineOut";
          m ? cc.tween(this.node).to(0.05, D).start() : (cc.tween(this.node).to(0.05, W).start(), cc.tween(this.autoSpinCircle).to(0.05, k, z).to(0.05, L, v).start());
        }, __decorate([r(cc.Node)], q.prototype, "autoSpinCircle", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "autoSpinCircleNormalSpriteFrame", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "autoSpinCircleDisableSpriteFrame", undefined), __decorate([H], q);
      }(x.default);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = SpinOptionsButton;
