// module: TransitionContext
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function TransitionContext(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "9fd10r5SF9AY7ViKPJFg+fR", "TransitionContext")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.TransitionContext = undefined;
    var x = function () {
      function C(H, r, V, M, q) {
        this.sS = H, this.eS = r, this.nS = V, this.oS = M, this.cS = q;
      }
      return C.prototype.getFromController = function () {
        return this.sS;
      }, C.prototype.getToController = function () {
        return this.eS;
      }, C.prototype.getFromView = function () {
        return this.nS;
      }, C.prototype.getToView = function () {
        return this.oS;
      }, C.prototype.getContainer = function () {
        return this.cS;
      }, C;
    }();
    exports.TransitionContext = x, cc._RF.pop();
  }
}
module.exports = TransitionContext;
