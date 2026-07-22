// module: ViewControllerTransition
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function ViewControllerTransition(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "8e202781KBBRIxVxe3NWQ9e", "ViewControllerTransition")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = function () {
      function B() {}
      return B["prototype"]["transitionDuration"] = function () {
        return 0.3;
      }, B["prototype"]["animateTransition"] = function () {}, B["prototype"]["animationEnd"] = function () {}, B;
    }();
    j["default"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = ViewControllerTransition;
