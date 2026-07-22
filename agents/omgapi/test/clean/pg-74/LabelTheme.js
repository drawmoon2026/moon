// module: LabelTheme
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function LabelTheme(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "05b6c8yPn1LZIH3AnSTBq8U", "LabelTheme")) {
    exports.__esModule = true, exports.default = undefined;
    var M = {};
    M.oc = "_updateRichText";
    M.cc = "_isBold";
    M.hc = "_isItalic";
    var C,
      V = function (k) {
        if (k && k.__esModule) return k;
        if (null === k || "object" != typeof k && "function" != typeof k) return {
          'default': k
        };
        var Y = U(undefined);
        if (Y && Y.has(k)) return Y.get(k);
        var y = {},
          z = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var S in k) if ("default" !== S && Object.prototype.hasOwnProperty.call(k, S)) {
          {
            var P = z ? Object.getOwnPropertyDescriptor(k, S) : null;
            P && (P.get || P.set) ? Object.defineProperty(y, S, P) : y[S] = k[S];
          }
        }
        return y.default = k, Y && Y.set(k, y), y;
      }(require("ResRC")),
      N = require("ResourceQualifierHelper"),
      q = require("Utils"),
      f = require("UIAppearanceHelper"),
      g = cc.Enum(M),
      K = (0, q.getCocosMajor)();
    C = "number" == typeof K && K >= 4 ? function (k) {
      return k.markForRender(true);
    } : function (k) {
      return k.markForUpdateRenderData(true);
    };
    var O = {};
    O.tooltip = false;
    O.default = '';
    var x = {};
    x.tooltip = false;
    x.default = "theme_font";
    var p = {};
    p.tooltip = false;
    p.default = '';
    var b = {};
    b.tooltip = false;
    b.default = '';
    var L = {};
    L.tooltip = false;
    L.default = '';
    var H = cc.Class({
      'extends': cc.Component,
      'ctor': function () {},
      'editor': false,
      'properties': {
        'followThemeColor': false,
        'followFont': false,
        'domainKey': O,
        'colorKey': {
          'tooltip': false,
          'default': '',
          'notify': function () {
            {
              this.rc();
            }
          }
        },
        'fontFamilyKey': x,
        'fontKey': p,
        'fontWeightKey': b,
        'fontStyleKey': L
      },
      'onLoad': function () {
        this.nc = this.node.getComponent(cc.Label), this.nc || (this.nc = this.node.getComponent(cc.RichText)), this.rc(), this.ac();
      },
      'rc': function () {
        if (this.followThemeColor) {
          {
            var k = this.node;
            if (this.domainKey, this.colorKey, k && '' != this.colorKey) {
              {
                var Y = f.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey);
                k.color = new cc.Color(Y.r, Y.g, Y.b), k.opacity = Y.getA();
              }
            }
          }
        }
      },
      'ac': function () {
        var k = this;
        if (this.followFont) {
          var Y = this.nc;
          if (Y) {
            if (Y.offsetY = (0, f.getOffsetY)(), this.fontFamilyKey && this.domainKey) {
              {
                var y = f.uiAppearanceHelper.v(this.domainKey + '.' + this.fontFamilyKey);
                this.uc(y);
              }
            }
            if (this.fontWeightKey) {
              var z = this.fontWeightKey;
              this.lc(z);
            }
            if (this.fontStyleKey) {
              var S = this.fontStyleKey;
              this.fc(S);
            }
            if (!this.fontFamilyKey && this.fontKey && this.domainKey) {
              var P = f.uiAppearanceHelper.v(this.domainKey + '.' + this.fontKey);
              if ("object" == typeof P) return void this.dc(P);
              if (P) {
                {
                  var G = (0, N.getResourceURL)(P);
                  return void (G && V.load(G, cc.Font, function (v, A) {
                    v || k.dc(A);
                  }));
                }
              }
            }
          }
        }
      },
      'dc': function (k) {
        var Y = this.nc;
        cc.isValid(this.node) && (Y.font = k, Y instanceof cc.Label ? C(Y) : Y instanceof cc.RichText && Y[g.oc]());
      },
      'uc': function (k) {
        var Y = this.nc;
        cc.isValid(this.node) && (Y.fontFamily = k, Y instanceof cc.Label ? C(Y) : Y instanceof cc.RichText && Y[g.oc]());
      },
      'lc': function (k) {
        {
          var Y = this.nc;
          cc.isValid(this.node) && (Y[g.cc] = k, Y instanceof cc.Label ? C(Y) : cc.RichText);
        }
      },
      'fc': function (k) {
        var Y = this.nc;
        cc.isValid(this.node) && (Y[g.hc] = k, Y instanceof cc.Label ? C(Y) : cc.RichText);
      }
    });
    exports.default = H, module.exports = exports.default, cc._RF.pop();
  }
  function U(k) {
    if ("function" != typeof WeakMap) return null;
    var Y = new WeakMap(),
      y = new WeakMap();
    return (U = function (z) {
      {
        return z ? y : Y;
      }
    })(k);
  }
}
module.exports = LabelTheme;
