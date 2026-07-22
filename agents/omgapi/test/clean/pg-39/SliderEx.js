// module: SliderEx
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SliderEx(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "dbb33H+Xs1Dw7xtUJLC1l6D", "SliderEx")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.content = undefined, q.contentHeight = 0, q;
        }
        return __extends(M, V), M.prototype.onEnable = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.Ii, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.on(cc.Node.EventType.TOUCH_END, this.Ti, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ki, this), this.handle && this.handle.isValid && (this.handle.node.on(cc.Node.EventType.TOUCH_START, this.F_, this), this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.handle.node.on(cc.Node.EventType.TOUCH_END, this.Ti, this)), this.x_();
        }, M.prototype.onDisable = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this.Ii, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.off(cc.Node.EventType.TOUCH_END, this.Ti, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.ki, this), this.handle && this.handle.isValid && (this.handle.node.off(cc.Node.EventType.TOUCH_START, this.F_, this), this.handle.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.handle.node.off(cc.Node.EventType.TOUCH_END, this.Ti, this)), this.V_();
        }, M.prototype.z_ = function (q) {
          this.K_(q), this.xn(), this.q_();
        }, M.prototype.qi = function (q) {
          var m = -cc.view._scaleY,
            D = cc.v2(0, q.getScrollY() * m),
            W = this.node.convertToWorldSpace(this.handle.node.position).x,
            k = W + D.y / 10;
          this.progress = cc.misc.clamp01(this.progress + (k - W) / this.node.width), this.J_(), this.xn(), this.q_();
        }, M.prototype.x_ = function () {
          this.content && this.content.parent.on(cc.Node.EventType.MOUSE_WHEEL, this.qi, this, true);
        }, M.prototype.V_ = function () {
          this.content && this.content.parent.off(cc.Node.EventType.MOUSE_WHEEL, this.qi, this, true);
        }, M.prototype.xn = function () {
          this.content && (this.content.y = this.progress * (this.content.height - cc.view.getVisibleSize().height));
        }, __decorate([H(cc.Node)], M.prototype, "content", undefined), __decorate([C], M);
      }(cc.Slider);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SliderEx;
