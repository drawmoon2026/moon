// module: SoundButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SoundButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "47f2aqFJBBCiYjiG/SqB5jv", "SoundButton")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("GenericSettingButton"),
        X = cc["_decorator"],
        Z = X["ccclass"],
        T = X["property"],
        M = function (C) {
          function V() {
            var N = null !== C && C["apply"](this, arguments) || this;
            return N["sprite"] = void 0, N["soundOn"] = void 0, N["soundOff"] = void 0, N["title"] = void 0, N;
          }
          return __extends(V, C), V["prototype"]["setTitle"] = function (N) {
            this["title"]["string"] = N;
          }, V["prototype"]["customSetup"] = function () {
            var N;
            this["sprite"]["node"]['y'] = 0, this["title"]["node"]["active"] = !1, null === (N = this["circleCollider"]) || void 0 === N || (N['y'] = 0);
          }, __decorate([T(cc["Sprite"])], V["prototype"], "sprite", void 0), __decorate([T(cc["SpriteFrame"])], V["prototype"], "soundOn", void 0), __decorate([T(cc["SpriteFrame"])], V["prototype"], "soundOff", void 0), __decorate([T(cc["Label"])], V["prototype"], "title", void 0), __decorate([Z], V);
        }(B["default"]);
      I["default"] = M, cc["_RF"]["pop"]();
    }
  }
}
module.exports = SoundButton;
