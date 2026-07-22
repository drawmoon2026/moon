// module: GenericSettingButton
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function GenericSettingButton(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "aeaa7CV0CtEMo2Sab7CGMw1", "GenericSettingButton")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("ButtonTheme"),
        C = require("UIAppearanceHelper"),
        H = require("Utils"),
        V = cc._decorator,
        M = V.ccclass,
        q = V.property,
        m = function (D) {
          function W() {
            {
              var k = null !== D && D.apply(this, arguments) || this;
              return k.iconSprite = undefined, k.collider = undefined, k.buttonTheme = undefined, k.circleCollider = undefined, k.normalSpriteFrame = undefined, k.disableSpriteFrame = undefined, k.Zs = true, k.$s = cc.v2(), k.te = cc.v2(), k.ie = false, k.se = false, k.ee = false, k.willHideOnceClick = true, k.ct = undefined, k;
            }
          }
          return __extends(W, D), W.prototype.onLoad = function () {
            {
              var k;
              if (this.enableTouchInteraction(), null === (k = this.circleCollider) || undefined === k || (k.opacity = 0), this.ct = this.iconSprite.getComponent(cc.Sprite), this.buttonTheme) {
                {
                  var z = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
                  H.setNodeColorWithOpacity(this.iconSprite, z);
                }
              }
            }
          }, W.prototype.setIconSprite = function (k) {
            this.iconSprite.getComponent(cc.Sprite).spriteFrame = k;
          }, W.prototype.destroy = function () {
            {
              return this.disableTouchInteraction(), D.prototype.destroy.call(this);
            }
          }, W.prototype.onClick = function () {}, W.prototype.buttonActivate = function (k) {
            {
              k ? (this.node.active = true, H.deferCallback(this)(this.enableTouchInteraction)) : (this.disableTouchInteraction(), this.node.active = false);
            }
          }, Object.defineProperty(W.prototype, "isInteractable", {
            'get': function () {
              {
                return this.Zs;
              }
            },
            'set': function (k) {
              {
                this.Zs = k, this.interactableButtonColor(k), k ? this.enableTouchInteraction() : (this.disableTouchInteraction(), this.ee = false);
              }
            },
            'enumerable': false,
            'configurable': true
          }), W.prototype.ne = function (k) {
            if (this.Zs) {
              this.ee = true, this.te = this.$s = k.touch.getLocation();
              var z = this.oe(k);
              this.ie = !z, this.ce(z);
            } else k.stopPropagation();
          }, W.prototype.ji = function (k) {
            var z, L;
            this.ee && (this.Zs ? (this.te = k.touch.getLocation(), this.circleCollider && (this.ie || (this.te = k.touch.getLocation(), z = cc.v2(0, this.$s.y), L = cc.v2(0, this.te.y), z.sub(L).mag() > 60 && (this.ce(false), this.ie = true), k.stopPropagation()))) : k.stopPropagation());
          }, W.prototype.he = function (k) {
            this.ee && (this.Zs ? this.ie || (k.stopPropagation(), this.ce(false), this.onClick(), this.willHideOnceClick && this.re()) : k.stopPropagation());
          }, W.prototype.ae = function (k) {
            this.ee && (this.Zs ? this.ie || (k.stopPropagation(), this.ce(false)) : k.stopPropagation());
          }, W.prototype.changeButtonColor = function (k) {
            this.changeButtonPressedColor(k);
          }, W.prototype.ce = function (k) {
            this.ie || this.changeButtonPressedColor(k);
          }, W.prototype.changeButtonPressedColor = function (k) {
            {
              if (this.buttonTheme) {
                {
                  var z = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                    L = C.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".pressed");
                  H.setNodeColorWithOpacity(this.iconSprite, k ? L : z);
                }
              }
            }
          }, W.prototype.interactableButtonColor = function (k) {
            this.ct.spriteFrame = k ? this.normalSpriteFrame : this.disableSpriteFrame;
          }, W.prototype.oe = function (k) {
            var z = this.circleCollider;
            if (!z) return true;
            var L = k.touch ? k.touch.getLocation() : k.getLocation(),
              v = z.convertToNodeSpaceAR(L),
              b = z.width / 2;
            return v.x * v.x + v.y * v.y <= b * b;
          }, W.prototype.ue = function (k) {
            {
              this.circleCollider && (this.oe(k) ? this.circleCollider.opacity = 255 : this.circleCollider.opacity = 0);
            }
          }, W.prototype.re = function () {
            {
              var k;
              this.circleCollider && (this.ie = false, null === (k = this.circleCollider) || undefined === k || (k.opacity = 0));
            }
          }, W.prototype.enableTouchInteraction = function () {
            if (!this.se) {
              this.se = true;
              var k = this.collider;
              k.on(cc.Node.EventType.TOUCH_START, this.ne, this), k.on(cc.Node.EventType.TOUCH_MOVE, this.ji, this), k.on(cc.Node.EventType.TOUCH_END, this.he, this), k.on(cc.Node.EventType.TOUCH_CANCEL, this.ae, this), k.on(cc.Node.EventType.MOUSE_ENTER, this.ue, this), k.on(cc.Node.EventType.MOUSE_MOVE, this.ue, this), k.on(cc.Node.EventType.MOUSE_LEAVE, this.re, this);
            }
          }, W.prototype.disableTouchInteraction = function () {
            if (this.se) {
              {
                this.se = false;
                var k = this.collider;
                k.off(cc.Node.EventType.TOUCH_START, this.ne, this), k.off(cc.Node.EventType.TOUCH_MOVE, this.ji, this), k.off(cc.Node.EventType.TOUCH_END, this.he, this), k.off(cc.Node.EventType.TOUCH_CANCEL, this.ae, this), k.off(cc.Node.EventType.MOUSE_ENTER, this.ue, this), k.off(cc.Node.EventType.MOUSE_MOVE, this.ue, this), k.off(cc.Node.EventType.MOUSE_LEAVE, this.re, this), this.circleCollider.opacity = 0;
              }
            }
          }, __decorate([q(cc.Node)], W.prototype, "iconSprite", undefined), __decorate([q(cc.Node)], W.prototype, "collider", undefined), __decorate([q(x)], W.prototype, "buttonTheme", undefined), __decorate([q(cc.Node)], W.prototype, "circleCollider", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "normalSpriteFrame", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "disableSpriteFrame", undefined), __decorate([M], W);
        }(cc.Component);
      exports.default = m, cc._RF.pop();
    }
  }
}
module.exports = GenericSettingButton;
