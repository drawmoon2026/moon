// module: ButtonTheme
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function ButtonTheme(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "2a5d1nUeQZE9KCVbljwPCZP", "ButtonTheme")) {
    exports.__esModule = true, exports.default = undefined;
    var x = {};
    x.NONE = 0;
    x.COLOR = 1;
    x.SPRITE = 2;
    x.SCALE = 3;
    var C = {};
    C.tooltip = false;
    C.default = '';
    var H = require("UIAppearanceHelper"),
      r = cc.Enum(x),
      V = cc.Class({
        'extends': cc.Component,
        'ctor': function () {},
        'editor': false,
        'properties': {
          'transition': {
            'default': r.NONE,
            'tooltip': false,
            'type': r,
            'animatable': false,
            'notify': function () {
              this.Cs();
            }
          },
          'domainKey': C,
          'colorKey': {
            'tooltip': false,
            'default': '',
            'notify': function () {
              this.ys();
            }
          }
        },
        'onLoad': function () {
          this.Ms = this.node.getComponent(cc.Button), this.Cs(), this.ys();
        },
        'Cs': function () {
          var M = this.Ms;
          M && (M.transition = this.transition);
        },
        'ys': function () {
          var M = this.Ms;
          if (M && this.transition == r.COLOR) {
            this.domainKey, this.colorKey;
            var q = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".normal"),
              m = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".pressed"),
              D = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".hover"),
              W = H.uiAppearanceHelper.v(this.domainKey + '.' + this.colorKey + ".disabled");
            q && (M.node.opacity = q.getA(), M.normalColor = q, M.pressedColor = m, M.hoverColor = D, M.disabledColor = W);
          }
        }
      });
    exports.default = V, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = ButtonTheme;
