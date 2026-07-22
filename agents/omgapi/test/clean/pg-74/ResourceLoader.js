// module: ResourceLoader
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ResourceLoader(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "517d1jsi4lLyboQPLjM/Od/", "ResourceLoader")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.LoaderType = undefined;
    var B,
      X = require("RetryHandler"),
      Z = require("ResRC"),
      T = require("ResourceQualifierHelper");
    (function (C) {
      C[C.CUSTOM = -1] = "CUSTOM";
    })(B = exports.LoaderType || (exports.LoaderType = {}));
    var M = function () {
      function C() {
        this.Sd = new X.default();
      }
      return C.prototype.loadAsset = function (V) {
        return V.type === B.CUSTOM ? this.gd(V) : this.Cd(V);
      }, C.prototype.releaseAsset = function (V) {
        return V.type === B.CUSTOM ? this.Md(V) : this.yd(V);
      }, C.prototype.loadBundle = function (V) {
        var N = this,
          q = this.Sd,
          f = V.bundle,
          g = V.retryMessage,
          l = V.retryHandling,
          K = V.retryingCallback,
          O = V.progressCallback;
        return new Promise(function (x) {
          var p = 0,
            b = f.length,
            L = f.slice(),
            H = f.slice(),
            U = [],
            k = Object.create(null);
          q.init(g, function () {
            L = U.slice(), H = U.slice(), U = [], y();
          });
          var Y = function () {
              if (0 === H.length) {
                if (0 === U.length) return void x(k);
                U.length > 0 && (q.canRetry() ? (K(q.getRetryCount()), q.execute()) : l(q.execute.bind(q), k, U, q.getRetryCount()));
              }
            },
            y = function () {
              L.forEach(function (z) {
                N.loadAsset(z).then(function (S) {
                  p++;
                  var P = S.config.name;
                  k[P], k[P] = S, H.splice(H.indexOf(z), 1), O(p, b), Y();
                }).catch(function () {
                  U.push(z), H.splice(H.indexOf(z), 1), Y();
                });
              });
            };
          y();
        });
      }, C.prototype.releaseBundle = function (V) {
        var N = this,
          q = [];
        return V.forEach(function (f) {
          q.push(N.releaseAsset(f));
        }), new Promise(function (f) {
          Promise.all(q).then(function (g) {
            var l = Object.create(null);
            g.forEach(function (K) {
              l[K.config.name] = K;
            }), f(l);
          });
        });
      }, C.prototype.Cd = function (V) {
        return new Promise(function (N, q) {
          var f = V.isLocalized ? T.getResourceURL(V.url) : V.url;
          Z.load(f, V.type, function (g, l) {
            var K = {};
            K.config = V;
            K.result = l;
            g ? q(g) : N(K);
          });
        });
      }, C.prototype.gd = function (V) {
        return new Promise(function (N, q) {
          V.loadFunc(function (f) {
            var g = {};
            g.config = V;
            g.result = f;
            N(g);
          }, function (f) {
            q(f);
          });
        });
      }, C.prototype.yd = function (V) {
        return new Promise(function (N) {
          var q = V.isLocalized ? T.getResourceURL(V.url) : V.url;
          Z.release(q, V.type), N({
            'config': V
          });
        });
      }, C.prototype.Md = function (V) {
        return new Promise(function (N) {
          V.releaseFunc ? new Promise(V.releaseFunc).then(function () {
            var q = {};
            q.config = V;
            N(q);
          }) : N({
            'config': V
          });
        });
      }, C;
    }();
    exports.default = M, cc._RF.pop();
  }
}
module.exports = ResourceLoader;
