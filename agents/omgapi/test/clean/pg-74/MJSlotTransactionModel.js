// module: MJSlotTransactionModel
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJSlotTransactionModel(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "52e61IcEOlECKK1RqctmBZg", "MJSlotTransactionModel")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SlotTransactionModel"),
      X = require("MJFreeSpinModel"),
      Z = require("MJRespinModel"),
      T = function (M) {
        {
          function C() {
            var V = null !== M && M.apply(this, arguments) || this;
            return V.Ja = [null, null], V;
          }
          return __extends(C, M), C.prototype.updateSlotGameTransactionInfo = function (V) {
            this.Va(V);
            var N = V.snww,
              q = V.ssb,
              g = V.ss,
              K = V.fs,
              O = V.rs,
              x = V.ssaw,
              p = V.ptbr,
              L = V.sc,
              H = V.ml,
              U = V.gwt,
              k = V.sid,
              Y = V.psid,
              y = V.st,
              z = V.nst,
              S = V.mi;
            this.za = N, this.Ka = q, this.qa = g, this.Qa = K ? new X.default(K) : undefined, this.Ya = O ? new Z.default(O) : undefined, this.Za = x, this.Xa = p, this.$a = L, this.tu = H, this.iu = U, this.su = k, this.eu = Y, this.nu = y, this.ou = z, this.cu = S;
          }, Object.defineProperty(C.prototype, "symbolNumberWinWays", {
            'get': function () {
              {
                return this.za;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "specialSymbolsBefore", {
            'get': function () {
              {
                return this.Ka;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "specialSymbols", {
            'get': function () {
              return this.qa;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "respin", {
            'get': function () {
              return this.Ya;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "singleSpinAccumulatedWin", {
            'get': function () {
              return this.Za;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "positionToBeRemove", {
            'get': function () {
              return this.Xa;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "scatterCount", {
            'get': function () {
              return this.$a;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "multiplier", {
            'get': function () {
              return this.tu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "winMultiplier", {
            'get': function () {
              return this.cu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "gameWinType", {
            'get': function () {
              return this.iu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "spinId", {
            'get': function () {
              {
                return this.su;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "parentSpinId", {
            'get': function () {
              return this.eu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "freeSpin", {
            'get': function () {
              return this.Qa;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "transitionFrom", {
            'get': function () {
              return this.nu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "transitionTo", {
            'get': function () {
              return this.ou;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(C.prototype, "previousTransactionInfo", {
            'get': function () {
              return this.Ja[0];
            },
            'enumerable': false,
            'configurable': true
          }), C.prototype.Va = function (V) {
            this.Ja.splice(0, 1), this.Ja.push(V), this.Ja.length;
          }, C;
        }
      }(B.default);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = MJSlotTransactionModel;
