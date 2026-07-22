// module: WinRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function WinRollBaseController(j, I, m) {
  'use strict';

  if (!cc["_RF"]["push"](I, "adab7txcZBOsJ6NClaGwrmO", "WinRollBaseController")) {
    var B = {};
    B["value"] = !0;
    Object["defineProperty"](m, "__esModule", B);
    var X = {};
    X["playing"] = -1;
    X["stop"] = -1;
    var Z = j("NumberDisplayInterface"),
      T = cc["Enum"](X),
      M = cc["_decorator"],
      C = M["ccclass"],
      V = M["property"],
      N = function (q) {
        function f() {
          var g = null !== q && q["apply"](this, arguments) || this;
          return g['hC'] = 2, g['rC'] = 2, g['aC'] = 2, g['uC'] = !1, g['lC'] = !1, g['ZS'] = 0, g['fC'] = 0, g['kf'] = 0, g['dC'] = 0, g['Zf'] = T["stop"], g['ig'] = [], g['sg'] = void 0, g['vC'] = void 0, g["defaultVelocityStallDuration"] = 8, g["displayController"] = void 0, g;
        }
        return __extends(f, q), f["prototype"]["setNumbersCallback"] = function (g) {
          {
            this['ig'] = g;
          }
        }, f["prototype"]["setWinThresholds"] = function (g, l, K) {
          this['_C'] = g, this['mC'] = l, this['bC'] = K, this['uC'] = !0;
        }, f["prototype"]['pC'] = function (g, l, K) {
          return K < this["defaultVelocityStallDuration"] ? l : g + Math["pow"](2, K - this["defaultVelocityStallDuration"]);
        }, f["prototype"]["setWinDurations"] = function (g, l) {
          {
            this['hC'] = g, this['rC'] = l, this['lC'] = !0;
          }
        }, f["prototype"]["setVelocityCalculation"] = function (g) {
          this['vC'] = g;
        }, f["prototype"]["play"] = function (g, l) {
          {
            if (this['vg']()) {
              this['Zf'] = T["playing"], this['sg'] = l, this["displayController"]["clear"](), this['ZS'] = 0, this['SC'] = 0, this['fC'] = 0, this['kf'] = g;
              var K = this['mC'];
              this['gC'] = this['dC'] = K / this['hC'];
            }
          }
        }, f["prototype"]["skip"] = function () {
          var g = this;
          this['Zf'] === T["playing"] && (this["stop"](!1), this["displayController"]["displayNumber"](this['kf'], !0, function () {
            {
              g['CC'](g['kf']), g['sg'] = null;
            }
          }));
        }, f["prototype"]['vg'] = function () {
          {
            return this['lC'], !this['ig'] || this['ig']["length"], this['vC'] || (this['vC'] = this['pC']), !!this['uC'];
          }
        }, f["prototype"]["stop"] = function (g) {
          void 0 === g && (g = !0), g && (this["displayController"]["clear"](), this['sg'] = null), this['ZS'] = 0, this['Zf'] = T["stop"];
        }, f["prototype"]["update"] = function (g) {
          {
            this['Zf'] === T["playing"] && (this['SC'] >= this['bC'] ? (this['ZS'] += g, this['dC'] = this['vC'](this['gC'], this['dC'], this['ZS'], g), this['SC'] = this['SC'] + this['dC'] * g * (0.9 + 0.2 * Math["random"]())) : this['SC'] = this['SC'] + this['dC'] * g * (0.9 + 0.2 * Math["random"]()), this['bg']());
          }
        }, f["prototype"]['CC'] = function (g) {
          {
            var l = this['rC'],
              K = this['bC'],
              O = this['mC'];
            if (g === O) {
              var x = K - O;
              this['gC'] = this['dC'] = x / l;
            }
            g === K && (this['gC'] = this['dC'] = (K - O) / l), this['sg'] && this['sg'](g);
          }
        }, f["prototype"]['bg'] = function () {
          var g = this,
            l = this['SC'],
            K = this['ig'],
            O = this['kf'];
          if (O <= l) return this["stop"](!1), void this["displayController"]["displayNumber"](O, !0, function () {
            g['CC'](O), g['sg'] = null;
          });
          if (void 0 !== K && K["length"] && K[0] <= l) {
            var x = K["shift"]();
            this["displayController"]["displayNumber"](l, !1, function () {
              g['CC'](x);
            });
          } else this["displayController"]["displayNumber"](l, !1);
        }, __decorate([V(cc["Float"])], f["prototype"], "defaultVelocityStallDuration", void 0), __decorate([V({
          'type': Z["default"],
          'override': !0
        })], f["prototype"], "displayController", void 0), __decorate([C], f);
      }(cc["Component"]);
    m["default"] = N, cc["_RF"]["pop"]();
  }
}
module.exports = WinRollBaseController;
