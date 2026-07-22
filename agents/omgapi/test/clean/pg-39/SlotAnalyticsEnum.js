// module: SlotAnalyticsEnum
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SlotAnalyticsEnum(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "c270fgpIPxIwJGIYJlAbqmn", "SlotAnalyticsEnum") || (Object.defineProperty(exports, "__esModule", B), exports.SpinStateProcess = exports.SpinCredits = exports.SpinTrigger = undefined, function (x) {
    x[x.CLICK = 0] = "CLICK", x[x.SPACEBAR = 1] = "SPACEBAR", x[x.AUTOSPIN = 2] = "AUTOSPIN", x[x.FEATURE_BUY = 3] = "FEATURE_BUY";
  }(exports.SpinTrigger || (exports.SpinTrigger = {})), function (x) {
    x[x.CASH = 1] = "CASH", x[x.INSUFFICIENT = 3] = "INSUFFICIENT", x[x.BET_INVALID = 4] = "BET_INVALID";
  }(exports.SpinCredits || (exports.SpinCredits = {})), function (x) {
    x[x.REEL_SPINNING = 0] = "REEL_SPINNING", x[x.REEL_STOPPING = 1] = "REEL_STOPPING", x[x.REEL_STOPPED = 2] = "REEL_STOPPED";
  }(exports.SpinStateProcess || (exports.SpinStateProcess = {})), cc._RF.pop());
}
module.exports = SlotAnalyticsEnum;
