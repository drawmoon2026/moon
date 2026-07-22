// module: SpinState
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SpinState(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "f1de36UCZVLKpe2qk9vzSaC", "SpinState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("SlotAnalyticsEnum"),
      X = F("SlotAnalyticsHelper"),
      Z = F("Utils"),
      T = F("SpinConfigHandler"),
      M = function () {
        function C(V, N, q, f) {
          this.name = "Spin State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.stateDecorator = undefined, this.dataSource = V, this.generalControllers = N.generalControllers, this.finalCallback = q, f && (this.stateDecorator = f, f.triggerFastStop = this.triggerFastStop.bind(this));
        }
        return C.prototype.setAvailableActions = function () {}, C.prototype.clearAvailableActions = function () {}, C.prototype.preExitStateCleanup = function () {}, C.prototype.additionalDestroyCleanups = function () {}, C.prototype.triggerFastStop = function (V) {
          {
            var N = this.generalControllers,
              q = N.slotController;
            X.sendFastStopGA(V, N.spinButtonController.isAutoSpin()), q.setOnClickCallback(undefined), q.markFastStop(), this.stateDecorator && this.stateDecorator.slotFastStopTriggered && this.stateDecorator.slotFastStopTriggered(), this.slotFastStopTriggered();
          }
        }, C.prototype.slotFastStopTriggered = function () {}, C.prototype.onExitState = function (V) {
          {
            V();
          }
        }, C.prototype.run = function () {
          this.stateDecorator && (this.stateDecorator.stateWillStartSpin && this.stateDecorator.stateWillStartSpin(), this.stateDecorator.setAvailableActions && this.stateDecorator.setAvailableActions()), this.stateWillStartSpin(), this.setAvailableActions(), this.$p(), this.tS();
        }, C.prototype.tS = function () {
          {
            this.callApi(this.iS.bind(this));
          }
        }, C.prototype.$p = function () {
          {
            var V = this.generalControllers.slotController;
            T.featureConfig.fastStopFeature && V.setOnClickCallback(this.triggerFastStop.bind(this, B.SpinTrigger.CLICK)), this.stateDecorator && this.stateDecorator.startSlotController ? this.stateDecorator.startSlotController() : this.sS();
          }
        }, C.prototype.iS = function () {
          this.ro();
        }, C.prototype.ro = function () {
          {
            var V = this;
            this.stateDecorator && (this.stateDecorator.clearAvailableActions && this.stateDecorator.clearAvailableActions(), this.stateDecorator.preExitStateCleanup && this.stateDecorator.preExitStateCleanup()), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
              var N = V.finalCallback;
              V.finalCallback = undefined, V.destroy(), Z.deferCallback(true)(function () {
                Z.deferCallback(true)(N);
              });
            });
          }
        }, C.prototype.destroy = function () {
          this.generalControllers.slotController.setOnClickCallback(undefined), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.stateDecorator && (this.stateDecorator.destroy(), this.stateDecorator = undefined), this.additionalDestroyCleanups();
        }, C.prototype.sS = function () {
          this.generalControllers.slotController.spin();
        }, C;
      }();
    I.default = M, cc._RF.pop();
  }
}
module.exports = SpinState;
