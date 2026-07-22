// module: GameAudioAdapter
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function GameAudioAdapter(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "891f2bgQ3dH25Bfnq8EGRF7", "GameAudioAdapter")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("AudioManager"),
      X = require("AudioAdapter"),
      Z = require("AudioAdapterConstant"),
      T = cc._decorator.ccclass,
      M = function (C) {
        function V(N, q) {
          {
            var f = C.call(this, N) || this;
            return f.Fs = undefined, f.Ws = undefined, f.Ws = q, f;
          }
        }
        return __extends(V, C), V.prototype.load = function () {
          var N = this,
            q = function () {
              N.off(Z.AUDIO_ADAPTER_EVENT.LOAD_ERROR, f), N.Fs = B.registerAudio(N, N.Ws);
            },
            f = function () {
              N.off(Z.AUDIO_ADAPTER_EVENT.LOADED, q);
            };
          return this.once(Z.AUDIO_ADAPTER_EVENT.LOADED, q), this.once(Z.AUDIO_ADAPTER_EVENT.LOAD_ERROR, f), C.prototype.load.call(this);
        }, V.prototype.unload = function () {
          return B.unregisterAudio(this, this.Fs), C.prototype.unload.call(this);
        }, __decorate([T], V);
      }(X.default);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = GameAudioAdapter;
