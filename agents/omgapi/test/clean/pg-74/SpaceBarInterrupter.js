// module: SpaceBarInterrupter
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function SpaceBarInterrupter(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "676cajSckdANomyB/3kyE3c", "SpaceBarInterrupter")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.spaceBarInterrupter = undefined;
    var m = require("BVFramework"),
      B = cc._decorator.ccclass,
      X = new (function (Z) {
        {
          function T() {
            var M = null !== Z && Z.apply(this, arguments) || this;
            return M.Tp = [], M.Ep = false, M.Np = false, M.Gp = false, M.kp = false, M;
          }
          return __extends(T, Z), T.prototype.init = function (M) {
            var C = this,
              V = m.getGameContext();
            V.emit("Game.RequestUIIdleState", undefined, function (N) {
              C.Gp = N.response, C.subscribeEventInterrupter("default", undefined, C.Gp ? M.spinButtonClickCallback : M.reelClickCallback), C.Rp = M, V.on("Game.BlockUI", C.jp, C), V.on("Game.InUIIdleState", C.Lp, C), C.Pp = C.Dp.bind(C), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, C.Pp), V.on("Game.SkipEvent", C.Up, C), V.on("Game.RequestReplay", C.xp, C), V.on("Game.ReplayQuit", C.Fp, C);
            });
          }, T.prototype.xp = function () {
            this.kp = true;
          }, T.prototype.Fp = function () {
            {
              this.kp = false;
            }
          }, T.prototype.subscribeEventInterrupter = function (M, C, V) {
            for (var N = this.Tp, q = 0, f = N.length; q < f; q++) if (N[q].event === M) return;
            var h = {};
            h.event = M;
            h.node = C;
            h.callback = V;
            N.push(h);
          }, T.prototype.unsubscribeEventInterrupter = function (M) {
            for (var C = this.Tp, V = 0, N = C.length; V < N; V++) if (C[V].event === M) {
              {
                C.splice(V, 1);
                break;
              }
            }
          }, T.prototype.pause = function () {
            {
              this.Rp && (this.Ep || (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Pp), this.Ep = true));
            }
          }, T.prototype.resume = function () {
            {
              this.Rp && this.Ep && (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.Pp), this.Ep = false);
            }
          }, T.prototype.stop = function () {
            var M = m.getGameContext();
            M.off("Game.InUIIdleState", this.Lp, this), M.off("Game.BlockUI", this.jp, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Pp), M.off("Game.SkipEvent", this.Up, this), M.off("Game.RequestReplay", this.xp, this), M.off("Game.ReplayQuit", this.Fp, this), this.Rp = undefined, this.Pp = undefined, this.Tp.length = 0;
          }, T.prototype.Dp = function (M) {
            {
              M.keyCode === cc.macro.KEY.space && this.Up();
            }
          }, T.prototype.Up = function () {
            for (var M = this.Tp, C = M.length - 1; C >= 0; C--) {
              var V = M[C],
                N = V.node;
              if (!N) {
                {
                  (q = V.callback) && q();
                  break;
                }
              }
              if (cc.isValid(N)) {
                if (N.active) {
                  var q;
                  (q = V.callback) && q();
                  break;
                }
              } else M.splice(C, 1);
            }
          }, T.prototype.Lp = function (M) {
            {
              this.Gp = M.payload, this.Wp();
            }
          }, T.prototype.jp = function (M) {
            var C = M.payload;
            this.Np = "boolean" == typeof C ? C : C.isBlocked, this.Wp();
          }, T.prototype.Wp = function () {
            {
              var M = this.Np,
                C = this.Gp,
                V = this.kp,
                N = this.Tp[0];
              if (V) N.callback = this.Rp.spinButtonClickCallback;else if (M) N.callback && (N.callback = undefined);else {
                var q = this.Rp,
                  f = q.spinButtonClickCallback,
                  h = q.reelClickCallback;
                N.callback = C ? f : h;
              }
            }
          }, __decorate([B("SpaceBarInterrupter")], T);
        }
      }(cc.Object))();
    exports.spaceBarInterrupter = X, cc._RF.pop();
  }
}
module.exports = SpaceBarInterrupter;
