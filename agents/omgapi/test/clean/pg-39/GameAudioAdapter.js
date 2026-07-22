// module: GameAudioAdapter
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function GameAudioAdapter(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "60852/USphLYK0gkjUYFXzp", "GameAudioAdapter")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("AudioManager"),
      C = require("AudioAdapter"),
      H = require("AudioAdapterConstant"),
      r = cc._decorator.ccclass,
      V = function (M) {
        function q(m, D) {
          var W = M.call(this, m) || this;
          return W.Qs = undefined, W.Xs = undefined, W.Xs = D, W;
        }
        return __extends(q, M), q.prototype.load = function () {
          var m = this,
            D = function () {
              m.off(H.AUDIO_ADAPTER_EVENT.LOAD_ERROR, W), m.Qs = x.registerAudio(m, m.Xs);
            },
            W = function () {
              m.off(H.AUDIO_ADAPTER_EVENT.LOADED, D);
            };
          return this.once(H.AUDIO_ADAPTER_EVENT.LOADED, D), this.once(H.AUDIO_ADAPTER_EVENT.LOAD_ERROR, W), M.prototype.load.call(this);
        }, q.prototype.unload = function () {
          return x.unregisterAudio(this, this.Qs), M.prototype.unload.call(this);
        }, __decorate([r], q);
      }(C.default);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = GameAudioAdapter;
