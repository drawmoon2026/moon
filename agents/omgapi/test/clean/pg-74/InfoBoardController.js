// module: InfoBoardController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function InfoBoardController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "5144fyBpeZLZ6aZrW4gPoIN", "InfoBoardController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m), I["InfoboardState"] = void 0;
      var B,
        X = F("Utils"),
        Z = F("AudioManager"),
        T = F("AudioConstant"),
        M = F("GameConstant"),
        C = F("SpaceBarInterrupter"),
        V = F("GameUtil");
      (function (O) {
        O[O["DISPLAY_TIP_N"] = 0] = "DISPLAY_TIP_N", O[O["SMALL_WIN"] = 1] = "SMALL_WIN", O[O["MEDIUM_WIN"] = 2] = "MEDIUM_WIN", O[O["BIG_WIN"] = 3] = "BIG_WIN", O[O["TOTAL_WIN"] = 4] = "TOTAL_WIN", O[O["FREE_SPIN"] = 5] = "FREE_SPIN", O[O["NONE"] = 6] = "NONE";
      })(B = I["InfoboardState"] || (I["InfoboardState"] = {}));
      var N = cc["_decorator"],
        q = N["ccclass"],
        g = N["property"],
        K = function (O) {
          function x() {
            var p = null !== O && O["apply"](this, arguments) || this;
            return p["winAnimation"] = void 0, p["infoBoard"] = void 0, p["infoBoardMask"] = void 0, p["frontBoard"] = void 0, p["frontBoard_normal"] = void 0, p["frontBoard_bonus"] = void 0, p["frontBoard_mask_normal"] = void 0, p["frontBoard_mask_bonus"] = void 0, p["midWinHolder"] = void 0, p["smallWinHolder"] = void 0, p["midWinBoard"] = void 0, p["smallWinBoard"] = void 0, p["contentNode"] = void 0, p["winNode"] = void 0, p["winAmountNode"] = void 0, p["winSF"] = void 0, p["totalWinSF"] = void 0, p["skipButtonNode"] = void 0, p["mediumWinBoardSprite"] = void 0, p["infoVfxA"] = void 0, p["infoVfxD"] = void 0, p["infoVfxE"] = void 0, p["infoLv02VfxI"] = void 0, p["smallWinMask"] = void 0, p["infoLv02vfxC"] = void 0, p["infoVfxASprite"] = void 0, p["infoVfxABonusSprite"] = void 0, p["infoVfxDSprite"] = void 0, p["infoVfxDBonusSprite"] = void 0, p["infoVfxB"] = void 0, p['fo'] = [], p['do'] = [], p['vo'] = [], p['_o'] = void 0, p['mo'] = void 0, p['bo'] = void 0, p['po'] = void 0, p['gt'] = !1, p['So'] = !1, p['Co'] = !1, p['Mo'] = void 0, p['yo'] = void 0, p['wo'] = void 0, p['Bo'] = !1, p;
          }
          return __extends(x, O), Object["defineProperty"](x["prototype"], "infoboardMessageController", {
            'get': function () {
              return this['Mo'] || (this['Mo'] = this["infoBoard"]["getComponent"]("InfoboardMessageController")), this['Mo'];
            },
            'enumerable': !1,
            'configurable': !0
          }), x["prototype"]["switchBackground"] = function (p) {
            switch (this['yo'] = p, p) {
              case M["TransitionState"]["FREE_SPIN"]:
              case M["TransitionState"]["FREE_SPIN_RESPIN"]:
                this["frontBoard"]["spriteFrame"] = this["frontBoard_bonus"], this["frontBoard"]["node"]["setScale"](1.36, 1.44), this["frontBoard"]["node"]['y'] = 5, this['Ao'](!0), this["infoVfxA"]["spriteFrame"] = this["infoVfxABonusSprite"], this["infoVfxD"]["spriteFrame"] = this["infoVfxDBonusSprite"], this["infoVfxA"]["node"]["setScale"](2.38, 2.65), this["infoVfxD"]["node"]["setScale"](2.38, 2.9);
                break;
              case M["TransitionState"]["NORMAL"]:
              case M["TransitionState"]["RESPIN"]:
              default:
                this["frontBoard"]["spriteFrame"] = this["frontBoard_normal"], this["frontBoard"]["node"]["setScale"](1.4, 1.4), this["frontBoard"]["node"]['y'] = 0, this['Ao'](!1), this["infoVfxA"]["spriteFrame"] = this["infoVfxASprite"], this["infoVfxD"]["spriteFrame"] = this["infoVfxDSprite"], this["infoVfxA"]["node"]["setScale"](2.45, 2.5), this["infoVfxD"]["node"]["setScale"](2.45, 2.45);
            }
          }, x["prototype"]["init"] = function (p) {
            if (p) {
              var b = void 0;
              for (b = 0; b < p["length"]; b++) this['fo']["push"](p[b]);
              this['Ho']();
            }
            this["infoboardMessageController"]["initNumberDisplayNodeEvent"](), this["midWinBoard"]["active"] = !1, this["smallWinBoard"]["active"] = !1, this['So'] = !0, M["isRTL"] && (this["winNode"]["getComponent"](cc["Layout"])["horizontalDirection"] = cc["Layout"]["HorizontalDirection"]["LEFT_TO_RIGHT"]);
          }, x["prototype"]["setWinTextSF"] = function (p, b) {
            this["winSF"]["spriteFrame"] = p, this["totalWinSF"]["spriteFrame"] = b;
          }, x["prototype"]["getInfoboardPosition"] = function () {
            return this["node"]["convertToWorldSpaceAR"](this["infoBoard"]["getPosition"]());
          }, x["prototype"]["switchToTips"] = function (p) {
            {
              var b = this;
              if (this['Bo'] = !0, this['_o'] !== B["DISPLAY_TIP_N"]) {
                this["hideWin"]();
                var L = p ? 0 : 0.5,
                  H = function () {
                    b["infoboardMessageController"]["setSprites"](b['do']), b['Oo'](), b["setInfoState"](B["DISPLAY_TIP_N"]), b["infoBoardMask"]["active"] = !0, b['po'] = void 0, b['wo'] = void 0;
                  };
                this['wo'] && this['wo'](), this['wo'] = void 0, L ? this['wo'] = X["delayCallback"](L)(H) : H();
              }
            }
          }, x["prototype"]["freeSpinTips"] = function (p) {
            var b = this;
            if (this['Bo'] = !1, this['_o'] !== B["FREE_SPIN"]) {
              this["hideWin"]();
              var L = p ? 0 : 0.5,
                H = function () {
                  {
                    b["infoboardMessageController"]["setSprites"](b['vo']), b['Oo'](), b["infoBoardMask"]["active"] = !0, b["setInfoState"](B["FREE_SPIN"]), b['po'] = void 0, b['wo'] = void 0;
                  }
                };
              this['wo'] && this['wo'](), this['wo'] = void 0, L ? this['wo'] = X["delayCallback"](L)(H) : H();
            }
          }, x["prototype"]["setWinAmount"] = function (p) {
            V["isPassUKGC"](p) ? (this["setInfoState"](B["TOTAL_WIN"]), this['Io'](), this["disableSkipButton"](), this["infoboardMessageController"]["setTotalAndWinText"](!1, !0), this["infoboardMessageController"]["showDisplayNumber"](p)) : this['To']();
          }, x["prototype"]["setTotalWinAmount"] = function (p) {
            {
              V["isPassUKGC"](p) ? (this["setInfoState"](B["TOTAL_WIN"]), this['Io'](), this["disableSkipButton"](), this["infoboardMessageController"]["setTotalAndWinText"](!0, !1), this["infoboardMessageController"]["showDisplayNumber"](p), this['So'] = !1) : this['To']();
            }
          }, x["prototype"]["showTotalText"] = function () {
            {
              this["infoboardMessageController"]["setTotalAndWinText"](!0, !1);
            }
          }, x["prototype"]["showWin"] = function (p, b, L) {
            {
              if (!V["isPassUKGC"](p)) return this['To'](), void (L && L());
              switch (this["infoBoardMask"]["active"] = !1, this["infoboardMessageController"]["setTotalAndWinText"](b, !b), this["smallWinHolder"]["active"] = !0, this["smallWinHolder"]["opacity"] = 255, this['_o']) {
                case B["BIG_WIN"]:
                  this["midWinHolder"]["active"] = !0, this["midWinHolder"]["opacity"] = 255, this["smallWinBoard"]["active"] = !1, this["midWinBoard"]["active"] = !0;
                  break;
                case B["MEDIUM_WIN"]:
                  this["midWinHolder"]["active"] = !1, this["midWinHolder"]["opacity"] = 255, this["midWinBoard"]["active"] = !1, this["smallWinBoard"]["active"] = !0, Z["playAudio"](T["GENERAL_AUDIO"]["prizeMedwin"]["key"]);
                  break;
                default:
                  this["smallWinMask"]["active"] = !1, this["midWinHolder"]["active"] = !1, this["midWinHolder"]["opacity"] = 255, this["setInfoState"](B["SMALL_WIN"]), b ? Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwin"]["key"]) : Z["playAudio"](T["GENERAL_AUDIO"]["prizeSmallwin"]["key"]);
              }
              this["winAnimation"]["play"]("continuous_win_anim"), this["winAnimation"]['on']("stop", this['Eo'], this), this["winAnimation"]['on']("finished", L), this['Io'](), this['bo'] = p, this['No'](), this['So'] = !1;
            }
          }, x["prototype"]["showMediumWin"] = function (p, b, L) {
            var H = this;
            if (!V["isPassUKGC"](p)) return this['To'](), void (L && L());
            this["infoboardMessageController"]["setTotalAndWinText"](b, !b), this['_o'] !== B["MEDIUM_WIN"] || b ? (this["smallWinMask"]["active"] = !0, this["infoBoardMask"]["active"] = !1, this["winNode"]["active"] = !1, this["midWinHolder"]["active"] = !1, this["midWinHolder"]["opacity"] = 255, this["smallWinBoard"]["active"] = !0, this['Io'](), this["infoVfxA"]["node"]["opacity"] = 0, this["infoVfxB"]["active"] = !1, this["infoVfxD"]["node"]["setScale"](0), this['bo'] = p, X["deferCallback"](!0)(function () {
              H["smallWinHolder"]["active"] = !0;
            }), b ? (Z["setAudioVolume"](T["GENERAL_AUDIO"]["infoboardTotalwinMedwin"]["key"], 1), this['So'] ? (this["winAnimation"]["play"]("small_win_anim", this["winAnimation"]["getClips"]()[1]["duration"]), this['No'](L)) : (Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwinMedwin"]["key"]), this["winAnimation"]["play"]("continuous_win_anim"), this["scheduleOnce"](this["enableSkipButton"], 0.2), this['Go'](0, L))) : (this["infoVfxD"]["node"]["active"] = !1, this["infoVfxA"]["node"]["active"] = !1, this["infoVfxE"]["active"] = !1, this["winNode"]["opacity"] = 0, this["winNode"]["active"] = !1, Z["playAudio"](T["GENERAL_AUDIO"]["prizeMedwin"]["key"]), this["winAnimation"]["play"]("small_win_anim"), this['No'](L), this['So'] = !1)) : this["showWin"](p, b, L), this["setInfoState"](B["MEDIUM_WIN"]);
          }, x["prototype"]["showBigWin"] = function (p, b, L, H) {
            {
              if (!V["isPassUKGC"](p)) return this['To'](), void (H && H());
              this['_o'] === B["BIG_WIN"] ? (this["infoVfxD"]["node"]["active"] = !1, this["showWin"](p, L, H)) : (this["infoBoardMask"]["active"] = !1, this["smallWinHolder"]["active"] = !1, this["smallWinHolder"]["opacity"] = 255, this["midWinBoard"]["active"] = !0, this['Io'](), this['bo'] = p, this["infoVfxA"]["node"]["opacity"] = 0, this["infoVfxB"]["active"] = !1, this["infoVfxD"]["node"]["setScale"](0), this["infoboardMessageController"]["setTotalAndWinText"](L, !L), this["midWinHolder"]["active"] = !0, L && !this['So'] ? (Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwinBigwin"]["key"]), this["winAnimation"]["play"]("mid_win_anim"), this["winAnimation"]['on']("finished", H)) : (this["winAnimation"]["play"]("mid_win_anim", this["winAnimation"]["getClips"]()[0]["duration"]), H && H()), this['So'] = !1, this['No'](void 0), this["disableSkipButton"]()), this["setInfoState"](B["BIG_WIN"]);
            }
          }, x["prototype"]["hideWin"] = function () {
            var p = this;
            this["disableSkipButton"](), this["infoVfxA"]["node"]["opacity"] = 255, this["infoVfxB"]["active"] = !0, this['yo'] === M["TransitionState"]["FREE_SPIN"] || this['yo'] === M["TransitionState"]["FREE_SPIN_RESPIN"] ? this["infoVfxD"]["node"]["setScale"](2.38, 2.9) : this["infoVfxD"]["node"]["setScale"](2.45, 2.45), this['Co'] && (this["switchBackground"](M["TransitionState"]["NORMAL"]), this['Co'] = !1), this["midWinHolder"]["runAction"](cc["sequence"](cc["fadeOut"](0.25)["easing"](cc["easeIn"](1)), cc["callFunc"](function () {
              {
                p["midWinHolder"]["active"] = !1, p["midWinHolder"]["opacity"] = 255, p["midWinBoard"]["active"] = !1, p["midWinBoard"]["active"] = !1, p["smallWinBoard"]["active"] = !1;
              }
            }))), this["smallWinHolder"]["runAction"](cc["sequence"](cc["fadeOut"](0.5)["easing"](cc["easeIn"](1)), cc["callFunc"](function () {
              p["smallWinHolder"]["active"] = !1, p["smallWinHolder"]["opacity"] = 255, p["smallWinBoard"]["active"] = !1, p["infoBoardMask"]["active"] = !0;
            })));
          }, x["prototype"]["setSwitchToNormalBackgroundOnHide"] = function () {
            {
              this['_o'] === B["SMALL_WIN"] ? (this["switchBackground"](M["TransitionState"]["NORMAL"]), this["infoBoardMask"]["active"] = !1, this["midWinHolder"]["active"] = !1) : this['Co'] = !0;
            }
          }, x["prototype"]["showTotalWin"] = function (p, b) {
            {
              if (!V["isPassUKGC"](p)) return this['To'](), void (b && b());
              Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwin"]["key"]), this["midWinHolder"]["opacity"] = 255, this['Io'](), this["setInfoState"](B["SMALL_WIN"]), this['bo'] = p, this["infoboardMessageController"]["setTotalAndWinText"](!0, !1), X["sequenceCallback"](this['No']["bind"](this))(b);
            }
          }, x["prototype"]["enableSkipButton"] = function () {
            {
              this["skipButtonNode"]["active"] || (this["skipButtonNode"]["active"] = !0, C["spaceBarInterrupter"]["subscribeEventInterrupter"]("mediumTotalWin", this["node"], this["skipButtonClick"]["bind"](this)));
            }
          }, x["prototype"]["disableSkipButton"] = function () {
            this["skipButtonNode"]["active"] && (this["skipButtonNode"]["active"] = !1, C["spaceBarInterrupter"]["unsubscribeEventInterrupter"]("mediumTotalWin"));
          }, x["prototype"]["skipButtonClick"] = function () {
            {
              this["disableSkipButton"](), this['gt'] = !0, Z["fadeAudio"](T["GENERAL_AUDIO"]["infoboardTotalwinMedwin"]["key"], 1, 0, 0.2), Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwinMedwinEnd"]["key"]), this["infoboardMessageController"]["skipNumberRoll"]();
            }
          }, x["prototype"]["clear"] = function () {
            this['Zt'](), this['So'] = !1;
          }, x["prototype"]["runVfxDLoopAnim"] = function () {
            this["infoVfxD"]["node"]["stopAllActions"](), this["infoVfxD"]["node"]["active"] = !0, this["infoVfxD"]["node"]["opacity"] = 255, this["winAnimation"]["playAdditive"]("vfx_d_loop");
          }, x["prototype"]["runVfxELoopAnim"] = function () {
            this["infoVfxE"]["stopAllActions"](), this["infoVfxE"]["active"] = !0, this["infoVfxE"]["opacity"] = 255, this["winAnimation"]["playAdditive"]("vfx_e_loop");
          }, x["prototype"]["stopLoopAnim"] = function () {
            var p = this;
            this["winAnimation"]["stop"]("vfx_d_loop"), this["winAnimation"]["stop"]("vfx_e_loop"), this["infoVfxD"]["node"]["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
              p["infoVfxD"]["node"]["active"] = !1;
            }))), this["infoVfxE"]["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
              p["infoVfxE"]["active"] = !1;
            })));
          }, x["prototype"]['Eo'] = function () {
            this["infoLv02VfxI"]["opacity"] = 0, this["infoLv02vfxC"]["active"] = !1, this["infoLv02vfxC"]["skewX"] = 0, this["infoLv02vfxC"]["opacity"] = 255, this["infoLv02vfxC"]['x'] = 0, this["infoLv02vfxC"]["setScale"](1.45, 1.45), this["infoLv02vfxC"]["anchorX"] = 0.5;
          }, x["prototype"]['Ao'] = function (p) {
            var b = this,
              L = 1;
            this["infoBoardMask"]["children"]["forEach"](function (H) {
              p ? (H["getComponent"](cc["Sprite"])["spriteFrame"] = b["frontBoard_mask_bonus"], H["setScale"](1.36 * L, 1.44), L = -L, H["setPosition"](513.7 * L, 5)) : (H["getComponent"](cc["Sprite"])["spriteFrame"] = b["frontBoard_mask_normal"], H["setScale"](1.4 * L, 1.4), L = -L, H["setPosition"](498 * L, 7.5));
            });
          }, x["prototype"]["setInfoState"] = function (p) {
            this['_o'] = p;
          }, x["prototype"]['No'] = function (p) {
            this["infoboardMessageController"]["clearDisplayNumber"](), this["disableSkipButton"](), this["infoboardMessageController"]["showDisplayNumber"](this['bo']), this['bo'] = void 0, this['Zt'](), p && p();
          }, x["prototype"]['Go'] = function (p, b) {
            {
              void 0 === p && (p = 0), this['mo'] = b, this["infoboardMessageController"]["clearDisplayNumber"](), this["infoboardMessageController"]["showNumberRoll"](1, p, this['bo'], this['ko']["bind"](this)), this['bo'] = void 0;
            }
          }, x["prototype"]['ko'] = function () {
            this['gt'] || this['So'] || Z["playAudio"](T["GENERAL_AUDIO"]["infoboardTotalwinMedwinEnd"]["key"]), this["disableSkipButton"](), this['So'] = !1;
            var p = this['mo'];
            this['mo'] = void 0, this['Zt'](), p && p();
          }, x["prototype"]['Io'] = function () {
            {
              this["winNode"]["active"] = !0, this["winNode"]["opacity"] = 255, this["infoboardMessageController"]["hideInfoboardMessage"]();
            }
          }, x["prototype"]['Oo'] = function () {
            this["winNode"]["active"] = !1, this["infoboardMessageController"]["showInfoboardMessage"](), this["infoboardMessageController"]["clear"](!0);
          }, x["prototype"]['Ho'] = function () {
            this['do'] = this['fo']["slice"](0, 6), this['vo'] = this['fo']["slice"](6, 7);
          }, x["prototype"]['Zt'] = function () {
            {
              this["infoboardMessageController"]["stop"](), this["setInfoState"](B["NONE"]), this['gt'] = !1;
            }
          }, x["prototype"]['To'] = function () {
            this["disableSkipButton"](), this['Bo'] ? this["switchToTips"](!0) : this["freeSpinTips"](!0);
          }, x["prototype"]["destroy"] = function () {
            {
              return this['Zt'](), this["node"]["destroy"](), O["prototype"]["destroy"]["call"](this);
            }
          }, __decorate([g(cc["Animation"])], x["prototype"], "winAnimation", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoBoard", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoBoardMask", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "frontBoard", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "frontBoard_normal", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "frontBoard_bonus", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "frontBoard_mask_normal", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "frontBoard_mask_bonus", void 0), __decorate([g(cc["Node"])], x["prototype"], "midWinHolder", void 0), __decorate([g(cc["Node"])], x["prototype"], "smallWinHolder", void 0), __decorate([g(cc["Node"])], x["prototype"], "midWinBoard", void 0), __decorate([g(cc["Node"])], x["prototype"], "smallWinBoard", void 0), __decorate([g(cc["Node"])], x["prototype"], "contentNode", void 0), __decorate([g(cc["Node"])], x["prototype"], "winNode", void 0), __decorate([g(cc["Node"])], x["prototype"], "winAmountNode", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "winSF", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "totalWinSF", void 0), __decorate([g(cc["Node"])], x["prototype"], "skipButtonNode", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "mediumWinBoardSprite", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "infoVfxA", void 0), __decorate([g(cc["Sprite"])], x["prototype"], "infoVfxD", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoVfxE", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoLv02VfxI", void 0), __decorate([g(cc["Node"])], x["prototype"], "smallWinMask", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoLv02vfxC", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "infoVfxASprite", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "infoVfxABonusSprite", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "infoVfxDSprite", void 0), __decorate([g(cc["SpriteFrame"])], x["prototype"], "infoVfxDBonusSprite", void 0), __decorate([g(cc["Node"])], x["prototype"], "infoVfxB", void 0), __decorate([q], x);
        }(cc["Component"]);
      I["default"] = K, cc["_RF"]["pop"]();
    }
  }
}
module.exports = InfoBoardController;
