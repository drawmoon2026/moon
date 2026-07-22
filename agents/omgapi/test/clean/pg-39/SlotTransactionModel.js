// module: SlotTransactionModel
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SlotTransactionModel(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "d5629sKgMRK16ZrOMxnkzm9", "SlotTransactionModel")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("BetRepository"),
      C = require("TransactionModel"),
      H = require("Protoutils"),
      V = require("WinLinesModel"),
      M = require("WinValuesModel"),
      q = function (m) {
        function D() {
          return null !== m && m.apply(this, arguments) || this;
        }
        var W;
        return __extends(D, m), W = D, Object.defineProperty(D.prototype, "winLines", {
          'get': function () {
            return this.iu;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "winValues", {
          'get': function () {
            return this.nb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "multiplier", {
          'get': function () {
            return this.ob;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "coinSize", {
          'get': function () {
            return this.cb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "reels", {
          'get': function () {
            return this.hb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "gameWinType", {
          'get': function () {
            return this.rb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "featureBuy", {
          'get': function () {
            return this.ab;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "currentTotalWin", {
          'get': function () {
            return this.ub;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "comboWinCount", {
          'get': function () {
            return this.lb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "featureSpinTypeCount", {
          'get': function () {
            return this.vb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "parentComboWinCount", {
          'get': function () {
            return this._b;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "winSymbolsPayout", {
          'get': function () {
            return this.pb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "hashResult", {
          'get': function () {
            return this.bb;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "betLevelValue", {
          'get': function () {
            return this.mb.selectedBetLevelValue;
          },
          'set': function (k) {
            this.mb.selectedBetLevelValue = k;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "betSizeValue", {
          'get': function () {
            return this.mb.selectedBetSizeValue;
          },
          'set': function (k) {
            this.mb.selectedBetSizeValue = k;
          },
          'enumerable': false,
          'configurable': true
        }), D.prototype.updateTransactionInfo = function (k) {
          var z = k.wp,
            L = k.lw,
            b = k.ml,
            U = k.cs,
            Q = k.rl,
            w = k.gwt,
            P = k.fb,
            R = k.ctw,
            T = k.cwc,
            Y = k.fstc,
            X = k.pcwc,
            E = k.rwsp,
            F = k.hashr;
          this.iu = z ? new V.WinLinesModel(z) : undefined, this.nb = L ? new M.WinValuesModel(L) : undefined, this.ob = b, this.cb = U, this.hb = Q, this.rb = w, this.ab = P, this.ub = R, this.lb = T, this.vb = Y, this._b = X, this.pb = E, this.bb = F, this.mb || (this.mb = new x.BetRepository(this.ob, this.coinSize)), this.mb.updateRemoteBets(this.ob, this.coinSize), this.updateSlotGameTransactionInfo(k);
        }, D.prototype.getProtoMessage = function () {
          var k = {};
          k.ctor = W;
          k.givenName = "Data";
          k.isRoot = true;
          return H.createProtoMessages(z).concat(this.getGameProtoMessage());
        }, D.prototype.getGameProtoMessage = function () {
          return [];
        }, D.registryKey = "GeneralSlotTransactionModel", __decorate([H.api('wp', 101, "Int32ListCollection", false, false, false, "int32")], D.prototype, "_winLines", undefined), __decorate([H.api('lw', 102, "double", false, false, false, "int32")], D.prototype, "_winValues", undefined), __decorate([H.api('ml', 51, "int32", false, false, false)], D.prototype, "_multiplier", undefined), __decorate([H.api('cs', 52, "double", false, false, false)], D.prototype, "_coinSize", undefined), __decorate([H.api('rl', 53, "int32", true, false, false)], D.prototype, "_reels", undefined), __decorate([H.api("ctw", 54, "double", false, false, false)], D.prototype, "_currentTotalWin", undefined), __decorate([H.api("cwc", 55, "int32", false, false, false)], D.prototype, "_comboWinCount", undefined), __decorate([H.api("fstc", 56, "int32", false, false, false, "int32")], D.prototype, "_featureSpinTypeCount", undefined), __decorate([H.api("pcwc", 57, "int32", false, false, false)], D.prototype, "_parentComboWinCount", undefined), __decorate([H.api("rwsp", 58, "string", false, false, false)], D.prototype, "_winSymbolsPayout", undefined), __decorate([H.api("hashr", 59, "string", false, false, false)], D.prototype, "_hashResult", undefined), __decorate([H.api('fb', 60, "int32", false, false, true)], D.prototype, "_featureBuy", undefined), __decorate([H.api("gwt", 71, "int32", false, false, false)], D.prototype, "_gameWinType", undefined), W = __decorate([H.messageName("SlotCommonResponse")], D);
      }(C.default);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = SlotTransactionModel;
