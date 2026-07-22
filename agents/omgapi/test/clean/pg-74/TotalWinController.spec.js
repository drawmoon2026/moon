// module: TotalWinController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function TotalWinController_spec(F, c, j) {
  'use strict';

  var I = {};
  I["value"] = !0;
  cc["_RF"]["push"](c, "170daHUimdFvI5WxYlNXB4I", "TotalWinController.spec") || (Object["defineProperty"](j, "__esModule", I), j["initTotalWinNodes"] = j["skipTotalWinAnimationShownEvent"] = j["collectTotalWinButtonShownEvent"] = void 0, j["collectTotalWinButtonShownEvent"] = function () {
    {
      var m = System["get"]("automation") && System["get"]("automation")["GameData"];
      var B = {};
      B["displayState"] = "CollectButtonShown";
      m && m["emit"]("TotalWin", B);
    }
  }, j["skipTotalWinAnimationShownEvent"] = function () {
    var m = System["get"]("automation") && System["get"]("automation")["GameData"];
    var B = {};
    B["displayState"] = "SkipNumberRollEnabled";
    m && m["emit"]("TotalWin", B);
  }, j["initTotalWinNodes"] = function (m) {
    var B = System["get"]("automation") && System["get"]("automation")["GameConfigs"];
    B && (B["initNodeConfig"](m["collectButtonNode"], "total_win_collect_button"), B["initNodeConfig"](m["skipButtonNode"], "total_win_skip_button"));
  }, cc["_RF"]["pop"]());
}
module.exports = TotalWinController_spec;
