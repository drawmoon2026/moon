// module: RequestHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function RequestHandler(Q, F) {
  'use strict';

  if (!cc["_RF"]["push"](F, "d74abPCXkJA5YnU3Ax3A+KB", "RequestHandler")) {
    var c = System["get"]("bvframework")["RequestHandler"];
    for (var j in c) F["exports"][j] = c[j];
    F["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = RequestHandler;
