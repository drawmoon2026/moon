// module: QuitGame
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function QuitGame(Q, F) {
  'use strict';

  if (!cc["_RF"]["push"](F, "d5fa8VRcgJD0a9wBWcZ0zoO", "QuitGame")) {
    var c = System["get"]("bvframework")["QuitGame"];
    for (var j in c) F["exports"][j] = c[j];
    F["exports"]["__esModule"] = !0, cc["_RF"]["pop"]();
  }
}
module.exports = QuitGame;
