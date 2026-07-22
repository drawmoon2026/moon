// module: LaunchConfig
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function LaunchConfig(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "9687e72GwxLXpeDvVqr6s0O", "LaunchConfig")) {
    {
      var c = System.get("bvframework").LaunchConfig;
      for (var j in c) module.exports[j] = c[j];
      module.exports.__esModule = true, cc._RF.pop();
    }
  }
}
module.exports = LaunchConfig;
