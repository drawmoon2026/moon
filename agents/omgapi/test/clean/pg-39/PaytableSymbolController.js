// module: PaytableSymbolController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function PaytableSymbolController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "7ac8cKQbhVEjpzhJ0UPPFHw", "PaytableSymbolController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.symbol01 = undefined, q.symbol02 = undefined, q.symbol03 = undefined, q.symbolNode = undefined, q;
        }
        return __extends(M, V), M.prototype.playInactiveNode = function (q) {
          undefined === q && (q = true), this.symbolNode.stopAllActions(), q ? this.symbolNode.runAction(cc.fadeTo(0.1, 102)) : this.symbolNode.opacity = 102;
        }, M.prototype.playActive = function (q) {
          undefined === q && (q = true), this.symbolNode.stopAllActions(), q ? this.symbolNode.runAction(cc.fadeTo(0.1, 255)) : this.symbolNode.opacity = 255;
        }, M.prototype.setSymbol = function (q) {
          this.symbol01.spriteFrame = q, this.symbol02.spriteFrame = q, this.symbol03.spriteFrame = q;
        }, M.prototype.setAnySymbol = function (q, m, D) {
          this.symbol01.spriteFrame = q, this.symbol02.spriteFrame = m, this.symbol03.spriteFrame = D;
        }, M.prototype.destroy = function () {
          return this.symbolNode.stopAllActions(), this.node.destroy(), V.prototype.destroy.call(this);
        }, __decorate([H(cc.Sprite)], M.prototype, "symbol01", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbol02", undefined), __decorate([H(cc.Sprite)], M.prototype, "symbol03", undefined), __decorate([H(cc.Node)], M.prototype, "symbolNode", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = PaytableSymbolController;
