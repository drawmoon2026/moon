// module: PGSpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function PGSpinButtonController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "78f4e8xn2pEkbcTD0r/civR", "PGSpinButtonController")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x);
      var C = cc._decorator,
        H = C.ccclass,
        V = C.property,
        M = require("SpinButtonController"),
        q = require("AudioManager"),
        m = require("AutomationDecorator"),
        D = require("SpinButtonViewController.spec"),
        W = require("ButtonHitTest"),
        k = require("SlotAnalyticsEnum"),
        z = function (L) {
          function v() {
            var Q = null !== L && L.apply(this, arguments) || this;
            return Q.normalSpinHolder = undefined, Q.autoSpinNode = undefined, Q.mouseHoverNode = undefined, Q.spinEffectNode = undefined, Q.disabledBlurSpriteFrame = undefined, Q.normalArrowSpriteFrame = undefined, Q.blurArrowSpriteFrame = undefined, Q.disabledArrowSpriteFrame = undefined, Q.vu = undefined, Q._u = undefined, Q.pu = undefined, Q.bu = undefined, Q;
          }
          var b = {};
          b.func = D.initSpinButtonNode;
          var U = {};
          U.func = D.setSpinButtonInteractivity;
          return __extends(v, L), Object.defineProperty(v.prototype, "normalSpinController", {
            'get': function () {
              {
                return undefined === this.vu && (this.vu = this.normalSpinHolder.getComponent("NormalSpinButtonController")), this.vu;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(v.prototype, "autoSpinController", {
            'get': function () {
              return undefined === this._u && (this._u = this.autoSpinNode.getComponent("AutoSpinButtonController")), this._u;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(v.prototype, "mouseHoverController", {
            'get': function () {
              return undefined === this.pu && (this.pu = this.mouseHoverNode.getComponent("SpinButtonMouseHoverController")), this.pu;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(v.prototype, "spinEffectController", {
            'get': function () {
              {
                return undefined === this.bu && (this.bu = this.spinEffectNode.getComponent("SpinButtonEffectController")), this.bu;
              }
            },
            'enumerable': false,
            'configurable': true
          }), v.prototype.fastSpin = function () {
            this.mode !== M.SpinButtonMode.AUTOSPIN && (this.Zs = false, this.normalSpinController.setFastSpinLook());
          }, v.prototype.fastStop = function () {
            {
              this.mode !== M.SpinButtonMode.AUTOSPIN && (this.Zs = false, this.normalSpinController.setFastStopLook());
            }
          }, v.prototype.clickSpinButton = function (Q) {
            if (undefined === Q && (Q = k.SpinTrigger.CLICK), this.mode !== M.SpinButtonMode.DISABLED && W.buttonHitTest(this.node)) {
              var w = this.clickCallback;
              w && w(Q);
            }
          }, v.prototype.onStopAllAnimations = function () {
            this.normalSpinController.setStopLook(), this.mu();
          }, v.prototype.onInit = function () {
            {
              this.Su({
                'spinButton': this.node
              }), this.autoSpinController.hide(), this.normalSpinController.setSpriteFrame(this.normalArrowSpriteFrame, this.blurArrowSpriteFrame, this.disabledArrowSpriteFrame, this.disabledBlurSpriteFrame), this.normalSpinController.init(), this.onDisableButton(), this.gu(), this.enableMouseHover();
            }
          }, v.prototype.onShowIdleAnimation = function () {
            this.Zs = true, this.normalSpinController.show(false), this.normalSpinController.setIdleLook(), this.mouseHoverController.show();
          }, v.prototype.onShowSpinAnimation = function () {
            q.GeneralAudioPool.spin_btn.play(), this.normalSpinController.setSpinningLook(), this.spinEffectController.play(), this.mouseHoverController.hide();
          }, v.prototype.onShowStopSpinningAnimation = function () {
            this.Zs = false, this.normalSpinController.setStopLook();
          }, v.prototype.onEnableButton = function () {
            this.Zs = true, this.normalSpinController.setIdleLook(), this.Cu(true);
          }, v.prototype.onDisableButton = function () {
            this.Cu(false), this.Zs = false, this.animationState === M.SpinButtonAnimationState.SPINNING ? this.normalSpinController.setFastSpinLook() : this.normalSpinController.setStopLook();
          }, v.prototype.onReplaceSpinBlurredSpriteFrame = function () {
            {
              this.normalSpinController.setSpriteFrame(this.normalArrowSpriteFrame, this.blurArrowSpriteFrame, this.disabledArrowSpriteFrame, this.disabledBlurSpriteFrame);
            }
          }, v.prototype.showAutoSpinLook = function (Q) {
            {
              this.Zs = true, this.normalSpinController.hide(), this.autoSpinController.showAutoSpinMode(Q, this.yu.bind(this)), this.node.width = 260, L.prototype.showAutoSpinLook.call(this, Q);
            }
          }, v.prototype.onUpdateAutoSpinCount = function (Q) {
            this.autoSpinController.updateAutoSpinCount(Q);
          }, v.prototype.onExitAutoSpinMode = function () {
            this.normalSpinController.show(true), this.node.width = 230, this.autoSpinController.exitAutoSpinMode();
          }, v.prototype.onResumeIdle = function () {
            this.idle();
          }, v.prototype.onResumeSpin = function () {
            {
              this.fastSpin();
            }
          }, v.prototype.onResumeStop = function () {
            {
              this.stopSpin();
            }
          }, v.prototype.onPlayMouseOverEffect = function () {
            this.mouseHoverController.mouseHovered();
          }, v.prototype.onHideMouseOverEffect = function () {
            this.mouseHoverController.mouseLeave();
          }, v.prototype.yu = function () {
            var Q = this.Mu;
            this.Mu = undefined, Q && Q();
          }, v.prototype.wu = function (Q) {
            var w = Q.touch ? Q.touch.getLocation() : Q.getLocation(),
              P = this.node.convertToNodeSpaceAR(w),
              R = this.node.width / 2;
            return Math.sqrt(Math.pow(P.x, 2) + Math.pow(P.y, 2)) <= R;
          }, v.prototype.Au = function (Q) {
            {
              this.wu(Q) && this.Zs && this.clickSpinButton();
            }
          }, v.prototype.mouseHovered = function (Q) {
            {
              this.Zs && this.mode !== M.SpinButtonMode.DISABLED && (this.isHover || this.wu(Q) && L.prototype.mouseHovered.call(this, Q));
            }
          }, v.prototype.mouseLeave = function (Q) {
            this.isHover && (this.wu(Q) || L.prototype.mouseLeave.call(this, Q));
          }, v.prototype.Pu = function (Q) {
            this.Zs && (this.wu(Q) ? !this.isHover && L.prototype.mouseHovered.call(this, Q) : this.isHover && L.prototype.mouseLeave.call(this, Q));
          }, v.prototype.gu = function () {
            this.node.on(cc.Node.EventType.MOUSE_MOVE, this.Pu, this), this.node.on(cc.Node.EventType.TOUCH_END, this.Au, this);
          }, v.prototype.Su = function () {}, v.prototype.Cu = function () {}, __decorate([V(cc.Node)], v.prototype, "normalSpinHolder", undefined), __decorate([V(cc.Node)], v.prototype, "autoSpinNode", undefined), __decorate([V(cc.Node)], v.prototype, "mouseHoverNode", undefined), __decorate([V(cc.Node)], v.prototype, "spinEffectNode", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "disabledBlurSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "normalArrowSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "blurArrowSpriteFrame", undefined), __decorate([V(cc.SpriteFrame)], v.prototype, "disabledArrowSpriteFrame", undefined), __decorate([m.automationDec(b)], v.prototype, "_initSpinButtonNodes", null), __decorate([m.automationDec(U)], v.prototype, "_setSpinButtonInteractive", null), __decorate([H], v);
        }(M.default);
      exports.default = z, cc._RF.pop();
    }
  }
}
module.exports = PGSpinButtonController;
