// module: SpinConfigHandler
// Cocos 模块函数,参数 (require, module, exports) = (c, j, exports)
function SpinConfigHandler(c, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "932b5xCb0FH57DavWl/zOYi", "SpinConfigHandler")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.initSpinConfig = exports.featureConfig = undefined;
    var B = {};
    B.minimumSpinningTime = 0;
    B.regularSpinningTime = 1;
    B.fastStopFeature = false;
    B.turboSpinFeature = false;
    exports.featureConfig = X, exports.initSpinConfig = function (Z) {
      var M = Z.jurisdictionModel.singlePlayMinDuration,
        C = M > 0 ? Z.minimumSpinningTimeOffset || 0 : Z.minimumSpinningTime,
        V = M > 0 ? Z.regularSpinningTimeOffset || 0 : Z.regularSpinningTime;
      T.minimumSpinningTime = M + C, T.regularSpinningTime = M + V, T.turboSpinFeature = Z.jurisdictionModel.turboSpinEnable, T.fastStopFeature = Z.jurisdictionModel.turboSpinEnable, exports.featureConfig = Object.freeze(T);
    }, cc._RF.pop();
  }
}
module.exports = SpinConfigHandler;
