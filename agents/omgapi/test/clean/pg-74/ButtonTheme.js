// module: ButtonTheme
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function ButtonTheme(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "2a5d1nUeQZE9KCVbljwPCZP", "ButtonTheme")) {
    {
      exports.__esModule = true, exports.default = undefined;
      var m = {};
      m.NONE = 0;
      m.COLOR = 1;
      m.SPRITE = 2;
      m.SCALE = 3;
      var B = {};
      B.tooltip = false;
      B.default = '';
      var X = require("UIAppearanceHelper"),
        Z = cc.Enum(m),
        T = cc.Class({
          'extends': cc.Component,
          'ctor': function () {},
          'editor': false,
          'properties': {
            'transition': {
              'default': Z.NONE,
              'tooltip': false,
              'type': Z,
              'animatable': false,
              'notify': function () {
                this.ws();
              }
            },
            'domainKey': B,
            'colorKey': {
              'tooltip': false,
              'default': '',
              'notify': function () {
                this.Bs();
              }
            }
          },
          'onLoad': function () {
            {
              this.As = this.node.getComponent(cc.Button), this.ws(), this.Bs();
            }
          },
          'ws': function () {
            var M = this.As;
            M && (M.transition = this.transition);
          },
          'Bs': function () {
            {
              var M = this.As;
              if (M && this.transition == Z.COLOR) {
                {
                  this.domainKey, this.colorKey;
                  var C = X.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".normal"),
                    V = X.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".pressed"),
                    N = X.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".hover"),
                    q = X.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".disabled");
                  C && (M.node.opacity = C.getA(), M.normalColor = C, M.pressedColor = V, M.hoverColor = N, M.disabledColor = q);
                }
              }
            }
          }
        });
      exports.default = T, module.exports = exports.default, cc._RF.pop();
    }
  }
}
module.exports = ButtonTheme;
