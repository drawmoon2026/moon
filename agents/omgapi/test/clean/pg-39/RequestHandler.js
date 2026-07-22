// module: RequestHandler
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function RequestHandler(l, module) {
  'use strict';

  if (!cc._RF.push(module, "d74abPCXkJA5YnU3Ax3A+KB", "RequestHandler")) {
    var O = System.get("bvframework").RequestHandler;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = RequestHandler;
