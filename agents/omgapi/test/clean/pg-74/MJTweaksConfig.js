// module: MJTweaksConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, F, exports)
function MJTweaksConfig(require, F, exports) {
  'use strict';

  if (!cc._RF.push(F, "04fb1hCR9FKeYG0VdD2KJlj", "MJTweaksConfig")) {
    {
      exports.__esModule = true, (j = require("TweaksConfig")) && j.__esModule, require("CreatorTweaks");
      var j,
        I = require("TweaksData");
      exports.testApisModes = I.testApisModes, exports.configStore = I.configStore, exports.testRegionConfigModes = I.testRegionConfigModes, require("GameConstant"), cc._RF.pop();
    }
  }
}
module.exports = MJTweaksConfig;
