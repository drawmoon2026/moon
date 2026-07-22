// module: NumberCurvedController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberCurvedController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "22ff3ETL9NJ6LV0gfCqckfH", "NumberCurvedController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("NumberDisplayController"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.curveness = 0.1, m;
        }
        return __extends(q, M), q.prototype.dequeueNumberContainer = function (m) {
          var D = this.numberContainer.children[m];
          if (!D) {
            (D = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(D);
            var W = new cc.Node("numberSprite");
            W.addComponent(cc.Sprite), D.addChild(W);
          }
          return D;
        }, q.prototype.displayNumber = function (m, D, W) {
          undefined === D && (D = true), M.prototype.displayNumber.call(this, m, D, W), this.na.updateLayout();
          var k = 0;
          this.numberContainer.children.forEach(function (w) {
            k += w.width;
          });
          for (var z = 0; z < this.numberContainer.children.length; z++) {
            var L = this.dequeueNumberContainer(z),
              v = k / 2,
              b = (100 / Math.abs(this.curveness) + v) / this.numberContainer.scale,
              U = undefined,
              Q = undefined;
            this.curveness > 0 ? (U = Math.sqrt(Math.pow(b, 2) - Math.pow(L.x, 2)), Q = 180 * Math.atan2(Math.abs(U), L.x) / Math.PI, L.angle = -(90 - Q)) : this.curveness < 0 ? (U = Math.sqrt(Math.pow(b, 2) + Math.pow(L.x, 2)), Q = 180 * Math.atan2(Math.abs(U), L.x) / Math.PI, L.angle = 90 - Q) : L.angle = 0, L.y = U - b;
          }
        }, __decorate([r({
          'min': -10,
          'max': 10,
          'slide': true,
          'tooltip': false,
          'type': cc.Float
        })], q.prototype, "curveness", undefined), __decorate([H], q);
      }(x.default);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = NumberCurvedController;
