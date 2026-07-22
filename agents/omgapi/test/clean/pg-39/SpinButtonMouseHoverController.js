// module: SpinButtonMouseHoverController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SpinButtonMouseHoverController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "c9f09tETXlEB5wl5YAQLNgt", "SpinButtonMouseHoverController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        {
          function M() {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.buttonHoverEffectNode = undefined, q.buttonNode = undefined, q;
          }
          return __extends(M, V), M.prototype.init = function () {
            {
              this.node.active = true, this.mouseHovered();
            }
          }, M.prototype.show = function () {
            this.node.active = true;
          }, M.prototype.hide = function () {
            {
              this.node.active = false;
            }
          }, M.prototype.stop = function () {
            this.buttonHoverEffectNode.stopAllActions();
          }, M.prototype.mouseHovered = function () {
            {
              this.mouseLeave(), this.buttonHoverEffectNode.runAction(cc.sequence(cc.spawn(cc.fadeTo(0.2, 255), cc.scaleTo(0.2, 1.5).easing(cc.easeOut(3))), cc.spawn(cc.fadeOut(0.5), cc.scaleTo(0.5, 1.7)), cc.scaleTo(0.3, 1)).repeatForever());
            }
          }, M.prototype.mouseLeave = function () {
            {
              var q = this.buttonHoverEffectNode;
              q.stopAllActions(), q.opacity = 0, q.scale = 0.7;
            }
          }, M.prototype.q = function () {
            this.mouseLeave();
          }, M.prototype.destroy = function () {
            return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
          }, __decorate([H(cc.Node)], M.prototype, "buttonHoverEffectNode", undefined), __decorate([H(cc.Node)], M.prototype, "buttonNode", undefined), __decorate([C], M);
        }
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SpinButtonMouseHoverController;
