// module: PiggyParticleFeatureController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function PiggyParticleFeatureController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "6a159I+dZNL8bc1T22g0YDd", "PiggyParticleFeatureController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = cc._decorator.ccclass,
      C = function (H) {
        function r() {
          {
            var V = null !== H && H.apply(this, arguments) || this;
            return V.onScrollerCallback = undefined, V;
          }
        }
        return __extends(r, H), r.prototype.setScrollerShowCallback = function (V) {
          this.onScrollerCallback = V;
        }, r.prototype.onScrollerShow = function () {
          var V = this.onScrollerCallback;
          this.onScrollerCallback = undefined, V && V();
        }, __decorate([x], r);
      }(cc.Component);
    exports.default = C, cc._RF.pop();
  }
}
module.exports = PiggyParticleFeatureController;
