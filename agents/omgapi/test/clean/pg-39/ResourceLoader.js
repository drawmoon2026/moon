// module: ResourceLoader
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ResourceLoader(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "517d1jsi4lLyboQPLjM/Od/", "ResourceLoader")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.LoaderType = undefined;
    var x,
      C = require("RetryHandler"),
      H = require("ResRC"),
      r = require("ResourceQualifierHelper");
    (function (M) {
      M[M.CUSTOM = -1] = "CUSTOM";
    })(x = exports.LoaderType || (exports.LoaderType = {}));
    var V = function () {
      function M() {
        this.zl = new C.default();
      }
      return M.prototype.loadAsset = function (q) {
        return q.type === x.CUSTOM ? this.Kl(q) : this.ql(q);
      }, M.prototype.releaseAsset = function (q) {
        return q.type === x.CUSTOM ? this.Jl(q) : this.Yl(q);
      }, M.prototype.loadBundle = function (q) {
        var m = this,
          D = this.zl,
          W = q.bundle,
          k = q.retryMessage,
          z = q.retryHandling,
          L = q.retryingCallback,
          v = q.progressCallback;
        return new Promise(function (b) {
          var U = 0,
            Q = W.length,
            w = W.slice(),
            P = W.slice(),
            R = [],
            T = Object.create(null);
          D.init(k, function () {
            w = R.slice(), P = R.slice(), R = [], X();
          });
          var Y = function () {
              if (0 === P.length) {
                if (0 === R.length) return void b(T);
                R.length > 0 && (D.canRetry() ? (L(D.getRetryCount()), D.execute()) : z(D.execute.bind(D), T, R, D.getRetryCount()));
              }
            },
            X = function () {
              w.forEach(function (E) {
                m.loadAsset(E).then(function (F) {
                  U++;
                  var N = F.config.name;
                  T[N], T[N] = F, P.splice(P.indexOf(E), 1), v(U, Q), Y();
                }).catch(function () {
                  R.push(E), P.splice(P.indexOf(E), 1), Y();
                });
              });
            };
          X();
        });
      }, M.prototype.releaseBundle = function (q) {
        var m = this,
          D = [];
        return q.forEach(function (W) {
          D.push(m.releaseAsset(W));
        }), new Promise(function (W) {
          Promise.all(D).then(function (k) {
            var z = Object.create(null);
            k.forEach(function (L) {
              z[L.config.name] = L;
            }), W(z);
          });
        });
      }, M.prototype.ql = function (q) {
        return new Promise(function (m, D) {
          var W = q.isLocalized ? r.getResourceURL(q.url) : q.url;
          H.load(W, q.type, function (k, z) {
            var L = {};
            L.config = q;
            L.result = z;
            k ? D(k) : m(L);
          });
        });
      }, M.prototype.Kl = function (q) {
        return new Promise(function (m, D) {
          q.loadFunc(function (W) {
            var k = {};
            k.config = q;
            k.result = W;
            m(k);
          }, function (W) {
            D(W);
          });
        });
      }, M.prototype.Yl = function (q) {
        return new Promise(function (m) {
          var D = q.isLocalized ? r.getResourceURL(q.url) : q.url;
          H.release(D, q.type), m({
            'config': q
          });
        });
      }, M.prototype.Jl = function (q) {
        return new Promise(function (m) {
          q.releaseFunc ? new Promise(q.releaseFunc).then(function () {
            var D = {};
            D.config = q;
            m(D);
          }) : m({
            'config': q
          });
        });
      }, M;
    }();
    exports.default = V, cc._RF.pop();
  }
}
module.exports = ResourceLoader;
