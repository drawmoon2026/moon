// module: SpaceBarInterrupter
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SpaceBarInterrupter(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "676cajSckdANomyB/3kyE3c", "SpaceBarInterrupter")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.spaceBarInterrupter = undefined;
    var x = require("BVFramework"),
      C = cc._decorator.ccclass,
      H = new (function (r) {
        function V() {
          var M = null !== r && r.apply(this, arguments) || this;
          return M.Hb = [], M.i = false, M.Rb = false, M.kb = false, M.Lb = false, M;
        }
        return __extends(V, r), V.prototype.init = function (M) {
          var q = this,
            m = x.getGameContext();
          m.emit("Game.RequestUIIdleState", undefined, function (D) {
            q.kb = D.response, q.subscribeEventInterrupter("default", undefined, q.kb ? M.spinButtonClickCallback : M.reelClickCallback), q.Eb = M, m.on("Game.BlockUI", q.jb, q), m.on("Game.InUIIdleState", q.Db, q), q.Ub = q.Wb.bind(q), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, q.Ub), m.on("Game.SkipEvent", q.Fb, q), m.on("Game.RequestReplay", q.xb, q), m.on("Game.ReplayQuit", q.Vb, q);
          });
        }, V.prototype.xb = function () {
          {
            this.Lb = true;
          }
        }, V.prototype.Vb = function () {
          {
            this.Lb = false;
          }
        }, V.prototype.subscribeEventInterrupter = function (M, q, m) {
          {
            for (var D = this.Hb, W = 0, k = D.length; W < k; W++) if (D[W].event === M) return;
            var z = {};
            z.event = M;
            z.node = q;
            z.callback = m;
            D.push(z);
          }
        }, V.prototype.unsubscribeEventInterrupter = function (M) {
          for (var q = this.Hb, m = 0, D = q.length; m < D; m++) if (q[m].event === M) {
            q.splice(m, 1);
            break;
          }
        }, V.prototype.pause = function () {
          this.Eb && (this.i || (cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), this.i = true));
        }, V.prototype.resume = function () {
          {
            this.Eb && this.i && (cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), this.i = false);
          }
        }, V.prototype.stop = function () {
          {
            var M = x.getGameContext();
            M.off("Game.InUIIdleState", this.Db, this), M.off("Game.BlockUI", this.jb, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.Ub), M.off("Game.SkipEvent", this.Fb, this), M.off("Game.RequestReplay", this.xb, this), M.off("Game.ReplayQuit", this.Vb, this), this.Eb = undefined, this.Ub = undefined, this.Hb.length = 0;
          }
        }, V.prototype.Wb = function (M) {
          {
            M.keyCode === cc.macro.KEY.space && this.Fb();
          }
        }, V.prototype.Fb = function () {
          for (var M = this.Hb, q = M.length - 1; q >= 0; q--) {
            var m = M[q],
              D = m.node;
            if (!D) {
              (W = m.callback) && W();
              break;
            }
            if (cc.isValid(D)) {
              {
                if (D.active) {
                  {
                    var W;
                    (W = m.callback) && W();
                    break;
                  }
                }
              }
            } else M.splice(q, 1);
          }
        }, V.prototype.Db = function (M) {
          this.kb = M.payload, this.zb();
        }, V.prototype.jb = function (M) {
          var q = M.payload;
          this.Rb = "boolean" == typeof q ? q : q.isBlocked, this.zb();
        }, V.prototype.zb = function () {
          var M = this.Rb,
            q = this.kb,
            m = this.Lb,
            D = this.Hb[0];
          if (m) D.callback = this.Eb.spinButtonClickCallback;else if (M) D.callback && (D.callback = undefined);else {
            {
              var W = this.Eb,
                k = W.spinButtonClickCallback,
                z = W.reelClickCallback;
              D.callback = q ? k : z;
            }
          }
        }, __decorate([C("SpaceBarInterrupter")], V);
      }(cc.Object))();
    exports.spaceBarInterrupter = H, cc._RF.pop();
  }
}
module.exports = SpaceBarInterrupter;
