// module: BaseListViewCell
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function BaseListViewCell(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "24d8a0AiVJMa4yCegaay2ry", "BaseListViewCell")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = cc._decorator,
        C = x.ccclass,
        H = x.property,
        r = function (V) {
          function M() {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.label = undefined, q.sprite = undefined, q.selectedBackgroundColor = undefined, q.normalBackgroundColor = undefined, q.endPos = undefined, q;
          }
          return __extends(M, V), M.prototype.onLoad = function () {
            {
              this.setupTouchAction();
            }
          }, M.prototype.setupTouchAction = function () {
            this.node.on(cc.Node.EventType.TOUCH_START, this.Z, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.on(cc.Node.EventType.TOUCH_END, this.tt, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.it, this), this.node.on(cc.Node.EventType.MOUSE_ENTER, this.st, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.et, this);
          }, M.prototype.removeTouchAction = function () {
            this.node.off(cc.Node.EventType.TOUCH_START, this.Z, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.$, this), this.node.off(cc.Node.EventType.TOUCH_END, this.tt, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.it, this), this.node.off(cc.Node.EventType.MOUSE_ENTER, this.st, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.et, this);
          }, M.prototype.st = function (q) {
            this.mouseEnterAction && this.mouseEnterAction(q);
          }, M.prototype.et = function (q) {
            this.mouseLeaveAction && this.mouseLeaveAction(q);
          }, M.prototype.Z = function (q) {
            var m = q.touch,
              D = cc.v2(m.getLocation().x, m.getLocation().y);
            this.startPos = D, this.node.color = this.selectedBackgroundColor, this.touchStartAction && this.touchStartAction(q);
          }, M.prototype.$ = function (q) {
            this.node.color = this.normalBackgroundColor, this.touchMoveAction && this.touchMoveAction(q);
          }, M.prototype.tt = function (q) {
            var m = q.touch,
              D = cc.v2(m.getLocation().x, m.getLocation().y);
            this.endPos = D, this.node.color = this.normalBackgroundColor, q.stopPropagationImmediate(), this.touchEndAction && this.touchEndAction(q);
          }, M.prototype.it = function (q) {
            var m = q.touch,
              D = cc.v2(m.getLocation().x, m.getLocation().y);
            this.endPos = D, this.node.color = this.normalBackgroundColor, q.stopPropagationImmediate(), this.touchCancelAction && this.touchCancelAction(q);
          }, M.prototype.destroy = function () {
            this.removeTouchAction(), V.prototype.destroy.call(this);
          }, __decorate([H(cc.Label)], M.prototype, "label", undefined), __decorate([H(cc.Sprite)], M.prototype, "sprite", undefined), __decorate([H(cc.Color)], M.prototype, "selectedBackgroundColor", undefined), __decorate([H(cc.Color)], M.prototype, "normalBackgroundColor", undefined), __decorate([C], M);
        }(cc.Component);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = BaseListViewCell;
