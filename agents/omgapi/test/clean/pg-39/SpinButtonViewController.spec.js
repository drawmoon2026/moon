// module: SpinButtonViewController.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function SpinButtonViewController_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "53057veQkxJRZfpJDi5Rv1H", "SpinButtonViewController.spec") || (Object.defineProperty(exports, "__esModule", B), exports.initSpinButtonNode = exports.setSpinButtonInteractivity = undefined, exports.setSpinButtonInteractivity = function (x) {
    var C = System.get("automation") && System.get("automation").GameData;
    C && C.emit("SpinButtonInteractivity", x);
  }, exports.initSpinButtonNode = function (x) {
    var C = System.get("automation") && System.get("automation").GameConfigs;
    C && C.initNodeConfig(x.spinButton, "spin_button");
  }, cc._RF.pop());
}
module.exports = SpinButtonViewController_spec;
