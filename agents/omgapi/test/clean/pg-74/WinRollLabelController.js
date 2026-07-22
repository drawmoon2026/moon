// module: WinRollLabelController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function WinRollLabelController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "f7e1diBGQ5A8KF1oMrYEMNU", "WinRollLabelController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("NumberLabelController"),
      X = F("WinRollBaseController"),
      Z = cc["_decorator"],
      T = Z["ccclass"],
      M = Z["property"],
      C = function (V) {
        {
          function q() {
            return null !== V && V["apply"](this, arguments) || this;
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
module.exports = WinRollLabelController;
