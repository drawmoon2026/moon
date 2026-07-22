// module: NotifyHelper
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function NotifyHelper(l, module) {
  'use strict';

  if (!cc._RF.push(module, "9dba9c1YjJGvYgyg8KnkuQD", "NotifyHelper")) {
    var O = System.get("bvframework").Notify;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = NotifyHelper;
