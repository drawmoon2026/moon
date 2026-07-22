// module: LandscapeSoundButton
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function LandscapeSoundButton(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "948ffXQc5hNbqpouW3VdkkX", "LandscapeSoundButton")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = require("SoundButton"),
        X = require("UIAppearanceHelper"),
        Z = require("Utils"),
        T = cc._decorator,
        M = T.ccclass,
        C = T.property,
        V = function (N) {
          function q() {
            var f = null !== N && N.apply(this, arguments) || this;
            return f.largeSprite = undefined, f.largeSoundOnIcon = undefined, f.largeSoundOffIcon = undefined, f;
          }
          return __extends(q, N), q.prototype.onLoad = function () {
            if (this.enableTouchInteraction(), this.buttonTheme) {
              var f = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal");
              Z.setNodeColorWithOpacity(this.largeSprite.node, f);
            }
          }, q.prototype.changeButtonPressedColor = function (f) {
            if (this.buttonTheme) {
              var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".pressed");
              Z.setNodeColorWithOpacity(this.largeSprite.node, f ? l : g);
            }
          }, q.prototype.interactableButtonColor = function (f) {
            if (this.buttonTheme) {
              {
                var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                  l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled");
                Z.setNodeColorWithOpacity(this.largeSprite.node, f ? g : l);
              }
            }
          }, __decorate([C(cc.Sprite)], q.prototype, "largeSprite", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "largeSoundOnIcon", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "largeSoundOffIcon", undefined), __decorate([M], q);
        }(B.default);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = LandscapeSoundButton;
