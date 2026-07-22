// module: FastStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, B)
function FastStopScroller(require, exports, B) {
  'use strict';

  if (!cc._RF.push(exports, "e2461hkKoFHtovzKm7oIqPe", "FastStopScroller")) {
    var x = {};
    x.value = true;
    Object.defineProperty(B, "__esModule", x);
    var C = {};
    C.scrollSpeed = 5040;
    C.targetYFunc = undefined;
    C.stopDuration = 0.25;
    var H = require("AbstractScroller"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.mixins,
      D = function (W) {
        function k(z, L) {
          this.rs = 0, this.as = 0, this.os = 0, this._s = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
          var v = "object" == typeof L;
          for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
          return this.rs = 0, this.as = 0, this.os = 0, this._s = 0, this.ns = false, this;
        }
        return __extends(k, W), k.prototype.onPlay = function () {
          this.emit("play", this), this.rs = 0, this.as = this.target.y, this.os = this.targetYFunc(this, this.as), this._s = (this.as - this.os - this.scrollSpeed * this.stopDuration) / (this.stopDuration * this.stopDuration), this.ns = false;
        }, k.prototype.onStop = function () {
          this.emit("stop", this);
        }, k.prototype.update = function (z) {
          if ((z = this.rs += z) < this.stopDuration) return this.target.y = this.as - this.scrollSpeed * z - this._s * z * z, void this.emit("decelerate", 1 - z / this.stopDuration, this);
          this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.stop();
        }, __decorate([q, m(cc.EventTarget)], k);
      }(H.default);
    B.default = D, cc._RF.pop();
  }
}
module.exports = FastStopScroller;
