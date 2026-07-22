// module: DragonController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function DragonController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "9a2ddmtBlZNer1AyP8uke6g", "DragonController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("AudioManager"),
        X = F("AudioConstant"),
        Z = cc["_decorator"]["ccclass"],
        T = function (M) {
          function C() {
            var V = null !== M && M["apply"](this, arguments) || this;
            return V['Ps'] = void 0, V['Ds'] = void 0, V['Us'] = void 0, V;
          }
          return __extends(C, M), C["prototype"]["play"] = function () {
            B["playAudio"](X["GENERAL_AUDIO"]["fsDragonFly"]["key"]), this["node"]["getComponent"](cc["Animation"])["playAdditive"]("dragon_effect_anim");
          }, C["prototype"]["setDragonGlowFadeInCallback"] = function (V) {
            this['Ps'] = V;
          }, C["prototype"]["setRectGlowFadeInCallback"] = function (V) {
            this['Us'] = V;
          }, C["prototype"]["setMahjongMovingCallback"] = function (V) {
            {
              this['Ds'] = V;
            }
          }, C["prototype"]["fadeInDragonGlow"] = function () {
            {
              this['Ps'] && this['Ps']();
            }
          }, C["prototype"]["fadeInRectGlow"] = function () {
            this['Us'] && this['Us']();
          }, C["prototype"]["mahjongMovingStart"] = function () {
            this['Ds'] && this['Ds']();
          }, __decorate([Z], C);
        }(cc["Component"]);
      I["default"] = T, cc["_RF"]["pop"]();
    }
  }
}
module.exports = DragonController;
