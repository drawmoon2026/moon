// module: AnimParticleSystemPoolHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module, exports)
function AnimParticleSystemPoolHandler(Q, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "90167wb5w5JpKAkqWQq6cj8", "AnimParticleSystemPoolHandler")) {
    exports.__esModule = true, exports.default = undefined;
    var j = cc.Class({
      'extends': cc.Component,
      'unuse': function () {
        var I = this.node.getComponent(cc.Animation);
        I && I.stop();
      }
    });
    exports.default = j, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = AnimParticleSystemPoolHandler;
