// module: AudioAdapterConstant
// Cocos 模块函数,参数 (require, module, exports) = (y, B, exports)
function AudioAdapterConstant(y, B, exports) {
  'use strict';

  var C = {};
  C.value = true;
  var H = {};
  H.LOADED = "load";
  H.LOAD_ERROR = "loaderror";
  H.PLAY = "play";
  H.STOP = "stop";
  H.END = "end";
  H.PAUSE = "pause";
  H.RESUME = "resume";
  H.FADED = "fade";
  H.SEEK = "seek";
  H.PLAY_ERROR = "playerror";
  H.RATE = "rate";
  H.VOLUME = "volume";
  H.MUTE = "mute";
  var r = {};
  r.UNLOADED = "unloaded";
  r.LODING = "loading";
  r.LOADED = "loaded";
  cc._RF.push(B, "a20c0AJc1VFmKnv1lBJKugX", "AudioAdapterConstant") || (Object.defineProperty(exports, "__esModule", C), exports.MAX_INSTANCE_NUMBER = exports.MAX_STACK_SOUND = exports.DEFAULT_SPRITE = exports.AUDIO_ADAPTER_STATE = exports.AUDIO_ADAPTER_EVENT = undefined, exports.AUDIO_ADAPTER_EVENT = H, exports.AUDIO_ADAPTER_STATE = r, exports.DEFAULT_SPRITE = "__default", exports.MAX_STACK_SOUND = 50, exports.MAX_INSTANCE_NUMBER = 24, cc._RF.pop());
}
module.exports = AudioAdapterConstant;
