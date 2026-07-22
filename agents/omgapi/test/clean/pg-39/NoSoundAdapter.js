// module: NoSoundAdapter
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NoSoundAdapter(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "d85610Qhw9DzLM9jdvZsDKB", "NoSoundAdapter")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("Utils"),
        C = require("AudioAdapter"),
        H = {
          'load': function (m, D) {
            {
              setTimeout(D, 0);
            }
          },
          'unload': function () {}
        },
        V = 2,
        M = function (m) {
          function D(W) {
            var k = m.call(this) || this;
            return k.Wr = false, k.T = 1, k.k = false, k.H = 1, k.ds = V, k.Fr = 0, k.xr = 0, k.Vr = k.Vr.bind(k), k.zr = k.zr.bind(k), k.reset(W), k;
          }
          return __extends(D, m), D.prototype.reset = function (W) {
            {
              if (this.Fr = 0, this.xr = 0, undefined !== W) {
                {
                  var k = W.loop,
                    z = W.volume,
                    L = W.muted,
                    v = W.rate,
                    b = W.duration;
                  "boolean" == typeof k && (this.k = k), "number" == typeof z && z >= 0 && z <= 1 && (this.T = z), "boolean" == typeof L && (this.Wr = L), "number" == typeof v && v > 0 && (this.H = v), "number" == typeof b && b > 0 && (this.ds = b);
                }
              }
            }
          }, D.prototype.destroy = function () {
            {
              this.reset(), this.removeAll();
            }
          }, Object.defineProperty(D.prototype, "instantVolume", {
            'get': function () {
              return this.T;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "volume", {
            'get': function () {
              return this.T;
            },
            'set': function (W) {
              {
                this.T = W, this.Kr(undefined);
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "loop", {
            'get': function () {
              return this.k;
            },
            'set': function (W) {
              W !== this.k && (this.k = W, W ? this.qr(undefined) : this.Jr());
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "paused", {
            'get': function () {
              {
                return this.Fr > 0 && this.xr > 0;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "playing", {
            'get': function () {
              {
                return this.Fr > 0 && 0 === this.xr;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "stopped", {
            'get': function () {
              return 0 === this.Fr && 0 === this.xr;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "rate", {
            'get': function () {
              return this.H;
            },
            'set': function (W) {
              "number" == typeof W && W > 0 && W !== this.H && (this.H = W);
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.pause = function () {
            {
              this.paused || (this.xr = Date.now(), this.Kr(undefined), this.qr(undefined));
            }
          }, D.prototype.resume = function () {
            this.paused && (this.Fr += Date.now() - this.xr, this.xr = 0, this.k || this.Jr());
          }, Object.defineProperty(D.prototype, "muted", {
            'get': function () {
              return this.Wr;
            },
            'set': function (W) {
              this.Wr = W;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "duration", {
            'get': function () {
              return this.ds;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(D.prototype, "currentTime", {
            'get': function () {
              return this.xr > 0 ? (this.xr - this.Fr) / 1000 % this.ds : (Date.now() - this.Fr) / 1000 % this.ds;
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.seek = function (W) {
            if (this.Kr(undefined), W >= this.ds && !this.k) return this.qr(undefined), this.Fr = 0, this.xr = 0, this.zr(), void this.emit(shell.WebAudioEvent.ENDED);
            this.paused && this.resume(), this.Fr = Date.now() - 1000 * W, this.k || this.Jr(), this.emit(shell.WebAudioEvent.SEEK);
          }, D.prototype.play = function (W, k) {
            this.Fr = Date.now(), this.ds = "number" == typeof k && k > 0 ? k : this.ds, this.k || this.Jr();
          }, D.prototype.Vr = function () {
            {
              this.Yr && (this.Kr(undefined), this.zr()), this.Fr = 0, this.xr = 0, this.emit(shell.WebAudioEvent.ENDED);
            }
          }, D.prototype.stop = function () {
            this.Kr(undefined), this.qr(undefined), this.Fr = 0, this.xr = 0, this.emit(shell.WebAudioEvent.STOP);
          }, D.prototype.fade = function (W, k, z) {
            this.T = k, this.Kr(z);
          }, D.prototype.zr = function () {
            {
              this.emit(shell.WebAudioEvent.FADED);
            }
          }, D.prototype.Jr = function () {
            var W = this.ds - this.currentTime;
            W >= 0 ? this.qr(W) : this.qr(undefined);
          }, D.prototype.qr = function (W) {
            var k = this.Qr;
            k && k(), this.Qr = null == W ? undefined : x.delayCallback(W)(this.Vr);
          }, D.prototype.Kr = function (W) {
            var k = this.Yr;
            k && k(), this.Yr = null == W ? undefined : x.delayCallback(W)(this.zr);
          }, D;
        }(shell.CustomEventTarget),
        q = function (m) {
          function D(W) {
            var k = this;
            return W.loader = H, (k = m.call(this, W) || this).Xr = W.estimatedDuration || V, k;
          }
          return __extends(D, m), D.prototype.getDuration = function (W) {
            {
              return "number" == typeof W ? m.prototype.getDuration.call(this, W) : this.Xr;
            }
          }, D.prototype.getAudioFromPool = function () {
            var W = this.factory.get();
            var k = {};
            k.duration = this.Xr;
            var z = {};
            z.duration = this.Xr;
            return W ? (W.reset(k), W) : new M(z);
          }, D;
        }(C.default);
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = NoSoundAdapter;
