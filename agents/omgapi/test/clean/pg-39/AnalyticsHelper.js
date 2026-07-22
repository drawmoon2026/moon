// module: AnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function AnalyticsHelper(l, module) {
  'use strict';

  if (!cc._RF.push(module, "d1d41tYvBBPX6KJU88DFlLq", "AnalyticsHelper")) {
    var O = System.get("bvframework").AnalyticsHelper;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = AnalyticsHelper;
