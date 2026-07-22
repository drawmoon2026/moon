// module: PageControlButton
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function PageControlButton(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "49dd983G1VDGoSnw7stgTlI", "PageControlButton")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = require("Button"),
        X = cc._decorator,
        Z = X.ccclass,
        T = X.property,
        M = function (C) {
          function V() {
            var N = null !== C && C.apply(this, arguments) || this;
            return N.sprite = undefined, N.selectImg = undefined, N.normalImg = undefined, N.selectTintColor = undefined, N.normalTintColor = undefined, N.index = 0, N.Rf = false, N;
          }
          return __extends(V, C), V.prototype.init = function () {
            this.selectImg && (this.sprite.SpriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Rf = false;
          }, V.prototype.setSelect = function () {
            {
              this.Rf || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Rf = true);
            }
          }, V.prototype.setUnselect = function () {
            {
              this.Rf && (this.selectImg && (this.sprite.spriteFrame = this.normalImg), this.normalColor = this.normalTintColor, this.Rf = false);
            }
          }, V.prototype.selectDot = function () {
            this.delegate && this.delegate.canChangePage && !this.delegate.canChangePage() || this.Rf || (this.selectImg && (this.sprite.spriteFrame = this.selectImg), this.normalColor = this.selectTintColor, this.Rf = true, this.delegate && this.delegate.didSelectDotAtIndex && this.delegate.didSelectDotAtIndex(this.index));
          }, __decorate([T(cc.Sprite)], V.prototype, "sprite", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "selectImg", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "normalImg", undefined), __decorate([T(cc.Color)], V.prototype, "selectTintColor", undefined), __decorate([T(cc.Color)], V.prototype, "normalTintColor", undefined), __decorate([T(cc.Integer)], V.prototype, "index", undefined), __decorate([Z], V);
        }(B.default);
      exports.default = M, cc._RF.pop();
    }
  }
}
module.exports = PageControlButton;
