// module: BigWinController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function BigWinController_spec(F, c, j) {
  'use strict';

  var I = {};
  I["value"] = !0;
  cc["_RF"]["push"](c, "4b4cdkXKahNsZ1aO6wLYThr", "BigWinController.spec") || (Object["defineProperty"](j, "__esModule", I), j["initBigWinNodes"] = j["skipBigWinAnimationActiveEvent"] = j["skipBigWinButtonActiveEvent"] = void 0, j["skipBigWinButtonActiveEvent"] = function () {
    var m = System["get"]("automation") && System["get"]("automation")["GameData"];
    var B = {};
    B["displayState"] = "SkipNumberRollEnabled";
    m && m["emit"]("BigWin", B);
  }, j["skipBigWinAnimationActiveEvent"] = function () {
    {
      var m = System["get"]("automation") && System["get"]("automation")["GameData"];
      var B = {};
      B["displayState"] = "SkipAnimationEnabled";
      m && m["emit"]("BigWin", B);
    }
  }, j["initBigWinNodes"] = function (m) {
    var B = System["get"]("automation") && System["get"]("automation")["GameConfigs"];
    B && B["initNodeConfig"](m["skipButtonNode"], "big_win_skip_button");
  }, cc["_RF"]["pop"]());
}
module.exports = BigWinController_spec;
