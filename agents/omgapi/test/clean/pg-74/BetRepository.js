// module: BetRepository
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function BetRepository(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "14dfa+lfKlIS5vAzSig9n4q", "BetRepository")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I), j.BetRepository = undefined;
      var m = function () {
        function B(X, Z) {
          this.ft = X, this.vt = Z, this._t = X, this.bt = Z;
        }
        return Object.defineProperty(B.prototype, "selectedBetLevelValue", {
          'get': function () {
            return this._t;
          },
          'set': function (X) {
            this._t = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "selectedBetSizeValue", {
          'get': function () {
            return this.bt;
          },
          'set': function (X) {
            this.bt = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "betLevelValue", {
          'get': function () {
            return this.ft;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "betSizeValue", {
          'get': function () {
            return this.vt;
          },
          'enumerable': false,
          'configurable': true
        }), B.prototype.updateRemoteBets = function (X, Z) {
          this.ft = this._t = X, this.vt = this.bt = Z;
        }, B;
      }();
      j.BetRepository = m, cc._RF.pop();
    }
  }
}
module.exports = BetRepository;
