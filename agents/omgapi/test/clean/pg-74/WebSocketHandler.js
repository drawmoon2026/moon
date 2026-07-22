// module: WebSocketHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function WebSocketHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "d571cdfj6pHMqHdyAI82QnG", "WebSocketHandler")) {
    var c = System.get("bvframework").WebSocketHandler;
    for (var j in c) c.hasOwnProperty(j) && (module.exports[j] = c[j]);
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = WebSocketHandler;
