// module: SpinState
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SpinState(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "f1de36UCZVLKpe2qk9vzSaC", "SpinState")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("SlotAnalyticsEnum"),
      C = require("SlotAnalyticsHelper"),
      H = require("Utils"),
      r = require("SpinConfigHandler"),
      V = function () {
        function M(q, m, D, W) {
          this.name = "Spin State", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.stateDecorator = undefined, this.dataSource = q, this.generalControllers = m.generalControllers, this.finalCallback = D, W && (this.stateDecorator = W, W.triggerFastStop = this.triggerFastStop.bind(this));
        }
        return M.prototype.setAvailableActions = function () {}, M.prototype.clearAvailableActions = function () {}, M.prototype.preExitStateCleanup = function () {}, M.prototype.additionalDestroyCleanups = function () {}, M.prototype.triggerFastStop = function (q) {
          var m = this.generalControllers,
            D = m.slotController;
          C.sendFastStopGA(q, m.spinButtonController.isAutoSpin()), D.setOnClickCallback(undefined), D.markFastStop(), this.stateDecorator && this.stateDecorator.slotFastStopTriggered && this.stateDecorator.slotFastStopTriggered(), this.slotFastStopTriggered();
        }, M.prototype.slotFastStopTriggered = function () {}, M.prototype.onExitState = function (q) {
          q();
        }, M.prototype.run = function () {
          this.stateDecorator && (this.stateDecorator.stateWillStartSpin && this.stateDecorator.stateWillStartSpin(), this.stateDecorator.setAvailableActions && this.stateDecorator.setAvailableActions()), this.stateWillStartSpin(), this.setAvailableActions(), this.tm(), this.im();
        }, M.prototype.im = function () {
          this.callApi(this.sm.bind(this));
        }, M.prototype.tm = function () {
          var q = this.generalControllers.slotController;
          r.featureConfig.fastStopFeature && q.setOnClickCallback(this.triggerFastStop.bind(this, x.SpinTrigger.CLICK)), this.stateDecorator && this.stateDecorator.startSlotController ? this.stateDecorator.startSlotController() : this.em();
        }, M.prototype.sm = function () {
          this.vo();
        }, M.prototype.vo = function () {
          var q = this;
          this.stateDecorator && (this.stateDecorator.clearAvailableActions && this.stateDecorator.clearAvailableActions(), this.stateDecorator.preExitStateCleanup && this.stateDecorator.preExitStateCleanup()), this.clearAvailableActions(), this.preExitStateCleanup(), this.onExitState(function () {
            var m = q.finalCallback;
            q.finalCallback = undefined, q.destroy(), H.deferCallback(true)(function () {
              H.deferCallback(true)(m);
            });
          });
        }, M.prototype.destroy = function () {
          this.generalControllers.slotController.setOnClickCallback(undefined), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.stateDecorator && (this.stateDecorator.destroy(), this.stateDecorator = undefined), this.additionalDestroyCleanups();
        }, M.prototype.em = function () {
          this.generalControllers.slotController.spin();
        }, M;
      }();
    exports.default = V, cc._RF.pop();
  }
}
module.exports = SpinState;
