// module: SettingTurboSpinButton
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SettingTurboSpinButton(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "eaed475bBBLf69c2AHexgPy", "SettingTurboSpinButton")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x);
      var C = require("GenericSettingButton"),
        H = require("UIAppearanceHelper"),
        V = require("Utils"),
        M = require("TurboButtonEffect"),
        q = cc._decorator,
        m = q.ccclass,
        D = q.property,
        W = function (z, L) {
          return Math.floor(Math.random() * (L - z + 1)) + z;
        },
        k = function (z) {
          function L() {
            var v = null !== z && z.apply(this, arguments) || this;
            return v.sprite = undefined, v.spriteEffect = undefined, v.titleLabel = undefined, v.turboSpinOn = undefined, v.turboSpinOff = undefined, v.turboSpinEffectOn = undefined, v.turboSpinEffectOff = undefined, v.turboSpinEffectAnim = undefined, v.lightingEffectAnim = undefined, v.spriteLightEffectNode = undefined, v.spriteLightShadowEffectNode = undefined, v.turboButtonEffect = undefined, v.O_ = true, v.I_ = undefined, v.G_ = undefined, v.N_ = [{
              'animName': "turbo_lighting_style_1",
              'positionOffsetXLeft': 0,
              'positionOffsetXRight': W(1, 3),
              'positionOffsetYLeft': W(0, 3),
              'positionOffsetYRight': W(0, 6),
              'scaleX': 2,
              'scaleY': 2,
              'rotation': 0
            }, {
              'animName': "turbo_lighting_style_2",
              'positionOffsetXLeft': W(0, 4),
              'positionOffsetXRight': W(0, 10),
              'positionOffsetYLeft': W(0, 22),
              'positionOffsetYRight': W(0, 8),
              'scaleX': 2.3,
              'scaleY': 2,
              'rotation': 0
            }, {
              'animName': "turbo_lighting_style_3",
              'positionOffsetXLeft': W(0, 11),
              'positionOffsetXRight': W(0, 22),
              'positionOffsetYLeft': W(0, 5),
              'positionOffsetYRight': W(0, 20),
              'scaleX': 2,
              'scaleY': 2,
              'rotation': W(-10, 10)
            }], v;
          }
          return __extends(L, z), L.prototype.onLoad = function () {
            z.prototype.onLoad.call(this), this.turboButtonEffect.getComponent(M.default).setUpdateTurboMiddleIconCallback(this.changeTurboSprite.bind(this)), this.spriteEffect.spriteFrame = this.turboSpinOff;
          }, L.prototype.setTurboSprites = function (v, b) {
            this.turboSpinOn = v, this.turboSpinOff = b;
          }, L.prototype.playTurboLighting = function () {
            this.spriteEffect.spriteFrame = undefined, this.turboSpinEffectAnim.once("finished", this.T_, this), this.O_ ? (this.turboSpinEffectAnim.play("turbo_icon_1st_up"), this.O_ = undefined) : this.turboSpinEffectAnim.play("turbo_icon_up");
          }, L.prototype.stopTurboLighting = function () {
            var v = this.I_;
            this.I_ = undefined, v && v();
            var b = this.G_;
            this.G_ = undefined, b && b(), this.turboSpinEffectAnim.stop(), this.lightingEffectAnim.stop(), this.spriteLightShadowEffectNode.opacity = 0, this.spriteLightEffectNode.getComponent(cc.Sprite).spriteFrame = undefined, this.spriteLightEffectNode.x = 0, this.spriteLightEffectNode.y = 0, this.spriteEffect.node.opacity = 255;
          }, L.prototype.changeTurboSprite = function () {
            var v = this.getTurboSpinCallback && this.getTurboSpinCallback();
            this.sprite.spriteFrame = v ? this.turboSpinOn : this.turboSpinOff;
          }, L.prototype.T_ = function () {
            this.H_(), this.R_();
          }, L.prototype.H_ = function () {
            {
              var v = this;
              this.G_ = V.delayCallback(1)(function () {
                var b = v.N_[W(0, 2)],
                  U = W(0, 1),
                  Q = W(0, 1);
                v.spriteLightEffectNode.x = U ? b.positionOffsetXRight : -b.positionOffsetXLeft, v.spriteLightEffectNode.y = Q ? b.positionOffsetYRight : -b.positionOffsetYLeft, v.spriteLightEffectNode.scaleX = b.scaleX, v.spriteLightEffectNode.scaleY = b.scaleY, v.spriteLightEffectNode.angle = -b.rotation, v.lightingEffectAnim.once("finished", v.H_, v), v.lightingEffectAnim.play(b.animName);
              });
            }
          }, L.prototype.R_ = function () {
            var v = this;
            this.I_ = V.delayCallback(3)(function () {
              {
                v.turboSpinEffectAnim.once("finished", v.R_, v), v.turboSpinEffectAnim.play("turbo_icon_loop");
              }
            });
          }, L.prototype.setSpriteScaleSize = function (v) {
            this.sprite.node.setScale(cc.v2(v, v));
          }, L.prototype.setTitle = function (v) {
            this.titleLabel.string = v;
          }, L.prototype.setButtonOnColor = function (v, b) {
            this.k_ = v, this.L_ = b;
          }, L.prototype.setButtonOffColor = function (v, b) {
            this.E_ = v, this.j_ = b;
          }, L.prototype.changeButtonColor = function (v) {
            this.buttonTheme.domainKey = v ? this.k_ : this.E_, this.buttonTheme.colorKey = v ? this.L_ : this.j_, z.prototype.changeButtonColor.call(this, false);
          }, L.prototype.changeButtonPressedColor = function (v) {
            var b = {};
            b.scale = 0.9;
            var U = {};
            U.scale = 1.1;
            var Q = {};
            Q.scale = 1.05;
            var w = {};
            w.scale = 1;
            v ? cc.tween(this.node).to(0.05, b).start() : cc.tween(this.node).to(0.05, U).to(0.05, Q).to(0.05, w).start();
          }, L.prototype.interactableButtonColor = function (v) {
            {
              if (this.buttonTheme) {
                var b = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                  U = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled"),
                  Q = v ? b : U;
                this.turboSpinEffectAnim.node.opacity = Q.a, V.setNodeColorWithOpacity(this.iconSprite, Q), V.setNodeColorWithOpacity(this.spriteEffect.node, Q), V.setNodeColorWithOpacity(this.spriteLightEffectNode, Q), V.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, Q), V.setNodeColorWithOpacity(this.sprite.node, Q);
              }
            }
          }, L.prototype.changeSpriteEffectColor = function () {
            {
              if (this.buttonTheme) {
                var v = H.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
                V.setNodeColorWithOpacity(this.spriteEffect.node, v), V.setNodeColorWithOpacity(this.spriteLightEffectNode, v), V.setNodeColorWithOpacity(this.iconSprite, v), V.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, v);
              }
            }
          }, L.prototype.destroy = function () {
            return this.stopTurboLighting(), z.prototype.destroy.call(this);
          }, __decorate([D(cc.Sprite)], L.prototype, "sprite", undefined), __decorate([D(cc.Sprite)], L.prototype, "spriteEffect", undefined), __decorate([D(cc.Label)], L.prototype, "titleLabel", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinOn", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinOff", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinEffectOn", undefined), __decorate([D(cc.SpriteFrame)], L.prototype, "turboSpinEffectOff", undefined), __decorate([D(cc.Animation)], L.prototype, "turboSpinEffectAnim", undefined), __decorate([D(cc.Animation)], L.prototype, "lightingEffectAnim", undefined), __decorate([D(cc.Node)], L.prototype, "spriteLightEffectNode", undefined), __decorate([D(cc.Node)], L.prototype, "spriteLightShadowEffectNode", undefined), __decorate([D(M.default)], L.prototype, "turboButtonEffect", undefined), __decorate([m], L);
        }(C.default);
      exports.default = k, cc._RF.pop();
    }
  }
}
module.exports = SettingTurboSpinButton;
