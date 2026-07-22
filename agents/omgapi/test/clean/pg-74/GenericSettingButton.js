// module: GenericSettingButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function GenericSettingButton(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "aeaa7CV0CtEMo2Sab7CGMw1", "GenericSettingButton")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("ButtonTheme"),
      X = F("UIAppearanceHelper"),
      Z = F("Utils"),
      T = cc["_decorator"],
      M = T["ccclass"],
      C = T["property"],
      V = function (N) {
        function q() {
          var f = null !== N && N["apply"](this, arguments) || this;
          return f["iconSprite"] = void 0, f["collider"] = void 0, f["buttonTheme"] = void 0, f["circleCollider"] = void 0, f['Js'] = !0, f['Vs'] = cc['v2'](), f['zs'] = cc['v2'](), f['Ks'] = !1, f['qs'] = !1, f['Qs'] = !1, f['Ys'] = void 0, f["willHideOnceClick"] = !0, f;
        }
        return __extends(q, N), q["prototype"]["onLoad"] = function () {
          {
            var f, g;
            if ("land" === shell["environment"]["getOrientationMode"]() && (null === (f = this["circleCollider"]) || void 0 === f || (f["getComponent"](cc["Sprite"])["spriteFrame"] = void 0), this["circleCollider"] = void 0), this["enableTouchInteraction"](), null === (g = this["circleCollider"]) || void 0 === g || (g["opacity"] = 0), this["buttonTheme"]) {
              var l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal");
              Z["setNodeColorWithOpacity"](this["iconSprite"], l);
            }
            this['Ys'] = this["iconSprite"]["getComponent"](cc["Sprite"])["spriteFrame"];
          }
        }, q["prototype"]["setIconSprite"] = function (f) {
          this["iconSprite"]["getComponent"](cc["Sprite"])["spriteFrame"] = f;
        }, q["prototype"]["destroy"] = function () {
          return this["disableTouchInteraction"](), N["prototype"]["destroy"]["call"](this);
        }, q["prototype"]["onClick"] = function () {}, q["prototype"]["buttonActivate"] = function (f) {
          f ? (this["node"]["active"] = !0, Z["deferCallback"](this)(this["enableTouchInteraction"])) : (this["disableTouchInteraction"](), this["node"]["active"] = !1);
        }, Object["defineProperty"](q["prototype"], "isInteractable", {
          'get': function () {
            return this['Js'];
          },
          'set': function (f) {
            {
              this['Js'] = f, this["interactableButtonColor"](f), f ? this["enableTouchInteraction"]() : (this["disableTouchInteraction"](), this['Qs'] = !1);
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), q["prototype"]['Zs'] = function (f) {
          if (this['Js']) {
            this['Qs'] = !0, this['zs'] = this['Vs'] = f["touch"]["getLocation"]();
            var g = this['Xs'](f);
            this['Ks'] = !g, this['$s'](g);
          } else f["stopPropagation"]();
        }, q["prototype"]['qi'] = function (f) {
          {
            var g, l;
            this['Qs'] && (this['Js'] ? (this['zs'] = f["touch"]["getLocation"](), this["circleCollider"] && (this['Ks'] || (this['zs'] = f["touch"]["getLocation"](), g = cc['v2'](0, this['Vs']['y']), l = cc['v2'](0, this['zs']['y']), g["sub"](l)["mag"]() > 60 && (this['$s'](!1), this['Ks'] = !0), f["stopPropagation"]()))) : f["stopPropagation"]());
          }
        }, q["prototype"]['te'] = function (f) {
          {
            this['Qs'] && (this['Js'] ? this['Ks'] || (f["stopPropagation"](), this['$s'](!1), this["onClick"](), this["willHideOnceClick"] && this['ie']()) : f["stopPropagation"]());
          }
        }, q["prototype"]['se'] = function (f) {
          this['Qs'] && (this['Js'] ? this['Ks'] || (f["stopPropagation"](), this['$s'](!1)) : f["stopPropagation"]());
        }, q["prototype"]["changeButtonColor"] = function (f) {
          this["changeButtonPressedColor"](f);
        }, q["prototype"]['$s'] = function (f) {
          {
            this['Ks'] || this["changeButtonPressedColor"](f);
          }
        }, q["prototype"]["changeButtonPressedColor"] = function (f) {
          {
            if (this["buttonTheme"]) {
              var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".pressed");
              Z["setNodeColorWithOpacity"](this["iconSprite"], f ? l : g);
            }
          }
        }, q["prototype"]["interactableButtonColor"] = function (f) {
          if (this["buttonTheme"]) {
            {
              var g = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".normal"),
                l = X["uiAppearanceHelper"]['v'](this["buttonTheme"]["domainKey"] + '.' + this["buttonTheme"]["colorKey"] + ".disabled");
              Z["setNodeColorWithOpacity"](this["iconSprite"], f ? g : l);
            }
          }
        }, q["prototype"]['Xs'] = function (f) {
          var g = this["circleCollider"];
          if (!g) return !0;
          var l = f["touch"] ? f["touch"]["getLocation"]() : f["getLocation"](),
            K = g["convertToNodeSpaceAR"](l),
            O = g["width"] / 2;
          return K['x'] * K['x'] + K['y'] * K['y'] <= O * O;
        }, q["prototype"]['ee'] = function (f) {
          this['Ys'] && this["circleCollider"] && (this['Xs'](f) ? this["circleCollider"]["opacity"] = 255 : this["circleCollider"]["opacity"] = 0);
        }, q["prototype"]['ie'] = function () {
          var f;
          this['Ys'] && this["circleCollider"] && (this['Ks'] = !1, null === (f = this["circleCollider"]) || void 0 === f || (f["opacity"] = 0));
        }, q["prototype"]["enableTouchInteraction"] = function () {
          if (!this['qs']) {
            this['qs'] = !0;
            var f = this["circleCollider"] ? this["circleCollider"] : this["collider"];
            f['on'](cc["Node"]["EventType"]["TOUCH_START"], this['Zs'], this), f['on'](cc["Node"]["EventType"]["TOUCH_MOVE"], this['qi'], this), f['on'](cc["Node"]["EventType"]["TOUCH_END"], this['te'], this), f['on'](cc["Node"]["EventType"]["TOUCH_CANCEL"], this['se'], this), this["circleCollider"] && (f['on'](cc["Node"]["EventType"]["MOUSE_ENTER"], this['ee'], this), f['on'](cc["Node"]["EventType"]["MOUSE_MOVE"], this['ee'], this), f['on'](cc["Node"]["EventType"]["MOUSE_LEAVE"], this['ie'], this));
          }
        }, q["prototype"]["disableTouchInteraction"] = function () {
          if (this['qs']) {
            this['qs'] = !1;
            var f = this["circleCollider"] ? this["circleCollider"] : this["collider"];
            f["off"](cc["Node"]["EventType"]["TOUCH_START"], this['Zs'], this), f["off"](cc["Node"]["EventType"]["TOUCH_MOVE"], this['qi'], this), f["off"](cc["Node"]["EventType"]["TOUCH_END"], this['te'], this), f["off"](cc["Node"]["EventType"]["TOUCH_CANCEL"], this['se'], this), this["circleCollider"] && (f["off"](cc["Node"]["EventType"]["MOUSE_ENTER"], this['ee'], this), f["off"](cc["Node"]["EventType"]["MOUSE_MOVE"], this['ee'], this), f["off"](cc["Node"]["EventType"]["MOUSE_LEAVE"], this['ie'], this), this["circleCollider"]["opacity"] = 0);
          }
        }, __decorate([C(cc["Node"])], q["prototype"], "iconSprite", void 0), __decorate([C(cc["Node"])], q["prototype"], "collider", void 0), __decorate([C(B)], q["prototype"], "buttonTheme", void 0), __decorate([C(cc["Node"])], q["prototype"], "circleCollider", void 0), __decorate([M], q);
      }(cc["Component"]);
    I["default"] = V, cc["_RF"]["pop"]();
  }
}
module.exports = GenericSettingButton;
