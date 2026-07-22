// module: BackWorldController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function BackWorldController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "8abeaZPLu9A7K3Hx2oixW7c", "BackWorldController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("LanternController"),
      C = require("Utils"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.ipBg = undefined, W.lanternControllers = [], W;
        }
        return __extends(D, m), D.prototype.init = function () {
          this.Y();
        }, D.prototype.Y = function () {
          var W = this;
          this.lanternControllers.forEach(function (k, z) {
            C.delayCallback(z)(W.X(k));
          });
        }, D.prototype.X = function (W) {
          return function () {
            W.moveLantern(), W.shineLantern();
          };
        }, D.prototype.playShineDoorAnimation = function () {
          var W = cc.sequence(cc.tintTo(0.3, 255, 255, 255), cc.tintTo(0.2, 0, 0, 0));
          this.ipBg.runAction(W);
        }, D.prototype.destroy = function () {
          return this.lanternControllers.forEach(function (W) {
            W.destroy();
          }), this.node.destroy(), m.prototype.destroy.call(this);
        }, __decorate([M(cc.Node)], D.prototype, "ipBg", undefined), __decorate([M(x.default)], D.prototype, "lanternControllers", undefined), __decorate([V], D);
      }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = BackWorldController;
