// module: PaytableGlowController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PaytableGlowController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "bfe777kB7dHhZKNV00N7iKw", "PaytableGlowController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("PayTableController"),
      C = cc._decorator,
      H = C.ccclass,
      V = C.property,
      M = Object.create(null);
    M[x.PAYTABLE_ITEM_INDEXES.WILD] = new cc.Vec2(-390, -90), M[x.PAYTABLE_ITEM_INDEXES.GOLD_PIG] = new cc.Vec2(-390, -150), M[x.PAYTABLE_ITEM_INDEXES.INGOT] = new cc.Vec2(-390, -210), M[x.PAYTABLE_ITEM_INDEXES.JADE] = new cc.Vec2(-390, -270), M[x.PAYTABLE_ITEM_INDEXES.BAR_3] = new cc.Vec2(100, -90), M[x.PAYTABLE_ITEM_INDEXES.BAR_2] = new cc.Vec2(100, -150), M[x.PAYTABLE_ITEM_INDEXES.BAR_1] = new cc.Vec2(100, -210), M[x.PAYTABLE_ITEM_INDEXES.ANY] = new cc.Vec2(100, -270);
    var q = function (m) {
      function D() {
        var W = null !== m && m.apply(this, arguments) || this;
        return W.glowNode = undefined, W;
      }
      return __extends(D, m), D.prototype.setGlowPosition = function (W) {
        if (-1 === W) this.glowNode.setPosition(M[x.PAYTABLE_ITEM_INDEXES.WILD]);else {
          var k = M[W];
          this.glowNode.setPosition(k);
        }
      }, D.prototype.playFlash = function () {
        this.Ku(), this.glowNode.stopAllActions(), this.glowNode.opacity = 0;
        var W = cc.sequence(cc.fadeTo(0.1, 0), cc.delayTime(0.3), cc.fadeTo(0.1, 255), cc.delayTime(0.3));
        this.glowNode.runAction(cc.repeatForever(W));
      }, D.prototype.playInactiveNode = function (W) {
        undefined === W && (W = true), this.glowNode.stopAllActions(), W ? this.glowNode.runAction(cc.sequence(cc.fadeTo(0.1, 0), cc.callFunc(this.qu, this))) : this.glowNode.opacity = 0;
      }, D.prototype.playActive = function (W) {
        undefined === W && (W = true), this.Ku(), this.glowNode.stopAllActions(), W ? this.glowNode.runAction(cc.fadeTo(0.1, 255)) : this.glowNode.opacity = 255;
      }, D.prototype.stop = function () {
        this.glowNode.opacity = 0, this.glowNode.stopAllActions();
      }, D.prototype.qu = function () {
        this.glowNode.stopAllActions(), this.glowNode.active = false;
      }, D.prototype.Ku = function () {
        this.glowNode.active = true;
      }, D.prototype.destroy = function () {
        return this.stop(), this.node.destroy(), m.prototype.destroy.call(this);
      }, __decorate([V(cc.Node)], D.prototype, "glowNode", undefined), __decorate([H], D);
    }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = PaytableGlowController;
