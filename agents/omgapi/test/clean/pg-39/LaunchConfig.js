// module: LaunchConfig
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function LaunchConfig(l, module) {
  'use strict';

  if (!cc._RF.push(module, "9687e72GwxLXpeDvVqr6s0O", "LaunchConfig")) {
    var O = System.get("bvframework").LaunchConfig;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = LaunchConfig;
