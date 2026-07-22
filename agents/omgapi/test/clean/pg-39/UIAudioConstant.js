// module: UIAudioConstant
// Cocos 模块函数,参数 (require, module, exports) = (H, r, exports)
function UIAudioConstant(H, r, exports) {
  'use strict';

  var M = {};
  M.value = true;
  var q = {};
  q.from = 0;
  q.to = 0.263375;
  q.key = "btnPress";
  var m = {};
  m.from = 1;
  m.to = 1.120979;
  m.key = "listItemClick";
  var D = {};
  D.from = 2;
  D.to = 2.263375;
  D.key = "menuIconPress";
  var W = {};
  W.from = 3;
  W.to = 3.15675;
  W.key = "sliderEffect";
  var k = {};
  k.from = 4;
  k.to = 4.546188;
  k.key = "walletCountingAbove";
  var o = {};
  o.btnPress = q;
  o.listItemClick = m;
  o.menuIconPress = D;
  o.sliderEffect = W;
  o.walletCountingAbove = k;
  o.__duration = 5;
  o.__bitrate = "96kbps";
  cc._RF.push(r, "69d4dxPKH5CVZetz/GKOLO2", "UIAudioConstant") || (Object.defineProperty(exports, "__esModule", M), exports.UI_AUDIO = undefined, exports.UI_AUDIO = o, cc._RF.pop());
}
module.exports = UIAudioConstant;
