// module: AdapterEventEmitter
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function AdapterEventEmitter(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "4a843d9tZpBC5Aag4RGjJxr", "AdapterEventEmitter")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = F("Utils"),
        B = (F("AudioAdapterConstant"), function () {
          {
            function Z() {
              {
                this.t = Object.create(null), this.i = m.deferCallback(this);
              }
            }
            return Z.prototype.once = function (T, M, C) {
              {
                this.on(T, M, C, true);
              }
            }, Z.prototype.emit = function (T, M, C, V) {
              {
                undefined === V && (V = false);
                var N = this.t,
                  q = N[T];
                q || (q = N[T] = []);
                for (var f = 0, g = function (p) {
                    var b = q[p];
                    b.id && b.id !== M || (f = p, K.i(function () {
                      var L = b.fn;
                      L !== m.emptyFunc && (b.once && this.off(T, L, b.id), L(M, C)), p === f && undefined !== M && V && this.off(M);
                    }));
                  }, K = this, O = 0, x = q.length; O < x; O++) g(O);
              }
            }, Z.prototype.on = function (T, M, C, V) {
              {
                var N = this.t,
                  q = N[T];
                q || (q = N[T] = []);
                for (var f = 0, g = q.length; f < g; f++) {
                  {
                    var l = q[f];
                    if (l.fn === M) {
                      if (l.id === C) return;
                      if (!C || !l.id) return;
                    }
                  }
                }
                var K = {};
                K.id = C;
                K.fn = M;
                K.once = !!V;
                q.push(K);
              }
            }, Z.prototype.off = function (T, M, C) {
              if (undefined !== T) switch (typeof T) {
                case "number":
                  return this.o(undefined, T);
                case "function":
                  return this.o(T, M);
                default:
                  return "number" == typeof M && (C = M, M = undefined), this.h(T, M, C);
              } else for (var V in this.t) this.t[V].length = 0;
            }, Z.prototype.h = function (T, M, C) {
              var V = this.t[T];
              V && (undefined !== M || undefined !== C ? this.t[T] = V.filter(function (N) {
                return X(N, M, C);
              }) : V.length = 0);
            }, Z.prototype.o = function (T, M) {
              {
                for (var C in this.t) this.t[C] = this.t[C].filter(function (V) {
                  return X(V, T, M);
                });
              }
            }, Z;
          }
        }());
      j.default = B, cc._RF.pop();
    }
  }
  function X(Z, T, M) {
    return !!(M && M !== Z.id || T && T !== Z.fn) || (Z.fn = m.emptyFunc, false);
  }
}
module.exports = AdapterEventEmitter;
