// module: GameInitializationHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function GameInitializationHandler(Q, F) {
  'use strict';

  if (!cc._RF.push(F, "b3a04bieS1EsYWkuqlKhqB3", "GameInitializationHandler")) {
    {
      var c = System.get("bvframework").GameInitializationHandler;
      for (var j in c) F.exports[j] = c[j];
      F.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = GameInitializationHandler;
