// module: ButtonTheme
// Cocos 模块函数,参数 (require, module, exports) = (c, j, I)
function ButtonTheme(c, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "2a5d1nUeQZE9KCVbljwPCZP", "ButtonTheme")) {
    {
      I["__esModule"] = !0, I["default"] = void 0;
      var m = {};
      m["NONE"] = 0;
      m["COLOR"] = 1;
      m["SPRITE"] = 2;
      m["SCALE"] = 3;
      var B = {};
      B["tooltip"] = !1;
      B["default"] = '';
      var X = c("UIAppearanceHelper"),
        Z = cc["Enum"](m),
        T = cc["Class"]({
          'extends': cc["Component"],
          'ctor': function () {},
          'editor': !1,
          'properties': {
            'transition': {
              'default': Z["NONE"],
              'tooltip': !1,
              'type': Z,
              'animatable': !1,
              'notify': function () {
                this['ws']();
              }
            },
            'domainKey': B,
            'colorKey': {
              'tooltip': !1,
              'default': '',
              'notify': function () {
                this['Bs']();
              }
            }
          },
          'onLoad': function () {
            {
              this['As'] = this["node"]["getComponent"](cc["Button"]), this['ws'](), this['Bs']();
            }
          },
          'ws': function () {
            var M = this['As'];
            M && (M["transition"] = this["transition"]);
          },
          'Bs': function () {
            {
              var M = this['As'];
              if (M && this["transition"] == Z["COLOR"]) {
                {
                  this["domainKey"], this["colorKey"];
                  var C = X["uiAppearanceHelper"]['v'](this["domainKey"] + '.' + this["colorKey"] + ".normal"),
                    V = X["uiAppearanceHelper"]['v'](this["domainKey"] + '.' + this["colorKey"] + ".pressed"),
                    N = X["uiAppearanceHelper"]['v'](this["domainKey"] + '.' + this["colorKey"] + ".hover"),
                    q = X["uiAppearanceHelper"]['v'](this["domainKey"] + '.' + this["colorKey"] + ".disabled");
                  C && (M["node"]["opacity"] = C["getA"](), M["normalColor"] = C, M["pressedColor"] = V, M["hoverColor"] = N, M["disabledColor"] = q);
                }
              }
            }
          }
        });
      I["default"] = T, j["exports"] = I["default"], cc["_RF"]["pop"]();
    }
  }
}
module.exports = ButtonTheme;
