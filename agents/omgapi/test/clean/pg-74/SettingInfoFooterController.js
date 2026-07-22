// module: SettingInfoFooterController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SettingInfoFooterController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "06e65rpYzVNHbDR0e2vljl/", "SettingInfoFooterController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["SettingInfoFooterController"] = I["ICON_FOOTER_TYPE"] = I["WALLET_FOOTER_TYPE"] = void 0;
    var B,
      X = F("Utils"),
      Z = F("UIAppearanceHelper"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"];
    (function (N) {
      N[N["CASH"] = 1] = "CASH", N[N["FREE_GAME"] = 2] = "FREE_GAME", N[N["BONUS"] = 3] = "BONUS", N[N["POINT"] = 4] = "POINT";
    })(B = I["WALLET_FOOTER_TYPE"] || (I["WALLET_FOOTER_TYPE"] = {})), function (N) {
      {
        N[N["SPIN"] = 2] = "SPIN", N[N["ROLL_OVER"] = 3] = "ROLL_OVER";
      }
    }(I["ICON_FOOTER_TYPE"] || (I["ICON_FOOTER_TYPE"] = {}));
    var V = function (N) {
      {
        function q() {
          var f = null !== N && N["apply"](this, arguments) || this;
          return f["background"] = void 0, f["balanceNode"] = void 0, f["customLeftFooterTitle"] = void 0, f["balanceValueNode"] = void 0, f["rightSlotNode"] = void 0, f["winValueNode"] = void 0, f["winHolderNode"] = void 0, f["winCashIconNode"] = void 0, f["winButton"] = void 0, f["totalWinNode"] = void 0, f["totalWinValueNode"] = void 0, f["freeGamesNode"] = void 0, f["specialIcon"] = void 0, f["freeSpinValue"] = void 0, f["walletButton"] = void 0, f["walletButtonSensor"] = void 0, f["walletNavigateIcon"] = void 0, f["walletNotificationIcon"] = void 0, f["betAmountLabel"] = void 0, f["betOptionsButton"] = void 0, f["betOptionsIcon"] = void 0, f["walletFooterTypeSFList"] = [], f["rewardFooterTypeSFList"] = [], f["maxBetButtonHolder"] = void 0, f["languageSensitiveLayoutList"] = [], f['Wd'] = !1, f['Jd'] = !1, f["currentBalance"] = 0, f["targetBalance"] = 0, f["winBalance"] = 0, f["walletNotify"] = !1, f["lockWalletButton"] = !1, f["lockBetOptionsButton"] = !1, f['Vd'] = 0, f['zd'] = !1, f;
        }
        return __extends(q, N), q["prototype"]["updateBetAmount"] = function (f, g) {
          var l = this;
          if (void 0 === g && (g = 0), this['Kd']) {
            this["betAmountLabel"]["string"] = this['qd'] = this['Kd'], this["betAmountLabel"]["node"]["stopAllActions"]();
            var K = 0.5 * g + 1.2;
            this["betAmountLabel"]["node"]["runAction"](cc["sequence"](cc["scaleTo"](0.1, K)["easing"](cc["easeOut"](0.2)), cc["callFunc"](function () {
              l["betAmountLabel"]["string"] = f;
            }), cc["scaleTo"](0.2, 0.9), cc["scaleTo"](0.1, 1.05), cc["scaleTo"](0.1, 0.95), cc["scaleTo"](0.1, 1))), this['Kd'] = f;
          } else this["betAmountLabel"]["string"] = this['qd'] = this['Kd'] = f;
        }, Object["defineProperty"](q["prototype"], "currentBetAmount", {
          'get': function () {
            {
              if (void 0 === this['qd'] || 0 === this['qd']["length"]) throw Error("SettingInfoFooterController :: currentBetAmount : Please set legit bet amount by calling updateBetAmount first!");
              return parseFloat(this['qd']);
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), q["prototype"]["setOpenBetOptionsMenuCallback"] = function (f) {
          this['Qd'] = f;
        }, q["prototype"]["openBetOptionsMenu"] = function () {
          {
            this['Qd'] && this['Qd']();
          }
        }, q["prototype"]["setBetOptionsButtonLock"] = function (f) {
          void 0 === f && (f = !1), this["lockBetOptionsButton"] = f;
        }, q["prototype"]["interactableBetOptionsButton"] = function (f) {
          if (this["betOptionsButton"]["interactable"] = f, f) {
            {
              if (void 0 === this['Yd']) throw Error("SettingInfoFooter :: interactableBetOptionsButton : Please call boot() to setup default label color first!");
              this["betAmountLabel"]["node"]["color"] = this['Yd'];
            }
          } else this["betAmountLabel"]["node"]["color"] = cc["Color"]["WHITE"];
        }, q["prototype"]["setOpenWinMenuCallback"] = function (f) {
          this['Zd'] = f;
        }, q["prototype"]["openWinMenu"] = function () {
          this['Zd'] && this['Zd']();
        }, q["prototype"]["interactableWinButton"] = function (f) {
          if (this["winButton"]["interactable"] = f, f) {
            if (void 0 === this['Yd']) throw Error("SettingInfoFooter :: interactableWinButton : Please call boot() to setup default label color first!");
            this["winValueNode"]["color"] = this["freeSpinValue"]["node"]["color"] = this['Yd'];
          } else this["winValueNode"]["color"] = this["freeSpinValue"]["node"]["color"] = cc["Color"]["WHITE"];
        }, q["prototype"]["setWinIcon"] = function (f) {
          this["winCashIconNode"]["spriteFrame"] = f;
        }, q["prototype"]["setWalletNavigateIcon"] = function (f) {
          switch (f) {
            case B["CASH"]:
              this["walletNavigateIcon"]["getComponent"](cc["Sprite"])["spriteFrame"] = this["walletFooterTypeSFList"][f - 1];
              break;
            case B["FREE_GAME"]:
            case B["BONUS"]:
              this["walletNavigateIcon"]["getComponent"](cc["Sprite"])["spriteFrame"] = this["walletFooterTypeSFList"][f - 1], this["specialIcon"]["spriteFrame"] = this["rewardFooterTypeSFList"][f - 2];
              break;
            default:
              this["walletNavigateIcon"]["getComponent"](cc["Sprite"])["spriteFrame"] = void 0;
          }
        }, q["prototype"]["boot"] = function () {
          this['Xd'] = this["balanceValueNode"]["getComponent"]("NumberLabelControllerLite"), this['$d'] = this["winValueNode"]["getComponent"]("NumberLabelControllerLite"), this['tv'] = this["totalWinValueNode"]["getComponent"]("NumberLabelControllerLite"), this["betOptionsButton"]["normalColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["betOptionsButton"]["pressedColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.pressed"), this["betOptionsButton"]["hoverColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["betOptionsButton"]["disabledColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["walletButton"]["normalColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["walletButton"]["pressedColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.pressed"), this["walletButton"]["hoverColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["walletButton"]["disabledColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["winButton"]["normalColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["winButton"]["pressedColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.pressed"), this["winButton"]["hoverColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this["winButton"]["disabledColor"] = Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal"), this['Yd'] = this["betAmountLabel"]["node"]["color"], this['Xd']["skip"](0), this['$d']["skip"](0), this['tv']["skip"](0);
        }, q["prototype"]["changeWalletIconColor"] = function (f) {
          this["walletNavigateIcon"]["opacity"] = f ? Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.pressed")['a'] : Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal")['a'];
        }, q["prototype"]["showBackground"] = function (f, g) {
          void 0 === g && (g = 225), this["background"]["active"] = f, this["background"]["opacity"] = g;
        }, q["prototype"]["setOpenWalletMenuCallback"] = function (f) {
          this['iv'] = f;
        }, q["prototype"]["setWalletButtonLock"] = function (f) {
          void 0 === f && (f = !1), this["lockWalletButton"] = f;
        }, q["prototype"]["interactableWalletButton"] = function (f) {
          if (this["walletButton"]["interactable"] = f, f) {
            {
              if (void 0 === this['Yd']) throw Error("SettingInfoFooter :: interactableWalletButton : Please call boot() to setup default label color first!");
              this["balanceValueNode"]["color"] = this['Yd'];
            }
          } else this["balanceValueNode"]["color"] = cc["Color"]["WHITE"];
        }, q["prototype"]["changeWalletButtonColor"] = function (f) {
          this["walletNavigateIcon"]["opacity"] = f ? Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.pressed")['a'] : Z["uiAppearanceHelper"]['v']("setting.color_button_transition_a.normal")['a'];
        }, q["prototype"]["showBalanceNode"] = function (f) {
          {
            this["balanceNode"]["active"] = f;
          }
        }, q["prototype"]["showTotalWinNode"] = function (f) {
          this["totalWinNode"]["active"] = f;
        }, q["prototype"]["showFreeGamesNode"] = function (f) {
          {
            this["freeGamesNode"]["active"] = f;
          }
        }, q["prototype"]["activateWalletNotify"] = function (f) {
          this["walletNotify"] = f, !0 === f ? (this["walletNotificationIcon"]["active"] = f, this["walletNotificationIcon"]["stopAllActions"](), this["walletNotificationIcon"]["runAction"](cc["repeatForever"](cc["sequence"](cc["scaleTo"](0.5, 1.2), cc["scaleTo"](0.5, 1))))) : (this["walletNotificationIcon"]["stopAllActions"](), this["walletNotificationIcon"]["active"] = f);
        }, q["prototype"]["openWalletMenu"] = function () {
          this['iv'] && this['iv']();
        }, q["prototype"]["changeHolder"] = function (f) {
          this['sv'] || (this['sv'] = f), this["node"]["removeFromParent"](!1), f["addChild"](this["node"]);
        }, q["prototype"]["returnHolder"] = function () {
          if (!this['sv']) throw Error("SettingInfoFooter :: returnHolder : Do not have parent to return");
          this["node"]["removeFromParent"](!1), this['sv']["addChild"](this["node"]);
        }, q["prototype"]["showCustomInfoFooter"] = function () {
          this['Wd'] = !0, this["freeGamesNode"]["active"] = !0, this['Wd'] && this['ev'](!0);
        }, q["prototype"]["hideCustomInfoFooter"] = function () {
          this['Wd'] = !1, this["freeGamesNode"]["active"] = !1, this["winHolderNode"]["active"] = !0;
          var f = this['nv'];
          this['nv'] = void 0, f && f();
          var g = this['ov'];
          this['ov'] = void 0, g && g(), this["rightSlotNode"]["stopAllActions"](), this["rightSlotNode"]["scale"] = 1;
        }, q["prototype"]["isCustomInfoFooter"] = function () {
          {
            return this['Wd'];
          }
        }, q["prototype"]["updateBalance"] = function (f, g, l) {
          if (void 0 === this['Xd']) throw Error("SettingInfoFooter :: updateBalance : Please call boot() to setup balance label controller first!");
          f = this["currentBalance"] ? this["currentBalance"] : this["currentBalance"] = X["isNumeric"](g) ? g : 0, X["isNumeric"](g) ? this["targetBalance"] = g : g = this["targetBalance"], g <= f && (l = !1), l ? this['Xd']["play"](f, g) : this['Xd']["skip"](g), this["currentBalance"] = this["targetBalance"];
        }, Object["defineProperty"](q["prototype"], "currentWinAmount", {
          'get': function () {
            {
              return this['Vd'];
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), q["prototype"]["updateWinAmount"] = function (f, g, l) {
          if (void 0 === l && (l = !0), void 0 === this['$d']) throw Error("SettingInfoFooter :: updateWinAmount : Please call boot() to setup win label controller first!");
          var K = this['Vd'];
          X["isNumeric"](f) ? this["winBalance"] = f : f = this["winBalance"], f <= K && (g = !1), g ? this['$d']["play"](K, f) : this['$d']["skip"](f), this['Wd'] && !this['Jd'] && this['ev'](!1, l), this['Vd'] = this["winBalance"];
        }, q["prototype"]["updateTotalWinAmount"] = function (f, g) {
          if (void 0 === this['tv']) throw Error("SettingInfoFooter :: updateTotalWinAmount : Please call boot() to setup total win label controller first!");
          X["isNumeric"](f) ? this["currentBalance"] = f : f = this["currentBalance"], g ? this['tv']["play"](0, f) : this['tv']["skip"](f);
        }, q["prototype"]["setCustomMiddleInfoFooter"] = function (f, g) {
          void 0 === g && (g = !0), this["freeSpinValue"]["string"] = f, this['Jd'] = !g, this['Wd'] && this['ev'](!0, g);
        }, q["prototype"]["updateLayout"] = function (f) {
          this["languageSensitiveLayoutList"]["forEach"](function (g) {
            return g["horizontalDirection"] = f ? cc["Layout"]["HorizontalDirection"]["RIGHT_TO_LEFT"] : cc["Layout"]["HorizontalDirection"]["LEFT_TO_RIGHT"];
          });
        }, q["prototype"]['ev'] = function (f, g) {
          void 0 === g && (g = !0);
          var l = 0;
          f ? (this["winHolderNode"]["active"] = !1, this["freeGamesNode"]["active"] = !0, l = 3, this['zd'] = !0) : (this["winHolderNode"]["active"] = !0, this["freeGamesNode"]["active"] = !1, l = 5, this['zd'] = !1), this['cv'](l, g);
        }, q["prototype"]['cv'] = function (f, g) {
          void 0 === g && (g = !0);
          var l = this['nv'];
          this['nv'] = void 0, l && l();
          var K = this['ov'];
          this['ov'] = void 0, K && K(), this["rightSlotNode"]["stopAllActions"](), this["rightSlotNode"]["scale"] = 1, g && (this['nv'] = X["delayCallback"](f)(this['hv']["bind"](this)));
        }, q["prototype"]['hv'] = function () {
          var f = this;
          this['nv'] = void 0;
          var g = function () {
            f['zd'] ? (f["winHolderNode"]["active"] = !0, f["freeGamesNode"]["active"] = !1, f['zd'] = !1) : (f["winHolderNode"]["active"] = !1, f["freeGamesNode"]["active"] = !0, f['zd'] = !0);
          };
          this['ov'] = X["sequenceCallback"](function (l) {
            f["rightSlotNode"]["runAction"](cc["sequence"](cc["scaleTo"](0.1, 1, 0), cc["callFunc"](g), cc["scaleTo"](0.1, 1, 1), cc["callFunc"](function () {
              {
                l();
              }
            })));
          })(function () {
            var l;
            l = f['zd'] ? 3 : 5, f['ov'] = void 0, f['cv'](l);
          });
        }, __decorate([C(cc["Node"])], q["prototype"], "background", void 0), __decorate([C(cc["Node"])], q["prototype"], "balanceNode", void 0), __decorate([C(cc["Label"])], q["prototype"], "customLeftFooterTitle", void 0), __decorate([C(cc["Node"])], q["prototype"], "balanceValueNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "rightSlotNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "winValueNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "winHolderNode", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "winCashIconNode", void 0), __decorate([C(cc["Button"])], q["prototype"], "winButton", void 0), __decorate([C(cc["Node"])], q["prototype"], "totalWinNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "totalWinValueNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "freeGamesNode", void 0), __decorate([C(cc["Sprite"])], q["prototype"], "specialIcon", void 0), __decorate([C(cc["Label"])], q["prototype"], "freeSpinValue", void 0), __decorate([C(cc["Button"])], q["prototype"], "walletButton", void 0), __decorate([C(cc["Node"])], q["prototype"], "walletButtonSensor", void 0), __decorate([C(cc["Node"])], q["prototype"], "walletNavigateIcon", void 0), __decorate([C(cc["Node"])], q["prototype"], "walletNotificationIcon", void 0), __decorate([C(cc["Label"])], q["prototype"], "betAmountLabel", void 0), __decorate([C(cc["Button"])], q["prototype"], "betOptionsButton", void 0), __decorate([C(cc["Node"])], q["prototype"], "betOptionsIcon", void 0), __decorate([C([cc["SpriteFrame"]])], q["prototype"], "walletFooterTypeSFList", void 0), __decorate([C([cc["SpriteFrame"]])], q["prototype"], "rewardFooterTypeSFList", void 0), __decorate([C(cc["Node"])], q["prototype"], "maxBetButtonHolder", void 0), __decorate([C([cc["Layout"]])], q["prototype"], "languageSensitiveLayoutList", void 0), __decorate([M], q);
      }
    }(cc["Component"]);
    I["SettingInfoFooterController"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = SettingInfoFooterController;
