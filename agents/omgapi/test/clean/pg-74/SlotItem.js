// module: SlotItem
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotItem(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "cba1dJ8KHJAlrAxCvyls0+u", "SlotItem")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = F("SlotSymbol"),
      B = cc["_decorator"]["ccclass"],
      X = function (Z) {
        function T() {
          {
            var M = null !== Z && Z["apply"](this, arguments) || this;
            return M["positionIndex"] = 0, M["sprite"] = void 0, M["normalSpriteFrame"] = void 0, M["blurSpriteFrame"] = void 0, M["normalScale"] = void 0, M["blurScale"] = void 0, M["getSymbolZOrder"] = void 0, M;
          }
        }
        return __extends(T, Z), Object["defineProperty"](T["prototype"], "visible", {
          'get': function () {
            return this["sprite"] && this["sprite"]["node"]["active"];
          },
          'set': function (M) {
            this["sprite"] && (this["sprite"]["node"]["active"] = M);
          },
          'enumerable': !1,
          'configurable': !0
        }), T["prototype"]["init"] = function (M) {
          this["sprite"] = M["sprite"];
          var C = this["normalScale"] = void 0 === M["normalScale"] ? 1 : M["normalScale"];
          this["blurScale"] = void 0 === M["blurScale"] ? C : M["blurScale"], this["getSymbolZOrder"] = M["getSymbolZOrder"];
        }, T["prototype"]["setup"] = function (M, C, V, N) {
          void 0 === N && (N = !1), this["symbolIndex"] = M, this["normalSpriteFrame"] = C, this["blurSpriteFrame"] = V, this["zOrder"] = this["getSymbolZOrder"] ? this["getSymbolZOrder"](M) : 0, this["setZIndex"](), this["setBlur"](N);
        }, T["prototype"]["setZIndex"] = function (M) {
          void 0 === M && (M = 0), this["node"]["zIndex"] = M + 100 * this["zOrder"];
        }, T["prototype"]["unuse"] = function () {
          this["normalSpriteFrame"] = void 0, this["blurSpriteFrame"] = void 0, this["visible"] = !0, Z["prototype"]["unuse"]["call"](this);
        }, T["prototype"]["setBlur"] = function (M) {
          var C = this["sprite"];
          C && (C["spriteFrame"] = M ? this["blurSpriteFrame"] : this["normalSpriteFrame"], C["node"]["scale"] = M ? this["blurScale"] : this["normalScale"]);
        }, __decorate([B], T);
      }(m["default"]);
    j["default"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = SlotItem;
