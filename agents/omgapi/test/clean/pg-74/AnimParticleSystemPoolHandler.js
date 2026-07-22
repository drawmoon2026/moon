// module: AnimParticleSystemPoolHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, c)
function AnimParticleSystemPoolHandler(Q, F, c) {
  'use strict';

  if (!cc._RF.push(F, "90167wb5w5JpKAkqWQq6cj8", "AnimParticleSystemPoolHandler")) {
    {
      c.__esModule = true, c.default = undefined;
      var j = cc.Class({
        'extends': cc.Component,
        'unuse': function () {
          var I = this.node.getComponent(cc.Animation);
          I && I.stop();
        }
      });
      c.default = j, F.exports = c.default, cc._RF.pop();
    }
  }
}
module.exports = AnimParticleSystemPoolHandler;
