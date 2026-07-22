// module: SlotTransactionModel
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SlotTransactionModel(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "d5629sKgMRK16ZrOMxnkzm9", "SlotTransactionModel")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("WinValuesModel"),
      X = F("WinLinesModel"),
      Z = F("BetRepository"),
      T = function (M) {
        function C() {
          return null !== M && M["apply"](this, arguments) || this;
        }
        var V = {};
        V["get"] = function () {
          return this['Bp'];
        };
        V["enumerable"] = !1;
        V["configurable"] = !0;
        var N = {};
        N["get"] = function () {
          {
            return this['Ap'];
          }
        };
        N["enumerable"] = !1;
        N["configurable"] = !0;
        return __extends(C, M), Object["defineProperty"](C["prototype"], "winLines", V), Object["defineProperty"](C["prototype"], "winValues", N), Object["defineProperty"](C["prototype"], "betLevelValue", {
          'get': function () {
            {
              return this['Hp']["selectedBetLevelValue"];
            }
          },
          'set': function (q) {
            {
              this['Hp']["selectedBetLevelValue"] = q;
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](C["prototype"], "betSizeValue", {
          'get': function () {
            return this['Hp']["selectedBetSizeValue"];
          },
          'set': function (q) {
            this['Hp']["selectedBetSizeValue"] = q;
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](C["prototype"], "reels", {
          'get': function () {
            return this['Op'];
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](C["prototype"], "originalReels", {
          'get': function () {
            {
              return this['Ip'];
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), C["prototype"]["updateTransactionInfo"] = function (q) {
          var f = q['wp'],
            g = q['lw'],
            l = q['ml'],
            K = q['cs'],
            O = q["orl"],
            x = q['rl'];
          this['Bp'] = f ? new X["WinLinesModel"](f) : void 0, this['Ap'] = g ? new B["WinValuesModel"](g) : void 0, this['Hp'] || (this['Hp'] = new Z["BetRepository"](l, K)), this['Hp']["updateRemoteBets"](l, K), this['Op'] = x, this['Ip'] = O, this["updateSlotGameTransactionInfo"](q);
        }, C;
      }(F("TransactionModel")["default"]);
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = SlotTransactionModel;
