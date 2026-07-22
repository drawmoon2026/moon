// module: XHRHandler
// Cocos 模块函数,参数 (require, module, exports) = (Q, module)
function XHRHandler(Q, module) {
  'use strict';

  if (!cc._RF.push(module, "77926JsF5hDL5NbzKF89qZh", "XHRHandler")) {
    var c = System.get("bvframework").XHRHandler;
    for (var j in c) module.exports[j] = c[j];
    module.exports.__esModule = true, cc._RF.pop();
  }
}
module.exports = XHRHandler;
