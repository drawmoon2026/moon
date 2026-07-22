// module: LinePrefabController
// Cocos 模块函数,参数 (require, module, exports) = (Q, module, exports)
function LinePrefabController(Q, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "275baJMs+tIcoOItOeSbgwO", "LinePrefabController")) {
    exports.__esModule = true, exports.default = undefined;
    var j = cc.Class({
      'extends': cc.Component,
      'properties': {},
      'onLoad': function () {},
      'unuse': function () {
        var I = this.node.getComponent(cc.Animation);
        I && I.setCurrentTime(0) && I.stop(), this.hi = null;
      },
      'setAnimTimeFrameCallback': function (I) {
        {
          this.hi = I;
        }
      },
      'getAnimTimeFrameCallback': function () {
        {
          return this.hi;
        }
      },
      'onAnimTimeFrameCallback': function () {
        var I = this.hi;
        I && I();
      },
      'destroy': function () {
        {
          this.hi = null;
          var I = this.node.getComponent(cc.Animation);
          I && I.stop(), this.node.destroy(), this._super();
        }
      }
    });
    exports.default = j, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = LinePrefabController;
