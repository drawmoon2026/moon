// module: CoinExplosionAnimationController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function CoinExplosionAnimationController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "602e6ZKVhxNHLGyrQdLxveu", "CoinExplosionAnimationController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = cc["_decorator"],
      X = B["ccclass"],
      Z = B["property"],
      T = function (M) {
        function C() {
          {
            var V = null !== M && M["apply"](this, arguments) || this;
            return V["animation"] = void 0, V['Ls'] = void 0, V;
          }
        }
        return __extends(C, M), C["prototype"]["play"] = function (V, N) {
          this['Ls'] = N, this["animation"]["play"](V);
        }, C["prototype"]["stop"] = function () {
          this['Ls'] = void 0, this["animation"]["stop"]();
        }, C["prototype"]["onAnimationFinish"] = function () {
          var V = this['Ls'];
          this['Ls'] = void 0, V && V();
        }, C["prototype"]["destroy"] = function () {
          {
            return this["stop"](), this["node"]["destroy"](), M["prototype"]["destroy"]["call"](this);
          }
        }, __decorate([Z(cc["Animation"])], C["prototype"], "animation", void 0), __decorate([X], C);
      }(cc["Component"]);
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = CoinExplosionAnimationController;
