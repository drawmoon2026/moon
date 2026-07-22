// module: SettingSliderSingleNum
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function SettingSliderSingleNum(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "449bftyQ69GBqYbHra7PRW2", "SettingSliderSingleNum")) {
    exports.__esModule = true, exports.default = undefined;
    var j = require("Utils"),
      I = cc.Class({
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
        'setColor': function (m, B) {
          this.onColor = m, this.offColor = B;
        },
        'setLight': function (m) {
          m ? (0, j.setNodeColorWithOpacity)(this.numberLabel.node, this.onColor) : (0, j.setNodeColorWithOpacity)(this.numberLabel.node, this.offColor);
        }
      });
    exports.default = I, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSliderSingleNum;
