// module: Printer
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function Printer(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "75992e1c0JLNIAsOHARyF2L", "Printer")) {
    var c = System.get("bvframework").Printer;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = Printer;
