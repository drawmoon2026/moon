// module: MJSpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJSpinButtonController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "fc305nPiU5MQIPHHh+18pG0", "MJSpinButtonController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SpinButtonController"),
      X = require("AudioManager"),
      Z = require("AudioConstant"),
      T = require("AutomationDecorator"),
      M = require("SpinButtonViewController.spec"),
      C = require("SlotAnalyticsEnum"),
      V = require("ButtonHitTest"),
      N = cc._decorator,
      q = N.ccclass,
      g = N.property,
      K = function (O) {
        function x() {
          var p = null !== O && O.apply(this, arguments) || this;
          return p.spinButtonHolder = undefined, p.spinAnim = undefined, p.arrowHolder = undefined, p.autoSpinHolder = undefined, p.autoSpinNumber = undefined, p.arrowSprite = undefined, p.spinBase = undefined, p.arrowSF = undefined, p.arrowBlurSF = undefined, p.arrowGreySF = undefined, p.arrowGreyBlurSF = undefined, p.spinBaseGreySF = undefined, p.spinBaseSF = undefined, p.buttonHoveredHolderNode = undefined, p.buttonHoveredGlowNode = undefined, p.buttonHoveredRelightNode = undefined, p.buttonHoveredRelightExpandNode = undefined, p.ci = undefined, p;
        }
        return __extends(x, O), Object.defineProperty(x.prototype, "numberDisplayController", {
          'get': function () {
            return this.ci || (this.ci = this.autoSpinNumber.getComponent("NumberDisplayController")), this.ci;
          },
          'enumerable': false,
          'configurable': true
        }), x.prototype.onInit = function () {
          this.hu({
            'spinButtonNode': this.node
          }), this.ru();
        }, x.prototype.onStopAllAnimations = function () {
          this.arrowHolder.stopAllActions(), this.arrowSprite.spriteFrame = this.arrowGreySF;
        }, x.prototype.onShowIdleAnimation = function () {
          this.arrowHolder.stopAllActions(), this.arrowSprite.spriteFrame = this.arrowSF, this.au(), this.arrowHolder.runAction(cc.repeatForever(cc.rotateBy(4, 360))), this.uu();
        }, x.prototype.onShowSpinAnimation = function (p) {
          undefined === p && (p = true), p && (this.lu(), X.playAudio(Z.GENERAL_AUDIO.spinBtn.key)), this.onHideMouseOverEffect(), this.fu(), this.arrowHolder.stopAllActions(), this.arrowSprite.spriteFrame = this.arrowBlurSF;
          var b = cc.sequence(cc.scaleTo(0.1, 1.35), cc.scaleTo(0.1, 1.5)),
            L = cc.rotateBy(0.3, 360).repeatForever();
          this.arrowHolder.runAction(b), this.arrowHolder.runAction(L);
        }, x.prototype.onReplaceSpinBlurredSpriteFrame = function () {
          this.arrowSprite.spriteFrame = this.arrowGreyBlurSF;
        }, x.prototype.onShowStopSpinningAnimation = function () {
          this.arrowHolder.stopAllActions(), this.arrowSprite.spriteFrame = this.arrowGreySF;
        }, x.prototype.onEnableButton = function () {
          this.du = true, this.onShowIdleAnimation(), this.vu(true);
        }, x.prototype.onDisableButton = function () {
          this.du = false, this.animationState === B.SpinButtonAnimationState.SPINNING ? this.onReplaceSpinBlurredSpriteFrame() : this.onShowStopSpinningAnimation(), this.vu(false);
        }, x.prototype.showAutoSpinLook = function (p) {
          var b = this;
          this.autoSpinHolder.active = true, this.autoSpinHolder.opacity = 0, this.autoSpinHolder.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
            O.prototype.showAutoSpinLook.call(b, p);
          }))), this.updateAutoSpinCount(p), this.du = true;
        }, x.prototype.onUpdateAutoSpinCount = function (p) {
          this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(p, true);
        }, x.prototype.onExitAutoSpinMode = function () {
          this.arrowHolder.active = true, this.spinButtonHolder.active = true, this.numberDisplayController.clear(), this._u();
        }, x.prototype.onResumeIdle = function () {
          this.arrowSprite.spriteFrame = this.arrowSF, this.arrowHolder.runAction(cc.repeatForever(cc.rotateBy(4, 360)));
        }, x.prototype.onResumeSpin = function () {
          this.onShowSpinAnimation(false), this.onReplaceSpinBlurredSpriteFrame();
        }, x.prototype.onResumeStop = function () {
          this.onShowStopSpinningAnimation();
        }, x.prototype.onPlayMouseOverEffect = function () {
          var p = this.buttonHoveredHolderNode;
          if (p.stopAllActions(), this.animationState === B.SpinButtonAnimationState.IDLE || this.mode === B.SpinButtonMode.AUTOSPIN) {
            var b = cc.callFunc(this.mu, this);
            p.runAction(b);
          }
        }, x.prototype.onHideMouseOverEffect = function () {
          var p = this.buttonHoveredGlowNode;
          this.buttonHoveredHolderNode.stopAllActions(), p.stopAllActions(), p.color = new cc.Color(0, 0, 0);
        }, x.prototype.mouseHovered = function (p) {
          this.du && this.mode !== B.SpinButtonMode.DISABLED && (this.isHover || this.bu(p) && O.prototype.mouseHovered.call(this, p));
        }, x.prototype.mouseLeave = function (p) {
          this.isHover && (this.bu(p) || O.prototype.mouseLeave.call(this, p));
        }, x.prototype.clickSpinButton = function (p) {
          if (undefined === p && (p = C.SpinTrigger.CLICK), this.mode !== B.SpinButtonMode.DISABLED && V.buttonHitTest(this.node)) {
            var b = this.clickCallback;
            b && b(p);
          }
        }, x.prototype._u = function () {
          var p = this;
          this.autoSpinHolder.stopAllActions(), this.autoSpinHolder.runAction(cc.sequence(cc.fadeOut(0.3), cc.callFunc(function () {
            p.autoSpinHolder.active = false;
          })));
        }, x.prototype.lu = function () {
          this.spinAnim.play();
        }, x.prototype.au = function () {
          this.spinBaseSF && (this.spinBase.spriteFrame = this.spinBaseSF);
        }, x.prototype.fu = function () {
          this.spinBaseGreySF && (this.spinBase.spriteFrame = this.spinBaseGreySF);
        }, x.prototype.mu = function () {
          var p = this.buttonHoveredGlowNode;
          p.setScale(2.36), p.runAction(cc.repeatForever(cc.spawn(cc.scaleTo(1, 3.5), cc.sequence(cc.tintTo(0.5, 255, 255, 255).easing(cc.easeIn(3)), cc.delayTime(0.2), cc.tintTo(0.45, 0, 0, 0).easing(cc.easeIn(3)), cc.delayTime(0.4), cc.scaleTo(0, 2.36)))));
        }, x.prototype.uu = function () {
          this.ci = undefined;
        }, x.prototype.hu = function () {}, x.prototype.vu = function () {}, x.prototype.bu = function (p) {
          var b = p.touch ? p.touch.getLocation() : p.getLocation(),
            L = this.node.convertToNodeSpaceAR(b),
            H = this.node.width / 2;
          return Math.sqrt(Math.pow(L.x, 2) + Math.pow(L.y, 2)) <= H;
        }, x.prototype.pu = function (p) {
          this.bu(p) && this.du && this.clickSpinButton();
        }, x.prototype.Su = function (p) {
          this.du && (this.bu(p) ? !this.isHover && O.prototype.mouseHovered.call(this, p) : this.isHover && O.prototype.mouseLeave.call(this, p));
        }, x.prototype.ru = function () {
          this.node.on(cc.Node.EventType.TOUCH_END, this.pu, this), this.node.on(cc.Node.EventType.MOUSE_MOVE, this.Su, this);
        }, __decorate([g(cc.Node)], x.prototype, "spinButtonHolder", undefined), __decorate([g(cc.Animation)], x.prototype, "spinAnim", undefined), __decorate([g(cc.Node)], x.prototype, "arrowHolder", undefined), __decorate([g(cc.Node)], x.prototype, "autoSpinHolder", undefined), __decorate([g(cc.Node)], x.prototype, "autoSpinNumber", undefined), __decorate([g(cc.Sprite)], x.prototype, "arrowSprite", undefined), __decorate([g(cc.Sprite)], x.prototype, "spinBase", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "arrowSF", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "arrowBlurSF", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "arrowGreySF", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "arrowGreyBlurSF", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "spinBaseGreySF", undefined), __decorate([g(cc.SpriteFrame)], x.prototype, "spinBaseSF", undefined), __decorate([g(cc.Node)], x.prototype, "buttonHoveredHolderNode", undefined), __decorate([g(cc.Node)], x.prototype, "buttonHoveredGlowNode", undefined), __decorate([g(cc.Node)], x.prototype, "buttonHoveredRelightNode", undefined), __decorate([g(cc.Node)], x.prototype, "buttonHoveredRelightExpandNode", undefined), __decorate([T.automationDec({
          'func': M.initSpinButtonNode
        })], x.prototype, "_initSpinButtonNodes", null), __decorate([T.automationDec({
          'func': M.setSpinButtonInteractivity
        })], x.prototype, "_setSpinButtonInteractive", null), __decorate([q], x);
      }(B.default);
    exports.default = K, cc._RF.pop();
  }
}
module.exports = MJSpinButtonController;
