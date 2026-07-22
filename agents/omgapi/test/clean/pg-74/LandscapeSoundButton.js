// module: LandscapeSoundButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function LandscapeSoundButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "948ffXQc5hNbqpouW3VdkkX", "LandscapeSoundButton")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("SoundButton"),
        X = F("UIAppearanceHelper"),
        Z = F("Utils"),
        T = cc["_decorator"],
        M = T["ccclass"],
        C = T["property"],
        V = function (N) {
          function q() {
            var f = null !== N && N["apply"](this, arguments) || this;
            return f["largeSprite"] = void 0, f["largeSoundOnIcon"] = void 0, f["largeSoundOffIcon"] = void 0, f;
          }
          return __extends(q, N), q["prototype"]["onLoad"] = function () {
            if (this["enableTouchInteraction"](), this["buttonTheme"]) {
              var f = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal");
              Z["setNodeColorWithOpacity"](this["largeSprite"]["node"], f);
            }
          }, q["prototype"]["changeButtonPressedColor"] = function (f) {
            if (this["buttonTheme"]) {
              var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".pressed");
              Z["setNodeColorWithOpacity"](this["largeSprite"]["node"], f ? l : g);
            }
          }, q["prototype"]["interactableButtonColor"] = function (f) {
            if (this["buttonTheme"]) {
              {
                var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                  l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".disabled");
                Z["setNodeColorWithOpacity"](this["largeSprite"]["node"], f ? g : l);
              }
            }
          }, __decorate([C(cc["Sprite"])], q["prototype"], "largeSprite", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "largeSoundOnIcon", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "largeSoundOffIcon", void 0), __decorate([M], q);
        }(B["default"]);
      I["default"] = V, cc["_RF"]["pop"]();
    }
  }
}
module.exports = LandscapeSoundButton;
