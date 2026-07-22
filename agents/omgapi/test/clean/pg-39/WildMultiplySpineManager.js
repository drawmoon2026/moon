// module: WildMultiplySpineManager
// Cocos 模块函数,参数 (require, module, exports) = (require, H, exports)
function WildMultiplySpineManager(require, H, exports) {
  'use strict';

  if (!cc._RF.push(H, "64277KuIuBLZKCFpqgnu6f3", "WildMultiplySpineManager")) {
    var M = {};
    M.value = true;
    Object.defineProperty(exports, "__esModule", M);
    var q = {};
    q.x = 3.5;
    q.y = -0.5;
    var m = {};
    m.x = 5;
    m.y = -5;
    var D = {};
    D.x = -1;
    D.y = -6;
    var W = {};
    W.x = 8;
    W.y = -5;
    var k = {};
    k['1'] = q;
    k['2'] = m;
    k['5'] = D;
    k['10'] = W;
    var z = require("SlotProperties"),
      L = require("WildMultiplySpineController"),
      v = require("AudioManager"),
      b = cc._decorator,
      U = b.ccclass,
      Q = b.property,
      P = function (R) {
        {
          function T() {
            var Y = null !== R && R.apply(this, arguments) || this;
            return Y.multiplySpine = [], Y.multiplySpineNodeList = [], Y._S = [], Y.pS = undefined, Y.bS = [], Y;
          }
          return __extends(T, R), T.prototype.cacheLocalSlotPosition = function (Y) {
            var X = this,
              E = [1, 4, 7],
              F = z.slotProperties.getSlotItemSize();
            this.multiplySpineNodeList.forEach(function (N, Z) {
              var p = z.slotProperties.getSlotWorldPositionFromIndex(E[Z]),
                g = N.parent.convertToNodeSpaceAR(p),
                f = F.x / 2,
                A = F.y / 2;
              N.setPosition(new cc.Vec2(g.x + f, g.y + A)), X.bS[Z] = N.getPosition();
            }), Y && Y();
          }, T.prototype.playWildSpineStill = function (Y, X, E) {
            this.pS = E, this.mS(Y, X), this.multiplySpine[X].playWinMultiply(Y, this.SS(X)), this._S.push(z.NumberOfRow * X + 1);
          }, T.prototype.SS = function (Y) {
            var X = this;
            return function () {
              var E = X.pS;
              X.pS = undefined, E && E(), X.multiplySpine[Y].stop();
            };
          }, T.prototype.playWildSpineLoop = function (Y, X) {
            this.mS(Y, X), this.multiplySpine[X].playWinMultiply(Y, undefined), this._S.push(z.NumberOfRow * X + 1);
          }, T.prototype.playMultipleWinAudio = function (Y) {
            switch (Y) {
              case z.WildSlotIndexes.ONE:
                v.GeneralAudioPool.sym_wild_normal.play();
                break;
              case z.WildSlotIndexes.TWO:
                v.GeneralAudioPool.sym_wild_x2.play();
                break;
              case z.WildSlotIndexes.FIVE:
                v.GeneralAudioPool.sym_wild_x5.play();
                break;
              case z.WildSlotIndexes.TEN:
                v.GeneralAudioPool.sym_wild_x10.play();
            }
          }, T.prototype.getHidenSlotIndexList = function () {
            return this._S;
          }, T.prototype.mS = function (Y, X) {
            var E = this.multiplySpineNodeList[X],
              F = this.bS[X].x + w[Y].x,
              N = this.bS[X].y + w[Y].y;
            E.setPosition(new cc.Vec2(F, N));
          }, T.prototype.stop = function () {
            this.multiplySpine.forEach(function (Y) {
              Y.stop();
            }), this._S = [];
          }, T.prototype.destroy = function () {
            return this.stop(), this.node.destroy(), R.prototype.destroy.call(this);
          }, __decorate([Q([L.default])], T.prototype, "multiplySpine", undefined), __decorate([Q([cc.Node])], T.prototype, "multiplySpineNodeList", undefined), __decorate([U], T);
        }
      }(cc.Component);
    exports.default = P, cc._RF.pop();
  }
}
module.exports = WildMultiplySpineManager;
