// module: DefaultStartScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function DefaultStartScroller(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "a9e6d7qkYZPw5K5UPSZUUME", "DefaultStartScroller")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = {};
    B.scrollCallback = undefined;
    B.maxSpeed = -5040;
    B.accelerateDuration = 0.15;
    B.accelerateFactor = 1.68;
    B.accelerateDistance = -378;
    B.bounceDistance = 60;
    B.bounceDuration = 0.15;
    B.bounceFactor = 1.84;
    var X = require("BaseScroller"),
      T = function (M) {
        function C(V) {
          var N = M.call(this, __assign(__assign({}, Z), V)) || this;
          return N.accumulatedTime = 0, N.previousY = 0, N.bindedRunUpdate = undefined, N.bindedEndUpdate = undefined, N.bindedRunUpdate = N.runUpdate.bind(N), N.bindedEndUpdate = N.endUpdate.bind(N), N;
        }
        return __extends(C, M), C.prototype.onReset = function () {
          this.update = undefined;
        }, C.prototype.onRun = function () {
          this.emitEvent(X.SCROLLER_EVENT.RUN), this.accumulatedTime = 0, this.previousY = 0, this.update = this.bindedRunUpdate;
        }, C.prototype.onEnd = function () {
          this.update = this.bindedEndUpdate, this.emitEvent(X.SCROLLER_EVENT.END);
        }, C.prototype.runUpdate = function (V) {
          var N = this.runtimeConfig;
          V = this.accumulatedTime += V;
          var q = N.bounceDuration;
          if (V <= q) {
            var f = 1 - Math.pow(1 - V / q, N.bounceFactor),
              h = N.bounceDistance * f;
            return N.scrollCallback(this, h - this.previousY), void (this.previousY = h);
          }
          V -= q;
          var g = N.accelerateDuration;
          if (V < g) return f = Math.pow(V / g, N.accelerateFactor), h = N.accelerateDistance * f + N.bounceDistance, N.scrollCallback(this, h - this.previousY), this.previousY = h, void this.emitEvent(X.SCROLLER_EVENT.ACCELERATE, f);
          this.emitEvent(X.SCROLLER_EVENT.ACCELERATE, 1), this.end();
        }, C.prototype.endUpdate = function (V) {
          this.runtimeConfig.scrollCallback(this, V * this.runtimeConfig.maxSpeed);
        }, C;
      }(X.default);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = DefaultStartScroller;
