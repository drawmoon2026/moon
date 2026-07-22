// module: SettingMenuAudioConstant
// Cocos 模块函数,参数 (require, module, exports) = (C, H, exports)
function SettingMenuAudioConstant(C, H, exports) {
  'use strict';

  var V = {};
  V.value = true;
  var M = {};
  M.from = 0;
  M.to = 0.120979;
  M.key = "listItemClick";
  var q = {};
  q.from = 1;
  q.to = 1.263375;
  q.key = "menuIconPress";
  var m = {};
  m.from = 2;
  m.to = 2.15675;
  m.key = "sliderEffect";
  var D = {};
  D.from = 3;
  D.to = 3.546188;
  D.key = "walletCountingAbove";
  var W = {};
  W.listItemClick = M;
  W.menuIconPress = q;
  W.sliderEffect = m;
  W.walletCountingAbove = D;
  W.__duration = 4.03;
  W.__bitrate = "96kbps";
  cc._RF.push(H, "a27ecjviSxF+Lkka+42YOls", "SettingMenuAudioConstant") || (Object.defineProperty(exports, "__esModule", V), exports.SETTING_MENU_SFX = undefined, exports.SETTING_MENU_SFX = W, cc._RF.pop());
}
module.exports = SettingMenuAudioConstant;
