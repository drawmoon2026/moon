// module: PaytableWildEffectController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PaytableWildEffectController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "8c65aHRidRK5a2rYkv5vM5p", "PaytableWildEffectController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x,
      C,
      H = require("SlotProperties"),
      V = cc._decorator,
      M = V.ccclass,
      q = V.property;
    (function (D) {
      D[D.WiLD_STATE_ONE = 0] = "WiLD_STATE_ONE", D[D.WiLD_STATE_TWO = 0] = "WiLD_STATE_TWO";
    })(x || (x = {})), function (D) {
      D[D.FADING = 0] = "FADING", D[D.STATIC = 1] = "STATIC";
    }(C || (C = {}));
    var m = function (D) {
      function W() {
        var k = null !== D && D.apply(this, arguments) || this;
        return k.wildHolderNode = undefined, k.normalSymbolNode = undefined, k.normalSymbolNode02 = undefined, k.textNode = undefined, k.currentMultiplySymbol = undefined, k.currentMultiplySymbol02 = undefined, k.wildMultiplyOne = undefined, k.wildMultiplyTwo = undefined, k.wildMultiplyFive = undefined, k.wildMultiplyTen = undefined, k.wildGlowNode = undefined, k.Qu = undefined, k.Xu = undefined, k.Zu = undefined, k.$u = undefined, k;
      }
      return __extends(W, D), W.prototype.init = function (k) {
        this.Xu = H.WildSlotIndexes.ONE, this.Zu = x.WiLD_STATE_ONE, k && k();
      }, W.prototype.randomFading = function () {
        if (this.$u !== C.FADING) switch (this.$u = C.FADING, this.wildGlowNode.stopAllActions(), this.textNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.wildGlowNode.active = false, this.textNode.runAction(cc.fadeTo(0.3, 255)), this.Zu) {
          case x.WiLD_STATE_ONE:
            this.tl(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode.runAction(cc.spawn(cc.fadeOut(0.5), cc.callFunc(this.il, this), cc.callFunc(this.sl, this)));
            break;
          case x.WiLD_STATE_TWO:
            this.el(), this.normalSymbolNode02.stopAllActions(), this.normalSymbolNode02.runAction(cc.spawn(cc.fadeOut(0.5), cc.callFunc(this.nl, this), cc.callFunc(this.ol, this)));
        }
      }, W.prototype.fadeMultiply = function (k, z) {
        if (undefined === z && (z = true), this.$u !== C.STATIC) if (this.$u = C.STATIC, this.normalSymbolNode.stopAllActions(), this.normalSymbolNode02.stopAllActions(), this.textNode.stopAllActions(), this.Qu = k, this.Xu = k, this.playPaytableGlow(), z) {
          switch (this.Zu) {
            case x.WiLD_STATE_ONE:
              this.normalSymbolNode02.runAction(cc.fadeOut(0.1)), this.normalSymbolNode.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.cl, this), cc.fadeIn(0.5), cc.callFunc(this.hl, this)));
              break;
            case x.WiLD_STATE_TWO:
              this.normalSymbolNode.runAction(cc.fadeOut(0.1)), this.normalSymbolNode02.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.al, this), cc.fadeIn(0.5), cc.callFunc(this.ul, this)));
          }
          this.textNode.runAction(cc.fadeTo(0.3, 255));
        } else this.Zu = x.WiLD_STATE_ONE, this.cl(), this.normalSymbolNode02.opacity = 0, this.normalSymbolNode.opacity = 255, this.textNode.opacity = 255;
      }, W.prototype.playPaytableGlow = function () {
        var k = cc.sequence(cc.fadeTo(0.1, 0), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
        this.wildGlowNode.active = true, this.wildGlowNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.wildGlowNode.runAction(k.repeatForever());
      }, W.prototype.playActive = function () {
        255 !== this.wildHolderNode.opacity && (this.textNode.stopAllActions(), this.wildGlowNode.active = true, this.wildGlowNode.stopAllActions(), this.wildHolderNode.runAction(cc.fadeTo(0.1, 255)), this.wildGlowNode.runAction(cc.sequence(cc.fadeOut(0.1), cc.callFunc(this.ll, this))), this.textNode.runAction(cc.fadeTo(0.1, 255)));
      }, W.prototype.playNoActive = function () {
        (this.wildGlowNode.active || 102 !== this.wildHolderNode.opacity) && (this.textNode.stopAllActions(), this.wildGlowNode.stopAllActions(), this.wildHolderNode.stopAllActions(), this.wildHolderNode.opacity = 102, this.wildGlowNode.opacity = 0, this.wildGlowNode.active = false, this.textNode.opacity = 102);
      }, W.prototype.ol = function () {
        this.Zu = x.WiLD_STATE_ONE, this.tl(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode.runAction(cc.sequence(cc.fadeTo(1, 255), cc.callFunc(this.hl, this), cc.delayTime(1), cc.spawn(cc.callFunc(this.il, this), cc.fadeOut(1), cc.callFunc(this.sl, this))));
      }, W.prototype.sl = function () {
        this.Zu = x.WiLD_STATE_TWO, this.el(), this.normalSymbolNode02.stopAllActions(), this.normalSymbolNode02.runAction(cc.sequence(cc.fadeTo(1, 255), cc.delayTime(1), cc.callFunc(this.ul, this), cc.spawn(cc.callFunc(this.nl, this), cc.fadeOut(1), cc.callFunc(this.ol, this))));
      }, W.prototype.cl = function () {
        switch (this.currentMultiplySymbol02.spriteFrame = undefined, this.Qu) {
          case H.WildSlotIndexes.ONE:
            this.currentMultiplySymbol.spriteFrame = this.wildMultiplyOne;
            break;
          case H.WildSlotIndexes.TWO:
            this.currentMultiplySymbol.spriteFrame = this.wildMultiplyTwo;
            break;
          case H.WildSlotIndexes.FIVE:
            this.currentMultiplySymbol.spriteFrame = this.wildMultiplyFive;
            break;
          case H.WildSlotIndexes.TEN:
            this.currentMultiplySymbol.spriteFrame = this.wildMultiplyTen;
        }
      }, W.prototype.al = function () {
        switch (this.currentMultiplySymbol.spriteFrame = undefined, this.Qu) {
          case H.WildSlotIndexes.ONE:
            this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyOne;
            break;
          case H.WildSlotIndexes.TWO:
            this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyTwo;
            break;
          case H.WildSlotIndexes.FIVE:
            this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyFive;
            break;
          case H.WildSlotIndexes.TEN:
            this.currentMultiplySymbol02.spriteFrame = this.wildMultiplyTen;
        }
      }, W.prototype.nl = function () {
        this.currentMultiplySymbol.spriteFrame = this.fl();
      }, W.prototype.il = function () {
        this.currentMultiplySymbol02.spriteFrame = this.fl();
      }, W.prototype.ul = function () {
        this.normalSymbolNode.active = false;
      }, W.prototype.hl = function () {
        this.normalSymbolNode02.active = false;
      }, W.prototype.tl = function () {
        this.normalSymbolNode.active = true;
      }, W.prototype.el = function () {
        this.normalSymbolNode02.active = true;
      }, W.prototype.ll = function () {
        this.wildGlowNode.active = false;
      }, W.prototype.fl = function () {
        var k;
        switch (this.Xu) {
          case H.WildSlotIndexes.ONE:
            this.Xu = H.WildSlotIndexes.TWO, k = this.wildMultiplyTwo;
            break;
          case H.WildSlotIndexes.TWO:
            this.Xu = H.WildSlotIndexes.FIVE, k = this.wildMultiplyFive;
            break;
          case H.WildSlotIndexes.FIVE:
            this.Xu = H.WildSlotIndexes.TEN, k = this.wildMultiplyTen;
            break;
          case H.WildSlotIndexes.TEN:
            this.Xu = H.WildSlotIndexes.ONE, k = this.wildMultiplyOne;
        }
        return k;
      }, W.prototype.q = function () {
        this.Qu = undefined, this.Xu = undefined, this.textNode.stopAllActions(), this.normalSymbolNode.stopAllActions(), this.normalSymbolNode02.stopAllActions(), this.wildGlowNode.stopAllActions(), this.wildGlowNode.opacity = 0, this.normalSymbolNode.opacity = 0, this.normalSymbolNode02.opacity = 0, this.textNode.opacity = 255;
      }, W.prototype.destroy = function () {
        return this.q(), this.node.destroy(), D.prototype.destroy.call(this);
      }, __decorate([q(cc.Node)], W.prototype, "wildHolderNode", undefined), __decorate([q(cc.Node)], W.prototype, "normalSymbolNode", undefined), __decorate([q(cc.Node)], W.prototype, "normalSymbolNode02", undefined), __decorate([q(cc.Node)], W.prototype, "textNode", undefined), __decorate([q(cc.Sprite)], W.prototype, "currentMultiplySymbol", undefined), __decorate([q(cc.Sprite)], W.prototype, "currentMultiplySymbol02", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyOne", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyTwo", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyFive", undefined), __decorate([q(cc.SpriteFrame)], W.prototype, "wildMultiplyTen", undefined), __decorate([q(cc.Node)], W.prototype, "wildGlowNode", undefined), __decorate([M], W);
    }(cc.Component);
    exports.default = m, cc._RF.pop();
  }
}
module.exports = PaytableWildEffectController;
