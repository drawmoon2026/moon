// module: BigWinController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BigWinController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "d2d890Fi6BBm5DvLiZKjbd4", "BigWinController")) {
    {
      var B = {};
      B["value"] = !0;
      Object["defineProperty"](I, "__esModule", B), I["WinRollState"] = void 0;
      var X,
        Z,
        T,
        M = F("Utils"),
        C = F("AudioManager"),
        V = F("BGMHandler"),
        N = F("AudioConstant"),
        q = F("SpaceBarInterrupter"),
        g = F("GameEventHandler"),
        K = F("BigWinController.spec"),
        O = F("AutomationDecorator"),
        x = cc["_decorator"],
        p = x["ccclass"],
        L = x["property"];
      (function (U) {
        U[U["INITIAL"] = 1] = "INITIAL", U[U["PLAYING"] = 2] = "PLAYING", U[U["WAITING"] = 3] = "WAITING", U[U["DISMISING"] = 4] = "DISMISING";
      })(X || (X = {})), function (U) {
        U[U["BIG_WIN"] = 0] = "BIG_WIN", U[U["MEGA_WIN"] = 1] = "MEGA_WIN", U[U["SUPER_MEGA_WIN"] = 2] = "SUPER_MEGA_WIN";
      }(Z = I["WinRollState"] || (I["WinRollState"] = {})), function (U) {
        U[U["LEFT_01"] = 0] = "LEFT_01", U[U["LEFT_02"] = 1] = "LEFT_02", U[U["RIGHT_01"] = 2] = "RIGHT_01", U[U["RIGHT_02"] = 3] = "RIGHT_02", U[U["EXTRA_LEFT"] = 4] = "EXTRA_LEFT", U[U["EXTRA_RIGHT"] = 5] = "EXTRA_RIGHT";
      }(T || (T = {}));
      var H = function (U) {
        {
          function k() {
            var Y = null !== U && U["apply"](this, arguments) || this;
            return Y["winAmountNode"] = void 0, Y["tintNode"] = void 0, Y["stopButtonNode"] = void 0, Y["bigWinTextNode"] = void 0, Y["backgroundNode"] = void 0, Y["effectHolder"] = void 0, Y["hoverEffectNode"] = void 0, Y["coinRotateHolder01"] = void 0, Y["coinRotateHolder02"] = void 0, Y["coinRotateHolder03"] = void 0, Y["circleBackgroundNode"] = void 0, Y["circleBackgroundSprite"] = void 0, Y["shineNode"] = void 0, Y["coinExplosionAnimation"] = void 0, Y["coinRotateBigWinNode"] = [], Y["coinRotateMegaWinNode"] = [], Y["coinRotateSuperMegaWinNode"] = [], Y["particleEffectANode"] = void 0, Y["particleEffectBNode"] = void 0, Y["circleBackgroundTexture"] = [], Y['pt'] = X["INITIAL"], Y['St'] = Z["BIG_WIN"], Y['gt'] = !1, Y['Ct'] = !1, Y['Mt'] = void 0, Y['yt'] = void 0, Y['Bt'] = void 0, Y['At'] = void 0, Y['Ht'] = void 0, Y;
          }
          return __extends(k, U), Object["defineProperty"](k["prototype"], "winRollController", {
            'get': function () {
              {
                return this['At'] || (this['At'] = this["winAmountNode"]["getComponent"]("TimedWinRollController")), this['At'];
              }
            },
            'enumerable': !1,
            'configurable': !0
          }), Object["defineProperty"](k["prototype"], "bigWinTextController", {
            'get': function () {
              return this['Ht'] || (this['Ht'] = this["bigWinTextNode"]["getComponent"]("BigWinTextController")), this['Ht'];
            },
            'enumerable': !1,
            'configurable': !0
          }), k["prototype"]["init"] = function (Y, y, z) {
            {
              this["bigWinTextController"]["init"](Y, y, z), this["node"]["active"] = !1, this['Ot']({
                'skipButtonNode': this["stopButtonNode"]
              });
            }
          }, k["prototype"]["play"] = function (Y, y, z, S) {
            var P = this;
            this['pt'] === X["INITIAL"] && (this['Ct'] = z, V["bgmHandler"]["fadeOutBgm"](0.5), M["delayCallback"](0.4)(function () {
              var G = P["node"];
              G["active"] = !0, G["opacity"] = 0, G["runAction"](cc["fadeIn"](0.1)), P['gt'] = !1, P['It'](), P['pt'] = X["PLAYING"], P['yt'] = S, P['Tt'] = Y, P['Mt'] = y, C["setAudioVolume"](N["GENERAL_AUDIO"]["bgmBigwinMain"]["key"], 1), C["playAudio"](N["GENERAL_AUDIO"]["bgmBigwinMain"]["key"]), P['Et'](), P['Nt']();
            }));
          }, k["prototype"]["stopButtonOnClick"] = function () {
            if (this['Gt'](), this['gt'] = !0, this['pt'] === X["PLAYING"]) this['kt'](), this["scheduleOnce"](this['It'], 1), C["stopAudio"](N["GENERAL_AUDIO"]["bgmBigwinMain"]["key"]);else if (this['pt'] === X["WAITING"]) {
              var Y = this['Bt'];
              this['Bt'] = void 0, Y && Y(), this['Rt']();
            }
          }, k["prototype"]['jt'] = function () {
            var Y = this["winRollController"],
              y = this['Mt'];
            Y["setNumbersCallback"]([0.95 * y["megaWinThreshold"], y["megaWinThreshold"], 0.97 * y["superMegaWinThreshold"], y["superMegaWinThreshold"]]), Y["init"]({
              'bigWinThreshold': y["bigWinThreshold"],
              'megaWinThreshold': y["megaWinThreshold"],
              'superMegaWinThreshold': y["superMegaWinThreshold"],
              'bigWinDuration': [4.08, 3.84],
              'megaWinDuration': [3.84, 3.84],
              'superMegaWinDuration': [3.84, 3.84],
              'totalWin': this['Tt']
            }), Y["play"](this['Lt']["bind"](this)), this['It']();
          }, k["prototype"]['Lt'] = function (Y) {
            var y = this['Mt'],
              z = this['St'];
            Y >= y["megaWinThreshold"] && Y < y["superMegaWinThreshold"] && z !== Z["MEGA_WIN"] ? (this['St'] = Z["MEGA_WIN"], this['Pt']()) : Y >= y["superMegaWinThreshold"] && z !== Z["SUPER_MEGA_WIN"] && (z !== Z["MEGA_WIN"] && this['Pt'](), this['St'] = Z["SUPER_MEGA_WIN"], this['Dt']()), Y === this['Tt'] && this['pt'] === X["PLAYING"] && this['Ut']();
          }, k["prototype"]['Nt'] = function () {
            var Y = this;
            this['xt'](), this["coinExplosionAnimation"]["play"](), this['Ft'](), this["schedule"](this['Ft'], 1.4), M["delayCallback"](0.7)(function () {
              Y['Wt'](), Y["schedule"](Y['Wt'], 1.4);
            }), this["shineNode"]["stopAllActions"](), this["shineNode"]["runAction"](cc["scaleTo"](0.3, 2.5)), this["shineNode"]["runAction"](cc["rotateBy"](16, 360)["repeatForever"]()), this["coinRotateHolder01"]["opacity"] = 0, this["coinRotateHolder01"]["active"] = !0, this["coinRotateHolder01"]["stopAllActions"](), this["coinRotateHolder01"]["runAction"](cc["fadeIn"](0.3)), this["coinRotateBigWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["LEFT_01"]]["active"] = !0, this["coinRotateBigWinNode"][T["LEFT_01"]]["runAction"](cc["rotateBy"](4, 360)["repeatForever"]()), this["coinRotateBigWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["RIGHT_01"]]["active"] = !0, this["coinRotateBigWinNode"][T["RIGHT_01"]]["runAction"](cc["rotateBy"](4, -360)["repeatForever"]()), this["coinRotateBigWinNode"][T["LEFT_02"]]["active"] = !0, this["coinRotateBigWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["LEFT_02"]]["runAction"](cc["rotateBy"](3, 360)["repeatForever"]()), this["coinRotateBigWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["RIGHT_02"]]["active"] = !0, this["coinRotateBigWinNode"][T["RIGHT_02"]]["runAction"](cc["rotateBy"](3, -360)["repeatForever"]()), this["circleBackgroundNode"]["setPosition"](0, 0), this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["setScale"](0), this["circleBackgroundNode"]["opacity"] = 255, this["circleBackgroundNode"]["runAction"](cc["sequence"](cc["scaleTo"](0.3, 2.3)["easing"](cc["easeIn"](2)), cc["scaleTo"](0.3, 2)["easing"](cc["easeIn"](2)))), this["circleBackgroundNode"]["runAction"](cc["rotateBy"](4, 360)["repeatForever"]()), this["circleBackgroundSprite"]["spriteFrame"] = this["circleBackgroundTexture"][Z["BIG_WIN"]], this['Jt'](), this['Vt'](0.3), this["bigWinTextController"]["play"](Z["BIG_WIN"], this['jt']["bind"](this));
          }, k["prototype"]['Pt'] = function () {
            var Y = this;
            this['zt'](), this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["runAction"](cc["fadeOut"](0.1)), M["delayCallback"](0.1)(function () {
              Y['Kt']();
            });
          }, k["prototype"]['Kt'] = function () {
            this["coinExplosionAnimation"]["play"](), this['Jt'](), this["coinRotateHolder02"]["opacity"] = 0, this["coinRotateHolder02"]["active"] = !0, this["coinRotateHolder02"]["stopAllActions"](), this["coinRotateHolder02"]["runAction"](cc["fadeIn"](0.3)), this["coinRotateMegaWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["LEFT_01"]]["active"] = !0, this["coinRotateMegaWinNode"][T["LEFT_01"]]["runAction"](cc["rotateBy"](4, 360)["repeatForever"]()), this["coinRotateMegaWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["RIGHT_01"]]["active"] = !0, this["coinRotateMegaWinNode"][T["RIGHT_01"]]["runAction"](cc["rotateBy"](4, -360)["repeatForever"]()), this["coinRotateMegaWinNode"][T["LEFT_02"]]["active"] = !0, this["coinRotateMegaWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["LEFT_02"]]["runAction"](cc["rotateBy"](3, 360)["repeatForever"]()), this["coinRotateMegaWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["RIGHT_02"]]["active"] = !0, this["coinRotateMegaWinNode"][T["RIGHT_02"]]["runAction"](cc["rotateBy"](3, -360)["repeatForever"]()), this["circleBackgroundNode"]["setPosition"](0, 100), this["circleBackgroundNode"]["setScale"](0), this["circleBackgroundNode"]["opacity"] = 255, this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["runAction"](cc["sequence"](cc["scaleTo"](0.3, 2.3)["easing"](cc["easeIn"](2)), cc["scaleTo"](0.3, 2)["easing"](cc["easeIn"](2)))), this["circleBackgroundNode"]["runAction"](cc["rotateBy"](4, 360)["repeatForever"]()), this["circleBackgroundSprite"]["spriteFrame"] = this["circleBackgroundTexture"][Z["MEGA_WIN"]], this["backgroundNode"]["setScale"](0), this["backgroundNode"]["setPosition"](0, 250), this['Vt'](0.2), this["bigWinTextController"]["play"](Z["MEGA_WIN"]);
          }, k["prototype"]['Dt'] = function () {
            {
              var Y = this;
              this['zt'](), this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["runAction"](cc["fadeOut"](0.1)), M["delayCallback"](0.1)(function () {
                Y['qt']();
              });
            }
          }, k["prototype"]['qt'] = function () {
            this["coinExplosionAnimation"]["play"](), this["coinRotateHolder03"]["opacity"] = 0, this["coinRotateHolder03"]["active"] = !0, this["coinRotateHolder03"]["stopAllActions"](), this["coinRotateHolder03"]["runAction"](cc["fadeIn"](0.3)), this["coinRotateSuperMegaWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["LEFT_01"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["LEFT_01"]]["runAction"](cc["rotateBy"](5, 360)["repeatForever"]()), this["coinRotateSuperMegaWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["RIGHT_01"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["RIGHT_01"]]["runAction"](cc["rotateBy"](5, -360)["repeatForever"]()), this["coinRotateSuperMegaWinNode"][T["LEFT_02"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["LEFT_02"]]["runAction"](cc["rotateBy"](3.5, 360)["repeatForever"]()), this["coinRotateSuperMegaWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["RIGHT_02"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["RIGHT_02"]]["runAction"](cc["rotateBy"](3.5, -360)["repeatForever"]()), this["coinRotateSuperMegaWinNode"][T["EXTRA_LEFT"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["EXTRA_LEFT"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["EXTRA_LEFT"]]["runAction"](cc["rotateBy"](3.5, 360)["repeatForever"]()), this["coinRotateSuperMegaWinNode"][T["EXTRA_RIGHT"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["EXTRA_RIGHT"]]["active"] = !0, this["coinRotateSuperMegaWinNode"][T["EXTRA_RIGHT"]]["runAction"](cc["rotateBy"](3.5, -360)["repeatForever"]()), this["circleBackgroundNode"]["setPosition"](0, 100), this["circleBackgroundNode"]["setScale"](0), this["circleBackgroundNode"]["opacity"] = 255, this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["runAction"](cc["sequence"](cc["scaleTo"](0.3, 2.3)["easing"](cc["easeIn"](2)), cc["scaleTo"](0.3, 2)["easing"](cc["easeIn"](2)))), this["circleBackgroundNode"]["runAction"](cc["rotateBy"](4, 360)["repeatForever"]()), this["circleBackgroundSprite"]["spriteFrame"] = this["circleBackgroundTexture"][Z["SUPER_MEGA_WIN"]], this['Jt'](), this["backgroundNode"]["setScale"](0), this["backgroundNode"]["setPosition"](0, 300), this['Vt'](0.2), this["bigWinTextController"]["play"](Z["SUPER_MEGA_WIN"]);
          }, k["prototype"]['Ft'] = function () {
            {
              this["particleEffectANode"]["stopAllActions"](), this["particleEffectANode"]["setScale"](0), this["particleEffectANode"]["opacity"] = 255, this["particleEffectANode"]["runAction"](cc["sequence"](cc["scaleTo"](1, 3)["easing"](cc["easeIn"](1)), cc["spawn"](cc["scaleTo"](0.5, 4.5), cc["fadeOut"](0.3))));
            }
          }, k["prototype"]['Wt'] = function () {
            this["particleEffectBNode"]["stopAllActions"](), this["particleEffectBNode"]["setScale"](0), this["particleEffectBNode"]["opacity"] = 255, this["particleEffectBNode"]["runAction"](cc["sequence"](cc["scaleTo"](1, 2.5)["easing"](cc["easeIn"](1)), cc["spawn"](cc["scaleTo"](0.5, 4), cc["fadeOut"](0.3))));
          }, k["prototype"]['Ut'] = function () {
            {
              var Y = this;
              this['pt'] = X["WAITING"];
              var y = this['Ct'] ? 1 : 6;
              var z = {};
              z["displayState"] = "DidUpdate";
              z["effectType"] = "BigWin";
              g["emitGameEffectStateChangedEvent"](z), C["stopAudio"](N["GENERAL_AUDIO"]["bgmBigwinMain"]["key"]), C["setAudioVolume"](N["GENERAL_AUDIO"]["bgmBigwinEnd"]["key"], 1), C["playAudio"](N["GENERAL_AUDIO"]["bgmBigwinEnd"]["key"]), this["coinExplosionAnimation"]["play"](), this['Jt'](), this['Vt'](0.2), this['Bt'] = M["delayCallback"](3)(function () {
                V["bgmHandler"]["fadeInBgm"](3.5), Y['Bt'] = void 0;
              }), this['gt'] || this["bigWinTextController"]["playEnd"](this['gt']), this["scheduleOnce"](this['Rt'], y);
            }
          }, k["prototype"]['Jt'] = function () {
            var Y = this["hoverEffectNode"];
            Y["stopAllActions"](), Y["setScale"](cc['v2'](0, 0)), Y["opacity"] = 255, Y["runAction"](cc["sequence"](cc["scaleTo"](0.3, 3)["easing"](cc["easeIn"](2)), cc["spawn"](cc["scaleTo"](0.5, 5), cc["fadeOut"](0.5))));
          }, k["prototype"]['Vt'] = function (Y) {
            this["backgroundNode"]["stopAllActions"](), this["backgroundNode"]["runAction"](cc["sequence"](cc["spawn"](cc["fadeIn"](Y), cc["scaleTo"](Y, 1.8)["easing"](cc["easeIn"](2))), cc["scaleTo"](0.1, 1.4)["easing"](cc["easeIn"](2)), cc["scaleTo"](0.1, 1.5)["easing"](cc["easeIn"](2))));
          }, k["prototype"]['zt'] = function () {
            this["backgroundNode"]["stopAllActions"](), this["backgroundNode"]["runAction"](cc["fadeOut"](0.1));
          }, k["prototype"]['Et'] = function () {
            {
              this["tintNode"]["active"] = !0, this["tintNode"]["stopAllActions"](), this["tintNode"]["runAction"](cc["fadeTo"](0.2, 180)), this["effectHolder"]["active"] = !0, this["effectHolder"]["stopAllActions"](), this["effectHolder"]["runAction"](cc["fadeIn"](0.1));
            }
          }, k["prototype"]['It'] = function () {
            this["stopButtonNode"]["active"] || (q["spaceBarInterrupter"]["subscribeEventInterrupter"]("bigwin", this["node"], this["stopButtonOnClick"]["bind"](this)), this["stopButtonNode"]["active"] = !0);
          }, k["prototype"]['Gt'] = function () {
            this["stopButtonNode"]["active"] && (q["spaceBarInterrupter"]["unsubscribeEventInterrupter"]("bigwin"), this["stopButtonNode"]["active"] = !1);
          }, k["prototype"]['Rt'] = function () {
            {
              var Y = {};
              Y["displayState"] = "WillEnd";
              Y["effectType"] = "BigWin";
              this['pt'] === X["WAITING"] && (this['pt'] = X["DISMISING"], this['Ct'] = !1, g["emitGameEffectStateChangedEvent"](Y), this['Gt'](), V["bgmHandler"]["fadeBgmTo"](1, 1), M["delayCallback"](0.5)(this['Qt']["bind"](this)));
            }
          }, k["prototype"]['kt'] = function () {
            this['pt'] === X["PLAYING"] && this["winRollController"]["skip"]();
          }, k["prototype"]['Qt'] = function () {
            {
              this["bigWinTextController"]["dismiss"](), this["coinRotateHolder01"]["stopAllActions"](), this["coinRotateHolder01"]["runAction"](cc["fadeOut"](0.15)), this["coinRotateHolder02"]["stopAllActions"](), this["coinRotateHolder02"]["runAction"](cc["fadeOut"](0.15)), this["coinRotateHolder03"]["stopAllActions"](), this["coinRotateHolder03"]["runAction"](cc["fadeOut"](0.15)), this["effectHolder"]["stopAllActions"](), this["effectHolder"]["runAction"](cc["fadeOut"](0.3)), this["node"]["stopAllActions"](), this["node"]["runAction"](cc["sequence"](cc["fadeOut"](0.5), cc["callFunc"](this['Yt'], this)));
            }
          }, k["prototype"]['Yt'] = function () {
            {
              var Y = this['yt'];
              this['yt'] = void 0, this['Zt'](), Y && Y();
            }
          }, k["prototype"]['Zt'] = function () {
            C["stopAudio"](N["GENERAL_AUDIO"]["bgmBigwinMain"]["key"]), C["stopAudio"](N["GENERAL_AUDIO"]["bgmBigwinEnd"]["key"]), this["coinExplosionAnimation"]["stop"](), this["bigWinTextController"]["stop"](), this["winRollController"]["stop"](), this["unschedule"](this['Rt']), this['Xt'](), this['pt'] = X["INITIAL"], this['St'] = Z["BIG_WIN"], this['yt'] = void 0, this['Tt'] = void 0, this['Mt'] = void 0, this['Bt'] = void 0, this["node"]["active"] = !1;
          }, k["prototype"]['Xt'] = function () {
            this["tintNode"]["opacity"] = 0, this["tintNode"]["active"] = !0, this["tintNode"]["stopAllActions"](), this["unschedule"](this['Ft']), this["unschedule"](this['Wt']), this["particleEffectANode"]["stopAllActions"](), this["particleEffectANode"]["setScale"](0), this["particleEffectANode"]["opacity"] = 255, this["particleEffectBNode"]["stopAllActions"](), this["particleEffectBNode"]["setScale"](0), this["particleEffectBNode"]["opacity"] = 255, this["shineNode"]["stopAllActions"](), this["shineNode"]["setScale"](0), this["circleBackgroundNode"]["stopAllActions"](), this["circleBackgroundNode"]["opacity"] = 255, this["circleBackgroundNode"]["setScale"](0), this["circleBackgroundNode"]["setPosition"](0, 0), this["effectHolder"]["stopAllActions"](), this["effectHolder"]["opacity"] = 0, this["effectHolder"]["active"] = !1, this["coinRotateHolder01"]["opacity"] = 0, this["coinRotateHolder01"]["active"] = !1, this["coinRotateHolder02"]["opacity"] = 0, this["coinRotateHolder02"]["active"] = !1, this["coinRotateHolder03"]["opacity"] = 0, this["coinRotateHolder03"]["active"] = !1, this["coinRotateBigWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateBigWinNode"][T["LEFT_01"]]["active"] = !1, this["coinRotateBigWinNode"][T["LEFT_02"]]["active"] = !1, this["coinRotateBigWinNode"][T["RIGHT_01"]]["active"] = !1, this["coinRotateBigWinNode"][T["RIGHT_02"]]["active"] = !1, this["coinRotateMegaWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateMegaWinNode"][T["LEFT_01"]]["active"] = !1, this["coinRotateMegaWinNode"][T["LEFT_02"]]["active"] = !1, this["coinRotateMegaWinNode"][T["RIGHT_01"]]["active"] = !1, this["coinRotateMegaWinNode"][T["RIGHT_02"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["LEFT_01"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["LEFT_02"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["RIGHT_01"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["RIGHT_02"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["EXTRA_LEFT"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["EXTRA_RIGHT"]]["stopAllActions"](), this["coinRotateSuperMegaWinNode"][T["LEFT_01"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["LEFT_02"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["RIGHT_01"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["RIGHT_02"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["EXTRA_LEFT"]]["active"] = !1, this["coinRotateSuperMegaWinNode"][T["EXTRA_RIGHT"]]["active"] = !1, this["hoverEffectNode"]["setScale"](cc['v2'](0, 0)), this["hoverEffectNode"]["opacity"] = 255, this["hoverEffectNode"]["stopAllActions"](), this["backgroundNode"]["stopAllActions"](), this["backgroundNode"]["setScale"](0, 0), this["backgroundNode"]["setPosition"](0, 200);
          }, k["prototype"]["destroy"] = function () {
            return this['Zt'](), this["node"]["destroy"](), U["prototype"]["destroy"]["call"](this);
          }, k["prototype"]['Ot'] = function () {}, k["prototype"]['xt'] = function () {}, __decorate([L(cc["Node"])], k["prototype"], "winAmountNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "tintNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "stopButtonNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "bigWinTextNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "backgroundNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "effectHolder", void 0), __decorate([L(cc["Node"])], k["prototype"], "hoverEffectNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "coinRotateHolder01", void 0), __decorate([L(cc["Node"])], k["prototype"], "coinRotateHolder02", void 0), __decorate([L(cc["Node"])], k["prototype"], "coinRotateHolder03", void 0), __decorate([L(cc["Node"])], k["prototype"], "circleBackgroundNode", void 0), __decorate([L(cc["Sprite"])], k["prototype"], "circleBackgroundSprite", void 0), __decorate([L(cc["Node"])], k["prototype"], "shineNode", void 0), __decorate([L(cc["Animation"])], k["prototype"], "coinExplosionAnimation", void 0), __decorate([L([cc["Node"]])], k["prototype"], "coinRotateBigWinNode", void 0), __decorate([L([cc["Node"]])], k["prototype"], "coinRotateMegaWinNode", void 0), __decorate([L([cc["Node"]])], k["prototype"], "coinRotateSuperMegaWinNode", void 0), __decorate([L(cc["Node"])], k["prototype"], "particleEffectANode", void 0), __decorate([L(cc["Node"])], k["prototype"], "particleEffectBNode", void 0), __decorate([L([cc["SpriteFrame"]])], k["prototype"], "circleBackgroundTexture", void 0), __decorate([O["automationDec"]({
            'func': K["skipBigWinAnimationActiveEvent"]
          })], k["prototype"], "_startWinRoll", null), __decorate([O["automationDec"]({
            'func': K["initBigWinNodes"]
          })], k["prototype"], "_initBigWinNodes", null), __decorate([O["automationDec"]({
            'func': K["skipBigWinButtonActiveEvent"]
          })], k["prototype"], "_skipButtonActive", null), __decorate([p], k);
        }
      }(cc["Component"]);
      I["default"] = H, cc["_RF"]["pop"]();
    }
  }
}
module.exports = BigWinController;
