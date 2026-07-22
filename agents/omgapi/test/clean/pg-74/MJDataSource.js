// module: MJDataSource
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJDataSource(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "4fd8cvXEPFILJnInxsPwHVw", "MJDataSource")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m), I.mjDataSource = undefined;
      var B = F("PlayerModel"),
        X = F("DataSource"),
        Z = F("SlotSystemModel"),
        T = F("RtConfig"),
        M = F("MJSlotTransactionModel"),
        C = function (N) {
          function q() {
            var f = N.call(this, {
              'playerModel': new B.default(),
              'systemModel': new Z.default(T.cs_Config),
              'transactionModel': new M.default()
            }) || this;
            return f.currentSelectedMenuIndex = 0, f.gameLaunched = false, f.isReplayDone = false, f.isRefreshWorld = false, f.isReplayStarted = false, f;
          }
          return __extends(q, N), q;
        }(X.default);
      I.default = C;
      var V = new C();
      I.mjDataSource = V, cc._RF.pop();
    }
  }
}
module.exports = MJDataSource;
