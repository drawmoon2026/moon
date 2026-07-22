// module: NumberRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberRollBaseController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "b940fHCDN9PkIykJo0EuNqR", "NumberRollBaseController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberDisplayInterface"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.rollDuration = 2, N.displayController = undefined, N.Of = 0, N.kf = 0, N.Ql = 0, N.Hf = 0, N;
        }
        return __extends(V, C), V.prototype.onLoad = function () {
          this.enabled = false;
        }, V.prototype.play = function (N, q, f, g) {
          if (undefined === g && (g = true), !(q < 0 || N < 0)) {
            if (N === q) return g && this.displayController.clear(), void this.displayController.displayNumber(q, true, f);
            this.et = f, this.Of = N, this.kf = q, this.Ql = this.rollDuration, this.Hf = 0, g && this.displayController.clear(), this.displayController.displayNumber(N, false), this.enabled = true;
          }
        }, V.prototype.skip = function () {
          var N = this;
          this.enabled && (this.stop(false), this.displayController.displayNumber(this.kf, true, function () {
            var q = N.et;
            N.et = undefined, q && q();
          }));
        }, V.prototype.stop = function (N) {
          this.enabled = false, N && (this.displayController.clear(), this.et = undefined);
        }, V.prototype.update = function (N) {
          var q = this;
          this.Hf += N;
          var f = this.Hf / this.Ql;
          if (f >= 1) this.stop(false), this.displayController.displayNumber(this.kf, true, function () {
            var l = q.et;
            q.et = undefined, l && l();
          });else {
            f = 1 - Math.cos(f * Math.PI * 0.5);
            var g = cc.misc.lerp(this.Of, this.kf, f);
            this.displayController.displayNumber(g, false);
          }
        }, __decorate([T(cc.Integer)], V.prototype, "rollDuration", undefined), __decorate([T({
          'override': true,
          'type': B.default
        })], V.prototype, "displayController", undefined), __decorate([Z], V);
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = NumberRollBaseController;
