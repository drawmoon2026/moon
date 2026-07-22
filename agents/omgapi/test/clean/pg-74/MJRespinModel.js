// module: MJRespinModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function MJRespinModel(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "9c956QVm3NCx7e8Kl12bb94", "MJRespinModel")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = function () {
        {
          function B(X) {
            var Z = X.sspt,
              T = X.rns,
              M = X.rnss,
              C = X.bsb;
            this.ta = Z, this.ia = T, this.sa = M, this.ea = C;
          }
          return Object.defineProperty(B.prototype, "specialSymbolPositionTransformation", {
            'get': function () {
              {
                return this.ta;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(B.prototype, "reelNextSymbol", {
            'get': function () {
              return this.ia;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(B.prototype, "reelNextSpecialSymbol", {
            'get': function () {
              return this.sa;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(B.prototype, "brokenSpecialBlock", {
            'get': function () {
              {
                return this.ea;
              }
            },
            'enumerable': false,
            'configurable': true
          }), B;
        }
      }();
      j.default = m, cc._RF.pop();
    }
  }
}
module.exports = MJRespinModel;
