// module: PGGIdleState
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, y)
function PGGIdleState(require, exports, y) {
  'use strict';

  if (!cc._RF.push(exports, "5cb6c5+CQ5NzYA9UbiMoo6+", "PGGIdleState")) {
    var B = {};
    B.value = true;
    Object.defineProperty(y, "__esModule", B);
    var x = require("TransactionStateMachineHandler"),
      C = function (H) {
        {
          function r() {
            return null !== H && H.apply(this, arguments) || this;
          }
          return __extends(r, H), r.prototype.run = function () {
            var V = this;
            x.goToStateCallback("idle")(function () {
              H.prototype.run.call(V);
            });
          }, r.prototype.defineSystemEventConfigParam = function () {
            var V = this;
            return {
              'callback': function () {
                x.goToStateCallback("action", true)(V.tryAutoSpin.bind(V));
              }
            };
          }, r.prototype.onExitState = function (V) {
            x.transitionCompleteCallback("action")(V);
          }, r;
        }
      }(require("IdleState").default);
    y.default = C, cc._RF.pop();
  }
}
module.exports = PGGIdleState;
