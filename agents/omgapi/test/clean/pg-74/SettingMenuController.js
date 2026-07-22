// module: SettingMenuController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SettingMenuController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "fba916JMWpJiL2n5fnfp4nN", "SettingMenuController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["SettingMenuController"] = void 0;
    var B = F("CanvasResizeBroadcaster"),
      X = F("HitPassThrough"),
      Z = F("Utils"),
      T = F("UIAppearanceHelper"),
      M = F("BVFramework"),
      C = cc["_decorator"],
      V = C["ccclass"],
      N = C["property"],
      q = function (f) {
        function g() {
          var K = null !== f && f["apply"](this, arguments) || this;
          return K["blackTintBackground"] = void 0, K["dimBackground"] = void 0, K["subControllerHolder"] = void 0, K["menusLayerHolder"] = void 0, K["defaultMenuLayerNode"] = void 0, K["moreMenuLayerNode"] = void 0, K["subControllerBG"] = void 0, K["settingInfoFooterFrontHolder"] = void 0, K["settingInfoFooterMiddleBottomHolder"] = void 0, K["settingInfoFooterBottomHolder"] = void 0, K["walletButtonSensor"] = void 0, K["hitPassThroughComponent"] = void 0, K["settingToast"] = void 0, K["settingToastBg"] = void 0, K["settingToastLayout"] = void 0, K["settingToastLabel"] = void 0, K["settingTurboSprite"] = void 0, K["settingTurboOnSprite"] = void 0, K["settingTurboOffSprite"] = void 0, K["featureBuyToast"] = void 0, K["featureBuyToastBg"] = void 0, K["featureBuyToastLayout"] = void 0, K["featureBuyToastLabel"] = void 0, K["featureBuyTurboSprite"] = void 0, K["reminderBoard"] = void 0, K["originalBetAmountLabel"] = void 0, K["reminderBoardLabel"] = void 0, K["holders"] = [], K["muteIcon"] = void 0, K["settingMenuUIBlock"] = void 0, K['_v'] = !1, K['Mc'] = !0, K['Cc'] = !1, K['mv'] = [], K['Kc'] = [], K['bv'] = !1, K["FRONT_MAX_HOLDER"] = 4, K['pv'] = !1, K['Sv'] = !1, K['gv'] = 0.2, K['Cv'] = !1, K['Mv'] = 0, K['yv'] = !1, K;
        }
        return __extends(g, f), g["prototype"]["onLoad"] = function () {
          this["settingTurboSprite"]["node"]["color"] = T["uiAppearanceHelper"]['v']("setting.theme_color"), this["defaultMenuLayerNode"]['y'] = 0, this["settingToast"]["opacity"] = 0, this["featureBuyToast"]["opacity"] = 0, this["featureBuyToast"]["active"] = !1, this["moreMenuLayerNode"]['y'] = -this["defaultMenuLayerNode"]["height"], this["moreMenuLayerNode"]["opacity"] = 0, this["moreMenuLayerNode"]["active"] = !1, this["reminderBoard"]["active"] = !1, this["reminderBoard"]["opacity"] = 1, this["blackTintBackground"]["active"] = !1, this["settingMenuUIBlock"]["active"] = !1, this["subControllerHolder"]["height"] = this['pc'] = cc["view"]["getVisibleSize"]()["height"];
          var K = B["default"]["subscribe"](this['Ti']["bind"](this));
          this['Sc'] = "function" == typeof K ? K : void 0, this['wv'] = M["getGameContext"]();
        }, g["prototype"]['Ti'] = function () {
          var K = this,
            O = this['Bv'];
          this['Bv'] = void 0, O && O();
          var x = [];
          this['bv'] ? x["push"](function () {
            var p = cc["view"]["getVisibleSize"]()["height"],
              b = K['bc']();
            K["subControllerHolder"]["height"] = p - b, K["subControllerBG"]["height"] = p;
          }) : x["push"](function () {
            if (void 0 === K['pc']) throw Error("SettingMenuController :: _onSizeChanged : Please update holder height using updateSubControllerHolderHeight first!");
            var p = K['bc']();
            K["subControllerHolder"]["height"] = K['pc'], K["subControllerBG"]["height"] = K['pc'] + p;
          }), this['Bv'] = Z["sequenceCallback"](Z["delayCallback"](0))(function () {
            {
              K['Bv'] = void 0;
              for (var p = 0; p < x["length"]; p++) x[p]();
            }
          });
        }, g["prototype"]["onDestroy"] = function () {
          var K = this['Sc'];
          this['Sc'] = void 0, K && K();
        }, g["prototype"]["setBetChangeReminderLabel"] = function (K) {
          {
            this["reminderBoardLabel"]["string"] = K;
          }
        }, g["prototype"]["showBetReminderBoard"] = function (K) {
          this['Sv'] || (this['Sv'] = !0, this["reminderBoard"]["active"] = !0, this["reminderBoard"]["stopAllActions"](), this["reminderBoard"]["runAction"](cc["fadeIn"](0.2)), this["originalBetAmountLabel"]["string"] = K);
        }, g["prototype"]["hideBetReminderBoard"] = function () {
          {
            var K = this;
            this['Sv'] && (this['Sv'] = !1, this["reminderBoard"]["stopAllActions"](), this["reminderBoard"]["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
              K["reminderBoard"]["active"] = !1;
            }))));
          }
        }, g["prototype"]["isSettingBetReminderBoardShowed"] = function () {
          return this['Sv'];
        }, g["prototype"]["cancelToChangeBetAmount"] = function () {
          this['Av'] && this['Av']();
        }, g["prototype"]["confirmToChangeBetAmount"] = function () {
          this['Hv'] && this['Hv']();
        }, g["prototype"]["setBetReminderCancelAndConfirmCallback"] = function (K, O) {
          this['Av'] = K, this['Hv'] = O;
        }, g["prototype"]["showSettingTurboToast"] = function (K, O, x) {
          var p = this;
          void 0 === x && (x = 2);
          var b = this['Ov'];
          this['Ov'] = void 0, b && b(), this["settingToast"]["stopAllActions"](), b || (this["settingToast"]["opacity"] = 1), this["settingToastLabel"]["string"] = K, this["settingTurboSprite"]["node"]["active"] = !0, this["settingTurboSprite"]["spriteFrame"] = O ? this["settingTurboOnSprite"] : this["settingTurboOffSprite"], this["settingTurboSprite"]["node"]["stopAllActions"](), this["settingTurboSprite"]["node"]["opacity"] = 0, this['Ov'] = Z["delayCallback"](0)(function () {
            {
              p["settingToastBg"]["width"] = p["settingToastLabel"]["node"]["width"] + 48 + p["settingTurboSprite"]["node"]["width"], p["settingToastBg"]["height"] = p["settingToastLabel"]["node"]["height"] + 24, p["settingToast"]["opacity"] = 255, p["settingToast"]["runAction"](cc["sequence"](cc["scaleTo"](0.1, 1.2), cc["spawn"](cc["scaleTo"](0.1, 1), cc["sequence"](cc["delayTime"](0.05), cc["callFunc"](function () {
                {
                  p["settingTurboSprite"]["node"]["runAction"](cc["fadeTo"](0.05, 255));
                }
              }))), cc["delayTime"](x), cc["fadeOut"](0.3), cc["callFunc"](function () {
                p['Ov'] = void 0;
              })));
            }
          });
        }, g["prototype"]["showSettingToast"] = function (K, O) {
          {
            var x = this;
            void 0 === O && (O = 2);
            var p = this['Ov'];
            this['Ov'] = void 0, p && p(), this["settingToast"]["stopAllActions"](), this["settingTurboSprite"]["node"]["stopAllActions"](), this["settingTurboSprite"]["node"]["active"] = !1, this["settingTurboSprite"]["node"]["opacity"] = 0, p || (this["settingToast"]["opacity"] = 1), this["settingToastLabel"]["string"] = K, this['Ov'] = Z["delayCallback"](0)(function () {
              {
                x["settingToastBg"]["width"] = x["settingToastLabel"]["node"]["width"] + 48, x["settingToastBg"]["height"] = x["settingToastLabel"]["node"]["height"] + 24, x["settingToast"]["opacity"] = 255, x["settingToast"]["runAction"](cc["sequence"](cc["scaleTo"](0.1, 1.2), cc["scaleTo"](0.1, 1), cc["delayTime"](O), cc["fadeOut"](0.3), cc["callFunc"](function () {
                  x['Ov'] = void 0;
                })));
              }
            });
          }
        }, g["prototype"]["hideSettingToast"] = function () {
          var K = this,
            O = this['Ov'];
          this['Ov'] = void 0, O && O(), this["settingToast"]["stopAllActions"](), this["settingToast"]["runAction"](cc["sequence"](cc["fadeOut"](0.3), cc["callFunc"](function () {
            {
              K['Ov'] = void 0;
            }
          })));
        }, g["prototype"]["showFeatureBuyToast"] = function (K, O) {
          var x = this;
          void 0 === O && (O = 2);
          var p = this['Iv'];
          this['Iv'] = void 0, p && p(), this["featureBuyToast"]["active"] = !0, this["featureBuyToast"]["stopAllActions"](), this["featureBuyTurboSprite"]["node"]["stopAllActions"](), this["featureBuyTurboSprite"]["node"]["active"] = !1, this["featureBuyTurboSprite"]["node"]["opacity"] = 0, p || (this["featureBuyToast"]["opacity"] = 1), this["featureBuyToastLabel"]["string"] = K, this['Iv'] = Z["delayCallback"](0)(function () {
            x["featureBuyToastBg"]["width"] = x["featureBuyToastLabel"]["node"]["width"] + 20, x["featureBuyToastBg"]["height"] = x["featureBuyToastLabel"]["node"]["height"] + 48, x["featureBuyToast"]["opacity"] = 255, x["featureBuyToast"]["runAction"](cc["sequence"](cc["scaleTo"](0.1, 1.2), cc["scaleTo"](0.1, 1), cc["delayTime"](O), cc["fadeOut"](0.3), cc["callFunc"](function () {
              x['Iv'] = void 0;
            })));
          });
        }, g["prototype"]["hideFeatureBuyToast"] = function () {
          var K = this,
            O = this['Iv'];
          this['Iv'] = void 0, O && O(), this["featureBuyToast"]["stopAllActions"](), this["featureBuyToast"]["runAction"](cc["sequence"](cc["fadeOut"](0.3), cc["callFunc"](function () {
            K['Iv'] = void 0;
          })));
        }, g["prototype"]["setFeatureBuyToastNodePosition"] = function (K, O, x) {
          {
            this["featureBuyToast"]["setPosition"](K, O, x);
          }
        }, g["prototype"]["buttonsHolder"] = function () {
          return this["holders"];
        }, g["prototype"]["addMenuItem"] = function (K) {
          return this["holders"][this['mv']["length"]]["addChild"](K), this['mv']["push"](K), this['yc'](), this["holders"][this['mv']["length"] - 1];
        }, g["prototype"]["addEmptyItem"] = function () {
          return this['mv']["push"](null), this['yc'](), this["holders"][this['mv']["length"] - 1];
        }, g["prototype"]["replaceMenuItems"] = function (K) {
          {
            this['mv']["length"] = 0;
            for (var O = 0, x = K["length"]; O < x; O++) this['mv']["push"](K[O]);
            this['yc']();
          }
        }, g["prototype"]['yc'] = function () {
          this['Kc']["length"] = 0;
          for (var K = 0, O = this['mv']["length"]; K < O; K++) if (this['Mc']) {
            {
              if (K >= this["FRONT_MAX_HOLDER"]) break;
              this['Kc']["push"](this['mv'][K]);
            }
          } else K >= this["FRONT_MAX_HOLDER"] && this['Kc']["push"](this['mv'][K]);
        }, g["prototype"]["isItemVisible"] = function (K) {
          {
            return -1 !== this['Kc']["indexOf"](K);
          }
        }, g["prototype"]["visibleItems"] = function () {
          return this['Kc']["slice"]();
        }, g["prototype"]["getTotalItems"] = function () {
          return this['mv']["slice"]();
        }, g["prototype"]["isIdle"] = function () {
          return !this['_v'] && this['Mc'];
        }, g["prototype"]["isShowingDefaultMenu"] = function () {
          return this['Mc'];
        }, g["prototype"]["setHitPassThroughPosAndSize"] = function (K, O, x, p) {
          var b = this["walletButtonSensor"]["convertToNodeSpaceAR"](cc['v2'](K, O));
          this["hitPassThroughComponent"]["passPoint"] = cc['v2'](b['x'], b['y']), this["hitPassThroughComponent"]["passSize"] = cc["size"](x, p);
        }, g["prototype"]["setHidden"] = function (K) {
          this["node"]["active"] = !K;
        }, g["prototype"]["getSettingInfoFooterFrontHolder"] = function () {
          {
            return this["settingInfoFooterFrontHolder"];
          }
        }, g["prototype"]["getSettingInfoFooterBottomHolder"] = function () {
          return this["settingInfoFooterBottomHolder"];
        }, g["prototype"]["getSettingInfoFooterMiddleBottomHolder"] = function () {
          {
            return this["settingInfoFooterMiddleBottomHolder"];
          }
        }, g["prototype"]["setMenusLayerHolderOffsetPosition"] = function (K, O) {
          {
            var x = this["menusLayerHolder"];
            x["setPosition"](x['x'] + K, x['y'] + O);
          }
        }, g["prototype"]["isSwitchingMenuLayer"] = function () {
          return this['Cc'];
        }, g["prototype"]["showMoreMenuLayer"] = function (K) {
          var O = this;
          if (void 0 === K && (K = !1), !this['Cc']) {
            {
              this['Cc'] = !0, this['Mc'] = !1, this['yc'](), this["defaultMenuLayerNode"]["runAction"](cc["sequence"](cc["spawn"](cc["moveTo"](0.2, 0, -this["defaultMenuLayerNode"]["height"])["easing"](cc["easeQuadraticActionOut"]()), cc["fadeOut"](0.2)), cc["callFunc"](function () {
                O["defaultMenuLayerNode"]["active"] = !1, O['Cc'] = !1, O["onMenuEndChanged"] && O["onMenuEndChanged"]();
              }))), this["moreMenuLayerNode"]["active"] = !0, this["moreMenuLayerNode"]["runAction"](cc["spawn"](cc["moveTo"](0.2, 0, 0)["easing"](cc["easeQuadraticActionOut"]()), cc["fadeIn"](0.2)["easing"](cc["easeQuadraticActionOut"]()))), K && (this["blackTintBackground"]["active"] = !0, this["blackTintBackground"]["runAction"](cc["fadeTo"](0.2, 127.5)));
              var x = this["onMenuStartChanged"];
              x && x(!0, !0);
            }
          }
        }, g["prototype"]["hideMoreMenuLayer"] = function () {
          var K = this;
          if (!this['Cc']) {
            this['Cc'] = !0, this['Mc'] = !0, this['yc'](), this["defaultMenuLayerNode"]["active"] = !0, this["defaultMenuLayerNode"]["runAction"](cc["sequence"](cc["spawn"](cc["moveTo"](0.2, 0, 0)["easing"](cc["easeQuadraticActionOut"]()), cc["fadeIn"](0.2)), cc["callFunc"](function () {
              K['Cc'] = !1, K["onMenuEndChanged"] && K["onMenuEndChanged"]();
            }))), this["moreMenuLayerNode"]["runAction"](cc["sequence"](cc["spawn"](cc["moveTo"](0.2, 0, -this["defaultMenuLayerNode"]["height"])["easing"](cc["easeQuadraticActionOut"]()), cc["fadeOut"](0.2)["easing"](cc["easeQuadraticActionOut"]())), cc["callFunc"](function () {
              K["moreMenuLayerNode"]["active"] = !1;
            }))), !0 === this["blackTintBackground"]["active"] && this["blackTintBackground"]["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
              K["blackTintBackground"]["active"] = !1;
            })));
            var O = this["onMenuStartChanged"];
            O && O(!1, !0);
          }
        }, g["prototype"]["isControllerPresenting"] = function () {
          return this['_v'];
        }, g["prototype"]["setIsControllerPresenting"] = function (K) {
          this['_v'] = K;
        }, g["prototype"]["setSubControllerHolderMoveDuration"] = function (K) {
          {
            this['gv'] = K;
          }
        }, g["prototype"]['bc'] = function () {
          return this["node"]["parent"]["convertToWorldSpaceAR"](cc['v2'](this["node"]['x'], this["node"]['y']))['y'];
        }, g["prototype"]["getGapBetweenBottomScreenValue"] = function () {
          return this['bc']();
        }, g["prototype"]["updateSubControllerHolderHeight"] = function (K) {
          this["subControllerHolder"]["height"] = this['pc'] = K;
        }, g["prototype"]["isPanelTouchMoving"] = function () {
          return this['pv'];
        }, g["prototype"]["startMovePanel"] = function (K, O) {
          this['_v'] || (this['pv'] = !1, this['Cv'] = !1, this["subControllerHolder"]["height"] = O, this["subControllerHolder"]['y'] = -O, this['Mv'] = K, this["subControllerBG"]["height"] = this['bc']() + O);
        }, g["prototype"]["movePanel"] = function (K) {
          {
            if (!this['_v']) {
              this['pv'] = !0;
              var O = this["subControllerHolder"],
                x = this["subControllerHolder"]["height"],
                p = O["parent"]["convertToNodeSpaceAR"](cc['v2'](0, K))['y'],
                b = Math["abs"](this['Mv'] - K);
              this['Cv'] ? (O['y'] = p - x, O['y'] >= 0 && (O['y'] = 0)) : b > 60 ? K > this['Mv'] && (this['Cv'] = !0, this["subControllerBG"]["opacity"] = 255, this['Tv'] && this['Tv']()) : O['y'] = p - x;
            }
          }
        }, g["prototype"]["closePanel"] = function () {
          var K = this;
          if (!this['_v']) {
            this['_v'] = !0;
            var O = this["subControllerHolder"]["height"] + this['bc']();
            this["subControllerHolder"]["runAction"](cc["sequence"](cc["moveTo"](this['gv'], 0, -O), cc["callFunc"](function () {
              {
                K['_v'] = !1, K['pv'] = !1, K["subControllerBG"]["opacity"] = 0;
              }
            })));
          }
        }, g["prototype"]["getCurrentPanelTopPositionY"] = function () {
          {
            var K = this["subControllerHolder"];
            return K['y'] + K["height"];
          }
        }, g["prototype"]["setWalletButtonLock"] = function (K) {
          void 0 === K && (K = !1), this['yv'] = K;
        }, g["prototype"]["interactableWalletButton"] = function (K, O) {
          {
            !1 === this['yv'] && !K && O && this["closePanel"]();
          }
        }, g["prototype"]["setMenuUIBlock"] = function (K) {
          this["settingMenuUIBlock"]["active"] = K;
        }, g["prototype"]["updateLayout"] = function (K) {
          K && (this["settingToastLayout"]["horizontalDirection"] = cc["Layout"]["HorizontalDirection"]["RIGHT_TO_LEFT"]);
        }, __decorate([N(cc["Node"])], g["prototype"], "blackTintBackground", void 0), __decorate([N(cc["Node"])], g["prototype"], "dimBackground", void 0), __decorate([N(cc["Node"])], g["prototype"], "subControllerHolder", void 0), __decorate([N(cc["Node"])], g["prototype"], "menusLayerHolder", void 0), __decorate([N(cc["Node"])], g["prototype"], "defaultMenuLayerNode", void 0), __decorate([N(cc["Node"])], g["prototype"], "moreMenuLayerNode", void 0), __decorate([N(cc["Node"])], g["prototype"], "subControllerBG", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingInfoFooterFrontHolder", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingInfoFooterMiddleBottomHolder", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingInfoFooterBottomHolder", void 0), __decorate([N(cc["Node"])], g["prototype"], "walletButtonSensor", void 0), __decorate([N(X["default"])], g["prototype"], "hitPassThroughComponent", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingToast", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingToastBg", void 0), __decorate([N(cc["Layout"])], g["prototype"], "settingToastLayout", void 0), __decorate([N(cc["Label"])], g["prototype"], "settingToastLabel", void 0), __decorate([N(cc["Sprite"])], g["prototype"], "settingTurboSprite", void 0), __decorate([N(cc["SpriteFrame"])], g["prototype"], "settingTurboOnSprite", void 0), __decorate([N(cc["SpriteFrame"])], g["prototype"], "settingTurboOffSprite", void 0), __decorate([N(cc["Node"])], g["prototype"], "featureBuyToast", void 0), __decorate([N(cc["Node"])], g["prototype"], "featureBuyToastBg", void 0), __decorate([N(cc["Layout"])], g["prototype"], "featureBuyToastLayout", void 0), __decorate([N(cc["RichText"])], g["prototype"], "featureBuyToastLabel", void 0), __decorate([N(cc["Sprite"])], g["prototype"], "featureBuyTurboSprite", void 0), __decorate([N(cc["Node"])], g["prototype"], "reminderBoard", void 0), __decorate([N(cc["Label"])], g["prototype"], "originalBetAmountLabel", void 0), __decorate([N(cc["Label"])], g["prototype"], "reminderBoardLabel", void 0), __decorate([N([cc["Node"]])], g["prototype"], "holders", void 0), __decorate([N(cc["Node"])], g["prototype"], "muteIcon", void 0), __decorate([N(cc["Node"])], g["prototype"], "settingMenuUIBlock", void 0), __decorate([V], g);
      }(cc["Component"]);
    I["SettingMenuController"] = q, cc["_RF"]["pop"]();
  }
}
module.exports = SettingMenuController;
