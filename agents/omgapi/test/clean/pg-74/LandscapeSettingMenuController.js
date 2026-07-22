// module: LandscapeSettingMenuController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function LandscapeSettingMenuController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "0a93fcJrXdI5b2EdfUH4UAj", "LandscapeSettingMenuController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.LandscapeSettingMenuController = undefined;
    var B = require("SettingMenuController"),
      X = require("CanvasResizeBroadcaster"),
      Z = require("UIAppearanceHelper"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property,
      V = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.landscapeSoundButtonHolder = undefined, f.moreMenuLayoutNode = undefined, f.moreMenuBGNode = undefined, f._c = undefined, f;
        }
        return __extends(q, N), q.prototype.onLoad = function () {
          this.mc(), this.moreMenuLayoutNode.on("size-changed", this.mc.bind(this)), this._c = this.moreMenuLayerNode.position, this.settingTurboSprite.node.color = Z.uiAppearanceHelper.v("setting.theme_color"), this.defaultMenuLayerNode.y = 0, this.settingToast.opacity = 0, this.featureBuyToast.opacity = 0, this.featureBuyToast.active = false, this.moreMenuLayerNode.y = -(this.moreMenuLayerNode.height + this.bc()), this.reminderBoard.active = false, this.reminderBoard.opacity = 1, this.settingMenuUIBlock.active = false, this.subControllerHolder.height = this.pc = cc.view.getVisibleSize().height, this.Sc = X.default.subscribe(this.Ti.bind(this));
        }, q.prototype.showMoreMenuLayer = function () {
          var f = this;
          if (!this.Cc) {
            this.Cc = true, this.Mc = true, this.yc(), this.moreMenuLayerNode.active = true, this.moreMenuLayerNode.stopAllActions(), this.moreMenuLayerNode.runAction(cc.sequence(cc.spawn(cc.moveTo(0.2, this._c.x, this._c.y).easing(cc.easeQuadraticActionOut()), cc.fadeIn(0.2).easing(cc.easeQuadraticActionOut())), cc.callFunc(function () {
              f.Cc = false, f.onMenuEndChanged && f.onMenuEndChanged();
            })));
            var g = this.onMenuStartChanged;
            g && g(true, true);
          }
        }, q.prototype.hideMoreMenuLayer = function () {
          var f = this;
          if (!this.Cc) {
            this.Cc = true, this.Mc = true, this.yc(), this.moreMenuLayerNode.stopAllActions(), this.moreMenuLayerNode.runAction(cc.sequence(cc.spawn(cc.moveTo(0.2, this._c.x, -this.moreMenuLayerNode.height).easing(cc.easeQuadraticActionOut()), cc.fadeOut(0.2).easing(cc.easeQuadraticActionOut())), cc.callFunc(function () {
              f.Cc = false, f.moreMenuLayerNode.active = false, f.onMenuEndChanged && f.onMenuEndChanged();
            }))), false === this.moreMenuLayerNode.active && (this.Cc = false);
            var g = this.onMenuStartChanged;
            g && g(false, true);
          }
        }, q.prototype.mc = function () {
          this.moreMenuBGNode.width = this.moreMenuLayoutNode.width, this.moreMenuBGNode.height = this.moreMenuLayoutNode.height;
        }, __decorate([C(cc.Node)], q.prototype, "landscapeSoundButtonHolder", undefined), __decorate([C(cc.Node)], q.prototype, "moreMenuLayoutNode", undefined), __decorate([C(cc.Node)], q.prototype, "moreMenuBGNode", undefined), __decorate([M], q);
      }(B.SettingMenuController);
    exports.LandscapeSettingMenuController = V, cc._RF.pop();
  }
}
module.exports = LandscapeSettingMenuController;
