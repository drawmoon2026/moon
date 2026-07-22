// module: AnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function AnalyticsHelper(Q, F) {
  'use strict';

  if (!cc["_RF"]["push"](F, "d1d41tYvBBPX6KJU88DFlLq", "AnalyticsHelper")) {
    var c = System["get"]("bvframework")["AnalyticsHelper"];
    for (var j in c) F["exports"][j] = c[j];
    F["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = AnalyticsHelper;
