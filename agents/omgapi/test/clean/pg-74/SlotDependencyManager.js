// module: SlotDependencyManager
// Cocos 模块函数,参数 (require, module, exports) = (c, j, I)
function SlotDependencyManager(c, j, I) {
  'use strict';

  if (!cc._RF.push(j, "f64caMdMMxCYYPxBmpx6+nL", "SlotDependencyManager")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m), I.walletHelper = undefined;
    var B = c("WalletHelper");
    var X = {};
    X.enumerable = true;
    X.get = function () {
      return B.walletHelper;
    };
    Object.defineProperty(I, "walletHelper", X), cc._RF.pop();
  }
}
module.exports = SlotDependencyManager;
