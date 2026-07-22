// module: WinHighlight.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function WinHighlight_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "1aa77YtUcFBUomDDx/cedzg", "WinHighlight.spec") || (Object.defineProperty(exports, "__esModule", I), exports.showWinHighlight = undefined, exports.showWinHighlight = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("WinHighlightShown");
  }, cc._RF.pop());
}
module.exports = WinHighlight_spec;
