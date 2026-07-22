// module: QuitGame
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function QuitGame(l, module) {
  'use strict';

  if (!cc._RF.push(module, "d5fa8VRcgJD0a9wBWcZ0zoO", "QuitGame")) {
    var O = System.get("bvframework").QuitGame;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = QuitGame;
