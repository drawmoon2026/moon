// module: TurboButtonEffect
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function TurboButtonEffect(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "5e837vEECVAj4O05haO7Gt+", "TurboButtonEffect")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator.ccclass,
      C = function (H) {
        function r() {
          var V = null !== H && H.apply(this, arguments) || this;
          return V.rS = undefined, V;
        }
        return __extends(r, H), r.prototype.setUpdateTurboMiddleIconCallback = function (V) {
          {
            this.rS = V;
          }
        }, r.prototype.changeTurboSprite = function () {
          {
            this.rS && this.rS();
          }
        }, __decorate([x], r);
      }(cc.Component);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = TurboButtonEffect;
