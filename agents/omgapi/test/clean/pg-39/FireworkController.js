// module: FireworkController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function FireworkController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "181b8bLdcZM5qUMt8O137AJ", "FireworkController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("AudioManager"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.firework01Node = undefined, m.firework02Node = undefined, m.animName = '', m.startDelayTime = 0, m.minDelayTime = 0, m.maxDelayTime = 0.5, m.randomPosRadiusX = 500, m.randomPosRadiusY = 10000, m.xs = undefined, m.Vs = false, m.zs = undefined, m;
        }
        return __extends(q, M), Object.defineProperty(q.prototype, "simpleAnimationController", {
          'get': function () {
            {
              return undefined === this.zs && (this.zs = this.firework01Node.getComponent("SimpleAnimationController")), this.zs;
            }
          },
          'enumerable': false,
          'configurable': true
        }), q.prototype.cacheOriginalPosition = function () {
          this.xs = this.node.position;
        }, q.prototype.play = function () {
          {
            this.Vs = false, this.scheduleOnce(this.Ks, this.startDelayTime), x.GeneralAudioPool.bgm_bigwin_firework.play();
          }
        }, q.prototype.stop = function () {
          this.Vs = true, this.unschedule(this.Ks);
        }, q.prototype.forceStop = function () {
          this.Vs = true, this.simpleAnimationController.stop(), this.unschedule(this.Ks);
        }, q.prototype.Ks = function () {
          var m = 2 * (Math.random() - 0.5) * this.randomPosRadiusX,
            D = 2 * (Math.random() - 0.5) * this.randomPosRadiusY;
          x.GeneralAudioPool.bgm_bigwin_firework.isPlaying() || x.GeneralAudioPool.bgm_bigwin_firework.play();
          var W = cc.v2(this.xs.x + m, this.xs.y + D);
          this.node.setPosition(W), this.simpleAnimationController.play(this.animName, this.qs.bind(this));
        }, q.prototype.qs = function () {
          if (this.Vs) this.simpleAnimationController.stop();else {
            {
              var m = this.Js(this.minDelayTime, this.maxDelayTime);
              this.scheduleOnce(this.Ks, m);
            }
          }
        }, q.prototype.Js = function (m, D) {
          return Math.floor(Math.random() * Math.floor(m) + D);
        }, q.prototype.destroy = function () {
          return this.stop(), M.prototype.destroy.call(this);
        }, __decorate([r(cc.Node)], q.prototype, "firework01Node", undefined), __decorate([r(cc.Node)], q.prototype, "firework02Node", undefined), __decorate([r(cc.String)], q.prototype, "animName", undefined), __decorate([r(cc.Float)], q.prototype, "startDelayTime", undefined), __decorate([r(cc.Float)], q.prototype, "minDelayTime", undefined), __decorate([r(cc.Float)], q.prototype, "maxDelayTime", undefined), __decorate([r(cc.Integer)], q.prototype, "randomPosRadiusX", undefined), __decorate([r(cc.Integer)], q.prototype, "randomPosRadiusY", undefined), __decorate([H], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = FireworkController;
