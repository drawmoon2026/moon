// module: SimpleStartScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SimpleStartScroller(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "761fejcJ/9N9I5O3LKCHrhS", "SimpleStartScroller")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.scrollSpeed = 5040;
    C.accelerateDuration = 0.15;
    C.accelerateFactor = 1.68;
    C.accelerateDistance = 378;
    C.bounceDistance = 60;
    C.bounceDuration = 0.15;
    C.bounceFactor = 1.84;
    var H = require("AbstractScroller"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.mixins,
      D = function (W) {
        function k(z, L) {
          this.delay = 0, this.rs = 0, this.as = 0, this.ps = 0, this.W_ = 0, this.ns = false, cc.EventTarget.call(this), this.target = z;
          var v = "object" == typeof L;
          for (var b in V) v && L.hasOwnProperty(b) ? this[b] = L[b] : this[b] = V[b];
          return this.delay = 0, this.rs = 0, this.as = 0, this.ps = 0, this.W_ = 0, this.ns = false, this;
        }
        return __extends(k, W), k.prototype.onPlay = function () {
          this.emit("play", this), this.rs = 0, this.as = this.target.y, this.ps = this.as + this.bounceDistance, this.W_ = this.ps - this.accelerateDistance, this.ns = false;
        }, k.prototype.update = function (z) {
          if (!((z = this.rs += z) <= this.delay)) {
            z -= this.delay;
            var L = this.bounceDuration;
            if (z <= L) {
              var v = 1 - Math.pow(1 - z / L, this.bounceFactor);
              this.target.y = this.as + this.bounceDistance * v;
            } else {
              z -= L;
              var b = this.accelerateDuration;
              if (z < b) return v = Math.pow(z / b, this.accelerateFactor), this.target.y = this.ps - this.accelerateDistance * v, void this.emit("accelerate", v, this);
              this.ns || (this.ns = true, this.emit("accelerate", 1, this)), z -= b, this.target.y = this.W_ - z * this.scrollSpeed;
            }
          }
        }, __decorate([q, m(cc.EventTarget)], k);
      }(H.default);
    exports.default = D, cc._RF.pop();
  }
}
module.exports = SimpleStartScroller;
