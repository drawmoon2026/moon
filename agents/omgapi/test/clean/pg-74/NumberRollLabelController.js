// module: NumberRollLabelController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function NumberRollLabelController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "9b7acp+xyJLMJ5gESfkIJHz", "NumberRollLabelController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("NumberLabelController"),
      X = require("NumberRollBaseController"),
      Z = cc._decorator,
      T = Z.ccclass,
      M = Z.property,
      C = function (V) {
        function q() {
          var f = null !== V && V.apply(this, arguments) || this;
          return f.displayController = undefined, f;
        }
        var N = {};
        N.type = B.default;
        N.override = true;
        return __extends(q, V), __decorate([M(N)], q.prototype, "displayController", undefined), __decorate([T], q);
      }(X.default);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = NumberRollLabelController;
