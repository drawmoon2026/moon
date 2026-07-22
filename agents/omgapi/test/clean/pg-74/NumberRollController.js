// module: NumberRollController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberRollController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "6ce4aSiKeVGJZPyEX2VbsSD", "NumberRollController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("NumberDisplayController"),
      X = F("NumberRollBaseController"),
      Z = cc["_decorator"],
      T = Z["ccclass"],
      M = Z["property"],
      C = function (V) {
        function N() {
          var f = null !== V && V["apply"](this, arguments) || this;
          return f["displayController"] = void 0, f;
        }
        var q = {};
        q["type"] = B["default"];
        q["override"] = !0;
        return __extends(N, V), __decorate([M(q)], N["prototype"], "displayController", void 0), __decorate([T], N);
      }(X["default"]);
    I["default"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = NumberRollController;
