// module: WildBounceScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function WildBounceScroller(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4ab15AknuJJ3L1MrNZXk77k", "WildBounceScroller")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("SimpleStopScroller"),
        C = cc._decorator.ccclass,
        H = function (r) {
          {
            function V(M, q) {
              {
                var m = r.call(this, M, q) || this;
                return m.es = false, m.ss = 0.3, m;
              }
            }
            return __extends(V, r), V.prototype.onStop = function () {
              {
                r.prototype.onStop.call(this);
              }
            }, V.prototype.update = function (M) {
              {
                if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, void this.stop();
                if ((M = this.rs += M) <= this.delay) return this.target.y = this.as - this.scrollSpeed * M, true;
                M -= this.delay;
                var q = this.ds;
                if (M < q) return this.target.y = this.hc - this.scrollSpeed * M - this._s * M * M, void this.emit("decelerate", 1 - M / q, this);
                this.ns || (this.ns = true, this.emit("decelerate", 0, this)), M -= q;
                var m = this.bounceDuration;
                if (M < m) this.target.y = this.ps - this.bounceDistance * Math.sin(10 * M);else {
                  M -= m;
                  var D = this.ss;
                  if (M < D) {
                    {
                      var W = cc.misc.lerp(-30, 0, M / D);
                      this.target.y = this.os - W * Math.sin(30 * M);
                    }
                  } else this.target.y = this.os, this.stop();
                }
              }
            }, __decorate([C], V);
          }
        }(x.default);
      exports.default = H, cc._RF.pop();
    }
  }
}
module.exports = WildBounceScroller;
