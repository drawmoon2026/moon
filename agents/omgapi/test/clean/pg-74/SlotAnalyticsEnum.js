// module: SlotAnalyticsEnum
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function SlotAnalyticsEnum(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "c270fgpIPxIwJGIYJlAbqmn", "SlotAnalyticsEnum") || (Object.defineProperty(exports, "__esModule", I), exports.SpinStateProcess = exports.SpinCredits = exports.SpinTrigger = undefined, function (m) {
    m[m.CLICK = 0] = "CLICK", m[m.SPACEBAR = 1] = "SPACEBAR", m[m.AUTOSPIN = 2] = "AUTOSPIN", m[m.FEATURE_BUY = 3] = "FEATURE_BUY";
  }(exports.SpinTrigger || (exports.SpinTrigger = {})), function (m) {
    m[m.FREE_GAME = 0] = "FREE_GAME", m[m.CASH = 1] = "CASH", m[m.BONUS = 2] = "BONUS", m[m.INSUFFICIENT = 3] = "INSUFFICIENT", m[m.BET_INVALID = 4] = "BET_INVALID";
  }(exports.SpinCredits || (exports.SpinCredits = {})), function (m) {
    m[m.REEL_SPINNING = 0] = "REEL_SPINNING", m[m.REEL_STOPPING = 1] = "REEL_STOPPING", m[m.REEL_STOPPED = 2] = "REEL_STOPPED";
  }(exports.SpinStateProcess || (exports.SpinStateProcess = {})), cc._RF.pop());
}
module.exports = SlotAnalyticsEnum;
