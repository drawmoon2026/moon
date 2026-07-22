// module: WinRollCurveController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function WinRollCurveController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "a210c4WXCdAmKbdwKdx5P30", "WinRollCurveController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberCurvedController"),
      X = require("WinRollBaseController"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function N() {
          return null !== V && V.apply(this, arguments) || this;
        }
        var q = {};
        q.type = B.default;
        q.override = true;
        return __extends(N, V), __decorate([M(q)], N.prototype, "displayController", undefined), __decorate([T], N);
      }(X.default);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = WinRollCurveController;
