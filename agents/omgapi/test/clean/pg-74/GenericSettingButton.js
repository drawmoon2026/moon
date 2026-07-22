// module: GenericSettingButton
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function GenericSettingButton(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "aeaa7CV0CtEMo2Sab7CGMw1", "GenericSettingButton")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("ButtonTheme"),
      X = require("UIAppearanceHelper"),
      Z = require("Utils"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property,
      V = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.iconSprite = undefined, f.collider = undefined, f.buttonTheme = undefined, f.circleCollider = undefined, f.Js = true, f.Vs = cc.v2(), f.zs = cc.v2(), f.Ks = false, f.qs = false, f.Qs = false, f.Ys = undefined, f.willHideOnceClick = true, f;
        }
        return __extends(q, N), q.prototype.onLoad = function () {
          var f, g;
          if ("land" === shell.environment.getOrientationMode() && (null === (f = this.circleCollider) || undefined === f || (f.getComponent(cc.Sprite).spriteFrame = undefined), this.circleCollider = undefined), this.enableTouchInteraction(), null === (g = this.circleCollider) || undefined === g || (g.opacity = 0), this.buttonTheme) {
            var l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
            Z.setNodeColorWithOpacity(this.iconSprite, l);
          }
          this.Ys = this.iconSprite.getComponent(cc.Sprite).spriteFrame;
        }, q.prototype.setIconSprite = function (f) {
          this.iconSprite.getComponent(cc.Sprite).spriteFrame = f;
        }, q.prototype.destroy = function () {
          return this.disableTouchInteraction(), N.prototype.destroy.call(this);
        }, q.prototype.onClick = function () {}, q.prototype.buttonActivate = function (f) {
          f ? (this.node.active = true, Z.deferCallback(this)(this.enableTouchInteraction)) : (this.disableTouchInteraction(), this.node.active = false);
        }, Object.defineProperty(q.prototype, "isInteractable", {
          'get': function () {
            return this.Js;
          },
          'set': function (f) {
            this.Js = f, this.interactableButtonColor(f), f ? this.enableTouchInteraction() : (this.disableTouchInteraction(), this.Qs = false);
          },
          'enumerable': false,
          'configurable': true
        }), q.prototype.Zs = function (f) {
          if (this.Js) {
            this.Qs = true, this.zs = this.Vs = f.touch.getLocation();
            var g = this.Xs(f);
            this.Ks = !g, this.$s(g);
          } else f.stopPropagation();
        }, q.prototype.qi = function (f) {
          var g, l;
          this.Qs && (this.Js ? (this.zs = f.touch.getLocation(), this.circleCollider && (this.Ks || (this.zs = f.touch.getLocation(), g = cc.v2(0, this.Vs.y), l = cc.v2(0, this.zs.y), g.sub(l).mag() > 60 && (this.$s(false), this.Ks = true), f.stopPropagation()))) : f.stopPropagation());
        }, q.prototype.te = function (f) {
          this.Qs && (this.Js ? this.Ks || (f.stopPropagation(), this.$s(false), this.onClick(), this.willHideOnceClick && this.ie()) : f.stopPropagation());
        }, q.prototype.se = function (f) {
          this.Qs && (this.Js ? this.Ks || (f.stopPropagation(), this.$s(false)) : f.stopPropagation());
        }, q.prototype.changeButtonColor = function (f) {
          this.changeButtonPressedColor(f);
        }, q.prototype.$s = function (f) {
          this.Ks || this.changeButtonPressedColor(f);
        }, q.prototype.changeButtonPressedColor = function (f) {
          if (this.buttonTheme) {
            var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
              l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".pressed");
            Z.setNodeColorWithOpacity(this.iconSprite, f ? l : g);
          }
        }, q.prototype.interactableButtonColor = function (f) {
          if (this.buttonTheme) {
            var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
              l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled");
            Z.setNodeColorWithOpacity(this.iconSprite, f ? g : l);
          }
        }, q.prototype.Xs = function (f) {
          var g = this.circleCollider;
          if (!g) return true;
          var l = f.touch ? f.touch.getLocation() : f.getLocation(),
            K = g.convertToNodeSpaceAR(l),
            O = g.width / 2;
          return K.x * K.x + K.y * K.y <= O * O;
        }, q.prototype.ee = function (f) {
          this.Ys && this.circleCollider && (this.Xs(f) ? this.circleCollider.opacity = 255 : this.circleCollider.opacity = 0);
        }, q.prototype.ie = function () {
          var f;
          this.Ys && this.circleCollider && (this.Ks = false, null === (f = this.circleCollider) || undefined === f || (f.opacity = 0));
        }, q.prototype.enableTouchInteraction = function () {
          if (!this.qs) {
            this.qs = true;
            var f = this.circleCollider ? this.circleCollider : this.collider;
            f.on(cc.Node.EventType.TOUCH_START, this.Zs, this), f.on(cc.Node.EventType.TOUCH_MOVE, this.qi, this), f.on(cc.Node.EventType.TOUCH_END, this.te, this), f.on(cc.Node.EventType.TOUCH_CANCEL, this.se, this), this.circleCollider && (f.on(cc.Node.EventType.MOUSE_ENTER, this.ee, this), f.on(cc.Node.EventType.MOUSE_MOVE, this.ee, this), f.on(cc.Node.EventType.MOUSE_LEAVE, this.ie, this));
          }
        }, q.prototype.disableTouchInteraction = function () {
          if (this.qs) {
            this.qs = false;
            var f = this.circleCollider ? this.circleCollider : this.collider;
            f.off(cc.Node.EventType.TOUCH_START, this.Zs, this), f.off(cc.Node.EventType.TOUCH_MOVE, this.qi, this), f.off(cc.Node.EventType.TOUCH_END, this.te, this), f.off(cc.Node.EventType.TOUCH_CANCEL, this.se, this), this.circleCollider && (f.off(cc.Node.EventType.MOUSE_ENTER, this.ee, this), f.off(cc.Node.EventType.MOUSE_MOVE, this.ee, this), f.off(cc.Node.EventType.MOUSE_LEAVE, this.ie, this), this.circleCollider.opacity = 0);
          }
        }, __decorate([C(cc.Node)], q.prototype, "iconSprite", undefined), __decorate([C(cc.Node)], q.prototype, "collider", undefined), __decorate([C(B)], q.prototype, "buttonTheme", undefined), __decorate([C(cc.Node)], q.prototype, "circleCollider", undefined), __decorate([M], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = GenericSettingButton;
