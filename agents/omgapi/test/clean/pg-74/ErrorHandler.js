// module: ErrorHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function ErrorHandler(Q, F) {
  'use strict';

  if (!cc._RF.push(F, "933099S7qNPvb+XKiLo98KQ", "ErrorHandler")) {
    {
      var c = System.get("bvframework").ErrorHandler;
      for (var j in c) F.exports[j] = c[j];
      F.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = ErrorHandler;
