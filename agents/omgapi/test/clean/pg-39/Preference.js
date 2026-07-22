// module: Preference
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function Preference(l, module) {
  'use strict';

  if (!cc._RF.push(module, "f7e90cT1I9BDL45c7FgvgSo", "Preference")) {
    var O = System.get("common").Preference;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = Preference;
