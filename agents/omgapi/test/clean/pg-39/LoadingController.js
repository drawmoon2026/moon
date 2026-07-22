// module: LoadingController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function LoadingController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "f2eeenbzC5EvoQZ4qaDTbwm", "LoadingController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = require("GameAudioAdapter"),
      H = require("RtConfig"),
      V = require("GeneralAssetConfig"),
      M = require("CustomAssetConfig"),
      q = require("AudioAssetConfig"),
      D = require("AudioManager"),
      W = require("AnalyticsHelper"),
      k = require("QuitGameWithEvent"),
      z = require("ErrorHandler"),
      L = require("NoSoundAdapter"),
      U = require("ResourceLoader"),
      Q = require("SettingMenuHelper"),
      w = require("BVFrameworkEnum"),
      P = require("PGGDataSource"),
      R = cc._decorator,
      T = R.ccclass,
      Y = R.property,
      X = function (E) {
        function F() {
          var N = null !== E && E.apply(this, arguments) || this;
          return N.backWorldHolder = undefined, N.paytableHolder = undefined, N.frontWorldHolder = undefined, N.bottomUIHolder = undefined, N.settingMenuHolder = undefined, N.clickEffectHolder = undefined, N.infobarHolder = undefined, N.bigWinHolder = undefined, N.piggyHolder = undefined, N.featurePiggyHolder = undefined, N.wildMultiplySpineHolder = undefined, N.spinButtonHolder = undefined, N.slotControllerHolder = undefined, N.footerBackgroundNode = undefined, N.Ch = new U.default(), N._t = undefined, N.yh = undefined, N;
        }
        return __extends(F, E), F.prototype.setup = function (N) {
          this._t = N.generalControllers, this.Mh(), this.wh(), this.Ah(), this.footerBackgroundNode.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.spinButtonHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.settingMenuHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, this.bigWinHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50;
        }, F.prototype.loadBundle = function (N) {
          shell.setProgressVisible(true), this.yh = N;
          var Z = {
            'bundle': [].concat(V.generalAssetConfig, q.audioAssetConfig, M.customAssetConfig),
            'progressCallback': this.Ph.bind(this),
            'retryHandling': this.Bh.bind(this),
            'retryingCallback': this.Oh.bind(this),
            'retryMessage': shell.I18n.t("General.ResourceRetryMessage")
          };
          this.Ch.loadBundle(Z).then(this.Ih.bind(this));
        }, F.prototype.Mh = function () {
          var N = '1' === H.cs_Launch.noAudio ? L.default : C.default;
          Q.settingMenuHelper.initAudio(N);
        }, F.prototype.wh = function () {
          Object.keys(D.GeneralAudioPool).forEach(function (N) {
            q.audioAssetConfig.push({
              'name': N,
              'type': U.LoaderType.CUSTOM,
              'loadFunc': function (Z, A) {
                D.loadAudio(D.GeneralAudioPool[N], function (G) {
                  G && A(G), Z(undefined);
                });
              }
            });
          });
        }, F.prototype.Ah = function () {
          var N = {};
          N.setting_menu = Q.settingMenuHelper.path + "prefab/setting_menu/setting_menu";
          N.setting_menu_auto_spin_button = Q.settingMenuHelper.path + "prefab/others/spin_options_button";
          N.setting_menu_more_menu_button = Q.settingMenuHelper.path + "prefab/others/more_menu_button";
          N.setting_menu_setting_button = Q.settingMenuHelper.path + "prefab/others/sound_button";
          N.setting_menu_minus_bet_button = Q.settingMenuHelper.path + "prefab/others/minus_bet_button";
          N.setting_menu_plus_bet_button = Q.settingMenuHelper.path + "prefab/others/plus_bet_button";
          N.setting_menu_turbo_spin_button = Q.settingMenuHelper.path + "prefab/others/turbo_spin_button";
          Object.keys(Z).forEach(function (A) {
            var G = {};
            G.name = A;
            G.url = Z[A];
            G.type = cc.Prefab;
            G.isLocalized = false;
            M.customAssetConfig.push(G);
          }), M.customAssetConfig.push({
            'name': "setting_menu_sprite_atlas",
            'url': Q.settingMenuHelper.path + "texture/hd/setting_menu_locale",
            'type': cc.SpriteAtlas,
            'isLocalized': true
          });
        }, F.prototype.Oh = function (N) {
          var Z = N > 0 ? N : undefined;
          W.sendLoadFailReport(Z);
        }, F.prototype.Bh = function (N, Z, A, G) {
          var J = shell.Error,
            K = shell.ClientError,
            l0 = new J(K.Domain, K.GameLoadResourceError),
            l1 = G > 0 ? G : undefined;
          W.sendLoadFailReport(l1);
          var l2 = P.pgDataSource.gameLaunched ? z.ErrContext.Preload : z.ErrContext.Launch;
          z.showError(l0, l2, function (l3) {
            switch (l3) {
              case z.ErrAction.Retry:
                N && N();
                break;
              case z.ErrAction.Quit:
                k.quitGameWithEvent("Load resource fail")();
            }
          });
        }, F.prototype.Ih = function (Z) {
          var J,
            K,
            l0 = Z.setting_menu,
            l1 = Z.setting_menu_auto_spin_button,
            l2 = Z.setting_menu_more_menu_button,
            l3 = Z.setting_menu_setting_button,
            l4 = Z.setting_menu_minus_bet_button,
            l5 = Z.setting_menu_plus_bet_button,
            l6 = Z.setting_menu_turbo_spin_button,
            l7 = Z.setting_menu_sprite_atlas,
            l8 = Z.click_effect,
            l9 = Z.wild_multipy_spine_controller,
            ll = Z.slot_bg,
            lj = Z.pay_select_effect,
            lI = Z.backWorld,
            ls = Z.pay_table_controller,
            lO = Z.frontWorld,
            ly = Z.bottom_ui,
            lB = Z.spin_button_controller,
            lx = Z.infobar_controller,
            lC = Z.big_win_controller,
            lH = Z.piggy_controller,
            lr = Z.feature_particle,
            lV = Z.big_win_text,
            lM = Z.paytable_text,
            lq = Z.wild,
            lm = Z.infoboard_message_texture;
          J = cc.instantiate(l0.result), this.settingMenuHolder.addChild(J), this.settingMenuHolder.zIndex = w.EN_GAME_LAYER_Z_INDEX_HIGH + 50, K = J.getComponent("SettingMenuController"), this._t.settingController = K, Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.SPIN_OPTIONS, l1.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.MORE_MENU, l2.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.SOUND, l3.result, true), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.MINUS_BET, l4.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.PLUS_BET, l5.result), Q.settingMenuHelper.setButtonPrefab(Q.ButtonPrefabType.TURBO_SPIN, l6.result, true), Q.settingMenuHelper.settingMenuLocaleIcons = l7.result, J = cc.instantiate(l8.result), this.clickEffectHolder.addChild(J), K = J.getComponent("ClickEffectController"), this._t.clickEffectController = K, J = cc.instantiate(l9.result), this.wildMultiplySpineHolder.addChild(J), K = J.getComponent("WildMultiplySpineManager"), this._t.wildMultiplySpineController = K, J = cc.instantiate(ll.result), this.slotControllerHolder.addChild(J), K = J.getComponent("SlotController"), this._t.slotController = K, this._t.fastSpinAnimationController = K.getFastSpinAnimationController(), this._t.scrollerManagerController = K.getScrollerManagerController(), J = cc.instantiate(lj.result), this._t.slotController.setPaySelectController(J), K = J.getComponent("PaySelectController"), this._t.paySelectController = K, J = cc.instantiate(lI.result), this.backWorldHolder.addChild(J), K = J.getComponent("BackWorldController"), this._t.backWorldController = K, J = cc.instantiate(lO.result), this.frontWorldHolder.addChild(J), K = J.getComponent("FrontWorldController"), this._t.frontWorldController = K, J = cc.instantiate(ls.result), this.paytableHolder.addChild(J);
          var lD = lM.result,
            lW = lq.result;
          (K = J.getComponent("PayTableController")).init(), K.setPaytableAnyLocalizeSF(lD.getSpriteFrame("any_paytable")), K.setPaytableWildLocalizeSF(lW), this._t.payTableController = K, J = cc.instantiate(ly.result), this.bottomUIHolder.addChild(J), J = cc.instantiate(lB.result), this.spinButtonHolder.addChild(J), (K = J.getComponent("PGSpinButtonController")).init(), this._t.spinButtonController = K, J = cc.instantiate(lx.result), this.infobarHolder.addChild(J), K = J.getComponent("InfobarController"), this._t.infobarController = K, J = cc.instantiate(lC.result), this.bigWinHolder.addChild(J), K = J.getComponent("BigWinController");
          var lk = lV.result;
          K.setBigWinLocalizeSF(lk.getSpriteFrame("big_win")), K.setMegaWinlocalizeSF(lk.getSpriteFrame("mega_win")), K.setSuperMegaWinlocalizeSF(lk.getSpriteFrame("super_win")), this._t.bigWinController = K, J = cc.instantiate(lH.result), this.piggyHolder.addChild(J), K = J.getComponent("PiggyController"), this._t.piggyController = K, J = cc.instantiate(lr.result), this.featurePiggyHolder.addChild(J), K = J.getComponent("PiggyParticleFeatureManager"), this._t.featurePiggyController = K;
          var lo = lm.result,
            lz = [lo.getSpriteFrame("info_1"), lo.getSpriteFrame("info_2"), lo.getSpriteFrame("info_3")];
          this._t.infobarController.setTips(lz), this._t.infobarController.setWinSF(lo.getSpriteFrame("win"));
          var lc = this.yh;
          this.yh = undefined, lc && lc();
        }, F.prototype.Ph = function (N, Z) {
          shell.setProgress(N, Z);
        }, __decorate([Y(cc.Node)], F.prototype, "backWorldHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "paytableHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "frontWorldHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "bottomUIHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "settingMenuHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "clickEffectHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "infobarHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "bigWinHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "piggyHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "featurePiggyHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "wildMultiplySpineHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "spinButtonHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "slotControllerHolder", undefined), __decorate([Y(cc.Node)], F.prototype, "footerBackgroundNode", undefined), __decorate([T], F);
      }(cc.Component);
    exports.default = X, cc._RF.pop();
  }
}
module.exports = LoadingController;
