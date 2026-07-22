// module: ScrollerManagerController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ScrollerManagerController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "7b255Vuz2xHwINgRNvOg0Mg", "ScrollerManagerController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("ScrollerSpineController"),
        C = cc._decorator,
        H = C.ccclass,
        r = C.property,
        V = function (M) {
          function q() {
            {
              var m = null !== M && M.apply(this, arguments) || this;
              return m.leftscrollerSpineController = undefined, m.rightscrollerSpineController = undefined, m;
            }
          }
          return __extends(q, M), q.prototype.playIdle = function () {
            this.leftscrollerSpineController.playLeftIdle(), this.rightscrollerSpineController.playLeftIdle();
          }, q.prototype.playSpawn = function () {
            this.leftscrollerSpineController.playLeftSpawn(), this.rightscrollerSpineController.playLeftSpawn();
          }, q.prototype.playExit = function () {
            {
              this.leftscrollerSpineController.playLeftExit(), this.rightscrollerSpineController.playLeftExit();
            }
          }, __decorate([r(x.default)], q.prototype, "leftscrollerSpineController", undefined), __decorate([r(x.default)], q.prototype, "rightscrollerSpineController", undefined), __decorate([H], q);
        }(cc.Component);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = ScrollerManagerController;
