// module: APIEncryptor
// Cocos 模块函数,参数 (require, module, exports) = (l, module)
function APIEncryptor(l, module) {
  'use strict';

  if (!cc._RF.push(module, "bd0a1JELztCYqizHJtWld7o", "APIEncryptor")) {
    var O = System.get("common").APIEncryptor;
    for (var y in O) module.exports[y] = O[y];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = APIEncryptor;
