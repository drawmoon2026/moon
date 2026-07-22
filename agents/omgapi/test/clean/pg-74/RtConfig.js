// module: RtConfig
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function RtConfig(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "fa3eebz/StIS7b2mKmtc357", "RtConfig")) {
    j.__esModule = true, j.cs_Config = undefined;
    var I = F("LaunchConfig");
    j.cs_Launch = I.cs_Launch;
    var m = {};
    m.gameId = 74;
    m.globalDomain = "com.pgsoft";
    m.bundleId = "com.pgsoft.slot.mahjongways2";
    m.loginMethod = window.LoginMethod;
    m.apiDomain = window.ApiDomain;
    m.version = "3.16.1.13";
    m.certifiedVersion = "0.0.0.0";
    var B = Object.freeze(m);
    j.cs_Config = B, cc._RF.pop();
  }
}
module.exports = RtConfig;
