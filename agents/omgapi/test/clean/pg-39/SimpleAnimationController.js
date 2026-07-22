// module: SimpleAnimationController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SimpleAnimationController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "39e88h8Nd5Cp6FXcpdProcy", "SimpleAnimationController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.animation = undefined, q.D_ = undefined, q;
        }
        return __extends(M, V), M.prototype.play = function (q, m) {
          this.node.active = true, this.D_ = m, this.animation.play(q);
        }, M.prototype.stop = function () {
          this.animation.stop(), this.D_ = undefined, this.node.active = false;
        }, M.prototype.U_ = function () {
          var q = this.D_;
          this.D_ = undefined, q && q();
        }, M.prototype.destroy = function () {
          return this.stop(), this.node.destroy(), V.prototype.destroy.call(this);
        }, __decorate([H(cc.Animation)], M.prototype, "animation", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SimpleAnimationController;
