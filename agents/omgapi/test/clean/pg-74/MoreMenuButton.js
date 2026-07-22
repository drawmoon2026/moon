// module: MoreMenuButton
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MoreMenuButton(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "ea5caTag+xJsrT667bFPlnC", "MoreMenuButton")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("GenericSettingButton"),
      X = cc._decorator,
      Z = X.ccclass,
      T = (X.property, function (M) {
        function C() {
          return null !== M && M.apply(this, arguments) || this;
        }
        return __extends(C, M), C.prototype.customSetup = function () {
          this.circleCollider.x = -10;
        }, __decorate([Z], C);
      }(B.default));
    exports.default = T, cc._RF.pop();
  }
}
module.exports = MoreMenuButton;
