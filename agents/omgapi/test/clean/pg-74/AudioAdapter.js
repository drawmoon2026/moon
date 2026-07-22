// module: AudioAdapter
// Cocos 模块函数,参数 (require, module, exports) = (require, I, exports)
function AudioAdapter(require, I, exports) {
  'use strict';

  if (!cc._RF.push(I, "5c3d2SrYLxJYqXl2p30apID", "AudioAdapter")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var X,
      Z,
      T = require("ResRC"),
      M = require("AudioAdapterConstant"),
      C = require("AdapterEventEmitter"),
      V = require("AudioFactory"),
      N = (X = 0, function () {
        return ++X;
      });
    (function (K) {
      K.C = "_audio";
    })(Z || (Z = {}));
    var q = {};
    q.load = T.load;
    q.unload = T.release;
    var g = function () {
      function K(O) {
        var x = this;
        this.M = false, this.H = Object.create(null), this.O = 0, this.I = M.AUDIO_ADAPTER_STATE.UNLOADED, this.T = false, this.maxInstance = M.MAX_INSTANCE_NUMBER, this.N = O.src, this.G = "number" == typeof O.volume ? O.volume : 1, this.k = "number" == typeof O.rate ? O.rate : 1, this.R = !!O.mute, this.j = !!O.loop, this.L = O.sprite, this.P = O.loader || f, this.factory = O.soundFactory || new V.default();
        var p = O.eventEmitter || new C.default();
        this.on = function (b, L, H, U) {
          null != H && H in x.H == 0 || p.on(b, L, H, U);
        }, this.off = p.off.bind(p), this.once = function (b, L, H) {
          {
            null != H && H in x.H == 0 || p.once(b, L, H);
          }
        }, this.D = p.emit.bind(p), O.preload && setTimeout(this.load.bind(this), 0);
      }
      return K.prototype.load = function () {
        this.I !== M.AUDIO_ADAPTER_STATE.LOADED && this.I !== M.AUDIO_ADAPTER_STATE.LODING && (this.P.load(this.N, this.U.bind(this)), this.I = M.AUDIO_ADAPTER_STATE.LODING);
      }, K.prototype.U = function (O, x) {
        {
          O ? (this.D(M.AUDIO_ADAPTER_EVENT.LOAD_ERROR, undefined, O.message || O), this.T = false, this.I = M.AUDIO_ADAPTER_STATE.UNLOADED) : (this.I = M.AUDIO_ADAPTER_STATE.LOADED, x && (this.F = x[Z.C]), this.D(M.AUDIO_ADAPTER_EVENT.LOADED), this.T && this.unload());
        }
      }, K.prototype.unload = function () {
        this.I !== M.AUDIO_ADAPTER_STATE.UNLOADED && (this.I !== M.AUDIO_ADAPTER_STATE.LODING ? (0 !== this.O && this.stop(), this.F = undefined, this.P.unload(this.N), this.T = false, this.I = M.AUDIO_ADAPTER_STATE.UNLOADED) : this.T = true);
      }, K.prototype.play = function (O) {
        {
          var x = this;
          if (this.I !== M.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: play : audio not yet loaded!");
          var p = "number" == typeof O,
            b = !p && "string" == typeof O;
          if (this.M || p) return this.resume(O), p ? O : -1;
          var L = this.H;
          if (this.O >= this.maxInstance) {
            var H = undefined;
            for (var U in L) {
              H = U;
              break;
            }
            var k = this.H[H];
            k.stop(), delete this.H[H], this.O--, this.off(H), this.addAudioToPool(k);
          }
          var Y = this.getAudioFromPool();
          var y = {};
          y.loop = this.j;
          y.muted = this.R;
          y.volume = this.G;
          y.rate = this.k;
          Y.reset(y);
          var z = b && this.L ? this.L[O] : undefined,
            S = 0,
            P = 0;
          z && (S = z.from, P = z.to - S);
          var G = N();
          return Y.play(S, P), Y.once(shell.WebAudioEvent.ENDED, function () {
            if (!x.H[G]) throw Error("AudioAdapter :: play : audio doesn't exist on this adapter anymore");
            delete x.H[G], x.O--, x.D(M.AUDIO_ADAPTER_EVENT.END, G, undefined, true), x.addAudioToPool(Y);
          }), L[G] = Y, this.O++, this.D(M.AUDIO_ADAPTER_EVENT.PLAY, G), G;
        }
      }, K.prototype.stop = function (O) {
        {
          if (this.I !== M.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter :: stop : Attemp to stop not loaded audio!");
          if (0 !== this.O) if ("number" == typeof O) (p = this.H[O]) && (delete this.H[O], this.O--, p.stop(), this.D(M.AUDIO_ADAPTER_EVENT.STOP, O, undefined, true), this.addAudioToPool(p));else {
            for (var x in this.H) {
              var p;
              (p = this.H[x]).stop(), this.D(M.AUDIO_ADAPTER_EVENT.STOP, +x, undefined, true), this.addAudioToPool(p);
            }
            this.H = Object.create(null), this.O = 0;
          }
        }
      }, K.prototype.pause = function (O) {
        if ("number" == typeof O) (p = this.H[O]) && p.playing && (p.pause(), this.D(M.AUDIO_ADAPTER_EVENT.PAUSE, O));else {
          {
            if (this.M = true, 0 === this.O) return;
            for (var x in this.H) {
              var p;
              (p = this.H[x]).playing && (p.pause(), this.D(M.AUDIO_ADAPTER_EVENT.PAUSE, +x));
            }
          }
        }
      }, K.prototype.resume = function (O) {
        if ("number" == typeof O) (p = this.H[O]) && p.paused && (p.resume(), this.D(M.AUDIO_ADAPTER_EVENT.RESUME, O));else {
          if (this.M = false, 0 === this.O) return;
          for (var x in this.H) {
            var p;
            (p = this.H[x]).paused && (p.resume(), this.D(M.AUDIO_ADAPTER_EVENT.RESUME, +x));
          }
        }
      }, K.prototype.setMute = function (O, x) {
        if ("number" == typeof x) (b = this.H[x]) && b.muted !== O && (b.muted = O, this.D(M.AUDIO_ADAPTER_EVENT.MUTE, x));else {
          if (this.R = O, 0 === this.O) return;
          for (var p in this.H) {
            var b;
            (b = this.H[p]).muted !== O && (b.muted = O, this.D(M.AUDIO_ADAPTER_EVENT.MUTE, +p));
          }
        }
      }, K.prototype.isMute = function (O) {
        if ("number" == typeof O) {
          {
            var x = this.H[O];
            return !!x && x.muted;
          }
        }
        return this.R;
      }, K.prototype.setVolume = function (O, x) {
        if ("number" == typeof x) (b = this.H[x]) && b.volume !== O && (b.volume = O, this.D(M.AUDIO_ADAPTER_EVENT.VOLUME, x));else {
          if (this.G = O, 0 === this.O) return;
          for (var p in this.H) {
            var b;
            (b = this.H[p]).volume !== O && (b.volume = O, this.D(M.AUDIO_ADAPTER_EVENT.VOLUME, +p));
          }
        }
      }, K.prototype.getVolume = function (O) {
        {
          if ("number" == typeof O) {
            var x = this.H[O];
            return x ? x.volume : 0;
          }
          return this.G;
        }
      }, K.prototype.getInstantVolume = function (O) {
        var x = this.H[O];
        return x ? x.instantVolume : 0;
      }, K.prototype.fade = function (O, x, p, b) {
        var L = this;
        if (this.I !== M.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adpater :: fade : Audio not loaded!");
        if (0 !== this.O) if ("number" == typeof b) {
          var H = this.H[b];
          H && (H.off(shell.WebAudioEvent.FADED), H.once(shell.WebAudioEvent.FADED, function () {
            L.D(M.AUDIO_ADAPTER_EVENT.FADED, b);
          }), H.fade(O, x, p));
        } else {
          this.G = x;
          var U = function (y) {
              var z = k.H[y];
              z.off(shell.WebAudioEvent.FADED), z.once(shell.WebAudioEvent.FADED, function () {
                L.D(M.AUDIO_ADAPTER_EVENT.FADED, +y);
              }), z.fade(O, x, p);
            },
            k = this;
          for (var Y in this.H) U(Y);
        }
      }, K.prototype.setLoop = function (O, x) {
        {
          if ("number" == typeof x) (b = this.H[x]) && (b.loop = O);else {
            if (this.j = O, 0 === this.O) return;
            for (var p in this.H) {
              var b;
              (b = this.H[p]).loop = O;
            }
          }
        }
      }, K.prototype.isLoop = function (O) {
        if ("number" == typeof O) {
          var x = this.H[O];
          return !!x && x.loop;
        }
        return this.j;
      }, K.prototype.setRate = function (O, x) {
        {
          if ("number" == typeof x) (b = this.H[x]) && (b.rate = O);else {
            if (this.k = O, 0 === this.O) return;
            for (var p in this.H) {
              {
                var b;
                (b = this.H[p]).rate = O;
              }
            }
          }
        }
      }, K.prototype.getRate = function (O) {
        if ("number" == typeof O) {
          var x = this.H[O];
          if (x) return x.rate;
        }
        return this.k;
      }, K.prototype.isPlaying = function (O) {
        if ("number" == typeof O) {
          var x = this.H[O];
          return undefined !== x && x.playing;
        }
        return this.O > 0 && false === this.M;
      }, K.prototype.getDuration = function (O) {
        if ("number" == typeof O) {
          var x = this.H[O];
          if (x) return x.duration;
        } else if (this.F) return this.F.duration;
        return 0;
      }, K.prototype.getState = function () {
        {
          return this.I;
        }
      }, K.prototype.getCurrentTime = function (O) {
        var x = this.H[O];
        return x ? x.currentTime : 0;
      }, K.prototype.seek = function (O, x) {
        var p = this;
        if (this.I !== M.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: seek : audio not yet loaded!");
        if (0 !== this.O) if ("number" == typeof x) {
          {
            var b = this.H[x];
            b && (b.once(shell.WebAudioEvent.SEEK, function () {
              p.D(M.AUDIO_ADAPTER_EVENT.SEEK, x);
            }), b.seek(O), b.off(shell.WebAudioEvent.SEEK));
          }
        } else {
          if (0 === this.O) return;
          this.M = false;
          var L = __assign({}, this.H),
            H = function (k) {
              {
                var Y = L[k];
                Y.once(shell.WebAudioEvent.SEEK, function () {
                  p.D(M.AUDIO_ADAPTER_EVENT.SEEK, +k);
                }), Y.seek(O), Y.off(shell.WebAudioEvent.SEEK);
              }
            };
          for (var U in L) H(U);
        }
      }, K.prototype.getAudioFromPool = function () {
        {
          return this.factory.get() || new shell.WebAudio(this.F);
        }
      }, K.prototype.addAudioToPool = function (O) {
        O.reset(), O.removeAll(), this.factory.put(O) || O.destroy();
      }, K.prototype.stereo = function () {}, K.getNewId = N, K;
    }();
    exports.default = g, cc._RF.pop();
  }
}
module.exports = AudioAdapter;
