// module: TurboButtonEffect
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function TurboButtonEffect(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "5e837vEECVAj4O05haO7Gt+", "TurboButtonEffect")) {
    var I = {};
    I.value = true;
    Object.defineProperty(j, "__esModule", I);
    var m = cc._decorator.ccclass,
      B = function (X) {
        function Z() {
          {
            var T = null !== X && X.apply(this, arguments) || this;
            return T.Fg = undefined, T;
          }
        }
        return __extends(Z, X), Z.prototype.setUpdateTurboMiddleIconCallback = function (T) {
          this.Fg = T;
        }, Z.prototype.changeTurboSprite = function () {
          {
            this.Fg && this.Fg();
          }
        }, __decorate([m], Z);
      }(cc.Component);
    j.default = B, cc._RF.pop();
  }
}
module.exports = TurboButtonEffect;
