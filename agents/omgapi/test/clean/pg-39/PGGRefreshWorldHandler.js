// module: PGGRefreshWorldHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGGRefreshWorldHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "8c6d3Cm7MxD/6iOfc5Ci+OI", "PGGRefreshWorldHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.pgRefreshWorldHandler = undefined;
    var x = require("Transitions"),
      C = require("RefreshWorldHandler"),
      H = require("SlotProperties"),
      r = cc._decorator.ccclass,
      V = function (M) {
        function q() {
          return null !== M && M.apply(this, arguments) || this;
        }
        return __extends(q, M), q.prototype.resetController = function (m) {
          var D = this.generalControllers,
            W = D.slotController,
            k = D.paySelectController,
            z = D.payTableController,
            L = D.scrollerManagerController,
            b = D.fastSpinAnimationController,
            U = D.wildMultiplySpineController,
            Q = this.dataSource.transactionModel,
            w = Q.fakeReels,
            P = Q.reels,
            R = Q.middleReelsMutiply,
            T = Q.piggyFeature,
            Y = Q.wildMultiply;
          k.hide(), z.playActiveAllNode(), L.playExit(), b.reset(), Y ? z.fadeMultiply(Y, false) : z.fadeMultiply(H.WildSlotIndexes.ONE, false), U.stop(), W.resetSlot(w, P, R, T), m && m();
        }, q.prototype.executeTransition = function (m) {
          var D = this.generalControllers,
            W = new x.ToNormalSpinTransition();
          var k = {};
          k.generalControllers = D;
          W.run(k, function () {
            W.destroy(), m();
          });
        }, q.prototype.changeWalletIdleSetUp = function (m) {
          this.reenableSpinButton(m);
        }, q.prototype.betOptionPreIdleSetUp = function () {}, q.prototype.betOptionIdleSetUp = function (m) {
          this.reenableSpinButton(m);
        }, __decorate([r], q);
      }(C.default);
    exports.default = V, exports.pgRefreshWorldHandler = new V(), cc._RF.pop();
  }
}
module.exports = PGGRefreshWorldHandler;
