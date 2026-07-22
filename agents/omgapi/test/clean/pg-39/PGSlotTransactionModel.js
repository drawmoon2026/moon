// module: PGSlotTransactionModel
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGSlotTransactionModel(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "dd180m4s5VGebUu7dqjUGTK", "PGSlotTransactionModel")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), exports.SpinType = undefined;
      var x = require("SlotProperties"),
        C = require("SlotTransactionModel"),
        H = (require("PiggyGoldTweaksConfig"), require("TweaksData"), require("Protoutils")),
        r = require("WinLinesModel");
      (function (M) {
        M[M.NORMAL = 1] = "NORMAL";
      })(exports.SpinType || (exports.SpinType = {}));
      var V = function (M) {
        function q() {
          return null !== M && M.apply(this, arguments) || this;
        }
        var m;
        return __extends(q, M), m = q, q.prototype.updateSlotGameTransactionInfo = function (D) {
          var W = D.frl,
            k = D.pc,
            z = D.tnbwm,
            L = D.wp,
            v = D.wm;
          this.iu = L ? new r.WinLinesModel(L) : undefined, W.forEach(function (b, U) {
            {
              if (U % 3 == 1 && b === x.SlotIndexes.BLANK) {
                var Q = U % 3;
                W[U] = W[U + (2 - Q)], W[U + (2 - Q)] = x.SlotIndexes.BAR_1;
              }
            }
          }), this.su = W, this.eu = k, this.nu = v, this.ou = z, this.cu(v, z), this.hu = this.ru(), this.au = this.uu();
        }, q.prototype.cu = function (D, W) {
          D && (W ? this.ou[4] = D : this.ou = {
            4: D
          });
        }, q.prototype.ru = function () {
          var D = false;
          return this.reels.forEach(function (W) {
            {
              W === x.SlotIndexes.WILD && (D = true);
            }
          }), D;
        }, q.prototype.uu = function () {
          {
            var D = this.reels;
            return (D[0] !== x.SlotIndexes.BLANK || D[2] !== x.SlotIndexes.BLANK) && D[0] === D[2];
          }
        }, q.prototype.lu = function (D) {
          switch (D) {
            case x.SlotIndexes.BAR_3:
            case x.SlotIndexes.BAR_2:
            case x.SlotIndexes.BAR_1:
              return true;
            default:
              return false;
          }
        }, q.prototype.fu = function (D) {
          {
            return this.lu(W[0]) && this.lu(W[1]) && this.lu(W[2]);
          }
        }, q.prototype.du = function () {
          var D = this.reels.slice(),
            W = [],
            k = x.SlotIndexes.WILD;
          return D.forEach(function (z, L) {
            z === x.SlotIndexes.WILD ? W.push(L) : k = z;
          }), W.length > 0 && W.forEach(function (z) {
            D[z] = k;
          }), D;
        }, Object.defineProperty(q.prototype, "winLines", {
          'get': function () {
            {
              return this.iu;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "isPossibleWin", {
          'get': function () {
            return this.au;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "possibleWinSymbolIndex", {
          'get': function () {
            if (this.reels[0] === this.reels[2]) return this.reels[0];
            var D = this.du();
            return D[0] === D[2] ? D[0] : this.lu(D[0]) && this.lu(D[2]) ? x.SlotIndexes.BLANK : -1;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "winSymbolIndex", {
          'get': function () {
            var D = -1;
            if (this.totalWinAmount > 0) {
              var W = this.du();
              if (W[0] === W[1] && W[1] === W[2]) return W[0];
              if (this.fu(W)) return x.SlotIndexes.BLANK;
              W.forEach(function (k) {
                k !== x.SlotIndexes.WILD && (D = k);
              });
            }
            return D;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "middleReelsMutiply", {
          'get': function () {
            return this.ou;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "hasWild", {
          'get': function () {
            return this.hu;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "fakeReels", {
          'get': function () {
            return this.su;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "wildMultiply", {
          'get': function () {
            return this.nu;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(q.prototype, "piggyFeature", {
          'get': function () {
            return null !== this.eu;
          },
          'enumerable': false,
          'configurable': true
        }), q.prototype.getGameProtoMessage = function () {
          var D = {};
          D.ctor = m;
          D.givenName = "SlotCommonResponse";
          D.isRoot = true;
          return H.createProtoMessages([W]);
        }, q.registryKey = "SlotCommonResponse", __decorate([H.api('wp', 101, "Int32List", false, false, false, "int32")], q.prototype, "_winLines", undefined), __decorate([H.api("frl", 103, "int32", true, false, false)], q.prototype, "_fakeReels", undefined), __decorate([H.api('pc', 104, "int32", false, false, true)], q.prototype, "_piggyFeature", undefined), __decorate([H.api('wm', 105, "int32", false, false, true)], q.prototype, "_wildMultiply", undefined), __decorate([H.api("tnbwm", 106, "int32", false, false, false, "int32")], q.prototype, "_blankSlotMultiply", undefined), m = __decorate([H.messageName("SlotCommonResponse")], q);
      }(C.default);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = PGSlotTransactionModel;
