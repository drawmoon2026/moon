// module: NotifyHelper
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function NotifyHelper(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "9dba9c1YjJGvYgyg8KnkuQD", "NotifyHelper")) {
    var c = System.get("bvframework").Notify;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = NotifyHelper;
