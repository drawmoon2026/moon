// module: TransactionStateMachineHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function TransactionStateMachineHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "c42f8INb4ZMyJTA7LnNSlci", "TransactionStateMachineHandler")) {
    var c = System.get("bvframework").TransactionStateMachineHandler;
    for (var j in c) c.hasOwnProperty(j) && (module.exports[j] = c[j]);
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = TransactionStateMachineHandler;
