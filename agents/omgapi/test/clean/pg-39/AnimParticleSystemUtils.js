// module: AnimParticleSystemUtils
// Cocos 模块函数,参数 (require, module, exports) = (l, j, exports)
function AnimParticleSystemUtils(l, j, exports) {
  'use strict';

  cc._RF.push(j, "cbd06HrkTNFtbM/q+8lJvnc", "AnimParticleSystemUtils") || (exports.__esModule = true, exports.getAccelerationDistance = function (y, B) {
    {
      return 0.5 * y * B * B;
    }
  }, exports.getRandomFromRange = function (y, B) {
    return y + B * (Math.random() - 0.5) * 2;
  }, cc._RF.pop());
}
module.exports = AnimParticleSystemUtils;
