// module: WinValuesModel
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function WinValuesModel(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "501f6RTfh9LVInQJ/Y+n54G", "WinValuesModel")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.WinValuesModel = undefined;
    var x = function () {
      function C(H) {
        H && (this.gS = JSON.parse(JSON.stringify(H)), this.WS = Object.keys(this.gS));
      }
      return C.prototype.getWinValueByPosition = function (H) {
        return this.gS[H];
      }, Object.defineProperty(C.prototype, "winValuePositions", {
        'get': function () {
          return this.WS;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(C.prototype, "rawData", {
        'get': function () {
          return JSON.parse(JSON.stringify(this.gS));
        },
        'enumerable': false,
        'configurable': true
      }), C;
    }();
    exports.WinValuesModel = x, cc._RF.pop();
  }
}
module.exports = WinValuesModel;
