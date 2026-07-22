// module: InterruptableScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function InterruptableScroller(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "ee1f5OrRUNIkJKtuzbwXtSX", "InterruptableScroller")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("SimpleStopScroller"),
      C = cc._decorator.ccclass,
      H = function (r) {
        function V(M, q) {
          var m = r.call(this, M, q) || this;
          return m.es = false, m;
        }
        return __extends(V, r), V.prototype.onStop = function () {
          r.prototype.onStop.call(this);
        }, V.prototype.interrupt = function () {
          this.es = true;
        }, V.prototype.resetInterrupt = function () {
          this.es = false;
        }, V.prototype.update = function (M) {
          if (M = this.rs += M, this.es && M > this.delay) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, void this.stop();
          if (M <= this.delay) return this.target.y = this.as - this.scrollSpeed * M, true;
          M -= this.delay;
          var q = this.ds;
          if (M < q) return this.target.y = this.hc - this.scrollSpeed * M - this._s * M * M, void this.emit("decelerate", 0, this);
          this.ns || (this.ns = true, this.emit("decelerate", 0, this)), M -= q;
          var m = this.bounceDuration;
          if (M < m) {
            var D = cc.misc.lerp(30, 0, M / m);
            this.target.y = this.os - D * Math.sin(30 * M);
          } else this.target.y = this.os, this.stop();
        }, __decorate([C], V);
      }(x.default);
    exports.default = H, cc._RF.pop();
  }
}
module.exports = InterruptableScroller;
