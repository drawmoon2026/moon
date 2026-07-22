// module: NumberCurvedController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberCurvedController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "22ff3ETL9NJ6LV0gfCqckfH", "NumberCurvedController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberDisplayController"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.curveness = 0.1, N;
        }
        return __extends(V, C), V.prototype.dequeueNumberContainer = function (N) {
          {
            var q = this.numberContainer.children[N];
            if (!q) {
              (q = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(q);
              var f = new cc.Node("numberSprite");
              f.addComponent(cc.Sprite), q.addChild(f);
            }
            return q;
          }
        }, V.prototype.displayNumber = function (N, q, f) {
          {
            undefined === q && (q = true), C.prototype.displayNumber.call(this, N, q, f), this.ff.updateLayout();
            var g = 0;
            this.numberContainer.children.forEach(function (L) {
              g += L.width;
            });
            for (var l = 0; l < this.numberContainer.children.length; l++) {
              var K = this.dequeueNumberContainer(l),
                O = g / 2,
                x = (100 / Math.abs(this.curveness) + O) / this.numberContainer.scale,
                p = undefined,
                b = undefined;
              this.curveness > 0 ? (p = Math.sqrt(Math.pow(x, 2) - Math.pow(K.x, 2)), b = 180 * Math.atan2(Math.abs(p), K.x) / Math.PI, K.angle = -(90 - b)) : this.curveness < 0 ? (p = Math.sqrt(Math.pow(x, 2) + Math.pow(K.x, 2)), b = 180 * Math.atan2(Math.abs(p), K.x) / Math.PI, K.angle = 90 - b) : K.angle = 0, K.y = p - x;
            }
          }
        }, __decorate([T({
          'min': -10,
          'max': 10,
          'slide': true,
          'tooltip': false,
          'type': cc.Float
        })], V.prototype, "curveness", undefined), __decorate([Z], V);
      }(B.default);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = NumberCurvedController;
