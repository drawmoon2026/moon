// module: TimedWinRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function TimedWinRollBaseController(j, I, m) {
  'use strict';

  if (!cc._RF.push(I, "12aa3hO3pdL6oUvYmprts/7", "TimedWinRollBaseController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(m, "__esModule", B);
      var X = {};
      X.big = 0;
      X.mega = 1;
      X.superMega = 2;
      X.overflow = 3;
      var Z = j("NumberDisplayInterface"),
        M = cc._decorator,
        C = M.ccclass,
        V = M.property,
        N = function (f) {
          {
            function g() {
              var l = null !== f && f.apply(this, arguments) || this;
              return l.displayController = undefined, l.ZS = 0, l.XS = 0, l.kf = -1, l.$S = 0, l.ig = [], l.sg = undefined, l.eg = undefined, l.ng = undefined, l.og = [], l.cg = false, l.hg = -1, l.rg = -1, l.ag = [], l.ug = [], l.Mt = [], l.lg = [], l.fg = [], l;
            }
            return __extends(g, f), g.prototype.update = function () {}, g.prototype.setNumbersCallback = function (l) {
              {
                this.ig = l;
              }
            }, g.prototype.setTimeCallback = function (l, K) {
              {
                this.og = l, this.eg = K;
              }
            }, g.prototype.init = function (l) {
              this.Mt = [l.bigWinThreshold, l.megaWinThreshold, l.superMegaWinThreshold], this.lg = [l.bigWinDuration, l.megaWinDuration, l.superMegaWinDuration], this.kf = l.totalWin, this.fg = [];
              for (var K = 0; K < 3; K++) this.fg[K] = this.lg[K].reduce(function (O, x) {
                return O + x;
              });
              this.dg();
            }, g.prototype.getWinType = function () {
              var l = {};
              l.winStyle = this.hg;
              l.winStep = this.rg;
              return l;
            }, g.prototype.play = function (l) {
              this.vg() && (this.ZS = 0, this.$S = 0, this.XS = 0, this.sg = l, this.displayController.clear(), this.update = this._g, this.cg = true);
            }, g.prototype.skip = function () {
              var l = this;
              this.cg && (this.stop(false), this.displayController.displayNumber(this.kf, true, function () {
                {
                  l.sg && l.sg(l.kf);
                }
              }));
            }, g.prototype.stop = function (l) {
              undefined === l && (l = true), l && (this.displayController.clear(), this.sg = undefined, this.eg = undefined), this.ZS = 0, this.cg = false, this.update = function () {};
            }, g.prototype.vg = function () {
              {
                return !this.ig || this.ig.length, !(!this.lg || !this.Mt || this.kf < 0);
              }
            }, g.prototype.dg = function () {
              {
                var l = this.kf,
                  K = this.Mt,
                  O = this.fg,
                  p = K[x.superMega] + (K[x.superMega] - K[x.mega]) * O[x.superMega] / O[x.mega],
                  b = [],
                  L = [];
                l < K[x.mega] ? (this.hg = x.big, L[x.big] = l, b[x.big] = this.mg(l, 0, K[x.mega], x.big, 0)) : l < K[x.superMega] ? (this.hg = x.mega, L[x.big] = K[x.mega], b[x.big] = O[x.big], L[x.mega] = l, b[x.mega] = this.mg(l, K[x.mega], K[x.superMega], x.mega, K[x.mega] / O[x.big])) : l < p ? (this.hg = x.superMega, L[x.big] = K[x.mega], b[x.big] = O[x.big], L[x.mega] = K[x.superMega], b[x.mega] = O[x.mega], L[x.superMega] = l, b[x.superMega] = this.mg(l, K[x.superMega], p, x.superMega, (K[x.superMega] - K[x.mega]) / O[x.mega])) : (this.hg = x.overflow, this.rg = 0, L[x.big] = K[x.mega], L[x.mega] = K[x.superMega], L[x.superMega] = l, b = O), this.ag = b, this.ug = L, this.ng = q(0, this.ug[0]);
              }
            }, g.prototype.mg = function (l, K, O, x, p) {
              for (var b = this.fg[x], L = this.lg[x], H = (l - K) / (O - K), U = 0, k = 0; k < L.length; k++) {
                var Y = U + L[k];
                if (H < Y / b) return p ? (l - K) / Y >= p ? (this.rg = k + 1, Y) : (this.rg = k, U) : U && H < (Y + U) / 2 / b ? (this.rg = k, U) : (this.rg = k + 1, Y);
                U = Y;
              }
              return U;
            }, g.prototype._g = function (K) {
              {
                var O,
                  x,
                  p,
                  b,
                  L,
                  H = (this.ZS += K) - this.XS,
                  U = this.ag[0];
                if (H < U) H += K * (0.2 * Math.random() - 0.1), O = this.ng.evaluate(H / U);else {
                  var k = undefined,
                    Y = undefined;
                  do {
                    k = this.ag.shift(), U = this.ag[0], Y = this.ug.shift(), this.XS += k, H -= k;
                  } while (undefined !== U && H >= U);
                  if (undefined === U) this.ng = undefined, this.cg = false, this.update = function () {}, O = this.kf;else {
                    {
                      if (this.hg === T.overflow && 1 === this.ag.length) {
                        var y = this.ng.getDistance() / k;
                        this.ng = (x = Y, p = this.ug[0], L = p - x - (b = y * U), {
                          'evaluate': function (z) {
                            return x + b * z + L * Math.pow(2, 20 * (z - 1));
                          }
                        });
                      } else this.ng = q(Y, this.ug[0]);
                      H += K * (0.2 * Math.random() - 0.1), O = this.ng.evaluate(H / U);
                    }
                  }
                }
                this.bg(O), this.eg && this.pg(this.ZS);
              }
            }, g.prototype.bg = function (l) {
              var K = this.ig,
                O = this.kf,
                p = false,
                b = [],
                L = this.sg;
              if (undefined !== K) for (; K.length && K[0] <= l;) {
                var H = K.shift();
                b.push(H);
              }
              O <= l && (this.stop(false), x = O, p = true, b.push(O), this.sg = undefined), this.displayController.displayNumber(x, p, function () {
                b.forEach(function (U) {
                  L && L(U);
                });
              });
            }, g.prototype.pg = function (l) {
              var K = this.og;
              if (undefined !== K && K.length && K[0] <= l) {
                {
                  var O = K.shift();
                  this.eg(O);
                }
              }
            }, __decorate([V({
              'type': Z.default,
              'override': true
            })], g.prototype, "displayController", undefined), __decorate([C], g);
          }
        }(cc.Component);
      m.default = N, cc._RF.pop();
    }
  }
  function q(f, g) {
    var l = g - f;
    var K = {};
    K.evaluate = function (O) {
      return f + l * O;
    };
    K.getDistance = function () {
      return l;
    };
    return K;
  }
}
module.exports = TimedWinRollBaseController;
