// module: NumberLabelControllerLite
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberLabelControllerLite(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "88c0bvJUDVGt4Zbi3DnKpmf", "NumberLabelControllerLite")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = require("Utils"),
        X = cc.misc.lerp,
        Z = cc._decorator,
        T = Z.ccclass,
        M = Z.property,
        C = function (V) {
          {
            function N() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.label = undefined, q.rollDuration = 2, q.maxWidth = 0, q.Af = false, q.Hf = 0, q.Of = 0, q.If = 0, q.Tf = false, q;
            }
            return __extends(N, V), N.prototype.play = function (q, f) {
              this.Tf && (this.unschedule(this.Ef), this.Tf = false), this.Of = q, this.If = f, this.Hf = 0, this.Tf = true, this.Af = !(q > f), this.schedule(this.Ef, 0);
            }, N.prototype.skip = function (q) {
              this.Tf && (this.unschedule(this.Ef), this.Tf = false), this.label.string = B.formatCurrency(q);
            }, N.prototype.Ef = function (q) {
              {
                this.Hf += q;
                var f = this.Hf / this.rollDuration;
                f = f >= 1 ? 1 : 1 - Math.cos(f * Math.PI * 0.5);
                var g = X(this.Of, this.If, f);
                this.Af ? g >= this.If && (g = this.If, this.unschedule(this.Ef), this.Tf = false) : g <= this.If && (g = this.If, this.unschedule(this.Ef), this.Tf = false), this.label.string = B.formatCurrency(g);
              }
            }, __decorate([M(cc.Label)], N.prototype, "label", undefined), __decorate([M(cc.Integer)], N.prototype, "rollDuration", undefined), __decorate([M(cc.Float)], N.prototype, "maxWidth", undefined), __decorate([T], N);
          }
        }(cc.Component);
      exports.default = C, cc._RF.pop();
    }
  }
}
module.exports = NumberLabelControllerLite;
