// module: GameUtils
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function GameUtils(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "576e78TekpIpIcjjcHFmVOq", "GameUtils")) {
    var c = System.get("bvframework").GameUtils;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameUtils;
