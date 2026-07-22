// module: WinHighlight.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function WinHighlight_spec(F, c, j) {
  'use strict';

  var I = {};
  I["value"] = !0;
  cc["_RF"]["push"](c, "1aa77YtUcFBUomDDx/cedzg", "WinHighlight.spec") || (Object["defineProperty"](j, "__esModule", I), j["showWinHighlight"] = void 0, j["showWinHighlight"] = function () {
    var m = System["get"]("automation") && System["get"]("automation")["GameData"];
    m && m["emit"]("WinHighlightShown");
  }, cc["_RF"]["pop"]());
}
module.exports = WinHighlight_spec;
