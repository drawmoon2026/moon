// module: PaytableNumberHolderController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PaytableNumberHolderController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "dc803gUPgdGMYX34ysSghk/", "PaytableNumberHolderController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("PayTableController"),
      C = cc._decorator,
      H = C.ccclass,
      V = C.property,
      M = Object.create(null);
    M[x.PAYTABLE_ITEM_INDEXES.WILD] = {
      'position': new cc.Vec2(-150, -90),
      'payout': [5, 0, 0]
    }, M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = {
      'position': new cc.Vec2(-150, -150),
      'payout': [5, 0]
    }, M[x.PAYTABLE_ITEM_INDEXES.INGOT] = {
      'position': new cc.Vec2(-150, -210),
      'payout': [2, 0]
    }, M[x.PAYTABLE_ITEM_INDEXES.JADE] = {
      'position': new cc.Vec2(-150, -270),
      'payout': [1, 5]
    }, M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = {
      'position': new cc.Vec2(350, -90),
      'payout': [1, 0]
    }, M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = {
      'position': new cc.Vec2(350, -150),
      'payout': [8]
    }, M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = {
      'position': new cc.Vec2(350, -210),
      'payout': [5]
    }, M[x.PAYTABLE_ITEM_INDEXES.ANY] = {
      'position': new cc.Vec2(350, -270),
      'payout': [3]
    };
    var q = function (m) {
      function W() {
        var k = null !== m && m.apply(this, arguments) || this;
        return k.numberItem = undefined, k.numberHolder = undefined, k.numberSpriteZero = undefined, k.numberSpriteOne = undefined, k.numberSpriteTwo = undefined, k.numberSpriteThree = undefined, k.numberSpriteFive = undefined, k.numberSpriteEight = undefined, k.Ju = [], k;
      }
      var D = {};
      D.get = function () {
        return this.Ju;
      };
      D.enumerable = false;
      D.configurable = true;
      return __extends(W, m), Object.defineProperty(W.prototype, "numberNode", D), W.prototype.init = function (k) {
        for (var z = 0; z <= 7; z++) {
          var L = M[z],
            v = cc.instantiate(this.numberHolder);
          this.Yu(L.payout, v), this.Ju.push(v);
          var b = L.position;
          v.setPosition(b), this.node.addChild(v);
        }
        k && k();
      }, W.prototype.Yu = function (k, z) {
        var L = this;
        k.forEach(function (v) {
          var b = cc.instantiate(L.numberItem),
            U = b.getComponent("cc.Sprite");
          switch (v) {
            case 0:
              U.spriteFrame = L.numberSpriteZero;
              break;
            case 1:
              U.spriteFrame = L.numberSpriteOne;
              break;
            case 2:
              U.spriteFrame = L.numberSpriteTwo;
              break;
            case 3:
              U.spriteFrame = L.numberSpriteThree;
              break;
            case 5:
              U.spriteFrame = L.numberSpriteFive;
              break;
            case 8:
              U.spriteFrame = L.numberSpriteEight;
          }
          z.addChild(b);
        });
      }, __decorate([V(cc.Prefab)], W.prototype, "numberItem", undefined), __decorate([V(cc.Prefab)], W.prototype, "numberHolder", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteZero", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteOne", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteTwo", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteThree", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteFive", undefined), __decorate([V(cc.SpriteFrame)], W.prototype, "numberSpriteEight", undefined), __decorate([H], W);
    }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = PaytableNumberHolderController;
