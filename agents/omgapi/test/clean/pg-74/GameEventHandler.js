// module: GameEventHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, module)
function GameEventHandler(F, module) {
  'use strict';

  if (!cc._RF.push(module, "6da04mFMhpNcpdeGLQM+RKD", "GameEventHandler")) {
    var j = {};
    j.subscribeGameInfoUpdateEvent = "subscribeUpdateGameInfoEvent";
    j.subscribeGameLayoutInfoRequestEvent = "subscribeGameLayoutInfoEvent";
    j.subscribeGameConfigRequestEvent = "subscribeGameConfigRequest";
    j.subscribeGameConfigUpdateEvent = "subscribeGameConfigUpdateRequest";
    j.subscribeAudioPlayRateUpdateEvent = "subscribeUpdateAudioPlayRateEvent";
    j.subscribeInUIIdleStateStatusUpdateEvent = "subscribeUIIdleStateEvent";
    j.subscribeOperatorCurrencyFormatUpdateEvent = "subscribeOperatorCurrencyFormatUpdate";
    j.subscribeStoredGamesNameRequestEvent = "subscribeGameNameRequestEvent";
    j.emitGameStateChangedEvent = "emitGameStateChange";
    j.emitAutoplayStartedEvent = "emitAutoplayStarted";
    j.emitAutoplayStoppedEvent = "emitAutoplayStopped";
    j.emitErrorLogEvent = "emitErrorLog";
    j.emitGamePlayUIBlockEvent = "emitBlockUIEvent";
    j.addGamePauseEventCallback = "setGamePauseEventCallback";
    j.addGameResumeEventCallback = "setGameResumeEventCallback";
    j.addTransactionInfoChangedEventCallback = "setTransactionInfoChangedCallback";
    j.removeTransactionInfoChangedEventCallback = "removeTransactionInfoChangedCallback";
    j.addGamePlayUIBlockEventCallback = "setGamePlayUIBlockEventCallback";
    j.addInUIIdleStateCallback = "setInUIIdleStateCallback";
    j.subscribeSessionSocketErrorEvent = "subscribeOperationSocketErrorEvent";
    j.subscribeSessionSocketConnectedEvent = "subscribeOperationSocketConnectedEvent";
    j.subscribeSessionSocketConnectionStatusRequestEvent = "subscribeOperationSocketConnectionStatusRequestEvent";
    var I = System.get("bvframework").GameEventHandler,
      B = __assign({}, I);
    for (var X in Object.keys(m).forEach(function (Z) {
      B[m[Z]] = B[Z];
    }), B) module.exports[X] = B[X];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameEventHandler;
