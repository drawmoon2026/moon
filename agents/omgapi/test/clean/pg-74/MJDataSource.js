// module: MJDataSource
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJDataSource(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "4fd8cvXEPFILJnInxsPwHVw", "MJDataSource")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m), I["mjDataSource"] = void 0;
      var B = F("PlayerModel"),
        X = F("DataSource"),
        Z = F("SlotSystemModel"),
        T = F("RtConfig"),
        M = F("MJSlotTransactionModel"),
        C = function (N) {
          function q() {
            var f = N["call"](this, {
              'playerModel': new B["default"](),
              'systemModel': new Z["default"](T["cs_Config"]),
              'transactionModel': new M["default"]()
            }) || this;
            return f["currentSelectedMenuIndex"] = 0, f["gameLaunched"] = !1, f["isReplayDone"] = !1, f["isRefreshWorld"] = !1, f["isReplayStarted"] = !1, f;
          }
          return __extends(q, N), q;
        }(X["default"]);
      I["default"] = C;
      var V = new C();
      I["mjDataSource"] = V, cc["_RF"]["pop"]();
    }
  }
}
module.exports = MJDataSource;
