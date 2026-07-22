// module: Main
// Cocos 模块函数,参数 (require, module, exports) = (require, H, exports)
function Main(require, H, exports) {
  'use strict';

  if (!cc._RF.push(H, "63ec2Bqpe5I0b4nR5JeEEaF", "Main")) {
    var q = {};
    q.value = true;
    Object.defineProperty(exports, "__esModule", q);
    var D = require("Transitions"),
      W = require("AudioManager"),
      k = require("UISetupHandler"),
      z = require("PGGAPIClient"),
      L = require("PGGDataSource"),
      U = require("SettingMenuHandlers"),
      Q = require("MultiResHandler"),
      R = require("AnalyticsHelper"),
      T = require("GameEventHandler"),
      Y = require("GameInitializationHandler"),
      X = require("RequestHandler"),
      E = require("NotifyHelper"),
      F = require("Utils"),
      N = require("SettingMenuHelper"),
      Z = require("BGMHandler"),
      J = require("PGGNormalGameState"),
      K = require("UIAppearanceHelper"),
      l0 = require("GameLayout"),
      l1 = require("PGSlotTransactionModel"),
      l2 = require("PGGRefreshWorldHandler"),
      l3 = require("TransactionStateMachineHandler"),
      l4 = require("SpinConfigHandler"),
      l5 = require("JakeSlotGameTemplate"),
      l6 = require("SpaceBarInterrupter"),
      l7 = cc._decorator,
      l8 = l7.ccclass,
      l9 = l7.property,
      ll = function (lj) {
        function lI() {
          var ls = null !== lj && lj.apply(this, arguments) || this;
          return ls.settingInfoFooterPrefab = undefined, ls.generalControllers = Object.create(null), ls.Th = undefined, ls.I = undefined, ls.Hh = undefined, ls;
        }
        return __extends(lI, lj), lI.prototype.onLoad = function () {
          var ls = {};
          ls.enableSessionSocket = true;
          var lO = {};
          lO.spaceBarInterrupterEnabled = true;
          Y.initializeGame({
            'autoDeductBalance': true,
            'dataSource': L.pgDataSource,
            'apiClient': z.pgApiClient,
            'multiResHandler': Q.default,
            'callback': this.Rh.bind(this),
            'notifyConfig': {
              'theme': E.ThemeType.SLOT,
              'buttonColor': K.uiAppearanceHelper.v("game.theme_color"),
              'buttonTitleColor': K.uiAppearanceHelper.v("game.white_color"),
              'titleColor': K.uiAppearanceHelper.v("game.white_color"),
              'messageColor': K.uiAppearanceHelper.v("game.white_color")
            },
            'socketConfig': ls,
            'refreshWorldCallback': this.kh.bind(this),
            'updateBalanceCallback': this.Lh.bind(this),
            'updateAudioPlayRateCallback': W.updatePlayRate,
            'gameTitle': {
              'name': shell.I18n.t("PiggyGold.Name"),
              'fontFamily': K.uiAppearanceHelper.v("game.theme_font_family")
            },
            'gameLayoutInfo': l0.gameLayout,
            'betButtonClickCallback': this.Eh.bind(this),
            'enablePerformanceTracker': true
          }), l5.initJakeSlotGameTemplate(lO);
        }, lI.prototype.Rh = function () {
          F.sequenceCallback(this.jh.bind(this), this.Dh.bind(this), this.Uh.bind(this), this.Wh.bind(this), this.Fh.bind(this), this.xh.bind(this), this.Vh.bind(this), this.zh.bind(this), F.deferCallback(true), this.Kh.bind(this), F.deferCallback(true), this.qh.bind(this), F.deferCallback(true), F.deferCallback(true), this.Jh.bind(this), F.deferCallback(true), F.deferCallback(true), this.Yh.bind(this), this.Qh.bind(this))(this.Xh.bind(this));
        }, lI.prototype.Zh = function () {
          this.$h(), this.tr();
        }, lI.prototype.ir = function () {
          var ls = this.I;
          ls && ls.destroy(), this.I = undefined, this.tr();
        }, lI.prototype.tr = function () {
          this.Hh = this.sr, F.deferCallback(this)(this.Hh);
        }, lI.prototype.sr = function () {
          var ls = this,
            lO = new D.ToNormalSpinTransition();
          var ly = {};
          ly.generalControllers = this.generalControllers;
          lO.run(ly, function () {
            lO.destroy(), ls.er();
          });
        }, lI.prototype.er = function () {
          var ls = this.generalControllers;
          var lO = {};
          lO.generalControllers = ls;
          (this.I = new J.default(L.pgDataSource, lO, this.ir.bind(this))).run();
        }, lI.prototype.jh = function (ls) {
          var lO = {};
          lO.minimumSpinningTime = 0.2;
          lO.regularSpinningTime = 0.8;
          lO.minimumSpinningTimeOffset = -0.9;
          lO.regularSpinningTimeOffset = -0.9;
          lO.jurisdictionModel = L.pgDataSource.systemModel.operatorJurisdiction;
          l4.initSpinConfig(lO), ls && ls();
        }, lI.prototype.Uh = function (ls) {
          var lO = {};
          lO.generalController = this.generalControllers;
          lO.apiClient = z.pgApiClient;
          lO.dataSource = L.pgDataSource;
          lO.settingMenuHelper = N.settingMenuHelper;
          l2.pgRefreshWorldHandler.initialize(lO), ls && ls();
        }, lI.prototype.kh = function (ls) {
          if (L.pgDataSource.transactionModel.previousGameState === l1.SpinType.NORMAL) {
            var ly = L.pgDataSource.isGameReplaying,
              lB = L.pgDataSource.isReplayStarted;
            ly && (lB ? (L.pgDataSource.isReplayStarted = false, lO = function () {
              ls && ls(), Z.bgmHandler.fadeInBgm(1);
            }) : L.pgDataSource.isReplayStarted = true), l2.pgRefreshWorldHandler.refreshWorldByChangeWalletIdle(this.Yh.bind(this), lO);
          } else ls && ls();
        }, lI.prototype.nr = function (ls) {
          var lO = Date.now();
          return function () {
            shell.ga.sendTiming(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO, Date.now() - lO), ls && ls();
          };
        }, lI.prototype.Dh = function (ls) {
          var lO = {};
          lO.eatk = L.pgDataSource.systemModel.extraAssetTableKey;
          R.sendEvent(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO), shell.setProgressVisible(false), E.showMessage(shell.I18n.t("General.LoadingInfo")), this.or(this.nr(ls), lO);
        }, lI.prototype.or = function (ls, lO) {
          X.doAPIRequestWithWalletCheck({
            'name': "Get Game Info",
            'apiRequest': z.pgApiClient.getGameInfo.bind(z.pgApiClient),
            'apiRequestParam': lO,
            'errorTitle': shell.I18n.t("General.ErrorLaunchFailed"),
            'retryMessage': shell.I18n.t("General.LoadingInfoRetry")
          }, this.cr(ls));
        }, lI.prototype.cr = function (ls) {
          return function (lO, ly) {
            if (ly && ly.dt) {
              var lB = L.pgDataSource.systemModel,
                lx = lB.betLevelList,
                lC = lB.betSizeList,
                lH = lB.maxLineNumber,
                lr = lB.featureBuy,
                lV = L.pgDataSource.transactionModel,
                lM = lV.betSizeValue,
                lq = lV.betLevelValue,
                lm = L.pgDataSource.playerModel.minimumBetAmount;
              N.settingMenuHelper.betSizeList = lC, N.settingMenuHelper.betSizeValue = lM, N.settingMenuHelper.betLevelList = lx, N.settingMenuHelper.betLevelValue = lq, N.settingMenuHelper.betLineValue = lH, N.settingMenuHelper.minimumBetAmount = lm, N.settingMenuHelper.featureBuyThreshold = lr && lr.threshold, ls(lO, ly);
            }
          };
        }, lI.prototype.Wh = function (ls) {
          W.init(), ls && ls();
        }, lI.prototype.xh = function (ls) {
          var lO = {};
          lO.generalControllers = this.generalControllers;
          this.Th = this.getComponent("LoadingController"), this.Th.setup(ly), ls && ls();
        }, lI.prototype.Vh = function (ls) {
          E.showMessage(shell.I18n.t("General.LoadingResource")), this.Th.loadBundle(ls);
        }, lI.prototype.Fh = function (ls) {
          var lO = {};
          lO.apiClient = z.pgApiClient;
          lO.dataSource = L.pgDataSource;
          lO.settingMenuHelper = N.settingMenuHelper;
          lO.isProgressiveGame = false;
          lO.toggleEffectMuted = W.toggleEffectMuted;
          lO.toggleMusicMuted = W.toggleMusicMuted;
          lO.callback = ls;
          U.setupSettingMenu(lO);
        }, lI.prototype.zh = function (ls) {
          this.hr();
          var lO = this.generalControllers;
          var ly = {};
          ly.dataSource = L.pgDataSource;
          ly.settingMenuHelper = N.settingMenuHelper;
          ly.settingController = lO.settingController;
          ly.settingWalletPanelController = lO.settingMenuFooterController;
          ly.spinButtonController = lO.spinButtonController;
          ly.callback = ls;
          U.initializeSettingMenu(ly);
        }, lI.prototype.hr = function () {
          var ls = cc.instantiate(this.settingInfoFooterPrefab).getComponent("SettingInfoFooterController");
          this.generalControllers.settingMenuFooterController = ls;
        }, lI.prototype.Kh = function (ls) {
          var lO = this.generalControllers;
          k.settingMenuInteractable(false);
          var ly = lO.spinButtonController,
            lB = lO.frontWorldController,
            lx = lO.backWorldController,
            lC = lO.bigWinController,
            lH = lO.piggyController,
            lr = lO.slotController;
          lr.setSpinTiming(l4.featureConfig.minimumSpinningTime, l4.featureConfig.regularSpinningTime), ly.init(), lC.init(), lH.init(), lB.play(), lx.init(), l6.spaceBarInterrupter.init({
            'spinButtonClickCallback': ly.clickSpinButton.bind(ly),
            'reelClickCallback': lr.onSlotRegionClicked.bind(lr)
          }), ls && ls();
        }, lI.prototype.qh = function (ls) {
          var lO = this.generalControllers,
            ly = lO.slotController,
            lB = L.pgDataSource.transactionModel,
            lx = lB.fakeReels,
            lC = lB.reels,
            lH = lB.middleReelsMutiply;
          ly.setClickEffectController(lO.clickEffectController), ly.init(lx, lC, lH, ls);
        }, lI.prototype.Jh = function (ls) {
          var lO = this.generalControllers,
            ly = lO.paySelectController,
            lB = lO.wildMultiplySpineController;
          F.spawnCallback(ly.cacheLocalSlotPosition.bind(ly), lB.cacheLocalSlotPosition.bind(lB))(ls);
        }, lI.prototype.Yh = function (ls) {
          k.renderUIBaseOnState(ls, L.pgDataSource.transactionModel.stateTransitionFrom, L.pgDataSource.transactionModel.stateTransitionTo, this.generalControllers);
        }, lI.prototype.Xh = function () {
          shell.setProgressVisible(false), E.showMessage(shell.I18n.t("General.LoadingCompleted")), shell.requestGameStart(true, this.Zh.bind(this)), L.pgDataSource.gameLaunched = true, this.rr();
        }, lI.prototype.Qh = function (ls) {
          l3.initState("setup"), ls && ls();
        }, lI.prototype.rr = function () {
          T.subscribeGamePauseEvent(), T.subscribeGameResumeEvent();
          var ls = this.generalControllers.spinButtonController;
          T.setGamePlayUIBlockEventCallback(function (lO) {
            lO ? ls.node.pauseSystemEvents(true) : ls.node.resumeSystemEvents(true);
          });
        }, lI.prototype.$h = function () {
          W.toggleAudioGameStarted(), Z.bgmHandler.startBgm();
        }, lI.prototype.Lh = function (ls) {
          N.settingMenuHelper.setBalance(ls);
        }, lI.prototype.Eh = function () {
          L.pgDataSource.isGameReplaying && this.generalControllers.spinButtonController.clickSpinButton();
        }, __decorate([l9(cc.Prefab)], lI.prototype, "settingInfoFooterPrefab", undefined), __decorate([l8], lI);
      }(cc.Component);
    exports.default = ll, cc._RF.pop();
  }
}
module.exports = Main;
