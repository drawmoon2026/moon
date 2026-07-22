// module: FreeSpinEffectController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function FreeSpinEffectController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "c10d1s0Nr5AV49OxrROlWVN", "FreeSpinEffectController")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m);
      var B = F("DragonController"),
        X = F("MahjongMovingController"),
        Z = F("RowShiningController"),
        T = cc._decorator,
        M = T.ccclass,
        C = T.property,
        V = function (N) {
          function q() {
            var f = null !== N && N.apply(this, arguments) || this;
            return f.dragonController = undefined, f.mahjongMovingController = undefined, f.rowShiningController = undefined, f.background = undefined, f.backgroundInner = undefined, f;
          }
          return __extends(q, N), q.prototype.onLoad = function () {
            this.init();
          }, q.prototype.init = function () {
            {
              var f = this;
              this.dragonController.setDragonGlowFadeInCallback(this.rowShiningController.fadeInDragonGlow.bind(this.rowShiningController)), this.dragonController.setMahjongMovingCallback(this.mahjongMovingController.startAnimation.bind(this.mahjongMovingController)), this.dragonController.setRectGlowFadeInCallback(function () {
                f.backgroundInner.runAction(cc.fadeTo(0.2, 0)), f.rowShiningController.fadeInRectGlow();
              });
            }
          }, q.prototype.play = function () {
            this.background.runAction(cc.fadeTo(0.2, 255)), this.dragonController.play();
          }, q.prototype.stop = function () {
            this.background.runAction(cc.fadeTo(0.2, 0)), this.rowShiningController.fadeOutAll();
          }, __decorate([C(B.default)], q.prototype, "dragonController", undefined), __decorate([C(X.default)], q.prototype, "mahjongMovingController", undefined), __decorate([C(Z.default)], q.prototype, "rowShiningController", undefined), __decorate([C(cc.Node)], q.prototype, "background", undefined), __decorate([C(cc.Node)], q.prototype, "backgroundInner", undefined), __decorate([M], q);
        }(cc.Component);
      I.default = V, cc._RF.pop();
    }
  }
}
module.exports = FreeSpinEffectController;
