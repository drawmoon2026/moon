// module: SpinButtonController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SpinButtonController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "43d12n8a1BInJvBu7QtjALE", "SpinButtonController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.SpinButtonMode = exports.SpinButtonAnimationState = undefined;
    var x,
      C,
      H = require("SettingMenuHelper"),
      V = require("ButtonHitTest"),
      M = require("SlotAnalyticsEnum"),
      q = cc._decorator.ccclass;
    (function (D) {
      D[D.IDLE = 1] = "IDLE", D[D.SPINNING = 2] = "SPINNING", D[D.STOPPED = 3] = "STOPPED";
    })(x = exports.SpinButtonAnimationState || (exports.SpinButtonAnimationState = {})), function (D) {
      D[D.ENABLED = 0] = "ENABLED", D[D.DISABLED = 1] = "DISABLED", D[D.AUTOSPIN = 2] = "AUTOSPIN";
    }(C = exports.SpinButtonMode || (exports.SpinButtonMode = {}));
    var m = function (D) {
      function W() {
        var k = null !== D && D.apply(this, arguments) || this;
        return k.Kb = C.DISABLED, k.qb = x.STOPPED, k.Jb = false, k.Yb = undefined, k.Qb = undefined, k;
      }
      return __extends(W, D), Object.defineProperty(W.prototype, "clickCallback", {
        'get': function () {
          return this.Qb;
        },
        'set': function (k) {
          this.Qb = k;
        },
        'enumerable': false,
        'configurable': true
      }), W.prototype.showAutoSpinLook = function () {
        this.Yb && this.Yb();
      }, Object.defineProperty(W.prototype, "mode", {
        'get': function () {
          return this.Kb;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(W.prototype, "isHover", {
        'get': function () {
          return this.Jb;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(W.prototype, "isHovered", {
        'get': function () {
          return this.Jb;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(W.prototype, "animationState", {
        'get': function () {
          return this.qb;
        },
        'enumerable': false,
        'configurable': true
      }), W.prototype.setOnClickCallback = function (k) {
        this.Qb = k;
      }, W.prototype.clearOnClickCallback = function () {
        this.Qb = undefined;
      }, W.prototype.destroy = function () {
        return this.Qb = undefined, this.Yb = undefined, this.Xb(), this.node.destroy(), D.prototype.destroy.call(this);
      }, W.prototype.Xb = function () {
        this.disableMouseHover(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onStopAllAnimations && this.onStopAllAnimations();
      }, W.prototype.init = function () {
        this.enableMouseHover(), this.onDisableButton(), this.onInit && this.onInit();
      }, W.prototype.idle = function () {
        this.qb = x.IDLE, this.Kb !== C.AUTOSPIN && (this.onShowIdleAnimation && this.onShowIdleAnimation(), this.Jb && this.Zb());
      }, W.prototype.spin = function () {
        this.qb = x.SPINNING, this.Kb !== C.AUTOSPIN && (this.Kb !== C.DISABLED && this.onReplaceSpinBlurredSpriteFrame && this.onReplaceSpinBlurredSpriteFrame(), this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onShowSpinAnimation && this.onShowSpinAnimation());
      }, W.prototype.stopSpin = function () {
        this.qb = x.STOPPED, this.Kb !== C.AUTOSPIN && this.onShowStopSpinningAnimation && this.onShowStopSpinningAnimation();
      }, W.prototype.enableButton = function () {
        this.Kb === C.DISABLED && (this.Kb = C.ENABLED, this.onEnableButton && this.onEnableButton());
      }, W.prototype.disableButton = function () {
        this.Kb === C.ENABLED && (this.Kb = C.DISABLED, this.onDisableButton && this.onDisableButton());
      }, W.prototype.show = function () {
        this.node.active = true;
      }, W.prototype.hide = function () {
        this.node.active = false;
      }, W.prototype.isAutoSpin = function () {
        return this.Kb === C.AUTOSPIN;
      }, W.prototype.enterAutoSpinMode = function (k, z) {
        this.qb === x.IDLE && k > 0 && (this.Kb = C.AUTOSPIN, this.Yb = z, this.showAutoSpinLook(k));
      }, W.prototype.updateAutoSpinCount = function (k) {
        this.Kb === C.AUTOSPIN && this.onUpdateAutoSpinCount && this.onUpdateAutoSpinCount(k);
      }, W.prototype.exitAutoSpinMode = function () {
        if (this.Kb === C.AUTOSPIN) {
          switch (this.Kb = C.ENABLED, this.onHideMouseOverEffect && this.onHideMouseOverEffect(), this.onExitAutoSpinMode && this.onExitAutoSpinMode(), this.qb) {
            case x.IDLE:
              this.onResumeIdle && this.onResumeIdle();
              break;
            case x.SPINNING:
              this.onResumeSpin && this.onResumeSpin();
              break;
            case x.STOPPED:
              this.onResumeStop && this.onResumeStop();
          }
          H.settingMenuHelper.stopSpinOptionButtonAnim && H.settingMenuHelper.stopSpinOptionButtonAnim();
        }
      }, W.prototype.clickSpinButton = function (k) {
        if (undefined === k && (k = M.SpinTrigger.CLICK), true === this.node.active && this.Kb !== C.DISABLED && V.buttonHitTest(this.node)) {
          var z = this.Qb;
          z && z(k);
        }
      }, W.prototype.enableMouseHover = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
      }, W.prototype.disableMouseHover = function () {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this.mouseHovered, this), this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.mouseLeave, this);
      }, W.prototype.mouseHovered = function () {
        this.Jb = true, this.Zb();
      }, W.prototype.mouseLeave = function () {
        this.Jb = false, this.onHideMouseOverEffect && this.onHideMouseOverEffect();
      }, W.prototype.Zb = function () {
        var k = this.Kb,
          z = this.qb;
        (k === C.AUTOSPIN || k !== C.DISABLED && z !== x.STOPPED) && this.onPlayMouseOverEffect && this.onPlayMouseOverEffect();
      }, __decorate([q], W);
    }(cc.Component);
    exports.default = m, cc._RF.pop();
  }
}
module.exports = SpinButtonController;
