// module: GameInitializationHandler
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function GameInitializationHandler(l, module) {
  'use strict';

  if (!cc._RF.push(module, "b3a04bieS1EsYWkuqlKhqB3", "GameInitializationHandler")) {
    {
      var O = System.get("bvframework").GameInitializationHandler;
      for (var y in O) module.exports[y] = O[y];
      module.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = GameInitializationHandler;
