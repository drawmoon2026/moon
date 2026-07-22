// module: WinRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function WinRollBaseController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "adab7txcZBOsJ6NClaGwrmO", "WinRollBaseController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.playing = -1;
    C.stop = -1;
    var H = require("NumberDisplayInterface"),
      V = cc.Enum(C),
      M = cc._decorator,
      q = M.ccclass,
      m = M.property,
      D = function (W) {
        {
          function k() {
            var z = null !== W && W.apply(this, arguments) || this;
            return z.yS = 2, z.MS = 2, z.wS = 2, z.AS = false, z.PS = false, z.km = 0, z.BS = 0, z.Ga = 0, z.OS = 0, z.Nu = V.stop, z.jm = [], z.Dm = undefined, z.IS = undefined, z.defaultVelocityStallDuration = 8, z.displayController = undefined, z;
          }
          return __extends(k, W), k.prototype.setNumbersCallback = function (z) {
            this.jm = z;
          }, k.prototype.setWinThresholds = function (z, L, v) {
            this.GS = z, this.NS = L, this.TS = v, this.AS = true;
          }, k.prototype.HS = function (z, L, v) {
            return v < this.defaultVelocityStallDuration ? L : z + Math.pow(2, v - this.defaultVelocityStallDuration);
          }, k.prototype.setWinDurations = function (z, L) {
            this.yS = z, this.MS = L, this.PS = true;
          }, k.prototype.setVelocityCalculation = function (z) {
            this.IS = z;
          }, k.prototype.play = function (z, L) {
            {
              if (this.Xm()) {
                this.Nu = V.playing, this.Dm = L, this.displayController.clear(), this.km = 0, this.RS = 0, this.BS = 0, this.Ga = z;
                var v = this.NS;
                this.kS = this.OS = v / this.yS;
              }
            }
          }, k.prototype.skip = function () {
            var z = this;
            this.Nu === V.playing && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
              z.LS(z.Ga), z.Dm = null;
            }));
          }, k.prototype.Xm = function () {
            return this.PS, !this.jm || this.jm.length, this.IS || (this.IS = this.HS), !!this.AS;
          }, k.prototype.stop = function (z) {
            undefined === z && (z = true), z && (this.displayController.clear(), this.Dm = null), this.km = 0, this.Nu = V.stop;
          }, k.prototype.update = function (z) {
            this.Nu === V.playing && (this.RS >= this.TS ? (this.km += z, this.OS = this.IS(this.kS, this.OS, this.km, z), this.RS = this.RS + this.OS * z * (0.9 + 0.2 * Math.random())) : this.RS = this.RS + this.OS * z * (0.9 + 0.2 * Math.random()), this.tS());
          }, k.prototype.LS = function (z) {
            var L = this.MS,
              v = this.TS,
              b = this.NS;
            if (z === b) {
              var U = v - b;
              this.kS = this.OS = U / L;
            }
            z === v && (this.kS = this.OS = (v - b) / L), this.Dm && this.Dm(z);
          }, k.prototype.tS = function () {
            {
              var z = this,
                L = this.RS,
                v = this.jm,
                b = this.Ga;
              if (b <= L) return this.stop(false), void this.displayController.displayNumber(b, true, function () {
                {
                  z.LS(b), z.Dm = null;
                }
              });
              if (undefined !== v && v.length && v[0] <= L) {
                var U = v.shift();
                this.displayController.displayNumber(L, false, function () {
                  z.LS(U);
                });
              } else this.displayController.displayNumber(L, false);
            }
          }, __decorate([m(cc.Float)], k.prototype, "defaultVelocityStallDuration", undefined), __decorate([m({
            'type': H.default,
            'override': true
          })], k.prototype, "displayController", undefined), __decorate([q], k);
        }
      }(cc.Component);
    exports.default = D, cc._RF.pop();
  }
}
module.exports = WinRollBaseController;
