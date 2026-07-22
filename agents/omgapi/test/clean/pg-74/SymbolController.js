// module: SymbolController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SymbolController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "dd489wDY8JBhZmeIMbgCiSL", "SymbolController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("GameConstant"),
      X = F("SymbolImageHandler"),
      Z = F("SlotHandler"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"],
      V = function (N) {
        function q() {
          var f = null !== N && N["apply"](this, arguments) || this;
          return f["symbolBases"] = [], f["symbolBase"] = void 0, f["symbolBaseGoldIngot"] = void 0, f["winGlowC"] = void 0, f["winGlowCSprite"] = void 0, f["winFrame"] = void 0, f["winGlow"] = void 0, f["scatterVfx"] = void 0, f["winVfx"] = void 0, f["symbolSprite"] = void 0, f["symbolBaseSprite"] = void 0, f["winAnim"] = void 0, f['eS'] = !1, f;
        }
        return __extends(q, N), q["prototype"]["init"] = function (f) {
          var g = f === B["SLOT_SYMBOLS"]["WILD"];
          this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][f], this["symbolBaseSprite"]["spriteFrame"] = g ? this["symbolBases"][2] : this["symbolBases"][0], g && (this["scatterVfx"]["active"] = !0, this["winAnim"]["playAdditive"]("wild_loop_anim"), this["replayIngotShine"](), this["symbolBase"]["setScale"](1.15), this["symbolBase"]["width"] = 224, this["symbolSprite"]["node"]['x'] = 0, this["symbolSprite"]["node"]['y'] = 5);
        }, q["prototype"]["enableMask"] = function (f) {
          this["winGlowCSprite"]["fillStart"] = f ? -0.5 : 0;
        }, q["prototype"]["enableDimLight"] = function () {
          this["symbolBase"]["runAction"](cc["tintTo"](0.2, 76, 76, 76)), this["winGlowC"]["runAction"](cc["tintTo"](0.2, 76, 76, 76)), this["scatterVfx"]["runAction"](cc["tintTo"](0.2, 76, 76, 76)), this["symbolSprite"]["node"]["runAction"](cc["tintTo"](0.2, 76, 76, 76));
        }, q["prototype"]["disableDimLight"] = function (f) {
          this["symbolBase"]["stopAllActions"](), this["winGlowC"]["stopAllActions"](), this["scatterVfx"]["stopAllActions"](), this["symbolSprite"]["node"]["stopAllActions"](), f ? (this["symbolBase"]["color"] = cc["Color"]["WHITE"], this["winGlowC"]["color"] = cc["Color"]["WHITE"], this["scatterVfx"]["color"] = cc["Color"]["WHITE"], this["symbolSprite"]["node"]["color"] = cc["Color"]["WHITE"]) : (this["symbolBase"]["runAction"](cc["tintTo"](0.2, 255, 255, 255)), this["winGlowC"]["runAction"](cc["tintTo"](0.2, 255, 255, 255)), this["scatterVfx"]["runAction"](cc["tintTo"](0.2, 255, 255, 255)), this["symbolSprite"]["node"]["runAction"](cc["tintTo"](0.2, 255, 255, 255)));
        }, q["prototype"]["playWin"] = function (f, g) {
          {
            this['fi'] = g;
            var l = f === B["SLOT_SYMBOLS"]["WILD"];
            this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][f], this["symbolBaseSprite"]["spriteFrame"] = l ? this["symbolBases"][2] : this["symbolBases"][0], this["symbolBaseSprite"]["node"]["active"] = !0, this["winVfx"]["active"] = !0, this["winGlowC"]["runAction"](cc["fadeTo"](0.2, 180)), this['nS'](), l ? (this["scatterVfx"]["active"] = !0, this["symbolBase"]["setScale"](1.15), this["symbolBase"]["width"] = 224, this["winAnim"]["playAdditive"]("wild_loop_anim")) : this["scatterVfx"]["active"] = !1;
          }
        }, q["prototype"]["playGoldWin"] = function (f, g) {
          this['fi'] = g, this['eS'] = !0, this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][f], this["symbolBaseSprite"]["spriteFrame"] = this["symbolBases"][1], this["symbolBaseGoldIngot"]["active"] = !0, this["winGlowC"]["runAction"](cc["fadeTo"](0.2, 180)), this["winVfx"]["active"] = !0, this['nS'](), this["scatterVfx"]["active"] = !1;
        }, q["prototype"]["playRotate"] = function (f, g) {
          {
            this["winAnim"]["stop"]();
            var l = Z["slotHandler"]["isTurboMode"]() || Z["slotHandler"]["isFreeSpinTurboMode"]() ? Z["TURBO_MODE_SPEED_FACTOR"] : 1;
            this["winAnim"]["getAnimationState"]("symbol_rotate_fx_anim")["speed"] = l, this["winAnim"]["getAnimationState"]("ingot_rotate")["speed"] = l, this["winAnim"]["getAnimationState"]("normal_symbol_rotate")["speed"] = l, this['fi'] = g;
            var K = f === B["SLOT_SYMBOLS"]["WILD"];
            this["symbolSprite"]["node"]["active"] = !0, this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][f], this["symbolBaseSprite"]["spriteFrame"] = K ? this["symbolBases"][2] : this["symbolBases"][0], this["symbolBaseSprite"]["node"]["active"] = !0, this["winFrame"]["runAction"](cc["fadeOut"](0.1 / l)), this["winGlowC"]["runAction"](cc["fadeOut"](0.1 / l)), this["winAnim"]["playAdditive"]("symbol_rotate_fx_anim"), K ? (this["scatterVfx"]["active"] = !0, this["winAnim"]["playAdditive"]("wild_loop_anim"), this["winAnim"]["playAdditive"]("ingot_rotate")) : (this["scatterVfx"]["active"] = !1, this["winAnim"]["playAdditive"]("normal_symbol_rotate"));
          }
        }, q["prototype"]["playGoldRotate"] = function (f, g) {
          this["winAnim"]["stop"]();
          var l = Z["slotHandler"]["isTurboMode"]() || Z["slotHandler"]["isFreeSpinTurboMode"]() ? Z["TURBO_MODE_SPEED_FACTOR"] : 1;
          this['fi'] = g, this["symbolSprite"]["node"]["active"] = !0, this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][f], this["symbolBaseSprite"]["spriteFrame"] = this["symbolBases"][1], this["symbolBaseSprite"]["node"]["active"] = !0, this["winFrame"]["runAction"](cc["fadeOut"](0.1 / l)), this["winGlowC"]["runAction"](cc["fadeOut"](0.1 / l)), this["winAnim"]["getAnimationState"]("symbol_rotate_fx_anim")["speed"] = l, this["winAnim"]["getAnimationState"]("gold_symbol_rotate")["speed"] = l, this["winAnim"]["playAdditive"]("symbol_rotate_fx_anim"), this["scatterVfx"]["active"] = !1, this["winAnim"]["playAdditive"]("gold_symbol_rotate");
        }, q["prototype"]["onGoldRotate"] = function () {
          this["scatterVfx"]["active"] = !0, this["winAnim"]["playAdditive"]("wild_loop_anim"), this["symbolSprite"]["spriteFrame"] = X["symbolImageHandler"]["symbolImages"][B["SLOT_SYMBOLS"]["WILD"]];
        }, q["prototype"]["onWinHighlightEnd"] = function () {
          {
            this["winVfx"]["active"] = !1, this['oS']();
          }
        }, q["prototype"]["onAnimEnd"] = function () {
          this['eS'] || this['oS']();
        }, q["prototype"]["onGoldAnimEnd"] = function () {
          {
            this['oS']();
          }
        }, q["prototype"]["playWildAnim"] = function () {
          this["winAnim"]["playAdditive"]("wild_appear_effect_anim");
        }, q["prototype"]["replayIngotShine"] = function () {
          var f = this;
          this["scheduleOnce"](function () {
            f["winAnim"]["playAdditive"]("ingot_shine_anim");
          }, 6);
        }, q["prototype"]['nS'] = function () {
          this["node"]["active"] = !0, this["winFrame"]["runAction"](cc["fadeIn"](0.2)), this["winAnim"]["playAdditive"]("single_symbol_win_anim"), this["winAnim"]["playAdditive"]("win_frame_loop");
        }, q["prototype"]['oS'] = function () {
          this["winAnim"]["off"]("finished");
          var f = this['fi'];
          this['fi'] = void 0, f && f();
        }, q["prototype"]["unuse"] = function () {
          this["reset"]();
        }, q["prototype"]["reset"] = function () {
          this['eS'] = !1, this["unscheduleAllCallbacks"](), this["winFrame"]["stopAllActions"](), this["winGlowC"]["stopAllActions"](), this["winFrame"]["opacity"] = 0, this["winGlowC"]["opacity"] = 0, this["winAnim"]["stop"](), this["symbolBase"]['y'] = 0, this["symbolBase"]['x'] = 0, this["symbolBase"]["width"] = 189, this["symbolBase"]["height"] = 224, this["symbolBase"]["setScale"](1), this["symbolBase"]["active"] = !0, this["symbolSprite"]["node"]["active"] = !0, this["symbolSprite"]["node"]['x'] = 5, this["symbolSprite"]["node"]['y'] = 10, this["symbolSprite"]["node"]["scale"] = 1, this["symbolBaseGoldIngot"]["active"] = !1, this["symbolBaseGoldIngot"]["setPosition"](5, -72), this["symbolBase"]["color"] = cc["Color"]["WHITE"], this["winGlowC"]["color"] = cc["Color"]["WHITE"], this["scatterVfx"]["color"] = cc["Color"]["WHITE"], this["symbolSprite"]["node"]["color"] = cc["Color"]["WHITE"];
        }, __decorate([C([cc["SpriteFrame"]])], q["prototype"], "symbolBases", void 0), __decorate([C(cc["Node"])], q["prototype"], "symbolBase", void 0), __decorate([C(cc["Node"])], q["prototype"], "symbolBaseGoldIngot", void 0), __decorate([C(cc["Node"])], q["prototype"], "winGlowC", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "winGlowCSprite", void 0), __decorate([C(cc["Node"])], q["prototype"], "winFrame", void 0), __decorate([C(cc["Node"])], q["prototype"], "winGlow", void 0), __decorate([C(cc["Node"])], q["prototype"], "scatterVfx", void 0), __decorate([C(cc["Node"])], q["prototype"], "winVfx", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "symbolSprite", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "symbolBaseSprite", void 0), __decorate([C(cc["Animation"])], q["prototype"], "winAnim", void 0), __decorate([M], q);
      }(cc["Component"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = SymbolController;
