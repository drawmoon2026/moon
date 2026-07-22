// module: UIKitUtils
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function UIKitUtils(F, c, j) {
  'use strict';

  function I() {
    return cc.sys.os === cc.sys.OS_IOS;
  }
  var m = {};
  m.value = true;
  cc._RF.push(c, "b3045XdzRhDNrJLCqWLZ6eT", "UIKitUtils") || (Object.defineProperty(j, "__esModule", m), j.isNotBrowserMode = j.deviceHasNotch = j.isIphoneX = j.isIphone = undefined, j.isIphone = I, j.isIphoneX = function () {
    {
      var B = cc.view.getFrameSize();
      return I() && (812 === B.width && 375 === B.height || 375 === B.width && 812 === B.height);
    }
  }, j.deviceHasNotch = function () {
    return shell.environment.hasNotch();
  }, j.isNotBrowserMode = function () {
    {
      return window.navigator.standalone || "app" === shell.getEnvironment();
    }
  }, cc._RF.pop());
}
module.exports = UIKitUtils;
