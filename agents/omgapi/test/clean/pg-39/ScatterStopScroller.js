// module: ScatterStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function ScatterStopScroller(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "8240bXvW/lM2YNITdUUwGEO", "ScatterStopScroller")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.scrollSpeed = 5040;
    C.scatterScrollSpeed = 5040;
    C.decelerateSpeed = 4680;
    C.targetYFunc = undefined;
    C.bounceDistance = 60;
    C.bounceDuration = 0.15;
    C.bounceFactor = 1.84;
    C.columnIndex = undefined;
    var H = require("AbstractScroller"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.mixins,
      D = function (W) {
        function k(z, L) {
          cc.EventTarget.call(this), this.target = z;
          var v = "object" == typeof L;
          for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
          return this.delay = 0, this.scatterDelay = 0, this.ef = 0, this.nf = 0, this.rs = 0, this.as = 0, this.os = 0, this.ls = 0, this.vs = 0, this.ps = 0, this.cf = 0, this.ds = 0, this.us = 0, this._s = 0, this.ns = false, this.es = false, this;
        }
        return __extends(k, W), k.prototype.interrupt = function () {
          this.es = true;
        }, k.prototype.resetInterrupt = function () {
          this.es = false;
        }, k.prototype.onPlay = function () {
          this.emit("play", this), this.rs = 0, this.as = this.target.y, this.ls = this.as - this.scrollSpeed * this.scatterDelay, this.us = this.delay - this.scatterDelay, this.fs = (this.scatterScrollSpeed - this.scrollSpeed) / this.us, this.vs = this.ls - (this.scrollSpeed * this.us + this.fs * this.us * this.us / 2), this.os = this.targetYFunc(this, this.vs), this.ps = this.os - this.bounceDistance, this.cf = this.vs - this.ps, this.ds = 2 * this.cf / (this.scatterScrollSpeed + this.decelerateSpeed), this._s = (this.decelerateSpeed - this.scatterScrollSpeed) / this.ds, this.ns = false, this.hs = false;
        }, k.prototype.onStop = function () {
          this.emit("stop", this);
        }, k.prototype.getScrollDuration = function () {
          return this.us + this.ds;
        }, k.prototype.update = function (z) {
          if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.hs && (this.hs = false, this.emit("scatter_off", {
            'columnIndex': this.columnIndex,
            'isForceStop': true
          }, this)), void this.stop();
          if ((z = this.rs += z) <= this.scatterDelay) return this.target.y = this.as - this.scrollSpeed * z, true;
          z -= this.scatterDelay;
          var L = this.us;
          if (z < L) return this.hs || (this.hs = true, this.emit("scatter_on", {
            'duration': L,
            'columnIndex': this.columnIndex
          }, this)), void (this.target.y = this.ls - this.scrollSpeed * z - this.fs * z * z / 2);
          z -= L;
          var v = this.ds;
          if (z < v) return this.target.y = this.vs - this.scatterScrollSpeed * z - this._s * z * z / 2, void this.emit("decelerate", 1 - z / v, this);
          this.ns || (this.ns = true, this.emit("decelerate", 0, this)), z -= v;
          var b = this.bounceDuration;
          if (z < b) {
            var U = 1 - Math.pow(1 - z / b, this.bounceFactor);
            this.target.y = this.ps + this.bounceDistance * U;
          } else this.hs && (this.hs = false, this.emit("scatter_off", {
            'columnIndex': this.columnIndex,
            'isForceStop': false
          }, this)), this.target.y = this.os, this.stop();
        }, __decorate([q, m(cc.EventTarget)], k);
      }(H.default);
    exports.default = D, cc._RF.pop();
  }
}
module.exports = ScatterStopScroller;
