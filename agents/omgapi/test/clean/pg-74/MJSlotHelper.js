// module: MJSlotHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function MJSlotHelper(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "05968Nw3yVLIpF3VfjWBLKj", "MJSlotHelper")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I);
    var m = function (B) {
      function X() {
        return null !== B && B.apply(this, arguments) || this;
      }
      return __extends(X, B), X.prototype.slotViewGetItem = function (Z, T) {
        var M = this.slotItemPool,
          C = this.slotDataHandler.getItemInfo(Z, T),
          V = this.Oa.indexOf(Z),
          q = this.Ia[V],
          f = M.getSlotItem(C.symbolIndex, q, V, N);
        return f.positionIndex = C.positionIndex, f.symbolColumn = C.symbolColumn, f.symbolRow = C.symbolRow, f;
      }, X.prototype.getItemsWorldPositionAR = function () {
        for (var Z, T = [], M = 0; M < arguments.length; M++) T[M] = arguments[M];
        var C = cc.v2(),
          V = [];
        return (Z = this.Ta).getSlotItems.apply(Z, __spread(T)).forEach(function (N) {
          V.push(N.scaleHolder.convertToWorldSpaceAR(C));
        }), V;
      }, X;
    }(require("SlotHelper").default);
    exports.default = m, cc._RF.pop();
  }
}
module.exports = MJSlotHelper;
