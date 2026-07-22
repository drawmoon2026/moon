// module: TimedWinRollController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function TimedWinRollController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "bbc6c4tBJdFQ76rTU5OtO2a", "TimedWinRollController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("NumberDisplayController"),
      C = require("TimedWinRollBaseController"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        {
          function W() {
            {
              var k = null !== m && m.apply(this, arguments) || this;
              return k.displayController = undefined, k;
            }
          }
          var D = {};
          D.type = x.default;
          D.override = true;
          return __extends(W, m), __decorate([M(D)], W.prototype, "displayController", undefined), __decorate([V], W);
        }
      }(C.default);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = TimedWinRollController;
