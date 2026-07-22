// module: LandscapeSettingInfoFooterController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function LandscapeSettingInfoFooterController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "e550bCO+rxMtaTFsIcS7wfm", "LandscapeSettingInfoFooterController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SettingInfoFooterController"),
      X = require("UIAppearanceHelper"),
      Z = require("Utils"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property,
      V = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.borders = [], f.descriptionLabel = [], f.landscapeSoundButtonHolder = undefined, f;
        }
        return __extends(q, N), q.prototype.boot = function () {
          N.prototype.boot.call(this);
          var f = X.uiAppearanceHelper.v("setting.secondary_theme_color");
          this.borders.forEach(function (l) {
            Z.setNodeColorWithOpacity(l, f);
          });
          var g = X.uiAppearanceHelper.v("setting.tertiary_theme_color");
          this.descriptionLabel.forEach(function (l) {
            Z.setNodeColorWithOpacity(l.node, g);
          }), this.betOptionsButton.normalColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.betOptionsButton.pressedColor = X.uiAppearanceHelper.v("setting.color_button_transition_a.pressed"), this.betOptionsButton.hoverColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.betOptionsButton.disabledColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.walletButton.normalColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.walletButton.pressedColor = X.uiAppearanceHelper.v("setting.color_button_transition_a.pressed"), this.walletButton.hoverColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.walletButton.disabledColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.winButton.normalColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.winButton.pressedColor = X.uiAppearanceHelper.v("setting.color_button_transition_a.pressed"), this.winButton.hoverColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color"), this.winButton.disabledColor = X.uiAppearanceHelper.v("setting.tertiary_theme_color");
        }, q.prototype.setWalletNavigateIcon = function (f) {
          switch (this.vc(), f) {
            case B.WALLET_FOOTER_TYPE.CASH:
              this.walletNavigateIcon.getComponent(cc.Sprite).spriteFrame = this.walletFooterTypeSFList[f - 1];
              break;
            case B.WALLET_FOOTER_TYPE.FREE_GAME:
              this.walletNavigateIcon.getComponent(cc.Sprite).spriteFrame = this.walletFooterTypeSFList[f - 1], this.specialIcon.spriteFrame = this.rewardFooterTypeSFList[f - 2], this.descriptionLabel[2].string = shell.I18n.t("SettingMenu.FreeGame");
              break;
            case B.WALLET_FOOTER_TYPE.BONUS:
              this.walletNavigateIcon.getComponent(cc.Sprite).spriteFrame = this.walletFooterTypeSFList[f - 1], this.specialIcon.spriteFrame = this.rewardFooterTypeSFList[f - 2], this.descriptionLabel[2].string = shell.I18n.t("SettingMenu.RollOver");
              break;
            default:
              this.walletNavigateIcon.getComponent(cc.Sprite).spriteFrame = undefined;
          }
        }, q.prototype.vc = function () {
          this.descriptionLabel[0].string = shell.I18n.t("WalletHelper.Balance"), this.descriptionLabel[1].string = shell.I18n.t("SettingMenu.WinPrizeWord"), this.descriptionLabel[2].string = '', this.descriptionLabel[3].string = shell.I18n.t("SettingMenu.Bet");
        }, __decorate([C([cc.Node])], q.prototype, "borders", undefined), __decorate([C([cc.Label])], q.prototype, "descriptionLabel", undefined), __decorate([C(cc.Node)], q.prototype, "landscapeSoundButtonHolder", undefined), __decorate([M], q);
      }(B.SettingInfoFooterController);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = LandscapeSettingInfoFooterController;
