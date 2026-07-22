// module: SettingSliderNum
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function SettingSliderNum(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "89028I5vilAgJwUYY+0IKoT", "SettingSliderNum")) {
    exports.__esModule = true, exports.default = undefined;
    var j = require("Utils"),
      I = cc.Class({
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
        'setColor': function (m, B) {
          this.onColor = m, this.offColor = B;
        },
        'setDisplayValue': function (m, B) {
          this.numberLabel.string = B, this.numberLabel.node.active = m;
        },
        'onLoad': function () {
          this.isMin && (this.shortLine.active = false);
        },
        'setLight': function (m) {
          m ? (0, j.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, j.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
        }
      });
    exports.default = I, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSliderNum;
