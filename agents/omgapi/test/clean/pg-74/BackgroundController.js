// module: BackgroundController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function BackgroundController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "6a6d38oiGtCUZaz44KgwIjH", "BackgroundController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B,
      X,
      Z = require("GameConstant"),
      T = cc._decorator,
      M = T.ccclass,
      C = T.property;
    (function (N) {
      {
        N[N.Playing = 0] = "Playing", N[N.Stopped = 1] = "Stopped";
      }
    })(B || (B = {})), function (N) {
      N[N.Playing = 0] = "Playing", N[N.Stopped = 1] = "Stopped";
    }(X || (X = {}));
    var V = function (N) {
      {
        function q() {
          {
            var f = null !== N && N.apply(this, arguments) || this;
            return f.q = undefined, f.background = undefined, f.backgroundNormal = undefined, f.backgroundBonus = undefined, f.bonusNode = undefined, f.normalNode = undefined, f.bonusParticleAnim = undefined, f.darkReel = undefined, f.darkReelHolder = undefined, f.darkReelNodes = [], f.darkSideNodes = [], f.fastSpinGlow = undefined, f.Y = undefined, f.Z = undefined, f.I = undefined, f.X = undefined, f;
          }
        }
        return __extends(q, N), q.prototype.init = function (f, g) {
          this.Y = f, this.Z = g;
        }, q.prototype.switchBackground = function (f) {
          switch (f) {
            case Z.TransitionState.FREE_SPIN:
            case Z.TransitionState.FREE_SPIN_RESPIN:
              this.background.spriteFrame = this.backgroundBonus, this.bonusNode.active = true, this.normalNode.active = false, this.X !== X.Playing && (this.bonusParticleAnim.play(), this.X = X.Playing);
              break;
            case Z.TransitionState.NORMAL:
            case Z.TransitionState.RESPIN:
              this.background.spriteFrame = this.backgroundNormal, this.X !== X.Stopped && (this.bonusParticleAnim.stop(), this.X = X.Stopped), this.bonusNode.active = false, this.normalNode.active = true;
          }
        }, q.prototype.enableFullDarkModeExcept = function (f) {
          this.$();
          for (var g = this.darkReelNodes, l = 0; l < g.length; l++) l === f ? (this.darkReelNodes[l].active = false, this.darkReelNodes[l].runAction(cc.fadeTo(0.2, 0))) : (this.darkReelNodes[l].active = true, this.darkReelNodes[l].runAction(cc.fadeTo(0.2, 150)));
          this.darkSideNodes.forEach(function (K) {
            K.active = true, K.stopAllActions(), K.runAction(cc.fadeTo(0.2, 150));
          });
        }, q.prototype.enableFullDarkMode = function () {
          {
            this.tt(), this.it(true);
          }
        }, q.prototype.enableDarkReel = function (f) {
          this.tt(), this.darkSideNodes[0].active = true, this.darkSideNodes[0].runAction(cc.fadeTo(0.2, 150));
          for (var g = 0; g <= f; g++) this.darkReelNodes[g].active = true, this.darkReelNodes[g].runAction(cc.fadeTo(0.2, 150));
        }, q.prototype.disableDarkMode = function (f) {
          {
            var g = this.darkReelNodes.concat(this.darkSideNodes);
            f ? g.forEach(function (l) {
              l.opacity = 0, l.active = false;
            }) : g.forEach(function (l) {
              l.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {
                l.active = false;
              })));
            });
          }
        }, q.prototype.playFastSpinEffect = function () {
          {
            this.I !== B.Playing && (this.I = B.Playing, this.fastSpinGlow.active = true, this.fastSpinGlow.stopAllActions(), this.fastSpinGlow.opacity = 0, this.fastSpinGlow.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(0.2).easing(cc.easeIn(2)), cc.fadeTo(0.2, 176).easing(cc.easeIn(2))))));
          }
        }, q.prototype.stopFastSpinEffect = function () {
          {
            var f = this;
            this.I !== B.Stopped && (this.I = B.Stopped, this.fastSpinGlow.stopAllActions(), this.fastSpinGlow.runAction(cc.sequence(cc.fadeOut(1).easing(cc.easeInOut(2)), cc.callFunc(function () {
              f.fastSpinGlow.active = false;
            }))));
          }
        }, q.prototype.tt = function () {
          this.darkReel.parent = this.darkReelHolder, this.darkReel.setPosition(cc.v2(0, 0));
        }, q.prototype.$ = function () {
          {
            this.darkReel.parent = this.Z, this.darkReel.setPosition(cc.v2(0, 0));
          }
        }, q.prototype.it = function (f) {
          var g = f ? 150 : 0;
          this.darkReelNodes.forEach(function (l) {
            l.active = f, l.stopAllActions(), l.runAction(cc.fadeTo(0.2, g));
          }), this.darkSideNodes.forEach(function (l) {
            l.active = f, l.stopAllActions(), l.runAction(cc.fadeTo(0.2, g));
          });
        }, q.prototype.et = function () {
          var f = this.q;
          this.q = undefined, f && f();
        }, q.prototype.stop = function () {}, q.prototype.destroy = function () {
          return this.stop(), this.node.destroy(), N.prototype.destroy.call(this);
        }, __decorate([C(cc.Sprite)], q.prototype, "background", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "backgroundNormal", undefined), __decorate([C(cc.SpriteFrame)], q.prototype, "backgroundBonus", undefined), __decorate([C(cc.Node)], q.prototype, "bonusNode", undefined), __decorate([C(cc.Node)], q.prototype, "normalNode", undefined), __decorate([C(cc.Animation)], q.prototype, "bonusParticleAnim", undefined), __decorate([C(cc.Node)], q.prototype, "darkReel", undefined), __decorate([C(cc.Node)], q.prototype, "darkReelHolder", undefined), __decorate([C([cc.Node])], q.prototype, "darkReelNodes", undefined), __decorate([C([cc.Node])], q.prototype, "darkSideNodes", undefined), __decorate([C(cc.Node)], q.prototype, "fastSpinGlow", undefined), __decorate([M], q);
      }
    }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = BackgroundController;
