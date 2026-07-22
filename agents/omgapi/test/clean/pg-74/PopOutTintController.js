// module: PopOutTintController
// Cocos 模块函数,参数 (require, module, exports) = (c, j, exports)
function PopOutTintController(c, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "58b31+llD1BAb9tUvY4+l2s", "PopOutTintController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = {};
    B.positionX = 0;
    B.positionY = 0;
    B.width = 1080;
    B.height = 2340;
    B.color = cc.Color.BLACK;
    B.opacityFadeTo = 150;
    B.defaultOpacity = 0;
    B.fadeInDuration = 0.2;
    B.fadeOutDuration = 0.2;
    var Z = cc._decorator.ccclass,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.Vf = 0, V.zf = 0.2, V.Kf = 0.2, V;
        }
        return __extends(C, M), C.prototype.unuse = function () {
          this.node.opacity = 0;
        }, C.prototype.reuse = function () {
          this.node.opacity = 0;
        }, C.prototype.setup = function (V) {
          var N = __assign(__assign({}, X), V);
          this.node.setPosition(N.positionX, N.positionY), this.node.setContentSize(N.width, N.height), this.node.color = N.color, this.node.opacity = this.qf = N.defaultOpacity, this.Vf = N.opacityFadeTo, this.zf = N.fadeInDuration, this.Kf = N.fadeOutDuration;
        }, C.prototype.show = function (V) {
          var N = this;
          this.Qf ? V && V() : (this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.fadeTo(this.zf, this.Vf), cc.callFunc(function () {
            N.Qf = true, V && V();
          }))));
        }, C.prototype.hide = function (V) {
          this.Qf = false, this.node.stopAllActions(), this.node.runAction(cc.sequence(cc.fadeTo(this.Kf, this.qf), cc.callFunc(function () {
            V && V();
          })));
        }, C.prototype.destroy = function () {
          this.node.destroy(), M.prototype.destroy.call(this);
        }, __decorate([Z], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = PopOutTintController;
