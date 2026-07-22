// module: AudioAdapter
// Cocos 模块函数,参数 (require, module, exports) = (require, B, exports)
function AudioAdapter(require, B, exports) {
  'use strict';

  if (!cc._RF.push(B, "5c3d2SrYLxJYqXl2p30apID", "AudioAdapter")) {
    var C = {};
    C.value = true;
    Object.defineProperty(exports, "__esModule", C);
    var H,
      V,
      M = require("ResRC"),
      q = require("AudioAdapterConstant"),
      m = require("AdapterEventEmitter"),
      D = require("AudioFactory"),
      W = (H = 0, function () {
        return ++H;
      });
    (function (v) {
      v.A = "_audio";
    })(V || (V = {}));
    var k = {};
    k.load = M.load;
    k.unload = M.release;
    var L = function () {
      function v(b) {
        var U = this;
        this.P = false, this.B = Object.create(null), this.O = 0, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED, this.G = false, this.maxInstance = q.MAX_INSTANCE_NUMBER, this.N = b.src, this.T = "number" == typeof b.volume ? b.volume : 1, this.H = "number" == typeof b.rate ? b.rate : 1, this.R = !!b.mute, this.k = !!b.loop, this.L = b.sprite, this.j = b.loader || z, this.factory = b.soundFactory || new D.default();
        var Q = b.eventEmitter || new m.default();
        this.on = function (w, P, R, T) {
          null != R && R in U.B == 0 || Q.on(w, P, R, T);
        }, this.off = Q.off.bind(Q), this.once = function (w, P, R) {
          null != R && R in U.B == 0 || Q.once(w, P, R);
        }, this.D = Q.emit.bind(Q), b.preload && setTimeout(this.load.bind(this), 0);
      }
      return v.prototype.load = function () {
        this.I !== q.AUDIO_ADAPTER_STATE.LOADED && this.I !== q.AUDIO_ADAPTER_STATE.LODING && (this.j.load(this.N, this.U.bind(this)), this.I = q.AUDIO_ADAPTER_STATE.LODING);
      }, v.prototype.U = function (b, U) {
        b ? (this.D(q.AUDIO_ADAPTER_EVENT.LOAD_ERROR, undefined, b.message || b), this.G = false, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED) : (this.I = q.AUDIO_ADAPTER_STATE.LOADED, U && (this.W = U[V.A]), this.D(q.AUDIO_ADAPTER_EVENT.LOADED), this.G && this.unload());
      }, v.prototype.unload = function () {
        this.I !== q.AUDIO_ADAPTER_STATE.UNLOADED && (this.I !== q.AUDIO_ADAPTER_STATE.LODING ? (0 !== this.O && this.stop(), this.W = undefined, this.j.unload(this.N), this.G = false, this.I = q.AUDIO_ADAPTER_STATE.UNLOADED) : this.G = true);
      }, v.prototype.play = function (b) {
        var U = this;
        if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: play : audio not yet loaded!");
        var Q = "number" == typeof b,
          w = !Q && "string" == typeof b;
        if (this.P || Q) return this.resume(b), Q ? b : -1;
        var P = this.B;
        if (this.O >= this.maxInstance) {
          var R = undefined;
          for (var T in P) {
            R = T;
            break;
          }
          var Y = this.B[R];
          Y.stop(), delete this.B[R], this.O--, this.off(R), this.addAudioToPool(Y);
        }
        var X = this.getAudioFromPool();
        var E = {};
        E.loop = this.k;
        E.muted = this.R;
        E.volume = this.T;
        E.rate = this.H;
        X.reset(E);
        var F = w && this.L ? this.L[b] : undefined,
          N = 0,
          Z = 0;
        F && (N = F.from, Z = F.to - N);
        var p = W();
        return X.play(N, Z), X.once(shell.WebAudioEvent.ENDED, function () {
          if (!U.B[p]) throw Error("AudioAdapter :: play : audio doesn't exist on this adapter anymore");
          delete U.B[p], U.O--, U.D(q.AUDIO_ADAPTER_EVENT.END, p, undefined, true), U.addAudioToPool(X);
        }), P[p] = X, this.O++, this.D(q.AUDIO_ADAPTER_EVENT.PLAY, p), p;
      }, v.prototype.stop = function (b) {
        if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter :: stop : Attemp to stop not loaded audio!");
        if (0 !== this.O) if ("number" == typeof b) (Q = this.B[b]) && (delete this.B[b], this.O--, Q.stop(), this.D(q.AUDIO_ADAPTER_EVENT.STOP, b, undefined, true), this.addAudioToPool(Q));else {
          for (var U in this.B) {
            var Q;
            (Q = this.B[U]).stop(), this.D(q.AUDIO_ADAPTER_EVENT.STOP, +U, undefined, true), this.addAudioToPool(Q);
          }
          this.B = Object.create(null), this.O = 0;
        }
      }, v.prototype.pause = function (b) {
        if ("number" == typeof b) (Q = this.B[b]) && Q.playing && (Q.pause(), this.D(q.AUDIO_ADAPTER_EVENT.PAUSE, b));else {
          if (this.P = true, 0 === this.O) return;
          for (var U in this.B) {
            var Q;
            (Q = this.B[U]).playing && (Q.pause(), this.D(q.AUDIO_ADAPTER_EVENT.PAUSE, +U));
          }
        }
      }, v.prototype.resume = function (b) {
        if ("number" == typeof b) (Q = this.B[b]) && Q.paused && (Q.resume(), this.D(q.AUDIO_ADAPTER_EVENT.RESUME, b));else {
          if (this.P = false, 0 === this.O) return;
          for (var U in this.B) {
            var Q;
            (Q = this.B[U]).paused && (Q.resume(), this.D(q.AUDIO_ADAPTER_EVENT.RESUME, +U));
          }
        }
      }, v.prototype.setMute = function (b, U) {
        if ("number" == typeof U) (w = this.B[U]) && w.muted !== b && (w.muted = b, this.D(q.AUDIO_ADAPTER_EVENT.MUTE, U));else {
          if (this.R = b, 0 === this.O) return;
          for (var Q in this.B) {
            var w;
            (w = this.B[Q]).muted !== b && (w.muted = b, this.D(q.AUDIO_ADAPTER_EVENT.MUTE, +Q));
          }
        }
      }, v.prototype.isMute = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          return !!U && U.muted;
        }
        return this.R;
      }, v.prototype.setVolume = function (b, U) {
        if ("number" == typeof U) (w = this.B[U]) && w.volume !== b && (w.volume = b, this.D(q.AUDIO_ADAPTER_EVENT.VOLUME, U));else {
          if (this.T = b, 0 === this.O) return;
          for (var Q in this.B) {
            var w;
            (w = this.B[Q]).volume !== b && (w.volume = b, this.D(q.AUDIO_ADAPTER_EVENT.VOLUME, +Q));
          }
        }
      }, v.prototype.getVolume = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          return U ? U.volume : 0;
        }
        return this.T;
      }, v.prototype.getInstantVolume = function (b) {
        var U = this.B[b];
        return U ? U.instantVolume : 0;
      }, v.prototype.fade = function (b, U, Q, w) {
        var P = this;
        if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adpater :: fade : Audio not loaded!");
        if (0 !== this.O) if ("number" == typeof w) {
          var R = this.B[w];
          R && (R.off(shell.WebAudioEvent.FADED), R.once(shell.WebAudioEvent.FADED, function () {
            P.D(q.AUDIO_ADAPTER_EVENT.FADED, w);
          }), R.fade(b, U, Q));
        } else {
          this.T = U;
          var T = function (E) {
              var F = Y.B[E];
              F.off(shell.WebAudioEvent.FADED), F.once(shell.WebAudioEvent.FADED, function () {
                P.D(q.AUDIO_ADAPTER_EVENT.FADED, +E);
              }), F.fade(b, U, Q);
            },
            Y = this;
          for (var X in this.B) T(X);
        }
      }, v.prototype.setLoop = function (b, U) {
        if ("number" == typeof U) (w = this.B[U]) && (w.loop = b);else {
          if (this.k = b, 0 === this.O) return;
          for (var Q in this.B) {
            var w;
            (w = this.B[Q]).loop = b;
          }
        }
      }, v.prototype.isLoop = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          return !!U && U.loop;
        }
        return this.k;
      }, v.prototype.setRate = function (b, U) {
        if ("number" == typeof U) (w = this.B[U]) && (w.rate = b);else {
          if (this.H = b, 0 === this.O) return;
          for (var Q in this.B) {
            var w;
            (w = this.B[Q]).rate = b;
          }
        }
      }, v.prototype.getRate = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          if (U) return U.rate;
        }
        return this.H;
      }, v.prototype.isPlaying = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          return undefined !== U && U.playing;
        }
        return this.O > 0 && false === this.P;
      }, v.prototype.getDuration = function (b) {
        if ("number" == typeof b) {
          var U = this.B[b];
          if (U) return U.duration;
        } else if (this.W) return this.W.duration;
        return 0;
      }, v.prototype.getState = function () {
        return this.I;
      }, v.prototype.getCurrentTime = function (b) {
        var U = this.B[b];
        return U ? U.currentTime : 0;
      }, v.prototype.seek = function (b, U) {
        var Q = this;
        if (this.I !== q.AUDIO_ADAPTER_STATE.LOADED) throw Error("Audio Adapter:: seek : audio not yet loaded!");
        if (0 !== this.O) if ("number" == typeof U) {
          var w = this.B[U];
          w && (w.once(shell.WebAudioEvent.SEEK, function () {
            Q.D(q.AUDIO_ADAPTER_EVENT.SEEK, U);
          }), w.seek(b), w.off(shell.WebAudioEvent.SEEK));
        } else {
          if (0 === this.O) return;
          this.P = false;
          var P = __assign({}, this.B),
            R = function (Y) {
              var X = P[Y];
              X.once(shell.WebAudioEvent.SEEK, function () {
                Q.D(q.AUDIO_ADAPTER_EVENT.SEEK, +Y);
              }), X.seek(b), X.off(shell.WebAudioEvent.SEEK);
            };
          for (var T in P) R(T);
        }
      }, v.prototype.getAudioFromPool = function () {
        return this.factory.get() || new shell.WebAudio(this.W);
      }, v.prototype.addAudioToPool = function (b) {
        b.reset(), b.removeAll(), this.factory.put(b) || b.destroy();
      }, v.prototype.stereo = function () {}, v.getNewId = W, v;
    }();
    exports.default = L, cc._RF.pop();
  }
}
module.exports = AudioAdapter;
