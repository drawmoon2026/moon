// module: MahjongMovingController
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function MahjongMovingController(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "5db74dRaTtE5brT1vVEZpMv", "MahjongMovingController")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = cc["_decorator"]["ccclass"],
      B = function (X) {
        {
          function Z() {
            var T = null !== X && X["apply"](this, arguments) || this;
            return T['Mu'] = void 0, T;
          }
          return __extends(Z, X), Z["prototype"]["setReadyToGoldCallback"] = function (T) {
            this['Mu'] = T;
          }, Z["prototype"]["startAnimation"] = function () {
            this['yu']();
          }, Z["prototype"]["readyToGoldBase"] = function () {
            this['Mu'] && this['Mu']();
          }, Z["prototype"]['yu'] = function () {
            {
              this["node"]["getComponent"](cc["Animation"])["playAdditive"]("slot_to_mid_anime");
            }
          }, __decorate([m], Z);
        }
      }(cc["Component"]);
    j["default"] = B, cc["_RF"]["pop"]();
  }
}
module.exports = MahjongMovingController;
