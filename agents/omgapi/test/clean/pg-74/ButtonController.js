// module: ButtonController
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function ButtonController(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "b879fiUzY1Om5HhXaCp7Qrf", "ButtonController")) {
    var I = {};
    I.value = true;
    Object.defineProperty(j, "__esModule", I);
    var m = cc._decorator.ccclass,
      B = function (X) {
        {
          function Z() {
            var T = null !== X && X.apply(this, arguments) || this;
            return T.Ss = undefined, T;
          }
          return __extends(Z, X), Z.prototype.setClickCallback = function (T) {
            {
              this.Ss = T;
            }
          }, Z.prototype.onClick = function () {
            this.Ss && this.Ss();
          }, Z.prototype.clearClickCallback = function () {
            this.Ss = undefined;
          }, Z.prototype.getControllerAndHandlerName = function () {
            {
              var T = {};
              T.ControllerName = "ButtonController";
              T.HandlerName = "onClick";
              return T;
            }
          }, __decorate([m], Z);
        }
      }(cc.Component);
    j.default = B, cc._RF.pop();
  }
}
module.exports = ButtonController;
