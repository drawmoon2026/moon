// module: AudioAdapterConstant
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function AudioAdapterConstant(j, I, m) {
  'use strict';

  var B = {};
  B["value"] = !0;
  var X = {};
  X["LOADED"] = "load";
  X["LOAD_ERROR"] = "loaderror";
  X["PLAY"] = "play";
  X["STOP"] = "stop";
  X["END"] = "end";
  X["PAUSE"] = "pause";
  X["RESUME"] = "resume";
  X["FADED"] = "fade";
  X["SEEK"] = "seek";
  X["PLAY_ERROR"] = "playerror";
  X["RATE"] = "rate";
  X["VOLUME"] = "volume";
  X["MUTE"] = "mute";
  var Z = {};
  Z["UNLOADED"] = "unloaded";
  Z["LODING"] = "loading";
  Z["LOADED"] = "loaded";
  cc["_RF"]["push"](I, "a20c0AJc1VFmKnv1lBJKugX", "AudioAdapterConstant") || (Object["defineProperty"](m, "__esModule", B), m["MAX_INSTANCE_NUMBER"] = m["MAX_STACK_SOUND"] = m["DEFAULT_SPRITE"] = m["AUDIO_ADAPTER_STATE"] = m["AUDIO_ADAPTER_EVENT"] = void 0, m["AUDIO_ADAPTER_EVENT"] = X, m["AUDIO_ADAPTER_STATE"] = Z, m["DEFAULT_SPRITE"] = "__default", m["MAX_STACK_SOUND"] = 50, m["MAX_INSTANCE_NUMBER"] = 24, cc["_RF"]["pop"]());
}
module.exports = AudioAdapterConstant;
