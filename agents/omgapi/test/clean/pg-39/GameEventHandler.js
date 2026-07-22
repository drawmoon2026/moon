// module: GameEventHandler
// Cocos 模块函数,参数 (require, module, exports) = (j, module)
function GameEventHandler(j, module) {
  'use strict';

  if (!cc._RF.push(module, "6da04mFMhpNcpdeGLQM+RKD", "GameEventHandler")) {
    var y = {};
    y.subscribeGameInfoUpdateEvent = "subscribeUpdateGameInfoEvent";
    y.subscribeGameLayoutInfoRequestEvent = "subscribeGameLayoutInfoEvent";
    y.subscribeGameConfigRequestEvent = "subscribeGameConfigRequest";
    y.subscribeGameConfigUpdateEvent = "subscribeGameConfigUpdateRequest";
    y.subscribeAudioPlayRateUpdateEvent = "subscribeUpdateAudioPlayRateEvent";
    y.subscribeInUIIdleStateStatusUpdateEvent = "subscribeUIIdleStateEvent";
    y.subscribeOperatorCurrencyFormatUpdateEvent = "subscribeOperatorCurrencyFormatUpdate";
    y.subscribeStoredGamesNameRequestEvent = "subscribeGameNameRequestEvent";
    y.emitGameStateChangedEvent = "emitGameStateChange";
    y.emitAutoplayStartedEvent = "emitAutoplayStarted";
    y.emitAutoplayStoppedEvent = "emitAutoplayStopped";
    y.emitErrorLogEvent = "emitErrorLog";
    y.emitUIBlockEvent = "emitBlockUIEvent";
    y.addGamePausedEventCallback = "setGamePauseEventCallback";
    y.addGameResumedEventCallback = "setGameResumeEventCallback";
    y.addTransactionInfoChangedEventCallback = "setTransactionInfoChangedCallback";
    y.removeTransactionInfoChangedEventCallback = "removeTransactionInfoChangedCallback";
    y.addUIBlockEventCallback = "setGamePlayUIBlockEventCallback";
    y.addInUIIdleStateCallback = "setInUIIdleStateCallback";
    y.subscribeSessionSocketErrorEvent = "subscribeOperationSocketErrorEvent";
    y.subscribeSessionSocketConnectedEvent = "subscribeOperationSocketConnectedEvent";
    y.subscribeSessionSocketConnectionStatusRequestEvent = "subscribeOperationSocketConnectionStatusRequestEvent";
    var B = System.get("bvframework").GameEventHandler,
      x = y,
      C = __assign({}, B);
    for (var H in Object.keys(x).forEach(function (r) {
      {
        C[x[r]] = C[r];
      }
    }), C.emitGameWinAnnouncement = function () {}, C) module.exports[H] = C[H];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameEventHandler;
