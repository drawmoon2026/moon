// module: RandomShakingController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function RandomShakingController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "97a39/uqthGupN4Dcczm9YZ", "RandomShakingController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x,
      C = cc._decorator,
      H = C.ccclass,
      V = C.property,
      M = require("Utils");
    (function (m) {
      m[m.SHAKING = 1] = "SHAKING", m[m.NORMAL = 2] = "NORMAL";
    })(x || (x = {}));
    var q = function (m) {
      function D() {
        var W = null !== m && m.apply(this, arguments) || this;
        return W.moveVariance = 8, W.repeatTime = 0.02, W.Nu = x.NORMAL, W.Hl = undefined, W;
      }
      return __extends(D, m), D.prototype.play = function (W) {
        this.Nu !== x.SHAKING && (this.Nu = x.SHAKING, this.Hl = this.node.position, this.Rl(), W && this.scheduleOnce(this.stop, W));
      }, D.prototype.Rl = function () {
        var W = this.moveVariance,
          k = M.randomInt(this.Hl.x - W, this.Hl.x + W),
          z = M.randomInt(this.Hl.y - W, this.Hl.y + W),
          L = cc.v2(k, z);
        this.node.runAction(cc.sequence(cc.moveTo(this.repeatTime, L), cc.callFunc(this.Rl, this)));
      }, D.prototype.stop = function () {
        this.Nu !== x.NORMAL && (this.Nu = x.NORMAL, this.node.stopAllActions(), this.node.position = this.Hl);
      }, D.prototype.destroy = function () {
        return this.node.stopAllActions(), this.node.destroy(), m.prototype.destroy.call(this);
      }, __decorate([V(cc.Integer)], D.prototype, "moveVariance", undefined), __decorate([V(cc.Integer)], D.prototype, "repeatTime", undefined), __decorate([H], D);
    }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = RandomShakingController;
