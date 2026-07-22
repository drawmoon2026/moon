// module: BetModifierButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BetModifierButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "076aehdcx9HQI7+9hg7FlGu", "BetModifierButton")) {
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
        {
          function q() {
            {
              var f = null !== N && N["apply"](this, arguments) || this;
              return f["isIncreaseBet"] = !1, f;
            }
          }
          return __extends(q, N), q["prototype"]["setShowSettingToastCallback"] = function (f) {
            {
              this['ut'] = f;
            }
          }, Object["defineProperty"](q["prototype"], "showSettingToast", {
            'get': function () {
              if (!this['ut']) throw Error("BetModifierButton :: showSettingToast is undefined. Please set it using setShowSettingToastCallback");
              return this['ut'];
            },
            'enumerable': !1,
            'configurable': !0
          }), q["prototype"]["setHideSettingToastCallback"] = function (f) {
            this['lt'] = f;
          }, Object["defineProperty"](q["prototype"], "hideSettingToast", {
            'get': function () {
              if (!this['lt']) throw Error("BetModifierButton :: hideSettingToast is undefined. Please set it using setHideSettingToastCallback");
              return this['lt'];
            },
            'enumerable': !1,
            'configurable': !0
          }), q["prototype"]["increaseBet"] = function (f, g, l) {
            {
              if (void 0 === g) {
                {
                  for (var O = 0; O < K["length"]; O++) if (parseFloat(f[O]) > parseFloat(l)) {
                    {
                      g = O - 1, l = f[O - 1];
                      break;
                    }
                  }
                }
              } else if (g >= K["length"] - 1) return this["showSettingToast"](shell["I18n"]['t']("SettingMenu.BiggestBet"), 2), {
                'selectedBet': g,
                'selectedBetAmount': l
              };
              if (void 0 === g) throw Error("BetModifierButton :: increaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
              return l = f[++g], g >= K["length"] - 1 ? this["showSettingToast"](shell["I18n"]['t']("SettingMenu.BiggestBet"), 2) : this["hideSettingToast"](), {
                'selectedBet': g,
                'selectedBetAmount': l
              };
            }
          }, q["prototype"]["decreaseBet"] = function (f, g, l) {
            if (void 0 === g) {
              for (var K = f["length"] - 1; K >= 0; K--) if (parseFloat(f[K]) < parseFloat(l)) {
                g = K + 1, l = f[K + 1];
                break;
              }
            } else if (g <= 0) return this["showSettingToast"](shell["I18n"]['t']("SettingMenu.SmallestBet"), 2), {
              'selectedBet': g,
              'selectedBetAmount': l
            };
            if (void 0 === g) throw Error("BetModifierButton :: decreaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
            return l = f[--g], g <= 0 ? this["showSettingToast"](shell["I18n"]['t']("SettingMenu.SmallestBet"), 2) : this["hideSettingToast"](), {
              'selectedBet': g,
              'selectedBetAmount': l
            };
          }, q["prototype"]["updateBetModifierColor"] = function (f, g) {
            this["isIncreaseBet"] ? this["isReachLimit"] = !!(g && f >= g) : this["isReachLimit"] = f <= 0, this["interactableButtonColor"](this["isInteractable"]);
          }, q["prototype"]["changeButtonPressedColor"] = function (f) {
            if (this["buttonTheme"]) {
              {
                var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                  l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".pressed");
                if (this["isReachLimit"]) {
                  {
                    var K = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".disabled");
                    Z["setNodeColorWithOpacity"](this["iconSprite"], K);
                  }
                } else Z["setNodeColorWithOpacity"](this["iconSprite"], f ? l : g);
              }
            }
          }, q["prototype"]["interactableButtonColor"] = function (f) {
            if (this["buttonTheme"]) {
              var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".disabled");
              this["isReachLimit"] ? Z["setNodeColorWithOpacity"](this["iconSprite"], l) : Z["setNodeColorWithOpacity"](this["iconSprite"], f ? g : l);
            }
          }, q["prototype"]["maxBet"] = function (f) {
            var g = f["length"] - 1,
              l = f[g];
            var K = {};
            K["selectedBet"] = g;
            K["selectedBetAmount"] = l;
            return this["showSettingToast"](shell["I18n"]['t']("SettingMenu.BiggestBet"), 2), K;
          }, q["prototype"]["buttonActivate"] = function (f) {
            f ? (this["node"]["active"] = !0, this["node"]["parent"] && (this["node"]["parent"]["active"] = !0), Z["deferCallback"](this)(this["enableTouchInteraction"])) : (this["disableTouchInteraction"](), this["node"]["active"] = !1, this["node"]["parent"] && (this["node"]["parent"]["active"] = !1));
          }, __decorate([C(cc["Boolean"])], q["prototype"], "isIncreaseBet", void 0), __decorate([M], q);
        }
      }(B["default"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = BetModifierButton;
