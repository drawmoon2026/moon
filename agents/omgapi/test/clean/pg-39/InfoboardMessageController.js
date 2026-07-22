// module: InfoboardMessageController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function InfoboardMessageController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "f962cm61b9P6rw9Yco9B/O4", "InfoboardMessageController")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x), exports.InfoboardMessageOrderState = undefined;
      var C,
        H,
        V = require("NumberDisplayController"),
        M = require("NumberRollController"),
        q = require("Utils"),
        m = require("AutomationDecorator"),
        D = require("InfoboardMessageController.spec");
      (function (v) {
        v[v.SEQUENCE = 0] = "SEQUENCE", v[v.RANDOM = 1] = "RANDOM";
      })(C = exports.InfoboardMessageOrderState || (exports.InfoboardMessageOrderState = {})), function (v) {
        v.Do = "_fntConfig";
      }(H || (H = {}));
      var W = cc._decorator,
        k = W.ccclass,
        z = W.property,
        L = function (v) {
          function b() {
            var X = null !== v && v.apply(this, arguments) || this;
            return X.maskNode = undefined, X.padding = 40, X.label = undefined, X.winLabelColor = new cc.Color(), X.winLabelOutlineColor = new cc.Color(), X.tipsLabelColor = new cc.Color(), X.tipsLabelOutlineColor = new cc.Color(), X.enableWinOutline = true, X.enableTipsOutline = true, X.spriteMessageNode = undefined, X.sprite = undefined, X.numberRollController = undefined, X.numberDisplayController = undefined, X.winText = undefined, X.totalText = undefined, X.winDisplayNode = undefined, X.Uo = undefined, X.Wo = [], X.Fo = [], X.xo = [], X.Vo = [], X.zo = undefined, X.Ko = undefined, X.qo = undefined, X.Jo = undefined, X.Yo = 4, X.Qo = 3, X.Xo = 4, X.Zo = 3, X.$o = 0, X.tc = 650, X.ic = 1, X.sc = C.RANDOM, X.ec = 0, X.nc = -1, X.oc = undefined, X;
          }
          var U = {};
          U.get = function () {
            return this.Ko;
          };
          U.enumerable = false;
          U.configurable = true;
          var Q = {};
          Q.tooltip = false;
          var w = {};
          w.tooltip = false;
          var P = {};
          P.tooltip = false;
          var R = {};
          R.tooltip = false;
          var T = {};
          T.tooltip = false;
          var Y = {};
          Y.tooltip = false;
          return __extends(b, v), Object.defineProperty(b.prototype, "willExpire", U), b.prototype.onLoad = function () {
            {
              if (shell.isRTLLanguage() && (this.ec = 1, this.nc = 1), this.winText) {
                var X = this.winText.node.parent,
                  E = this.oc = X.getComponent(cc.Layout);
                shell.isRTLLanguage() && (E.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT);
              }
            }
          }, b.prototype.initNumberDisplayNodeEvent = function () {
            this.ic = this.winDisplayNode.scale, this.winDisplayNode.on("size-changed", this.resizeNumberDisplay, this);
          }, b.prototype.setNumberDisplayNodeWidth = function (X) {
            {
              this.tc = X;
            }
          }, b.prototype.setEventMessage = function (X, E, F) {
            {
              undefined === E && (E = true), undefined === F && (F = false), this.zo || (F && (this.label.node.color = this.tipsLabelOutlineColor, this.label.node.getComponent(cc.LabelOutline).enabled = this.enableTipsOutline), this.zo = false, this.qo = true, this.Ko = E, this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), X instanceof cc.SpriteFrame ? this.setSpriteMessage(X) : "string" == typeof X && this.setLabel(X));
            }
          }, b.prototype.clear = function (X) {
            undefined === X && (X = false), (this.zo || this.qo || X || this.sc !== C.RANDOM) && (this.sprite ? (this.unschedule(this.playRandomSpriteTips), this.playRandomSpriteTips()) : this.label && (this.unschedule(this.playRandomTips), this.playRandomTips()));
          }, b.prototype.stop = function () {
            this.sprite && this.sprite.node.stopAllActions(), this.label && this.label.node.stopAllActions();
          }, b.prototype.setLocalizedSpriteFrame = function (X, E) {
            this.winText.spriteFrame = X, this.totalText.spriteFrame = E;
          }, b.prototype.setSprites = function (X) {
            {
              this.Fo = undefined, this.Fo = X, this.Vo = X.slice();
            }
          }, b.prototype.setOrderOfMessage = function (X) {
            undefined === X && (X = C.RANDOM), this.sc = X;
          }, b.prototype.setRandomSpriteScheduleTime = function (X, E) {
            undefined === X && (X = 4), undefined === E && (E = 3), this.Zo = E, this.Xo = X;
          }, b.prototype.playScheduleRandomSpriteTipsOverride = function () {
            var X = Math.floor(Math.random() * this.Zo) + this.Xo;
            this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, X);
          }, b.prototype.playScheduleRandomSpriteTips = function (X) {
            {
              undefined === X && (X = 0), this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, X);
            }
          }, b.prototype.unscheduleRandomSpriteTips = function () {
            this.unschedule(this.playRandomSpriteTips);
          }, b.prototype.setTotalAndWinText = function (X, E) {
            this.totalText.node.active = X, this.winText.node.active = E, this.winDisplayNode.opacity = 255, this.oc && this.oc.updateLayout();
          }, b.prototype.showInfoboardMessage = function () {
            var X = this.maskNode.getComponent(cc.Mask);
            X && (X.enabled = true), this.spriteMessageNode.active = true;
          }, b.prototype.hideInfoboardMessage = function () {
            {
              this.spriteMessageNode.active = false;
              var X = this.maskNode.getComponent(cc.Mask);
              X && (X.enabled = false);
            }
          }, b.prototype.showDisplayNumber = function (X, E) {
            undefined === E && (E = false), this.zo = true, this.winDisplayNode && this.winDisplayNode.setScale(this.ic), this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(X, E), this.oc && this.oc.updateLayout();
          }, b.prototype.clearDisplayNumber = function () {
            {
              this.numberDisplayController.clear();
            }
          }, b.prototype.showNumberRoll = function (X, E, F, N, Z) {
            {
              undefined === Z && (Z = true), this.qo = false, this.zo = true, this.Jo = N, this.winDisplayNode && this.winDisplayNode.setScale(this.ic), this.numberRollController.rollDuration = X, this.numberRollController.play(E, F, this.onNumberRollComplete.bind(this), Z);
            }
          }, b.prototype.skipNumberRoll = function () {
            this.numberRollController.skip(), this.onNumberRollComplete();
          }, b.prototype.clearNumberRoll = function () {
            this.numberRollController.stop();
          }, b.prototype.setSpriteMessage = function (X) {
            {
              var E = this,
                F = this.padding,
                N = this.sprite,
                Z = N.node;
              Z.stopAllActions(), N.spriteFrame = X;
              var p = this.maskNode.width;
              if (Z.width * Z.scaleY + 2 * F > p) {
                var g = this.nc;
                Z.setAnchorPoint(this.ec, Z.anchorY), Z.setPosition(cc.v2((p / 2 - F) * g, Z.y)), this.Uo = Z.position;
                var A = Z.width * Z.scaleY + 2 * F,
                  G = cc.delayTime(1.5),
                  J = cc.moveBy(A / 130, cc.v2(A * g, 0)),
                  S = undefined;
                S = this.Ko ? cc.sequence(G, J, cc.callFunc(this.playScheduleRandomSpriteTips, this)) : cc.sequence(G, J, cc.callFunc(function () {
                  Z.position = E.Uo;
                })).repeatForever(), Z.runAction(S);
              } else {
                if (Z.setAnchorPoint(0.5, Z.anchorY), Z.x = 0, !this.Ko) return;
                q.deferCallback(true)(this.playScheduleRandomSpriteTipsOverride.bind(this));
              }
            }
          }, b.prototype.playRandomSpriteTips = function () {
            this.zo = false, this.qo = false, this.Ko = true, 0 === this.Vo.length && (this.Vo = this.Fo.slice());
            var X = this.Vo;
            if (this.sc === C.RANDOM) {
              {
                var E = Math.floor(Math.random() * X.length);
                if (X.length > 1) for (; this.sprite.spriteFrame === X[E];) E = Math.floor(Math.random() * X.length);
                this.setSpriteMessage(X[E]), this.Vo.splice(E, 1);
              }
            } else this.sc === C.SEQUENCE && (this.setSpriteMessage(X[0]), this.Vo.splice(0, 1));
          }, b.prototype.resizeNumberDisplay = function () {
            var X = this.tc,
              E = this.winDisplayNode.width * this.ic,
              F = E - X;
            if (F > 0) {
              {
                var N = this.ic - F / E;
                this.winDisplayNode.scale = N;
              }
            }
          }, b.prototype.onNumberRollComplete = function () {
            var X = this.Jo;
            this.zo = false, this.Jo = undefined, X && X();
          }, b.prototype.initLabelNodeY = function () {
            this.$o = this.label.node.y;
          }, b.prototype.setTips = function (X) {
            {
              this.Wo = X, this.xo = X.slice();
            }
          }, b.prototype.setLocalizedFont = function (X) {
            {
              this.label.font = X;
            }
          }, b.prototype.setLabelFontHeight = function (X) {
            undefined === X && (X = 0);
            var E = this.label.font;
            E[H.Do] && (this.label.lineHeight = E[H.Do].commonHeight + X);
          }, b.prototype.setWinLabelColor = function (X) {
            this.winLabelColor = X;
          }, b.prototype.setWinLabelOutlineColor = function (X) {
            this.winLabelOutlineColor = X;
          }, b.prototype.setTipsLabelColor = function (X) {
            this.tipsLabelColor = X;
          }, b.prototype.setTipsLabelOutlineColor = function (X) {
            this.tipsLabelOutlineColor = X;
          }, b.prototype.setWinAmount = function (X, E, F) {
            if (undefined === E && (E = false), undefined === F && (F = false), X && X > 0) {
              this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), this.qo = false, this.zo = true, this.Ko = F;
              var N = this.label.node,
                Z = N.getComponent(cc.LabelOutline);
              N.color = this.winLabelColor, Z && (Z.color = this.winLabelOutlineColor, Z.enabled = this.enableWinOutline);
              var p = (E ? shell.I18n.t("InfoboardMessage.TotalWin") : shell.I18n.t("InfoboardMessage.Win")) + '\x20' + q.formatCurrency(X, '', '');
              this.setLabel(p);
            }
          }, b.prototype.setRandomLabelScheduleTime = function (X, E) {
            undefined === X && (X = 4), undefined === E && (E = 3), this.Qo = E, this.Yo = X;
          }, b.prototype.scheduleRandomTips = function () {
            {
              var X = Math.floor(Math.random() * this.Qo) + this.Yo;
              this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, X);
            }
          }, b.prototype.playScheduleRandomTips = function (X) {
            undefined === X && (X = 0), this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, X);
          }, b.prototype.unscheduleRandomTips = function () {
            this.unschedule(this.playRandomTips);
          }, b.prototype.playRandomTips = function () {
            {
              this.zo = false, this.qo = false, 1 !== this.Wo.length && (this.Ko = true), 0 === this.xo.length && (this.xo = this.Wo.slice());
              var X = this.xo,
                E = Math.floor(Math.random() * X.length),
                F = this.label.node;
              F.color = this.tipsLabelColor;
              var N = F.getComponent(cc.LabelOutline);
              N && (N.color = this.tipsLabelOutlineColor, N.enabled = this.enableTipsOutline), this.setLabel(X[E]), this.xo.splice(E, 1);
            }
          }, b.prototype.setLabel = function (X) {
            var E = this.label;
            E.string = X, E.node.y = 2 * this.maskNode.height, this.unschedule(this.determineOverFlow), this.scheduleOnce(this.determineOverFlow);
          }, b.prototype.determineOverFlow = function () {
            var X = this.label.node,
              E = this.padding;
            X.width + 2 * E > this.maskNode.width ? this.scrollLabel() : (X.stopAllActions(), X.setAnchorPoint(0.5, X.anchorY), X.x = 0, this.Ko && this.scheduleRandomTips()), X.y = this.$o;
          }, b.prototype.scrollLabel = function () {
            var X = this.label,
              E = this.padding,
              F = X.node,
              N = this.nc;
            F.stopAllActions(), F.setAnchorPoint(this.ec, F.anchorY), F.setPosition(cc.v2((this.maskNode.width / 2 - E) * N, F.y));
            var Z,
              p = F.width + 2 * E,
              g = cc.delayTime(1.5),
              A = cc.moveBy(p / 130, cc.v2(p * N, 0));
            Z = this.Ko ? cc.sequence(g, A, cc.callFunc(this.playScheduleRandomTips, this)) : cc.sequence(g, A, cc.callFunc(this.scrollLabel, this)), F.runAction(Z);
          }, b.prototype.cc = function () {
            {
              this.stop(), this.numberRollController.stop(), this.numberDisplayController.clear(), this.unschedule(this.scheduleRandomTips), this.unschedule(this.playRandomSpriteTips), this.unschedule(this.playRandomTips), this.padding = 40, this.tc = 650, this.$o = 0, this.sc = C.RANDOM, this.enableTipsOutline = true, this.enableWinOutline = true, this.zo = false, this.Wo = [], this.Fo = [], this.Vo = [], this.xo = undefined, this.Ko = undefined, this.qo = undefined, this.tipsLabelColor = undefined, this.tipsLabelOutlineColor = undefined, this.Jo = undefined;
            }
          }, b.prototype.destroy = function () {
            {
              return this.cc(), this.node.destroy(), v.prototype.destroy.call(this);
            }
          }, __decorate([z({
            'type': cc.Node,
            'tooltip': false
          })], b.prototype, "maskNode", undefined), __decorate([z({
            'type': cc.Float,
            'tooltip': false
          })], b.prototype, "padding", undefined), __decorate([z({
            'type': cc.Label,
            'tooltip': false
          })], b.prototype, "label", undefined), __decorate([z(Q)], b.prototype, "winLabelColor", undefined), __decorate([z(w)], b.prototype, "winLabelOutlineColor", undefined), __decorate([z(P)], b.prototype, "tipsLabelColor", undefined), __decorate([z(R)], b.prototype, "tipsLabelOutlineColor", undefined), __decorate([z(T)], b.prototype, "enableWinOutline", undefined), __decorate([z(Y)], b.prototype, "enableTipsOutline", undefined), __decorate([z({
            'type': cc.Node,
            'tooltip': false
          })], b.prototype, "spriteMessageNode", undefined), __decorate([z({
            'type': cc.Sprite,
            'tooltip': false
          })], b.prototype, "sprite", undefined), __decorate([z({
            'type': M.default,
            'tooltip': false
          })], b.prototype, "numberRollController", undefined), __decorate([z({
            'type': V.default,
            'tooltip': false
          })], b.prototype, "numberDisplayController", undefined), __decorate([z({
            'type': cc.Sprite,
            'tooltip': false
          })], b.prototype, "winText", undefined), __decorate([z({
            'type': cc.Sprite,
            'tooltip': false
          })], b.prototype, "totalText", undefined), __decorate([z({
            'type': cc.Node,
            'tooltip': false
          })], b.prototype, "winDisplayNode", undefined), __decorate([m.automationDec({
            'func': D.setTotalAndWinText
          })], b.prototype, "setTotalAndWinText", null), __decorate([m.automationDec({
            'func': D.setWinAmount
          })], b.prototype, "setWinAmount", null), __decorate([k], b);
        }(cc.Component);
      exports.default = L, cc._RF.pop();
    }
  }
}
module.exports = InfoboardMessageController;
