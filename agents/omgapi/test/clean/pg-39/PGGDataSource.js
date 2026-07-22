// module: PGGDataSource
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGGDataSource(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "14007D6VmVFRIxUoOkYdI/D", "PGGDataSource")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.pgDataSource = undefined;
    var x = require("RtConfig"),
      C = require("PGSlotTransactionModel"),
      H = require("SlotSystemModel"),
      V = require("DataSource"),
      M = require("PlayerModel"),
      q = function (D) {
        function W() {
          {
            var k = D.call(this, {
              'playerModel': new M.default(),
              'systemModel': new H.default(x.cs_Config),
              'transactionModel': new C.default()
            }) || this;
            return k.autoSpinCount = -1, k.gameLaunched = false, k.isReplayStarted = false, k;
          }
        }
        return __extends(W, D), W;
      }(V.default);
    exports.default = q;
    var m = new q();
    exports.pgDataSource = m, cc._RF.pop();
  }
}
module.exports = PGGDataSource;
