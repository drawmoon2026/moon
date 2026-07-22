// module: NormalSpinDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function NormalSpinDecorator(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "2e3a0I2XG9HlaoLlfg0FwUG", "NormalSpinDecorator")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = require("SlotStateMachine"),
      H = require("AutoSpinHandler"),
      V = require("SlotAnalyticsEnum"),
      M = require("SlotGameConstants"),
      q = require("ButtonHitTest"),
      m = require("SettingMenuHelper"),
      D = require("JakeSlotGameTemplate"),
      W = require("SpinConfigHandler"),
      k = function () {
        function z(L, v) {
          this.triggerFastStop = undefined, this.name = "Normal Spin Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = L, this.generalControllers = v.generalControllers;
        }
        return z.prototype.destroy = function () {
          this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
        }, z.prototype.stateWillStartSpin = function () {
          this.generalControllers.spinButtonController.spin();
        }, z.prototype.setAvailableActions = function () {
          var L = this.generalControllers.spinButtonController;
          L.isAutoSpin() || W.featureConfig.fastStopFeature && !m.settingMenuHelper.turboSpinOn ? (L.setOnClickCallback(this.Zr.bind(this, V.SpinTrigger.CLICK)), D.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this)) : L.disableButton();
        }, z.prototype.clearAvailableActions = function () {
          this.generalControllers.spinButtonController.clearOnClickCallback(), D.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
        }, z.prototype.slotFastStopTriggered = function () {
          this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
        }, z.prototype.startSlotController = function () {
          this.generalControllers.slotController.spin(m.settingMenuHelper.turboSpinOn);
        }, z.prototype.do = function (L) {
          if (!D.JSGTConfig.spaceBarInterrupterEnabled && q.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (L.keyCode) {
            case M.SPIN_BUTTON_TRIGGER_KEY:
              this.Zr(V.SpinTrigger.SPACEBAR);
          }
        }, z.prototype.Zr = function (L) {
          if (this.generalControllers.spinButtonController.isAutoSpin()) this.Qn();else if (W.featureConfig.fastStopFeature && !this.$r()) {
            var v = this.triggerFastStop;
            this.triggerFastStop = undefined, v(L);
          }
        }, z.prototype.Qn = function () {
          var L = this.generalControllers,
            v = L.spinButtonController;
          H.exitAutoSpin(L.spinButtonController), W.featureConfig.fastStopFeature && !this.$r() || v.disableButton();
        }, z.prototype.$r = function () {
          return this.generalControllers.slotController.getStopStyle() === C.StopStyle.FAST;
        }, z;
      }();
    exports.default = k, cc._RF.pop();
  }
}
module.exports = NormalSpinDecorator;
