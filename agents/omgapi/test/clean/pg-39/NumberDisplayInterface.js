// module: NumberDisplayInterface
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberDisplayInterface(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "6e9deOwoQZHDb/Mv4FAbr3R", "NumberDisplayInterface")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var k = null !== M && M.apply(this, arguments) || this;
          return k.numberContainer = undefined, k.maxContainerSize = 1142, k.enableComma = true, k.enableDecimal = true, k.enableShortenNumber = false, k;
        }
        var m = {};
        m.tooltip = false;
        var D = {};
        D.tooltip = false;
        var W = {};
        W.tooltip = false;
        return __extends(q, M), q.prototype.numberWithComma = function (k) {
          var z = x.getDefaultCurrencyFormat().groupSeparator;
          return k.toString().replace(/\B(?=(\d{3})+(?!\d))/g, z);
        }, q.prototype.setResizeAnimation = function (k) {
          this.ga = k;
        }, q.prototype.displayNumber = function (k, z) {
          throw undefined === z && (z = true), Error("NumberDisplayInterface: method must be overriden");
        }, q.prototype.clear = function () {
          throw Error("NumberDisplayInterface: method must be overriden");
        }, q.prototype.resizeNumberIfNeeded = function () {
          throw Error("NumberDisplayInterface: method must be overriden");
        }, __decorate([r(cc.Node)], q.prototype, "numberContainer", undefined), __decorate([r(cc.Float)], q.prototype, "maxContainerSize", undefined), __decorate([r(m)], q.prototype, "enableComma", undefined), __decorate([r(D)], q.prototype, "enableDecimal", undefined), __decorate([r(W)], q.prototype, "enableShortenNumber", undefined), __decorate([H], q);
      }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = NumberDisplayInterface;
