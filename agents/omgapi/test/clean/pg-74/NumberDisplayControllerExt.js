// module: NumberDisplayControllerExt
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberDisplayControllerExt(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "1aae4oTUgVDdYRvHyC4D3uZ", "NumberDisplayControllerExt")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberDisplayController"),
      X = cc._decorator,
      Z = X.ccclass,
      T = (X.property, function (M) {
        function C() {
          return null !== M && M.apply(this, arguments) || this;
        }
        return __extends(C, M), C.prototype.setNumberSprite = function (V) {
          for (var N = 0; N < 10; N++) {
            var q = N.toString();
            this.numberSprite[N] = this.numberBlurSprite[N] = V.getSpriteFrame(q);
          }
          this.numberSprite[10] = this.numberBlurSprite[10] = V.getSpriteFrame("comma"), this.numberSprite[11] = this.numberBlurSprite[11] = V.getSpriteFrame("dot");
        }, C.prototype.setMaxContainerSize = function (V) {
          this.maxContainerSize = V, this.resizeNumberIfNeeded();
        }, __decorate([Z], C);
      }(B.default));
    exports.default = T, cc._RF.pop();
  }
}
module.exports = NumberDisplayControllerExt;
