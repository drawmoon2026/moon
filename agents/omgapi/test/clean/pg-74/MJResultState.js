// module: MJResultState
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJResultState(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "a468fcacmlKWqOaXyMfMRTk", "MJResultState")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("ResultState"),
      X = F("GameConstant"),
      Z = F("AudioManager"),
      T = F("SlotHandler"),
      M = F("SlotAnalyticsEnum"),
      C = F("AudioConstant"),
      V = F("MultiplierBoardController"),
      N = F("TransactionStateMachineHandler"),
      q = F("Utils"),
      g = function (K) {
        {
          function O(x, p, b, L) {
            var H = K["call"](this, x, p, b, L) || this;
            return H["name"] = "MJResultState", H["generalControllers"] = void 0, H["bonusControllers"] = void 0, H["dataSource"] = void 0, H["dataSource"] = x, H["generalControllers"] = p["generalControllers"], H["bonusControllers"] = p["bonusControllers"], H["generalControllers"]["slotController"]["setOnEachStopColumnCallback"](H['na']["bind"](H)), H;
          }
          return __extends(O, K), O["prototype"]["resultDidStartRender"] = function (x) {
            {
              var p = this["dataSource"]["transactionModel"]["transitionTo"],
                b = p === X["TransitionState"]["NORMAL"] || p === X["TransitionState"]["FREE_SPIN"] ? "prize" : "idle";
              N["goToStateCallback"](b, !0)(x);
            }
          }, O["prototype"]["renderFeature"] = function (x) {
            Z["stopAudio"](C["GENERAL_AUDIO"]["reelLoop"]["key"]);
            var p = this["generalControllers"]["slotController"],
              b = this["dataSource"]["transactionModel"],
              L = b["transitionFrom"],
              H = b["transitionTo"],
              U = b["scatterCount"],
              k = b["previousTransactionInfo"],
              Y = T["slotHandler"]["getFastStop"](),
              y = function () {
                q["delayCallback"](0.875)(x);
              };
            switch (L) {
              case X["TransitionState"]["RESPIN"]:
                this['oa'](function () {
                  U ? H === X["TransitionState"]["FREE_SPIN"] ? p["playAllScatterEffect"](y, !0, !1) : U !== k['sc'] ? p["isTurboMode"]() ? (p["playNewDropScatterEffect"](), x()) : p["playNewDropScatterEffect"](x) : x() : x();
                }), this['ca']();
                break;
              case X["TransitionState"]["FREE_SPIN_RESPIN"]:
                this['ca'](), this['oa'](function () {
                  U && U !== k['sc'] ? (p["playNewDropScatterEffect"](), x()) : x();
                });
                break;
              case X["TransitionState"]["NORMAL"]:
                Y && Z["playAudio"](C["GENERAL_AUDIO"]["reelQuickstop"]["key"]), p["isFastSpinStarted"]() ? p["disableDim"](Y, function () {
                  {
                    H === X["TransitionState"]["FREE_SPIN"] ? p["playAllScatterEffect"](y, !1, !1) : x();
                  }
                }) : H === X["TransitionState"]["FREE_SPIN"] ? p["playAllScatterEffect"](y, !1, !1) : x();
                break;
              case X["TransitionState"]["FREE_SPIN"]:
                Y && Z["playAudio"](C["GENERAL_AUDIO"]["reelQuickstop"]["key"]), p["isFastSpinStarted"]() ? p["disableDim"](Y, x) : x();
                break;
              default:
                x();
            }
          }, O["prototype"]["setSlotData"] = function () {
            var x = this["generalControllers"]["slotController"],
              p = this["dataSource"]["transactionModel"],
              b = p["originalReels"],
              L = p["specialSymbolsBefore"],
              H = this["generalControllers"]["symbolPopoutController"],
              U = x["getConvertedReelData"](b);
            H["setReelData"](U), H["setAdditionalData"](L), x["setReelData"](b, L);
          }, O["prototype"]["setAvailableActions"] = function () {
            switch (this["dataSource"]["transactionModel"]["transitionFrom"]) {
              case X["TransitionState"]["RESPIN"]:
              case X["TransitionState"]["FREE_SPIN_RESPIN"]:
                this["process"] = M["SpinStateProcess"]["REEL_STOPPED"];
                break;
              case X["TransitionState"]["NORMAL"]:
              case X["TransitionState"]["FREE_SPIN"]:
              default:
                this["process"] = M["SpinStateProcess"]["REEL_SPINNING"];
            }
          }, O["prototype"]['na'] = function () {
            T["slotHandler"]["getFastStop"]() || (Z["stopAudio"](C["GENERAL_AUDIO"]["reelStopSingle"]["key"]), Z["playAudio"](C["GENERAL_AUDIO"]["reelStopSingle"]["key"]));
          }, O["prototype"]['oa'] = function (x) {
            var p = this["generalControllers"]["slotController"],
              b = this["dataSource"]["transactionModel"];
            this['ha']();
            var L = b["previousTransactionInfo"]['sc'];
            p["playShiftSlotEffect"](b["respin"], L, function () {
              {
                p["reloadData"](), x && x();
              }
            });
          }, O["prototype"]['ha'] = function (x) {
            this["generalControllers"]["slotController"]["stopSlotItemsShakeEffect"](x);
          }, O["prototype"]['ca'] = function () {
            var x = this["generalControllers"]["multiplierBoardController"],
              p = this["dataSource"]["transactionModel"],
              b = p["winMultiplier"],
              L = p["transitionTo"],
              H = V["PlayAnimType"]["Once"];
            L !== X["TransitionState"]["FREE_SPIN_RESPIN"] && L !== X["TransitionState"]["RESPIN"] || (H = V["PlayAnimType"]["Loop"]), x["setMultiplier"](b, H);
          }, O;
        }
      }(B["default"]);
    I["default"] = g, cc["_RF"]["pop"]();
  }
}
module.exports = MJResultState;
