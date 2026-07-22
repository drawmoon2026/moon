// module: PaytableContainerController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PaytableContainerController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "ed505sc27RN0ZC3TgW5G4qw", "PaytableContainerController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("PayTableController"),
      C = cc._decorator,
      H = C.ccclass,
      V = C.property,
      M = Object.create(null);
    M[x.PAYTABLE_ITEM_INDEXES.WILD] = new cc.Vec2(-310, -90), M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = new cc.Vec2(-310, -150), M[x.PAYTABLE_ITEM_INDEXES.INGOT] = new cc.Vec2(-310, -210), M[x.PAYTABLE_ITEM_INDEXES.JADE] = new cc.Vec2(-310, -270), M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = new cc.Vec2(200, -90), M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = new cc.Vec2(200, -150), M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = new cc.Vec2(200, -210);
    var q = function (m) {
      function D() {
        var W = null !== m && m.apply(this, arguments) || this;
        return W.symbolItem = undefined, W.anySymbolItem = undefined, W.symbolSprite = [], W.zu = [], W;
      }
      return __extends(D, m), Object.defineProperty(D.prototype, "symbolNode", {
        'get': function () {
          return this.zu;
        },
        'enumerable': false,
        'configurable': true
      }), D.prototype.init = function (W) {
        for (var k = 0; k <= 7; k++) {
          var z = cc.instantiate(this.symbolItem),
            L = z.getComponent("PaytableSymbolController");
          if (k < 7) {
            L.setSymbol(this.symbolSprite[k]), this.zu.push(z);
            var v = M[k];
            z.setPosition(v), this.node.addChild(z);
          } else this.zu.push(this.anySymbolItem);
        }
        W && W();
      }, D.prototype.destroy = function () {
        return this.node.destroy(), m.prototype.destroy.call(this);
      }, __decorate([V(cc.Prefab)], D.prototype, "symbolItem", undefined), __decorate([V(cc.Node)], D.prototype, "anySymbolItem", undefined), __decorate([V(cc.SpriteFrame)], D.prototype, "symbolSprite", undefined), __decorate([H], D);
    }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = PaytableContainerController;
