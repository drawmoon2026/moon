// module: CustomAssetConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function CustomAssetConfig(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "2f2abh9/45Ct4lvHjDkIvGa", "CustomAssetConfig")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.customAssetConfig = undefined;
    var m = require("ResourceLoader"),
      B = require("SettingMenuHelper"),
      X = [{
        'name': "setting_menu_audio",
        'type': m.LoaderType.CUSTOM,
        'loadFunc': function (Z, T) {
          B.settingMenuHelper.loadAudio(function (M) {
            {
              M ? T(M) : Z(undefined);
            }
          });
        }
      }];
    exports.customAssetConfig = X, cc._RF.pop();
  }
}
module.exports = CustomAssetConfig;
