// module: BVFrameworkEnum
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function BVFrameworkEnum(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "ec7f7EEHK9MYKQtN9oOrPGU", "BVFrameworkEnum")) {
    var c = System.get("bvframework").BVFrameworkEnum;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = BVFrameworkEnum;
