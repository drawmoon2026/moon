// module: Transitions
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function Transitions(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4f44bvoAJdODZ+ECdfyE6W8", "Transitions")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.ToNormalSpinTransition = undefined;
    var x = function (C) {
      function H() {
        {
          return null !== C && C.apply(this, arguments) || this;
        }
      }
      return __extends(H, C), H.prototype.run = function (r, V) {
        this.hS = r.generalControllers, V && V();
      }, H.prototype.destroy = function () {
        return this.hS = undefined, C.prototype.destroy.call(this);
      }, H;
    }(cc.Object);
    exports.ToNormalSpinTransition = x, cc._RF.pop();
  }
}
module.exports = Transitions;
