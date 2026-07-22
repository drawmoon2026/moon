// module: GameUtils
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function GameUtils(Q, F) {
  'use strict';

  if (!cc["_RF"]["push"](F, "576e78TekpIpIcjjcHFmVOq", "GameUtils")) {
    var c = System["get"]("bvframework")["GameUtils"];
    for (var j in c) F["exports"][j] = c[j];
    F["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = GameUtils;
