// module: SlotAnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SlotAnalyticsHelper(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4d769Qc8epMlozoEYpeBTit", "SlotAnalyticsHelper")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.sendFastStopGA = undefined;
    var x = require("AnalyticsHelper");
    exports.sendFastStopGA = function (C, H) {
      var r = {};
      r.type = C;
      r.is_auto = H;
      x.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_STOP_SPIN, r);
    }, cc._RF.pop();
  }
}
module.exports = SlotAnalyticsHelper;
