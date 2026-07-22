// module: PossibleWinScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PossibleWinScroller(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "355ddjhBg9AV61e/oO2HcmQ", "PossibleWinScroller")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("InterruptableScroller"),
      C = cc._decorator.ccclass,
      H = function (r) {
        function V(M, q) {
          var m = r.call(this, M, q) || this;
          return m.Nl = false, m;
        }
        return __extends(V, r), V.prototype.onPlay = function () {
          r.prototype.onPlay.call(this), this.Nl = false;
        }, V.prototype.update = function (M) {
          this.Nl || (this.Nl = true, this.emit("triggel", this)), r.prototype.update.call(this, M);
        }, __decorate([C], V);
      }(x.default);
    exports.default = H, cc._RF.pop();
  }
}
module.exports = PossibleWinScroller;
