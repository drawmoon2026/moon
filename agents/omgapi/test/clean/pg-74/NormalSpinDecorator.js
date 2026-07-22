// module: NormalSpinDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NormalSpinDecorator(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "2e3a0I2XG9HlaoLlfg0FwUG", "NormalSpinDecorator")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(exports, "__esModule", m);
      var B = require("SlotStateMachine"),
        X = require("AutoSpinHandler"),
        Z = require("SlotAnalyticsEnum"),
        T = require("SlotGameConstants"),
        M = require("ButtonHitTest"),
        C = require("SettingMenuHelper"),
        V = require("JakeSlotGameTemplate"),
        N = require("SpinConfigHandler"),
        q = function () {
          function f(g, K) {
            this.triggerFastStop = undefined, this.name = "Normal Spin Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = g, this.generalControllers = K.generalControllers;
          }
          return f.prototype.destroy = function () {
            {
              this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
            }
          }, f.prototype.stateWillStartSpin = function () {
            this.generalControllers.spinButtonController.spin();
          }, f.prototype.setAvailableActions = function () {
            var g = this.generalControllers.spinButtonController;
            g.isAutoSpin() || N.featureConfig.fastStopFeature && !C.settingMenuHelper.turboSpinOn ? (g.setOnClickCallback(this.af.bind(this, Z.SpinTrigger.CLICK)), V.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this)) : g.disableButton();
          }, f.prototype.clearAvailableActions = function () {
            this.generalControllers.spinButtonController.clearOnClickCallback(), V.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this);
          }, f.prototype.slotFastStopTriggered = function () {
            this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
          }, f.prototype.startSlotController = function () {
            this.generalControllers.slotController.spin(C.settingMenuHelper.turboSpinOn);
          }, f.prototype.ho = function (g) {
            {
              if (!V.JSGTConfig.spaceBarInterrupterEnabled && M.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (g.keyCode) {
                case T.SPIN_BUTTON_TRIGGER_KEY:
                  this.af(Z.SpinTrigger.SPACEBAR);
              }
            }
          }, f.prototype.af = function (g) {
            if (this.generalControllers.spinButtonController.isAutoSpin()) this.Jn();else if (N.featureConfig.fastStopFeature && !this.uf()) {
              var K = this.triggerFastStop;
              this.triggerFastStop = undefined, K(g);
            }
          }, f.prototype.Jn = function () {
            var g = this.generalControllers,
              K = g.spinButtonController;
            X.exitAutoSpin(g.spinButtonController), N.featureConfig.fastStopFeature && !this.uf() || K.disableButton();
          }, f.prototype.uf = function () {
            return this.generalControllers.slotController.getStopStyle() === B.StopStyle.FAST;
          }, f;
        }();
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = NormalSpinDecorator;
