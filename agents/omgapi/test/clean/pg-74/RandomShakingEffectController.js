// module: RandomShakingEffectController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function RandomShakingEffectController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "6475a4xGSdOo6lU2y387NNS", "RandomShakingEffectController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B,
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = F("Utils");
    (function (V) {
      V[V.SHAKING = 1] = "SHAKING", V[V.NORMAL = 2] = "NORMAL";
    })(B || (B = {}));
    var C = function (V) {
      function N() {
        var q = null !== V && V.apply(this, arguments) || this;
        return q.moveVariance = 8, q.repeatTime = 0.02, q.Zf = B.NORMAL, q.Xf = undefined, q;
      }
      return __extends(N, V), N.prototype.play = function (q) {
        {
          this.Zf !== B.SHAKING && (this.Zf = B.SHAKING, this.Xf = this.node.position, this.$f(), q && this.scheduleOnce(this.stop, q));
        }
      }, N.prototype.$f = function () {
        var q = this.moveVariance,
          f = M.generateRandomInt(this.Xf.x - q, this.Xf.x + q),
          g = M.generateRandomInt(this.Xf.y - q, this.Xf.y + q),
          l = cc.v2(f, g);
        this.node.runAction(cc.sequence(cc.moveTo(this.repeatTime, l), cc.callFunc(this.$f, this)));
      }, N.prototype.stop = function () {
        this.Zf !== B.NORMAL && (this.Zf = B.NORMAL, this.node.stopAllActions(), this.node.position = this.Xf);
      }, N.prototype.destroy = function () {
        return this.node.stopAllActions(), this.node.destroy(), V.prototype.destroy.call(this);
      }, __decorate([T(cc.Integer)], N.prototype, "moveVariance", undefined), __decorate([T(cc.Integer)], N.prototype, "repeatTime", undefined), __decorate([Z], N);
    }(cc.Component);
    I.default = C, cc._RF.pop();
  }
}
module.exports = RandomShakingEffectController;
