// module: PaySelectController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PaySelectController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "d84c2j6GplDordOGXSko/23", "PaySelectController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x,
        C = require("PaySelect"),
        H = require("SlotProperties"),
        V = cc._decorator,
        M = V.ccclass,
        q = V.property;
      (function (D) {
        D[D.SHOW = 0] = "SHOW", D[D.HIDING = 1] = "HIDING", D[D.HIDE = 2] = "HIDE";
      })(x || (x = {}));
      var m = function (D) {
        {
          function W() {
            {
              var k = null !== D && D.apply(this, arguments) || this;
              return k.paySelectList = [], k.paySelectHolder = undefined, k.Nu = x.HIDE, k.Tu = [], k.Hu = cc.v2(0, 0), k;
            }
          }
          return __extends(W, D), W.prototype.cacheLocalSlotPosition = function (k) {
            var z = this,
              L = this.Tu,
              v = H.slotProperties.getSlotItemSize(),
              b = v.x / 2,
              U = v.y / 2;
            [1, 4, 7].forEach(function (Q, w) {
              var P = H.slotProperties.getSlotWorldPositionFromIndex(Q),
                R = z.paySelectList[w].node.parent.convertToNodeSpaceAR(P);
              L.push(new cc.Vec2(R.x + b, R.y + U));
            }), k && k();
          }, W.prototype.playNormalPaySelect = function (k, z) {
            var L = this;
            if (this.Nu !== x.SHOW) {
              this.node.active = true;
              var v = this.Tu;
              this.Nu = x.SHOW, this.paySelectList.forEach(function (b, U) {
                var Q = v[U] ? v[U] : L.Hu;
                b.node.position = Q, z[U] === H.SlotIndexes.WILD ? b.playBg() : b.playWithSymbol(k[U]);
              });
            }
          }, W.prototype.hide = function () {
            {
              var k = this;
              this.Nu !== x.HIDING && (this.Nu = x.HIDING, this.paySelectList.forEach(function (z, L) {
                L === k.paySelectList.length - 1 ? z.stop(k.Ru.bind(k)) : z.stop(undefined);
              }));
            }
          }, W.prototype.Ru = function () {
            this.node.active = false, this.Nu = x.HIDE;
          }, W.prototype.destroy = function () {
            var k = this;
            return this.paySelectList.forEach(function (z, L) {
              {
                L === k.paySelectList.length - 1 ? z.stop(k.Ru.bind(k)) : z.stop(undefined);
              }
            }), D.prototype.destroy.call(this);
          }, __decorate([q([C.default])], W.prototype, "paySelectList", undefined), __decorate([q(cc.Node)], W.prototype, "paySelectHolder", undefined), __decorate([M], W);
        }
      }(cc.Component);
      exports.default = m, cc._RF.pop();
    }
  }
}
module.exports = PaySelectController;
