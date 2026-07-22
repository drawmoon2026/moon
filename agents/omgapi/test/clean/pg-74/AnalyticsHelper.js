// module: AnalyticsHelper
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function AnalyticsHelper(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "d1d41tYvBBPX6KJU88DFlLq", "AnalyticsHelper")) {
    var c = System.get("bvframework").AnalyticsHelper;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = AnalyticsHelper;
