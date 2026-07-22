// module: SlotTransactionModel
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SlotTransactionModel(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "d5629sKgMRK16ZrOMxnkzm9", "SlotTransactionModel")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("WinValuesModel"),
      X = require("WinLinesModel"),
      Z = require("BetRepository"),
      T = function (M) {
        function C() {
          return null !== M && M.apply(this, arguments) || this;
        }
        var V = {};
        V.get = function () {
          return this.Bp;
        };
        V.enumerable = false;
        V.configurable = true;
        var N = {};
        N.get = function () {
          return this.Ap;
        };
        N.enumerable = false;
        N.configurable = true;
        return __extends(C, M), Object.defineProperty(C.prototype, "winLines", V), Object.defineProperty(C.prototype, "winValues", N), Object.defineProperty(C.prototype, "betLevelValue", {
          'get': function () {
            return this.Hp.selectedBetLevelValue;
          },
          'set': function (q) {
            this.Hp.selectedBetLevelValue = q;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "betSizeValue", {
          'get': function () {
            return this.Hp.selectedBetSizeValue;
          },
          'set': function (q) {
            this.Hp.selectedBetSizeValue = q;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "reels", {
          'get': function () {
            return this.Op;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(C.prototype, "originalReels", {
          'get': function () {
            return this.Ip;
          },
          'enumerable': false,
          'configurable': true
        }), C.prototype.updateTransactionInfo = function (q) {
          var f = q.wp,
            g = q.lw,
            l = q.ml,
            K = q.cs,
            O = q.orl,
            x = q.rl;
          this.Bp = f ? new X.WinLinesModel(f) : undefined, this.Ap = g ? new B.WinValuesModel(g) : undefined, this.Hp || (this.Hp = new Z.BetRepository(l, K)), this.Hp.updateRemoteBets(l, K), this.Op = x, this.Ip = O, this.updateSlotGameTransactionInfo(q);
        }, C;
      }(require("TransactionModel").default);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = SlotTransactionModel;
