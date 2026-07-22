// module: MJNormalSpinDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJNormalSpinDecorator(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "38b72yPezZAaoJqa1VvrPzu", "MJNormalSpinDecorator")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NormalSpinDecorator"),
      X = require("SettingMenuHelper"),
      Z = require("GameConstant"),
      T = function (M) {
        function C(V, N) {
          {
            var q = M.call(this, V, N) || this;
            return q.name = "MJ Normal Spin Decorator", q.dataSource = undefined, q.generalControllers = undefined, q.dataSource = V, q.generalControllers = N.generalControllers, q;
          }
        }
        return __extends(C, M), C.prototype.stateWillStartSpin = function () {}, C.prototype.startSlotController = function () {
          {
            switch (this.dataSource.transactionModel.transitionTo) {
              case Z.TransitionState.RESPIN:
              case Z.TransitionState.FREE_SPIN_RESPIN:
                break;
              case Z.TransitionState.NORMAL:
              case Z.TransitionState.FREE_SPIN:
                this.generalControllers.slotController.spin(X.settingMenuHelper.turboSpinOn);
            }
          }
        }, C;
      }(B.default);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = MJNormalSpinDecorator;
