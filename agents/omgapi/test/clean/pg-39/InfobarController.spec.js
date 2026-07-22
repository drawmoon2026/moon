// module: InfobarController.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function InfobarController_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "b0244uO77dCEK0ZHUK0wXzg", "InfobarController.spec") || (Object.defineProperty(exports, "__esModule", B), exports.showWinEvent = undefined, exports.showWinEvent = function (x) {
    if (x) {
      var C = System.get("automation") && System.get("automation").GameData;
      C && C.emit("ShowWin");
    }
  }, cc._RF.pop());
}
module.exports = InfobarController_spec;
