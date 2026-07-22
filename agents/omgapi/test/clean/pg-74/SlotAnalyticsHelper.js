// module: SlotAnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotAnalyticsHelper(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "4d769Qc8epMlozoEYpeBTit", "SlotAnalyticsHelper")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["sendFastStopGA"] = void 0;
    var m = F("AnalyticsHelper");
    j["sendFastStopGA"] = function (B, X) {
      {
        var Z = {};
        Z["type"] = B;
        Z["is_auto"] = X;
        m["sendEvent"](shell['ga']["CATEGORY_GAME"], shell['ga']["EVENT_SLOT_STOP_SPIN"], Z);
      }
    }, cc["_RF"]["pop"]();
  }
}
module.exports = SlotAnalyticsHelper;
