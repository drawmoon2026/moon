// module: CustomAssetConfig
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function CustomAssetConfig(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "2f2abh9/45Ct4lvHjDkIvGa", "CustomAssetConfig")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["customAssetConfig"] = void 0;
    var m = F("ResourceLoader"),
      B = F("SettingMenuHelper"),
      X = [{
        'name': "setting_menu_audio",
        'type': m["LoaderType"]["CUSTOM"],
        'loadFunc': function (Z, T) {
          B["settingMenuHelper"]["loadAudio"](function (M) {
            {
              M ? T(M) : Z(void 0);
            }
          });
        }
      }];
    j["customAssetConfig"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = CustomAssetConfig;
