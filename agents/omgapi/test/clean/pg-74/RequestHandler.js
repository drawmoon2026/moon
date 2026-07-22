// module: RequestHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function RequestHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "d74abPCXkJA5YnU3Ax3A+KB", "RequestHandler")) {
    var c = System.get("bvframework").RequestHandler;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = RequestHandler;
