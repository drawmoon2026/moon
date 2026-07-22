// module: AnimParticleSystemPoolHandler
// Cocos 模块函数,参数 (require, module, exports) = (l, module, exports)
function AnimParticleSystemPoolHandler(l, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "90167wb5w5JpKAkqWQq6cj8", "AnimParticleSystemPoolHandler")) {
    exports.__esModule = true, exports.default = undefined;
    var y = cc.Class({
      'extends': cc.Component,
      'unuse': function () {
        var B = this.node.getComponent(cc.Animation);
        B && B.stop();
      }
    });
    exports.default = y, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = AnimParticleSystemPoolHandler;
