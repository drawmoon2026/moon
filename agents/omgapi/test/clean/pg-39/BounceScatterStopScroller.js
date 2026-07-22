// module: BounceScatterStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function BounceScatterStopScroller(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "537c3GakcJD1on4G3IvGOk+", "BounceScatterStopScroller")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("ScatterStopScroller"),
        C = cc._decorator,
        H = C.ccclass,
        r = C.mixins,
        V = function (M) {
          function q(m, D) {
            {
              var W = M.call(this, m, D) || this;
              return cc.EventTarget.call(W), W.ss = 1, W;
            }
          }
          return __extends(q, M), q.prototype.update = function (m) {
            if (this.es) return this.ns || (this.ns = true, this.emit("decelerate", 0, this)), this.target.y = this.os, this.hs && (this.hs = false, this.emit("scatter_off", {
              'columnIndex': this.columnIndex,
              'isForceStop': true
            }, this)), void this.stop();
            if ((m = this.rs += m) <= this.scatterDelay) return this.target.y = this.as - this.scrollSpeed * m, true;
            m -= this.scatterDelay;
            var D = this.us;
            if (m < D) return this.hs || (this.hs = true, this.emit("scatter_on", {
              'duration': D,
              'columnIndex': this.columnIndex
            }, this)), void (this.target.y = this.ls - this.scrollSpeed * m - this.fs * m * m / 2);
            m -= D;
            var W = this.ds;
            if (m < W) return this.target.y = this.vs - this.scatterScrollSpeed * m - this._s * m * m / 2, void this.emit("decelerate", 1 - m / W, this);
            this.ns || (this.ns = true, this.emit("decelerate", 0, this)), m -= W;
            var k = this.bounceDuration;
            if (m < k) {
              var z = 1 - Math.pow(1 - m / k, this.bounceFactor);
              this.target.y = this.ps + this.bounceDistance * z;
            } else {
              var L = this.ss;
              if (m < L) {
                var v = cc.misc.lerp(-30, 0, m / L);
                this.target.y = this.os + v * Math.sin(10 * m);
              } else this.hs && (this.hs = false, this.emit("scatter_off", {
                'columnIndex': this.columnIndex,
                'isForceStop': false
              }, this)), this.target.y = this.os, this.stop();
            }
          }, __decorate([H, r(cc.EventTarget)], q);
        }(x.default);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = BounceScatterStopScroller;
