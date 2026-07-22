// module: SpinOptionsButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SpinOptionsButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "3ee68qGxY9G3q+WVKsHebfZ", "SpinOptionsButton")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("GenericSettingButton"),
      X = F("UIAppearanceHelper"),
      Z = F("Utils"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"],
      V = function (N) {
        function q() {
          {
            var f = null !== N && N["apply"](this, arguments) || this;
            return f["holder"] = void 0, f["autoSpinTurn"] = void 0, f["autoSpinIcon"] = void 0, f["autoSpinIconShadow"] = void 0, f['Zp'] = void 0, f;
          }
        }
        return __extends(q, N), q["prototype"]["onLoad"] = function () {
          {
            if (N["prototype"]["onLoad"]["call"](this), this["buttonTheme"]) {
              var f = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal");
              Z["setNodeColorWithOpacity"](this["autoSpinTurn"], f), Z["setNodeColorWithOpacity"](this["autoSpinIcon"], f), Z["setNodeColorWithOpacity"](this["autoSpinIconShadow"], f);
            }
          }
        }, q["prototype"]["setAutoSpinSprite"] = function (f) {
          this["iconSprite"]["getComponent"](cc["Sprite"])["spriteFrame"] = f;
        }, q["prototype"]["playAutoSpinAnim"] = function () {
          this["stopAutoSpinAnim"]();
          var f = cc["repeatForever"](cc["rotateBy"](6, 360));
          this["autoSpinTurn"]["runAction"](f), this["autoSpinIconShadow"]["parent"]["opacity"] = 0, this['Xp']();
        }, q["prototype"]["stopAutoSpinAnim"] = function () {
          var f = this['Zp'];
          this['Zp'] = void 0, f && f(), this["autoSpinTurn"]["stopAllActions"](), this["autoSpinIconShadow"]["parent"]["stopAllActions"](), this["autoSpinIconShadow"]["parent"]["opacity"] = 0, this["autoSpinIconShadow"]["parent"]["scale"] = 1;
        }, q["prototype"]["changeButtonPressedColor"] = function (f) {
          f ? this["node"]["runAction"](cc["scaleTo"](0.05, 0.9)) : this["node"]["runAction"](cc["sequence"](cc["scaleTo"](0.05, 1.1), cc["scaleTo"](0.05, 1.05), cc["scaleTo"](0.05, 1)));
        }, q["prototype"]['Xp'] = function () {
          {
            var f = this;
            this['Zp'] = Z["delayCallback"](3)(function () {
              f["autoSpinIconShadow"]["parent"]["opacity"] = 180, f["autoSpinIconShadow"]["parent"]["scale"] = 1, f["autoSpinIconShadow"]["parent"]["runAction"](cc["sequence"](cc["spawn"](cc["scaleTo"](1.2, 2.2), cc["fadeOut"](1.2)), cc["callFunc"](function () {
                f['Xp']();
              })));
            });
          }
        }, q["prototype"]["interactableButtonColor"] = function (f) {
          if (this["buttonTheme"]) {
            var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
              l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".disabled"),
              K = f ? g : l;
            this["holder"]["opacity"] = K['a'], Z["setNodeColorWithOpacity"](this["iconSprite"], K), Z["setNodeColorWithOpacity"](this["autoSpinTurn"], K), Z["setNodeColorWithOpacity"](this["autoSpinIcon"], K), Z["setNodeColorWithOpacity"](this["autoSpinIconShadow"], K);
          }
        }, q["prototype"]["destroy"] = function () {
          {
            var f = this['Zp'];
            return this['Zp'] = void 0, f && f(), this["autoSpinTurn"]["stopAllActions"](), N["prototype"]["destroy"]["call"](this);
          }
        }, __decorate([C(cc["Node"])], q["prototype"], "holder", void 0), __decorate([C(cc["Node"])], q["prototype"], "autoSpinTurn", void 0), __decorate([C(cc["Node"])], q["prototype"], "autoSpinIcon", void 0), __decorate([C(cc["Node"])], q["prototype"], "autoSpinIconShadow", void 0), __decorate([M], q);
      }(B["default"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = SpinOptionsButton;
