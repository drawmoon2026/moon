// module: PopOutItem
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function PopOutItem(F, c, j) {
  'use strict';

  if (!cc._RF.push(c, "5beaedmutZIkKPi8z2EJ82d", "PopOutItem")) {
    {
      var I = {};
      I.value = true;
      Object.defineProperty(j, "__esModule", I);
      var m = cc._decorator,
        B = m.ccclass,
        X = (m.property, function (Z) {
          function T() {
            return null !== Z && Z.apply(this, arguments) || this;
          }
          return __extends(T, Z), T.prototype.show = function (M, C, V, N, q, f, g, l, K) {
            this.showItem(M, C, V, N, q, f, g, l, K);
          }, T.prototype.hide = function () {
            this.hideItem();
          }, T.prototype.showItem = function (M, C, V, N, q) {
            {
              this.setPayoutValue(N, C), this.node.active = true, this.node.setPosition(q), M && M();
            }
          }, T.prototype.hideItem = function () {
            this.node.active = false;
          }, T.prototype.destroy = function () {
            this.node.destroy(), Z.prototype.destroy.call(this);
          }, T.prototype.setPayoutValue = function (M, C) {
            var V = C[M];
            Object.keys(V).reverse();
          }, T.prototype.setCancelCallback = function (M) {
            this.Jf = M;
          }, T.prototype.cancalCallback = function () {
            {
              this.Jf && this.Jf();
            }
          }, __decorate([B], T);
        }(cc.Component));
      j.default = X, cc._RF.pop();
    }
  }
}
module.exports = PopOutItem;
