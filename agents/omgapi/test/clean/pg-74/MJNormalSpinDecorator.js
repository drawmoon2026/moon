// module: MJNormalSpinDecorator
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJNormalSpinDecorator(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "38b72yPezZAaoJqa1VvrPzu", "MJNormalSpinDecorator")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("NormalSpinDecorator"),
      X = F("SettingMenuHelper"),
      Z = F("GameConstant"),
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
    I.default = T, cc._RF.pop();
  }
}
module.exports = MJNormalSpinDecorator;
