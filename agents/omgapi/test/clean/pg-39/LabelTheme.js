// module: LabelTheme
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function LabelTheme(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "05b6c8yPn1LZIH3AnSTBq8U", "LabelTheme")) {
    exports.__esModule = true, exports.default = undefined;
    var q = {};
    q.uc = "_updateRichText";
    q.lc = "_isBold";
    q.fc = "_isItalic";
    var m,
      D = function (Y) {
        if (Y && Y.__esModule) return Y;
        if (null === Y || "object" != typeof Y && "function" != typeof Y) return {
          'default': Y
        };
        var X = T(undefined);
        if (X && X.has(Y)) return X.get(Y);
        var E = {},
          F = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var N in Y) if ("default" !== N && Object.prototype.hasOwnProperty.call(Y, N)) {
          var Z = F ? Object.getOwnPropertyDescriptor(Y, N) : null;
          Z && (Z.get || Z.set) ? Object.defineProperty(E, N, Z) : E[N] = Y[N];
        }
        return E.default = Y, X && X.set(Y, E), E;
      }(require("ResRC")),
      W = require("ResourceQualifierHelper"),
      k = require("Utils"),
      z = require("UIAppearanceHelper"),
      L = cc.Enum(q),
      v = (0, k.getCocosMajor)();
    m = "number" == typeof v && v >= 4 ? function (Y) {
      return Y.markForRender(true);
    } : function (Y) {
      {
        return Y.markForUpdateRenderData(true);
      }
    };
    var b = {};
    b.tooltip = false;
    b.default = '';
    var U = {};
    U.tooltip = false;
    U.default = "theme_font";
    var Q = {};
    Q.tooltip = false;
    Q.default = '';
    var w = {};
    w.tooltip = false;
    w.default = '';
    var P = {};
    P.tooltip = false;
    P.default = '';
    var R = cc.Class({
      'extends': cc.Component,
      'ctor': function () {},
      'editor': false,
      'properties': {
        'followThemeColor': false,
        'followFont': false,
        'domainKey': b,
        'colorKey': {
          'tooltip': false,
          'default': '',
          'notify': function () {
            this.dc();
          }
        },
        'fontFamilyKey': U,
        'fontKey': Q,
        'fontWeightKey': w,
        'fontStyleKey': P
      },
      'onLoad': function () {
        this.ac = this.node.getComponent(cc.Label), this.ac || (this.ac = this.node.getComponent(cc.RichText)), this.dc(), this.vc();
      },
      'dc': function () {
        if (this.followThemeColor) {
          var Y = this.node;
          if (this.domainKey, this.colorKey, Y && '' != this.colorKey) {
            var X = z.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey);
            Y.color = new cc.Color(X.r, X.g, X.b), Y.opacity = X.getA();
          }
        }
      },
      'vc': function () {
        var Y = this;
        if (this.followFont) {
          var X = this.ac;
          if (X) {
            if (X.offsetY = (0, z.getOffsetY)(), this.fontFamilyKey && this.domainKey) {
              var E = z.uiAppearanceHelper.v(this.domainKey + '.' + this.fontFamilyKey);
              this._c(E);
            }
            if (this.fontWeightKey) {
              {
                var F = this.fontWeightKey;
                this.bc(F);
              }
            }
            if (this.fontStyleKey) {
              var N = this.fontStyleKey;
              this.mc(N);
            }
            if (!this.fontFamilyKey && this.fontKey && this.domainKey) {
              var Z = z.uiAppearanceHelper.v(this.domainKey + '.' + this.fontKey);
              if ("object" == typeof Z) return void this.Sc(Z);
              if (Z) {
                var p = (0, W.getResourceURL)(Z);
                return void (p && D.load(p, cc.Font, function (g, f) {
                  g || Y.Sc(f);
                }));
              }
            }
          }
        }
      },
      'Sc': function (Y) {
        var X = this.ac;
        cc.isValid(this.node) && (X.font = Y, X instanceof cc.Label ? m(X) : X instanceof cc.RichText && X[L.uc]());
      },
      '_c': function (Y) {
        var X = this.ac;
        cc.isValid(this.node) && (X.fontFamily = Y, X instanceof cc.Label ? m(X) : X instanceof cc.RichText && X[L.uc]());
      },
      'bc': function (Y) {
        {
          var X = this.ac;
          cc.isValid(this.node) && (X[L.lc] = Y, X instanceof cc.Label ? m(X) : cc.RichText);
        }
      },
      'mc': function (Y) {
        var X = this.ac;
        cc.isValid(this.node) && (X[L.fc] = Y, X instanceof cc.Label ? m(X) : cc.RichText);
      }
    });
    exports.default = R, module.exports = exports.default, cc._RF.pop();
  }
  function T(Y) {
    if ("function" != typeof WeakMap) return null;
    var X = new WeakMap(),
      E = new WeakMap();
    return (T = function (F) {
      return F ? E : X;
    })(Y);
  }
}
module.exports = LabelTheme;
