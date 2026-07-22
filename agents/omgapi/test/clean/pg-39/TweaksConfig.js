// module: TweaksConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function TweaksConfig(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "0602bmSQ0NBZrhW+yhcJtSb", "TweaksConfig")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), require("RtConfig"), require("GamePreference"), require("CreatorTweaks"), require("Utils"), require("QuitGame"), require("Printer"), require("TweaksData");
    exports.default = undefined, cc._RF.pop();
  }
}
module.exports = TweaksConfig;
