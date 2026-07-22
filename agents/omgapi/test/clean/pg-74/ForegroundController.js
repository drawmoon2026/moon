// module: ForegroundController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function ForegroundController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "9d8f03l/alMI4Ngb2GmjHq+", "ForegroundController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B,
      X,
      Z = F("GameConstant"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"];
    (function (N) {
      N[N["Playing"] = 0] = "Playing", N[N["Stopped"] = 1] = "Stopped";
    })(B || (B = {})), function (N) {
      N[N["Playing"] = 0] = "Playing", N[N["Stopped"] = 1] = "Stopped";
    }(X || (X = {}));
    var V = function (N) {
      {
        function q() {
          var f = null !== N && N["apply"](this, arguments) || this;
          return f["bonusNode"] = void 0, f["topA"] = void 0, f["topB"] = void 0, f["topC"] = void 0, f["bottom"] = void 0, f["topNormalA"] = void 0, f["topNormalB"] = void 0, f["topNormalC"] = void 0, f["topBonusA"] = void 0, f["topBonusB"] = void 0, f["topBonusC"] = void 0, f["bottomNormal"] = void 0, f["bottomBonus"] = void 0, f["bonusParticleAnim"] = void 0, f['I'] = void 0, f['X'] = void 0, f;
        }
        return __extends(q, N), q["prototype"]["switchBackground"] = function (f) {
          switch (f) {
            case Z["TransitionState"]["FREE_SPIN"]:
            case Z["TransitionState"]["FREE_SPIN_RESPIN"]:
              this["topA"]["spriteFrame"] = this["topBonusA"], this["topB"]["spriteFrame"] = this["topBonusB"], this["topC"]["spriteFrame"] = this["topBonusC"], this["bottom"]["spriteFrame"] = this["bottomBonus"], this["bonusNode"]["active"] = !0, this['X'] !== X["Playing"] && (this["bonusParticleAnim"]["play"](), this['X'] = X["Playing"]);
              break;
            case Z["TransitionState"]["NORMAL"]:
            case Z["TransitionState"]["RESPIN"]:
              this["topA"]["spriteFrame"] = this["topNormalA"], this["topB"]["spriteFrame"] = this["topNormalB"], this["topC"]["spriteFrame"] = this["topNormalC"], this["bottom"]["spriteFrame"] = this["bottomNormal"], this['X'] !== X["Stopped"] && (this["bonusParticleAnim"]["stop"](), this['X'] = X["Stopped"]), this["bonusNode"]["active"] = !1;
          }
        }, q["prototype"]["playContinueWinEffect"] = function () {
          this['I'] !== B["Playing"] && (this['I'] = B["Playing"]);
        }, q["prototype"]["stopContinueWinEffect"] = function () {
          this['I'] !== B["Stopped"] && (this['I'] = B["Stopped"]);
        }, __decorate([C(cc["Node"])], q["prototype"], "bonusNode", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "topA", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "topB", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "topC", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "bottom", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topNormalA", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topNormalB", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topNormalC", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topBonusA", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topBonusB", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "topBonusC", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "bottomNormal", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "bottomBonus", void 0), __decorate([C(cc["Animation"])], q["prototype"], "bonusParticleAnim", void 0), __decorate([M], q);
      }
    }(cc["Component"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = ForegroundController;
