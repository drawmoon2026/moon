// module: GamePreference
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function GamePreference(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "b7617TeDrNA16OCJDuXTFSu", "GamePreference")) {
    exports.__esModule = true, exports.globalPreference = exports.gamePreference = undefined;
    var y = require("RtConfig"),
      B = require("Preference"),
      x = (0, B.getPreference)(y.cs_Config.bundleId);
    exports.gamePreference = x;
    var C = (0, B.getPreference)(y.cs_Config.globalDomain);
    exports.globalPreference = C, cc._RF.pop();
  }
}
module.exports = GamePreference;
