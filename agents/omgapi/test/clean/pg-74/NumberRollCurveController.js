// module: NumberRollCurveController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberRollCurveController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "a0a6doEXuNKgJy7Sh2yc8T3", "NumberRollCurveController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("NumberCurvedController"),
      X = F("NumberRollBaseController"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function N() {
          var f = null !== V && V.apply(this, arguments) || this;
          return f.displayController = undefined, f;
        }
        var q = {};
        q.type = B.default;
        q.override = true;
        return __extends(N, V), __decorate([M(q)], N.prototype, "displayController", undefined), __decorate([T], N);
      }(X.default);
    I.default = C, cc._RF.pop();
  }
}
module.exports = NumberRollCurveController;
