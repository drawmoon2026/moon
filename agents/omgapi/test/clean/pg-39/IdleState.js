// module: IdleState
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function IdleState(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "9928eUmiH5DjJzRecinmoRP", "IdleState")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x);
      var C = require("AutoSpinHandler"),
        H = require("SlotGameConstants"),
        V = require("SlotAnalyticsEnum"),
        M = require("SystemFeatureHandler"),
        q = require("AnalyticsHelper"),
        m = require("GameEventHandler"),
        D = require("ButtonHitTest"),
        W = require("SettingMenuHelper"),
        k = require("Utils"),
        z = require("JakeSlotGameTemplate"),
        L = require("SpinButtonController"),
        b = require("SettingMenuHandlers"),
        U = function () {
          {
            function Q(w, P, R, T) {
              undefined === T && (T = H.DEFAULT_AUTO_SPIN_DELAY_TIME), this.name = "Idle", this.dataSource = w, this.generalControllers = P.generalControllers, this.finalCallback = R, this.Yn = {
                'dataSource': this.dataSource,
                'autoSpinCount': C.getAutoSpinCount(),
                'settingMenuHelper': W.settingMenuHelper,
                'exitAutoSpinHandler': this.Qn.bind(this),
                'callback': this.tryAutoSpin.bind(this)
              }, this.Xn = T;
            }
            return Q.prototype.run = function () {
              var w = this.Zn();
              M.handleSystemEvent(w);
            }, Q.prototype.destroy = function () {
              this.additionalDestroyCleanups(), this.disableSpinAction(), this.$n(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined;
            }, Q.prototype.tryAutoSpin = function () {
              {
                var w = this,
                  P = this.generalControllers.spinButtonController;
                if (this.io(), P.isAutoSpin()) {
                  {
                    var R = this.dataSource,
                      T = R.playerModel.balance,
                      Y = R.transactionModel.accumulatedWinAmount,
                      X = W.settingMenuHelper.isBalanceHitTargetInAutoSpinMode(Y, T);
                    if (!C.shouldAutoSpin() || X) this.Qn(), this.so();else {
                      {
                        var E = this.eo(this.no.bind(this));
                        this.oo(function () {
                          w.enableSpinAction(), E && E();
                        });
                      }
                    }
                  }
                } else this.so();
              }
            }, Q.prototype.io = function () {
              m.setGamePauseEventCallback(this.name, this.co.bind(this));
            }, Q.prototype.co = function () {
              {
                this.ho && this.$n(), m.emitGameNotifyPauseEvent();
              }
            }, Q.prototype.ro = function () {
              m.removeGamePauseEventCallback(this.name);
            }, Q.prototype.oo = function (w) {
              {
                m.setGameResumeEventCallback(this.name, w);
              }
            }, Q.prototype.eo = function (w) {
              {
                var P = m.isGameStatePaused() ? 1 : 0;
                return function () {
                  w && w(P);
                };
              }
            }, Q.prototype.ao = function () {
              {
                m.removeGameResumeEventCallback(this.name);
              }
            }, Q.prototype.so = function () {
              var w = this.generalControllers.spinButtonController;
              w.enableButton(), w.idle(), this.onStateFullyIdle(), this.uo(), this.enableAvailableActions(), this.oo(this.enableSpinAction.bind(this));
            }, Q.prototype.lo = function (w) {
              {
                this.generalControllers.spinButtonController.isAutoSpin() ? (this.Qn(), this.so()) : this.fo(w);
              }
            }, Q.prototype.do = function (w) {
              if (!z.JSGTConfig.spaceBarInterrupterEnabled && D.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (w.keyCode) {
                case H.SPIN_BUTTON_TRIGGER_KEY:
                  this.lo(V.SpinTrigger.SPACEBAR);
              }
            }, Q.prototype.spinCashCredit = function (w) {
              var P = this.generalControllers.spinButtonController;
              W.settingMenuHelper.setWinAmount(0), P.isAutoSpin() && C.decrementAutoSpinCount(P), this.vo(w);
            }, Q.prototype.spinInvalidBet = function () {
              this.Qn(), this.so();
            }, Q.prototype.spinInsufficientCredit = function (w) {
              this.spinInvalidBet(w);
            }, Q.prototype.fo = function (w) {
              var P = this,
                R = this.generalControllers.spinButtonController;
              R && R.mode === L.SpinButtonMode.DISABLED || this.preStartSpinAction(function () {
                M.checkSpinValidity({
                  'getCostPerSpinFunction': P.getCostPerSpin.bind(P, w),
                  'dataSource': P.dataSource,
                  'callback': function (T) {
                    switch (T) {
                      case V.SpinCredits.CASH:
                        P.spinCashCredit(w);
                        break;
                      case V.SpinCredits.BET_INVALID:
                        P.spinInvalidBet(w);
                        break;
                      case V.SpinCredits.INSUFFICIENT:
                        P.spinInsufficientCredit(w);
                    }
                  }
                });
              });
            }, Q.prototype.$n = function () {
              var w = this.ho;
              this.ho = undefined, w && w();
            }, Q.prototype.vo = function (w) {
              var P = this;
              if (!this.dataSource.isGameReplaying) {
                var R = W.settingMenuHelper.turboSpinOn ? "Turbo" : "Normal",
                  T = w === V.SpinTrigger.AUTOSPIN ? "Auto" : "Manual";
                var Y = {};
                Y.actionName = '' + R + T + "Spin";
                q.sendAnalyticsEvent(Y);
              }
              this.disableAvailableActions(), this._o(), this.disableSpinAction(), this.preExitStateCleanups(), this.ro(), this.ao(), this.onExitState(function () {
                var X = P.finalCallback;
                P.finalCallback = undefined, P.destroy(), k.deferCallback(true)(function () {
                  k.deferCallback(true)(X);
                });
              });
            }, Q.prototype.onStateFullyIdle = function () {}, Q.prototype.additionalDestroyCleanups = function () {}, Q.prototype.preExitStateCleanups = function () {}, Q.prototype.enableAvailableActions = function () {}, Q.prototype.disableAvailableActions = function () {}, Q.prototype.preStartSpinAction = function (w) {
              w && w();
            }, Q.prototype.defineSystemEventConfigParam = function () {
              return {};
            }, Q.prototype.onExitState = function (w) {
              w();
            }, Q.prototype.Zn = function () {
              var w = this.defineSystemEventConfigParam();
              return Object.assign(this.Yn, w);
            }, Q.prototype.uo = function () {
              {
                W.settingMenuHelper.autoSpinCallback = this.po.bind(this), b.setSettingMenuButtonsInteractable(W.settingMenuHelper, this.dataSource, true);
              }
            }, Q.prototype._o = function () {
              {
                W.settingMenuHelper.autoSpinCallback = undefined, b.setSettingMenuButtonsInteractable(W.settingMenuHelper, this.dataSource, false);
              }
            }, Q.prototype.enableSpinAction = function () {
              this.generalControllers.spinButtonController.setOnClickCallback(this.lo.bind(this)), z.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
            }, Q.prototype.disableSpinAction = function () {
              this.generalControllers.spinButtonController.clearOnClickCallback(), z.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
            }, Q.prototype.po = function () {
              {
                var w = this,
                  P = W.settingMenuHelper.autoSpinCount,
                  R = W.settingMenuHelper.singleWinAmount,
                  T = W.settingMenuHelper.balanceAmountMoreThan,
                  Y = W.settingMenuHelper.balanceAmountLessThan;
                var X = {};
                X.count = P;
                X.single_win = R;
                X.increment = T;
                X.decrement = Y;
                q.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_AUTO_SPIN, X), this._o(), this.disableAvailableActions(), C.startAutoSpin(P, this.generalControllers.spinButtonController, function () {
                  w.oo(w.no.bind(w, w.Xn));
                });
              }
            }, Q.prototype.Qn = function () {
              var w = this.generalControllers.spinButtonController;
              C.exitAutoSpin(w), w.idle(), this.$n(), this.enableAvailableActions(), this.uo(), this.oo(this.enableSpinAction.bind(this));
            }, Q.prototype.no = function (w) {
              var P = this.dataSource.transactionModel.accumulatedWinAmount > 0 ? 0 : this.Xn;
              P = w || P, this.ho = k.delayCallback(P)(this.fo.bind(this, V.SpinTrigger.AUTOSPIN));
            }, Q.prototype.getCostPerSpin = function (w) {
              {
                if (w === V.SpinTrigger.FEATURE_BUY) throw Error("overwrite getCostPerSpin function for support feature buy spin");
                var P = this.dataSource.systemModel.maxLineNumber,
                  R = this.dataSource.transactionModel,
                  T = R.betSizeValue,
                  Y = R.betLevelValue;
                return k.toDecimalWithExp(T * Y * P, 2);
              }
            }, Q;
          }
        }();
      exports.default = U, cc._RF.pop();
    }
  }
}
module.exports = IdleState;
