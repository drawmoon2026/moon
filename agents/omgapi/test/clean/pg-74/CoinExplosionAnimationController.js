// module: CoinExplosionAnimationController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function CoinExplosionAnimationController(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "602e6ZKVhxNHLGyrQdLxveu", "CoinExplosionAnimationController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        function C() {
          {
            var V = null !== M && M.apply(this, arguments) || this;
            return V.animation = undefined, V.Ls = undefined, V;
          }
        }
        return __extends(C, M), C.prototype.play = function (V, N) {
          this.Ls = N, this.animation.play(V);
        }, C.prototype.stop = function () {
          this.Ls = undefined, this.animation.stop();
        }, C.prototype.onAnimationFinish = function () {
          var V = this.Ls;
          this.Ls = undefined, V && V();
        }, C.prototype.destroy = function () {
          {
            return this.stop(), this.node.destroy(), M.prototype.destroy.call(this);
          }
        }, __decorate([Z(cc.Animation)], C.prototype, "animation", undefined), __decorate([X], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = CoinExplosionAnimationController;
