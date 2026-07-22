// module: AutomationDecorator
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function AutomationDecorator(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "607a1pUyWBLsphZz1avN+BH", "AutomationDecorator") || (Object.defineProperty(exports, "__esModule", B), exports.automationDec = undefined, exports.automationDec = function (x) {
    return function (C, H, r) {
      if (!r) return r;
      var V = r.value;
      return r.value = function () {
        for (var M = [], q = 0; q < arguments.length; q++) M[q] = arguments[q];
        var m = System.get("automation");
        m && x.func.apply(x, __spread(M));
        var D = V.apply(this, M);
        return D;
      }, r;
    };
  }, cc._RF.pop());
}
module.exports = AutomationDecorator;
