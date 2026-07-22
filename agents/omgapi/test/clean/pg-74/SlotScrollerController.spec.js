// module: SlotScrollerController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function SlotScrollerController_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "e08af4I5BlAUaisYXf6Oz5Q", "SlotScrollerController.spec") || (Object.defineProperty(exports, "__esModule", I), exports.onStateChange = undefined, exports.onStateChange = function (m) {
    var B = System.get("automation") && System.get("automation").GameData;
    m > 0 && B && B.emit("ScrollEvent", 1 === m ? "start" : "stop");
  }, cc._RF.pop());
}
module.exports = SlotScrollerController_spec;
