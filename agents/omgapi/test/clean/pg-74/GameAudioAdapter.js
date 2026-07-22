// module: GameAudioAdapter
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function GameAudioAdapter(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "891f2bgQ3dH25Bfnq8EGRF7", "GameAudioAdapter")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("AudioManager"),
      X = F("AudioAdapter"),
      Z = F("AudioAdapterConstant"),
      T = cc["_decorator"]["ccclass"],
      M = function (C) {
        function V(N, q) {
          {
            var f = C["call"](this, N) || this;
            return f['Fs'] = void 0, f['Ws'] = void 0, f['Ws'] = q, f;
          }
        }
        return __extends(V, C), V["prototype"]["load"] = function () {
          var N = this,
            q = function () {
              N["off"](Z["AUDIO_ADAPTER_EVENT"]["LOAD_ERROR"], f), N['Fs'] = B["registerAudio"](N, N['Ws']);
            },
            f = function () {
              N["off"](Z["AUDIO_ADAPTER_EVENT"]["LOADED"], q);
            };
          return this["once"](Z["AUDIO_ADAPTER_EVENT"]["LOADED"], q), this["once"](Z["AUDIO_ADAPTER_EVENT"]["LOAD_ERROR"], f), C["prototype"]["load"]["call"](this);
        }, V["prototype"]["unload"] = function () {
          return B["unregisterAudio"](this, this['Fs']), C["prototype"]["unload"]["call"](this);
        }, __decorate([T], V);
      }(X["default"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = GameAudioAdapter;
