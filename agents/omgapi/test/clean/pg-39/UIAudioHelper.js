// module: UIAudioHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function UIAudioHelper(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "57810qsxE9IZ4RLOmdbS6tE", "UIAudioHelper")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.loadAudio = exports.initUIAudioHelper = exports.UIAudioIndex = undefined;
    var x,
      C,
      H,
      V = require("BVFramework"),
      M = require("Utils"),
      q = require("UIAudioConstant");
    (function (D) {
      D[D.BACK_OR_CLOSE = 0] = "BACK_OR_CLOSE", D[D.BUTTON_CLICK = 1] = "BUTTON_CLICK", D[D.LIST_ITEN_CLICK = 2] = "LIST_ITEN_CLICK", D[D.SLIDER_EFFECT = 3] = "SLIDER_EFFECT", D[D.WALLET_COUNTING_ABOVE = 4] = "WALLET_COUNTING_ABOVE";
    })(H = exports.UIAudioIndex || (exports.UIAudioIndex = {})), exports.loadAudio = function (D) {
      if (x) {
        x = undefined, W && W();
      }
      if (C) {
        var z = undefined,
          L = function () {
            k.off("loaderror", z), D && D();
          };
        z = function (v, b) {
          k.off("load", L), D && D(b);
        }, k.once("load", L), k.once("loaderror", z), k.load();
      } else D && D(Error("UIAudioHelper not initialized"));
    }, exports.initUIAudioHelper = function (D) {
      var W = M.getCocosMajor() >= 4 ? "/lib/ui_audio_helper/res/ui_audio" : cc.url.raw("/resources/lib/ui_audio_helper/res/ui_audio.mp3");
      var k = {};
      k.preload = false;
      k.src = W;
      k.sprite = q.UI_AUDIO;
      C = new D(k), V.getGameContext().on("Game.PlayUISound", function (z) {
        var L = m(z && z.payload);
        C && C.play(L);
      });
    }, cc._RF.pop();
  }
  function m(D) {
    switch (D) {
      case H.BUTTON_CLICK:
        return q.UI_AUDIO.menuIconPress.key;
      case H.LIST_ITEN_CLICK:
      case H.SLIDER_EFFECT:
        return q.UI_AUDIO.sliderEffect.key;
      case H.WALLET_COUNTING_ABOVE:
        return q.UI_AUDIO.walletCountingAbove.key;
      case H.BACK_OR_CLOSE:
      default:
        return q.UI_AUDIO.btnPress.key;
    }
  }
}
module.exports = UIAudioHelper;
