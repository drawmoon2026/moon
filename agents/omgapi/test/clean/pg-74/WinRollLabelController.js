// module: WinRollLabelController
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, I)
function WinRollLabelController(require, exports, I) {
  'use strict';

  if (!cc._RF.push(exports, "f7e1diBGQ5A8KF1oMrYEMNU", "WinRollLabelController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = require("NumberLabelController"),
      X = require("WinRollBaseController"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function q() {
          return null !== V && V.apply(this, arguments) || this;
        }
        var N = {};
        N.type = B.default;
        N.override = true;
        return __extends(q, V), __decorate([M(N)], q.prototype, "displayController", undefined), __decorate([T], q);
      }(X.default);
    I.default = C, cc._RF.pop();
  }
}
module.exports = WinRollLabelController;
