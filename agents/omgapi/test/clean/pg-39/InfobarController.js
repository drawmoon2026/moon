// module: InfobarController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function InfobarController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "08edf/peCxFwrtPjYdXRHTM", "InfobarController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C,
      H = require("CanvasResizeBroadcaster"),
      V = require("AutomationDecorator"),
      M = require("AudioManager"),
      q = require("InfobarController.spec"),
      m = require("GameRegionUtils");
    (function (L) {
      L[L.WIN = 0] = "WIN", L[L.NORMAL_TIPS = 1] = "NORMAL_TIPS";
    })(C || (C = {}));
    var D = cc._decorator,
      W = D.ccclass,
      k = D.property,
      z = function (L) {
        function v() {
          var U = null !== L && L.apply(this, arguments) || this;
          return U.infoBar = undefined, U.infoBarNode = undefined, U.infoBarMaskNode = undefined, U.normalMessageNode = undefined, U.winMessageNode = undefined, U.barFlare = undefined, U.secondBarShine = undefined, U.shineNode = undefined, U.barBackGlow = undefined, U.barFrontGlow = undefined, U.winAmountNode = undefined, U.winTextSprite = undefined, U.widgets = [], U.bo = [], U.mo = undefined, U.So = undefined, U.Co = undefined, U.yo = undefined, U.Mo = undefined, U.wo = undefined, U;
        }
        var b = {};
        b.func = q.showWinEvent;
        return __extends(v, L), Object.defineProperty(v.prototype, "infoBoardTipsController", {
          'get': function () {
            {
              return this.So || (this.So = this.normalMessageNode.getComponent("InfoboardMessageController")), this.So;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(v.prototype, "numberDisplayController", {
          'get': function () {
            {
              return this.Co || (this.Co = this.winAmountNode.getComponent("NumberDisplayController")), this.Co;
            }
          },
          'enumerable': false,
          'configurable': true
        }), v.prototype.init = function () {
          {
            this.Mo = H.default.subscribe(this.Ao.bind(this)), this.Ao();
          }
        }, v.prototype.setWinSF = function (U) {
          {
            this.mo = U;
          }
        }, v.prototype.setInfoTipsFont = function (U) {
          {
            this.normalMessageNode.getComponent(cc.Label).font = U;
          }
        }, v.prototype.runShine = function () {
          this.infoBarMaskNode.active = true, this.Po();
          var U = this.infoBarNode.width / 2 + this.shineNode.width / 2;
          this.shineNode.x = -U, this.shineNode.stopAllActions(), this.shineNode.runAction(cc.sequence(cc.callFunc(this.Bo, this), cc.moveTo(0.2, cc.v2(U, 0)).easing(cc.easeIn(1)), cc.callFunc(this.backToNormalBar, this)));
        }, v.prototype.setTips = function (U) {
          U && (this.bo = U);
        }, v.prototype.displayNormalTip = function () {
          this.wo !== C.NORMAL_TIPS && (this.wo = C.NORMAL_TIPS, this.normalMessageNode.active = true, this.winMessageNode.active = false, this.infoBoardTipsController.setSprites(this.bo), this.infoBoardTipsController.showInfoboardMessage(), this.infoBoardTipsController.clear(true));
        }, v.prototype.showWin = function (U, Q) {
          {
            m.checkUKGCRegion(U) && (this.wo = C.WIN, M.GeneralAudioPool.prize_win.play(), this.yo = Q, this.normalMessageNode.active = false, this.winMessageNode.active = true, this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(U), this.winTextSprite.spriteFrame = this.mo, this.Oo());
          }
        }, v.prototype.show = function () {
          this.node.runAction(cc.fadeIn(0.2));
        }, v.prototype.hide = function () {
          {
            this.node.runAction(cc.fadeOut(0.2));
          }
        }, v.prototype.backToNormalBar = function () {
          M.GeneralAudioPool.prize_win_end.play(), this.infoBar.runAction(cc.sequence(cc.scaleTo(0.1, 1.2), cc.scaleTo(0.1, 1), cc.callFunc(this.Io, this)));
        }, v.prototype.Oo = function () {
          this.Go(), this.runShine();
        }, v.prototype.Bo = function () {
          this.No(), this.To(), this.Ho(), this.Ro();
        }, v.prototype.Ho = function () {
          this.infoBar.stopAllActions(), this.infoBar.runAction(cc.sequence(cc.scaleTo(0.1, 1), cc.scaleTo(0.1, 1.15)));
        }, v.prototype.Ro = function () {
          {
            this.normalMessageNode.runAction(cc.sequence(cc.scaleTo(0.2, 1.1).easing(cc.easeBackOut()), cc.scaleTo(0.2, 1).easing(cc.easeBackIn())));
          }
        }, v.prototype.No = function () {
          this.ko(), this.Lo();
        }, v.prototype.ko = function () {
          this.barBackGlow.active = true;
          var U = cc.spawn(cc.scaleTo(0.2, 1.05, 1).easing(cc.easeOut(1)), cc.fadeOut(0.2)),
            Q = cc.scaleTo(0.1, 0.95, 1.2),
            w = cc.sequence(Q, U);
          this.barBackGlow.stopAllActions(), this.barBackGlow.opacity = 255, this.barBackGlow.setScale(cc.v2(0, 0)), this.barBackGlow.runAction(w);
        }, v.prototype.Lo = function () {
          {
            this.barFrontGlow.active = true;
            var U = cc.spawn(cc.scaleTo(0.2, 1.01, 1.01).easing(cc.easeOut(1)), cc.fadeOut(0.2)),
              Q = cc.fadeIn(0.1),
              w = cc.sequence(Q, U);
            this.barFrontGlow.stopAllActions(), this.barFrontGlow.opacity = 0, this.barFrontGlow.setScale(cc.v2(1, 1)), this.barFrontGlow.runAction(w);
          }
        }, v.prototype.Po = function () {
          this.shineNode.active = true, this.secondBarShine.x = -5, this.secondBarShine.runAction(cc.sequence(cc.moveTo(0.6, cc.v2(15, this.secondBarShine.position.y)).easing(cc.easeSineInOut()), cc.moveTo(0.8, cc.v2(-25, this.secondBarShine.position.y)).easing(cc.easeSineInOut())));
        }, v.prototype.To = function () {
          {
            this.barFlare.active = true, this.barFlare.stopAllActions(), this.barFlare.setScale(cc.v2(0, 0)), this.barFlare.runAction(cc.sequence(cc.scaleTo(0.2, 7, 2), cc.scaleTo(0.1, 0)));
          }
        }, v.prototype.Ao = function () {
          this.widgets.forEach(function (U) {
            U.updateAlignment();
          });
        }, v.prototype.Io = function () {
          this.Eo();
          var U = this.yo;
          this.yo = undefined, U && U();
        }, v.prototype.Go = function () {
          this.infoBar.stopAllActions(), this.normalMessageNode.stopAllActions(), this.node.stopAllActions(), this.barFlare.stopAllActions(), this.barBackGlow.stopAllActions(), this.barFrontGlow.stopAllActions(), this.shineNode.stopAllActions();
        }, v.prototype.Eo = function () {
          this.barFlare.active = false, this.barBackGlow.active = false, this.barFrontGlow.active = false, this.shineNode.active = false, this.infoBarMaskNode.active = false;
        }, v.prototype.jo = function () {
          this.yo = undefined, this.bo.length = 0, this.wo = undefined;
        }, v.prototype.destroy = function () {
          {
            var U = this.Mo;
            return this.Mo = undefined, U && U(), this.jo(), this.Go(), this.node.destroy(), L.prototype.destroy.call(this);
          }
        }, __decorate([k(cc.Node)], v.prototype, "infoBar", undefined), __decorate([k(cc.Node)], v.prototype, "infoBarNode", undefined), __decorate([k(cc.Node)], v.prototype, "infoBarMaskNode", undefined), __decorate([k(cc.Node)], v.prototype, "normalMessageNode", undefined), __decorate([k(cc.Node)], v.prototype, "winMessageNode", undefined), __decorate([k(cc.Node)], v.prototype, "barFlare", undefined), __decorate([k(cc.Node)], v.prototype, "secondBarShine", undefined), __decorate([k(cc.Node)], v.prototype, "shineNode", undefined), __decorate([k(cc.Node)], v.prototype, "barBackGlow", undefined), __decorate([k(cc.Node)], v.prototype, "barFrontGlow", undefined), __decorate([k(cc.Node)], v.prototype, "winAmountNode", undefined), __decorate([k(cc.Sprite)], v.prototype, "winTextSprite", undefined), __decorate([k(cc.Widget)], v.prototype, "widgets", undefined), __decorate([V.automationDec(b)], v.prototype, "showWin", null), __decorate([W], v);
      }(cc.Component);
    exports.default = z, cc._RF.pop();
  }
}
module.exports = InfobarController;
