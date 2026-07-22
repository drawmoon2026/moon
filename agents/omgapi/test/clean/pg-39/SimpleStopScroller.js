// module: SimpleStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SimpleStopScroller(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "b767cqex8hPhYPEWfkCcZ04", "SimpleStopScroller")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.scrollSpeed = 5040;
    C.decelerateSpeed = 4680;
    C.targetYFunc = undefined;
    C.bounceDistance = 60;
    C.bounceDuration = 0.15;
    C.bounceFactor = 1.84;
    var H = require("AbstractScroller"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.mixins,
      D = function (W) {
        function k(z, L) {
          this.delay = 0, this.rs = 0, this.as = 0, this.os = 0, this.hc = 0, this.ps = 0, this.cf = 0, this.ds = 0, this._s = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
          var v = "object" == typeof L;
          for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
          return this.delay = 0, this.rs = 0, this.as = 0, this.os = 0, this.hc = 0, this.ps = 0, this.cf = 0, this.ds = 0, this._s = 0, this.ns = false, this;
        }
        return __extends(k, W), k.prototype.onPlay = function () {
          this.emit("play", this), this.rs = 0, this.as = this.target.y, this.hc = this.as - this.scrollSpeed * this.delay, this.os = this.targetYFunc(this, this.hc), this.ps = this.os - this.bounceDistance, this.cf = this.hc - this.ps, this.ds = 2 * this.cf / (this.scrollSpeed + this.decelerateSpeed), this._s = (this.decelerateSpeed - this.scrollSpeed) / this.ds / 2, this.ns = false;
        }, k.prototype.onStop = function () {
          this.emit("stop", this);
        }, k.prototype.update = function (z) {
          if ((z = this.rs += z) <= this.delay) return this.target.y = this.as - this.scrollSpeed * z, true;
          z -= this.delay;
          var L = this.ds;
          if (z < L) return this.target.y = this.hc - this.scrollSpeed * z - this._s * z * z, void this.emit("decelerate", 1 - z / L, this);
          this.ns || (this.ns = true, this.emit("decelerate", 0, this)), z -= L;
          var v = this.bounceDuration;
          if (z < v) {
            var b = 1 - Math.pow(1 - z / v, this.bounceFactor);
            this.target.y = this.ps + this.bounceDistance * b;
          } else this.target.y = this.os, this.stop();
        }, __decorate([q, m(cc.EventTarget)], k);
      }(H.default);
    exports.default = D, cc._RF.pop();
  }
}
module.exports = SimpleStopScroller;
