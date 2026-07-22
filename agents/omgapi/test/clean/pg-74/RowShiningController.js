// module: RowShiningController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function RowShiningController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "1b37egCIUVF4qGKi0vUjP/C", "RowShiningController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("Utils"),
      X = cc["_decorator"],
      Z = X["ccclass"],
      T = X["property"],
      M = function (C) {
        function V() {
          {
            var N = null !== C && C["apply"](this, arguments) || this;
            return N["dragonGlow"] = void 0, N["middleDragonGlow"] = void 0, N["sideDragonGlow"] = void 0, N["dragonGlow"] = void 0, N["rectGlow"] = void 0, N["leftParticle"] = void 0, N["rightParticle"] = void 0, N['Ed'] = 0, N;
          }
        }
        return __extends(V, C), V["prototype"]["playParticle"] = function () {
          this["node"]["getComponent"](cc["Animation"])["playAdditive"]("particle_loop"), this["leftParticle"]["runAction"](cc["fadeIn"](0.2)), this["rightParticle"]["runAction"](cc["fadeIn"](0.2));
        }, V["prototype"]["fadeInDragonGlow"] = function () {
          this["sideDragonGlow"]["runAction"](cc["fadeIn"](0.2)), this["middleDragonGlow"]["runAction"](cc["fadeIn"](0.2));
        }, V["prototype"]["fadeInRectGlow"] = function () {
          {
            this["middleDragonGlow"]["runAction"](cc["fadeOut"](0.5)), this["update"] = this['Nd'];
          }
        }, V["prototype"]["fadeOutAll"] = function () {
          this["update"] = this['Gd'], this["sideDragonGlow"]["runAction"](cc["fadeOut"](0.2)), this["leftParticle"]["runAction"](cc["fadeOut"](0.2)), this["rightParticle"]["runAction"](cc["fadeOut"](0.2)), B["delayCallback"](0.2)(this['kd']["bind"](this));
        }, V["prototype"]['kd'] = function () {
          this["node"]["getComponent"](cc["Animation"])["stop"]("particle_loop");
        }, V["prototype"]['Nd'] = function (N) {
          this['Ed'] += N;
          var q = cc["misc"]["lerp"](0, 255, this['Ed'] / 0.2);
          q >= 255 ? (q = 255, this["rectGlow"]["opacity"] = q, this["rectGlow"]["color"] = new cc["Color"](q, q, q), this['Ed'] = 0, this["update"] = B["emptyFunc"], this["playParticle"]()) : (this["rectGlow"]["opacity"] = q, this["rectGlow"]["color"] = new cc["Color"](q, q, q));
        }, V["prototype"]['Gd'] = function (N) {
          this['Ed'] += N;
          var q = cc["misc"]["lerp"](255, 0, this['Ed'] / 0.2);
          q <= 0 ? (q = 0, this["rectGlow"]["opacity"] = q, this["rectGlow"]["color"] = new cc["Color"](q, q, q), this['Ed'] = 0, this["update"] = B["emptyFunc"]) : (this["rectGlow"]["opacity"] = q, this["rectGlow"]["color"] = new cc["Color"](q, q, q));
        }, V["prototype"]["update"] = function () {}, __decorate([T(cc["Node"])], V["prototype"], "dragonGlow", void 0), __decorate([T(cc["Node"])], V["prototype"], "middleDragonGlow", void 0), __decorate([T(cc["Node"])], V["prototype"], "sideDragonGlow", void 0), __decorate([T(cc["Node"])], V["prototype"], "dragonGlow", void 0), __decorate([T(cc["Node"])], V["prototype"], "rectGlow", void 0), __decorate([T(cc["Node"])], V["prototype"], "leftParticle", void 0), __decorate([T(cc["Node"])], V["prototype"], "rightParticle", void 0), __decorate([Z], V);
      }(cc["Component"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = RowShiningController;
