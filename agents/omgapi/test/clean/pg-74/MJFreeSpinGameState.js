// module: MJFreeSpinGameState
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJFreeSpinGameState(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "3aecevAbR9BLYJzY6tVzX6P", "MJFreeSpinGameState")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("MJSpinState"),
      X = F("MJPrizeState"),
      Z = F("MJResultState"),
      T = F("MJScatterState"),
      M = F("GameConstant"),
      C = F("Utils"),
      V = F("SettingMenuHelper"),
      N = F("TransactionStateMachineHandler"),
      q = F("GameEventHandler"),
      g = F("GenericLoadingScreenController"),
      K = function () {
        function O(x, p, b, L) {
          this["name"] = "Free Spin", this["dataSource"] = void 0, this["generalControllers"] = void 0, this["bonusControllers"] = void 0, this["loadingControllers"] = void 0, this["finalCallback"] = void 0, this["dataSource"] = x, this["generalControllers"] = p["generalControllers"], this["bonusControllers"] = p["bonusControllers"], this["loadingControllers"] = b, this["finalCallback"] = L;
        }
        return O["prototype"]["run"] = function () {
          {
            var x = this["dataSource"]["transactionModel"]["previousTransactionInfo"],
              p = x ? x['tw'] : void 0,
              b = this["dataSource"]["transactionModel"]["transitionFrom"];
            b === M["TransitionState"]["NORMAL"] || b === M["TransitionState"]["RESPIN"] ? this['vr']() : void 0 !== p && 0 !== p ? this['vr']() : this['_r']();
          }
        }, O["prototype"]["forceExit"] = function () {
          var x = this['mr'];
          x && x(), this['ro']();
        }, O["prototype"]['vr'] = function () {
          this['mr'] = C["sequenceCallback"](this['br']["bind"](this), this['pr']["bind"](this), this['Sr']["bind"](this), this['gr']["bind"](this), C["delayCallback"](1), this['Cr']["bind"](this), this['Mr']["bind"](this), this['yr']["bind"](this), this['wr']["bind"](this), this['Br']["bind"](this))(this['ro']["bind"](this));
        }, O["prototype"]['_r'] = function () {
          this["generalControllers"]["slotController"]["setForceGoldBlock"](!0), this['mr'] = C["sequenceCallback"](this['br']["bind"](this), this['pr']["bind"](this), this['Sr']["bind"](this), this['Mr']["bind"](this), this['yr']["bind"](this), this['wr']["bind"](this), this['Br']["bind"](this))(this['ro']["bind"](this));
        }, O["prototype"]['br'] = function (x) {
          var p = this;
          var b = {};
          b["noBet"] = !0;
          this["generalControllers"]["spinButtonController"]["disableButton"](), N["goToStateCallback"]("action", !0, b)(function () {
            p["dataSource"] && p["dataSource"]["transactionModel"]["stateTransitionTo"] === M["TransitionState"]["FREE_SPIN"] && N["transitionCompleteCallback"]("action")(x);
          });
        }, O["prototype"]['gr'] = function (x) {
          if (this["dataSource"]) {
            var p = this["bonusControllers"]["freeSpinEffectController"],
              b = this["generalControllers"]["slotController"];
            p["mahjongMovingController"]["setReadyToGoldCallback"](function () {
              b["setForceGoldBlock"](!0), b["unBlurScroll"](2), x && x();
            }), p["play"]();
          } else this['ro']();
        }, O["prototype"]['Cr'] = function (x) {
          this["bonusControllers"]["freeSpinEffectController"]["stop"](), x && x();
        }, O["prototype"]['pr'] = function (x) {
          {
            this["bonusControllers"]["remainingFreeSpinController"]["decrementFreeSpinCount"](void 0), x && x();
          }
        }, O["prototype"]['Sr'] = function (x) {
          new B["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }, x)["run"]();
        }, O["prototype"]['Mr'] = function (x) {
          {
            new Z["default"](this["dataSource"], {
              'generalControllers': this["generalControllers"],
              'bonusControllers': this["bonusControllers"]
            }, x)["run"]();
          }
        }, O["prototype"]['yr'] = function (x) {
          new X["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }, x)["run"]();
        }, O["prototype"]['wr'] = function (x) {
          new T["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"],
            'bonusControllers': this["bonusControllers"]
          }, x)["run"]();
        }, O["prototype"]['Ar'] = function (x) {
          this["loadingControllers"]["releaseBonus"](x);
        }, O["prototype"]['Br'] = function (x) {
          var p = this["dataSource"]["transactionModel"],
            b = p["transitionTo"],
            L = p["freeSpin"],
            H = this["generalControllers"];
          if (b === M["TransitionState"]["NORMAL"]) {
            {
              var U = L ? L["accumulatedWin"] : 0;
              C["sequenceCallback"](C["delayCallback"](1), function (k) {
                {
                  var Y = {};
                  Y["displayState"] = "Start";
                  Y["effectType"] = "TotalWin";
                  U > 0 ? (q["emitGameEffectStateChangedEvent"](Y), k()) : g["showLoadingPage"](k);
                }
              }, C["spawnCallback"](this['Hr']["bind"](this), this['Ar']["bind"](this), this['Or']["bind"](this)), this['Ir']["bind"](this), function (k) {
                var Y = {};
                Y["displayState"] = "End";
                Y["effectType"] = "TotalWin";
                U > 0 ? (q["emitGameEffectStateChangedEvent"](Y), H["spinButtonController"]["show"](), k()) : (H["spinButtonController"]["show"](), g["hideLoadingPage"](k));
              })(x);
            }
          } else N["transitionCompleteCallback"]("idle")(x);
        }, O["prototype"]['ro'] = function () {
          var x = this["finalCallback"];
          this["finalCallback"] = void 0, this["destroy"](), x && x();
        }, O["prototype"]['Tr'] = function () {
          V["settingMenuHelper"]["setHidden"](!1), this["generalControllers"]["settingMenuFooterController"]["returnHolder"]();
        }, O["prototype"]['Or'] = function (x) {
          var p = this;
          C["delayCallback"](0.5)(function () {
            var b = p["generalControllers"],
              L = b["backGroundController"],
              H = b["foregroundController"],
              U = b["infoboardController"],
              k = b["multiplierBoardController"],
              Y = p["dataSource"]["transactionModel"]["transitionTo"];
            L["switchBackground"](Y), H["switchBackground"](Y), U["switchBackground"](Y), p['Tr'](), k["switchMultiplier"](Y, x);
          });
        }, O["prototype"]['Hr'] = function (x) {
          {
            var p = this["dataSource"]["transactionModel"]["freeSpin"],
              b = p ? p["accumulatedWin"] : 0,
              L = this["dataSource"]["isGameReplaying"],
              H = this["generalControllers"],
              U = function (Y) {
                N["transitionCompleteCallback"]("setup")(Y);
              };
            if (b > 0) {
              {
                var k = {
                  'numberRollingEndCallback': function () {
                    var Y = {};
                    Y["displayState"] = "DidUpdate";
                    Y["effectType"] = "TotalWin";
                    q["emitGameEffectStateChangedEvent"](Y);
                  },
                  'collectButtonClickedCallback': function (Y) {
                    {
                      var y = {};
                      y["displayState"] = "WillEnd";
                      y["effectType"] = "TotalWin";
                      q["emitGameEffectStateChangedEvent"](y), U(Y);
                    }
                  }
                };
                H["totalWinController"]["setSocialShareEventCallback"](k), H["totalWinController"]["play"](b, L, x);
              }
            } else U(x);
          }
        }, O["prototype"]['Ir'] = function (x) {
          var p = this["dataSource"]["transactionModel"]["accumulatedWinAmount"];
          p > 0 ? this["generalControllers"]["infoboardController"]["setTotalWinAmount"](p) : this["generalControllers"]["infoboardController"]["switchToTips"](!0), x && x();
        }, O["prototype"]["destroy"] = function () {
          this['mr'] = void 0, this["dataSource"] = void 0, this["finalCallback"] = void 0, this["generalControllers"] = void 0, this["bonusControllers"] = void 0, this["loadingControllers"] = void 0;
        }, O;
      }();
    I["default"] = K, cc["_RF"]["pop"]();
  }
}
module.exports = MJFreeSpinGameState;
