// module: GameInitializationHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function GameInitializationHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "b3a04bieS1EsYWkuqlKhqB3", "GameInitializationHandler")) {
    var c = System.get("bvframework").GameInitializationHandler;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = GameInitializationHandler;
