// module: LoadingController
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, module)
function LoadingController(require, exports, module) {
  'use strict';

  if (!cc._RF.push(exports, "3cdc7hE9NpPdoGq8/wNh2mp", "LoadingController")) {
    var X = {};
    X.value = true;
    Object.defineProperty(module, "__esModule", X);
    var Z = require("GameAudioAdapter"),
      T = require("AudioManager"),
      V = require("AudioAssetConfig"),
      N = require("CustomAssetConfig"),
      q = require("GeneralAssetConfig"),
      K = require("NoSoundAdapter"),
      O = require("ResourceLoader"),
      x = require("SettingMenuHelper"),
      L = require("SymbolImageHandler"),
      H = require("BonusAssetConfig"),
      U = require("LaunchConfig"),
      k = require("AnalyticsHelper"),
      Y = require("QuitGameWithEvent"),
      z = require("Utils"),
      P = require("BVFrameworkEnum"),
      G = require("MJSlotController"),
      W = require("UIAppearanceHelper"),
      D = require("ErrorHandler"),
      J = require("MJDataSource"),
      E = require("BonusLoadingController"),
      Q0 = cc._decorator,
      Q1 = Q0.ccclass,
      Q2 = Q0.property,
      Q3 = function (Q4) {
        {
          function Q5() {
            var Q6 = null !== Q4 && Q4.apply(this, arguments) || this;
            return Q6.settingMenuHolder = undefined, Q6.settingMenuFooterHolder = undefined, Q6.clickEffectHolder = undefined, Q6.backgroundHolder = undefined, Q6.foregroundHolder = undefined, Q6.symbolEffectHolder = undefined, Q6.scatterFeatureHolder = undefined, Q6.paySelectEffectHolder = undefined, Q6.payoutEffectHolder = undefined, Q6.lineNumberHolder = undefined, Q6.slotControllerHolder = undefined, Q6.dimControllerHolder = undefined, Q6.dragonControllerHolder = undefined, Q6.infoboardHolder = undefined, Q6.spinButtonControllerHolder = undefined, Q6.bigWinControllerHolder = undefined, Q6.remainingFreeSpinHolder = undefined, Q6.totalWinHolder = undefined, Q6.genericLoadingHolder = undefined, Q6.fastSpinHolder = undefined, Q6.bonusLoadingHolder = undefined, Q6.multiplierBarHolder = undefined, Q6.freeSpinHolder = undefined, Q6.symbolPopOutButtonHolder = undefined, Q6.symbolPopOutDisplayHolder = undefined, Q6.symbolPopOutTintHolder = undefined, Q6.Kh = new O.default(), Q6.qh = undefined, Q6.Qh = false, Q6.Yh = undefined, Q6;
          }
          return __extends(Q5, Q4), Q5.prototype.setup = function (Q6) {
            this.Zh = Q6.generalControllers, this.Xh = Q6.bonusControllers, this.Zh.settingMenuFooterHolder = this.settingMenuFooterHolder, this.$h(), this.tr(), this.ir(), this.sr();
          }, Q5.prototype.loadGeneralBundle = function (Q6) {
            shell.setProgressVisible(true), this.qh = Q6, this.Qh = false;
            var Q7 = [].concat(q.generalAssetConfig(), N.customAssetConfig, V.audioAssetConfig);
            this.er(Q7, this.nr.bind(this));
          }, Q5.prototype.loadAllBundle = function (Q6) {
            shell.setProgressVisible(true), this.qh = Q6, this.Qh = false;
            var Q7 = [].concat(q.generalAssetConfig(), N.customAssetConfig, V.audioAssetConfig, H.bonusAssetConfig);
            this.er(Q7, this.nr.bind(this));
          }, Q5.prototype.loadBonusBundle = function (Q6) {
            this.qh = Q6, this.Qh = true;
            var Q7 = [].concat(H.bonusAssetConfig),
              Q8 = this.or.bind(this);
            this.er(Q7, Q8);
          }, Q5.prototype.sr = function () {
            this.spinButtonControllerHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.settingMenuHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 51, this.bigWinControllerHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 52, this.genericLoadingHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 53, this.bonusLoadingHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 54, this.totalWinHolder.zIndex = P.EN_GAME_LAYER_Z_INDEX_HIGH + 55;
          }, Q5.prototype.er = function (Q6, Q7) {
            var Q8 = {
              'bundle': Q6,
              'progressCallback': this.cr.bind(this),
              'retryHandling': this.hr.bind(this),
              'retryingCallback': this.rr.bind(this),
              'retryMessage': shell.I18n.t("General.ResourceRetryMessage")
            };
            this.Kh.loadBundle(Q8).then(Q7);
          }, Q5.prototype.releaseBonus = function (Q6) {
            {
              var Q7 = this,
                Q8 = this.Xh;
              if (Q8.remainingFreeSpinController) {
                {
                  var Q9 = [].concat(H.bonusAssetConfig);
                  z.sequenceCallback(function (QQ) {
                    Q8.remainingFreeSpinController.destroy(), Q8.remainingFreeSpinController = undefined, Q7.remainingFreeSpinHolder.removeAllChildren(), Q8.freeSpinController.destroy(), Q8.freeSpinController = undefined, Q7.freeSpinHolder.removeAllChildren(), Q8.freeSpinEffectController.destroy(), Q8.freeSpinEffectController = undefined, Q7.dragonControllerHolder.removeAllChildren(), QQ();
                  }, function (QQ) {
                    Q7.Kh.releaseBundle(Q9, "Bonus"), QQ();
                  })(Q6);
                }
              } else Q6 && Q6();
            }
          }, Q5.prototype.hasBonusLoaded = function () {
            {
              return undefined !== this.Xh.remainingFreeSpinController;
            }
          }, Q5.prototype.$h = function () {
            var Q6 = '1' === U.cs_Launch.noAudio ? K.default : Z.default;
            x.settingMenuHelper.initAudio(Q6);
          }, Q5.prototype.tr = function () {
            Object.keys(T.GeneralAudioPool).forEach(function (Q6) {
              {
                V.audioAssetConfig.push({
                  'name': Q6,
                  'type': O.LoaderType.CUSTOM,
                  'loadFunc': function (Q7, Q8) {
                    {
                      T.loadAudio(T.GeneralAudioPool[Q6], function (Q9) {
                        {
                          Q9 && Q8(Q9), Q7(undefined);
                        }
                      });
                    }
                  }
                });
              }
            }), V.audioAssetConfig.push({
              'name': "general_audio",
              'type': O.LoaderType.CUSTOM,
              'loadFunc': function (Q6, Q7) {
                T.loadAudio(T.generalGameAudio, function (Q8) {
                  {
                    Q8 && Q7(Q8), Q6(undefined);
                  }
                });
              }
            }), V.audioAssetConfig.push({
              'name': "vox",
              'type': O.LoaderType.CUSTOM,
              'loadFunc': function (Q6, Q7) {
                {
                  T.loadAudio(T.vox, function (Q8) {
                    Q8 && Q7(Q8), Q6(undefined);
                  });
                }
              }
            });
          }, Q5.prototype.ir = function () {
            var Q6 = {};
            Q6.setting_menu = x.settingMenuHelper.path + "prefab/setting_menu/setting_menu";
            Q6.setting_menu_auto_spin_button = x.settingMenuHelper.path + "prefab/others/spin_options_button";
            Q6.setting_menu_more_menu_button = x.settingMenuHelper.path + "prefab/others/more_menu_button";
            Q6.setting_menu_setting_button = x.settingMenuHelper.path + "prefab/others/sound_button";
            Q6.setting_menu_rules_button = x.settingMenuHelper.path + "prefab/others/rules_button";
            Q6.setting_menu_payout_button = x.settingMenuHelper.path + "prefab/others/payout_button";
            Q6.setting_menu_history_button = x.settingMenuHelper.path + "prefab/others/history_button";
            Q6.setting_menu_hide_more_button = x.settingMenuHelper.path + "prefab/others/hide_more_menu_button";
            Q6.setting_menu_smart_bot_button = x.settingMenuHelper.path + "prefab/others/smartbot_button";
            Q6.setting_menu_minus_bet_button = x.settingMenuHelper.path + "prefab/others/minus_bet_button";
            Q6.setting_menu_plus_bet_button = x.settingMenuHelper.path + "prefab/others/plus_bet_button";
            Q6.setting_menu_turbo_spin_button = x.settingMenuHelper.path + "prefab/others/turbo_spin_button";
            Q6.setting_menu_quit_button = x.settingMenuHelper.path + "prefab/others/quit_button";
            Object.keys(Q7).forEach(function (Q8) {
              var Q9 = {};
              Q9.name = Q8;
              Q9.url = Q7[Q8];
              Q9.type = cc.Prefab;
              Q9.isLocalized = false;
              N.customAssetConfig.push(Q9);
            }), N.customAssetConfig.push({
              'name': "setting_menu_sprite_atlas",
              'url': x.settingMenuHelper.path + "texture/hd/setting_menu_locale",
              'type': cc.SpriteAtlas,
              'isLocalized': true
            });
          }, Q5.prototype.rr = function (Q6) {
            {
              var Q7 = Q6 > 0 ? Q6 : undefined;
              k.sendLoadFailReport(Q7);
            }
          }, Q5.prototype.hr = function (Q6, Q7, Q8, Q9) {
            var QQ = shell.Error,
              QF = shell.ClientError,
              QR = new QQ(QF.Domain, QF.GameLoadResourceError),
              Qn = Q9 > 0 ? Q9 : undefined;
            k.sendLoadFailReport(Qn);
            var Qc = J.mjDataSource.gameLaunched ? D.ErrContext.Preload : D.ErrContext.Launch;
            D.showError(QR, Qc, function (Qj) {
              switch (Qj) {
                case D.ErrAction.Retry:
                  Q6 && Q6();
                  break;
                case D.ErrAction.Quit:
                  Y.quitGameWithEvent("Load resource fail")();
              }
            });
          }, Q5.prototype.nr = function (Q6) {
            {
              this.ar(Q6), this.ur(Q6), this.or(Q6);
              var Q7 = this.qh;
              this.qh = undefined, Q7 && Q7();
            }
          }, Q5.prototype.ar = function (Q6) {
            var Q7,
              Q8,
              Q9 = Q6.setting_menu,
              QQ = Q6.setting_menu_auto_spin_button,
              QF = Q6.setting_menu_more_menu_button,
              QR = Q6.setting_menu_setting_button,
              Qn = Q6.setting_menu_rules_button,
              Qc = Q6.setting_menu_payout_button,
              Qj = Q6.setting_menu_history_button,
              Qi = Q6.setting_menu_hide_more_button,
              QI = Q6.setting_menu_smart_bot_button,
              Qm = Q6.setting_menu_minus_bet_button,
              Qt = Q6.setting_menu_plus_bet_button,
              QB = Q6.setting_menu_turbo_spin_button,
              QX = Q6.setting_menu_sprite_atlas,
              QZ = Q6.setting_menu_quit_button;
            Q7 = cc.instantiate(Q9.result), this.settingMenuHolder.addChild(Q7), Q8 = Q7.getComponent("SettingMenuController"), this.Zh.settingController = Q8, x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.QUIT, QZ.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.SPIN_OPTIONS, QQ.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.MORE_MENU, QF.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.SOUND, QR.result, true), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.RULE, Qn.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.PAYTABLE, Qc.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.HISTORY, Qj.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.HIDE_MORE, Qi.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.SMARTBOT, QI.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.MINUS_BET, Qm.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.PLUS_BET, Qt.result), x.settingMenuHelper.setButtonPrefab(x.ButtonPrefabType.TURBO_SPIN, QB.result, true), x.settingMenuHelper.settingMenuLocaleIcons = QX.result;
          }, Q5.prototype.ur = function (Q6) {
            var Q7,
              Q8,
              Q9 = Q6.click_effect,
              QQ = Q6.background_controller,
              QF = Q6.slot_controller,
              QR = Q6.infoboard_controller,
              Qn = Q6.spin_button_controller,
              Qc = Q6.big_win_controller,
              Qj = Q6.total_win_controller,
              Qi = Q6.scatter_fast_spin_controller,
              QI = Q6.bonus_loading_controller,
              Qm = Q6.foreground_controller,
              Qt = Q6.symbol_popout_controller,
              QB = Q6.multiplier_bar_controller,
              QX = Q6.big_win_texture,
              QZ = Q6.total_win_texture,
              QT = Q6.bonus_loading_texture,
              QM = Q6.info_message,
              QC = Q6.symbols,
              QV = Q6.feature_symbols,
              QN = Q6.setting_menu_wallet_panel,
              Qq = Q6.symbol_prefab;
            L.symbolImageHandler.setSymbolImage(QC.result, QV.result), Q7 = cc.instantiate(Q9.result), this.clickEffectHolder.addChild(Q7);
            var Qf = Q7.getComponent("ClickEffectController");
            this.Zh.clickEffectController = Qf;
            var Qh = (Q7 = cc.instantiate(QN.result)).getComponent("SettingInfoFooterController");
            this.Zh.settingMenuFooterController = Qh, Q7 = cc.instantiate(QR.result), this.infoboardHolder.addChild(Q7);
            var Qg = Q7.getComponent("InfoBoardController"),
              Ql = QM.result;
            Qg.init([Ql.getSpriteFrame("info0"), Ql.getSpriteFrame("info1"), Ql.getSpriteFrame("info2"), Ql.getSpriteFrame("info3"), Ql.getSpriteFrame("info4"), Ql.getSpriteFrame("Info5"), Ql.getSpriteFrame("info6")]), Qg.setWinTextSF(Ql.getSpriteFrame("win_info"), Ql.getSpriteFrame("totalwin_info")), this.Zh.infoboardController = Qg, Q7 = cc.instantiate(QF.result), this.slotControllerHolder.addChild(Q7);
            var QK = Q7.getComponent(G.default);
            var QO = {};
            QO.symbol_prefab = Qq.result;
            QK.setClickEffectController(Qf), QK.setPrefab(QO), this.Zh.slotController = QK, Q7 = cc.instantiate(QQ.result), this.backgroundHolder.addChild(Q7), this.Zh.backGroundController = Q7.getComponent("BackgroundController"), this.Zh.backGroundController.init(this.backgroundHolder, this.dimControllerHolder), Q7 = cc.instantiate(Qm.result), this.foregroundHolder.addChild(Q7), this.Zh.foregroundController = Q7.getComponent("ForegroundController"), Q7 = cc.instantiate(Qn.result), this.spinButtonControllerHolder.addChild(Q7), this.Zh.spinButtonController = Q7.getComponent(W.uiAppearanceHelper.v("game_skin.spin_button_controller")), Q7 = cc.instantiate(Qc.result), this.bigWinControllerHolder.addChild(Q7), Q8 = Q7.getComponent("BigWinController");
            var Qx = QX.result;
            Q8.init(Qx.getSpriteFrame("bw_text"), Qx.getSpriteFrame("mw_text"), Qx.getSpriteFrame("smw_text")), this.Zh.bigWinController = Q8, Q7 = cc.instantiate(Qj.result), this.totalWinHolder.addChild(Q7), Q8 = Q7.getComponent("TotalWinController");
            var Qp = QZ.result;
            Q8.setTotalWinSF(Qp.getSpriteFrame("total_win")), Q8.setCollectSF(Qp.getSpriteFrame("collect"), Qp.getSpriteFrame("collect_pressed")), this.Zh.totalWinController = Q8, Q7 = cc.instantiate(Qi.result), this.fastSpinHolder.addChild(Q7), Q8 = Q7.getComponent("ScatterFastSpinController"), this.Zh.scatterFastSpinController = Q8, Q8 = (Q7 = cc.instantiate(Qt.result)).getComponent("SymbolPayoutController"), this.symbolPopOutButtonHolder.addChild(Q7), Q8.setPopOutDisplayHolder(this.symbolPopOutDisplayHolder), Q8.setPopOutTintHolder(this.symbolPopOutTintHolder), this.Zh.symbolPopoutController = Q8;
            var Qs = cc.instantiate(QI.result);
            this.bonusLoadingHolder.addChild(Qs), Q8 = Qs.getComponent(E.default), this.Yh = QT.result, Q8.init(this.Yh.getSpriteFrame("free_spin_won"), this.Yh.getSpriteFrame("start"), this.Yh.getSpriteFrame("start_pressed"), this.Yh.getSpriteFrame("feature_loading")), this.Zh.bonusLoadingController = Q8, Q7 = cc.instantiate(QB.result), this.multiplierBarHolder.addChild(Q7), (Q8 = Q7.getComponent(W.uiAppearanceHelper.v("game_skin.multiplier_bar_controller"))).setWaysTextSpriteFrame(Ql.getSpriteFrame("2000ways")), this.Zh.multiplierBoardController = Q8;
          }, Q5.prototype.or = function (Q6) {
            var Q7,
              Q8,
              Q9 = Q6.remaining_free_spin_controller,
              QQ = Q6.free_spins,
              QF = Q6.free_spin_controller,
              QR = Q6.free_spin_effect_controller;
            if (Q9) {
              {
                Q7 = cc.instantiate(Q9.result), this.remainingFreeSpinHolder.addChild(Q7), Q8 = Q7.getComponent("RemainingFreeSpinController");
                var Qn = QQ.result;
                Q8.setLocalizedSpriteFrame(Qn.getSpriteFrame("remaining_fs"), Qn.getSpriteFrame("last_fs")), Q8.init(), this.Xh.remainingFreeSpinController = Q8, Q7 = cc.instantiate(QF.result), this.freeSpinHolder.addChild(Q7), (Q8 = Q7.getComponent("BonusFreeSpinController")).init(this.Yh.getSpriteFrame("free_spin_won")), this.Xh.freeSpinController = Q8, Q7 = cc.instantiate(QR.result), this.dragonControllerHolder.addChild(Q7), Q8 = Q7.getComponent("FreeSpinEffectController"), this.Xh.freeSpinEffectController = Q8;
              }
            }
            var Qc = this.qh;
            this.qh = undefined, Qc && Qc();
          }, Q5.prototype.cr = function (Q6, Q7) {
            this.Qh ? this.Zh.bonusLoadingController.updateProgress(Q6, Q7) : shell.setProgress(Q6, Q7);
          }, __decorate([Q2(cc.Node)], Q5.prototype, "settingMenuHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "settingMenuFooterHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "clickEffectHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "backgroundHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "foregroundHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "symbolEffectHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "scatterFeatureHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "paySelectEffectHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "payoutEffectHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "lineNumberHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "slotControllerHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "dimControllerHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "dragonControllerHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "infoboardHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "spinButtonControllerHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "bigWinControllerHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "remainingFreeSpinHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "totalWinHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "genericLoadingHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "fastSpinHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "bonusLoadingHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "multiplierBarHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "freeSpinHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "symbolPopOutButtonHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "symbolPopOutDisplayHolder", undefined), __decorate([Q2(cc.Node)], Q5.prototype, "symbolPopOutTintHolder", undefined), __decorate([Q1], Q5);
        }
      }(cc.Component);
    module.default = Q3, cc._RF.pop();
  }
}
module.exports = LoadingController;
