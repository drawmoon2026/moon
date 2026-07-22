// module: InfoboardMessageController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function InfoboardMessageController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "f962cm61b9P6rw9Yco9B/O4", "InfoboardMessageController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.InfoboardMessageOrderState = undefined;
    var B,
      X,
      Z = require("NumberDisplayController"),
      T = require("NumberRollController"),
      M = require("Utils"),
      C = require("AutomationDecorator"),
      V = require("InfoboardMessageController.spec");
    (function (O) {
      O[O.SEQUENCE = 0] = "SEQUENCE", O[O.RANDOM = 1] = "RANDOM";
    })(B = exports.InfoboardMessageOrderState || (exports.InfoboardMessageOrderState = {})), function (O) {
      O.Ro = "_fntConfig";
    }(X || (X = {}));
    var N = cc._decorator,
      q = N.ccclass,
      g = N.property,
      K = function (O) {
        function k() {
          var Y = null !== O && O.apply(this, arguments) || this;
          return Y.maskNode = undefined, Y.padding = 40, Y.label = undefined, Y.winLabelColor = new cc.Color(), Y.winLabelOutlineColor = new cc.Color(), Y.tipsLabelColor = new cc.Color(), Y.tipsLabelOutlineColor = new cc.Color(), Y.enableWinOutline = true, Y.enableTipsOutline = true, Y.spriteMessageNode = undefined, Y.sprite = undefined, Y.numberRollController = undefined, Y.numberDisplayController = undefined, Y.winText = undefined, Y.totalText = undefined, Y.winDisplayNode = undefined, Y.jo = undefined, Y.Lo = [], Y.Po = [], Y.Do = [], Y.Uo = [], Y.xo = undefined, Y.Fo = undefined, Y.Wo = undefined, Y.Jo = undefined, Y.Vo = 4, Y.zo = 3, Y.Ko = 4, Y.qo = 3, Y.Qo = 0, Y.Yo = 650, Y.Zo = 1, Y.Xo = B.RANDOM, Y.$o = 0, Y.tc = -1, Y.ic = undefined, Y;
        }
        var x = {};
        x.tooltip = false;
        var p = {};
        p.tooltip = false;
        var b = {};
        b.tooltip = false;
        var L = {};
        L.tooltip = false;
        var H = {};
        H.tooltip = false;
        var U = {};
        U.tooltip = false;
        return __extends(k, O), Object.defineProperty(k.prototype, "willExpire", {
          'get': function () {
            return this.Fo;
          },
          'enumerable': false,
          'configurable': true
        }), k.prototype.onLoad = function () {
          if (shell.isRTLLanguage() && (this.$o = 1, this.tc = 1), this.winText) {
            var Y = this.winText.node.parent,
              y = this.ic = Y.getComponent(cc.Layout);
            shell.isRTLLanguage() && (y.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT);
          }
        }, k.prototype.initNumberDisplayNodeEvent = function () {
          this.Zo = this.winDisplayNode.scale, this.winDisplayNode.on("size-changed", this.resizeNumberDisplay, this);
        }, k.prototype.setNumberDisplayNodeWidth = function (Y) {
          this.Yo = Y;
        }, k.prototype.setEventMessage = function (Y, y, z) {
          undefined === y && (y = true), undefined === z && (z = false), this.xo || (z && (this.label.node.color = this.tipsLabelOutlineColor, this.label.node.getComponent(cc.LabelOutline).enabled = this.enableTipsOutline), this.xo = false, this.Wo = true, this.Fo = y, this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), Y instanceof cc.SpriteFrame ? this.setSpriteMessage(Y) : "string" == typeof Y && this.setLabel(Y));
        }, k.prototype.clear = function (Y) {
          undefined === Y && (Y = false), (this.xo || this.Wo || Y || this.Xo !== B.RANDOM) && (this.sprite ? (this.unschedule(this.playRandomSpriteTips), this.playRandomSpriteTips()) : this.label && (this.unschedule(this.playRandomTips), this.playRandomTips()));
        }, k.prototype.stop = function () {
          this.sprite && this.sprite.node.stopAllActions(), this.label && this.label.node.stopAllActions();
        }, k.prototype.setLocalizedSpriteFrame = function (Y, y) {
          this.winText.spriteFrame = Y, this.totalText.spriteFrame = y;
        }, k.prototype.setSprites = function (Y) {
          this.Po = undefined, this.Po = Y, this.Uo = Y.slice();
        }, k.prototype.setOrderOfMessage = function (Y) {
          undefined === Y && (Y = B.RANDOM), this.Xo = Y;
        }, k.prototype.setRandomSpriteScheduleTime = function (Y, y) {
          undefined === Y && (Y = 4), undefined === y && (y = 3), this.qo = y, this.Ko = Y;
        }, k.prototype.playScheduleRandomSpriteTipsOverride = function () {
          var Y = Math.floor(Math.random() * this.qo) + this.Ko;
          this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, Y);
        }, k.prototype.playScheduleRandomSpriteTips = function (Y) {
          undefined === Y && (Y = 0), this.unschedule(this.playRandomSpriteTips), this.scheduleOnce(this.playRandomSpriteTips, Y);
        }, k.prototype.unscheduleRandomSpriteTips = function () {
          this.unschedule(this.playRandomSpriteTips);
        }, k.prototype.setTotalAndWinText = function (Y, y) {
          this.totalText.node.active = Y, this.winText.node.active = y, this.winDisplayNode.opacity = 255, this.ic && this.ic.updateLayout();
        }, k.prototype.showInfoboardMessage = function () {
          var Y = this.maskNode.getComponent(cc.Mask);
          Y && (Y.enabled = true), this.spriteMessageNode.active = true;
        }, k.prototype.hideInfoboardMessage = function () {
          this.spriteMessageNode.active = false;
          var Y = this.maskNode.getComponent(cc.Mask);
          Y && (Y.enabled = false);
        }, k.prototype.showDisplayNumber = function (Y, y) {
          undefined === y && (y = false), this.xo = true, this.winDisplayNode && this.winDisplayNode.setScale(this.Zo), this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(Y, y), this.ic && this.ic.updateLayout();
        }, k.prototype.clearDisplayNumber = function () {
          this.numberDisplayController.clear();
        }, k.prototype.showNumberRoll = function (Y, y, z, S, P) {
          undefined === P && (P = true), this.Wo = false, this.xo = true, this.Jo = S, this.winDisplayNode && this.winDisplayNode.setScale(this.Zo), this.numberRollController.rollDuration = Y, this.numberRollController.play(y, z, this.onNumberRollComplete.bind(this), P);
        }, k.prototype.skipNumberRoll = function () {
          this.numberRollController.skip(), this.onNumberRollComplete();
        }, k.prototype.clearNumberRoll = function () {
          this.numberRollController.stop();
        }, k.prototype.setSpriteMessage = function (Y) {
          var y = this,
            z = this.padding,
            S = this.sprite,
            P = S.node;
          P.stopAllActions(), S.spriteFrame = Y;
          var G = this.maskNode.width;
          if (P.width * P.scaleY + 2 * z > G) {
            var v = this.tc;
            P.setAnchorPoint(this.$o, P.anchorY), P.setPosition(cc.v2((G / 2 - z) * v, P.y)), this.jo = P.position;
            var A = P.width * P.scaleY + 2 * z,
              w = cc.delayTime(1.5),
              W = cc.moveBy(A / 130, cc.v2(A * v, 0)),
              D = undefined;
            D = this.Fo ? cc.sequence(w, W, cc.callFunc(this.playScheduleRandomSpriteTips, this)) : cc.sequence(w, W, cc.callFunc(function () {
              P.position = y.jo;
            })).repeatForever(), P.runAction(D);
          } else {
            if (P.setAnchorPoint(0.5, P.anchorY), P.x = 0, !this.Fo) return;
            M.deferCallback(true)(this.playScheduleRandomSpriteTipsOverride.bind(this));
          }
        }, k.prototype.playRandomSpriteTips = function () {
          this.xo = false, this.Wo = false, this.Fo = true, 0 === this.Uo.length && (this.Uo = this.Po.slice());
          var Y = this.Uo;
          if (this.Xo === B.RANDOM) {
            var y = Math.floor(Math.random() * Y.length);
            if (Y.length > 1) for (; this.sprite.spriteFrame === Y[y];) y = Math.floor(Math.random() * Y.length);
            this.setSpriteMessage(Y[y]), this.Uo.splice(y, 1);
          } else this.Xo === B.SEQUENCE && (this.setSpriteMessage(Y[0]), this.Uo.splice(0, 1));
        }, k.prototype.resizeNumberDisplay = function () {
          var Y = this.Yo,
            y = this.winDisplayNode.width * this.Zo,
            z = y - Y;
          if (z > 0) {
            var S = this.Zo - z / y;
            this.winDisplayNode.scale = S;
          }
        }, k.prototype.onNumberRollComplete = function () {
          var Y = this.Jo;
          this.xo = false, this.Jo = undefined, Y && Y();
        }, k.prototype.initLabelNodeY = function () {
          this.Qo = this.label.node.y;
        }, k.prototype.setTips = function (Y) {
          this.Lo = Y, this.Do = Y.slice();
        }, k.prototype.setLocalizedFont = function (Y) {
          this.label.font = Y;
        }, k.prototype.setLabelFontHeight = function (Y) {
          undefined === Y && (Y = 0);
          var y = this.label.font;
          y[X.Ro] && (this.label.lineHeight = y[X.Ro].commonHeight + Y);
        }, k.prototype.setWinLabelColor = function (Y) {
          this.winLabelColor = Y;
        }, k.prototype.setWinLabelOutlineColor = function (Y) {
          this.winLabelOutlineColor = Y;
        }, k.prototype.setTipsLabelColor = function (Y) {
          this.tipsLabelColor = Y;
        }, k.prototype.setTipsLabelOutlineColor = function (Y) {
          this.tipsLabelOutlineColor = Y;
        }, k.prototype.setWinAmount = function (Y, y, z) {
          if (undefined === y && (y = false), undefined === z && (z = false), Y && Y > 0) {
            this.unschedule(this.playRandomTips), this.unschedule(this.playRandomSpriteTips), this.Wo = false, this.xo = true, this.Fo = z;
            var S = this.label.node,
              P = S.getComponent(cc.LabelOutline);
            S.color = this.winLabelColor, P && (P.color = this.winLabelOutlineColor, P.enabled = this.enableWinOutline);
            var G = (y ? shell.I18n.t("InfoboardMessage.TotalWin") : shell.I18n.t("InfoboardMessage.Win")) + '\x20' + M.formatCurrency(Y, '', '');
            this.setLabel(G);
          }
        }, k.prototype.setRandomLabelScheduleTime = function (Y, y) {
          undefined === Y && (Y = 4), undefined === y && (y = 3), this.zo = y, this.Vo = Y;
        }, k.prototype.scheduleRandomTips = function () {
          var Y = Math.floor(Math.random() * this.zo) + this.Vo;
          this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, Y);
        }, k.prototype.playScheduleRandomTips = function (Y) {
          undefined === Y && (Y = 0), this.unschedule(this.playRandomTips), this.scheduleOnce(this.playRandomTips, Y);
        }, k.prototype.unscheduleRandomTips = function () {
          this.unschedule(this.playRandomTips);
        }, k.prototype.playRandomTips = function () {
          this.xo = false, this.Wo = false, 1 !== this.Lo.length && (this.Fo = true), 0 === this.Do.length && (this.Do = this.Lo.slice());
          var Y = this.Do,
            y = Math.floor(Math.random() * Y.length),
            z = this.label.node;
          z.color = this.tipsLabelColor;
          var S = z.getComponent(cc.LabelOutline);
          S && (S.color = this.tipsLabelOutlineColor, S.enabled = this.enableTipsOutline), this.setLabel(Y[y]), this.Do.splice(y, 1);
        }, k.prototype.setLabel = function (Y) {
          var y = this.label;
          y.string = Y, y.node.y = 2 * this.maskNode.height, this.unschedule(this.determineOverFlow), this.scheduleOnce(this.determineOverFlow);
        }, k.prototype.determineOverFlow = function () {
          var Y = this.label.node,
            y = this.padding;
          Y.width + 2 * y > this.maskNode.width ? this.scrollLabel() : (Y.stopAllActions(), Y.setAnchorPoint(0.5, Y.anchorY), Y.x = 0, this.Fo && this.scheduleRandomTips()), Y.y = this.Qo;
        }, k.prototype.scrollLabel = function () {
          var Y = this.label,
            y = this.padding,
            z = Y.node,
            S = this.tc;
          z.stopAllActions(), z.setAnchorPoint(this.$o, z.anchorY), z.setPosition(cc.v2((this.maskNode.width / 2 - y) * S, z.y));
          var P,
            G = z.width + 2 * y,
            v = cc.delayTime(1.5),
            A = cc.moveBy(G / 130, cc.v2(G * S, 0));
          P = this.Fo ? cc.sequence(v, A, cc.callFunc(this.playScheduleRandomTips, this)) : cc.sequence(v, A, cc.callFunc(this.scrollLabel, this)), z.runAction(P);
        }, k.prototype.Zt = function () {
          this.stop(), this.numberRollController.stop(), this.numberDisplayController.clear(), this.unschedule(this.scheduleRandomTips), this.unschedule(this.playRandomSpriteTips), this.unschedule(this.playRandomTips), this.padding = 40, this.Yo = 650, this.Qo = 0, this.Xo = B.RANDOM, this.enableTipsOutline = true, this.enableWinOutline = true, this.xo = false, this.Lo = [], this.Po = [], this.Uo = [], this.Do = undefined, this.Fo = undefined, this.Wo = undefined, this.tipsLabelColor = undefined, this.tipsLabelOutlineColor = undefined, this.Jo = undefined;
        }, k.prototype.destroy = function () {
          return this.Zt(), this.node.destroy(), O.prototype.destroy.call(this);
        }, __decorate([g({
          'type': cc.Node,
          'tooltip': false
        })], k.prototype, "maskNode", undefined), __decorate([g({
          'type': cc.Float,
          'tooltip': false
        })], k.prototype, "padding", undefined), __decorate([g({
          'type': cc.Label,
          'tooltip': false
        })], k.prototype, "label", undefined), __decorate([g(x)], k.prototype, "winLabelColor", undefined), __decorate([g(p)], k.prototype, "winLabelOutlineColor", undefined), __decorate([g(b)], k.prototype, "tipsLabelColor", undefined), __decorate([g(L)], k.prototype, "tipsLabelOutlineColor", undefined), __decorate([g(H)], k.prototype, "enableWinOutline", undefined), __decorate([g(U)], k.prototype, "enableTipsOutline", undefined), __decorate([g({
          'type': cc.Node,
          'tooltip': false
        })], k.prototype, "spriteMessageNode", undefined), __decorate([g({
          'type': cc.Sprite,
          'tooltip': false
        })], k.prototype, "sprite", undefined), __decorate([g({
          'type': T.default,
          'tooltip': false
        })], k.prototype, "numberRollController", undefined), __decorate([g({
          'type': Z.default,
          'tooltip': false
        })], k.prototype, "numberDisplayController", undefined), __decorate([g({
          'type': cc.Sprite,
          'tooltip': false
        })], k.prototype, "winText", undefined), __decorate([g({
          'type': cc.Sprite,
          'tooltip': false
        })], k.prototype, "totalText", undefined), __decorate([g({
          'type': cc.Node,
          'tooltip': false
        })], k.prototype, "winDisplayNode", undefined), __decorate([C.automationDec({
          'func': V.setTotalAndWinText
        })], k.prototype, "setTotalAndWinText", null), __decorate([C.automationDec({
          'func': V.setWinAmount
        })], k.prototype, "setWinAmount", null), __decorate([q], k);
      }(cc.Component);
    exports.default = K, cc._RF.pop();
  }
}
module.exports = InfoboardMessageController;
