// module: SinglePayoutModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SinglePayoutModel(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "029b1Bdw8RM4ZEeOX8HEoFh", "SinglePayoutModel")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = function () {
        function B() {
          {
            this.pb = [];
          }
        }
        return Object.defineProperty(B.prototype, "reelData", {
          'get': function () {
            {
              return this.pb;
            }
          },
          'set': function (X) {
            this.pb = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "payoutData", {
          'get': function () {
            return this.Sb;
          },
          'set': function (X) {
            this.Sb = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "extendSymbolData", {
          'get': function () {
            return this.gb;
          },
          'set': function (X) {
            {
              this.gb = X;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "extendBlockData", {
          'get': function () {
            return this.Cb;
          },
          'set': function (X) {
            this.Cb = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "positionArray", {
          'get': function () {
            return this.Mb;
          },
          'set': function (X) {
            this.Mb = X;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(B.prototype, "additionalData", {
          'get': function () {
            return this.yb;
          },
          'set': function (X) {
            {
              this.yb = X;
            }
          },
          'enumerable': false,
          'configurable': true
        }), B;
      }();
      j.default = m, cc._RF.pop();
    }
  }
}
module.exports = SinglePayoutModel;
