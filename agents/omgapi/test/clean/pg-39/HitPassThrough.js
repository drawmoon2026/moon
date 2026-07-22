// module: HitPassThrough
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function HitPassThrough(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "c55eeQvpvBJQ70BFU5konXG", "HitPassThrough")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x,
      C = cc._decorator,
      H = C.ccclass,
      r = C.property;
    (function (M) {
      {
        M.gs = "_hitTest";
      }
    })(x || (x = {}));
    var V = function (M) {
      function q() {
        var m = null !== M && M.apply(this, arguments) || this;
        return m.passPoint = cc.v2(0, 0), m.passSize = cc.size(0, 0), m;
      }
      return __extends(q, M), q.prototype.onEnable = function () {
        var m = this;
        this.Jn = this.node[x.gs], this.node[x.gs] = function (D, W) {
          if (!m.Jn.call(this, D, W)) return false;
          for (var k = m.passPoint.x + this.x - m.passSize.width / 2, z = m.passPoint.y + this.y - m.passSize.height / 2, L = this.getParent(); null !== L; L = L.parent) k += L.x, z += L.y;
          var v = m.passSize.width,
            b = m.passSize.height,
            U = D.x - k,
            Q = k + v - D.x,
            w = z + b - D.y,
            P = D.y - z;
          return !(U >= 0 && Q >= 0 && w >= 0 && P >= 0);
        };
      }, q.prototype.onDisable = function () {
        this.node[x.gs] = this.Jn, this.Jn = undefined;
      }, __decorate([r(cc.Vec2)], q.prototype, "passPoint", undefined), __decorate([r(cc.Size)], q.prototype, "passSize", undefined), __decorate([H], q);
    }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = HitPassThrough;
