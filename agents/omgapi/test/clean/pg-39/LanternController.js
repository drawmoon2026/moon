// module: LanternController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function LanternController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "471a4h25qhKAKjcn0RFwVqv", "LanternController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = cc._decorator,
        C = x.ccclass,
        H = x.property,
        r = function (V) {
          function M() {
            {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.lanternShine = undefined, q.lanternAnim = undefined, q;
            }
          }
          return __extends(M, V), M.prototype.moveLantern = function () {
            this.lanternAnim.play();
          }, M.prototype.shineLantern = function () {
            this.lanternShine.runAction(cc.repeatForever(cc.sequence(cc.fadeTo(1.5, 200), cc.fadeTo(1.5, 100), cc.fadeTo(1.5, 255), cc.fadeTo(1.5, 150))));
          }, M.prototype.animComplete = function () {
            {
              this.scheduleOnce(this.moveLantern, 5);
            }
          }, M.prototype.destroy = function () {
            return this.lanternAnim.stop(), this.lanternShine.stopAllActions(), this.unschedule(this.moveLantern), this.node.destroy(), V.prototype.destroy.call(this);
          }, __decorate([H(cc.Node)], M.prototype, "lanternShine", undefined), __decorate([H(cc.Animation)], M.prototype, "lanternAnim", undefined), __decorate([C], M);
        }(cc.Component);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = LanternController;
