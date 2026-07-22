// module: InfoboardMessageController.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function InfoboardMessageController_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "9a894aU+wtPzI8aYY1BbeiI", "InfoboardMessageController.spec") || (Object.defineProperty(exports, "__esModule", B), exports.setWinAmount = exports.setTotalAndWinText = undefined, exports.setTotalAndWinText = function (x, C) {
    if (x || C) {
      var H = System.get("automation") && System.get("automation").GameData;
      H && H.emit(x ? "ShowTotalWin" : "ShowWin");
    }
  }, exports.setWinAmount = function (x, C) {
    if (x && x > 0) {
      var H = System.get("automation") && System.get("automation").GameData;
      H && H.emit(C ? "ShowTotalWin" : "ShowWin");
    }
  }, cc._RF.pop());
}
module.exports = InfoboardMessageController_spec;
