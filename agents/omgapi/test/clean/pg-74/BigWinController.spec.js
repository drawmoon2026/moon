// module: BigWinController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function BigWinController_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "4b4cdkXKahNsZ1aO6wLYThr", "BigWinController.spec") || (Object.defineProperty(exports, "__esModule", I), exports.initBigWinNodes = exports.skipBigWinAnimationActiveEvent = exports.skipBigWinButtonActiveEvent = undefined, exports.skipBigWinButtonActiveEvent = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    var B = {};
    B.displayState = "SkipNumberRollEnabled";
    m && m.emit("BigWin", B);
  }, exports.skipBigWinAnimationActiveEvent = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    var B = {};
    B.displayState = "SkipAnimationEnabled";
    m && m.emit("BigWin", B);
  }, exports.initBigWinNodes = function (m) {
    var B = System.get("automation") && System.get("automation").GameConfigs;
    B && B.initNodeConfig(m.skipButtonNode, "big_win_skip_button");
  }, cc._RF.pop());
}
module.exports = BigWinController_spec;
