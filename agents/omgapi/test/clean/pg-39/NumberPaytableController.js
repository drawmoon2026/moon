// module: NumberPaytableController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function NumberPaytableController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "5a2c6Vm6u9LwpLUeGzJr4Ba", "NumberPaytableController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = cc._decorator,
        C = x.ccclass,
        H = x.property,
        r = function (V) {
          function M() {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.numberNode = undefined, q;
          }
          return __extends(M, V), M.prototype.playFlash = function () {
            this.numberNode.stopAllActions();
            var q = cc.sequence(cc.fadeTo(0.1, 102), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
            this.numberNode.runAction(cc.repeatForever(q));
          }, M.prototype.playInactiveNode = function (q) {
            this.numberNode.stopAllActions(), q ? this.numberNode.runAction(cc.fadeTo(0.1, 102)) : this.numberNode.opacity = 102;
          }, M.prototype.playActive = function (q) {
            this.numberNode.stopAllActions(), q ? this.numberNode.runAction(cc.fadeTo(0.1, 255)) : this.numberNode.opacity = 255;
          }, M.prototype.destroy = function () {
            return this.numberNode.stopAllActions(), this.node.destroy(), V.prototype.destroy.call(this);
          }, __decorate([H(cc.Node)], M.prototype, "numberNode", undefined), __decorate([C], M);
        }(cc.Component);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = NumberPaytableController;
