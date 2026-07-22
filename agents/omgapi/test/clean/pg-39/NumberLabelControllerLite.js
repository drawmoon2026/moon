// module: NumberLabelControllerLite
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberLabelControllerLite(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "88c0bvJUDVGt4Zbi3DnKpmf", "NumberLabelControllerLite")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = cc.misc.lerp,
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.label = undefined, W.rollDuration = 2, W.maxWidth = 0, W.Ca = false, W.Ys = 0, W.ya = 0, W.Ma = 0, W.wa = false, W.Aa = undefined, W.Pa = undefined, W;
        }
        return __extends(D, m), D.prototype.setSymbol = function (W) {
          this.Aa = W;
        }, D.prototype.setBaseUnit = function (W) {
          this.Pa = W;
        }, D.prototype.play = function (W, k) {
          this.wa && (this.unschedule(this.Ba), this.wa = false), this.ya = W, this.Ma = k, this.Ys = 0, this.wa = true, this.Ca = !(W > k), this.schedule(this.Ba, 0);
        }, D.prototype.skip = function (W) {
          this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatCurrency(W, this.Aa, this.Pa);
        }, D.prototype.skipNoCurrencyValue = function (W) {
          this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatGroup(W);
        }, D.prototype.setString = function (W) {
          this.wa && (this.unschedule(this.Ba), this.wa = false), this.label.string = W;
        }, D.prototype.Ba = function (W) {
          this.Ys += W;
          var k = this.Ys / this.rollDuration;
          k = k >= 1 ? 1 : 1 - Math.cos(k * Math.PI * 0.5);
          var z = C(this.ya, this.Ma, k);
          this.Ca ? z >= this.Ma && (z = this.Ma, this.unschedule(this.Ba), this.wa = false) : z <= this.Ma && (z = this.Ma, this.unschedule(this.Ba), this.wa = false), this.label.string = x.formatCurrency(z, this.Aa, this.Pa);
        }, D.prototype.getLabelString = function () {
          return this.label.string;
        }, __decorate([M(cc.Label)], D.prototype, "label", undefined), __decorate([M(cc.Integer)], D.prototype, "rollDuration", undefined), __decorate([M(cc.Float)], D.prototype, "maxWidth", undefined), __decorate([V], D);
      }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = NumberLabelControllerLite;
