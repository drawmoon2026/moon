// module: GameRegionUtils
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function GameRegionUtils(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "bfde0A5L2BNVpzBMpH0I/vp", "GameRegionUtils")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.checkUKGCRegion = undefined;
    var x = require("GameUtils"),
      C = require("PGGDataSource");
    exports.checkUKGCRegion = function (H) {
      var r = false;
      return x.checkOperatorProfit(H, C.pgDataSource) && (r = true), r;
    }, cc._RF.pop();
  }
}
module.exports = GameRegionUtils;
