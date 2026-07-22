// module: NumberDisplayController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberDisplayController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "e13cc9FLShL66GevrFVSv5p", "NumberDisplayController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("Utils"),
      X = F("NumberDisplayInterface"),
      Z = cc["_decorator"],
      T = Z["ccclass"],
      M = Z["property"],
      C = function (V) {
        function N() {
          var l = null !== V && V["apply"](this, arguments) || this;
          return l["numberSpriteAtlas"] = void 0, l["numberBlurSpriteAtlas"] = void 0, l["numberSprite"] = [], l["numberBlurSprite"] = [], l["kSprite"] = void 0, l["srcBlendFactor"] = cc["macro"]["BlendFactor"]["SRC_ALPHA"], l["dstBlendFactor"] = cc["macro"]["BlendFactor"]["ONE_MINUS_SRC_ALPHA"], l["nodeNumberWidth"] = 141, l["nodeNumberY"] = 0, l["nodeNumberScale"] = 1, l["commaWidth"] = 50, l["commaY"] = 0, l["commaScale"] = 1, l["decimalWidth"] = 60, l["decimalY"] = 0, l["decimalScale"] = 1, l["decimalNumberWidth"] = 121, l["decimalNumberY"] = 1, l["decimalNumberScale"] = 0.9, l["multiplySpriteWidth"] = 50, l["multiplySpriteY"] = 0, l["multiplySpriteScale"] = 1, l["layoutSpacingX"] = 0, l["layoutSpacingY"] = 0, l["blurScale"] = 1, l["spriteColor"] = "FFFFFF", l["disableFixedWidth"] = !1, l["enablePrefixNumber"] = !1, l['df'] = !1, l['vf'] = !1, l['_f'] = '0', l['mf'] = 0, l['bf'] = 0, l["attributesForNumberContainer"] = void 0, l;
        }
        var q = {};
        q["tooltip"] = !1;
        var f = {};
        f["tooltip"] = !1;
        var g = {};
        g["tooltip"] = !1;
        return __extends(N, V), Object["defineProperty"](N["prototype"], "preview", {
          'get': function () {
            return this['vf'];
          },
          'set': function (l) {
            this['vf'] = l, l ? this["displayNumber"](this["previewNumber"]) : this["clear"]();
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](N["prototype"], "previewNumber", {
          'get': function () {
            {
              return this['_f'];
            }
          },
          'set': function (l) {
            {
              this['_f'] = l, this["displayNumber"](l);
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](N["prototype"], "currentNumberBlurSprite", {
          'get': function () {
            {
              return this["numberBlurSpriteAtlas"] ? this["numberBlurSpriteAtlas"]["getSpriteFrames"]() : this["numberBlurSprite"];
            }
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](N["prototype"], "currentNumberSprite", {
          'get': function () {
            return this["numberSpriteAtlas"] ? this["numberSpriteAtlas"]["getSpriteFrames"]() : this["numberSprite"];
          },
          'enumerable': !1,
          'configurable': !0
        }), N["prototype"]["onLoad"] = function () {
          this['mf'] = this["numberContainer"]["scaleX"], this['bf'] = this["numberContainer"]["scaleY"], this["numberContainer"]['on'](cc["Node"]["EventType"]["SIZE_CHANGED"], this["resizeNumberIfNeeded"], this);
        }, N["prototype"]["getNumberList"] = function (l, K) {
          {
            var O = /(?:\d+)(?:\.\d+)?/gm["exec"](l["toString"]());
            if (O) {
              {
                var x = parseFloat(O[0]),
                  p = this['pf'](x, K),
                  b = "number" == typeof l ? p : l["replace"](O[0], p),
                  L = Array["from"](b);
                return this["enablePrefixNumber"] && L["unshift"]('x'), L;
              }
            }
            return Array["from"](l["toString"]());
          }
        }, N["prototype"]["getSpriteConfig"] = function (l) {
          switch (l) {
            case ',':
              var K = {};
              K["width"] = this["commaWidth"];
              K["scale"] = this["commaScale"];
              K['y'] = this["commaY"];
              K["spriteFrame"] = this["currentNumberSprite"][10];
              return K;
            case '.':
              var O = {};
              O["width"] = this["decimalWidth"];
              O["scale"] = this["decimalScale"];
              O['y'] = this["decimalY"];
              O["spriteFrame"] = this["currentNumberSprite"][11];
              return O;
            case 'x':
              var x = {};
              x["width"] = this["multiplySpriteWidth"];
              x["scale"] = this["multiplySpriteScale"];
              x['y'] = this["multiplySpriteY"];
              x["spriteFrame"] = this["currentNumberSprite"][12];
              return x;
            case 'k':
              var p = {};
              p["width"] = this["nodeNumberWidth"];
              p["scale"] = this["nodeNumberScale"];
              p['y'] = this["nodeNumberY"];
              p["spriteFrame"] = this["kSprite"];
              return p;
            case '\x20':
              var b = {};
              b["width"] = this["commaWidth"];
              b["scale"] = this["commaScale"];
              b['y'] = this["commaY"];
              b["spriteFrame"] = void 0;
              return b;
            default:
              return;
          }
        }, N["prototype"]["getNumberSpriteConfig"] = function (l, K, O) {
          {
            return O ? {
              'scale': K ? this["decimalNumberScale"] * this["blurScale"] : this["decimalNumberScale"],
              'width': this["decimalNumberWidth"],
              'y': this["decimalNumberY"],
              'spriteFrame': K ? this["currentNumberBlurSprite"][parseInt(l, 10)] : this["currentNumberSprite"][parseInt(l, 10)]
            } : {
              'scale': this["nodeNumberScale"],
              'width': this["nodeNumberWidth"],
              'y': this["nodeNumberY"],
              'spriteFrame': K ? this["currentNumberBlurSprite"][parseInt(l, 10)] : this["currentNumberSprite"][parseInt(l, 10)]
            };
          }
        }, N["prototype"]["displayNumber"] = function (K, O, x) {
          void 0 === O && (O = !0), this['Sf']();
          var p = this["getNumberList"](K, O);
          p = p["reverse"]();
          var b = !1;
          this['gf'](p["length"]);
          for (var L = 0; L < p["length"]; L++) {
            var H = this["dequeueNumberContainer"](L),
              U = H["getChildByName"]("numberSprite")["getComponent"](cc["Sprite"]),
              k = this["getSpriteConfig"](p[L]);
            if (k) H["width"] = k["width"], H["scaleX"] = H["scaleY"] = k["scale"], U["node"]['y'] = k['y'], U["spriteFrame"] = k["spriteFrame"];else {
              b = !1;
              var Y = B["getDefaultCurrencyFormat"]()["decimalSeparator"],
                y = L < p["indexOf"](Y);
              y && -1 !== p["indexOf"](Y) && (b = !O);
              var z = this["getNumberSpriteConfig"](p[L], b, y && -1 !== p["indexOf"](Y));
              H["scale"] = z["scale"], H["width"] = z["width"], U["node"]['y'] = z['y'], U["spriteFrame"] = z["spriteFrame"];
            }
            (this["disableFixedWidth"] || -1 === H["width"]) && (H["width"] = U["node"]["width"]), this['Cf'](L, p[L], b, H);
          }
          x && x();
        }, N["prototype"]['gf'] = function (l) {
          var K = this["numberContainer"]["children"]["length"];
          if (l < K) for (var O = K - l; 0 !== O;) {
            var x = this["numberContainer"]["children"][0];
            x["removeFromParent"](), x["destroy"](), O--;
          }
        }, N["prototype"]["clear"] = function () {
          this["numberContainer"]["removeAllChildren"](), this['Mf'](), this["numberContainer"]["width"] = 0;
        }, N["prototype"]['Mf'] = function () {
          this['mf'] && this['bf'] && (this["numberContainer"]["scaleX"] = this['mf'], this["numberContainer"]["scaleY"] = this['bf']);
        }, N["prototype"]['pf'] = function (l, K) {
          var x = '',
            p = 1;
          this["enableShortenNumber"] && l > 999 && (p = 1000, x = 'k');
          var b = !B["getDefaultCurrencyFormat"]()["hideDecimal"] && this["enableDecimal"];
          return O = b ? Math["floor"](O / p) : Math["round"](O / p), this["enableComma"] && (O = this["numberWithComma"](O)), b && (O += this['yf'](l, K)), O + x;
        }, N["prototype"]['yf'] = function (l, K) {
          var O,
            x,
            p,
            b = B["getDefaultCurrencyFormat"]()["decimalSeparator"];
          this["enableShortenNumber"] && l > 999 ? (O = Math["round"](l / 100) / 10, x = 2, p = K ? '' : b + '0') : (O = l, x = 3, p = b + '00');
          var L = O["toString"]();
          if (-1 !== L["indexOf"]('.')) for (p = b + (p = L["substring"](L["indexOf"]('.') + 1, L["indexOf"]('.') + x)); p["length"] !== x;) p += '0';
          return p;
        }, N["prototype"]['Cf'] = function (l, K, O, x) {
          this["attributesForNumberContainer"] && this["attributesForNumberContainer"](l, K, O, x);
        }, N["prototype"]["dequeueNumberContainer"] = function (l) {
          var K = this["numberContainer"]["children"][l];
          if (!K) {
            (K = new cc["Node"]("container"))["width"] = this["nodeNumberWidth"], this["numberContainer"]["addChild"](K);
            var O = new cc["Node"]("numberSprite");
            O["addComponent"](cc["Sprite"]);
            var x = O["getComponent"](cc["Sprite"]);
            x["srcBlendFactor"] = this["srcBlendFactor"], x["dstBlendFactor"] = this["dstBlendFactor"], K["addChild"](O), O["color"] = new cc["Color"]()["fromHEX"](this["spriteColor"]);
          }
          return K;
        }, N["prototype"]["resizeNumberIfNeeded"] = function () {
          var l = this["numberContainer"]["width"],
            K = this["maxContainerSize"] / l,
            O = l * this["numberContainer"]["scaleX"];
          isFinite(K) && Math["round"](O) > this["maxContainerSize"] && (this["numberContainer"]["scale"] = K);
        }, N["prototype"]['wf'] = function (l, K, O) {
          this["numberContainer"]["runAction"](cc["sequence"](cc["scaleTo"](0.08, l), cc["scaleTo"](0.05, K), cc["callFunc"](O, this)));
        }, N["prototype"]['Sf'] = function () {
          {
            if (!this['ff']) {
              var l = this['ff'] = this["numberContainer"]["getComponent"](cc["Layout"]);
              l || (l = this['ff'] = this["numberContainer"]["addComponent"](cc["Layout"])), l["resizeMode"] = cc["Layout"]["ResizeMode"]["CONTAINER"], l["horizontalDirection"] = cc["Layout"]["HorizontalDirection"]["RIGHT_TO_LEFT"], l["type"] = cc["Layout"]["Type"]["HORIZONTAL"], l["spacingX"] = this["layoutSpacingX"], l["spacingY"] = this["layoutSpacingY"];
            }
          }
        }, N["prototype"]["onDestroy"] = function () {
          this["attributesForNumberContainer"] = void 0;
        }, __decorate([M({
          'type': cc["SpriteAtlas"],
          'tooltip': !1
        })], N["prototype"], "numberSpriteAtlas", void 0), __decorate([M({
          'type': cc["SpriteAtlas"],
          'tooltip': !1
        })], N["prototype"], "numberBlurSpriteAtlas", void 0), __decorate([M({
          'type': [cc["SpriteFrame"]],
          'tooltip': !1
        })], N["prototype"], "numberSprite", void 0), __decorate([M({
          'type': [cc["SpriteFrame"]]
        })], N["prototype"], "numberBlurSprite", void 0), __decorate([M({
          'type': cc["SpriteFrame"]
        })], N["prototype"], "kSprite", void 0), __decorate([M({
          'type': cc["macro"]["BlendFactor"],
          'tooltip': !1
        }), M({
          'type': cc["macro"]["BlendFactor"],
          'tooltip': !1
        })], N["prototype"], "srcBlendFactor", void 0), __decorate([M({
          'type': cc["macro"]["BlendFactor"],
          'tooltip': !1
        })], N["prototype"], "dstBlendFactor", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "nodeNumberWidth", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "nodeNumberY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "nodeNumberScale", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "commaWidth", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "commaY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "commaScale", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "decimalWidth", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "decimalY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "decimalScale", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "decimalNumberWidth", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "decimalNumberY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "decimalNumberScale", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "multiplySpriteWidth", void 0), __decorate([M({
          'type': cc["Integer"],
          'tooltip': !1
        })], N["prototype"], "multiplySpriteY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "multiplySpriteScale", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "layoutSpacingX", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "layoutSpacingY", void 0), __decorate([M({
          'type': cc["Float"],
          'tooltip': !1
        })], N["prototype"], "blurScale", void 0), __decorate([M(q)], N["prototype"], "spriteColor", void 0), __decorate([M(f)], N["prototype"], "disableFixedWidth", void 0), __decorate([M(g)], N["prototype"], "enablePrefixNumber", void 0), __decorate([M({
          'type': cc["Float"],
          'visible': function () {
            {
              return this["preview"];
            }
          }
        })], N["prototype"], "previewNumber", null), __decorate([T], N);
      }(X["default"]);
    I["default"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = NumberDisplayController;
