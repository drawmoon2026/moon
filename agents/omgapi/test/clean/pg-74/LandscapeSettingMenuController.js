// module: LandscapeSettingMenuController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function LandscapeSettingMenuController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "0a93fcJrXdI5b2EdfUH4UAj", "LandscapeSettingMenuController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["LandscapeSettingMenuController"] = void 0;
    var B = F("SettingMenuController"),
      X = F("CanvasResizeBroadcaster"),
      Z = F("UIAppearanceHelper"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"],
      V = function (N) {
        {
          function q() {
            var f = null !== N && N["apply"](this, arguments) || this;
            return f["landscapeSoundButtonHolder"] = void 0, f["moreMenuLayoutNode"] = void 0, f["moreMenuBGNode"] = void 0, f['_c'] = void 0, f;
          }
          return __extends(q, N), q["prototype"]["onLoad"] = function () {
            this['mc'](), this["moreMenuLayoutNode"]['on']("size-changed", this['mc']["bind"](this)), this['_c'] = this["moreMenuLayerNode"]["position"], this["settingTurboSprite"]["node"]["color"] = Z["uiAppearanceHelper"]['v']("setting.theme_color"), this["defaultMenuLayerNode"]['y'] = 0, this["settingToast"]["opacity"] = 0, this["featureBuyToast"]["opacity"] = 0, this["featureBuyToast"]["active"] = !1, this["moreMenuLayerNode"]['y'] = -(this["moreMenuLayerNode"]["height"] + this['bc']()), this["reminderBoard"]["active"] = !1, this["reminderBoard"]["opacity"] = 1, this["settingMenuUIBlock"]["active"] = !1, this["subControllerHolder"]["height"] = this['pc'] = cc["view"]["getVisibleSize"]()["height"], this['Sc'] = X["default"]["subscribe"](this['Ti']["bind"](this));
          }, q["prototype"]["showMoreMenuLayer"] = function () {
            {
              var f = this;
              if (!this['Cc']) {
                this['Cc'] = !0, this['Mc'] = !0, this['yc'](), this["moreMenuLayerNode"]["active"] = !0, this["moreMenuLayerNode"]["stopAllActions"](), this["moreMenuLayerNode"]["runAction"](cc["sequence"](cc["spawn"](cc["moveTo"](0.2, this['_c']['x'], this['_c']['y'])["easing"](cc["easeQuadraticActionOut"]()), cc["fadeIn"](0.2)["easing"](cc["easeQuadraticActionOut"]())), cc["callFunc"](function () {
                  {
                    f['Cc'] = !1, f["onMenuEndChanged"] && f["onMenuEndChanged"]();
                  }
                })));
                var g = this["onMenuStartChanged"];
                g && g(!0, !0);
              }
            }
          }, q["prototype"]["hideMoreMenuLayer"] = function () {
            var f = this;
            if (!this['Cc']) {
              this['Cc'] = !0, this['Mc'] = !0, this['yc'](), this["moreMenuLayerNode"]["stopAllActions"](), this["moreMenuLayerNode"]["runAction"](cc["sequence"](cc["spawn"](cc["moveTo"](0.2, this['_c']['x'], -this["moreMenuLayerNode"]["height"])["easing"](cc["easeQuadraticActionOut"]()), cc["fadeOut"](0.2)["easing"](cc["easeQuadraticActionOut"]())), cc["callFunc"](function () {
                f['Cc'] = !1, f["moreMenuLayerNode"]["active"] = !1, f["onMenuEndChanged"] && f["onMenuEndChanged"]();
              }))), !1 === this["moreMenuLayerNode"]["active"] && (this['Cc'] = !1);
              var g = this["onMenuStartChanged"];
              g && g(!1, !0);
            }
          }, q["prototype"]['mc'] = function () {
            this["moreMenuBGNode"]["width"] = this["moreMenuLayoutNode"]["width"], this["moreMenuBGNode"]["height"] = this["moreMenuLayoutNode"]["height"];
          }, __decorate([C(cc["Node"])], q["prototype"], "landscapeSoundButtonHolder", void 0), __decorate([C(cc["Node"])], q["prototype"], "moreMenuLayoutNode", void 0), __decorate([C(cc["Node"])], q["prototype"], "moreMenuBGNode", void 0), __decorate([M], q);
        }
      }(B["SettingMenuController"]);
    I["LandscapeSettingMenuController"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = LandscapeSettingMenuController;
