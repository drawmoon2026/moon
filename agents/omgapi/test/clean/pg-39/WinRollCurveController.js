// module: WinRollCurveController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function WinRollCurveController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "a210c4WXCdAmKbdwKdx5P30", "WinRollCurveController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("NumberCurvedController"),
      C = require("WinRollBaseController"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          return null !== m && m.apply(this, arguments) || this;
        }
        var W = {};
        W.type = x.default;
        W.override = true;
        return __extends(D, m), __decorate([M(W)], D.prototype, "displayController", undefined), __decorate([V], D);
      }(C.default);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = WinRollCurveController;
