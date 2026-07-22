// module: QuitGame
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function QuitGame(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "d5fa8VRcgJD0a9wBWcZ0zoO", "QuitGame")) {
    var c = System.get("bvframework").QuitGame;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = QuitGame;
