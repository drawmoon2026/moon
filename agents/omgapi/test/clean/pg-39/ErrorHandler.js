// module: ErrorHandler
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function ErrorHandler(l, module) {
  'use strict';

  if (!cc._RF.push(module, "933099S7qNPvb+XKiLo98KQ", "ErrorHandler")) {
    {
      var O = System.get("bvframework").ErrorHandler;
      for (var y in O) module.exports[y] = O[y];
      module.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = ErrorHandler;
