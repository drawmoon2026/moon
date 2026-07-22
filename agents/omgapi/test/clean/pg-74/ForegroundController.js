// module: ForegroundController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function ForegroundController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "9d8f03l/alMI4Ngb2GmjHq+", "ForegroundController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B,
      X,
      Z = F("GameConstant"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property;
    (function (N) {
      N[N.Playing = 0] = "Playing", N[N.Stopped = 1] = "Stopped";
    })(B || (B = {})), function (N) {
      N[N.Playing = 0] = "Playing", N[N.Stopped = 1] = "Stopped";
    }(X || (X = {}));
    var V = function (N) {
      {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.bonusNode = undefined, f.topA = undefined, f.topB = undefined, f.topC = undefined, f.bottom = undefined, f.topNormalA = undefined, f.topNormalB = undefined, f.topNormalC = undefined, f.topBonusA = undefined, f.topBonusB = undefined, f.topBonusC = undefined, f.bottomNormal = undefined, f.bottomBonus = undefined, f.bonusParticleAnim = undefined, f.I = undefined, f.X = undefined, f;
        }
        return __extends(q, N), q.prototype.switchBackground = function (f) {
          switch (f) {
            case Z.TransitionState.FREE_SPIN:
            case Z.TransitionState.FREE_SPIN_RESPIN:
              this.topA.spriteFrame = this.topBonusA, this.topB.spriteFrame = this.topBonusB, this.topC.spriteFrame = this.topBonusC, this.bottom.spriteFrame = this.bottomBonus, this.bonusNode.active = true, this.X !== X.Playing && (this.bonusParticleAnim.play(), this.X = X.Playing);
              break;
            case Z.TransitionState.NORMAL:
            case Z.TransitionState.RESPIN:
              this.topA.spriteFrame = this.topNormalA, this.topB.spriteFrame = this.topNormalB, this.topC.spriteFrame = this.topNormalC, this.bottom.spriteFrame = this.bottomNormal, this.X !== X.Stopped && (this.bonusParticleAnim.stop(), this.X = X.Stopped), this.bonusNode.active = false;
          }
        }, q.prototype.playContinueWinEffect = function () {
          this.I !== B.Playing && (this.I = B.Playing);
        }, q.prototype.stopContinueWinEffect = function () {
          this.I !== B.Stopped && (this.I = B.Stopped);
        }, __decorate([C(cc.Node)], q.prototype, "bonusNode", undefined), __decorate([C(cc.Sprite)], q.prototype, "topA", undefined), __decorate([C(cc.Sprite)], q.prototype, "topB", undefined), __decorate([C(cc.Sprite)], q.prototype, "topC", undefined), __decorate([C(cc.Sprite)], q.prototype, "bottom", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topNormalA", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topNormalB", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topNormalC", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topBonusA", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topBonusB", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "topBonusC", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "bottomNormal", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "bottomBonus", undefined), __decorate([C(cc.Animation)], q.prototype, "bonusParticleAnim", undefined), __decorate([M], q);
      }
    }(cc.Component);
    I.default = V, cc._RF.pop();
  }
}
module.exports = ForegroundController;
