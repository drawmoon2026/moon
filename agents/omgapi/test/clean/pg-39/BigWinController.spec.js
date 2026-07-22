// module: BigWinController.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function BigWinController_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "4b4cdkXKahNsZ1aO6wLYThr", "BigWinController.spec") || (Object.defineProperty(exports, "__esModule", B), exports.initBigWinNodes = exports.skipBigWinAnimationActiveEvent = exports.skipBigWinButtonActiveEvent = undefined, exports.skipBigWinButtonActiveEvent = function () {
    var x = System.get("automation") && System.get("automation").GameData;
    var C = {};
    C.displayState = "SkipNumberRollEnabled";
    x && x.emit("BigWin", C);
  }, exports.skipBigWinAnimationActiveEvent = function () {
    var x = System.get("automation") && System.get("automation").GameData;
    var C = {};
    C.displayState = "SkipAnimationEnabled";
    x && x.emit("BigWin", C);
  }, exports.initBigWinNodes = function (x) {
    var C = System.get("automation") && System.get("automation").GameConfigs;
    C && C.initNodeConfig(x.skipButtonNode, "big_win_skip_button");
  }, cc._RF.pop());
}
module.exports = BigWinController_spec;
