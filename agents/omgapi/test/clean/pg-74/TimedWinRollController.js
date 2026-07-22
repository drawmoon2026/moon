// module: TimedWinRollController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function TimedWinRollController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "bbc6c4tBJdFQ76rTU5OtO2a", "TimedWinRollController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("NumberDisplayController"),
        X = F("TimedWinRollBaseController"),
        Z = cc["_decorator"],
        T = Z["ccclass"],
        M = Z["property"],
        C = function (V) {
          {
            function q() {
              var f = null !== V && V["apply"](this, arguments) || this;
              return f["displayController"] = void 0, f;
            }
            var N = {};
            N["type"] = B["default"];
            N["override"] = !0;
            return __extends(q, V), __decorate([M(N)], q["prototype"], "displayController", void 0), __decorate([T], q);
          }
        }(X["default"]);
      I["default"] = C, cc["_RF"]["pop"]();
    }
  }
}
module.exports = TimedWinRollController;
