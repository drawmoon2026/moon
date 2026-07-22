// module: TweaksConfig
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function TweaksConfig(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "0602bmSQ0NBZrhW+yhcJtSb", "TweaksConfig")) {
    {
      var I = {};
      I["value"] = !0;
      Object["defineProperty"](j, "__esModule", I), F("RtConfig"), F("GamePreference"), F("CreatorTweaks"), F("Utils"), F("QuitGame"), F("Printer"), F("TweaksData");
      j["default"] = void 0, cc["_RF"]["pop"]();
    }
  }
}
module.exports = TweaksConfig;
