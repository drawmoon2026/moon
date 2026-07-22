// module: SlotStateMachine
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SlotStateMachine(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "f1d53JqS5hGVbtNCz0JAnwN", "SlotStateMachine")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.StopStyle = exports.SlotStates = undefined;
    var x,
      C,
      H = require("Utils");
    (function (V) {
      V[V.SPINNING = 0] = "SPINNING", V[V.STOPPING = 1] = "STOPPING", V[V.STOPPED = 2] = "STOPPED";
    })(x = exports.SlotStates || (exports.SlotStates = {})), function (V) {
      V[V.NORMAL = 0] = "NORMAL", V[V.FAST = 1] = "FAST";
    }(C = exports.StopStyle || (exports.StopStyle = {}));
    var r = function () {
      function V() {
        this.I = x.STOPPED, this.Yp = C.NORMAL, this.Qp = false, this.Xp = false, this.Zp = undefined, this.$p = undefined;
      }
      return V.prototype.getState = function () {
        return this.I;
      }, V.prototype.getStopStyle = function () {
        return this.Yp;
      }, V.prototype.spin = function (M, q) {
        this.I === x.STOPPED && (this.I = x.SPINNING, H.delayCallback(M)(this.tb.bind(this)), this.Zp = H.delayCallback(q)(this.ib.bind(this)));
      }, V.prototype.markFastStop = function () {
        this.I === x.SPINNING && (this.Yp = C.FAST);
      }, V.prototype.unmarkFastStop = function () {
        this.Yp === C.FAST && this.I === x.SPINNING && (this.Yp = C.NORMAL);
      }, V.prototype.fastStop = function (M) {
        this.I !== x.SPINNING && this.I !== x.STOPPING || (this.Yp = C.FAST, this.I = x.STOPPING, this.$p = M, this.Qp && this.Mp());
      }, V.prototype.stop = function (M) {
        if (this.I === x.SPINNING) {
          if (this.Yp === C.FAST) return;
          this.I = x.STOPPING, this.$p = M, this.Xp && this.Wt();
        }
      }, V.prototype.stopped = function () {
        this.I = x.STOPPED, this.cc();
      }, V.prototype.tb = function () {
        this.Qp = true, this.I === x.STOPPING && this.Yp === C.FAST && this.Mp();
      }, V.prototype.ib = function () {
        this.Xp = true, this.I === x.STOPPING && this.Yp === C.NORMAL && this.Wt();
      }, V.prototype.Mp = function () {
        var M = this.Zp;
        this.Zp = undefined, M && M(), this.Wt();
      }, V.prototype.Wt = function () {
        var M = this.$p;
        this.$p = undefined, M && M();
      }, V.prototype.cc = function () {
        this.Yp = C.NORMAL, this.Qp = false, this.Xp = false, this.$p = undefined, this.Zp = undefined;
      }, V;
    }();
    exports.default = r, cc._RF.pop();
  }
}
module.exports = SlotStateMachine;
