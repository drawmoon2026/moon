// module: SlotAnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function SlotAnalyticsHelper(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "4d769Qc8epMlozoEYpeBTit", "SlotAnalyticsHelper")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.sendFastStopGA = undefined;
    var m = require("AnalyticsHelper");
    exports.sendFastStopGA = function (B, X) {
      var Z = {};
      Z.type = B;
      Z.is_auto = X;
      m.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_STOP_SPIN, Z);
    }, cc._RF.pop();
  }
}
module.exports = SlotAnalyticsHelper;
