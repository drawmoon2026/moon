// module: Preference
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function Preference(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "f7e90cT1I9BDL45c7FgvgSo", "Preference")) {
    var c = System.get("common").Preference;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = Preference;
