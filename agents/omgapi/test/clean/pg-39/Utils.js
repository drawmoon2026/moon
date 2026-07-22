// module: Utils
// Cocos 模块函数,参数 (require, module, exports) = (j, module)
function Utils(j, module) {
  'use strict';

  if (!cc._RF.push(module, "03755Dj0/VFQbz7rFuRrlJG", "Utils")) {
    var y = {};
    y.u0 = "convertToNodeSpace";
    y.u1 = "convertToNodeSpaceAR";
    y.u2 = "getAbsolutePosition";
    y.u3 = "getAbsoluteX";
    y.u4 = "getAbsoluteY";
    y.u5 = "setAbsolutePosition";
    y.u6 = "setAbsoluteX";
    y.u7 = "setAbsoluteY";
    y.u8 = "transferToParent";
    y.u9 = "getSharedScheduler";
    y.u10 = "delayCallback";
    y.u11 = "timeoutCallback";
    y.u12 = "selectorCallback";
    y.u13 = "sequenceCallback";
    y.u14 = "spawnCallback";
    y.u15 = "waterfCallback";
    y.u16 = "condCallback";
    y.u17 = "deferCallback";
    y.u18 = "tickCallback";
    y.u19 = "observeCallback";
    y.u20 = "formatTwoDigit";
    y.u21 = "formatDate";
    y.u22 = "isRTL";
    y.u23 = "getProtocol";
    y.u24 = "getOrigin";
    var B = System.get("common").Utils,
      x = function (H, r) {
        var V = {};
        for (var M in r) H.hasOwnProperty(M) ? V[H[M]] = r[M] : V[M] = r[M];
        return DEBUG, V;
      }(y, B);
    for (var C in x) x.hasOwnProperty(C) && (module.exports[C] = x[C]);
    module.exports.__esModule = true, null == B.sharedScheduler && (module.exports.sharedScheduler = x.getSharedScheduler()), cc._RF.pop();
  }
}
module.exports = Utils;
