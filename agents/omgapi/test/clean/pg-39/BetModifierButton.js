// module: BetModifierButton
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function BetModifierButton(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "076aehdcx9HQI7+9hg7FlGu", "BetModifierButton")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("GenericSettingButton"),
        C = require("Utils"),
        H = cc._decorator,
        V = H.ccclass,
        M = H.property,
        q = function (m) {
          function D() {
            {
              var W = null !== m && m.apply(this, arguments) || this;
              return W.buttonNode = undefined, W.isIncreaseBet = false, W;
            }
          }
          return __extends(D, m), D.prototype.setShowSettingToastCallback = function (W) {
            this.nt = W;
          }, Object.defineProperty(D.prototype, "showSettingToast", {
            'get': function () {
              if (!this.nt) throw Error("BetModifierButton :: showSettingToast is undefined. Please set it using setShowSettingToastCallback");
              return this.nt;
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.setHideSettingToastCallback = function (W) {
            this.ot = W;
          }, Object.defineProperty(D.prototype, "hideSettingToast", {
            'get': function () {
              {
                if (!this.ot) throw Error("BetModifierButton :: hideSettingToast is undefined. Please set it using setHideSettingToastCallback");
                return this.ot;
              }
            },
            'enumerable': false,
            'configurable': true
          }), D.prototype.increaseBet = function (W, k, z) {
            if (undefined === k) {
              for (var v = 0; v < L.length; v++) if (parseFloat(W[v]) > parseFloat(z)) {
                k = v - 1, z = W[v - 1];
                break;
              }
            } else if (k >= L.length - 1) return this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2), {
              'selectedBet': k,
              'selectedBetAmount': z
            };
            if (undefined === k) throw Error("BetModifierButton :: increaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
            return z = W[++k], k >= L.length - 1 ? this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2) : this.hideSettingToast(), {
              'selectedBet': k,
              'selectedBetAmount': z
            };
          }, D.prototype.decreaseBet = function (W, k, z) {
            {
              if (undefined === k) {
                for (var L = W.length - 1; L >= 0; L--) if (parseFloat(W[L]) < parseFloat(z)) {
                  k = L + 1, z = W[L + 1];
                  break;
                }
              } else if (k <= 0) return this.showSettingToast(shell.I18n.t("SettingMenu.SmallestBet"), 2), {
                'selectedBet': k,
                'selectedBetAmount': z
              };
              if (undefined === k) throw Error("BetModifierButton :: decreaseBet : selectedBet is undefined and cannot be located from selectedBetAmount ");
              return z = W[--k], k <= 0 ? this.showSettingToast(shell.I18n.t("SettingMenu.SmallestBet"), 2) : this.hideSettingToast(), {
                'selectedBet': k,
                'selectedBetAmount': z
              };
            }
          }, D.prototype.updateBetModifierColor = function (W, k) {
            this.isIncreaseBet ? this.isReachLimit = !!(k && W >= k) : this.isReachLimit = W <= 0, this.interactableButtonColor(this.isInteractable);
          }, D.prototype.changeButtonPressedColor = function (W) {
            {
              var k = this.buttonNode;
              var z = {};
              z.scale = W ? 0.9 : 1;
              cc.Tween.stopAllByTarget(k), cc.tween(k).to(0.1, z).start();
            }
          }, D.prototype.interactableButtonColor = function (W) {
            this.isReachLimit ? this.ct.spriteFrame = this.disableSpriteFrame : this.ct.spriteFrame = W ? this.normalSpriteFrame : this.disableSpriteFrame;
          }, D.prototype.maxBet = function (W) {
            {
              var k = W.length - 1,
                z = W[k];
              var L = {};
              L.selectedBet = k;
              L.selectedBetAmount = z;
              return this.showSettingToast(shell.I18n.t("SettingMenu.BiggestBet"), 2), L;
            }
          }, D.prototype.buttonActivate = function (W) {
            W ? (this.node.active = true, this.node.parent && (this.node.parent.active = true), C.deferCallback(this)(this.enableTouchInteraction)) : (this.disableTouchInteraction(), this.node.active = false, this.node.parent && (this.node.parent.active = false));
          }, __decorate([M(cc.Node)], D.prototype, "buttonNode", undefined), __decorate([M(cc.Boolean)], D.prototype, "isIncreaseBet", undefined), __decorate([V], D);
        }(x.default);
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = BetModifierButton;
