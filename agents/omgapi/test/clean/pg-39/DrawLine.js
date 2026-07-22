// module: DrawLine
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function DrawLine(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "0b006l9a0tOS5No6bQvo8YJ", "DrawLine")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.horizontal = true, q.vertical = false, q;
        }
        return __extends(M, V), M.prototype.onLoad = function () {
          this.graphics = this.node.addComponent(cc.Graphics), this.Ds(), this.node.on("size-changed", this.Ds, this);
        }, M.prototype.Ds = function () {
          var q, m;
          this.graphics.clear(), this.horizontal ? (q = -this.node.width * this.node.anchorX, m = this.node.width - this.node.width * this.node.anchorX, this.graphics.moveTo(q, this.node.height / 2), this.graphics.lineTo(m, this.node.height / 2)) : (q = this.node.height * this.node.anchorX, m = this.node.height * this.node.anchorX - this.node.height, this.graphics.moveTo(this.node.width / 2, q), this.graphics.lineTo(this.node.width / 2, m)), this.graphics.stroke();
        }, M.prototype.onDestroy = function () {
          this.node.off("size-changed", this.Ds, this), this.graphics.clear();
        }, __decorate([H(cc.Boolean)], M.prototype, "horizontal", undefined), __decorate([H(cc.Boolean)], M.prototype, "vertical", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = DrawLine;
