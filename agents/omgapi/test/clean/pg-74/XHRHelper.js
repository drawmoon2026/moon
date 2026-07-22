// module: XHRHelper
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function XHRHelper(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "d29eaTApqFCCLK6u/sH0xO/", "XHRHelper")) {
    var c = System.get("bvframework").XHRHelper;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = XHRHelper;
