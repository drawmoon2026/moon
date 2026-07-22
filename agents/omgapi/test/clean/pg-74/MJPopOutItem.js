// module: MJPopOutItem
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJPopOutItem(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "3f567w649xJF6nofSMlLKNP", "MJPopOutItem")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m), I.PopoutSymbolState = undefined;
      var B,
        X = F("GameConstant"),
        Z = F("PopOutItem"),
        T = F("SymbolImageHandler"),
        M = F("AudioManager"),
        C = F("AudioConstant"),
        V = cc._decorator,
        N = V.ccclass,
        q = V.property;
      (function (K) {
        K[K.NORMAL = 0] = "NORMAL", K[K.SPECIAL = 1] = "SPECIAL", K[K.SCATTER = 2] = "SCATTER", K[K.WILD = 3] = "WILD";
      })(B = I.PopoutSymbolState || (I.PopoutSymbolState = {}));
      var g = function (K) {
        function O() {
          var x = null !== K && K.apply(this, arguments) || this;
          return x.spriteHolder = undefined, x.labelHolder = undefined, x.symbolSprite = undefined, x.layoutNode = undefined, x.backgroundSprite = undefined, x.baseSprite = undefined, x.scatterbaseSpriteNode = undefined, x.particleEffectNode = undefined, x.goldBaseIngotSpriteNode = undefined, x.winGlowA = [], x.payoutNumber = [], x.payoutValue = [], x.numberHolder = undefined, x.label = undefined, x.baseSpriteFrame = [], x.payoutLayouts = [], x;
        }
        return __extends(O, K), O.prototype.unuse = function () {
          this.node.opacity = 0;
        }, O.prototype.reuse = function () {
          this.node.opacity = 0;
        }, O.prototype.showItem = function (x, p, b, L, H, U, k, Y, y) {
          var z,
            S,
            P = this;
          this.hideItem(), M.playAudio(C.GENERAL_AUDIO.uiClick.key), this.Lr(L), 14 === b && (U = false), this.goldBaseIngotSpriteNode.active = false, this.baseSprite.spriteFrame = this.baseSpriteFrame[B.NORMAL], y && Object.keys(y).forEach(function (G) {
            var A = y[parseInt(G)];
            if (A % 7 != 0 && (A + 1) % 7 != 0) {
              {
                var w = P.Pr(A);
                b === w && (P.goldBaseIngotSpriteNode.active = true, P.baseSprite.spriteFrame = P.baseSpriteFrame[B.SPECIAL]);
              }
            }
          }), this.Dr(U, L), this.setPayoutValue(L, p), U ? (z = -90, S = -74.5) : (z = -270, S = -74.5), this.node.setPosition(H.x + z, H.y + S), this.node.active = true, L !== X.SLOT_SYMBOLS.SCATTER && L !== X.SLOT_SYMBOLS.WILD || (this.particleEffectNode.active = true, this.particleEffectNode.color = cc.Color.BLACK, this.particleEffectNode.stopAllActions(), this.particleEffectNode.runAction(cc.tintTo(0.2, 255, 255, 255))), L === X.SLOT_SYMBOLS.SCATTER && (this.scatterbaseSpriteNode.color = cc.Color.BLACK, this.scatterbaseSpriteNode.stopAllActions(), this.scatterbaseSpriteNode.runAction(cc.tintTo(0.2, 255, 255, 255))), this.node.runAction(cc.sequence(cc.fadeTo(0.2, 255), cc.callFunc(function () {
            {
              x && x();
            }
          }))), X.isRTL && this.payoutLayouts.forEach(function (G) {
            G.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, G.node.anchorX = 1, G.node.x = 60;
          });
        }, O.prototype.hideItem = function () {
          this.winGlowA.forEach(function (x) {
            x.stopAllActions(), x.opacity = 0, x.angle = 0;
          }), this.node.opacity = 0, this.node.active = false, this.node.stopAllActions();
        }, O.prototype.Lr = function (x) {
          {
            var p = T.symbolImageHandler.symbolImages;
            this.symbolSprite.spriteFrame = p[x];
          }
        }, O.prototype.Dr = function (x, p) {
          var b = this,
            L = 0;
          if (this.Ur(), x) L = 177.5, this.spriteHolder.setPosition(-157.5, 25), this.labelHolder.setPosition(85, 25), this.symbolSprite.node.setScale(1), p === X.SLOT_SYMBOLS.WILD ? (this.particleEffectNode.setPosition(49, 75), this.backgroundSprite.node.setContentSize(420, 245), this.backgroundSprite.node.setScale(1.5, 1), this.baseSprite.node.setPosition(36, 62), this.baseSprite.node.setContentSize(850, 850), this.baseSprite.node.setScale(1.05), this.spriteHolder.setPosition(-125, 25), this.symbolSprite.node.setPosition(38, 79), this.baseSprite.spriteFrame = this.baseSpriteFrame[B.WILD]) : p === X.SLOT_SYMBOLS.SCATTER ? (this.scatterbaseSpriteNode.active = true, this.scatterbaseSpriteNode.setPosition(84, 75), this.scatterbaseSpriteNode.setScale(1.2), this.baseSprite.node.active = false, this.symbolSprite.node.setPosition(86.5, 74), this.symbolSprite.node.setScale(0.92), this.backgroundSprite.node.setScale(1.5, 1), this.spriteHolder.setPosition(-174, 26), this.xr(), this.baseSprite.spriteFrame = this.baseSpriteFrame[B.SCATTER]) : this.backgroundSprite.node.setScale(1, 1);else {
            L = 182.5, this.backgroundSprite.node.setPosition(-40, -43), this.spriteHolder.setPosition(18, 25), this.symbolSprite.node.setScale(1);
            var H = function () {
              b.labelHolder.setPosition(-380, 25), b.backgroundSprite.node.setScale(1.5, 1);
            };
            p === X.SLOT_SYMBOLS.WILD ? (this.particleEffectNode.setPosition(49, 75), this.backgroundSprite.node.setPosition(-250, -43), this.backgroundSprite.node.setContentSize(420, 245), H(), this.baseSprite.node.setPosition(36, 62), this.baseSprite.node.setContentSize(850, 850), this.baseSprite.node.setScale(1.05), this.spriteHolder.setPosition(49, 25), this.symbolSprite.node.setPosition(38, 79), this.baseSprite.spriteFrame = this.baseSpriteFrame[B.WILD]) : p === X.SLOT_SYMBOLS.SCATTER ? (H(), this.backgroundSprite.node.setPosition(-250, -43), this.scatterbaseSpriteNode.active = true, this.scatterbaseSpriteNode.setScale(1.2), this.scatterbaseSpriteNode.setPosition(75, 74), this.baseSprite.node.active = false, this.spriteHolder.setPosition(12, 25), this.baseSprite.node.setPosition(80, 40), this.symbolSprite.node.setPosition(76, 75), this.symbolSprite.node.setScale(0.92), this.xr(), this.baseSprite.spriteFrame = this.baseSpriteFrame[B.SCATTER]) : (this.labelHolder.setPosition(-140, 25), this.backgroundSprite.node.setScale(1, 1));
          }
          this.layoutNode.position = cc.v2(L, -25), this.node.setContentSize(this.backgroundSprite.node.width * this.backgroundSprite.node.scaleX, this.backgroundSprite.node.height * this.backgroundSprite.node.scaleY);
        }, O.prototype.setPayoutValue = function (x, p) {
          {
            var b = this,
              L = p[x],
              H = Object.keys(L);
            H.reverse(), x !== X.SLOT_SYMBOLS.WILD && x !== X.SLOT_SYMBOLS.SCATTER ? (this.numberHolder.active = true, this.label.node.active = false, this.payoutNumber.forEach(function (U, k) {
              var Y = U.getComponent("NumberDisplayController");
              Y.clear(), Y.displayNumber(H[k]);
              var y = b.payoutValue[k].getComponent("NumberDisplayController");
              y.clear(), y.displayNumber(L[H[k]]);
            })) : (this.numberHolder.active = false, this.label.node.active = true, x === X.SLOT_SYMBOLS.WILD ? this.label.string = shell.I18n.t("MahjongPopOutSymbolDesc.WildDesc") : x === X.SLOT_SYMBOLS.SCATTER ? this.label.string = shell.I18n.t("MahjongPopOutSymbolDesc.ScatterDesc") : this.label.string = '');
          }
        }, O.prototype.Ur = function () {
          this.baseSprite.node.setContentSize(189, 224), this.baseSprite.node.setPosition(70, 77), this.baseSprite.node.active = true, this.scatterbaseSpriteNode.active = false, this.particleEffectNode.active = false, this.particleEffectNode.setPosition(84, 75), this.symbolSprite.node.setPosition(75, 85), this.backgroundSprite.node.setPosition(-20, -43), this.backgroundSprite.node.setContentSize(423, 243);
        }, O.prototype.xr = function () {
          this.winGlowA.forEach(function (x) {
            x.active = true, x.opacity = 255;
          }), this.winGlowA[0] && this.winGlowA[0].runAction(cc.repeatForever(cc.rotateBy(10, 360))), this.winGlowA[1] && this.winGlowA[1].runAction(cc.repeatForever(cc.rotateBy(10, -360))), this.winGlowA[2] && this.winGlowA[2].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 1.2), cc.scaleTo(0.5, 0.8))));
        }, O.prototype.Pr = function (x) {
          {
            return x - (2 + 2 * (Math.ceil((x + 1) / 7) - 1));
          }
        }, __decorate([q(cc.Node)], O.prototype, "spriteHolder", undefined), __decorate([q(cc.Node)], O.prototype, "labelHolder", undefined), __decorate([q(cc.Sprite)], O.prototype, "symbolSprite", undefined), __decorate([q(cc.Node)], O.prototype, "layoutNode", undefined), __decorate([q(cc.Sprite)], O.prototype, "backgroundSprite", undefined), __decorate([q(cc.Sprite)], O.prototype, "baseSprite", undefined), __decorate([q(cc.Node)], O.prototype, "scatterbaseSpriteNode", undefined), __decorate([q(cc.Node)], O.prototype, "particleEffectNode", undefined), __decorate([q(cc.Node)], O.prototype, "goldBaseIngotSpriteNode", undefined), __decorate([q([cc.Node])], O.prototype, "winGlowA", undefined), __decorate([q([cc.Node])], O.prototype, "payoutNumber", undefined), __decorate([q([cc.Node])], O.prototype, "payoutValue", undefined), __decorate([q(cc.Node)], O.prototype, "numberHolder", undefined), __decorate([q(cc.Label)], O.prototype, "label", undefined), __decorate([q([cc.SpriteFrame])], O.prototype, "baseSpriteFrame", undefined), __decorate([q([cc.Layout])], O.prototype, "payoutLayouts", undefined), __decorate([N], O);
      }(Z.default);
      I.default = g, cc._RF.pop();
    }
  }
}
module.exports = MJPopOutItem;
