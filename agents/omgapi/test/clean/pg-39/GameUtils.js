// module: GameUtils
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function GameUtils(l, module) {
  'use strict';

  if (!cc._RF.push(module, "576e78TekpIpIcjjcHFmVOq", "GameUtils")) {
    var O = System.get("bvframework").GameUtils;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameUtils;
