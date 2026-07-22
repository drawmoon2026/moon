// module: SpinConfigHandler
// Cocos 模块函数,参数 (require, module, exports) = (c, j, I)
function SpinConfigHandler(c, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "932b5xCb0FH57DavWl/zOYi", "SpinConfigHandler")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["initSpinConfig"] = I["featureConfig"] = void 0;
    var B = {};
    B["minimumSpinningTime"] = 0;
    B["regularSpinningTime"] = 1;
    B["fastStopFeature"] = !1;
    B["turboSpinFeature"] = !1;
    I["featureConfig"] = X, I["initSpinConfig"] = function (Z) {
      {
        var M = Z["jurisdictionModel"]["singlePlayMinDuration"],
          C = M > 0 ? Z["minimumSpinningTimeOffset"] || 0 : Z["minimumSpinningTime"],
          V = M > 0 ? Z["regularSpinningTimeOffset"] || 0 : Z["regularSpinningTime"];
        T["minimumSpinningTime"] = M + C, T["regularSpinningTime"] = M + V, T["turboSpinFeature"] = Z["jurisdictionModel"]["turboSpinEnable"], T["fastStopFeature"] = Z["jurisdictionModel"]["turboSpinEnable"], I["featureConfig"] = Object["freeze"](T);
      }
    }, cc["_RF"]["pop"]();
  }
}
module.exports = SpinConfigHandler;
