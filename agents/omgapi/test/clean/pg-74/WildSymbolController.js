// module: WildSymbolController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, exports)
function WildSymbolController(F, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "c4f2fndl91OwLsTRsp+S0cz", "WildSymbolController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = cc._decorator,
      X = B.ccclass,
      Z = B.property,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.wildSpine = undefined, V;
        }
        return __extends(C, M), C.prototype.playSpawn = function () {
          this.node.active = true, this.wildSpine.setAnimation(0, "spawn", false), this.wildSpine.setCompleteListener(this.eC.bind(this, true));
        }, C.prototype.playWin = function () {
          this.node.active = true, this.wildSpine.setAnimation(0, "win", false), this.wildSpine.setCompleteListener(this.nC.bind(this, true));
        }, C.prototype.stop = function () {
          {
            var V = this.wildSpine;
            V.clearTrack(0), V.setToSetupPose(), V.setCompleteListener(undefined), this.node.active = false;
          }
        }, C.prototype.nC = function (V) {
          undefined === V && (V = true), this.wildSpine.setAnimation(0, "win_idle", V);
        }, C.prototype.eC = function (V) {
          undefined === V && (V = false), this.node.active = true, this.wildSpine.setAnimation(0, "idle", V);
        }, C.prototype.destroy = function () {
          return this.node.destroy(), M.prototype.destroy.call(this);
        }, __decorate([Z(sp.Skeleton)], C.prototype, "wildSpine", undefined), __decorate([X], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = WildSymbolController;
