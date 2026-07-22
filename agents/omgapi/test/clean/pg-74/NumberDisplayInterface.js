// module: NumberDisplayInterface
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberDisplayInterface(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "6e9deOwoQZHDb/Mv4FAbr3R", "NumberDisplayInterface")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("Utils"),
      X = cc["_decorator"],
      Z = X["ccclass"],
      T = X["property"],
      M = function (C) {
        function V() {
          var g = null !== C && C["apply"](this, arguments) || this;
          return g["numberContainer"] = void 0, g["maxContainerSize"] = 1142, g["enableComma"] = !0, g["enableDecimal"] = !0, g["enableShortenNumber"] = !1, g;
        }
        var N = {};
        N["tooltip"] = !1;
        var q = {};
        q["tooltip"] = !1;
        var f = {};
        f["tooltip"] = !1;
        return __extends(V, C), V["prototype"]["numberWithComma"] = function (g) {
          var l = B["getDefaultCurrencyFormat"]()["groupSeparator"];
          return g["toString"]()["replace"](/\B(?=(\d{3})+(?!\d))/g, l);
        }, V["prototype"]["setResizeAnimation"] = function (g) {
          {
            this['Bf'] = g;
          }
        }, V["prototype"]["displayNumber"] = function (g, l) {
          throw void 0 === l && (l = !0), Error("NumberDisplayInterface: method must be overriden");
        }, V["prototype"]["clear"] = function () {
          {
            throw Error("NumberDisplayInterface: method must be overriden");
          }
        }, V["prototype"]["resizeNumberIfNeeded"] = function () {
          {
            throw Error("NumberDisplayInterface: method must be overriden");
          }
        }, __decorate([T(cc["Node"])], V["prototype"], "numberContainer", void 0), __decorate([T(cc["Float"])], V["prototype"], "maxContainerSize", void 0), __decorate([T(N)], V["prototype"], "enableComma", void 0), __decorate([T(q)], V["prototype"], "enableDecimal", void 0), __decorate([T(f)], V["prototype"], "enableShortenNumber", void 0), __decorate([Z], V);
      }(cc["Component"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = NumberDisplayInterface;
