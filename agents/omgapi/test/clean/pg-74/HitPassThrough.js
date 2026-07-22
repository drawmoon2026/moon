// module: HitPassThrough
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function HitPassThrough(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "c55eeQvpvBJQ70BFU5konXG", "HitPassThrough")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B,
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property;
    (function (C) {
      C.ys = "_hitTest";
    })(B || (B = {}));
    var M = function (C) {
      function V() {
        var N = null !== C && C.apply(this, arguments) || this;
        return N.passPoint = cc.v2(0, 0), N.passSize = cc.size(0, 0), N;
      }
      return __extends(V, C), V.prototype.onEnable = function () {
        var N = this;
        this.Fn = this.node[B.ys], this.node[B.ys] = function (q, f) {
          if (!N.Fn.call(this, q, f)) return false;
          for (var g = N.passPoint.x + this.x - N.passSize.width / 2, K = N.passPoint.y + this.y - N.passSize.height / 2, O = this.getParent(); null !== O; O = O.parent) g += O.x, K += O.y;
          var x = N.passSize.width,
            p = N.passSize.height,
            b = q.x - g,
            L = g + x - q.x,
            H = K + p - q.y,
            U = q.y - K;
          return !(b >= 0 && L >= 0 && H >= 0 && U >= 0);
        };
      }, V.prototype.onDisable = function () {
        this.node[B.ys] = this.Fn, this.Fn = undefined;
      }, __decorate([T(cc.Vec2)], V.prototype, "passPoint", undefined), __decorate([T(cc.Size)], V.prototype, "passSize", undefined), __decorate([Z], V);
    }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = HitPassThrough;
