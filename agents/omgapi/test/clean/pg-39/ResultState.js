// module: ResultState
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ResultState(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "08d5bAN5GxAf5RE9cTgDCu5", "ResultState")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("SlotStateMachine"),
      C = require("SlotAnalyticsHelper"),
      H = require("SlotAnalyticsEnum"),
      V = require("Utils"),
      M = require("SpinConfigHandler"),
      q = function () {
        function m(D, W, k, z) {
          this.name = "Result State", this.process = H.SpinStateProcess.REEL_SPINNING, this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.hasFeature = undefined, this.Tl = undefined, this.dataSource = D, this.generalControllers = W.generalControllers, this.finalCallback = k, z && (this.Tl = z, z.triggerFastStop = this.handleSlotRegionFastStop.bind(this));
        }
        return m.prototype.setAvailableActions = function () {}, m.prototype.resultDidStartRender = function (D) {
          {
            D && D();
          }
        }, m.prototype.slotDidStartStopping = function (D) {
          D && D();
        }, m.prototype.invokeSlotStop = function () {
          {
            var D = this.generalControllers.slotController;
            D.getStopStyle() === x.StopStyle.FAST ? D.fastStop() : D.stopSpin();
          }
        }, m.prototype.setupFeatureProperties = function () {
          this.hasFeature = false;
        }, m.prototype.preExitStateCleanup = function () {}, m.prototype.clearAvailableActions = function () {}, m.prototype.additionalDestroyCleanups = function () {}, m.prototype.setSlotData = function () {
          {
            this.generalControllers.slotController.setReelData(this.dataSource.transactionModel.originalReels);
          }
        }, m.prototype.onExitState = function (D) {
          {
            D();
          }
        }, m.prototype.run = function () {
          this.Ql(), this.Xl();
        }, m.prototype.Ql = function () {
          this.Zl(), this.Tl && this.Tl.setAvailableActions && this.Tl.setAvailableActions(), this.setAvailableActions();
        }, m.prototype.Xl = function () {
          V.sequenceCallback(this.resultDidStartRender.bind(this), this.$l.bind(this), this.tf.bind(this), this.if.bind(this))(this.vo.bind(this));
        }, m.prototype.$l = function (D) {
          {
            this.setSlotData(), V.spawnCallback(this.sf.bind(this), this.slotDidStartStopping.bind(this))(D);
          }
        }, m.prototype.sf = function (D) {
          {
            this.process === H.SpinStateProcess.REEL_SPINNING ? (this.process = H.SpinStateProcess.REEL_STOPPING, this.generalControllers.slotController.setStopCompletedCallback(D), this.invokeSlotStop()) : D && D();
          }
        }, m.prototype.tf = function (D) {
          this.setupFeatureProperties(), D && D();
        }, m.prototype.if = function (D) {
          var W = this.dataSource.transactionModel.winLines;
          this.process = H.SpinStateProcess.REEL_STOPPED, this.Tl && this.Tl && this.Tl.renderFeature(W || this.hasFeature), this.renderFeature(D);
        }, m.prototype.vo = function () {
          var D = this;
          this.generalControllers.slotController.setOnClickCallback(undefined), this.preExitStateCleanup(), this.onExitState(function () {
            var W = D.finalCallback;
            D.finalCallback = undefined, D.destroy(), V.deferCallback(true)(W);
          });
        }, m.prototype.destroy = function () {
          {
            this.generalControllers.slotController.setOnClickCallback(undefined), this.Tl && this.Tl.clearAvailableActions && this.Tl.clearAvailableActions(), this.clearAvailableActions(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Tl && (this.Tl.destroy(), this.Tl = undefined), this.additionalDestroyCleanups();
          }
        }, m.prototype.Zl = function () {
          {
            var D = this.generalControllers.slotController;
            M.featureConfig.fastStopFeature && D.getStopStyle() !== x.StopStyle.FAST && D.setOnClickCallback(this.handleSlotRegionFastStop.bind(this, H.SpinTrigger.CLICK));
          }
        }, m.prototype.handleSlotRegionFastStop = function (D) {
          var W = this.generalControllers,
            k = W.slotController;
          switch (this.process) {
            case H.SpinStateProcess.REEL_SPINNING:
              C.sendFastStopGA(D, W.spinButtonController.isAutoSpin()), this.Tl && this.Tl.fastStopTriggeredWhileSpinning && this.Tl.fastStopTriggeredWhileSpinning(), this.fastStopTriggeredWhileSpinning(), k.setOnClickCallback(undefined), k.markFastStop();
              break;
            case H.SpinStateProcess.REEL_STOPPING:
              C.sendFastStopGA(D, W.spinButtonController.isAutoSpin()), this.Tl && this.Tl.triggerFastStopWhileStopping && this.Tl.triggerFastStopWhileStopping(), this.triggerFastStopWhileStopping(), k.setOnClickCallback(undefined), k.fastStop();
          }
        }, m.prototype.fastStopTriggeredWhileSpinning = function () {}, m.prototype.triggerFastStopWhileStopping = function () {}, m;
      }();
    exports.default = q, cc._RF.pop();
  }
}
module.exports = ResultState;
