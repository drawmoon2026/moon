// module: WinHighlight.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function WinHighlight_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "1aa77YtUcFBUomDDx/cedzg", "WinHighlight.spec") || (Object.defineProperty(exports, "__esModule", B), exports.showWinHighlight = undefined, exports.showWinHighlight = function () {
    {
      var x = System.get("automation") && System.get("automation").GameData;
      x && x.emit("WinHighlightShown");
    }
  }, cc._RF.pop());
}
module.exports = WinHighlight_spec;
