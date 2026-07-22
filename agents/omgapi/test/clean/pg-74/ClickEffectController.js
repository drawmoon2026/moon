// module: ClickEffectController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function ClickEffectController(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "9c1bbOo47dBVKQhy7Uc4JE2", "ClickEffectController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.flashSpriteNode = undefined, V.clickEffectNode = undefined, V.Rs = undefined, V;
        }
        return __extends(C, M), C.prototype.onLoad = function () {
          this.Rs = this.clickEffectNode.getComponent(cc.Animation);
        }, C.prototype.showClickEffect = function (V) {
          var N = this.node.convertToNodeSpaceAR(V);
          this.clickEffectNode.setPosition(N), this.Rs.play("click_effect");
        }, C.prototype.showFlash = function () {
          this.flashSpriteNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 150), cc.sequence(cc.delayTime(0.05), cc.fadeOut(0.3))), cc.callFunc(this.js, this)));
        }, C.prototype.js = function () {
          var V = this.flashSpriteNode;
          V.opacity = 128, V.scale = 0;
        }, __decorate([Z(cc.Node)], C.prototype, "flashSpriteNode", undefined), __decorate([Z(cc.Node)], C.prototype, "clickEffectNode", undefined), __decorate([X], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = ClickEffectController;
