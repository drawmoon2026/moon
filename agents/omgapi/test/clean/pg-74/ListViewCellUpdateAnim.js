// module: ListViewCellUpdateAnim
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function ListViewCellUpdateAnim(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "5502dsWooBCr7Ubvh4+KVSO", "ListViewCellUpdateAnim")) {
    {
      var I = {};
      I["value"] = !0;
      Object["defineProperty"](j, "__esModule", I);
      var m = cc["_decorator"]["ccclass"],
        B = function () {
          function X() {}
          return X["prototype"]["layoutDuration"] = function () {
            {
              return 0.5;
            }
          }, X["prototype"]["layoutDelay"] = function () {
            {
              return 0.5;
            }
          }, X["prototype"]["updateCellAmimation"] = function () {}, X["prototype"]["animationEnd"] = function () {}, __decorate([m], X);
        }();
      j["default"] = B, cc["_RF"]["pop"]();
    }
  }
}
module.exports = ListViewCellUpdateAnim;
