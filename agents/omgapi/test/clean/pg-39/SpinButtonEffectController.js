// module: SpinButtonEffectController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SpinButtonEffectController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "61686G+USpOjqGCpo42S7jA", "SpinButtonEffectController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.anim = undefined, q.sparkParticle = undefined, q;
        }
        return __extends(M, V), M.prototype.play = function () {
          this.anim.play(), this.sparkParticle.node.active = true, this.sparkParticle.resetSystem();
        }, M.prototype.Wt = function () {
          this.anim.stop(), this.sparkParticle.node.active = false, this.sparkParticle.stopSystem();
        }, M.prototype.destroy = function () {
          return this.Wt(), this.node.destroy(), V.prototype.destroy.call(this);
        }, __decorate([H(cc.Animation)], M.prototype, "anim", undefined), __decorate([H(cc.ParticleSystem)], M.prototype, "sparkParticle", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SpinButtonEffectController;
