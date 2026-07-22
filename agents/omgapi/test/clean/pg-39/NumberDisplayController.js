// module: NumberDisplayController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NumberDisplayController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "e13cc9FLShL66GevrFVSv5p", "NumberDisplayController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = require("NumberDisplayInterface"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        {
          function z() {
            var L = null !== m && m.apply(this, arguments) || this;
            return L.numberSpriteAtlas = undefined, L.numberBlurSpriteAtlas = undefined, L.numberSprite = [], L.numberBlurSprite = [], L.kSprite = undefined, L.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA, L.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA, L.nodeNumberWidth = 141, L.nodeNumberY = 0, L.nodeNumberScale = 1, L.commaWidth = 50, L.commaY = 0, L.commaScale = 1, L.decimalWidth = 60, L.decimalY = 0, L.decimalScale = 1, L.decimalNumberWidth = 121, L.decimalNumberY = 1, L.decimalNumberScale = 0.9, L.multiplySpriteWidth = 50, L.multiplySpriteY = 0, L.multiplySpriteScale = 1, L.layoutSpacingX = 0, L.layoutSpacingY = 0, L.blurScale = 1, L.spriteColor = "FFFFFF", L.disableFixedWidth = false, L.enablePrefixNumber = false, L.oa = false, L.ha = 0, L.ra = false, L.aa = '0', L.ua = 0, L.la = 0, L.attributesForNumberContainer = undefined, L;
          }
          var D = {};
          D.tooltip = false;
          var W = {};
          W.tooltip = false;
          var k = {};
          k.tooltip = false;
          return __extends(z, m), Object.defineProperty(z.prototype, "preview", {
            'get': function () {
              {
                return this.ra;
              }
            },
            'set': function (L) {
              this.ra = L, L ? (this.ha = this.node.width, this.displayNumber(this.previewNumber)) : (this.clear(), this.numberContainer.removeComponent(cc.Layout), this.node.width = this.ha, this.na = undefined);
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(z.prototype, "previewNumber", {
            'get': function () {
              {
                return this.aa;
              }
            },
            'set': function (L) {
              {
                this.aa = L, this.displayNumber(L);
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(z.prototype, "currentNumberBlurSprite", {
            'get': function () {
              return this.numberBlurSpriteAtlas ? this.numberBlurSpriteAtlas.getSpriteFrames() : this.numberBlurSprite;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(z.prototype, "currentNumberSprite", {
            'get': function () {
              return this.numberSpriteAtlas ? this.numberSpriteAtlas.getSpriteFrames() : this.numberSprite;
            },
            'enumerable': false,
            'configurable': true
          }), z.prototype.onLoad = function () {
            {
              this.ua = this.numberContainer.scaleX, this.la = this.numberContainer.scaleY, this.numberContainer.on(cc.Node.EventType.SIZE_CHANGED, this.resizeNumberIfNeeded, this);
            }
          }, z.prototype.getNumberList = function (L, v) {
            var b = /(?:\d+)(?:\.\d+)?/gm.exec(L.toString());
            if (b) {
              {
                var U = parseFloat(b[0]),
                  Q = this.fa(U, v),
                  w = "number" == typeof L ? Q : L.replace(b[0], Q),
                  P = Array.from(w);
                return this.enablePrefixNumber && P.unshift('x'), P;
              }
            }
            return Array.from(L.toString());
          }, z.prototype.getSpriteConfig = function (L) {
            switch (L) {
              case ',':
                var v = {};
                v.width = this.commaWidth;
                v.scale = this.commaScale;
                v.y = this.commaY;
                v.spriteFrame = this.currentNumberSprite[10];
                return v;
              case '.':
                var b = {};
                b.width = this.decimalWidth;
                b.scale = this.decimalScale;
                b.y = this.decimalY;
                b.spriteFrame = this.currentNumberSprite[11];
                return b;
              case 'x':
                var U = {};
                U.width = this.multiplySpriteWidth;
                U.scale = this.multiplySpriteScale;
                U.y = this.multiplySpriteY;
                U.spriteFrame = this.currentNumberSprite[12];
                return U;
              case 'k':
                var Q = {};
                Q.width = this.nodeNumberWidth;
                Q.scale = this.nodeNumberScale;
                Q.y = this.nodeNumberY;
                Q.spriteFrame = this.kSprite;
                return Q;
              case '\x20':
                var w = {};
                w.width = this.commaWidth;
                w.scale = this.commaScale;
                w.y = this.commaY;
                w.spriteFrame = undefined;
                return w;
              default:
                return;
            }
          }, z.prototype.getNumberSpriteConfig = function (L, v, b) {
            return b ? {
              'scale': v ? this.decimalNumberScale * this.blurScale : this.decimalNumberScale,
              'width': this.decimalNumberWidth,
              'y': this.decimalNumberY,
              'spriteFrame': v ? this.currentNumberBlurSprite[parseInt(L, 10)] : this.currentNumberSprite[parseInt(L, 10)]
            } : {
              'scale': this.nodeNumberScale,
              'width': this.nodeNumberWidth,
              'y': this.nodeNumberY,
              'spriteFrame': v ? this.currentNumberBlurSprite[parseInt(L, 10)] : this.currentNumberSprite[parseInt(L, 10)]
            };
          }, z.prototype.displayNumber = function (L, v, b) {
            {
              undefined === v && (v = true), this.da();
              var U = this.getNumberList(L, v);
              U = U.reverse();
              var Q = false;
              this.va(U.length);
              for (var w = 0; w < U.length; w++) {
                {
                  var P = this.dequeueNumberContainer(w),
                    R = P.getChildByName("numberSprite").getComponent(cc.Sprite),
                    T = this.getSpriteConfig(U[w]);
                  if (T) P.width = T.width, P.scaleX = P.scaleY = T.scale, R.node.y = T.y, R.spriteFrame = T.spriteFrame;else {
                    Q = false;
                    var Y = x.getDefaultCurrencyFormat().decimalSeparator,
                      X = w < U.indexOf(Y);
                    X && -1 !== U.indexOf(Y) && (Q = !v);
                    var E = this.getNumberSpriteConfig(U[w], Q, X && -1 !== U.indexOf(Y));
                    P.scale = E.scale, P.width = E.width, R.node.y = E.y, R.spriteFrame = E.spriteFrame;
                  }
                  (this.disableFixedWidth || -1 === P.width) && (P.width = R.node.width), this._a(w, U[w], Q, P);
                }
              }
              this.na && this.na.updateLayout(), b && b();
            }
          }, z.prototype.va = function (L) {
            var v = this.numberContainer.children.length;
            if (L < v) for (var b = v - L; 0 !== b;) {
              {
                var U = this.numberContainer.children[0];
                U.removeFromParent(), U.destroy(), b--;
              }
            }
          }, z.prototype.clear = function () {
            {
              for (var L = this.numberContainer.children.length - 1; L > -1; L--) {
                {
                  var v = this.numberContainer.children[L];
                  v.removeFromParent(), v.destroy();
                }
              }
              this.pa(), this.numberContainer.width = 0;
            }
          }, z.prototype.pa = function () {
            this.ua && this.la && (this.numberContainer.scaleX = this.ua, this.numberContainer.scaleY = this.la);
          }, z.prototype.fa = function (L, v) {
            {
              var U = '',
                Q = 1;
              this.enableShortenNumber && L > 999 && (Q = 1000, U = 'k');
              var w = !x.getDefaultCurrencyFormat().hideDecimal && this.enableDecimal;
              return b = w ? Math.floor(b / Q) : Math.round(b / Q), this.enableComma && (b = this.numberWithComma(b)), w && (b += this.ma(L, v)), b + U;
            }
          }, z.prototype.ma = function (L, v) {
            var b,
              U,
              Q,
              w = x.getDefaultCurrencyFormat().decimalSeparator;
            this.enableShortenNumber && L > 999 ? (b = Math.round(L / 100) / 10, U = 2, Q = v ? '' : w + '0') : (b = L, U = 3, Q = w + '00');
            var P = b.toString();
            if (-1 !== P.indexOf('.')) for (Q = w + (Q = P.substring(P.indexOf('.') + 1, P.indexOf('.') + U)); Q.length !== U;) Q += '0';
            return Q;
          }, z.prototype._a = function (L, v, b, U) {
            this.attributesForNumberContainer && this.attributesForNumberContainer(L, v, b, U);
          }, z.prototype.dequeueNumberContainer = function (L) {
            var v = this.numberContainer.children[L];
            if (!v) {
              (v = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(v);
              var b = new cc.Node("numberSprite");
              b.addComponent(cc.Sprite);
              var U = b.getComponent(cc.Sprite);
              U.srcBlendFactor = this.srcBlendFactor, U.dstBlendFactor = this.dstBlendFactor, v.addChild(b), b.color = new cc.Color().fromHEX(this.spriteColor);
            }
            return v;
          }, z.prototype.resizeNumberIfNeeded = function () {
            {
              var L = this.numberContainer.width,
                v = this.maxContainerSize / L,
                b = L * this.numberContainer.scaleX;
              isFinite(v) && Math.round(b) > this.maxContainerSize && (this.numberContainer.scale = v);
            }
          }, z.prototype.Sa = function (L, v, b) {
            this.numberContainer.runAction(cc.sequence(cc.scaleTo(0.08, L), cc.scaleTo(0.05, v), cc.callFunc(b, this)));
          }, z.prototype.da = function () {
            if (!this.na) {
              var L = this.na = this.numberContainer.getComponent(cc.Layout);
              L || (L = this.na = this.numberContainer.addComponent(cc.Layout)), L.resizeMode = cc.Layout.ResizeMode.CONTAINER, L.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, L.type = cc.Layout.Type.HORIZONTAL, L.spacingX = this.layoutSpacingX, L.spacingY = this.layoutSpacingY;
            }
          }, z.prototype.onDestroy = function () {
            this.attributesForNumberContainer = undefined;
          }, __decorate([M({
            'type': cc.SpriteAtlas,
            'tooltip': false
          })], z.prototype, "numberSpriteAtlas", undefined), __decorate([M({
            'type': cc.SpriteAtlas,
            'tooltip': false
          })], z.prototype, "numberBlurSpriteAtlas", undefined), __decorate([M({
            'type': [cc.SpriteFrame],
            'tooltip': false
          })], z.prototype, "numberSprite", undefined), __decorate([M({
            'type': [cc.SpriteFrame]
          })], z.prototype, "numberBlurSprite", undefined), __decorate([M({
            'type': cc.SpriteFrame
          })], z.prototype, "kSprite", undefined), __decorate([M({
            'type': cc.macro.BlendFactor,
            'tooltip': false
          }), M({
            'type': cc.macro.BlendFactor,
            'tooltip': false
          })], z.prototype, "srcBlendFactor", undefined), __decorate([M({
            'type': cc.macro.BlendFactor,
            'tooltip': false
          })], z.prototype, "dstBlendFactor", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "nodeNumberWidth", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "nodeNumberY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "nodeNumberScale", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "commaWidth", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "commaY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "commaScale", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "decimalWidth", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "decimalY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "decimalScale", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "decimalNumberWidth", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "decimalNumberY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "decimalNumberScale", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "multiplySpriteWidth", undefined), __decorate([M({
            'type': cc.Integer,
            'tooltip': false
          })], z.prototype, "multiplySpriteY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "multiplySpriteScale", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "layoutSpacingX", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "layoutSpacingY", undefined), __decorate([M({
            'type': cc.Float,
            'tooltip': false
          })], z.prototype, "blurScale", undefined), __decorate([M(D)], z.prototype, "spriteColor", undefined), __decorate([M(W)], z.prototype, "disableFixedWidth", undefined), __decorate([M(k)], z.prototype, "enablePrefixNumber", undefined), __decorate([M], z.prototype, "preview", null), __decorate([M({
            'type': cc.String,
            'visible': function () {
              return this.preview;
            }
          })], z.prototype, "previewNumber", null), __decorate([V], z);
        }
      }(C.default);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = NumberDisplayController;
