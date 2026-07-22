// module: MJSpinState
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJSpinState(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "17edcxDqq9BuY88Uc4rdBbm", "MJSpinState")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("MJAPIClient"),
      X = F("GameConstant"),
      Z = F("SpinState"),
      T = F("RequestHandler"),
      M = F("AudioManager"),
      C = F("AudioConstant"),
      V = F("SlotHandler"),
      N = F("Utils"),
      q = F("AutoSpinHandler"),
      g = F("TransactionStateMachineHandler"),
      K = function (O) {
        function x(p, b, L, H) {
          var U = O["call"](this, p, b, L, H) || this;
          return U["name"] = "MJSpinState", U["generalControllers"] = void 0, U["dataSource"] = void 0, U["dataSource"] = p, U["generalControllers"] = b["generalControllers"], U;
        }
        return __extends(x, O), x["prototype"]["callApi"] = function (p) {
          N["sequenceCallback"](g["goToStateCallback"]("result", !0), this['gu']["bind"](this))(p);
        }, x["prototype"]['gu'] = function (p) {
          {
            var b = this;
            T["doTransactionAPIRequest"]({
              'name': this["name"],
              'apiRequest': B["mjApiClient"]["spin"]["bind"](B["mjApiClient"]),
              'fallbackRequest': B["mjApiClient"]["getGameInfo"]["bind"](B["mjApiClient"])
            }, this["dataSource"], function (L, H) {
              {
                H && H['dt'] && (L && q["shouldAutoSpin"]() && q["exitAutoSpin"](b["generalControllers"]["spinButtonController"]), g["transitionCompleteCallback"]("result")(p));
              }
            });
          }
        }, x["prototype"]["stateWillStartSpin"] = function () {
          {
            switch (this["dataSource"]["transactionModel"]["transitionTo"]) {
              case X["TransitionState"]["NORMAL"]:
                this['Cu'](), this["generalControllers"]["multiplierBoardController"]["resetMultiplier"]();
                break;
              case X["TransitionState"]["FREE_SPIN"]:
                M["playAudio"](C["GENERAL_AUDIO"]["bonusReelSpin"]["key"]), this['Cu'](), this["generalControllers"]["multiplierBoardController"]["resetMultiplier"]();
            }
          }
        }, x["prototype"]['Cu'] = function () {
          var p = this["generalControllers"]["infoboardController"];
          p["hideWin"]();
          var b = this["dataSource"]["transactionModel"]["transitionTo"],
            L = !(!V["slotHandler"]["isTurboMode"]() && !V["slotHandler"]["isFreeSpinTurboMode"]());
          b === X["TransitionState"]["NORMAL"] ? p["switchToTips"](L) : b === X["TransitionState"]["FREE_SPIN"] && p["freeSpinTips"](L);
        }, x;
      }(Z["default"]);
    I["default"] = K, cc["_RF"]["pop"]();
  }
}
module.exports = MJSpinState;
