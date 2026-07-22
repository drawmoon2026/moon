// module: SettingSliderSingleNum
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function SettingSliderSingleNum(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "449bftyQ69GBqYbHra7PRW2", "SettingSliderSingleNum")) {
    exports.__esModule = true, exports.default = undefined;
    var y = require("Utils"),
      B = cc.Class({
        'extends': cc.Component,
        'properties': {
          'numberLabel': cc.Label,
          'num': 10,
          'onColor': cc.Color,
          'offColor': cc.Color
        },
        'onLoad': function () {
          this.numberLabel.string = this.num;
        },
        'setColor': function (x, C) {
          {
            this.onColor = x, this.offColor = C;
          }
        },
        'setLight': function (x) {
          {
            x ? (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, y.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
          }
        }
      });
    exports.default = B, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSliderSingleNum;
