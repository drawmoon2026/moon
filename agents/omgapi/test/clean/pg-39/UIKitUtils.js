// module: UIKitUtils
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function UIKitUtils(j, O, exports) {
  'use strict';

  function B() {
    return cc.sys.os === cc.sys.OS_IOS;
  }
  var x = {};
  x.value = true;
  cc._RF.push(O, "b3045XdzRhDNrJLCqWLZ6eT", "UIKitUtils") || (Object.defineProperty(exports, "__esModule", x), exports.isNotBrowserMode = exports.deviceHasNotch = exports.isIphoneX = exports.isIphone = undefined, exports.isIphone = B, exports.isIphoneX = function () {
    var C = cc.view.getFrameSize();
    return B() && (812 === C.width && 375 === C.height || 375 === C.width && 812 === C.height);
  }, exports.deviceHasNotch = function () {
    return shell.environment.hasNotch();
  }, exports.isNotBrowserMode = function () {
    return window.navigator.standalone || "app" === shell.getEnvironment();
  }, cc._RF.pop());
}
module.exports = UIKitUtils;
