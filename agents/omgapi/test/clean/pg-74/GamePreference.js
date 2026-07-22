// module: GamePreference
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, j)
function GamePreference(Q, F, j) {
  'use strict';

  if (!cc._RF.push(F, "3785cPSwjJF7bcaqXF8ZWoV", "GamePreference")) {
    j.__esModule = true, j.globalPreference = j.gamePreference = undefined;
    var I = Q("Preference"),
      m = Q("RtConfig"),
      B = (0, I.getPreference)(m.cs_Config.bundleId);
    j.gamePreference = B;
    var X = (0, I.getPreference)(m.cs_Config.globalDomain);
    j.globalPreference = X, cc._RF.pop();
  }
}
module.exports = GamePreference;
