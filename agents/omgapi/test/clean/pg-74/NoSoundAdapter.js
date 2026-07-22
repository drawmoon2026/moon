// module: NoSoundAdapter
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NoSoundAdapter(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "d85610Qhw9DzLM9jdvZsDKB", "NoSoundAdapter")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("Utils"),
      X = F("AudioAdapter"),
      Z = {
        'load': function (V, N) {
          setTimeout(N, 0);
        },
        'unload': function () {}
      },
      T = 2,
      M = function (V) {
        function N(q) {
          var f = V.call(this) || this;
          return f.ql = false, f.G = 1, f.j = false, f.k = 1, f.Ql = T, f.Yl = 0, f.Zl = 0, f.Xl = f.Xl.bind(f), f.$l = f.$l.bind(f), f.reset(q), f;
        }
        return __extends(N, V), N.prototype.reset = function (q) {
          if (this.Yl = 0, this.Zl = 0, undefined !== q) {
            {
              var f = q.loop,
                g = q.volume,
                l = q.muted,
                K = q.rate,
                O = q.duration;
              "boolean" == typeof f && (this.j = f), "number" == typeof g && g >= 0 && g <= 1 && (this.G = g), "boolean" == typeof l && (this.ql = l), "number" == typeof K && K > 0 && (this.k = K), "number" == typeof O && O > 0 && (this.Ql = O);
            }
          }
        }, N.prototype.destroy = function () {
          this.reset(), this.removeAll();
        }, Object.defineProperty(N.prototype, "instantVolume", {
          'get': function () {
            {
              return this.G;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "volume", {
          'get': function () {
            return this.G;
          },
          'set': function (q) {
            {
              this.G = q, this.tf(undefined);
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "loop", {
          'get': function () {
            {
              return this.j;
            }
          },
          'set': function (q) {
            {
              q !== this.j && (this.j = q, q ? this.if(undefined) : this.sf());
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "paused", {
          'get': function () {
            return this.Yl > 0 && this.Zl > 0;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "playing", {
          'get': function () {
            return this.Yl > 0 && 0 === this.Zl;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "stopped", {
          'get': function () {
            return 0 === this.Yl && 0 === this.Zl;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "rate", {
          'get': function () {
            return this.k;
          },
          'set': function (q) {
            {
              "number" == typeof q && q > 0 && q !== this.k && (this.k = q);
            }
          },
          'enumerable': false,
          'configurable': true
        }), N.prototype.pause = function () {
          this.paused || (this.Zl = Date.now(), this.tf(undefined), this.if(undefined));
        }, N.prototype.resume = function () {
          this.paused && (this.Yl += Date.now() - this.Zl, this.Zl = 0, this.j || this.sf());
        }, Object.defineProperty(N.prototype, "muted", {
          'get': function () {
            return this.ql;
          },
          'set': function (q) {
            this.ql = q;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "duration", {
          'get': function () {
            return this.Ql;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "currentTime", {
          'get': function () {
            return this.Zl > 0 ? (this.Zl - this.Yl) / 1000 % this.Ql : (Date.now() - this.Yl) / 1000 % this.Ql;
          },
          'enumerable': false,
          'configurable': true
        }), N.prototype.seek = function (q) {
          if (this.tf(undefined), q >= this.Ql && !this.j) return this.if(undefined), this.Yl = 0, this.Zl = 0, this.$l(), void this.emit(shell.WebAudioEvent.ENDED);
          this.paused && this.resume(), this.Yl = Date.now() - 1000 * q, this.j || this.sf(), this.emit(shell.WebAudioEvent.SEEK);
        }, N.prototype.play = function (q, f) {
          this.Yl = Date.now(), this.Ql = "number" == typeof f && f > 0 ? f : this.Ql, this.j || this.sf();
        }, N.prototype.Xl = function () {
          this.ef && (this.tf(undefined), this.$l()), this.Yl = 0, this.Zl = 0, this.emit(shell.WebAudioEvent.ENDED);
        }, N.prototype.stop = function () {
          this.tf(undefined), this.if(undefined), this.Yl = 0, this.Zl = 0, this.emit(shell.WebAudioEvent.STOP);
        }, N.prototype.fade = function (q, f, g) {
          {
            this.G = f, this.tf(g);
          }
        }, N.prototype.$l = function () {
          this.emit(shell.WebAudioEvent.FADED);
        }, N.prototype.sf = function () {
          var q = this.Ql - this.currentTime;
          q >= 0 ? this.if(q) : this.if(undefined);
        }, N.prototype.if = function (q) {
          {
            var f = this.nf;
            f && f(), this.nf = null == q ? undefined : B.delayCallback(q)(this.Xl);
          }
        }, N.prototype.tf = function (q) {
          var f = this.ef;
          f && f(), this.ef = null == q ? undefined : B.delayCallback(q)(this.$l);
        }, N;
      }(shell.CustomEventTarget),
      C = function (V) {
        {
          function N(q) {
            var f = this;
            return q.loader = Z, (f = V.call(this, q) || this).cf = q.estimatedDuration || T, f;
          }
          return __extends(N, V), N.prototype.getDuration = function (q) {
            return "number" == typeof q ? V.prototype.getDuration.call(this, q) : this.cf;
          }, N.prototype.getAudioFromPool = function () {
            var q = this.factory.get();
            var f = {};
            f.duration = this.cf;
            var g = {};
            g.duration = this.cf;
            return q ? (q.reset(f), q) : new M(g);
          }, N;
        }
      }(X.default);
    I.default = C, cc._RF.pop();
  }
}
module.exports = NoSoundAdapter;
