// module: DrawLine
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function DrawLine(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "0b006l9a0tOS5No6bQvo8YJ", "DrawLine")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        {
          function C() {
            var V = null !== M && M.apply(this, arguments) || this;
            return V.horizontal = true, V.vertical = false, V;
          }
          return __extends(C, M), C.prototype.onLoad = function () {
            this.graphics = this.node.addComponent(cc.Graphics), this.xs(), this.node.on("size-changed", this.xs, this);
          }, C.prototype.xs = function () {
            var V, N;
            this.graphics.clear(), this.horizontal ? (V = -this.node.width * this.node.anchorX, N = this.node.width - this.node.width * this.node.anchorX, this.graphics.moveTo(V, this.node.height / 2), this.graphics.lineTo(N, this.node.height / 2)) : (V = this.node.height * this.node.anchorX, N = this.node.height * this.node.anchorX - this.node.height, this.graphics.moveTo(this.node.width / 2, V), this.graphics.lineTo(this.node.width / 2, N)), this.graphics.stroke();
          }, C.prototype.onDestroy = function () {
            this.node.off("size-changed", this.xs, this), this.graphics.clear();
          }, __decorate([Z(cc.Boolean)], C.prototype, "horizontal", undefined), __decorate([Z(cc.Boolean)], C.prototype, "vertical", undefined), __decorate([X], C);
        }
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = DrawLine;
