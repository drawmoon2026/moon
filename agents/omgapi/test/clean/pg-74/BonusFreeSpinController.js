// module: BonusFreeSpinController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BonusFreeSpinController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "e89a856I6VFn7UEjqSF0bbR", "BonusFreeSpinController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("AudioManager"),
      X = F("AudioConstant"),
      Z = cc["_decorator"],
      T = Z["ccclass"],
      M = Z["property"],
      C = function (V) {
        function N() {
          {
            var q = null !== V && V["apply"](this, arguments) || this;
            return q["animationAnim"] = void 0, q["greySplash"] = void 0, q["freeSpinText"] = void 0, q["glow"] = void 0, q["freeSpinTextSprite"] = void 0, q["numberDisplayNode"] = void 0, q["particles"] = [], q['ci'] = void 0, q['hi'] = void 0, q;
          }
        }
        return __extends(N, V), Object["defineProperty"](N["prototype"], "numberDisplayController", {
          'get': function () {
            {
              return this['ci'] || (this['ci'] = this["numberDisplayNode"]["getComponent"]("NumberDisplayController")), this['ci'];
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), N["prototype"]["init"] = function (q) {
          {
            this["freeSpinTextSprite"]["spriteFrame"] = q;
          }
        }, N["prototype"]["play"] = function (q, f) {
          var g = this;
          B["playAudio"](X["GENERAL_AUDIO"]["freespinWon"]["key"]), B["playVocal"](X["VOX"]["maJiangHuLe"]["key"]), this["node"]["opacity"] = 255, this["greySplash"]["runAction"](cc["fadeTo"](0.5, 150)["easing"](cc["easeIn"](2))), this["numberDisplayController"]["clear"](), this["numberDisplayController"]["displayNumber"](q, !1), this['hi'] = f, this["scheduleOnce"](function () {
            g["particles"]["forEach"](function (l) {
              l["resetSystem"]();
            });
          }, 0.2), this["animationAnim"]["play"](), this["animationAnim"]['on']("finished", this['ri'], this);
        }, N["prototype"]["stop"] = function () {
          this["node"]["runAction"](cc["sequence"](cc["fadeOut"](0.2)["easing"](cc["easeIn"](2)), cc["callFunc"](this['Zt'], this)));
        }, N["prototype"]['ri'] = function () {
          var q = this['hi'];
          this['hi'] = void 0, q && q();
        }, N["prototype"]['Zt'] = function () {
          this["freeSpinText"]["scale"] = 0, this["greySplash"]["opacity"] = 0, this["glow"]["opacity"] = 0;
        }, N["prototype"]["destroy"] = function () {
          {
            return this['Zt'](), this["node"]["destroy"](), V["prototype"]["destroy"]["call"](this);
          }
        }, __decorate([M(cc["Animation"])], N["prototype"], "animationAnim", void 0), __decorate([M(cc["Node"])], N["prototype"], "greySplash", void 0), __decorate([M(cc["Node"])], N["prototype"], "freeSpinText", void 0), __decorate([M(cc["Node"])], N["prototype"], "glow", void 0), __decorate([M(cc["Sprite"])], N["prototype"], "freeSpinTextSprite", void 0), __decorate([M(cc["Node"])], N["prototype"], "numberDisplayNode", void 0), __decorate([M([cc["ParticleSystem"]])], N["prototype"], "particles", void 0), __decorate([T], N);
      }(cc["Component"]);
    I["default"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = BonusFreeSpinController;
