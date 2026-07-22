// module: SlotController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotController_spec(F, c, j) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "3c493RO0+JAPIWBf4Mrc4+T", "SlotController.spec") || (Object.defineProperty(j, "__esModule", I), j.symbolDrop = j.symbolBreak = j.symbolShake = undefined, j.symbolShake = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("SymbolShake");
  }, j.symbolBreak = function () {
    {
      var m = System.get("automation") && System.get("automation").GameData;
      m && m.emit("SymbolBreak");
    }
  }, j.symbolDrop = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("SymbolDrop");
  }, cc._RF.pop());
}
module.exports = SlotController_spec;
