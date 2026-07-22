// module: SymbolImageHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function SymbolImageHandler(F, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "9b6bfcPf+VNAqt9W261jCgX", "SymbolImageHandler")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.symbolImageHandler = exports.SymbolImageHandler = undefined;
    var m = function () {
      function B() {
        this.cS = [], this.hS = [];
      }
      return B.prototype.setSymbolImage = function (X, Z) {
        this.cS[0] = Z.getSpriteFrame("wild_b"), this.cS[1] = Z.getSpriteFrame("s_scatter"), this.cS[2] = X.getSpriteFrame("high_payout_03"), this.cS[3] = X.getSpriteFrame("high_payout_02"), this.cS[4] = X.getSpriteFrame("high_payout_01"), this.cS[5] = X.getSpriteFrame("low_payout_06"), this.cS[6] = X.getSpriteFrame("low_payout_05"), this.cS[7] = X.getSpriteFrame("low_payout_04"), this.cS[8] = X.getSpriteFrame("low_payout_03"), this.cS[9] = X.getSpriteFrame("low_payout_02"), this.cS[10] = X.getSpriteFrame("low_payout_01"), this.hS[0] = Z.getSpriteFrame("wild_b_blur"), this.hS[1] = Z.getSpriteFrame("s_scatter_blur"), this.hS[2] = X.getSpriteFrame("high_payout_03_blur"), this.hS[3] = X.getSpriteFrame("high_payout_02_blur"), this.hS[4] = X.getSpriteFrame("high_payout_01_blur"), this.hS[5] = X.getSpriteFrame("low_payout_06_blur"), this.hS[6] = X.getSpriteFrame("low_payout_05_blur"), this.hS[7] = X.getSpriteFrame("low_payout_04_blur"), this.hS[8] = X.getSpriteFrame("low_payout_03_blur"), this.hS[9] = X.getSpriteFrame("low_payout_02_blur"), this.hS[10] = X.getSpriteFrame("low_payout_01_blur");
      }, Object.defineProperty(B.prototype, "symbolImages", {
        'get': function () {
          return this.cS;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(B.prototype, "blurredSymbolImages", {
        'get': function () {
          return this.hS;
        },
        'enumerable': false,
        'configurable': true
      }), B;
    }();
    exports.SymbolImageHandler = m, exports.symbolImageHandler = new m(), cc._RF.pop();
  }
}
module.exports = SymbolImageHandler;
