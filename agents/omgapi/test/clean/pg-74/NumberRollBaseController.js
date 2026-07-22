// module: NumberRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberRollBaseController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "b940fHCDN9PkIykJo0EuNqR", "NumberRollBaseController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("NumberDisplayInterface"),
      X = cc["_decorator"],
      Z = X["ccclass"],
      T = X["property"],
      M = function (C) {
        function V() {
          var N = null !== C && C["apply"](this, arguments) || this;
          return N["rollDuration"] = 2, N["displayController"] = void 0, N['Of'] = 0, N['kf'] = 0, N['Ql'] = 0, N['Hf'] = 0, N;
        }
        return __extends(V, C), V["prototype"]["onLoad"] = function () {
          this["enabled"] = !1;
        }, V["prototype"]["play"] = function (N, q, f, g) {
          if (void 0 === g && (g = !0), !(q < 0 || N < 0)) {
            if (N === q) return g && this["displayController"]["clear"](), void this["displayController"]["displayNumber"](q, !0, f);
            this['et'] = f, this['Of'] = N, this['kf'] = q, this['Ql'] = this["rollDuration"], this['Hf'] = 0, g && this["displayController"]["clear"](), this["displayController"]["displayNumber"](N, !1), this["enabled"] = !0;
          }
        }, V["prototype"]["skip"] = function () {
          var N = this;
          this["enabled"] && (this["stop"](!1), this["displayController"]["displayNumber"](this['kf'], !0, function () {
            var q = N['et'];
            N['et'] = void 0, q && q();
          }));
        }, V["prototype"]["stop"] = function (N) {
          this["enabled"] = !1, N && (this["displayController"]["clear"](), this['et'] = void 0);
        }, V["prototype"]["update"] = function (N) {
          var q = this;
          this['Hf'] += N;
          var f = this['Hf'] / this['Ql'];
          if (f >= 1) this["stop"](!1), this["displayController"]["displayNumber"](this['kf'], !0, function () {
            var l = q['et'];
            q['et'] = void 0, l && l();
          });else {
            f = 1 - Math["cos"](f * Math['PI'] * 0.5);
            var g = cc["misc"]["lerp"](this['Of'], this['kf'], f);
            this["displayController"]["displayNumber"](g, !1);
          }
        }, __decorate([T(cc["Integer"])], V["prototype"], "rollDuration", void 0), __decorate([T({
          'override': !0,
          'type': B["default"]
        })], V["prototype"], "displayController", void 0), __decorate([Z], V);
      }(cc["Component"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = NumberRollBaseController;
