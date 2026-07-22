// module: SlotAnalyticsEnum
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotAnalyticsEnum(F, c, j) {
  'use strict';

  var I = {};
  I["value"] = !0;
  cc["_RF"]["push"](c, "c270fgpIPxIwJGIYJlAbqmn", "SlotAnalyticsEnum") || (Object["defineProperty"](j, "__esModule", I), j["SpinStateProcess"] = j["SpinCredits"] = j["SpinTrigger"] = void 0, function (m) {
    m[m["CLICK"] = 0] = "CLICK", m[m["SPACEBAR"] = 1] = "SPACEBAR", m[m["AUTOSPIN"] = 2] = "AUTOSPIN", m[m["FEATURE_BUY"] = 3] = "FEATURE_BUY";
  }(j["SpinTrigger"] || (j["SpinTrigger"] = {})), function (m) {
    m[m["FREE_GAME"] = 0] = "FREE_GAME", m[m["CASH"] = 1] = "CASH", m[m["BONUS"] = 2] = "BONUS", m[m["INSUFFICIENT"] = 3] = "INSUFFICIENT", m[m["BET_INVALID"] = 4] = "BET_INVALID";
  }(j["SpinCredits"] || (j["SpinCredits"] = {})), function (m) {
    m[m["REEL_SPINNING"] = 0] = "REEL_SPINNING", m[m["REEL_STOPPING"] = 1] = "REEL_STOPPING", m[m["REEL_STOPPED"] = 2] = "REEL_STOPPED";
  }(j["SpinStateProcess"] || (j["SpinStateProcess"] = {})), cc["_RF"]["pop"]());
}
module.exports = SlotAnalyticsEnum;
