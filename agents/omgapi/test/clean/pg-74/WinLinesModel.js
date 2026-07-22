// module: WinLinesModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function WinLinesModel(F, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "24a5eWztK9Pkb2VKy4b0JAV", "WinLinesModel")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.WinLinesModel = undefined;
    var m = function () {
      function B(X) {
        X && (this.oC = JSON.parse(JSON.stringify(X)), this.cC = Object.keys(this.oC));
      }
      return B.prototype.getWinLinesByPosition = function (X) {
        {
          return this.oC[X];
        }
      }, Object.defineProperty(B.prototype, "winPositions", {
        'get': function () {
          {
            return this.cC;
          }
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
    exports.WinLinesModel = m, cc._RF.pop();
  }
}
module.exports = WinLinesModel;
