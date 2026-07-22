// module: MultiplierItem
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MultiplierItem(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "ef976mKHIdI+pQp55gx+bwl", "MultiplierItem")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("GameConstant"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.normal_multi_sprite = undefined, N.free_spin_multi_sprite = undefined, N.normal_active = undefined, N.normal_inactive = undefined, N.free_spin_before_inactive = undefined, N.free_spin_active = undefined, N.free_spin_inactive = undefined, N.scatter_glow_a = undefined, N.bonus_glow_c = undefined, N.multiplierVfxB = undefined, N.yo = B.TransitionState.NORMAL, N;
        }
        return __extends(V, C), V.prototype.setActive = function (N) {
          switch (undefined === N && (N = true), this.yo) {
            case B.TransitionState.FREE_SPIN:
            case B.TransitionState.FREE_SPIN_RESPIN:
              this.normal_multi_sprite.node.active = false, this.free_spin_multi_sprite.node.active = true, this.free_spin_multi_sprite.spriteFrame = this.free_spin_active;
              break;
            case B.TransitionState.NORMAL:
            case B.TransitionState.RESPIN:
            default:
              this.free_spin_multi_sprite.node.active = false, this.normal_multi_sprite.node.active = true, this.normal_multi_sprite.spriteFrame = this.normal_active;
          }
          this._l(N);
        }, V.prototype.setInactive = function () {
          switch (this.Rt(), this.yo) {
            case B.TransitionState.FREE_SPIN:
            case B.TransitionState.FREE_SPIN_RESPIN:
              this.normal_multi_sprite.node.active = false, this.free_spin_multi_sprite.node.active = true, this.free_spin_multi_sprite.spriteFrame = this.free_spin_inactive;
              break;
            case B.TransitionState.NORMAL:
            case B.TransitionState.RESPIN:
            default:
              this.free_spin_multi_sprite.node.active = false, this.normal_multi_sprite.node.active = true, this.normal_multi_sprite.spriteFrame = this.normal_inactive;
          }
        }, V.prototype.changeToFreeSpinInactive = function () {
          this.normal_multi_sprite.spriteFrame = this.free_spin_before_inactive;
        }, V.prototype.switchSpriteFrame = function (N, q, f) {
          var g = this;
          switch (undefined === f && (f = false), this.Rt(), this.yo = N, this.scatter_glow_a.stopAllActions(), this.bonus_glow_c.stopAllActions(), this.free_spin_multi_sprite.node.stopAllActions(), this.yo) {
            case B.TransitionState.FREE_SPIN:
            case B.TransitionState.FREE_SPIN_RESPIN:
              this.pl(), f ? (this.free_spin_multi_sprite.node.setScale(0.9), this.free_spin_multi_sprite.node.active = true, this.free_spin_multi_sprite.spriteFrame = this.free_spin_inactive, this.free_spin_multi_sprite.node.opacity = 255, this.normal_multi_sprite.node.active = false, q && q()) : (this.changeToFreeSpinInactive(), this.free_spin_multi_sprite.node.setScale(1.05), this.free_spin_multi_sprite.node.active = true, this.free_spin_multi_sprite.spriteFrame = this.free_spin_active, this.free_spin_multi_sprite.node.runAction(cc.sequence(cc.spawn(cc.fadeTo(0.2, 0), cc.scaleTo(0.2, 0.9)), cc.callFunc(function () {
                {
                  g.free_spin_multi_sprite.spriteFrame = g.free_spin_inactive, g.free_spin_multi_sprite.node.opacity = 255, g.normal_multi_sprite.node.active = false, q && q();
                }
              }))), this.scatter_glow_a.runAction(cc.sequence(cc.fadeTo(0.2, 255), cc.fadeTo(0.1, 0))), this.bonus_glow_c.runAction(cc.sequence(cc.fadeTo(0.2, 255), cc.fadeTo(0.1, 0))));
              break;
            case B.TransitionState.NORMAL:
            case B.TransitionState.RESPIN:
            default:
              this.free_spin_multi_sprite.node.active = false, this.normal_multi_sprite.node.active = true, this.normal_multi_sprite.spriteFrame = this.normal_inactive, q && q();
          }
        }, V.prototype._l = function (N) {
          N ? (this.node.stopAllActions(), this.node.runAction(cc.spawn(cc.fadeTo(0.2, 255), cc.sequence(cc.scaleTo(0.1, 1.05), cc.scaleTo(0.1, 0.9))))) : this.Rt();
        }, V.prototype.pl = function () {
          this.multiplierVfxB.stop(), this.multiplierVfxB.setCurrentTime(0), this.multiplierVfxB.play();
        }, V.prototype.Rt = function () {
          {
            this.node.stopAllActions(), this.node.setScale(0.9), this.node.opacity = 255;
          }
        }, __decorate([T(cc.Sprite)], V.prototype, "normal_multi_sprite", undefined), __decorate([T(cc.Sprite)], V.prototype, "free_spin_multi_sprite", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "normal_active", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "normal_inactive", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "free_spin_before_inactive", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "free_spin_active", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "free_spin_inactive", undefined), __decorate([T(cc.Node)], V.prototype, "scatter_glow_a", undefined), __decorate([T(cc.Node)], V.prototype, "bonus_glow_c", undefined), __decorate([T(cc.Animation)], V.prototype, "multiplierVfxB", undefined), __decorate([Z], V);
      }(cc.Component);
    I.default = M, cc._RF.pop();
  }
}
module.exports = MultiplierItem;
