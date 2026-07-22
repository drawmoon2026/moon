// module: WinThresholdsModel
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function WinThresholdsModel(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "43fa7kpruFLXK4fYDhrIgSc", "WinThresholdsModel")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.WinThresholdsModel = undefined;
    var m = require("Utils"),
      B = function () {
        function X(Z) {
          Z && (this.oC = JSON.parse(JSON.stringify(Z)), this.MC = Z.mw, this.yC = Z.bw, this.wC = Z.mgw, this.BC = Z.smgw);
        }
        return X.prototype.getAllThresholds = function (Z, T, M) {
          var C = Z * T * M;
          return {
            'mediumWinThreshold': m.toDecimalWithExp(C * this.MC, 2),
            'bigWinThreshold': m.toDecimalWithExp(C * this.yC, 2),
            'megaWinThreshold': m.toDecimalWithExp(C * this.wC, 2),
            'superMegaWinThreshold': m.toDecimalWithExp(C * this.BC, 2)
          };
        }, Object.defineProperty(X.prototype, "rawData", {
          'get': function () {
            return this.oC;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(X.prototype, "mediumWin", {
          'get': function () {
            return this.MC;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(X.prototype, "bigWin", {
          'get': function () {
            return this.yC;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(X.prototype, "megaWin", {
          'get': function () {
            return this.wC;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(X.prototype, "superMegaWin", {
          'get': function () {
            return this.BC;
          },
          'enumerable': false,
          'configurable': true
        }), X;
      }();
    exports.WinThresholdsModel = B, cc._RF.pop();
  }
}
module.exports = WinThresholdsModel;
