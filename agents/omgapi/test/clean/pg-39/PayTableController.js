// module: PayTableController
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function PayTableController(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "b37daKpKgNLXravbBivYGwk", "PayTableController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x), exports.PAYTABLE_ITEM_INDEXES = undefined;
    var C = require("Utils"),
      H = cc._decorator,
      r = H.ccclass,
      V = H.property;
    var M = {};
    M.WILD = 0;
    M.GOLD_PIG = 1;
    M.INGOT = 2;
    M.JADE = 3;
    M.BAR_3 = 4;
    M.BAR_2 = 5;
    M.BAR_1 = 6;
    M.ANY = 7;
    exports.PAYTABLE_ITEM_INDEXES = cc.Enum(M);
    var q = function (m) {
      function D() {
        var W = null !== m && m.apply(this, arguments) || this;
        return W.anyNormalSprite = undefined, W.wildText = undefined, W.wildSymbolNode = undefined, W.containerSymbolNode = undefined, W.numberHolderNode = undefined, W.glowNode = undefined, W.Du = [], W.Uu = [], W.Wu = undefined, W.Fu = undefined, W.xu = undefined, W.Vu = undefined, W;
      }
      return __extends(D, m), Object.defineProperty(D.prototype, "paytableWildController", {
        'get': function () {
          {
            return undefined === this.Wu && (this.Wu = this.wildSymbolNode.getComponent("PaytableWildEffectController")), this.Wu;
          }
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(D.prototype, "paytableContainerController", {
        'get': function () {
          {
            return undefined === this.Fu && (this.Fu = this.containerSymbolNode.getComponent("PaytableContainerController")), this.Fu;
          }
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(D.prototype, "paytableNumberHolderController", {
        'get': function () {
          return undefined === this.xu && (this.xu = this.numberHolderNode.getComponent("PaytableNumberHolderController")), this.xu;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(D.prototype, "paytableGlowController", {
        'get': function () {
          return undefined === this.Vu && (this.Vu = this.glowNode.getComponent("PaytableGlowController")), this.Vu;
        },
        'enumerable': false,
        'configurable': true
      }), D.prototype.init = function () {
        {
          C.sequenceCallback(this.paytableContainerController.init.bind(this.paytableContainerController), this.paytableNumberHolderController.init.bind(this.paytableNumberHolderController), this.paytableWildController.init.bind(this.paytableWildController))(this.setSymbolList.bind(this));
        }
      }, D.prototype.setSymbolList = function () {
        this.Du = this.paytableContainerController.symbolNode, this.Uu = this.paytableNumberHolderController.numberNode;
      }, D.prototype.setPaytableAnyLocalizeSF = function (W) {
        {
          this.anyNormalSprite.spriteFrame = W;
        }
      }, D.prototype.setPaytableWildLocalizeSF = function (W) {
        {
          this.wildText.spriteFrame = W;
        }
      }, D.prototype.fadeRandomMultiple = function () {
        this.paytableWildController.randomFading();
      }, D.prototype.fadeMultiply = function (W, k) {
        {
          undefined === k && (k = true), this.paytableWildController.fadeMultiply(W, k);
        }
      }, D.prototype.playWildActive = function () {
        this.paytableWildController.playActive(), this.paytableWildController.randomFading();
      }, D.prototype.playWildInactive = function () {
        this.paytableWildController.playNoActive(), this.paytableWildController.randomFading();
      }, D.prototype.playWinFlash = function (W) {
        this.paytableGlowController.setGlowPosition(W), this.paytableGlowController.playFlash(), this.Du.forEach(function (k, z) {
          var L = k.getComponent("PaytableSymbolController");
          W !== z && L.playInactiveNode();
        }), this.Uu.forEach(function (k, z) {
          var L = k.getComponent("NumberPaytableController");
          W !== z && L.playInactiveNode();
        });
      }, D.prototype.playActiveAllNode = function () {
        {
          this.paytableGlowController.stop(), this.paytableWildController.playActive(), this.Du.forEach(function (W) {
            W.getComponent("PaytableSymbolController").playActive();
          }), this.Uu.forEach(function (W) {
            W.getComponent("NumberPaytableController").playActive();
          });
        }
      }, D.prototype.destroy = function () {
        return this.node.destroy(), m.prototype.destroy.call(this);
      }, __decorate([V(cc.Sprite)], D.prototype, "anyNormalSprite", undefined), __decorate([V(cc.Sprite)], D.prototype, "wildText", undefined), __decorate([V(cc.Node)], D.prototype, "wildSymbolNode", undefined), __decorate([V(cc.Node)], D.prototype, "containerSymbolNode", undefined), __decorate([V(cc.Node)], D.prototype, "numberHolderNode", undefined), __decorate([V(cc.Node)], D.prototype, "glowNode", undefined), __decorate([r], D);
    }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = PayTableController;
