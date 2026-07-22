// module: ButtonBackground
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ButtonBackground(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "96252/qWvdGA7VOxWpX5d7v", "ButtonBackground")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("UIAppearanceHelper"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        {
          function V() {
            {
              var N = null !== C && C.apply(this, arguments) || this;
              return N.background = undefined, N.backgroundColorKey = '', N;
            }
          }
          return __extends(V, C), V.prototype.onLoad = function () {
            this.background.color = B.uiAppearanceHelper.v('' + this.backgroundColorKey) ? B.uiAppearanceHelper.v('' + this.backgroundColorKey) : B.uiAppearanceHelper.v("setting.theme_color");
          }, __decorate([T(cc.Node)], V.prototype, "background", undefined), __decorate([T(cc.String)], V.prototype, "backgroundColorKey", undefined), __decorate([Z], V);
        }
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = ButtonBackground;
