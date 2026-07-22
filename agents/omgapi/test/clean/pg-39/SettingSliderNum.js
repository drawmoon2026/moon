// module: SettingSliderNum
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function SettingSliderNum(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "89028I5vilAgJwUYY+0IKoT", "SettingSliderNum")) {
    exports.__esModule = true, exports.default = undefined;
    var y = require("Utils"),
      B = cc.Class({
        'extends': cc.Component,
        'properties': {
          'numberLabel': cc.Label,
          'numSprites': [cc.Sprite],
          'pixelSprites': [cc.SpriteFrame],
          'num': 10,
          'shortLine': cc.Node,
          'onColor': cc.Color,
          'offColor': cc.Color,
          'isMin': false
        },
        'setColor': function (x, C) {
          {
            this.onColor = x, this.offColor = C;
          }
        },
        'setDisplayValue': function (x, C) {
          this.numberLabel.string = C, this.numberLabel.node.active = x;
        },
        'onLoad': function () {
          {
            this.isMin && (this.shortLine.active = false);
          }
        },
        'setLight': function (x) {
          x ? (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
        }
      });
    exports.default = B, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSliderNum;
