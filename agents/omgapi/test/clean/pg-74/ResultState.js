// module: ResultState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ResultState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "08d5bAN5GxAf5RE9cTgDCu5", "ResultState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SlotStateMachine"),
      X = require("SlotAnalyticsHelper"),
      Z = require("SlotAnalyticsEnum"),
      T = require("Utils"),
      M = require("SpinConfigHandler"),
      C = function () {
        function V(N, q, f, g) {
          this.name = "Result State", this.process = Z.SpinStateProcess.REEL_SPINNING, this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.hasFeature = undefined, this.Yf = undefined, this.dataSource = N, this.generalControllers = q.generalControllers, this.finalCallback = f, g && (this.Yf = g, g.triggerFastStop = this.handleSlotRegionFastStop.bind(this));
        }
        return V.prototype.setAvailableActions = function () {}, V.prototype.resultDidStartRender = function (N) {
          {
            N && N();
          }
        }, V.prototype.slotDidStartStopping = function (N) {
          N && N();
        }, V.prototype.invokeSlotStop = function () {
          {
            var N = this.generalControllers.slotController;
            N.getStopStyle() === B.StopStyle.FAST ? N.fastStop() : N.stopSpin();
          }
        }, V.prototype.setupFeatureProperties = function () {
          this.hasFeature = false;
        }, V.prototype.preExitStateCleanup = function () {}, V.prototype.clearAvailableActions = function () {}, V.prototype.additionalDestroyCleanups = function () {}, V.prototype.setSlotData = function () {
          {
            this.generalControllers.slotController.setReelData(this.dataSource.transactionModel.originalReels);
          }
        }, V.prototype.onExitState = function (N) {
          {
            N();
          }
        }, V.prototype.run = function () {
          this.wd(), this.Bd();
        }, V.prototype.wd = function () {
          this.Ad(), this.Yf && this.Yf.setAvailableActions && this.Yf.setAvailableActions(), this.setAvailableActions();
        }, V.prototype.Bd = function () {
          T.sequenceCallback(this.resultDidStartRender.bind(this), this.Hd.bind(this), this.Od.bind(this), this.Id.bind(this))(this.ro.bind(this));
        }, V.prototype.Hd = function (N) {
          this.setSlotData(), T.spawnCallback(this.Td.bind(this), this.slotDidStartStopping.bind(this))(N);
        }, V.prototype.Td = function (N) {
          {
            this.process === Z.SpinStateProcess.REEL_SPINNING ? (this.process = Z.SpinStateProcess.REEL_STOPPING, this.generalControllers.slotController.setStopCompletedCallback(N), this.invokeSlotStop()) : N && N();
          }
        }, V.prototype.Od = function (N) {
          {
            this.setupFeatureProperties(), N && N();
          }
        }, V.prototype.Id = function (N) {
          var q = this.dataSource.transactionModel.winLines;
          this.process = Z.SpinStateProcess.REEL_STOPPED, this.Yf && this.Yf && this.Yf.renderFeature(q || this.hasFeature), this.renderFeature(N);
        }, V.prototype.ro = function () {
          {
            var N = this;
            this.generalControllers.slotController.setOnClickCallback(undefined), this.preExitStateCleanup(), this.onExitState(function () {
              {
                var q = N.finalCallback;
                N.finalCallback = undefined, N.destroy(), T.deferCallback(true)(q);
              }
            });
          }
        }, V.prototype.destroy = function () {
          {
            this.generalControllers.slotController.setOnClickCallback(undefined), this.Yf && this.Yf.clearAvailableActions && this.Yf.clearAvailableActions(), this.clearAvailableActions(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.Yf && (this.Yf.destroy(), this.Yf = undefined), this.additionalDestroyCleanups();
          }
        }, V.prototype.Ad = function () {
          var N = this.generalControllers.slotController;
          M.featureConfig.fastStopFeature && N.getStopStyle() !== B.StopStyle.FAST && N.setOnClickCallback(this.handleSlotRegionFastStop.bind(this, Z.SpinTrigger.CLICK));
        }, V.prototype.handleSlotRegionFastStop = function (N) {
          var q = this.generalControllers,
            f = q.slotController;
          switch (this.process) {
            case Z.SpinStateProcess.REEL_SPINNING:
              X.sendFastStopGA(N, q.spinButtonController.isAutoSpin()), this.Yf && this.Yf.fastStopTriggeredWhileSpinning && this.Yf.fastStopTriggeredWhileSpinning(), this.fastStopTriggeredWhileSpinning(), f.setOnClickCallback(undefined), f.markFastStop();
              break;
            case Z.SpinStateProcess.REEL_STOPPING:
              X.sendFastStopGA(N, q.spinButtonController.isAutoSpin()), this.Yf && this.Yf.triggerFastStopWhileStopping && this.Yf.triggerFastStopWhileStopping(), this.triggerFastStopWhileStopping(), f.setOnClickCallback(undefined), f.fastStop();
          }
        }, V.prototype.fastStopTriggeredWhileSpinning = function () {}, V.prototype.triggerFastStopWhileStopping = function () {}, V;
      }();
    exports.default = C, cc._RF.pop();
  }
}
module.exports = ResultState;
