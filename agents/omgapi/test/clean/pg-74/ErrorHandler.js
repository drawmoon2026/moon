// module: ErrorHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function ErrorHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "933099S7qNPvb+XKiLo98KQ", "ErrorHandler")) {
    {
      var c = System.get("bvframework").ErrorHandler;
      for (var j in c) module.exports[j] = c[j];
      module.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = ErrorHandler;
