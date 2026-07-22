// module: FrontWorldController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function FrontWorldController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "530ebZ9UmxBa748dbGa+d6O", "FrontWorldController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.bloomLeftParticle = undefined, q.Ys = 0, q;
          }
        }
        return __extends(M, V), M.prototype.play = function () {
          this.bloomLeftParticle.resetSystem();
        }, M.prototype.stop = function () {
          this.bloomLeftParticle.stopSystem();
        }, M.prototype.destroy = function () {
          return this.stop(), V.prototype.destroy.call(this);
        }, M.prototype.update = function (q) {
          this.Ys += q, this.Ys > 2 && (this.bloomLeftParticle.gravity = cc.v2(-1 * this.bloomLeftParticle.gravity.x, -120), this.Ys = 0);
        }, __decorate([H(cc.ParticleSystem)], M.prototype, "bloomLeftParticle", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = FrontWorldController;
