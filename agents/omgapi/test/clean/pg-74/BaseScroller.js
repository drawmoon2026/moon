// module: BaseScroller
// Cocos 模块函数,参数 (require, module, exports) = (c, j, exports)
function BaseScroller(c, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "7a55d+EM2dKr590KKrgiTXR", "BaseScroller")) {
    {
      var m;
      var B = {};
      B.value = true;
      var X = {};
      X.RUN = "run";
      X.END = "end";
      X.ACCELERATE = "accelerate";
      X.DECELERATE = "decelerate";
      Object.defineProperty(exports, "__esModule", B), exports.SCROLLER_EVENT = exports.ScrollerState = undefined, function (T) {
        {
          T[T.IDLE = 0] = "IDLE", T[T.RUNNING = 1] = "RUNNING", T[T.ENDED = 2] = "ENDED";
        }
      }(m = exports.ScrollerState || (exports.ScrollerState = {})), exports.SCROLLER_EVENT = Object.freeze(X);
      var Z = function (T) {
        {
          function V(N) {
            var q = T.call(this) || this;
            return q.state = m.IDLE, q.config = undefined, q.runtimeConfig = undefined, q.config = N, q.runtimeConfig = __assign({}, N), q;
          }
          var M = {};
          M.get = function () {
            return this.state === m.RUNNING;
          };
          M.enumerable = false;
          M.configurable = true;
          var C = {};
          C.get = function () {
            return this.state === m.ENDED;
          };
          C.enumerable = false;
          C.configurable = true;
          return __extends(V, T), Object.defineProperty(V.prototype, "isPlaying", M), Object.defineProperty(V.prototype, "isEnded", C), V.prototype.setConfig = function (N) {
            Object.assign(this.config, N);
          }, V.prototype.updateRunTimeConfig = function (N) {
            Object.assign(this.runtimeConfig, N);
          }, V.prototype.getRunTimeConfig = function () {
            {
              return __assign({}, this.runtimeConfig);
            }
          }, V.prototype.reset = function () {
            this.state = m.IDLE, this.runtimeConfig = __assign({}, this.config), this.onReset();
          }, V.prototype.run = function () {
            this.state === m.IDLE && (this.state = m.RUNNING, this.onRun());
          }, V.prototype.end = function () {
            this.state !== m.ENDED && (this.state = m.ENDED, this.onEnd());
          }, V.prototype.onReset = function () {}, V.prototype.onRun = function () {}, V.prototype.onEnd = function () {}, V.prototype.emitEvent = function (N, q) {
            {
              var f = {};
              f.scroller = this;
              f.speedFactor = q;
              this.emit(N, h);
            }
          }, V;
        }
      }(cc.EventTarget);
      exports.default = Z, cc._RF.pop();
    }
  }
}
module.exports = BaseScroller;
