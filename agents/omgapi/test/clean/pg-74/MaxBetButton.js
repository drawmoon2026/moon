// module: MaxBetButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MaxBetButton(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "57d52E5rw9F7Iqp2UOZL/vK", "MaxBetButton")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("BetModifierButton"),
      X = F("UIAppearanceHelper"),
      Z = F("Utils"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property,
      V = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.labelNode = undefined, f;
        }
        return __extends(q, N), q.prototype.changeButtonPressedColor = function (f) {
          if (this.buttonTheme) {
            {
              var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
                l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".pressed");
              if (this.isReachLimit) {
                {
                  var K = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled");
                  Z.setNodeColorWithOpacity(this.iconSprite, K), this.labelNode.opacity = 127.5;
                }
              } else Z.setNodeColorWithOpacity(this.iconSprite, f ? l : g), this.labelNode.opacity = f ? 127.5 : 255;
            }
          }
        }, q.prototype.interactableButtonColor = function (f) {
          if (this.buttonTheme) {
            var g = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".normal"),
              l = X.uiAppearanceHelper.v(this.buttonTheme.domainKey + '.' + this.buttonTheme.colorKey + ".disabled");
            this.isReachLimit ? (Z.setNodeColorWithOpacity(this.iconSprite, l), this.labelNode.opacity = 127.5) : (Z.setNodeColorWithOpacity(this.iconSprite, f ? g : l), this.labelNode.opacity = f ? 255 : 63.75);
          }
        }, __decorate([C(cc.Node)], q.prototype, "labelNode", undefined), __decorate([M], q);
      }(B.default);
    I.default = V, cc._RF.pop();
  }
}
module.exports = MaxBetButton;
