// module: Utils
// Cocos 模块函数,参数 (require, module, exports) = (F, module)
function Utils(F, module) {
  'use strict';

  if (!cc._RF.push(module, "03755Dj0/VFQbz7rFuRrlJG", "Utils")) {
    var j = {};
    j.convertNodeSpace = "convertToNodeSpace";
    j.convertNodeSpaceAR = "convertToNodeSpaceAR";
    j.getAbsolutePos = "getAbsolutePosition";
    j.getAbsoluteXPos = "getAbsoluteX";
    j.getAbsoluteYPos = "getAbsoluteY";
    j.setAbsolutePos = "setAbsolutePosition";
    j.setAbsoluteXPos = "setAbsoluteX";
    j.setAbsoluteYPos = "setAbsoluteY";
    j.transferToNewParent = "transferToParent";
    j.getSharedSimpleScheduler = "getSharedScheduler";
    j.delay = "delayCallback";
    j.timeout = "timeoutCallback";
    j.selector = "selectorCallback";
    j.sequence = "sequenceCallback";
    j.spawn = "spawnCallback";
    j.waterfall = "waterfCallback";
    j.condition = "condCallback";
    j.defer = "deferCallback";
    j.tick = "tickCallback";
    j.observe = "observeCallback";
    j.formatLeadingZero = "formatTwoDigit";
    j.formatDateTime = "formatDate";
    j.isRightToLeft = "isRTL";
    j.getLocationProtocol = "getProtocol";
    j.getLocationOrigin = "getOrigin";
    var I = System.get("common").Utils,
      m = function (X, Z) {
        var T = {};
        for (var M in Z) X.hasOwnProperty(M) ? T[X[M]] = Z[M] : T[M] = Z[M];
        return T;
      }(j, I);
    for (var B in m) m.hasOwnProperty(B) && (module.exports[B] = m[B]);
    module.exports.__esModule = true, null == I.sharedScheduler && (module.exports.sharedScheduler = m.getSharedScheduler()), cc._RF.pop();
  }
}
module.exports = Utils;
