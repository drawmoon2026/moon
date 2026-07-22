// module: WildMultiplySpineController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function WildMultiplySpineController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "a0cefYe/MJNprA3dL5AZyai", "WildMultiplySpineController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x,
      C = cc._decorator,
      H = C.ccclass,
      r = C.property;
    (function (M) {
      M[M.SHOW = 1] = "SHOW", M[M.HIDE = 2] = "HIDE";
    })(x || (x = {}));
    var V = function (M) {
      function q() {
        var m = null !== M && M.apply(this, arguments) || this;
        return m.multiplySpine = undefined, m.Nu = x.HIDE, m.fS = 0, m.dS = undefined, m;
      }
      return __extends(q, M), q.prototype.playWinMultiply = function (m, D) {
        if (x.SHOW !== this.Nu) {
          this.fS = m;
          var W = 'x' + this.fS + "_win";
          this.dS = D, this.multiplySpine.node.active = true, this.Nu = x.SHOW;
          var k = this.multiplySpine;
          k.clearTrack(0), k.setCompleteListener(this.vS.bind(this)), k.setAnimation(0, W, false);
        }
      }, q.prototype.vS = function () {
        var m = 'x' + this.fS + "_idle",
          D = this.multiplySpine;
        D.clearTrack(0), D.setCompleteListener(undefined), D.setAnimation(0, m, true);
        var W = this.dS;
        this.dS = undefined, W && W();
      }, q.prototype.playIdleMultiply = function () {
        if (x.SHOW !== this.Nu) {
          var m = 'x' + this.fS + "_idle";
          this.multiplySpine.node.active = true, this.Nu = x.SHOW;
          var D = this.multiplySpine;
          D.clearTrack(0), D.setAnimation(0, m, true);
        }
      }, q.prototype.stop = function () {
        if (this.multiplySpine.node.active) {
          var m = this.multiplySpine;
          m.clearTrack(0), m.setCompleteListener(undefined), m.setToSetupPose(), this.multiplySpine.node.active = false;
        }
        this.Nu = x.HIDE;
      }, q.prototype.destroy = function () {
        return this.node.destroy(), this.stop(), M.prototype.destroy.call(this);
      }, __decorate([r(sp.Skeleton)], q.prototype, "multiplySpine", undefined), __decorate([H], q);
    }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = WildMultiplySpineController;
