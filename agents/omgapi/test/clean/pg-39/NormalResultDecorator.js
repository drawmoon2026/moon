// module: NormalResultDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NormalResultDecorator(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "94e3b2snKRKspFrhelPCcrj", "NormalResultDecorator")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("SlotStateMachine"),
      C = require("SlotAnalyticsEnum"),
      H = require("AutoSpinHandler"),
      V = require("SlotGameConstants"),
      M = require("ButtonHitTest"),
      q = require("JakeSlotGameTemplate"),
      m = require("SpinConfigHandler"),
      D = function () {
        function W(k, z) {
          this.triggerFastStop = undefined, this.name = "Normal Result Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = k, this.generalControllers = z.generalControllers;
        }
        return W.prototype.destroy = function () {
          this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
        }, W.prototype.setAvailableActions = function () {
          var k = this.generalControllers.spinButtonController;
          (k.isAutoSpin() || m.featureConfig.fastStopFeature && !this.$r()) && (k.setOnClickCallback(this.Zr.bind(this, C.SpinTrigger.CLICK)), q.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this));
        }, W.prototype.clearAvailableActions = function () {
          this.generalControllers.spinButtonController.clearOnClickCallback(), q.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
        }, W.prototype.renderFeature = function (k) {
          var z = this.generalControllers.spinButtonController;
          z.isAutoSpin() || this.clearAvailableActions(), z.stopSpin(), k && z.disableButton();
        }, W.prototype.fastStopTriggeredWhileSpinning = function () {
          this.ta();
        }, W.prototype.triggerFastStopWhileStopping = function () {
          this.ta();
        }, W.prototype.do = function (k) {
          if (!q.JSGTConfig.spaceBarInterrupterEnabled && M.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (k.keyCode) {
            case V.SPIN_BUTTON_TRIGGER_KEY:
              this.Zr(C.SpinTrigger.SPACEBAR);
          }
        }, W.prototype.Zr = function (k) {
          if (this.generalControllers.spinButtonController.isAutoSpin()) this.Qn();else if (this.triggerFastStop && m.featureConfig.fastStopFeature && !this.$r()) {
            var z = this.triggerFastStop;
            this.triggerFastStop = undefined, z(k);
          }
        }, W.prototype.Qn = function () {
          var k = this.generalControllers,
            z = k.spinButtonController;
          H.exitAutoSpin(k.spinButtonController), m.featureConfig.fastStopFeature && !this.$r() || z.disableButton();
        }, W.prototype.ta = function () {
          this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
        }, W.prototype.$r = function () {
          return this.generalControllers.slotController.getStopStyle() === x.StopStyle.FAST;
        }, W;
      }();
    exports.default = D, cc._RF.pop();
  }
}
module.exports = NormalResultDecorator;
