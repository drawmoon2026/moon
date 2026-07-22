// module: Printer
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function Printer(l, module) {
  'use strict';

  if (!cc._RF.push(module, "75992e1c0JLNIAsOHARyF2L", "Printer")) {
    var O = System.get("bvframework").Printer;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = Printer;
