// module: GameTitle
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function GameTitle(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "12eedGFUCVPu7lTHrspCNtZ", "GameTitle")) {
    var c = System.get("bvframework").GameTitle;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameTitle;
