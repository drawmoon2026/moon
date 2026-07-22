// module: RowShiningController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function RowShiningController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "1b37egCIUVF4qGKi0vUjP/C", "RowShiningController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("Utils"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          {
            var N = null !== C && C.apply(this, arguments) || this;
            return N.dragonGlow = undefined, N.middleDragonGlow = undefined, N.sideDragonGlow = undefined, N.dragonGlow = undefined, N.rectGlow = undefined, N.leftParticle = undefined, N.rightParticle = undefined, N.Ed = 0, N;
          }
        }
        return __extends(V, C), V.prototype.playParticle = function () {
          this.node.getComponent(cc.Animation).playAdditive("particle_loop"), this.leftParticle.runAction(cc.fadeIn(0.2)), this.rightParticle.runAction(cc.fadeIn(0.2));
        }, V.prototype.fadeInDragonGlow = function () {
          this.sideDragonGlow.runAction(cc.fadeIn(0.2)), this.middleDragonGlow.runAction(cc.fadeIn(0.2));
        }, V.prototype.fadeInRectGlow = function () {
          {
            this.middleDragonGlow.runAction(cc.fadeOut(0.5)), this.update = this.Nd;
          }
        }, V.prototype.fadeOutAll = function () {
          this.update = this.Gd, this.sideDragonGlow.runAction(cc.fadeOut(0.2)), this.leftParticle.runAction(cc.fadeOut(0.2)), this.rightParticle.runAction(cc.fadeOut(0.2)), B.delayCallback(0.2)(this.kd.bind(this));
        }, V.prototype.kd = function () {
          this.node.getComponent(cc.Animation).stop("particle_loop");
        }, V.prototype.Nd = function (N) {
          this.Ed += N;
          var q = cc.misc.lerp(0, 255, this.Ed / 0.2);
          q >= 255 ? (q = 255, this.rectGlow.opacity = q, this.rectGlow.color = new cc.Color(q, q, q), this.Ed = 0, this.update = B.emptyFunc, this.playParticle()) : (this.rectGlow.opacity = q, this.rectGlow.color = new cc.Color(q, q, q));
        }, V.prototype.Gd = function (N) {
          this.Ed += N;
          var q = cc.misc.lerp(255, 0, this.Ed / 0.2);
          q <= 0 ? (q = 0, this.rectGlow.opacity = q, this.rectGlow.color = new cc.Color(q, q, q), this.Ed = 0, this.update = B.emptyFunc) : (this.rectGlow.opacity = q, this.rectGlow.color = new cc.Color(q, q, q));
        }, V.prototype.update = function () {}, __decorate([T(cc.Node)], V.prototype, "dragonGlow", undefined), __decorate([T(cc.Node)], V.prototype, "middleDragonGlow", undefined), __decorate([T(cc.Node)], V.prototype, "sideDragonGlow", undefined), __decorate([T(cc.Node)], V.prototype, "dragonGlow", undefined), __decorate([T(cc.Node)], V.prototype, "rectGlow", undefined), __decorate([T(cc.Node)], V.prototype, "leftParticle", undefined), __decorate([T(cc.Node)], V.prototype, "rightParticle", undefined), __decorate([Z], V);
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = RowShiningController;
