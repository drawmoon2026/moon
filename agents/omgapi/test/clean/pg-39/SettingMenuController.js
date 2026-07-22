// module: SettingMenuController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SettingMenuController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "fba916JMWpJiL2n5fnfp4nN", "SettingMenuController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.SettingMenuController = undefined;
    var x = require("CanvasResizeBroadcaster"),
      C = require("HitPassThrough"),
      H = require("Utils"),
      V = require("BVFramework"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.property,
      D = function (W) {
        function k() {
          var z = null !== W && W.apply(this, arguments) || this;
          return z.blackTintBackground = undefined, z.dimBackground = undefined, z.subControllerHolder = undefined, z.menusLayerHolder = undefined, z.defaultMenuLayerNode = undefined, z.subControllerBG = undefined, z.settingInfoFooterFrontHolder = undefined, z.settingInfoFooterMiddleBottomHolder = undefined, z.settingInfoFooterBottomHolder = undefined, z.walletButtonSensor = undefined, z.hitPassThroughComponent = undefined, z.settingToast = undefined, z.settingToastBg = undefined, z.settingToastLabel = undefined, z.settingTurboSprite = undefined, z.settingTurboOnSprite = undefined, z.settingTurboOffSprite = undefined, z.featureBuyToast = undefined, z.featureBuyToastBg = undefined, z.featureBuyToastLayout = undefined, z.featureBuyToastLabel = undefined, z.featureBuyTurboSprite = undefined, z.reminderBoard = undefined, z.originalBetAmountLabel = undefined, z.reminderBoardLabel = undefined, z.holders = [], z.settingMenuUIBlock = undefined, z.ld = false, z.fd = true, z.dd = [], z.Cc = [], z.vd = false, z.FRONT_MAX_HOLDER = 4, z._d = false, z.pd = false, z.bd = 0.2, z.md = false, z.Sd = 0, z.gd = false, z;
        }
        return __extends(k, W), k.prototype.onLoad = function () {
          this.defaultMenuLayerNode.y = 0, this.settingToast.opacity = 0, this.featureBuyToast.opacity = 0, this.featureBuyToast.active = false, this.reminderBoard.active = false, this.reminderBoard.opacity = 1, this.blackTintBackground.active = false, this.settingMenuUIBlock.active = false, this.subControllerHolder.height = this.Cd = cc.view.getVisibleSize().height;
          var z = x.default.subscribe(this.gi.bind(this));
          this.yd = "function" == typeof z ? z : undefined, this.Md = V.getGameContext();
        }, k.prototype.gi = function () {
          var z = this,
            L = this.wd;
          this.wd = undefined, L && L();
          var v = [];
          this.vd ? v.push(function () {
            var b = cc.view.getVisibleSize().height,
              U = z.Ad();
            z.subControllerHolder.height = b - U, z.subControllerBG.height = b;
          }) : v.push(function () {
            if (undefined === z.Cd) throw Error("SettingMenuController :: _onSizeChanged : Please update holder height using updateSubControllerHolderHeight first!");
            var b = z.Ad();
            z.subControllerHolder.height = z.Cd, z.subControllerBG.height = z.Cd + b;
          }), this.wd = H.sequenceCallback(H.delayCallback(0))(function () {
            {
              z.wd = undefined;
              for (var b = 0; b < v.length; b++) v[b]();
            }
          });
        }, k.prototype.onDestroy = function () {
          var z = this.yd;
          this.yd = undefined, z && z();
        }, k.prototype.setBetChangeReminderLabel = function (z) {
          this.reminderBoardLabel.string = z;
        }, k.prototype.showBetReminderBoard = function (z) {
          var L = {};
          L.opacity = 255;
          this.pd || (this.pd = true, this.reminderBoard.active = true, cc.Tween.stopAllByTarget(this.reminderBoard), cc.tween(this.reminderBoard).to(0.2, L).start(), this.originalBetAmountLabel.string = z);
        }, k.prototype.hideBetReminderBoard = function () {
          {
            var z = this;
            var L = {};
            L.opacity = 0;
            this.pd && (this.pd = false, cc.Tween.stopAllByTarget(this.reminderBoard), cc.tween(this.reminderBoard).to(0.2, L).call(function () {
              z.reminderBoard.active = false;
            }).start());
          }
        }, k.prototype.isSettingBetReminderBoardShowed = function () {
          {
            return this.pd;
          }
        }, k.prototype.cancelToChangeBetAmount = function () {
          this.Pd && this.Pd();
        }, k.prototype.confirmToChangeBetAmount = function () {
          this.Bd && this.Bd();
        }, k.prototype.setBetReminderCancelAndConfirmCallback = function (z, L) {
          {
            this.Pd = z, this.Bd = L;
          }
        }, k.prototype.showSettingTurboToast = function (z, L, v) {
          var b = this;
          undefined === v && (v = 2);
          var U = this.Od;
          this.Od = undefined, U && U(), cc.Tween.stopAllByTarget(this.settingToast), U || (this.settingToast.opacity = 1), this.settingToastLabel.string = z, this.Od = H.delayCallback(0)(function () {
            var Q = {};
            Q.scale = 1.2;
            var w = {};
            w.scale = 1;
            var P = {};
            P.opacity = 0;
            b.settingToastBg.width = b.settingToastLabel.node.width + 96, b.settingToastBg.height = b.settingToastLabel.node.height + 18, b.settingToast.opacity = 255, cc.tween(b.settingToast).to(0.1, Q).to(0.1, w).delay(v).to(0.3, P).call(function () {
              {
                b.Od = undefined;
              }
            }).start();
          });
        }, k.prototype.showSettingToast = function (z, L) {
          var v = this;
          undefined === L && (L = 2);
          var b = this.Od;
          this.Od = undefined, b && b(), cc.Tween.stopAllByTarget(this.settingToast), b || (this.settingToast.opacity = 1), this.settingToastLabel.string = z, this.Od = H.delayCallback(0)(function () {
            {
              var U = {};
              U.scale = 1.2;
              var Q = {};
              Q.scale = 1;
              var w = {};
              w.opacity = 0;
              v.settingToastBg.width = v.settingToastLabel.node.width + 96, v.settingToastBg.height = v.settingToastLabel.node.height + 18, v.settingToast.opacity = 255, cc.tween(v.settingToast).to(0.1, U).to(0.1, Q).delay(L).to(0.3, w).call(function () {
                v.Od = undefined;
              }).start();
            }
          });
        }, k.prototype.hideSettingToast = function () {
          {
            var z = this,
              L = this.Od;
            var v = {};
            v.opacity = 0;
            this.Od = undefined, L && L(), cc.Tween.stopAllByTarget(this.settingToast), cc.tween(this.settingToast).to(0.3, v).call(function () {
              z.Od = undefined;
            }).start();
          }
        }, k.prototype.showFeatureBuyToast = function (z, L) {
          {
            var v = this;
            undefined === L && (L = 2);
            var b = this.Id;
            this.Id = undefined, b && b(), this.featureBuyToast.active = true, cc.Tween.stopAllByTarget(this.featureBuyToast), cc.Tween.stopAllByTarget(this.featureBuyTurboSprite.node), this.featureBuyTurboSprite.node.active = false, this.featureBuyTurboSprite.node.opacity = 0, b || (this.featureBuyToast.opacity = 1), this.featureBuyToastLabel.string = z, this.Id = H.delayCallback(0)(function () {
              var U = {};
              U.scale = 1.2;
              var Q = {};
              Q.scale = 1;
              var w = {};
              w.opacity = 0;
              v.featureBuyToastBg.width = v.featureBuyToastLabel.node.width - 50, v.featureBuyToastBg.height = v.featureBuyToastLabel.node.height + 40, v.featureBuyToast.opacity = 255, cc.tween(v.featureBuyToast).to(0.1, U).to(0.1, Q).delay(L).to(0.3, w).call(function () {
                v.Id = undefined;
              }).start();
            });
          }
        }, k.prototype.hideFeatureBuyToast = function () {
          var z = this,
            L = this.Id;
          var v = {};
          v.opacity = 0;
          this.Id = undefined, L && L(), cc.Tween.stopAllByTarget(this.featureBuyToast), cc.tween(this.featureBuyToast).to(0.3, v).call(function () {
            z.Id = undefined;
          }).start();
        }, k.prototype.setFeatureBuyToastNodePosition = function (z, L, v) {
          this.featureBuyToast.setPosition(z, L, v);
        }, k.prototype.buttonsHolder = function () {
          {
            return this.holders;
          }
        }, k.prototype.addMenuItem = function (z) {
          {
            return this.holders[this.dd.length].addChild(z), this.dd.push(z), this.Gd(), this.holders[this.dd.length - 1];
          }
        }, k.prototype.replaceMenuItems = function (z) {
          this.dd.length = 0;
          for (var L = 0, v = z.length; L < v; L++) this.dd.push(z[L]);
          this.Gd();
        }, k.prototype.Gd = function () {
          this.Cc.length = 0;
          for (var z = 0, L = this.dd.length; z < L; z++) if (this.fd) {
            if (z >= this.FRONT_MAX_HOLDER) break;
            this.Cc.push(this.dd[z]);
          } else z >= this.FRONT_MAX_HOLDER && this.Cc.push(this.dd[z]);
        }, k.prototype.isItemVisible = function (z) {
          return -1 !== this.Cc.indexOf(z);
        }, k.prototype.visibleItems = function () {
          return this.Cc.slice();
        }, k.prototype.getTotalItems = function () {
          return this.dd.slice();
        }, k.prototype.isIdle = function () {
          return !this.ld && this.fd;
        }, k.prototype.isShowingDefaultMenu = function () {
          {
            return this.fd;
          }
        }, k.prototype.setHitPassThroughPosAndSize = function (z, L, v, b) {
          var U = this.walletButtonSensor.convertToNodeSpaceAR(cc.v2(z, L));
          this.hitPassThroughComponent.passPoint = cc.v2(U.x, U.y), this.hitPassThroughComponent.passSize = cc.size(v, b);
        }, k.prototype.setHidden = function (z) {
          this.node.active = !z;
        }, k.prototype.getSettingInfoFooterFrontHolder = function () {
          return this.settingInfoFooterFrontHolder;
        }, k.prototype.getSettingInfoFooterBottomHolder = function () {
          return this.settingInfoFooterBottomHolder;
        }, k.prototype.getSettingInfoFooterMiddleBottomHolder = function () {
          return this.settingInfoFooterMiddleBottomHolder;
        }, k.prototype.setMenusLayerHolderOffsetPosition = function (z, L) {
          var v = this.menusLayerHolder;
          v.setPosition(v.x + z, v.y + L);
        }, k.prototype.setSubControllerHolderMoveDuration = function (z) {
          {
            this.bd = z;
          }
        }, k.prototype.Ad = function () {
          return this.node.parent.convertToWorldSpaceAR(cc.v2(this.node.x, this.node.y)).y;
        }, k.prototype.getGapBetweenBottomScreenValue = function () {
          {
            return this.Ad();
          }
        }, k.prototype.updateSubControllerHolderHeight = function (z) {
          this.subControllerHolder.height = this.Cd = z;
        }, k.prototype.isPanelTouchMoving = function () {
          return this._d;
        }, k.prototype.startMovePanel = function (z, L) {
          this.ld || (this._d = false, this.md = false, this.subControllerHolder.height = L, this.subControllerHolder.y = -L, this.Sd = z, this.subControllerBG.height = this.Ad() + L);
        }, k.prototype.movePanel = function (z) {
          if (!this.ld) {
            {
              this._d = true;
              var L = this.subControllerHolder,
                v = this.subControllerHolder.height,
                b = L.parent.convertToNodeSpaceAR(cc.v2(0, z)).y,
                U = Math.abs(this.Sd - z);
              this.md ? (L.y = b - v, L.y >= 0 && (L.y = 0)) : U > 60 ? z > this.Sd && (this.md = true, this.subControllerBG.opacity = 255, this.Nd && this.Nd()) : L.y = b - v;
            }
          }
        }, k.prototype.closePanel = function () {
          {
            var z = this;
            if (!this.ld) {
              this.ld = true;
              var L = this.subControllerHolder.height + this.Ad();
              cc.tween(this.subControllerHolder).to(this.bd, {
                'position': cc.v3(0, -L, 0)
              }).call(function () {
                {
                  z.ld = false, z._d = false, z.subControllerBG.opacity = 0;
                }
              }).start();
            }
          }
        }, k.prototype.getCurrentPanelTopPositionY = function () {
          var z = this.subControllerHolder;
          return z.y + z.height;
        }, k.prototype.setWalletButtonLock = function (z) {
          undefined === z && (z = false), this.gd = z;
        }, k.prototype.interactableWalletButton = function (z, L) {
          false === this.gd && !z && L && this.closePanel();
        }, k.prototype.setMenuUIBlock = function (z) {
          {
            this.settingMenuUIBlock.active = z;
          }
        }, __decorate([m(cc.Node)], k.prototype, "blackTintBackground", undefined), __decorate([m(cc.Node)], k.prototype, "dimBackground", undefined), __decorate([m(cc.Node)], k.prototype, "subControllerHolder", undefined), __decorate([m(cc.Node)], k.prototype, "menusLayerHolder", undefined), __decorate([m(cc.Node)], k.prototype, "defaultMenuLayerNode", undefined), __decorate([m(cc.Node)], k.prototype, "subControllerBG", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterFrontHolder", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterMiddleBottomHolder", undefined), __decorate([m(cc.Node)], k.prototype, "settingInfoFooterBottomHolder", undefined), __decorate([m(cc.Node)], k.prototype, "walletButtonSensor", undefined), __decorate([m(C.default)], k.prototype, "hitPassThroughComponent", undefined), __decorate([m(cc.Node)], k.prototype, "settingToast", undefined), __decorate([m(cc.Node)], k.prototype, "settingToastBg", undefined), __decorate([m(cc.Label)], k.prototype, "settingToastLabel", undefined), __decorate([m(cc.Sprite)], k.prototype, "settingTurboSprite", undefined), __decorate([m(cc.SpriteFrame)], k.prototype, "settingTurboOnSprite", undefined), __decorate([m(cc.SpriteFrame)], k.prototype, "settingTurboOffSprite", undefined), __decorate([m(cc.Node)], k.prototype, "featureBuyToast", undefined), __decorate([m(cc.Node)], k.prototype, "featureBuyToastBg", undefined), __decorate([m(cc.Layout)], k.prototype, "featureBuyToastLayout", undefined), __decorate([m(cc.RichText)], k.prototype, "featureBuyToastLabel", undefined), __decorate([m(cc.Sprite)], k.prototype, "featureBuyTurboSprite", undefined), __decorate([m(cc.Node)], k.prototype, "reminderBoard", undefined), __decorate([m(cc.Label)], k.prototype, "originalBetAmountLabel", undefined), __decorate([m(cc.Label)], k.prototype, "reminderBoardLabel", undefined), __decorate([m([cc.Node])], k.prototype, "holders", undefined), __decorate([m(cc.Node)], k.prototype, "settingMenuUIBlock", undefined), __decorate([q("SettingMenuController")], k);
      }(cc.Component);
    exports.SettingMenuController = D, cc._RF.pop();
  }
}
module.exports = SettingMenuController;
