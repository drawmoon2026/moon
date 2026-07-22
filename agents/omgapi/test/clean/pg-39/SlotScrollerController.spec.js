// module: SlotScrollerController.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SlotScrollerController_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "c26a6RzZj1KjaK/sUDaiLHB", "SlotScrollerController.spec") || (Object.defineProperty(exports, "__esModule", B), exports.onStateChange = undefined, exports.onStateChange = function (x) {
    var C = System.get("automation") && System.get("automation").GameData;
    x > 0 && C && C.emit("ScrollEvent", 1 === x ? "start" : "stop");
  }, cc._RF.pop());
}
module.exports = SlotScrollerController_spec;
