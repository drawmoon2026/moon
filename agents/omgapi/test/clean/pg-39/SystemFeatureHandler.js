// module: SystemFeatureHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SystemFeatureHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "c93d5OmEfVKSLl/iM1N4BVc", "SystemFeatureHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.checkSpinValidity = exports.handleSystemEvent = exports.getReevaluateBet = undefined;
    var x = require("SlotAnalyticsEnum"),
      C = require("Utils"),
      H = require("GameEventHandler");
    exports.getReevaluateBet = r, exports.handleSystemEvent = function (V) {
      var M = V.settingMenuHelper,
        q = V.betChangedHandler;
      C.sequenceCallback(r(M, q))(V.callback);
    }, exports.checkSpinValidity = function (V) {
      var M = V.callback,
        q = V.getCostPerSpinFunction,
        m = V.dataSource,
        D = q();
      var W = {};
      W.totalBet = D;
      H.emitRequestPlayEvent(W, function (k) {
        k ? M(x.SpinCredits.CASH) : D > m.playerModel.balance ? M(x.SpinCredits.INSUFFICIENT) : M(x.SpinCredits.BET_INVALID);
      });
    }, cc._RF.pop();
  }
  function r(V, M) {
    return function (q) {
      V.reevaluateBet() ? M ? M(q) : (V.updateBetValues(), q && q()) : q && q();
    };
  }
}
module.exports = SystemFeatureHandler;
