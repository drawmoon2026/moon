// module: SlotItemController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SlotItemController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "f8c175XHa1NwpzbTBevI1+l", "SlotItemController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.foreground = undefined, q.content = undefined, q.foregroundSprite = undefined, q.contentSprite = undefined, q.shadowSprite = undefined, q;
        }
        return __extends(M, V), M.prototype.setSymbol = function (q, m, D) {
          {
            this.foregroundSprite.spriteFrame = m, this.contentSprite.spriteFrame = q, this.shadowSprite.spriteFrame = D;
          }
        }, M.prototype.setBlurred = function (q) {
          this.foreground.active = q, this.content.active = !q;
        }, M.prototype.clear = function () {
          var q = this.foreground;
          q.active = false, q.scale = 3;
          var m = this.content;
          m.stopAllActions(), m.active = true, m.scale = 1.5, m.opacity = 255, this.node.zIndex = 0, this.foregroundSprite.spriteFrame = undefined, this.contentSprite.spriteFrame = undefined, this.shadowSprite.spriteFrame = undefined;
        }, M.prototype.unuse = function () {
          this.clear();
        }, M.prototype.reuse = function () {
          this.node.active = true;
        }, M.prototype.jp = function () {}, __decorate([H(cc.Node)], M.prototype, "foreground", undefined), __decorate([H(cc.Node)], M.prototype, "content", undefined), __decorate([H(cc.Sprite)], M.prototype, "foregroundSprite", undefined), __decorate([H(cc.Sprite)], M.prototype, "contentSprite", undefined), __decorate([H(cc.Sprite)], M.prototype, "shadowSprite", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SlotItemController;
