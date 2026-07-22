// module: GameMaintenanceHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function GameMaintenanceHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "6c833L7mQpG+JThxZci79NX", "GameMaintenanceHandler")) {
    var c = System.get("bvframework").GameMaintenanceHandler;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameMaintenanceHandler;
