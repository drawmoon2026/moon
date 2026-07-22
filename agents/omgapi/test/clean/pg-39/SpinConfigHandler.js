// module: SpinConfigHandler
// Cocos 模块函数,参数 (require, module, exports) = (O, y, exports)
function SpinConfigHandler(O, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "932b5xCb0FH57DavWl/zOYi", "SpinConfigHandler")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x), exports.initSpinConfig = exports.featureConfig = undefined;
    var C = {};
    C.minimumSpinningTime = 0;
    C.regularSpinningTime = 1;
    C.fastStopFeature = false;
    C.turboSpinFeature = false;
    exports.featureConfig = H, exports.initSpinConfig = function (r) {
      var M = r.jurisdictionModel.singlePlayMinDuration,
        q = M > 0 ? r.minimumSpinningTimeOffset || 0 : r.minimumSpinningTime,
        m = M > 0 ? r.regularSpinningTimeOffset || 0 : r.regularSpinningTime;
      V.minimumSpinningTime = M + q, V.regularSpinningTime = M + m, V.turboSpinFeature = r.jurisdictionModel.turboSpinEnable, V.fastStopFeature = r.jurisdictionModel.turboSpinEnable, exports.featureConfig = Object.freeze(V);
    }, cc._RF.pop();
  }
}
module.exports = SpinConfigHandler;
