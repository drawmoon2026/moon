// module: UIKitUtils
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function UIKitUtils(F, c, exports) {
  'use strict';

  function I() {
    return cc.sys.os === cc.sys.OS_IOS;
  }
  var m = {};
  m.value = true;
  cc._RF.push(c, "b3045XdzRhDNrJLCqWLZ6eT", "UIKitUtils") || (Object.defineProperty(exports, "__esModule", m), exports.isNotBrowserMode = exports.deviceHasNotch = exports.isIphoneX = exports.isIphone = undefined, exports.isIphone = I, exports.isIphoneX = function () {
    {
      var B = cc.view.getFrameSize();
      return I() && (812 === B.width && 375 === B.height || 375 === B.width && 812 === B.height);
    }
  }, exports.deviceHasNotch = function () {
    return shell.environment.hasNotch();
  }, exports.isNotBrowserMode = function () {
    {
      return window.navigator.standalone || "app" === shell.getEnvironment();
    }
  }, cc._RF.pop());
}
module.exports = UIKitUtils;
