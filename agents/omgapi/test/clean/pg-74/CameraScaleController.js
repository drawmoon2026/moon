// module: CameraScaleController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function CameraScaleController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "6ca2418PwNLgI9c//ZGwSCe", "CameraScaleController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("RandomShakingEffectController"),
      X = cc["_decorator"],
      Z = X["ccclass"],
      T = X["property"],
      M = function (C) {
        function V() {
          var N = null !== C && C["apply"](this, arguments) || this;
          return N["randomShakingEffectController"] = void 0, N;
        }
        return __extends(V, C), V["prototype"]["playZoomInEffect"] = function () {
          this["node"]["stopAllActions"](), this["node"]["runAction"](cc["spawn"](cc["scaleTo"](4, 1.2)["easing"](cc["easeIn"](1)), cc["moveTo"](4, cc['v2'](0, 120))["easing"](cc["easeIn"](1))));
        }, V["prototype"]["playZoomOutEffect"] = function () {
          this["node"]["stopAllActions"](), this["node"]["runAction"](cc["sequence"](cc["spawn"](cc["scaleTo"](0.3, 1)["easing"](cc["easeInOut"](3)), cc["moveTo"](0.3, cc['v2'](0, 0))["easing"](cc["easeInOut"](3))), cc["delayTime"](0.1)));
        }, V["prototype"]["resetDefault"] = function () {
          {
            this["randomShakingEffectController"]["stop"](), this["node"]['y'] = 0, this["node"]['x'] = 0, this["mainCamera"]["zoomRatio"] = 1;
          }
        }, V["prototype"]["destroy"] = function () {
          return this["resetDefault"](), this["node"]["destroy"](), C["prototype"]["destroy"]["call"](this);
        }, __decorate([T(B["default"])], V["prototype"], "randomShakingEffectController", void 0), __decorate([Z], V);
      }(cc["Component"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = CameraScaleController;
