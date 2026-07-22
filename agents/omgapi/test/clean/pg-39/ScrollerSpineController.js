// module: ScrollerSpineController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function ScrollerSpineController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "86e11YzdrZBA4AC+Stl64c5", "ScrollerSpineController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x,
        C = cc._decorator,
        H = C.ccclass,
        r = C.property;
      (function (M) {
        M[M.IDLE = 0] = "IDLE", M[M.HIDE = 1] = "HIDE", M[M.SHOW = 2] = "SHOW";
      })(x || (x = {}));
      var V = function (M) {
        {
          function q() {
            var m = null !== M && M.apply(this, arguments) || this;
            return m.scrollerSpine = undefined, m.Nu = x.HIDE, m;
          }
          return __extends(q, M), q.prototype.playLeftExit = function () {
            if (this.Nu !== x.HIDE) {
              {
                var m = this.scrollerSpine;
                m.node.active || (m.node.active = true), this.Nu = x.HIDE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "left_exit", false);
              }
            }
          }, q.prototype.playLeftIdle = function () {
            if (this.Nu !== x.IDLE) {
              var m = this.scrollerSpine;
              m.node.active || (m.node.active = true), this.Nu = x.IDLE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "left_idle", true);
            }
          }, q.prototype.playLeftSpawn = function () {
            if (this.Nu !== x.SHOW) {
              {
                var m = this.scrollerSpine;
                m.node.active || (m.node.active = true), this.Nu = x.SHOW, m.clearTrack(0), m.setCompleteListener(this.playLeftIdle.bind(this)), m.setAnimation(0, "left_spawn", false);
              }
            }
          }, q.prototype.playRightExit = function () {
            {
              if (this.Nu !== x.HIDE) {
                var m = this.scrollerSpine;
                m.node.active || (m.node.active = true), this.Nu = x.HIDE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "right_exit", false);
              }
            }
          }, q.prototype.playRightIdle = function () {
            {
              if (this.Nu !== x.IDLE) {
                var m = this.scrollerSpine;
                m.node.active || (m.node.active = true), this.Nu = x.IDLE, m.clearTrack(0), m.setCompleteListener(undefined), m.setAnimation(0, "right_idle", true);
              }
            }
          }, q.prototype.playRightSpawn = function () {
            if (this.Nu !== x.SHOW) {
              var m = this.scrollerSpine;
              m.node.active || (m.node.active = true), this.Nu = x.SHOW, m.clearTrack(0), m.setCompleteListener(this.playRightIdle.bind(this)), m.setAnimation(0, "right_spawn", false);
            }
          }, __decorate([r(sp.Skeleton)], q.prototype, "scrollerSpine", undefined), __decorate([H], q);
        }
      }(cc.Component);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = ScrollerSpineController;
