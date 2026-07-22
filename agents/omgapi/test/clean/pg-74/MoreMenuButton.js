// module: MoreMenuButton
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MoreMenuButton(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "ea5caTag+xJsrT667bFPlnC", "MoreMenuButton")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m);
      var B = F("GenericSettingButton"),
        X = cc._decorator,
        Z = X.ccclass,
        T = (X.property, function (M) {
          {
            function C() {
              {
                return null !== M && M.apply(this, arguments) || this;
              }
            }
            return __extends(C, M), C.prototype.customSetup = function () {
              this.circleCollider.x = -10;
            }, __decorate([Z], C);
          }
        }(B.default));
      I.default = T, cc._RF.pop();
    }
  }
}
module.exports = MoreMenuButton;
