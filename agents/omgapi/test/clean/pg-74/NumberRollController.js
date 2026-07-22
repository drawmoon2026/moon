// module: NumberRollController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberRollController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "6ce4aSiKeVGJZPyEX2VbsSD", "NumberRollController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberDisplayController"),
      X = require("NumberRollBaseController"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function N() {
          var f = null !== V && V.apply(this, arguments) || this;
          return f.displayController = undefined, f;
        }
        var q = {};
        q.type = B.default;
        q.override = true;
        return __extends(N, V), __decorate([M(q)], N.prototype, "displayController", undefined), __decorate([T], N);
      }(X.default);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = NumberRollController;
