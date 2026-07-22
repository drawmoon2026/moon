// module: SpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SpinButtonController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "43d12n8a1BInJvBu7QtjALE", "SpinButtonController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.SpinButtonMode = exports.SpinButtonAnimationState = undefined;
    var B,
      X,
      Z = require("SettingMenuHelper"),
      T = require("ButtonHitTest"),
      M = require("SlotAnalyticsEnum"),
      C = cc._decorator.ccclass;
    (function (N) {
      N[N.IDLE = 1] = "IDLE", N[N.SPINNING = 2] = "SPINNING", N[N.STOPPED = 3] = "STOPPED";
    })(B = exports.SpinButtonAnimationState || (exports.SpinButtonAnimationState = {})), function (N) {
      N[N.ENABLED = 0] = "ENABLED", N[N.DISABLED = 1] = "DISABLED", N[N.AUTOSPIN = 2] = "AUTOSPIN";
    }(X = exports.SpinButtonMode || (exports.SpinButtonMode = {}));
    var V = function (N) {
      function q() {
        var f = null !== N && N.apply(this, arguments) || this;
        return f.Jp = X.DISABLED, f.Vp = B.STOPPED, f.zp = false, f.Kp = undefined, f.qp = undefined, f;
      }
      return __extends(q, N), Object.defineProperty(q.prototype, "clickCallback", {
        'get': function () {
          return this.qp;
        },
        'set': function (f) {
          this.qp = f;
        },
        'enumerable': false,
        'configurable': true
      }), q.prototype.showAutoSpinLook = function () {
        this.Kp && this.Kp();
      }, Object.defineProperty(q.prototype, "mode", {
        'get': function () {
          return this.Jp;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(q.prototype, "isHover", {
        'get': function () {
          return this.zp;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(q.prototype, "isHovered", {
        'get': function () {
          return this.zp;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(q.prototype, "animationState", {
        'get': function () {
          return this.Vp;
        },
        'enumerable': false,
        'configurable': true
      }), q.prototype.setOnClickCallback = function (f) {
        this.qp = f;
      }, q.prototype.clearOnClickCallback = function () {
        this.qp = undefined;
      }, q.prototype.destroy = function () {
        return this.qp = undefined, this.Kp = undefined, this.Qp(), this.node.destroy(), N.prototype.destroy.call(this);
      }, q.prototype.Qp = function () {
        this.disableMouseHover(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onStopAllAnimations && this.onStopAllAnimations();
      }, q.prototype.init = function () {
        this.enableMouseHover(), this.onDisableButton(), this.onInit && this.onInit();
      }, q.prototype.idle = function () {
        this.Vp = B.IDLE, this.Jp !== X.AUTOSPIN && (this.onShowIdleAnimation && this.onShowIdleAnimation(), this.zp && this.Yp());
      }, q.prototype.spin = function () {
        this.Vp = B.SPINNING, this.Jp !== X.AUTOSPIN && (this.Jp !== X.DISABLED && this.onReplaceSpinBlurredSpriteFrame && this.onReplaceSpinBlurredSpriteFrame(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onShowSpinAnimation && this.onShowSpinAnimation());
      }, q.prototype.stopSpin = function () {
        this.Vp = B.STOPPED, this.Jp !== X.AUTOSPIN && this.onShowStopSpinningAnimation && this.onShowStopSpinningAnimation();
      }, q.prototype.enableButton = function () {
        this.Jp === X.DISABLED && (this.Jp = X.ENABLED, this.onEnableButton && this.onEnableButton());
      }, q.prototype.disableButton = function () {
        this.Jp === X.ENABLED && (this.Jp = X.DISABLED, this.onDisableButton && this.onDisableButton());
      }, q.prototype.show = function () {
        this.node.active = true;
      }, q.prototype.hide = function () {
        this.node.active = false;
      }, q.prototype.isAutoSpin = function () {
        return this.Jp === X.AUTOSPIN;
      }, q.prototype.enterAutoSpinMode = function (f, g) {
        this.Vp === B.IDLE && f > 0 && (this.Jp = X.AUTOSPIN, this.Kp = g, this.showAutoSpinLook(f));
      }, q.prototype.updateAutoSpinCount = function (f) {
        this.Jp === X.AUTOSPIN && this.onUpdateAutoSpinCount && this.onUpdateAutoSpinCount(f);
      }, q.prototype.exitAutoSpinMode = function () {
        if (this.Jp === X.AUTOSPIN) {
          switch (this.Jp = X.ENABLED, this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onExitAutoSpinMode && this.onExitAutoSpinMode(), this.Vp) {
            case B.IDLE:
              this.onResumeIdle && this.onResumeIdle();
              break;
            case B.SPINNING:
              this.onResumeSpin && this.onResumeSpin();
              break;
            case B.STOPPED:
              this.onResumeStop && this.onResumeStop();
          }
          Z.settingMenuHelper.stopSpinOptionButtonAnim && Z.settingMenuHelper.stopSpinOptionButtonAnim();
        }
      }, q.prototype.clickSpinButton = function (f) {
        if (undefined === f && (f = M.SpinTrigger.CLICK), true === this.node.active && this.Jp !== X.DISABLED && T.buttonHitTest(this.node)) {
          var g = this.qp;
          g && g(f);
        }
      }, q.prototype.enableMouseHover = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
      }, q.prototype.disableMouseHover = function () {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
      }, q.prototype.mouseHovered = function () {
        this.zp = true, this.Yp();
      }, q.prototype.mouseLeave = function () {
        this.zp = false, this.onHideMouseOverEffect && this.onHideMouseOverEffect();
      }, q.prototype.Yp = function () {
        var f = this.Jp,
          g = this.Vp;
        (f === X.AUTOSPIN || f !== X.DISABLED && g !== B.STOPPED) && this.onPlayMouseOverEffect && this.onPlayMouseOverEffect();
      }, __decorate([C], q);
    }(cc.Component);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = SpinButtonController;
