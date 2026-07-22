// module: NumberRollCurveController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberRollCurveController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "a0a6doEXuNKgJy7Sh2yc8T3", "NumberRollCurveController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("NumberCurvedController"),
      C = require("NumberRollBaseController"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          var k = null !== m && m.apply(this, arguments) || this;
          return k.displayController = undefined, k;
        }
        var W = {};
        W.type = x.default;
        W.override = true;
        return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
      }(C.default);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = NumberRollCurveController;
