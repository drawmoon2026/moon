// module: BaseListViewCell
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BaseListViewCell(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "24d8a0AiVJMa4yCegaay2ry", "BaseListViewCell")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m);
      var B = cc._decorator,
        X = B.ccclass,
        Z = B.property,
        T = function (M) {
          function C() {
            {
              var V = null !== M && M.apply(this, arguments) || this;
              return V.label = undefined, V.sprite = undefined, V.selectedBackgroundColor = undefined, V.normalBackgroundColor = undefined, V.endPos = undefined, V;
            }
          }
          return __extends(C, M), C.prototype.onLoad = function () {
            this.setupTouchAction();
          }, C.prototype.setupTouchAction = function () {
            {
              this.node.on(cc.Node.EventType.TOUCH_START, this.nt, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.node.on(cc.Node.EventType.TOUCH_END, this.ct, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.ht, this), this.node.on(cc.Node.EventType.MOUSE_ENTER, this.rt, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.at, this);
            }
          }, C.prototype.removeTouchAction = function () {
            {
              this.node.off(cc.Node.EventType.TOUCH_START, this.nt, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.ot, this), this.node.off(cc.Node.EventType.TOUCH_END, this.ct, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.ht, this), this.node.off(cc.Node.EventType.MOUSE_ENTER, this.rt, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.at, this);
            }
          }, C.prototype.rt = function (V) {
            this.mouseEnterAction && this.mouseEnterAction(V);
          }, C.prototype.at = function (V) {
            this.mouseLeaveAction && this.mouseLeaveAction(V);
          }, C.prototype.nt = function (V) {
            {
              var N = V.touch,
                q = cc.v2(N.getLocation().x, N.getLocation().y);
              this.startPos = q, this.node.color = this.selectedBackgroundColor, this.touchStartAction && this.touchStartAction(V);
            }
          }, C.prototype.ot = function (V) {
            this.node.color = this.normalBackgroundColor, this.touchMoveAction && this.touchMoveAction(V);
          }, C.prototype.ct = function (V) {
            var N = V.touch,
              q = cc.v2(N.getLocation().x, N.getLocation().y);
            this.endPos = q, this.node.color = this.normalBackgroundColor, V.stopPropagationImmediate(), this.touchEndAction && this.touchEndAction(V);
          }, C.prototype.ht = function (V) {
            {
              var N = V.touch,
                q = cc.v2(N.getLocation().x, N.getLocation().y);
              this.endPos = q, this.node.color = this.normalBackgroundColor, V.stopPropagationImmediate(), this.touchCancelAction && this.touchCancelAction(V);
            }
          }, C.prototype.destroy = function () {
            {
              this.removeTouchAction(), M.prototype.destroy.call(this);
            }
          }, __decorate([Z(cc.Label)], C.prototype, "label", undefined), __decorate([Z(cc.Sprite)], C.prototype, "sprite", undefined), __decorate([Z(cc.Color)], C.prototype, "selectedBackgroundColor", undefined), __decorate([Z(cc.Color)], C.prototype, "normalBackgroundColor", undefined), __decorate([X], C);
        }(cc.Component);
      I.default = T, cc._RF.pop();
    }
  }
}
module.exports = BaseListViewCell;
