// module: SystemFeatureHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SystemFeatureHandler(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "c93d5OmEfVKSLl/iM1N4BVc", "SystemFeatureHandler")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["checkSpinValidity"] = I["handleSystemEvent"] = I["getReevaluateBet"] = void 0;
    var B = F("SlotAnalyticsEnum"),
      X = F("Utils"),
      Z = F("GameEventHandler");
    I["getReevaluateBet"] = M, I["handleSystemEvent"] = function (C) {
      var V = C["autoSpinCount"],
        N = C["exitAutoSpinHandler"],
        q = C["walletHelper"],
        f = C["settingMenuHelper"],
        g = C["betChangedHandler"];
      X["sequenceCallback"](T(q, V, N), M(f, g))(C["callback"]);
    }, I["checkSpinValidity"] = function (C) {
      {
        var V = C["callback"],
          N = C["walletHelper"],
          q = C["getCostPerSpinFunction"],
          f = C["dataSource"],
          g = q();
        var l = {};
        l["totalBet"] = g;
        Z["emitRequestPlayEvent"](l, function (K) {
          K ? N["isFreeGameMode"]() && N["hasFreeGame"]() ? V(B["SpinCredits"]["FREE_GAME"]) : V(B["SpinCredits"]["CASH"]) : g > f["playerModel"]["balance"] ? V(B["SpinCredits"]["INSUFFICIENT"]) : V(B["SpinCredits"]["BET_INVALID"]);
        });
      }
    }, cc["_RF"]["pop"]();
  }
  function T(C, V, N) {
    return function (q) {
      C["isWalletCompleted"]() && V > 0 && N && N(), q && q();
    };
  }
  function M(C, V) {
    return function (N) {
      C["reevaluateBet"]() ? V ? V(N) : (C["updateBetValues"](), N && N()) : N && N();
    };
  }
}
module.exports = SystemFeatureHandler;
