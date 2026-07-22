// module: TimedWinRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function TimedWinRollBaseController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "12aa3hO3pdL6oUvYmprts/7", "TimedWinRollBaseController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.big = 0;
    C.mega = 1;
    C.superMega = 2;
    C.overflow = 3;
    var H = require("NumberDisplayInterface"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.property,
      D = function (k) {
        function z() {
          var L = null !== k && k.apply(this, arguments) || this;
          return L.displayController = undefined, L.km = 0, L.Lm = 0, L.Ga = -1, L.Em = 0, L.jm = [], L.Dm = undefined, L.Um = undefined, L.Wm = undefined, L.Fm = [], L.xm = false, L.Vm = -1, L.zm = -1, L.Km = [], L.qm = [], L.Et = [], L.Jm = [], L.Ym = [], L;
        }
        return __extends(z, k), z.prototype.update = function () {}, z.prototype.setNumbersCallback = function (L) {
          this.jm = L;
        }, z.prototype.setTimeCallback = function (L, v) {
          this.Fm = L, this.Um = v;
        }, z.prototype.init = function (L) {
          this.Et = [L.bigWinThreshold, L.megaWinThreshold, L.superMegaWinThreshold], this.Jm = [L.bigWinDuration, L.megaWinDuration, L.superMegaWinDuration], this.Ga = L.totalWin, this.Ym = [];
          for (var v = 0; v < 3; v++) this.Ym[v] = this.Jm[v].reduce(function (b, U) {
            return b + U;
          });
          this.Qm();
        }, z.prototype.getWinType = function () {
          var L = {};
          L.winStyle = this.Vm;
          L.winStep = this.zm;
          return L;
        }, z.prototype.play = function (L) {
          this.Xm() && (this.km = 0, this.Em = 0, this.Lm = 0, this.Dm = L, this.displayController.clear(), this.update = this.Zm, this.xm = true);
        }, z.prototype.skip = function () {
          var L = this;
          this.xm && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
            L.Dm && L.Dm(L.Ga);
          }));
        }, z.prototype.stop = function (L) {
          undefined === L && (L = true), L && (this.displayController.clear(), this.Dm = undefined, this.Um = undefined), this.km = 0, this.xm = false, this.update = function () {};
        }, z.prototype.Xm = function () {
          return !this.jm || this.jm.length, !(!this.Jm || !this.Et || this.Ga < 0);
        }, z.prototype.Qm = function () {
          var L = this.Ga,
            v = this.Et,
            b = this.Ym,
            Q = v[U.superMega] + (v[U.superMega] - v[U.mega]) * b[U.superMega] / b[U.mega],
            w = [],
            P = [];
          L < v[U.mega] ? (this.Vm = U.big, P[U.big] = L, w[U.big] = this.$m(L, 0, v[U.mega], U.big, 0)) : L < v[U.superMega] ? (this.Vm = U.mega, P[U.big] = v[U.mega], w[U.big] = b[U.big], P[U.mega] = L, w[U.mega] = this.$m(L, v[U.mega], v[U.superMega], U.mega, v[U.mega] / b[U.big])) : L < Q ? (this.Vm = U.superMega, P[U.big] = v[U.mega], w[U.big] = b[U.big], P[U.mega] = v[U.superMega], w[U.mega] = b[U.mega], P[U.superMega] = L, w[U.superMega] = this.$m(L, v[U.superMega], Q, U.superMega, (v[U.superMega] - v[U.mega]) / b[U.mega])) : (this.Vm = U.overflow, this.zm = 0, P[U.big] = v[U.mega], P[U.mega] = v[U.superMega], P[U.superMega] = L, w = b), this.Km = w, this.qm = P, this.Wm = W(0, this.qm[0]);
        }, z.prototype.$m = function (L, v, b, U, Q) {
          for (var w = this.Ym[U], P = this.Jm[U], R = (L - v) / (b - v), T = 0, Y = 0; Y < P.length; Y++) {
            var X = T + P[Y];
            if (R < X / w) return Q ? (L - v) / X >= Q ? (this.zm = Y + 1, X) : (this.zm = Y, T) : T && R < (X + T) / 2 / w ? (this.zm = Y, T) : (this.zm = Y + 1, X);
            T = X;
          }
          return T;
        }, z.prototype.Zm = function (L) {
          var v,
            b,
            U,
            Q,
            w,
            P = (this.km += L) - this.Lm,
            R = this.Km[0];
          if (P < R) P += L * (0.2 * Math.random() - 0.1), v = this.Wm.evaluate(P / R);else {
            var T = undefined,
              Y = undefined;
            do {
              T = this.Km.shift(), R = this.Km[0], Y = this.qm.shift(), this.Lm += T, P -= T;
            } while (undefined !== R && P >= R);
            if (undefined === R) this.Wm = undefined, this.xm = false, this.update = function () {}, v = this.Ga;else {
              if (this.Vm === V.overflow && 1 === this.Km.length) {
                var X = this.Wm.getDistance() / T;
                this.Wm = (b = Y, U = this.qm[0], w = U - b - (Q = X * R), {
                  'evaluate': function (E) {
                    return b + Q * E + w * Math.pow(2, 20 * (E - 1));
                  }
                });
              } else this.Wm = W(Y, this.qm[0]);
              P += L * (0.2 * Math.random() - 0.1), v = this.Wm.evaluate(P / R);
            }
          }
          this.tS(v), this.Um && this.iS(this.km);
        }, z.prototype.tS = function (L) {
          var v = this.jm,
            b = this.Ga,
            Q = false,
            w = [],
            P = this.Dm;
          if (undefined !== v) for (; v.length && v[0] <= L;) {
            var R = v.shift();
            w.push(R);
          }
          b <= L && (this.stop(false), U = b, Q = true, w.push(b), this.Dm = undefined), this.displayController.displayNumber(U, Q, function () {
            w.forEach(function (T) {
              P && P(T);
            });
          });
        }, z.prototype.iS = function (L) {
          var v = this.Fm;
          if (undefined !== v && v.length && v[0] <= L) {
            var b = v.shift();
            this.Um(b);
          }
        }, __decorate([m({
          'type': H.default,
          'override': true
        })], z.prototype, "displayController", undefined), __decorate([q], z);
      }(cc.Component);
    exports.default = D, cc._RF.pop();
  }
  function W(k, z) {
    var L = z - k;
    var v = {};
    v.evaluate = function (b) {
      return k + L * b;
    };
    v.getDistance = function () {
      return L;
    };
    return v;
  }
}
module.exports = TimedWinRollBaseController;
