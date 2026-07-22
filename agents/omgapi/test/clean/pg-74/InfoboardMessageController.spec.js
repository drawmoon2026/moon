// module: InfoboardMessageController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function InfoboardMessageController_spec(F, c, j) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "9a894aU+wtPzI8aYY1BbeiI", "InfoboardMessageController.spec") || (Object.defineProperty(j, "__esModule", I), j.setWinAmount = j.setTotalAndWinText = undefined, j.setTotalAndWinText = function (m, B) {
    if (m || B) {
      var X = System.get("automation") && System.get("automation").GameData;
      X && X.emit(m ? "ShowTotalWin" : "ShowWin");
    }
  }, j.setWinAmount = function (m, B) {
    if (m && m > 0) {
      var X = System.get("automation") && System.get("automation").GameData;
      X && X.emit(B ? "ShowTotalWin" : "ShowWin");
    }
  }, cc._RF.pop());
}
module.exports = InfoboardMessageController_spec;
