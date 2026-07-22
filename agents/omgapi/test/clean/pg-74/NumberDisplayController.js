// module: NumberDisplayController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberDisplayController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "e13cc9FLShL66GevrFVSv5p", "NumberDisplayController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("Utils"),
      X = require("NumberDisplayInterface"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function N() {
          var l = null !== V && V.apply(this, arguments) || this;
          return l.numberSpriteAtlas = undefined, l.numberBlurSpriteAtlas = undefined, l.numberSprite = [], l.numberBlurSprite = [], l.kSprite = undefined, l.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA, l.dstBlendFactor = cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA, l.nodeNumberWidth = 141, l.nodeNumberY = 0, l.nodeNumberScale = 1, l.commaWidth = 50, l.commaY = 0, l.commaScale = 1, l.decimalWidth = 60, l.decimalY = 0, l.decimalScale = 1, l.decimalNumberWidth = 121, l.decimalNumberY = 1, l.decimalNumberScale = 0.9, l.multiplySpriteWidth = 50, l.multiplySpriteY = 0, l.multiplySpriteScale = 1, l.layoutSpacingX = 0, l.layoutSpacingY = 0, l.blurScale = 1, l.spriteColor = "FFFFFF", l.disableFixedWidth = false, l.enablePrefixNumber = false, l.df = false, l.vf = false, l._f = '0', l.mf = 0, l.bf = 0, l.attributesForNumberContainer = undefined, l;
        }
        var q = {};
        q.tooltip = false;
        var f = {};
        f.tooltip = false;
        var g = {};
        g.tooltip = false;
        return __extends(N, V), Object.defineProperty(N.prototype, "preview", {
          'get': function () {
            return this.vf;
          },
          'set': function (l) {
            this.vf = l, l ? this.displayNumber(this.previewNumber) : this.clear();
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "previewNumber", {
          'get': function () {
            return this._f;
          },
          'set': function (l) {
            this._f = l, this.displayNumber(l);
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "currentNumberBlurSprite", {
          'get': function () {
            return this.numberBlurSpriteAtlas ? this.numberBlurSpriteAtlas.getSpriteFrames() : this.numberBlurSprite;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(N.prototype, "currentNumberSprite", {
          'get': function () {
            return this.numberSpriteAtlas ? this.numberSpriteAtlas.getSpriteFrames() : this.numberSprite;
          },
          'enumerable': false,
          'configurable': true
        }), N.prototype.onLoad = function () {
          this.mf = this.numberContainer.scaleX, this.bf = this.numberContainer.scaleY, this.numberContainer.on(cc.Node.EventType.SIZE_CHANGED, this.resizeNumberIfNeeded, this);
        }, N.prototype.getNumberList = function (l, K) {
          var O = /(?:\d+)(?:\.\d+)?/gm.exec(l.toString());
          if (O) {
            var x = parseFloat(O[0]),
              p = this.pf(x, K),
              b = "number" == typeof l ? p : l.replace(O[0], p),
              L = Array.from(b);
            return this.enablePrefixNumber && L.unshift('x'), L;
          }
          return Array.from(l.toString());
        }, N.prototype.getSpriteConfig = function (l) {
          switch (l) {
            case ',':
              var K = {};
              K.width = this.commaWidth;
              K.scale = this.commaScale;
              K.y = this.commaY;
              K.spriteFrame = this.currentNumberSprite[10];
              return K;
            case '.':
              var O = {};
              O.width = this.decimalWidth;
              O.scale = this.decimalScale;
              O.y = this.decimalY;
              O.spriteFrame = this.currentNumberSprite[11];
              return O;
            case 'x':
              var x = {};
              x.width = this.multiplySpriteWidth;
              x.scale = this.multiplySpriteScale;
              x.y = this.multiplySpriteY;
              x.spriteFrame = this.currentNumberSprite[12];
              return x;
            case 'k':
              var p = {};
              p.width = this.nodeNumberWidth;
              p.scale = this.nodeNumberScale;
              p.y = this.nodeNumberY;
              p.spriteFrame = this.kSprite;
              return p;
            case '\x20':
              var b = {};
              b.width = this.commaWidth;
              b.scale = this.commaScale;
              b.y = this.commaY;
              b.spriteFrame = undefined;
              return b;
            default:
              return;
          }
        }, N.prototype.getNumberSpriteConfig = function (l, K, O) {
          return O ? {
            'scale': K ? this.decimalNumberScale * this.blurScale : this.decimalNumberScale,
            'width': this.decimalNumberWidth,
            'y': this.decimalNumberY,
            'spriteFrame': K ? this.currentNumberBlurSprite[parseInt(l, 10)] : this.currentNumberSprite[parseInt(l, 10)]
          } : {
            'scale': this.nodeNumberScale,
            'width': this.nodeNumberWidth,
            'y': this.nodeNumberY,
            'spriteFrame': K ? this.currentNumberBlurSprite[parseInt(l, 10)] : this.currentNumberSprite[parseInt(l, 10)]
          };
        }, N.prototype.displayNumber = function (K, O, x) {
          undefined === O && (O = true), this.Sf();
          var p = this.getNumberList(K, O);
          p = p.reverse();
          var b = false;
          this.gf(p.length);
          for (var L = 0; L < p.length; L++) {
            var H = this.dequeueNumberContainer(L),
              U = H.getChildByName("numberSprite").getComponent(cc.Sprite),
              k = this.getSpriteConfig(p[L]);
            if (k) H.width = k.width, H.scaleX = H.scaleY = k.scale, U.node.y = k.y, U.spriteFrame = k.spriteFrame;else {
              b = false;
              var Y = B.getDefaultCurrencyFormat().decimalSeparator,
                y = L < p.indexOf(Y);
              y && -1 !== p.indexOf(Y) && (b = !O);
              var z = this.getNumberSpriteConfig(p[L], b, y && -1 !== p.indexOf(Y));
              H.scale = z.scale, H.width = z.width, U.node.y = z.y, U.spriteFrame = z.spriteFrame;
            }
            (this.disableFixedWidth || -1 === H.width) && (H.width = U.node.width), this.Cf(L, p[L], b, H);
          }
          x && x();
        }, N.prototype.gf = function (l) {
          var K = this.numberContainer.children.length;
          if (l < K) for (var O = K - l; 0 !== O;) {
            var x = this.numberContainer.children[0];
            x.removeFromParent(), x.destroy(), O--;
          }
        }, N.prototype.clear = function () {
          this.numberContainer.removeAllChildren(), this.Mf(), this.numberContainer.width = 0;
        }, N.prototype.Mf = function () {
          this.mf && this.bf && (this.numberContainer.scaleX = this.mf, this.numberContainer.scaleY = this.bf);
        }, N.prototype.pf = function (l, K) {
          var x = '',
            p = 1;
          this.enableShortenNumber && l > 999 && (p = 1000, x = 'k');
          var b = !B.getDefaultCurrencyFormat().hideDecimal && this.enableDecimal;
          return O = b ? Math.floor(O / p) : Math.round(O / p), this.enableComma && (O = this.numberWithComma(O)), b && (O += this.yf(l, K)), O + x;
        }, N.prototype.yf = function (l, K) {
          var O,
            x,
            p,
            b = B.getDefaultCurrencyFormat().decimalSeparator;
          this.enableShortenNumber && l > 999 ? (O = Math.round(l / 100) / 10, x = 2, p = K ? '' : b + '0') : (O = l, x = 3, p = b + '00');
          var L = O.toString();
          if (-1 !== L.indexOf('.')) for (p = b + (p = L.substring(L.indexOf('.') + 1, L.indexOf('.') + x)); p.length !== x;) p += '0';
          return p;
        }, N.prototype.Cf = function (l, K, O, x) {
          this.attributesForNumberContainer && this.attributesForNumberContainer(l, K, O, x);
        }, N.prototype.dequeueNumberContainer = function (l) {
          var K = this.numberContainer.children[l];
          if (!K) {
            (K = new cc.Node("container")).width = this.nodeNumberWidth, this.numberContainer.addChild(K);
            var O = new cc.Node("numberSprite");
            O.addComponent(cc.Sprite);
            var x = O.getComponent(cc.Sprite);
            x.srcBlendFactor = this.srcBlendFactor, x.dstBlendFactor = this.dstBlendFactor, K.addChild(O), O.color = new cc.Color().fromHEX(this.spriteColor);
          }
          return K;
        }, N.prototype.resizeNumberIfNeeded = function () {
          var l = this.numberContainer.width,
            K = this.maxContainerSize / l,
            O = l * this.numberContainer.scaleX;
          isFinite(K) && Math.round(O) > this.maxContainerSize && (this.numberContainer.scale = K);
        }, N.prototype.wf = function (l, K, O) {
          this.numberContainer.runAction(cc.sequence(cc.scaleTo(0.08, l), cc.scaleTo(0.05, K), cc.callFunc(O, this)));
        }, N.prototype.Sf = function () {
          if (!this.ff) {
            var l = this.ff = this.numberContainer.getComponent(cc.Layout);
            l || (l = this.ff = this.numberContainer.addComponent(cc.Layout)), l.resizeMode = cc.Layout.ResizeMode.CONTAINER, l.horizontalDirection = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, l.type = cc.Layout.Type.HORIZONTAL, l.spacingX = this.layoutSpacingX, l.spacingY = this.layoutSpacingY;
          }
        }, N.prototype.onDestroy = function () {
          this.attributesForNumberContainer = undefined;
        }, __decorate([M({
          'type': cc.SpriteAtlas,
          'tooltip': false
        })], N.prototype, "numberSpriteAtlas", undefined), __decorate([M({
          'type': cc.SpriteAtlas,
          'tooltip': false
        })], N.prototype, "numberBlurSpriteAtlas", undefined), __decorate([M({
          'type': [cc.SpriteFrame],
          'tooltip': false
        })], N.prototype, "numberSprite", undefined), __decorate([M({
          'type': [cc.SpriteFrame]
        })], N.prototype, "numberBlurSprite", undefined), __decorate([M({
          'type': cc.SpriteFrame
        })], N.prototype, "kSprite", undefined), __decorate([M({
          'type': cc.macro.BlendFactor,
          'tooltip': false
        }), M({
          'type': cc.macro.BlendFactor,
          'tooltip': false
        })], N.prototype, "srcBlendFactor", undefined), __decorate([M({
          'type': cc.macro.BlendFactor,
          'tooltip': false
        })], N.prototype, "dstBlendFactor", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "nodeNumberWidth", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "nodeNumberY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "nodeNumberScale", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "commaWidth", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "commaY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "commaScale", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "decimalWidth", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "decimalY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "decimalScale", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "decimalNumberWidth", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "decimalNumberY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "decimalNumberScale", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "multiplySpriteWidth", undefined), __decorate([M({
          'type': cc.Integer,
          'tooltip': false
        })], N.prototype, "multiplySpriteY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "multiplySpriteScale", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "layoutSpacingX", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "layoutSpacingY", undefined), __decorate([M({
          'type': cc.Float,
          'tooltip': false
        })], N.prototype, "blurScale", undefined), __decorate([M(q)], N.prototype, "spriteColor", undefined), __decorate([M(f)], N.prototype, "disableFixedWidth", undefined), __decorate([M(g)], N.prototype, "enablePrefixNumber", undefined), __decorate([M({
          'type': cc.Float,
          'visible': function () {
            return this.preview;
          }
        })], N.prototype, "previewNumber", null), __decorate([T], N);
      }(X.default);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = NumberDisplayController;
