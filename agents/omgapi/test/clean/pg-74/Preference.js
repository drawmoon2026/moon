// module: Preference
// Cocos 模块函数,参数 (require, module, exports) = (Q, F)
function Preference(Q, F) {
  'use strict';

  if (!cc._RF.push(F, "f7e90cT1I9BDL45c7FgvgSo", "Preference")) {
    var c = System.get("common").Preference;
    for (var j in c) F.exports[j] = c[j];
    F.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = Preference;
