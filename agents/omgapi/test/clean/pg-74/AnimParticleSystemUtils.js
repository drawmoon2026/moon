// module: AnimParticleSystemUtils
// Cocos 模块函数,参数 (require, module, exports) = (Q, require, exports)
function AnimParticleSystemUtils(Q, require, exports) {
  'use strict';

  cc._RF.push(require, "cbd06HrkTNFtbM/q+8lJvnc", "AnimParticleSystemUtils") || (exports.__esModule = true, exports.getAccelerationDistance = function (j, I) {
    {
      return 0.5 * j * I * I;
    }
  }, exports.getRandomFromRange = function (j, I) {
    {
      return j + I * (Math.random() - 0.5) * 2;
    }
  }, cc._RF.pop());
}
module.exports = AnimParticleSystemUtils;
