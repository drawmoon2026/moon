// module: SpinButtonViewController.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function SpinButtonViewController_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "53057veQkxJRZfpJDi5Rv1H", "SpinButtonViewController.spec") || (Object.defineProperty(exports, "__esModule", I), exports.initSpinButtonNode = exports.setSpinButtonInteractivity = undefined, exports.setSpinButtonInteractivity = function (m) {
    {
      var B = System.get("automation") && System.get("automation").GameData;
      B && B.emit("SpinButtonInteractivity", m);
    }
  }, exports.initSpinButtonNode = function (m) {
    var B = System.get("automation") && System.get("automation").GameConfigs;
    B && B.initNodeConfig(m.spin_button, "spin_button");
  }, cc._RF.pop());
}
module.exports = SpinButtonViewController_spec;
