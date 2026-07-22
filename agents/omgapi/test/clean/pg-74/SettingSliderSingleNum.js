// module: SettingSliderSingleNum
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, c)
function SettingSliderSingleNum(Q, F, c) {
  'use strict';

  if (!cc._RF.push(F, "449bftyQ69GBqYbHra7PRW2", "SettingSliderSingleNum")) {
    c.__esModule = true, c.default = undefined;
    var j = Q("Utils"),
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
    c.default = I, F.exports = c.default, cc._RF.pop();
  }
}
module.exports = SettingSliderSingleNum;
