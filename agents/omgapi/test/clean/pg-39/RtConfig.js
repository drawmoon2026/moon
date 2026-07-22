// module: RtConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function RtConfig(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "2a134wfdAlPtpk+IjZmrypn", "RtConfig")) {
    exports.__esModule = true, exports.cs_Config = undefined;
    var B = require("LaunchConfig");
    exports.cs_Launch = B.cs_Launch;
    var x = {};
    x.gameId = 39;
    x.globalDomain = "com.pgsoft";
    x.bundleId = "com.pgsoft.slot.piggygold";
    x.loginMethod = window.LoginMethod;
    x.apiDomain = window.ApiDomain;
    x.version = "6.1.0.0";
    var C = Object.freeze(x);
    exports.cs_Config = C, cc._RF.pop();
  }
}
module.exports = RtConfig;
