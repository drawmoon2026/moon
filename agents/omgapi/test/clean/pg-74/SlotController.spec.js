// module: SlotController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function SlotController_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "3c493RO0+JAPIWBf4Mrc4+T", "SlotController.spec") || (Object.defineProperty(exports, "__esModule", I), exports.symbolDrop = exports.symbolBreak = exports.symbolShake = undefined, exports.symbolShake = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("SymbolShake");
  }, exports.symbolBreak = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("SymbolBreak");
  }, exports.symbolDrop = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("SymbolDrop");
  }, cc._RF.pop());
}
module.exports = SlotController_spec;
