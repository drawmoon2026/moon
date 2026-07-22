// module: AutomationDecorator
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function AutomationDecorator(F, c, j) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "607a1pUyWBLsphZz1avN+BH", "AutomationDecorator") || (Object.defineProperty(j, "__esModule", I), j.automationDec = undefined, j.automationDec = function (m) {
    return function (B, X, Z) {
      if (!Z) return Z;
      var T = Z.value;
      return Z.value = function () {
        for (var M = [], C = 0; C < arguments.length; C++) M[C] = arguments[C];
        var V = System.get("automation");
        V && m.func.apply(m, __spread(M));
        var N = T.apply(this, M);
        return N;
      }, Z;
    };
  }, cc._RF.pop());
}
module.exports = AutomationDecorator;
