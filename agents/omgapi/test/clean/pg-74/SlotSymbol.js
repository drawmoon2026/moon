// module: SlotSymbol
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotSymbol(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "95c9eiMihhJPZX0QzA3D4uZ", "SlotSymbol")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = F("BVFramework"),
      B = cc["_decorator"]["ccclass"],
      X = function (Z) {
        {
          function T() {
            {
              var M = null !== Z && Z["apply"](this, arguments) || this;
              return M["symbolRow"] = 1, M["symbolColumn"] = 1, M['Sp'] = !0, M['gp'] = !1, M;
            }
          }
          return __extends(T, Z), Object["defineProperty"](T["prototype"], "visible", {
            'get': function () {
              return this["node"]["active"];
            },
            'set': function (M) {
              this["node"]["active"] = M;
            },
            'enumerable': !1,
            'configurable': !0
          }), T["prototype"]["onLoad"] = function () {
            {
              this['Sp'] && (m["getGameContext"]()["emit"]("Game.SymbolCreated", this), this['gp'] = !0);
            }
          }, T["prototype"]["unuse"] = function () {
            this["symbolRow"] = 1, this["symbolColumn"] = 1, this['Sp'] && this['gp'] && m["getGameContext"]()["emit"]("Game.SymbolRemoved", this);
          }, T["prototype"]["reuse"] = function () {
            {
              this['Sp'] && this['gp'] && m["getGameContext"]()["emit"]("Game.SymbolCreated", this);
            }
          }, T["prototype"]["onDestroy"] = function () {
            {
              this['Sp'] && this['gp'] && m["getGameContext"]()["emit"]("Game.SymbolRemoved", this);
            }
          }, T["prototype"]["enableEvent"] = function (M) {
            {
              this['Sp'] = M;
            }
          }, __decorate([B], T);
        }
      }(cc["Component"]);
    j["default"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = SlotSymbol;
