// module: BackgroundController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BackgroundController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "6a6d38oiGtCUZaz44KgwIjH", "BackgroundController")) {
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
      {
        N[N["Playing"] = 0] = "Playing", N[N["Stopped"] = 1] = "Stopped";
      }
    })(B || (B = {})), function (N) {
      N[N["Playing"] = 0] = "Playing", N[N["Stopped"] = 1] = "Stopped";
    }(X || (X = {}));
    var V = function (N) {
      {
        function q() {
          {
            var f = null !== N && N["apply"](this, arguments) || this;
            return f['q'] = void 0, f["background"] = void 0, f["backgroundNormal"] = void 0, f["backgroundBonus"] = void 0, f["bonusNode"] = void 0, f["normalNode"] = void 0, f["bonusParticleAnim"] = void 0, f["darkReel"] = void 0, f["darkReelHolder"] = void 0, f["darkReelNodes"] = [], f["darkSideNodes"] = [], f["fastSpinGlow"] = void 0, f['Y'] = void 0, f['Z'] = void 0, f['I'] = void 0, f['X'] = void 0, f;
          }
        }
        return __extends(q, N), q["prototype"]["init"] = function (f, g) {
          this['Y'] = f, this['Z'] = g;
        }, q["prototype"]["switchBackground"] = function (f) {
          switch (f) {
            case Z["TransitionState"]["FREE_SPIN"]:
            case Z["TransitionState"]["FREE_SPIN_RESPIN"]:
              this["background"]["spriteFrame"] = this["backgroundBonus"], this["bonusNode"]["active"] = !0, this["normalNode"]["active"] = !1, this['X'] !== X["Playing"] && (this["bonusParticleAnim"]["play"](), this['X'] = X["Playing"]);
              break;
            case Z["TransitionState"]["NORMAL"]:
            case Z["TransitionState"]["RESPIN"]:
              this["background"]["spriteFrame"] = this["backgroundNormal"], this['X'] !== X["Stopped"] && (this["bonusParticleAnim"]["stop"](), this['X'] = X["Stopped"]), this["bonusNode"]["active"] = !1, this["normalNode"]["active"] = !0;
          }
        }, q["prototype"]["enableFullDarkModeExcept"] = function (f) {
          this['$']();
          for (var g = this["darkReelNodes"], l = 0; l < g["length"]; l++) l === f ? (this["darkReelNodes"][l]["active"] = !1, this["darkReelNodes"][l]["runAction"](cc["fadeTo"](0.2, 0))) : (this["darkReelNodes"][l]["active"] = !0, this["darkReelNodes"][l]["runAction"](cc["fadeTo"](0.2, 150)));
          this["darkSideNodes"]["forEach"](function (K) {
            K["active"] = !0, K["stopAllActions"](), K["runAction"](cc["fadeTo"](0.2, 150));
          });
        }, q["prototype"]["enableFullDarkMode"] = function () {
          {
            this['tt'](), this['it'](!0);
          }
        }, q["prototype"]["enableDarkReel"] = function (f) {
          this['tt'](), this["darkSideNodes"][0]["active"] = !0, this["darkSideNodes"][0]["runAction"](cc["fadeTo"](0.2, 150));
          for (var g = 0; g <= f; g++) this["darkReelNodes"][g]["active"] = !0, this["darkReelNodes"][g]["runAction"](cc["fadeTo"](0.2, 150));
        }, q["prototype"]["disableDarkMode"] = function (f) {
          {
            var g = this["darkReelNodes"]["concat"](this["darkSideNodes"]);
            f ? g["forEach"](function (l) {
              l["opacity"] = 0, l["active"] = !1;
            }) : g["forEach"](function (l) {
              l["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
                l["active"] = !1;
              })));
            });
          }
        }, q["prototype"]["playFastSpinEffect"] = function () {
          {
            this['I'] !== B["Playing"] && (this['I'] = B["Playing"], this["fastSpinGlow"]["active"] = !0, this["fastSpinGlow"]["stopAllActions"](), this["fastSpinGlow"]["opacity"] = 0, this["fastSpinGlow"]["runAction"](cc["repeatForever"](cc["sequence"](cc["fadeIn"](0.2)["easing"](cc["easeIn"](2)), cc["fadeTo"](0.2, 176)["easing"](cc["easeIn"](2))))));
          }
        }, q["prototype"]["stopFastSpinEffect"] = function () {
          {
            var f = this;
            this['I'] !== B["Stopped"] && (this['I'] = B["Stopped"], this["fastSpinGlow"]["stopAllActions"](), this["fastSpinGlow"]["runAction"](cc["sequence"](cc["fadeOut"](1)["easing"](cc["easeInOut"](2)), cc["callFunc"](function () {
              f["fastSpinGlow"]["active"] = !1;
            }))));
          }
        }, q["prototype"]['tt'] = function () {
          this["darkReel"]["parent"] = this["darkReelHolder"], this["darkReel"]["setPosition"](cc['v2'](0, 0));
        }, q["prototype"]['$'] = function () {
          {
            this["darkReel"]["parent"] = this['Z'], this["darkReel"]["setPosition"](cc['v2'](0, 0));
          }
        }, q["prototype"]['it'] = function (f) {
          var g = f ? 150 : 0;
          this["darkReelNodes"]["forEach"](function (l) {
            l["active"] = f, l["stopAllActions"](), l["runAction"](cc["fadeTo"](0.2, g));
          }), this["darkSideNodes"]["forEach"](function (l) {
            l["active"] = f, l["stopAllActions"](), l["runAction"](cc["fadeTo"](0.2, g));
          });
        }, q["prototype"]['et'] = function () {
          var f = this['q'];
          this['q'] = void 0, f && f();
        }, q["prototype"]["stop"] = function () {}, q["prototype"]["destroy"] = function () {
          return this["stop"](), this["node"]["destroy"](), N["prototype"]["destroy"]["call"](this);
        }, __decorate([C(cc["Sprite"])], q["prototype"], "background", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "backgroundNormal", void 0), __decorate([C(cc["SpriteFrame"])], q["prototype"], "backgroundBonus", void 0), __decorate([C(cc["Node"])], q["prototype"], "bonusNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "normalNode", void 0), __decorate([C(cc["Animation"])], q["prototype"], "bonusParticleAnim", void 0), __decorate([C(cc["Node"])], q["prototype"], "darkReel", void 0), __decorate([C(cc["Node"])], q["prototype"], "darkReelHolder", void 0), __decorate([C([cc["Node"]])], q["prototype"], "darkReelNodes", void 0), __decorate([C([cc["Node"]])], q["prototype"], "darkSideNodes", void 0), __decorate([C(cc["Node"])], q["prototype"], "fastSpinGlow", void 0), __decorate([M], q);
      }
    }(cc["Component"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = BackgroundController;
