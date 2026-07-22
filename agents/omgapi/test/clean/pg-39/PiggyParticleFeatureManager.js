// module: PiggyParticleFeatureManager
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PiggyParticleFeatureManager(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "43303FCKyBLAJstGmzCcZ8w", "PiggyParticleFeatureManager")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("PiggyParticleFeatureController"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.piggyParticleFeatureController = undefined, m.leftParticleAnimation = undefined, m.rightParticleAnimation = undefined, m.leftBParticleAnimation = undefined, m.rightBParticleAnimation = undefined, m.featureParticle = undefined, m.onScrollerPlayCallback = undefined, m;
        }
        return __extends(q, M), q.prototype.play = function (m) {
          this.node.active = true, this.onScrollerPlayCallback = m, this.piggyParticleFeatureController.setScrollerShowCallback(this.Il.bind(this)), this.leftParticleAnimation.play(), this.rightParticleAnimation.play();
        }, q.prototype.stop = function () {
          this.leftParticleAnimation.stop(), this.rightParticleAnimation.stop(), this.leftBParticleAnimation.stop(), this.rightBParticleAnimation.stop(), this.featureParticle.stopSystem(), this.node.active = false;
        }, q.prototype.Gl = function () {
          this.leftBParticleAnimation.play(), this.rightBParticleAnimation.play(), this.featureParticle.resetSystem();
        }, q.prototype.Il = function () {
          var m = this.onScrollerPlayCallback;
          this.onScrollerPlayCallback = undefined, m && m(), this.Gl();
        }, __decorate([r(x.default)], q.prototype, "piggyParticleFeatureController", undefined), __decorate([r(cc.Animation)], q.prototype, "leftParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "rightParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "leftBParticleAnimation", undefined), __decorate([r(cc.Animation)], q.prototype, "rightBParticleAnimation", undefined), __decorate([r(cc.ParticleSystem)], q.prototype, "featureParticle", undefined), __decorate([H], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = PiggyParticleFeatureManager;
