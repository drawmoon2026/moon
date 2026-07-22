// module: CustomAssetConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function CustomAssetConfig(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "641f6GBjpVE2ZOpz8U7nZ8z", "CustomAssetConfig")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x), exports.customAssetConfig = undefined;
    var C = {};
    C.name = "click_effect";
    C.url = "lib/click_effect/prefab/click_effect_layer";
    C.type = cc.Prefab;
    C.isLocalized = false;
    var H = require("ResourceLoader"),
      r = require("SettingMenuHelper"),
      V = [C, {
        'name': "setting_menu_audio",
        'type': H.LoaderType.CUSTOM,
        'loadFunc': function (M, q) {
          r.settingMenuHelper.loadAudio(function (m) {
            m ? q(m) : M(undefined);
          });
        }
      }];
    exports.customAssetConfig = V, cc._RF.pop();
  }
}
module.exports = CustomAssetConfig;
