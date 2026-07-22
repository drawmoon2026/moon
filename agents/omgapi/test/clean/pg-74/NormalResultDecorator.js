// module: NormalResultDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NormalResultDecorator(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "94e3b2snKRKspFrhelPCcrj", "NormalResultDecorator")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SlotStateMachine"),
      X = require("SlotAnalyticsEnum"),
      Z = require("AutoSpinHandler"),
      T = require("SlotGameConstants"),
      M = require("ButtonHitTest"),
      C = require("JakeSlotGameTemplate"),
      V = require("SpinConfigHandler"),
      N = function () {
        function q(f, g) {
          this.triggerFastStop = undefined, this.name = "Normal Result Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = f, this.generalControllers = g.generalControllers;
        }
        return q.prototype.destroy = function () {
          this.clearAvailableActions(), this.triggerFastStop = undefined, this.dataSource = undefined, this.generalControllers = undefined;
        }, q.prototype.setAvailableActions = function () {
          var f = this.generalControllers.spinButtonController;
          (f.isAutoSpin() || V.featureConfig.fastStopFeature && !this.uf()) && (f.setOnClickCallback(this.af.bind(this, X.SpinTrigger.CLICK)), C.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this));
        }, q.prototype.clearAvailableActions = function () {
          this.generalControllers.spinButtonController.clearOnClickCallback(), C.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this);
        }, q.prototype.renderFeature = function (f) {
          var g = this.generalControllers.spinButtonController;
          g.isAutoSpin() || this.clearAvailableActions(), g.stopSpin(), f && g.disableButton();
        }, q.prototype.fastStopTriggeredWhileSpinning = function () {
          this.lf();
        }, q.prototype.triggerFastStopWhileStopping = function () {
          this.lf();
        }, q.prototype.ho = function (f) {
          if (!C.JSGTConfig.spaceBarInterrupterEnabled && M.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (f.keyCode) {
            case T.SPIN_BUTTON_TRIGGER_KEY:
              this.af(X.SpinTrigger.SPACEBAR);
          }
        }, q.prototype.af = function (f) {
          if (this.generalControllers.spinButtonController.isAutoSpin()) this.Jn();else if (this.triggerFastStop && V.featureConfig.fastStopFeature && !this.uf()) {
            var g = this.triggerFastStop;
            this.triggerFastStop = undefined, g(f);
          }
        }, q.prototype.Jn = function () {
          var f = this.generalControllers,
            g = f.spinButtonController;
          Z.exitAutoSpin(f.spinButtonController), V.featureConfig.fastStopFeature && !this.uf() || g.disableButton();
        }, q.prototype.lf = function () {
          this.clearAvailableActions(), this.generalControllers.spinButtonController.disableButton();
        }, q.prototype.uf = function () {
          return this.generalControllers.slotController.getStopStyle() === B.StopStyle.FAST;
        }, q;
      }();
    exports.default = N, cc._RF.pop();
  }
}
module.exports = NormalResultDecorator;
