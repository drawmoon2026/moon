// module: MJSlotItem
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJSlotItem(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "4c59f+hZadKTYoq4X+mRm22", "MJSlotItem")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var X,
      Z = require("SlotItem"),
      T = require("GameConstant"),
      M = require("ScatterController"),
      C = require("AudioManager"),
      V = require("SlotHandler"),
      N = require("AudioConstant"),
      q = require("Utils"),
      g = require("UIAppearanceHelper"),
      K = require("NodePoolHandler"),
      O = cc._decorator,
      x = O.ccclass,
      p = O.property;
    (function (L) {
      L[L.Normal = 0] = "Normal", L[L.ScatterEffect = 1000] = "ScatterEffect", L[L.WinEffect = 2000] = "WinEffect";
    })(X || (X = {}));
    var b = function (L) {
      function H() {
        var U = null !== L && L.apply(this, arguments) || this;
        return U.scaleHolder = undefined, U.attachmentHolder = undefined, U.background = undefined, U.symbolIngot = undefined, U.content = undefined, U.bgScatterSpriteFrame = undefined, U.bgIngotSpriteFrame = undefined, U.bgIngotBlurSpriteFrame = undefined, U.bgGoldSpriteFrame = undefined, U.bgNormalSpriteFrame = undefined, U.bgGoldBlurSpriteFrame = undefined, U.bgNormalBlurSpriteFrame = undefined, U.wildSymbolSpriteFrame = undefined, U.Ea = undefined, U.Na = undefined, U.Ga = X.Normal, U.ka = undefined, U.Ra = undefined, U.ja = undefined, U.La = undefined, U.Pa = undefined, U.Da = undefined, U;
      }
      return __extends(H, L), Object.defineProperty(H.prototype, "slotViewIndex", {
        'get': function () {
          return this.Ea;
        },
        'set': function (U) {
          this.Ea = U;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(H.prototype, "slotItemIndex", {
        'get': function () {
          return this.Na;
        },
        'set': function (U) {
          this.Na = U;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(H.prototype, "visible", {
        'get': function () {
          return this.scaleHolder && this.scaleHolder.active;
        },
        'set': function (U) {
          this.scaleHolder && (this.scaleHolder.active = U);
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(H.prototype, "blockType", {
        'get': function () {
          return this.ka;
        },
        'enumerable': false,
        'configurable': true
      }), H.prototype.init = function (U) {
        this.content = U.sprite;
        var k = this.normalScale = undefined === U.normalScale ? 1 : U.normalScale;
        this.blurScale = undefined === U.blurScale ? k : U.blurScale, this.getSymbolZOrder = U.getSymbolZOrder, this.Ra = this.background.getComponent(cc.Sprite);
      }, H.prototype.setup = function (U, k, Y, y) {
        undefined === y && (y = false), this.symbolIngot.active = false, this.symbolIndex = U % 100, this.ka = 100 * Math.floor(U / 100), this.normalSpriteFrame = k, this.blurSpriteFrame = Y, this.zOrder = this.getSymbolZOrder ? this.getSymbolZOrder(U) : 0, this.Ga = X.Normal, this.setZIndex(), this.setBackground(this.ka), this.setBlur(y), this.Ua(y), this.xa();
      }, H.prototype.xa = function () {
        var U = 0;
        0 !== this.slotViewIndex && this.slotViewIndex !== V.NUMBER_OF_COLUMN - 1 || (U = -112), this.scaleHolder.setPosition(0, U);
      }, H.prototype.setZIndex = function (U) {
        undefined === U && (U = 0), this.node && (this.node.zIndex = this.Fa());
      }, H.prototype.enableDimLight = function (U) {
        this.content.node.runAction(cc.tintTo(0.2, 76, 76, 76)), this.background.runAction(cc.tintTo(0.2, 76, 76, 76)), this.symbolIngot.runAction(cc.tintTo(0.2, 76, 76, 76)), this.Da && this.Da.enableDimLight(), !U && this.Pa && this.Pa.enableDimLight();
      }, H.prototype.disableDimLight = function (U) {
        U ? (this.content && this.content.node && (this.content.node.color = cc.Color.WHITE), this.background && (this.background.color = cc.Color.WHITE), this.symbolIngot && (this.symbolIngot.color = cc.Color.WHITE)) : (this.content && this.content.node && this.content.node.runAction(cc.tintTo(0.2, 255, 255, 255)), this.background && this.background.runAction(cc.tintTo(0.2, 255, 255, 255)), this.symbolIngot && this.symbolIngot.runAction(cc.tintTo(0.2, 255, 255, 255))), this.Da && this.Da.disableDimLight(U), this.Pa && this.Pa.disableDimLight(U);
      }, H.prototype.hideBackground = function () {
        this.background.active = false;
      }, H.prototype.hideContent = function () {
        this.content.enabled = false;
      }, H.prototype.showBackground = function () {
        this.background.active = true;
      }, H.prototype.showContent = function () {
        this.content.enabled = true;
      }, H.prototype.hideContentAndBackground = function () {
        this.hideContent(), this.hideBackground();
      }, H.prototype.showContentAndBackground = function () {
        this.showContent(), this.showBackground();
      }, H.prototype.removeSymbol = function () {
        this.Da && K.nodePoolHandler.enqueueReusableItem(this.Da.node, "Symbol"), this.Da = undefined;
      }, H.prototype.setBackground = function (U) {
        this.symbolIndex === T.SLOT_SYMBOLS.WILD ? (this.ja = this.bgIngotSpriteFrame, this.La = this.bgIngotBlurSpriteFrame) : this.symbolIndex === T.SLOT_SYMBOLS.SCATTER ? (this.ja = this.bgScatterSpriteFrame, this.La = this.bgScatterSpriteFrame) : U === T.BLOCK_TYPE.GOLD && this.symbolIndex !== T.SLOT_SYMBOLS.WILD ? (this.ja = this.bgGoldSpriteFrame, this.La = this.bgGoldBlurSpriteFrame, this.symbolIngot.active = true) : (this.ja = this.bgNormalSpriteFrame, this.La = this.bgNormalBlurSpriteFrame);
      }, H.prototype.setBlur = function (U) {
        var k = this.content;
        k && (V.slotHandler.isFastSpinStarted() && V.slotHandler.getFastSpinReelIndex() === this.Ea && (U = false), this.Ra.spriteFrame = U ? this.La : this.ja, this.Ra.node.scale = U ? this.blurScale : this.normalScale, k.spriteFrame = U ? this.blurSpriteFrame : this.normalSpriteFrame, k.node.scale = U ? this.blurScale : this.normalScale, U && (this.Ra.node.scaleY = 1.5, k.node.scale = 2));
      }, H.prototype.playHighLightEffect = function (U, k, Y) {
        var y = this;
        if (this.Ga = X.WinEffect, this.setZIndex(), !this.Da) {
          var z = K.nodePoolHandler.dequeueReusableItem("Symbol");
          this.Da = z.getComponent(g.uiAppearanceHelper.v("game_skin.symbol_controller")), this.attachmentHolder.addChild(z);
        }
        this.hideContentAndBackground();
        var S = this.Da;
        S.init(U), S.enableMask(k), q.spawnCallback(function (P) {
          y.blockType === T.BLOCK_TYPE.NORMAL ? S.playWin(U, P) : S.playGoldWin(U, P);
        })(Y);
      }, H.prototype.playRotateEffect = function (U, k) {
        var Y = this;
        if (!this.Da) {
          var y = K.nodePoolHandler.dequeueReusableItem("Symbol");
          this.Da = y.getComponent(g.uiAppearanceHelper.v("game_skin.symbol_controller")), this.attachmentHolder.addChild(y), this.hideContentAndBackground();
        }
        var z = this.Da,
          S = function () {
            Y.Ga = X.Normal, Y.setZIndex(), Y.blockType === T.BLOCK_TYPE.NORMAL && Y.removeSymbol(), k();
          };
        this.blockType === T.BLOCK_TYPE.NORMAL ? z.playRotate(U, S) : z.playGoldRotate(U, S);
      }, H.prototype.playNormalSymbolWinAudio = function () {
        C.playAudio(N.GENERAL_AUDIO.symbolShrink.key);
      }, H.prototype.idleScatterEffect = function (U) {
        this.Ga = X.ScatterEffect, this.setZIndex(), U && U();
      }, H.prototype.playScatterEffect = function (U, k) {
        this.Ga = X.ScatterEffect, this.setZIndex(), this.Pa.play(U, k);
      }, H.prototype.stopScatter = function () {
        this.Pa.reset();
      }, H.prototype.playSymbolShake = function () {
        var U = 0.001 * (Math.floor(100 * Math.random()) + 30);
        this.scaleHolder.runAction(cc.repeatForever(cc.sequence(cc.moveBy(U, cc.v2(-2.5, 0)), cc.moveBy(U, cc.v2(5, 1.5)), cc.moveBy(U, cc.v2(-1, -4)), cc.moveBy(U, cc.v2(-3, 4.5)), cc.moveBy(U, cc.v2(4, -2)), cc.moveBy(U, cc.v2(-4, -1.5)), cc.moveBy(U, cc.v2(-1, 2.5)), cc.moveBy(U, cc.v2(2.5, -1)))));
      }, H.prototype.stopSymbolShake = function (U) {
        this.scaleHolder.stopAllActions(), this.xa(), U && U();
      }, H.prototype.stopScatterEffect = function () {
        this.Pa && (this.Ga = X.Normal, this.setZIndex(), this.Wa());
      }, H.prototype.reset = function () {
        this.content.node.stopAllActions(), this.background.stopAllActions(), this.symbolIngot.stopAllActions(), this.disableDimLight(true), this.showContentAndBackground(), this.removeSymbol(), this.stopScatterEffect(), this.ka = undefined, this.ja = undefined, this.La = undefined, this.Ea = undefined, this.Na = undefined, this.Ga = X.Normal;
      }, H.prototype.isIgnoreable = function () {
        var U = this.Na,
          k = this.Ea;
        return 0 === U || U === V.NUMBER_OF_ROW - 1 || (0 === k || k === V.NUMBER_OF_COLUMN - 1) && 1 === U;
      }, H.prototype.Wa = function () {
        if (this.Pa) {
          var U = this.Pa.node;
          K.nodePoolHandler.enqueueReusableItem(U, "Scatter"), this.Pa = undefined;
        }
      }, H.prototype.Fa = function () {
        return this.Ga + 100 * -this.Ea + -this.Na;
      }, H.prototype.Ua = function (U) {
        switch (this.symbolIndex) {
          case T.SLOT_SYMBOLS.SCATTER:
            if (this.hideContentAndBackground(), this.Pa) this.showContentAndBackground();else {
              var k = K.nodePoolHandler.dequeueReusableItem("Scatter");
              this.Pa = k.getComponent(M.default), this.attachmentHolder.addChild(k), this.Pa.init(U), this.isIgnoreable() || this.Pa.playIdle();
            }
            break;
          case T.SLOT_SYMBOLS.WILD:
            this.Da ? this.showContentAndBackground() : (this.hideContentAndBackground(), k = K.nodePoolHandler.dequeueReusableItem("Symbol"), this.Da = k.getComponent(g.uiAppearanceHelper.v("game_skin.symbol_controller")), this.attachmentHolder.addChild(k), this.Da.init(this.symbolIndex));
            break;
          default:
            this.showContentAndBackground();
        }
      }, __decorate([p(cc.Node)], H.prototype, "scaleHolder", undefined), __decorate([p(cc.Node)], H.prototype, "attachmentHolder", undefined), __decorate([p(cc.Node)], H.prototype, "background", undefined), __decorate([p(cc.Node)], H.prototype, "symbolIngot", undefined), __decorate([p(cc.Sprite)], H.prototype, "content", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgScatterSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgIngotSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgIngotBlurSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgGoldSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgNormalSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgGoldBlurSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "bgNormalBlurSpriteFrame", undefined), __decorate([p(cc.SpriteFrame)], H.prototype, "wildSymbolSpriteFrame", undefined), __decorate([x], H);
    }(Z.default);
    exports.default = b, cc._RF.pop();
  }
}
module.exports = MJSlotItem;
