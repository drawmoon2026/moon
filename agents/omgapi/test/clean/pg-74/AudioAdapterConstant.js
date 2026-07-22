// module: AudioAdapterConstant
// Cocos 模块函数,参数 (require, module, exports) = (j, I, exports)
function AudioAdapterConstant(j, I, exports) {
  'use strict';

  var B = {};
  B.value = true;
  var X = {};
  X.LOADED = "load";
  X.LOAD_ERROR = "loaderror";
  X.PLAY = "play";
  X.STOP = "stop";
  X.END = "end";
  X.PAUSE = "pause";
  X.RESUME = "resume";
  X.FADED = "fade";
  X.SEEK = "seek";
  X.PLAY_ERROR = "playerror";
  X.RATE = "rate";
  X.VOLUME = "volume";
  X.MUTE = "mute";
  var Z = {};
  Z.UNLOADED = "unloaded";
  Z.LODING = "loading";
  Z.LOADED = "loaded";
  cc._RF.push(I, "a20c0AJc1VFmKnv1lBJKugX", "AudioAdapterConstant") || (Object.defineProperty(exports, "__esModule", B), exports.MAX_INSTANCE_NUMBER = exports.MAX_STACK_SOUND = exports.DEFAULT_SPRITE = exports.AUDIO_ADAPTER_STATE = exports.AUDIO_ADAPTER_EVENT = undefined, exports.AUDIO_ADAPTER_EVENT = X, exports.AUDIO_ADAPTER_STATE = Z, exports.DEFAULT_SPRITE = "__default", exports.MAX_STACK_SOUND = 50, exports.MAX_INSTANCE_NUMBER = 24, cc._RF.pop());
}
module.exports = AudioAdapterConstant;
