// module: NumberRollBaseController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberRollBaseController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "b940fHCDN9PkIykJo0EuNqR", "NumberRollBaseController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("NumberDisplayInterface"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.rollDuration = 2, m.displayController = undefined, m.ya = 0, m.Ga = 0, m.ds = 0, m.Ys = 0, m;
        }
        return __extends(q, M), q.prototype.onLoad = function () {
          this.enabled = false;
        }, q.prototype.play = function (m, D, W, k) {
          if (undefined === k && (k = true), !(D < 0 || m < 0)) {
            if (m === D) return k && this.displayController.clear(), void this.displayController.displayNumber(D, true, W);
            this.yo = W, this.ya = m, this.Ga = D, this.ds = this.rollDuration, this.Ys = 0, k && this.displayController.clear(), this.displayController.displayNumber(m, false), this.enabled = true;
          }
        }, q.prototype.skip = function () {
          var m = this;
          this.enabled && (this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
            var D = m.yo;
            m.yo = undefined, D && D();
          }));
        }, q.prototype.stop = function (m) {
          this.enabled = false, m && (this.displayController.clear(), this.yo = undefined);
        }, q.prototype.update = function (m) {
          {
            var D = this;
            this.Ys += m;
            var W = this.Ys / this.ds;
            if (W >= 1) this.stop(false), this.displayController.displayNumber(this.Ga, true, function () {
              var z = D.yo;
              D.yo = undefined, z && z();
            });else {
              W = 1 - Math.cos(W * Math.PI * 0.5);
              var k = cc.misc.lerp(this.ya, this.Ga, W);
              this.displayController.displayNumber(k, false);
            }
          }
        }, __decorate([r(cc.Integer)], q.prototype, "rollDuration", undefined), __decorate([r({
          'override': true,
          'type': x.default
        })], q.prototype, "displayController", undefined), __decorate([H], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = NumberRollBaseController;
