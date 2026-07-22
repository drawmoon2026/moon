// module: AutoSpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function AutoSpinButtonController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "a830dvIUp5AJLfQ2C5p0lzg", "AutoSpinButtonController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator,
      C = x.ccclass,
      H = x.property,
      r = function (V) {
        function M() {
          var q = null !== V && V.apply(this, arguments) || this;
          return q.autoSpinHolder = undefined, q.numberDisplayNode = undefined, q.autoButtonNode = undefined, q.V = undefined, q;
        }
        return __extends(M, V), Object.defineProperty(M.prototype, "autoSpinNumberDisplay", {
          'get': function () {
            return this.V || (this.V = this.numberDisplayNode.getComponent("NumberDisplayController")), this.V;
          },
          'enumerable': false,
          'configurable': true
        }), M.prototype.show = function () {
          {
            this.autoSpinHolder.active = true;
          }
        }, M.prototype.hide = function () {
          this.autoSpinHolder.active = false;
        }, M.prototype.showAutoSpinMode = function (q, m) {
          q < 0 && -1 !== q || (this.autoSpinHolder.active = true, this.autoSpinHolder.opacity = 0, this.autoSpinHolder.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
            m && m();
          }))), this.autoSpinNumberDisplay.clear(), this.autoSpinNumberDisplay.displayNumber(q));
        }, M.prototype.updateAutoSpinCount = function (q) {
          {
            this.autoSpinNumberDisplay.clear(), this.autoSpinNumberDisplay.displayNumber(q);
          }
        }, M.prototype.exitAutoSpinMode = function () {
          this.autoSpinHolder.stopAllActions(), this.autoSpinHolder.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(this.K, this)));
        }, M.prototype.K = function () {
          {
            this.autoSpinHolder.active = false;
          }
        }, M.prototype.q = function () {
          this.autoButtonNode.stopAllActions(), this.autoButtonNode.active = false, this.V = undefined;
        }, M.prototype.destroy = function () {
          return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
        }, __decorate([H(cc.Node)], M.prototype, "autoSpinHolder", undefined), __decorate([H(cc.Node)], M.prototype, "numberDisplayNode", undefined), __decorate([H(cc.Node)], M.prototype, "autoButtonNode", undefined), __decorate([C], M);
      }(cc.Component);
    exports.default = r, cc._RF.pop();
  }
}
module.exports = AutoSpinButtonController;
