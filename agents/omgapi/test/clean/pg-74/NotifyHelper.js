// module: NotifyHelper
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function NotifyHelper(Q, F) {
  'use strict';

  if (!cc["_RF"]["push"](F, "9dba9c1YjJGvYgyg8KnkuQD", "NotifyHelper")) {
    var c = System["get"]("bvframework")["Notify"];
    for (var j in c) F["exports"][j] = c[j];
    F["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = NotifyHelper;
