// module: SlotItemPool
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotItemPool(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "4cb49tzG5ZEy6QJghScmBDK", "SlotItemPool")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = function () {
        function B() {
          {
            this.slotItemConstructor = undefined, this.slotItemPool = undefined, this.normalSpriteFrames = undefined, this.blurSpriteFrames = undefined, this.normalScale = undefined, this.blurScale = undefined, this.getSymbolZOrder = undefined;
          }
        }
        return B.prototype.init = function (X) {
          this.slotItemConstructor = X.slotItem;
          var Z = X.normalSpriteFrame;
          this.normalSpriteFrames = Z[0] instanceof Array ? Z[0] : Z;
          var T = X.blurSpriteFrame;
          this.blurSpriteFrames = T ? T[0] instanceof Array ? T[0] : T : this.normalSpriteFrames, this.normalScale = undefined === X.normalScale ? 1 : X.normalScale, this.blurScale = undefined === X.blurScale ? 1 : X.blurScale, this.getSymbolZOrder = X.getSymbolZOrder, this.slotItemPool = new cc.NodePool(X.slotItem);
        }, B.prototype.getSlotItem = function (X, Z) {
          if (undefined === Z && (Z = false), X < 0) {
            var T = new cc.Node().addComponent(this.slotItemConstructor);
            return T.symbolIndex = X, T;
          }
          var M,
            C = this.slotItemPool;
          return (M = C.size() ? C.get().getComponent(this.slotItemConstructor) : this.createNewSlotItem()).setup(X, this.normalSpriteFrames[X], this.blurSpriteFrames[X], Z), M;
        }, B.prototype.releaseSlotItem = function (X) {
          X.symbolIndex < 0 ? X.node.destroy() : this.slotItemPool.put(X.node);
        }, B.prototype.updateSlotItemSymbolIndex = function (X, Z) {
          {
            X.setup(Z, this.normalSpriteFrames[Z], this.blurSpriteFrames[Z]);
          }
        }, B.prototype.createNewSlotItem = function () {
          var X = new cc.Node("slot_item"),
            Z = new cc.Node("sprite");
          Z.parent = X;
          var T = Z.addComponent(cc.Sprite);
          T.sizeMode = cc.Sprite.SizeMode.RAW, T.trim = false;
          var M = X.addComponent(this.slotItemConstructor);
          var C = {};
          C.sprite = T;
          C.normalScale = this.normalScale;
          C.blurScale = this.blurScale;
          C.getSymbolZOrder = this.getSymbolZOrder;
          return M.init(C), M;
        }, B;
      }();
      j.default = m, cc._RF.pop();
    }
  }
}
module.exports = SlotItemPool;
