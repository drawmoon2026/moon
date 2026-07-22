// module: AdapterEventEmitter
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function AdapterEventEmitter(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4a843d9tZpBC5Aag4RGjJxr", "AdapterEventEmitter")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = (require("AudioAdapterConstant"), function () {
        function r() {
          this.o = Object.create(null), this.h = x.deferCallback(this);
        }
        return r.prototype.once = function (V, M, q) {
          this.on(V, M, q, true);
        }, r.prototype.emit = function (V, M, q, m) {
          undefined === m && (m = false);
          var D = this.o,
            W = D[V];
          W || (W = D[V] = []);
          for (var k = 0, z = function (U) {
              var Q = W[U];
              Q.id && Q.id !== M || (k = U, L.h(function () {
                var w = Q.fn;
                w !== x.emptyFunc && (Q.once && this.off(V, w, Q.id), w(M, q)), U === k && undefined !== M && m && this.off(M);
              }));
            }, L = this, v = 0, b = W.length; v < b; v++) z(v);
        }, r.prototype.on = function (V, M, q, m) {
          var D = this.o,
            W = D[V];
          W || (W = D[V] = []);
          for (var k = 0, z = W.length; k < z; k++) {
            var L = W[k];
            if (L.fn === M) {
              if (L.id === q) return;
              if (!q || !L.id) return;
            }
          }
          var v = {};
          v.id = q;
          v.fn = M;
          v.once = !!m;
          W.push(v);
        }, r.prototype.off = function (V, M, q) {
          if (undefined !== V) switch (typeof V) {
            case "number":
              return this.u(undefined, V);
            case "function":
              return this.u(V, M);
            default:
              return "number" == typeof M && (q = M, M = undefined), this.l(V, M, q);
          } else for (var m in this.o) this.o[m].length = 0;
        }, r.prototype.l = function (V, M, q) {
          var m = this.o[V];
          m && (undefined !== M || undefined !== q ? this.o[V] = m.filter(function (D) {
            return H(D, M, q);
          }) : m.length = 0);
        }, r.prototype.u = function (V, M) {
          for (var q in this.o) this.o[q] = this.o[q].filter(function (m) {
            return H(m, V, M);
          });
        }, r;
      }());
    exports.default = C, cc._RF.pop();
  }
  function H(r, V, M) {
    return !!(M && M !== r.id || V && V !== r.fn) || (r.fn = x.emptyFunc, false);
  }
}
module.exports = AdapterEventEmitter;
