// module: TweaksConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function TweaksConfig(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "0602bmSQ0NBZrhW+yhcJtSb", "TweaksConfig")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), require("RtConfig"), require("GamePreference"), require("CreatorTweaks"), require("Utils"), require("QuitGame"), require("Printer"), require("TweaksData");
    exports.default = undefined, cc._RF.pop();
  }
}
module.exports = TweaksConfig;
