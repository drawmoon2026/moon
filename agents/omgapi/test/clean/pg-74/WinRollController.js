// module: WinRollController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function WinRollController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "00616+xbv9I/qAMwXqWbdkY", "WinRollController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("NumberDisplayController"),
      X = F("WinRollBaseController"),
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
    I.default = C, cc._RF.pop();
  }
}
module.exports = WinRollController;
