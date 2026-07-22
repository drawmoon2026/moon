// module: SlotItemHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotItemHandler(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "cbfb0c2igtO8oHCc6bYN0xe", "SlotItemHandler")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = function () {
        function B() {
          this.numberOfRow = undefined, this.functionalSlotItems = undefined;
        }
        return B.prototype.init = function (X) {
          this.numberOfRow = X, this.functionalSlotItems = [];
        }, B.prototype.reset = function () {
          this.functionalSlotItems.length = 0;
        }, B.prototype.setSlotItem = function (X, Z, T) {
          {
            undefined === T && (T = 0);
            var M = this.numberOfRow,
              C = M - 1 - (Z.positionIndex - T);
            if (1 === Z.symbolRow && 1 === Z.symbolColumn) this.functionalSlotItems[X * this.numberOfRow + C] = Z;else for (var V = Math.min(M - 1, C), N = Math.max(0, C - Z.symbolRow + 1), q = X + Z.symbolColumn - 1; f <= q; f++) for (; g <= V; g++) this.functionalSlotItems[f * M + g] = Z;
          }
        }, B.prototype.getSlotItems = function () {
          for (var X = [], Z = 0; Z < arguments.length; Z++) X[Z] = arguments[Z];
          var T = this.functionalSlotItems;
          if (X.length) {
            {
              var M = [];
              return X.forEach(function (C) {
                M.push(T[C]);
              }), M;
            }
          }
          return __spread(T);
        }, B;
      }();
      j.default = m, cc._RF.pop();
    }
  }
}
module.exports = SlotItemHandler;
