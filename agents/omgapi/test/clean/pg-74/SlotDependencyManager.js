// module: SlotDependencyManager
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SlotDependencyManager(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "f64caMdMMxCYYPxBmpx6+nL", "SlotDependencyManager")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.walletHelper = undefined;
    var B = require("WalletHelper");
    var X = {};
    X.enumerable = true;
    X.get = function () {
      return B.walletHelper;
    };
    Object.defineProperty(exports, "walletHelper", X), cc._RF.pop();
  }
}
module.exports = SlotDependencyManager;
