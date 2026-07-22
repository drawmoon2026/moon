// module: GamePreference
// Cocos 模块函数,参数 (require, module, exports) = (require, F, exports)
function GamePreference(require, F, exports) {
  'use strict';

  if (!cc._RF.push(F, "3785cPSwjJF7bcaqXF8ZWoV", "GamePreference")) {
    exports.__esModule = true, exports.globalPreference = exports.gamePreference = undefined;
    var I = require("Preference"),
      m = require("RtConfig"),
      B = (0, I.getPreference)(m.cs_Config.bundleId);
    exports.gamePreference = B;
    var X = (0, I.getPreference)(m.cs_Config.globalDomain);
    exports.globalPreference = X, cc._RF.pop();
  }
}
module.exports = GamePreference;
