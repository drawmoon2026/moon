// module: ClickEffectController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function ClickEffectController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "9c1bbOo47dBVKQhy7Uc4JE2", "ClickEffectController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.flashSpriteNode = undefined, q.clickEffectNode = undefined, q.Ts = undefined, q;
        }
        return __extends(M, V), M.prototype.onLoad = function () {
          this.Ts = this.clickEffectNode.getComponent(cc.Animation);
        }, M.prototype.showClickEffect = function (q) {
          var m = this.node.convertToNodeSpaceAR(q);
          this.clickEffectNode.setPosition(m), this.Ts.play("click_effect");
        }, M.prototype.showFlash = function () {
          {
            this.flashSpriteNode.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 150), cc.sequence(cc.delayTime(0.05), cc.fadeOut(0.3))), cc.callFunc(this.Hs, this)));
          }
        }, M.prototype.Hs = function () {
          var q = this.flashSpriteNode;
          q.opacity = 128, q.scale = 0;
        }, __decorate([H(cc.Node)], M.prototype, "flashSpriteNode", undefined), __decorate([H(cc.Node)], M.prototype, "clickEffectNode", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = ClickEffectController;
