// module: Main
// Cocos 模块函数,参数 (require, module, exports) = (F, j, X)
function Main(F, j, X) {
  'use strict';

  if (!cc._RF.push(j, "15e58uWzmVHI4kQUpn/O31n", "Main")) {
    {
      var Z = {};
      Z.value = true;
      Object.defineProperty(X, "__esModule", Z);
      var V = F("SettingMenuHandlers"),
        q = F("WalletHandlers"),
        K = F("WalletHelper"),
        x = F("SettingMenuHelper"),
        L = F("UIAppearanceHelper"),
        U = F("Transitions"),
        Y = F("AudioManager"),
        z = F("UISetupHandler"),
        P = F("MJNormalGameState"),
        W = F("MJFreeSpinGameState"),
        D = F("GameConstant"),
        J = F("BGMHandler"),
        Q0 = F("MJAPIClient"),
        Q1 = F("MJDataSource"),
        Q2 = F("GameLayout"),
        Q3 = F("MultiResHandler"),
        Q4 = F("Utils"),
        Q5 = F("NotifyHelper"),
        Q6 = F("GameInitializationHandler"),
        Q7 = F("AnalyticsHelper"),
        Q8 = F("RequestHandler"),
        Q9 = F("GameEventHandler"),
        QQ = F("MJRespinGameState"),
        QF = F("SlotHandler"),
        QR = F("MJRefreshWorldHandler"),
        Qn = F("TransactionStateMachineHandler"),
        Qc = F("JakeSlotGameTemplate"),
        Qj = F("SpaceBarInterrupter"),
        Qi = F("SpinConfigHandler"),
        QI = cc._decorator,
        Qm = QI.ccclass,
        Qt = QI.property,
        QB = function (QX) {
          function QZ() {
            {
              var QT = null !== QX && QX.apply(this, arguments) || this;
              return QT.settingInfoFooterPrefab = undefined, QT.generalControllers = Object.create(null), QT.bonusControllers = Object.create(null), QT.wu = undefined, QT.I = undefined, QT;
            }
          }
          return __extends(QZ, QX), QZ.prototype.onLoad = function () {
            var QT = {};
            QT.enableSessionSocket = true;
            var QM = {};
            QM.spaceBarInterrupterEnabled = true;
            Q6.initializeGame({
              'dataSource': Q1.mjDataSource,
              'apiClient': Q0.mjApiClient,
              'multiResHandler': Q3.default,
              'callback': this.Bu.bind(this),
              'notifyConfig': {
                'theme': Q5.ThemeType.SLOT,
                'buttonColor': L.uiAppearanceHelper.v("game.theme_color"),
                'buttonTitleColor': L.uiAppearanceHelper.v("game.white_color"),
                'titleColor': L.uiAppearanceHelper.v("game.white_color"),
                'messageColor': L.uiAppearanceHelper.v("game.white_color")
              },
              'refreshWorldCallback': this.Au.bind(this),
              'updateBalanceCallback': this.Hu.bind(this),
              'gameTitle': {
                'name': shell.I18n.t("Mahjong.Name"),
                'fontFamily': L.uiAppearanceHelper.v("game.theme_font_family")
              },
              'gameLayoutInfo': Q2.gameLayout,
              'autoDeductBalance': true,
              'socketConfig': QT,
              'updateAudioPlayRateCallback': Y.updatePlayRate
            }), Qc.initJakeSlotGameTemplate(QM);
          }, QZ.prototype.Bu = function () {
            Q4.sequenceCallback(this.Ou.bind(this), this.Iu.bind(this), this.Tu.bind(this), this.Eu.bind(this), this.Nu.bind(this), this.Gu.bind(this), this.ku.bind(this), this.Ru.bind(this), this.ju.bind(this), this.Lu.bind(this), Q4.deferCallback(true), this.Pu.bind(this), Q4.deferCallback(true), this.Du.bind(this), this.Uu.bind(this), Q4.deferCallback(true), this.Tr.bind(this), this.xu.bind(this))(this.Fu.bind(this));
          }, QZ.prototype.ku = function (QT) {
            var QM = {};
            QM.generalController = this.generalControllers;
            QM.bonusController = this.bonusControllers;
            QM.loadingController = this.wu;
            QM.dataSource = Q1.mjDataSource;
            QM.apiClient = Q0.mjApiClient;
            QM.settingMenuHelper = x.settingMenuHelper;
            QM.walletHelper = K.walletHelper;
            QR.mjRefreshWorldHandler.initialize(QM), QT && QT();
          }, QZ.prototype.Ou = function (QT) {
            {
              var QM = {};
              QM.minimumSpinningTime = 0.3;
              QM.regularSpinningTime = 0.8;
              QM.regularSpinningTimeOffset = -1;
              QM.minimumSpinningTimeOffset = -1;
              QM.jurisdictionModel = Q1.mjDataSource.systemModel.operatorJurisdiction;
              Qi.initSpinConfig(QM), QT && QT();
            }
          }, QZ.prototype.Iu = function (QT) {
            {
              var QM = {
                'getGameInfo': this.Wu.bind(this)
              };
              K.walletHelper.init(QM), QT && QT();
            }
          }, QZ.prototype.Wu = function (QT, QM) {
            var QC = QT ? {
              'wk': QT
            } : undefined;
            this.Ju(function (QV, QN) {
              QM && QM(QN);
            }, QC);
          }, QZ.prototype.Lu = function (QT) {
            var QM = {};
            QM.apiClient = Q0.mjApiClient;
            QM.dataSource = Q1.mjDataSource;
            QM.settingWalletPanelController = this.generalControllers.settingMenuFooterController;
            QM.settingMenuHelper = x.settingMenuHelper;
            QM.walletHelper = K.walletHelper;
            QM.callback = QT;
            q.setupWallets(QM);
          }, QZ.prototype.Tu = function (QT) {
            var QM = {};
            QM.eatk = Q1.mjDataSource.systemModel.extraAssetTableKey;
            Q7.sendEvent(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO), shell.setProgressVisible(false), Q5.showMessage(shell.I18n.t("General.LoadingInfo")), this.Ju(this.Vu(QT), QM);
          }, QZ.prototype.Vu = function (QT) {
            var QM = Date.now();
            return function (QC, QV) {
              {
                K.walletHelper.processInitGameInfo(QV, function () {
                  shell.ga.sendTiming(shell.ga.CATEGORY_QUERY, shell.ga.EVENT_READ_INFO, Date.now() - QM), QT && QT();
                });
              }
            };
          }, QZ.prototype.Ju = function (QT, QM) {
            Q8.doAPIRequest({
              'name': "Get Game Info",
              'apiRequest': Q0.mjApiClient.getGameInfo.bind(Q0.mjApiClient),
              'apiRequestParam': QM,
              'errorTitle': shell.I18n.t("General.ErrorLaunchFailed"),
              'retryMessage': shell.I18n.t("General.LoadingInfoRetry")
            }, this.zu(QT));
          }, QZ.prototype.zu = function (QT) {
            {
              return function (QM, QC) {
                var QV = Q1.mjDataSource.systemModel,
                  QN = QV.betLevelList,
                  Qq = QV.betSizeList,
                  Qf = QV.maxLineNumber,
                  Qh = Q1.mjDataSource.transactionModel,
                  Qg = Qh.betSizeValue,
                  Ql = Qh.betLevelValue,
                  QK = Q1.mjDataSource.playerModel.minimumBetAmount;
                x.settingMenuHelper.betSizeList = Qq, x.settingMenuHelper.betSizeValue = Qg, x.settingMenuHelper.betLevelList = QN, x.settingMenuHelper.betLevelValue = Ql, x.settingMenuHelper.betLineValue = Qf, x.settingMenuHelper.minimumBetAmount = QK, x.settingMenuHelper.baseBet = shell.I18n.t("General.BaseBet"), QT(QM, QC);
              };
            }
          }, QZ.prototype.Eu = function (QT) {
            Y.init(), QT && QT();
          }, QZ.prototype.Nu = function (QT) {
            {
              V.setupSettingMenu({
                'apiClient': Q0.mjApiClient,
                'dataSource': Q1.mjDataSource,
                'settingMenuHelper': x.settingMenuHelper,
                'walletHelper': K.walletHelper,
                'isProgressiveGame': false,
                'settingMenuDependenciesPath': {
                  'settingRulesPath': L.uiAppearanceHelper.v("game_skin.setting_rules_prefab"),
                  'settingPayoutPath': L.uiAppearanceHelper.v("game_skin.setting_payout_prefab")
                },
                'toggleEffectMuted': Y.toggleEffectMuted,
                'toggleMusicMuted': Y.toggleMusicMuted,
                'callback': QT
              });
            }
          }, QZ.prototype.Gu = function (QT) {
            {
              var QM = {};
              QM.generalControllers = this.generalControllers;
              QM.bonusControllers = this.bonusControllers;
              this.wu = this.getComponent("LoadingController"), this.wu.setup(QC), QT && QT();
            }
          }, QZ.prototype.Ru = function (QT) {
            var QM = Q1.mjDataSource.transactionModel.transitionTo,
              QC = Q1.mjDataSource.transactionModel.transitionFrom;
            Q5.showMessage(shell.I18n.t("General.LoadingResource")), QC !== D.TransitionState.FREE_SPIN && QC !== D.TransitionState.FREE_SPIN_RESPIN || QM !== D.TransitionState.FREE_SPIN && QM !== D.TransitionState.FREE_SPIN_RESPIN ? this.wu.loadGeneralBundle(QT) : this.wu.loadAllBundle(QT);
          }, QZ.prototype.ju = function (QT) {
            var QM = this.generalControllers;
            var QC = {};
            QC.dataSource = Q1.mjDataSource;
            QC.settingMenuHelper = x.settingMenuHelper;
            QC.settingController = QM.settingController;
            QC.settingWalletPanelController = QM.settingMenuFooterController;
            QC.spinButtonController = QM.spinButtonController;
            QC.callback = QT;
            V.initializeSettingMenu(QC);
          }, QZ.prototype.Pu = function (QT) {
            var QM = this.generalControllers.spinButtonController;
            z.settingMenuInteractable(false), QM.init(), QT && QT();
          }, QZ.prototype.Du = function (QT) {
            this.generalControllers.slotController.init(Q1.mjDataSource.transactionModel, this.generalControllers, QT);
          }, QZ.prototype.Uu = function (QT) {
            var QM = this,
              QC = this.generalControllers,
              QV = QC.symbolPopoutController,
              QN = QC.slotController,
              Qq = QN.getAllSlotItemPosition(),
              Qf = [],
              Qh = 0;
            Qq.forEach(function (Qb, QL) {
              {
                QN.isValidSlotItem(QL) && (Qf[Qh] = QM.node.convertToNodeSpaceAR(cc.v2(Qb.x, Qb.y)), Qh++);
              }
            });
            var Qg = Q1.mjDataSource.transactionModel,
              Ql = Qg.originalReels,
              QK = Qg.specialSymbolsBefore,
              QO = QN.getConvertedReelData(Ql),
              Qx = QO.length;
            QV.setReelData(QO), QV.setAdditionalData(QK);
            var Qp = {};
            Qp.numberOfColumn = QF.NUMBER_OF_COLUMN;
            Qp.numberOfRow = QF.NUMBER_OF_ROW - 2;
            Qp.payoutData = D.PayOutData;
            Qp.numberOfButton = Qx;
            Qp.buttonPosition = Qf;
            Qp.buttonHeight = 224;
            Qp.buttonWidth = 189;
            QV.init(Qs), QT && QT();
          }, QZ.prototype.Tr = function (QT) {
            z.renderUIBaseOnState(QT, Q1.mjDataSource.transactionModel.transitionFrom, Q1.mjDataSource.transactionModel.transitionTo, this.generalControllers, this.bonusControllers);
          }, QZ.prototype.xu = function (QT) {
            var QM = Q1.mjDataSource.transactionModel.transitionTo;
            Qn.initState(QM === D.TransitionState.NORMAL ? "setup" : "idle"), QT && QT();
          }, QZ.prototype.Fu = function () {
            {
              shell.setProgressVisible(false), Q5.showMessage(shell.I18n.t("General.LoadingCompleted")), shell.requestGameStart(true, this.Ku.bind(this)), Q1.mjDataSource.gameLaunched = true, this.qu();
            }
          }, QZ.prototype.qu = function () {
            {
              Q9.subscribeGamePauseEvent(), Q9.subscribeGameResumeEvent();
              var QT = this.generalControllers.spinButtonController;
              Q9.setGamePlayUIBlockEventCallback(function (QM) {
                {
                  QM ? QT.node.pauseSystemEvents(true) : QT.node.resumeSystemEvents(true);
                }
              });
            }
          }, QZ.prototype.Ku = function () {
            {
              this.Qu(), this.Yu();
            }
          }, QZ.prototype.Yu = function () {
            var QT = Q1.mjDataSource.transactionModel,
              QM = QT.transitionFrom,
              QC = QT.transitionTo;
            Y.toggleAudioGameStarted(), QM !== D.TransitionState.NORMAL && QM !== D.TransitionState.RESPIN || QC !== D.TransitionState.FREE_SPIN ? J.bgmHandler.playBgm(QC) : J.bgmHandler.playBgm(D.TransitionState.NORMAL);
          }, QZ.prototype.Zu = function (QT) {
            {
              var QM = new U.NormalSpinToNormalSpinTransition();
              var QC = {};
              QC.generalControllers = this.generalControllers;
              QM.run(QC, function () {
                QM.destroy(), QT();
              });
            }
          }, QZ.prototype.Xu = function (QT) {
            var QM = new U.FreeSpinToFreeSpinTransition();
            var QC = {};
            QC.generalControllers = this.generalControllers;
            QC.bonusControllers = this.bonusControllers;
            QM.run(QC, function () {
              QM.destroy(), QT();
            });
          }, QZ.prototype.$u = function (QT) {
            var QM = new U.NormalSpinToFreeSpinTransition();
            var QC = {};
            QC.generalControllers = this.generalControllers;
            QC.bonusControllers = this.bonusControllers;
            QM.run(QC, this.wu, function () {
              {
                QM.destroy(), QT();
              }
            });
          }, QZ.prototype.tl = function (QT) {
            var QM = new U.FreeSpinToNormalSpinTransition();
            QM.run(this.generalControllers, function () {
              QM.destroy(), QT();
            });
          }, QZ.prototype.il = function () {
            var QT = this.bonusControllers,
              QM = this.generalControllers,
              QC = this.I = new W.default(Q1.mjDataSource, {
                'generalControllers': QM,
                'bonusControllers': QT
              }, this.wu, this.sl.bind(this));
            Q1.mjDataSource.isRefreshWorld = false, QC.run();
          }, QZ.prototype.el = function () {
            var QT = this.generalControllers,
              QM = this.I = new P.default(Q1.mjDataSource, {
                'generalControllers': QT
              }, this.sl.bind(this));
            Q1.mjDataSource.isRefreshWorld = false, QM.run();
          }, QZ.prototype.nl = function () {
            {
              var QT = this.generalControllers,
                QM = this.bonusControllers;
              var QC = {};
              QC.generalControllers = QT;
              QC.bonusControllers = QM;
              (this.I = new QQ.default(Q1.mjDataSource, QC, this.wu, this.sl.bind(this))).run();
            }
          }, QZ.prototype.sl = function () {
            var QT = this.I;
            QT && QT.destroy(), this.I = undefined, this.Qu();
          }, QZ.prototype.ol = function () {
            {
              switch (Q1.mjDataSource.transactionModel.transitionTo) {
                case D.TransitionState.NORMAL:
                  this.Zu(this.el.bind(this));
                  break;
                case D.TransitionState.RESPIN:
                  this.Zu(this.nl.bind(this));
                  break;
                case D.TransitionState.FREE_SPIN:
                  this.$u(this.il.bind(this));
                  break;
                case D.TransitionState.FREE_SPIN_RESPIN:
                  this.$u(this.nl.bind(this));
                  break;
                default:
                  throw Error("Invalid transition");
              }
            }
          }, QZ.prototype.cl = function () {
            {
              switch (Q1.mjDataSource.transactionModel.transitionTo) {
                case D.TransitionState.NORMAL:
                  this.tl(this.el.bind(this));
                  break;
                case D.TransitionState.RESPIN:
                  this.tl(this.nl.bind(this));
                  break;
                case D.TransitionState.FREE_SPIN:
                  this.Xu(this.il.bind(this));
                  break;
                case D.TransitionState.FREE_SPIN_RESPIN:
                  this.Xu(this.nl.bind(this));
                  break;
                default:
                  throw Error("Invalid transition");
              }
            }
          }, QZ.prototype.Qu = function () {
            switch (Q1.mjDataSource.transactionModel.transitionFrom) {
              case D.TransitionState.NORMAL:
              case D.TransitionState.RESPIN:
                this.ol();
                break;
              case D.TransitionState.FREE_SPIN:
              case D.TransitionState.FREE_SPIN_RESPIN:
                this.cl();
                break;
              default:
                throw Error("Invalid transition");
            }
          }, QZ.prototype.Au = function (QT) {
            var QM = this,
              QC = Q1.mjDataSource.isGameReplaying,
              QV = Q1.mjDataSource.transactionModel,
              QN = Q1.mjDataSource.isReplayStarted,
              Qq = function (Qh) {
                var Qg = Q1.mjDataSource.transactionModel,
                  Ql = Qg.stateTransitionFrom,
                  QK = Qg.stateTransitionTo,
                  QO = 2 === Math.floor(QK / 10);
                z.renderUIBaseOnState(Qh, Ql, QK, QM.generalControllers, QM.bonusControllers, QO);
              },
              Qf = function () {
                QT(), Qj.spaceBarInterrupter.resume();
              };
            Qj.spaceBarInterrupter.pause(), QC && !QN ? (Q1.mjDataSource.isReplayStarted = true, QR.mjRefreshWorldHandler.refreshWorldByChangeWalletIdle(Qq, function () {
              Q1.mjDataSource.isRefreshWorld = true, Qn.cacheTransitionCallback(), Qn.clearTransition(), Y.unscheduleVocals(), Y.stopVocal(), J.bgmHandler.playBgm(QV.stateTransitionTo), QM.I.forceExit(), QT();
            })) : QN ? (Q1.mjDataSource.isReplayStarted = false, QR.mjRefreshWorldHandler.refreshWorldByChangeWalletIdle(Qq, function () {
              Q1.mjDataSource.isReplayDone = true, J.bgmHandler.playBgm(D.TransitionState.NORMAL), J.bgmHandler.setBgmVolume(1), QT(), Qn.retrieveTransitionCallback(), QM.I.forceExit();
            })) : this.wu.hasBonusLoaded() ? QR.mjRefreshWorldHandler.refreshWorldByChangeWalletIdle(function (Qh) {
              Qh();
            }, Qf) : QR.mjRefreshWorldHandler.refreshWorldByChangeWalletIdle(Qq, Qf);
          }, QZ.prototype.Hu = function (QT) {
            {
              x.settingMenuHelper.setBalance(QT);
            }
          }, __decorate([Qt(cc.Prefab)], QZ.prototype, "settingInfoFooterPrefab", undefined), __decorate([Qm], QZ);
        }(cc.Component);
      X.default = QB, cc._RF.pop();
    }
  }
}
module.exports = Main;
