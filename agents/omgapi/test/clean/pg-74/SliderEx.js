// module: SliderEx
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function SliderEx(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "dbb33H+Xs1Dw7xtUJLC1l6D", "SliderEx")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.content = undefined, V.contentHeight = 0, V;
        }
        return __extends(C, M), C.prototype.onEnable = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.Di, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.node.on(cc.Node.EventType.TOUCH_END, this.Fi, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.Vi, this), this.handle && this.handle.isValid && (this.handle.node.on(cc.Node.EventType.TOUCH_START, this.wb, this), this.handle.node.on(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.handle.node.on(cc.Node.EventType.TOUCH_END, this.Fi, this)), this.Bb();
        }, C.prototype.onDisable = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this.Di, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.node.off(cc.Node.EventType.TOUCH_END, this.Fi, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.Vi, this), this.handle && this.handle.isValid && (this.handle.node.off(cc.Node.EventType.TOUCH_START, this.wb, this), this.handle.node.off(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.handle.node.off(cc.Node.EventType.TOUCH_END, this.Fi, this)), this.Ab();
        }, C.prototype.Hb = function (V) {
          this.Ob(V), this.Ln(), this.Ib();
        }, C.prototype.hs = function (V) {
          var N = -cc.view._scaleY,
            q = cc.v2(0, V.getScrollY() * N),
            f = this.node.convertToWorldSpace(this.handle.node.position).x,
            h = f + q.y / 10;
          this.progress = cc.misc.clamp01(this.progress + (h - f) / this.node.width), this.Tb(), this.Ln(), this.Ib();
        }, C.prototype.Bb = function () {
          this.content && this.content.parent.on(cc.Node.EventType.MOUSE_WHEEL, this.hs, this, true);
        }, C.prototype.Ab = function () {
          this.content && this.content.parent.off(cc.Node.EventType.MOUSE_WHEEL, this.hs, this, true);
        }, C.prototype.Ln = function () {
          this.content && (this.content.y = this.progress * (this.content.height - cc.view.getVisibleSize().height));
        }, __decorate([Z(cc.Node)], C.prototype, "content", undefined), __decorate([X], C);
      }(cc.Slider);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = SliderEx;
