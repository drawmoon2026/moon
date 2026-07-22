// module: MJIdleState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJIdleState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "a86bdnAkJJI/Ib/qSReHspQ", "MJIdleState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("IdleState"),
      X = require("AudioManager"),
      Z = require("TransactionStateMachineHandler"),
      T = require("SpaceBarInterrupter"),
      M = require("GameEventHandler"),
      C = function (V) {
        function N() {
          return null !== V && V.apply(this, arguments) || this;
        }
        return __extends(N, V), N.prototype.onStateFullyIdle = function () {
          this.generalControllers.symbolPopoutController.enablePanel(), this.generalControllers.symbolPopoutController.setupButtonEvent(), X.scheduleVocals();
        }, N.prototype.preExitStateCleanups = function () {
          this.generalControllers.symbolPopoutController.disablePanel(), this.generalControllers.symbolPopoutController.clearOnClickCallback(), this.generalControllers.symbolPopoutController.hidePopOutItem(), X.unscheduleVocals();
        }, N.prototype.onExitState = function (q) {
          Z.transitionCompleteCallback("action")(q);
        }, N.prototype.defineSystemEventConfigParam = function () {
          var q = this;
          return {
            'callback': function () {
              var f = q.dataSource;
              f.isReplayDone ? (f.isReplayDone = false, T.spaceBarInterrupter.resume(), q.tryAutoSpin()) : Z.goToStateCallback("action", true)(q.tryAutoSpin.bind(q));
            }
          };
        }, N.prototype.run = function () {
          var q = this,
            f = function () {
              V.prototype.run.call(q);
            };
          this.dataSource.isReplayDone ? f() : Z.goToStateCallback("idle")(f);
        }, N.prototype.enableAvailableActions = function () {
          this.dataSource.isGameReplaying && (M.removeGamePauseEventCallback(this.name), M.removeGameResumeEventCallback(this.name), this.enableSpinAction());
        }, N;
      }(B.default);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = MJIdleState;
