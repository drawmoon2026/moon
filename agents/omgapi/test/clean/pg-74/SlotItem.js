// module: SlotItem
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotItem(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "cba1dJ8KHJAlrAxCvyls0+u", "SlotItem")) {
    var I = {};
    I.value = true;
    Object.defineProperty(j, "__esModule", I);
    var m = F("SlotSymbol"),
      B = cc._decorator.ccclass,
      X = function (Z) {
        function T() {
          {
            var M = null !== Z && Z.apply(this, arguments) || this;
            return M.positionIndex = 0, M.sprite = undefined, M.normalSpriteFrame = undefined, M.blurSpriteFrame = undefined, M.normalScale = undefined, M.blurScale = undefined, M.getSymbolZOrder = undefined, M;
          }
        }
        return __extends(T, Z), Object.defineProperty(T.prototype, "visible", {
          'get': function () {
            return this.sprite && this.sprite.node.active;
          },
          'set': function (M) {
            this.sprite && (this.sprite.node.active = M);
          },
          'enumerable': false,
          'configurable': true
        }), T.prototype.init = function (M) {
          this.sprite = M.sprite;
          var C = this.normalScale = undefined === M.normalScale ? 1 : M.normalScale;
          this.blurScale = undefined === M.blurScale ? C : M.blurScale, this.getSymbolZOrder = M.getSymbolZOrder;
        }, T.prototype.setup = function (M, C, V, N) {
          undefined === N && (N = false), this.symbolIndex = M, this.normalSpriteFrame = C, this.blurSpriteFrame = V, this.zOrder = this.getSymbolZOrder ? this.getSymbolZOrder(M) : 0, this.setZIndex(), this.setBlur(N);
        }, T.prototype.setZIndex = function (M) {
          undefined === M && (M = 0), this.node.zIndex = M + 100 * this.zOrder;
        }, T.prototype.unuse = function () {
          this.normalSpriteFrame = undefined, this.blurSpriteFrame = undefined, this.visible = true, Z.prototype.unuse.call(this);
        }, T.prototype.setBlur = function (M) {
          var C = this.sprite;
          C && (C.spriteFrame = M ? this.blurSpriteFrame : this.normalSpriteFrame, C.node.scale = M ? this.blurScale : this.normalScale);
        }, __decorate([B], T);
      }(m.default);
    j.default = X, cc._RF.pop();
  }
}
module.exports = SlotItem;
