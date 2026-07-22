// module: WinValuesModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function WinValuesModel(F, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "501f6RTfh9LVInQJ/Y+n54G", "WinValuesModel")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.WinValuesModel = undefined;
    var m = function () {
      function B(X) {
        X && (this.oC = JSON.parse(JSON.stringify(X)), this.AC = Object.keys(this.oC));
      }
      return B.prototype.getWinValueByPosition = function (X) {
        return this.oC[X];
      }, Object.defineProperty(B.prototype, "winValuePositions", {
        'get': function () {
          return this.AC;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(B.prototype, "rawData", {
        'get': function () {
          return JSON.parse(JSON.stringify(this.oC));
        },
        'enumerable': false,
        'configurable': true
      }), B;
    }();
    exports.WinValuesModel = m, cc._RF.pop();
  }
}
module.exports = WinValuesModel;
