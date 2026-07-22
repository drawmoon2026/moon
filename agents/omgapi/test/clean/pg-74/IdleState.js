// module: IdleState
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, I)
function IdleState(require, exports, I) {
  'use strict';

  if (!cc._RF.push(exports, "9928eUmiH5DjJzRecinmoRP", "IdleState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = require("AutoSpinHandler"),
      X = require("SlotGameConstants"),
      Z = require("SlotAnalyticsEnum"),
      T = require("SystemFeatureHandler"),
      M = require("AnalyticsHelper"),
      C = require("GameEventHandler"),
      V = require("ButtonHitTest"),
      N = require("SlotDependencyManager"),
      q = require("SettingMenuHelper"),
      g = require("Utils"),
      K = require("JakeSlotGameTemplate"),
      O = require("SpinButtonController"),
      x = function () {
        function p(b, L, H, U) {
          undefined === U && (U = X.DEFAULT_AUTO_SPIN_DELAY_TIME), this.name = "Idle", this.dataSource = b, this.generalControllers = L.generalControllers, this.finalCallback = H, this.Wn = {
            'dataSource': this.dataSource,
            'autoSpinCount': B.getAutoSpinCount(),
            'walletHelper': N.walletHelper,
            'settingMenuHelper': q.settingMenuHelper,
            'exitAutoSpinHandler': this.Jn.bind(this),
            'callback': this.tryAutoSpin.bind(this)
          }, this.Vn = U;
        }
        return p.prototype.run = function () {
          var b = this.zn();
          T.handleSystemEvent(b);
        }, p.prototype.destroy = function () {
          this.additionalDestroyCleanups(), this.disableSpinAction(), this.Kn(), this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined;
        }, p.prototype.tryAutoSpin = function () {
          var b = this,
            L = this.generalControllers.spinButtonController;
          if (this.qn(), L.isAutoSpin()) {
            var H = this.dataSource,
              U = H.playerModel.balance,
              k = H.transactionModel.accumulatedWinAmount,
              Y = q.settingMenuHelper.isBalanceHitTargetInAutoSpinMode(k, U);
            if (!B.shouldAutoSpin() || Y) this.Jn(), this.Qn();else {
              var y = this.Yn(this.Zn.bind(this));
              this.Xn(function () {
                b.enableSpinAction(), y && y();
              });
            }
          } else this.Qn();
        }, p.prototype.qn = function () {
          C.setGamePauseEventCallback(this.name, this.$n.bind(this));
        }, p.prototype.$n = function () {
          this.io && this.Kn(), C.emitGameNotifyPauseEvent();
        }, p.prototype.so = function () {
          C.removeGamePauseEventCallback(this.name);
        }, p.prototype.Xn = function (b) {
          C.setGameResumeEventCallback(this.name, b);
        }, p.prototype.Yn = function (b) {
          var L = C.isGameStatePaused() ? 1 : 0;
          return function () {
            b && b(L);
          };
        }, p.prototype.eo = function () {
          C.removeGameResumeEventCallback(this.name);
        }, p.prototype.Qn = function () {
          var b = this.generalControllers.spinButtonController;
          b.enableButton(), b.idle(), this.onStateFullyIdle(), this.no(), this.enableAvailableActions(), this.Xn(this.enableSpinAction.bind(this));
        }, p.prototype.oo = function (b) {
          this.generalControllers.spinButtonController.isAutoSpin() ? (this.Jn(), this.Qn()) : this.co(b);
        }, p.prototype.ho = function (b) {
          if (!K.JSGTConfig.spaceBarInterrupterEnabled && V.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (b.keyCode) {
            case X.SPIN_BUTTON_TRIGGER_KEY:
              this.oo(Z.SpinTrigger.SPACEBAR);
          }
        }, p.prototype.co = function (b) {
          var L = this,
            H = this.generalControllers.spinButtonController;
          H && H.mode === O.SpinButtonMode.DISABLED || this.preStartSpinAction(function () {
            T.checkSpinValidity({
              'getCostPerSpinFunction': L.getCostPerSpin.bind(L, b),
              'dataSource': L.dataSource,
              'walletHelper': N.walletHelper,
              'callback': function (U) {
                switch (U) {
                  case Z.SpinCredits.FREE_GAME:
                    q.settingMenuHelper.setWinAmount(0), N.walletHelper.spin(), H.isAutoSpin() && B.decrementAutoSpinCount(H), L.ro(b);
                    break;
                  case Z.SpinCredits.CASH:
                  case Z.SpinCredits.BONUS:
                    L.ao(b), H.isAutoSpin() && B.decrementAutoSpinCount(H), L.ro(b);
                    break;
                  case Z.SpinCredits.BET_INVALID:
                    L.Jn(), L.Qn();
                }
              }
            });
          });
        }, p.prototype.Kn = function () {
          var b = this.io;
          this.io = undefined, b && b();
        }, p.prototype.ro = function (b) {
          var L = this;
          if (!this.dataSource.isGameReplaying) {
            var H = q.settingMenuHelper.turboSpinOn ? "Turbo" : "Normal",
              U = b === Z.SpinTrigger.AUTOSPIN ? "Auto" : "Manual";
            var k = {};
            k.actionName = '' + H + U + "Spin";
            M.sendAnalyticsEvent(k);
          }
          this.disableAvailableActions(), this.uo(), this.disableSpinAction(), this.preExitStateCleanups(), this.so(), this.eo(), this.onExitState(function () {
            var Y = L.finalCallback;
            L.finalCallback = undefined, L.destroy(), g.deferCallback(true)(function () {
              g.deferCallback(true)(Y);
            });
          });
        }, p.prototype.onStateFullyIdle = function () {}, p.prototype.additionalDestroyCleanups = function () {}, p.prototype.preExitStateCleanups = function () {}, p.prototype.enableAvailableActions = function () {}, p.prototype.disableAvailableActions = function () {}, p.prototype.preStartSpinAction = function (b) {
          b && b();
        }, p.prototype.defineSystemEventConfigParam = function () {
          return {};
        }, p.prototype.onExitState = function (b) {
          b();
        }, p.prototype.zn = function () {
          var b = this.defineSystemEventConfigParam();
          return Object.assign(this.Wn, b);
        }, p.prototype.no = function () {
          q.settingMenuHelper.autoSpinCallback = this.lo.bind(this), q.settingMenuHelper.setAllButtonsInteractable(true);
        }, p.prototype.uo = function () {
          q.settingMenuHelper.autoSpinCallback = undefined, q.settingMenuHelper.setAllButtonsInteractable(false);
        }, p.prototype.enableSpinAction = function () {
          this.generalControllers.spinButtonController.setOnClickCallback(this.oo.bind(this)), K.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this);
        }, p.prototype.disableSpinAction = function () {
          this.generalControllers.spinButtonController.clearOnClickCallback(), K.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this);
        }, p.prototype.lo = function () {
          var b = this,
            L = q.settingMenuHelper.autoSpinCount,
            H = q.settingMenuHelper.singleWinAmount,
            U = q.settingMenuHelper.balanceAmountMoreThan,
            k = q.settingMenuHelper.balanceAmountLessThan;
          var Y = {};
          Y.count = L;
          Y.single_win = H;
          Y.increment = U;
          Y.decrement = k;
          M.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_AUTO_SPIN, Y), this.uo(), this.disableAvailableActions(), B.startAutoSpin(L, this.generalControllers.spinButtonController, function () {
            b.Xn(b.Zn.bind(b, b.Vn));
          });
        }, p.prototype.Jn = function () {
          var b = this.generalControllers.spinButtonController;
          B.exitAutoSpin(b), b.idle(), this.Kn(), this.enableAvailableActions(), this.no(), this.Xn(this.enableSpinAction.bind(this));
        }, p.prototype.Zn = function (b) {
          var L = this.dataSource.transactionModel.accumulatedWinAmount > 0 ? 0 : this.Vn;
          L = b || L, this.io = g.delayCallback(L)(this.co.bind(this, Z.SpinTrigger.AUTOSPIN));
        }, p.prototype.getCostPerSpin = function (b) {
          if (b === Z.SpinTrigger.FEATURE_BUY) throw Error("overwrite getCostPerSpin function for support feature buy spin");
          var L = this.dataSource.systemModel.maxLineNumber,
            H = this.dataSource.transactionModel,
            U = H.betSizeValue,
            k = H.betLevelValue;
          return g.toDecimalWithExp(U * k * L, 2);
        }, p.prototype.ao = function (b) {
          if (undefined === b) throw Error("trigger cannot be undefined");
          var L = this.getCostPerSpin(b);
          q.settingMenuHelper.setWinAmount(0), N.walletHelper.spin(L);
        }, p;
      }();
    I.default = x, cc._RF.pop();
  }
}
module.exports = IdleState;
