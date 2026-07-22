// module: SettingTurboSpinButton
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SettingTurboSpinButton(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "eaed475bBBLf69c2AHexgPy", "SettingTurboSpinButton")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = require("GenericSettingButton"),
        X = require("UIAppearanceHelper"),
        Z = require("Utils"),
        T = require("TurboButtonEffect"),
        M = cc._decorator,
        C = M.ccclass,
        V = M.property,
        N = function (f, g) {
          return Math.floor(Math.random() * (g - f + 1)) + f;
        },
        q = function (f) {
          function g() {
            {
              var K = null !== f && f.apply(this, arguments) || this;
              return K.sprite = undefined, K.spriteEffect = undefined, K.titleLabel = undefined, K.turboSpinOn = undefined, K.turboSpinOff = undefined, K.turboSpinEffectOn = undefined, K.turboSpinEffectOff = undefined, K.turboSpinEffectAnim = undefined, K.lightingEffectAnim = undefined, K.spriteLightEffectNode = undefined, K.spriteLightShadowEffectNode = undefined, K.turboButtonEffect = undefined, K.Pm = true, K.Dm = undefined, K.Um = undefined, K.xm = [{
                'animName': "turbo_lighting_style_1",
                'positionOffsetXLeft': 0,
                'positionOffsetXRight': N(1, 3),
                'positionOffsetYLeft': N(0, 3),
                'positionOffsetYRight': N(0, 6),
                'scaleX': 1.2,
                'scaleY': 1.2,
                'rotation': 0
              }, {
                'animName': "turbo_lighting_style_2",
                'positionOffsetXLeft': N(0, 4),
                'positionOffsetXRight': N(0, 10),
                'positionOffsetYLeft': N(0, 22),
                'positionOffsetYRight': N(0, 8),
                'scaleX': 1.4,
                'scaleY': 1.2,
                'rotation': 0
              }, {
                'animName': "turbo_lighting_style_3",
                'positionOffsetXLeft': N(0, 11),
                'positionOffsetXRight': N(0, 22),
                'positionOffsetYLeft': N(0, 5),
                'positionOffsetYRight': N(0, 20),
                'scaleX': 1.2,
                'scaleY': 1.2,
                'rotation': N(-10, 10)
              }], K;
            }
          }
          return __extends(g, f), g.prototype.onLoad = function () {
            f.prototype.onLoad.call(this), this.turboButtonEffect.getComponent(T.default).setUpdateTurboMiddleIconCallback(this.changeTurboSprite.bind(this));
          }, g.prototype.setTurboSprites = function (K, O) {
            this.turboSpinOn = K, this.turboSpinOff = O;
          }, g.prototype.playTurboLighting = function () {
            this.spriteEffect.spriteFrame = undefined, this.turboSpinEffectAnim.once("finished", this.Fm, this), this.Pm ? (this.turboSpinEffectAnim.play("turbo_icon_1st_up"), this.Pm = undefined) : this.turboSpinEffectAnim.play("turbo_icon_up");
          }, g.prototype.stopTurboLighting = function () {
            var K = this.Dm;
            this.Dm = undefined, K && K();
            var O = this.Um;
            this.Um = undefined, O && O(), this.turboSpinEffectAnim.stop(), this.lightingEffectAnim.stop(), this.spriteLightShadowEffectNode.opacity = 0, this.spriteLightEffectNode.getComponent(cc.Sprite).spriteFrame = undefined, this.spriteLightEffectNode.x = 0, this.spriteLightEffectNode.y = 0, this.spriteEffect.node.opacity = 255;
          }, g.prototype.changeTurboSprite = function () {
            var K = this.getTurboSpinCallback && this.getTurboSpinCallback();
            this.sprite.spriteFrame = K ? this.turboSpinOn : this.turboSpinOff;
          }, g.prototype.Fm = function () {
            this.Wm(), this.Jm();
          }, g.prototype.Wm = function () {
            var K = this;
            this.Um = Z.delayCallback(1)(function () {
              var O = K.xm[N(0, 2)],
                x = N(0, 1),
                p = N(0, 1);
              K.spriteLightEffectNode.x = x ? O.positionOffsetXRight : -O.positionOffsetXLeft, K.spriteLightEffectNode.y = p ? O.positionOffsetYRight : -O.positionOffsetYLeft, K.spriteLightEffectNode.scaleX = O.scaleX, K.spriteLightEffectNode.scaleY = O.scaleY, K.spriteLightEffectNode.angle = -O.rotation, K.lightingEffectAnim.once("finished", K.Wm, K), K.lightingEffectAnim.play(O.animName);
            });
          }, g.prototype.Jm = function () {
            var K = this;
            this.Dm = Z.delayCallback(3)(function () {
              K.turboSpinEffectAnim.once("finished", K.Jm, K), K.turboSpinEffectAnim.play("turbo_icon_loop");
            });
          }, g.prototype.setSpriteScaleSize = function (K) {
            {
              this.sprite.node.setScale(cc.v2(K, K));
            }
          }, g.prototype.setTitle = function (K) {
            this.titleLabel.string = K;
          }, g.prototype.setButtonOnColor = function (K, O) {
            this.Vm = K, this.zm = O;
          }, g.prototype.setButtonOffColor = function (K, O) {
            this.Km = K, this.qm = O;
          }, g.prototype.changeButtonColor = function (K) {
            this.buttonTheme.domainKey = K ? this.Vm : this.Km, this.buttonTheme.colorKey = K ? this.zm : this.qm, f.prototype.changeButtonColor.call(this, false);
          }, g.prototype.changeButtonPressedColor = function (K) {
            K ? this.node.runAction(cc.scaleTo(0.05, 0.9)) : this.node.runAction(cc.sequence(cc.scaleTo(0.05, 1.1), cc.scaleTo(0.05, 1.05), cc.scaleTo(0.05, 1)));
          }, g.prototype.interactableButtonColor = function (K) {
            if (this.buttonTheme) {
              {
                var O = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                  x = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled"),
                  p = K ? O : x;
                this.turboSpinEffectAnim.node.opacity = p.a, Z.setNodeColorWithOpacity(this.iconSprite, p), Z.setNodeColorWithOpacity(this.spriteEffect.node, p), Z.setNodeColorWithOpacity(this.spriteLightEffectNode, p), Z.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, p), Z.setNodeColorWithOpacity(this.sprite.node, p);
              }
            }
          }, g.prototype.changeSpriteEffectColor = function () {
            if (this.buttonTheme) {
              var K = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
              Z.setNodeColorWithOpacity(this.spriteEffect.node, K), Z.setNodeColorWithOpacity(this.spriteLightEffectNode, K), Z.setNodeColorWithOpacity(this.iconSprite, K), Z.setNodeColorWithOpacity(this.spriteLightShadowEffectNode, K);
            }
          }, g.prototype.destroy = function () {
            return this.stopTurboLighting(), f.prototype.destroy.call(this);
          }, __decorate([V(cc.Sprite)], g.prototype, "sprite", undefined), __decorate([V(cc.Sprite)], g.prototype, "spriteEffect", undefined), __decorate([V(cc.Label)], g.prototype, "titleLabel", undefined), __decorate([V(cc.SpriteFrame)], g.prototype, "turboSpinOn", undefined), __decorate([V(cc.SpriteFrame)], g.prototype, "turboSpinOff", undefined), __decorate([V(cc.SpriteFrame)], g.prototype, "turboSpinEffectOn", undefined), __decorate([V(cc.SpriteFrame)], g.prototype, "turboSpinEffectOff", undefined), __decorate([V(cc.Animation)], g.prototype, "turboSpinEffectAnim", undefined), __decorate([V(cc.Animation)], g.prototype, "lightingEffectAnim", undefined), __decorate([V(cc.Node)], g.prototype, "spriteLightEffectNode", undefined), __decorate([V(cc.Node)], g.prototype, "spriteLightShadowEffectNode", undefined), __decorate([V(T.default)], g.prototype, "turboButtonEffect", undefined), __decorate([C], g);
        }(B.default);
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = SettingTurboSpinButton;
