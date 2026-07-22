// module: WinLinesModel
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function WinLinesModel(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "24a5eWztK9Pkb2VKy4b0JAV", "WinLinesModel")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), exports.WinLinesModel = undefined;
      var x = function () {
        function C(H) {
          H && (this.gS = JSON.parse(JSON.stringify(H)), this.CS = Object.keys(this.gS));
        }
        return C.prototype.getWinLinesByPosition = function (H) {
          {
            return this.gS[H];
          }
        }, Object.defineProperty(C.prototype, "winPositions", {
          'get': function () {
            return this.CS;
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
      exports.WinLinesModel = x, cc._RF.pop();
    }
  }
}
module.exports = WinLinesModel;
