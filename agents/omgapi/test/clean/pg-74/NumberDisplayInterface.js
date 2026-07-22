// module: NumberDisplayInterface
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberDisplayInterface(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "6e9deOwoQZHDb/Mv4FAbr3R", "NumberDisplayInterface")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("Utils"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var g = null !== C && C.apply(this, arguments) || this;
          return g.numberContainer = undefined, g.maxContainerSize = 1142, g.enableComma = true, g.enableDecimal = true, g.enableShortenNumber = false, g;
        }
        var N = {};
        N.tooltip = false;
        var q = {};
        q.tooltip = false;
        var f = {};
        f.tooltip = false;
        return __extends(V, C), V.prototype.numberWithComma = function (g) {
          var l = B.getDefaultCurrencyFormat().groupSeparator;
          return g.toString().replace(/\B(?=(\d{3})+(?!\d))/g, l);
        }, V.prototype.setResizeAnimation = function (g) {
          this.Bf = g;
        }, V.prototype.displayNumber = function (g, l) {
          throw undefined === l && (l = true), Error("NumberDisplayInterface: method must be overriden");
        }, V.prototype.clear = function () {
          throw Error("NumberDisplayInterface: method must be overriden");
        }, V.prototype.resizeNumberIfNeeded = function () {
          throw Error("NumberDisplayInterface: method must be overriden");
        }, __decorate([T(cc.Node)], V.prototype, "numberContainer", undefined), __decorate([T(cc.Float)], V.prototype, "maxContainerSize", undefined), __decorate([T(N)], V.prototype, "enableComma", undefined), __decorate([T(q)], V.prototype, "enableDecimal", undefined), __decorate([T(f)], V.prototype, "enableShortenNumber", undefined), __decorate([Z], V);
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = NumberDisplayInterface;
