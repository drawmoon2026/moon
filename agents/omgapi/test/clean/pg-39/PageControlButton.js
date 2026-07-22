// module: PageControlButton
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PageControlButton(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "49dd983G1VDGoSnw7stgTlI", "PageControlButton")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Button"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.sprite = undefined, m.selectImg = undefined, m.normalImg = undefined, m.selectTintColor = undefined, m.normalTintColor = undefined, m.index = 0, m.Bu = false, m;
        }
        return __extends(q, M), q.prototype.init = function () {
          this.selectImg && (this.sprite.SpriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Bu = false;
        }, q.prototype.setSelect = function () {
          this.Bu || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Bu = true);
        }, q.prototype.setUnselect = function () {
          this.Bu && (this.selectImg && (this.sprite.spriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Bu = false);
        }, q.prototype.selectDot = function () {
          this.delegate && this.delegate.canChangePage && !this.delegate.canChangePage() || this.Bu || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Bu = true, this.delegate && this.delegate.didSelectDotAtIndex && this.delegate.didSelectDotAtIndex(this.index));
        }, __decorate([r(cc.Sprite)], q.prototype, "sprite", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "selectImg", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "normalImg", undefined), __decorate([r(cc.Color)], q.prototype, "selectTintColor", undefined), __decorate([r(cc.Color)], q.prototype, "normalTintColor", undefined), __decorate([r(cc.Integer)], q.prototype, "index", undefined), __decorate([H], q);
      }(x.default);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = PageControlButton;
