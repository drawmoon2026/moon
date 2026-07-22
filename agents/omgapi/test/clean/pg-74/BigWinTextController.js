// module: BigWinTextController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function BigWinTextController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "898b60qAJxEz6mS8OIzdH+l", "BigWinTextController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("BigWinController"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.bigWinTextNode = undefined, N.bigWInTextHolderNode = undefined, N.winAmountHolderNode = undefined, N.bigWinSprite = undefined, N.$t = undefined, N.ti = undefined, N.ii = undefined, N.ei = undefined, N;
        }
        return __extends(V, C), V.prototype.init = function (N, q, f) {
          this.bigWinTextNode.active = false, this.ti = N, this.ii = q, this.ei = f;
        }, V.prototype.play = function (N, q) {
          switch (this.$t = q, this.bigWinTextNode.active = true, this.winAmountHolderNode.y = 0, this.winAmountHolderNode.opacity = 255, this.bigWinTextNode.stopAllActions(), this.bigWinTextNode.runAction(cc.scaleTo(0.3, 1.43)), N) {
            case B.WinRollState.BIG_WIN:
              this.bigWinSprite.spriteFrame = this.ti, this.ni(this.bigWinTextNode), this.ni(this.winAmountHolderNode, 0.1);
              break;
            case B.WinRollState.MEGA_WIN:
              this.bigWinSprite.spriteFrame = this.ii, this.ni(this.bigWinTextNode), this.ni(this.winAmountHolderNode, 0.1);
              break;
            case B.WinRollState.SUPER_MEGA_WIN:
              this.bigWinSprite.spriteFrame = this.ei, this.ni(this.bigWinTextNode), this.ni(this.winAmountHolderNode, 0.1);
          }
          this.oi();
        }, V.prototype.hideNumber = function () {
          this.winAmountHolderNode.scale = 0;
        }, V.prototype.showNumber = function () {
          this.winAmountHolderNode.scale = 1;
        }, V.prototype.playEnd = function () {
          this.winAmountHolderNode.scale = 1, this.ni(this.bigWinTextNode), this.ni(this.winAmountHolderNode, 0.1);
        }, V.prototype.oi = function () {
          var N = this.$t;
          this.$t = undefined, N && N();
        }, V.prototype.ni = function (N, q) {
          q || (q = 0), N.scale = 0, N.stopAllActions(), N.runAction(cc.sequence(cc.delayTime(q), cc.scaleTo(0.2, 1.15), cc.scaleTo(0.2, 1)));
        }, V.prototype.dismiss = function () {}, V.prototype.stop = function () {
          var N = this.bigWinTextNode;
          N.stopAllActions(), N.active = false;
        }, V.prototype.destroy = function () {
          return this.stop(), this.node.destroy(), C.prototype.destroy.call(this);
        }, __decorate([T(cc.Node)], V.prototype, "bigWinTextNode", undefined), __decorate([T(cc.Node)], V.prototype, "bigWInTextHolderNode", undefined), __decorate([T(cc.Node)], V.prototype, "winAmountHolderNode", undefined), __decorate([T(cc.Sprite)], V.prototype, "bigWinSprite", undefined), __decorate([Z], V);
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = BigWinTextController;
