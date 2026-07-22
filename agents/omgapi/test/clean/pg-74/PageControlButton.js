// module: PageControlButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function PageControlButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "49dd983G1VDGoSnw7stgTlI", "PageControlButton")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("Button"),
        X = cc["_decorator"],
        Z = X["ccclass"],
        T = X["property"],
        M = function (C) {
          function V() {
            var N = null !== C && C["apply"](this, arguments) || this;
            return N["sprite"] = void 0, N["selectImg"] = void 0, N["normalImg"] = void 0, N["selectTintColor"] = void 0, N["normalTintColor"] = void 0, N["index"] = 0, N['Rf'] = !1, N;
          }
          return __extends(V, C), V["prototype"]["init"] = function () {
            this["selectImg"] && (this["sprite"]["SpriteFrame"] = this["normalImg"]), this["normalColor"] = this["normalTintColor"], this['Rf'] = !1;
          }, V["prototype"]["setSelect"] = function () {
            {
              this['Rf'] || (this["selectImg"] && (this["sprite"]["spriteFrame"] = this["selectImg"]), this["normalColor"] = this["selectTintColor"], this['Rf'] = !0);
            }
          }, V["prototype"]["setUnselect"] = function () {
            {
              this['Rf'] && (this["selectImg"] && (this["sprite"]["spriteFrame"] = this["normalImg"]), this["normalColor"] = this["normalTintColor"], this['Rf'] = !1);
            }
          }, V["prototype"]["selectDot"] = function () {
            this["delegate"] && this["delegate"]["canChangePage"] && !this["delegate"]["canChangePage"]() || this['Rf'] || (this["selectImg"] && (this["sprite"]["spriteFrame"] = this["selectImg"]), this["normalColor"] = this["selectTintColor"], this['Rf'] = !0, this["delegate"] && this["delegate"]["didSelectDotAtIndex"] && this["delegate"]["didSelectDotAtIndex"](this["index"]));
          }, __decorate([T(cc["Sprite"])], V["prototype"], "sprite", void 0), __decorate([T(cc["SpriteFrame"])], V["prototype"], "selectImg", void 0), __decorate([T(cc["SpriteFrame"])], V["prototype"], "normalImg", void 0), __decorate([T(cc["Color"])], V["prototype"], "selectTintColor", void 0), __decorate([T(cc["Color"])], V["prototype"], "normalTintColor", void 0), __decorate([T(cc["Integer"])], V["prototype"], "index", void 0), __decorate([Z], V);
        }(B["default"]);
      I["default"] = M, cc["_RF"]["pop"]();
    }
  }
}
module.exports = PageControlButton;
