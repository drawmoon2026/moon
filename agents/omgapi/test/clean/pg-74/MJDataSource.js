// module: MJDataSource
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJDataSource(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "4fd8cvXEPFILJnInxsPwHVw", "MJDataSource")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m), exports.mjDataSource = undefined;
      var B = require("PlayerModel"),
        X = require("DataSource"),
        Z = require("SlotSystemModel"),
        T = require("RtConfig"),
        M = require("MJSlotTransactionModel"),
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
      exports.default = C;
      var V = new C();
      exports.mjDataSource = V, cc._RF.pop();
    }
  }
}
module.exports = MJDataSource;
