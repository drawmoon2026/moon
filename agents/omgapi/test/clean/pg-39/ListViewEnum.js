// module: ListViewEnum
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function ListViewEnum(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "1db1bgDOdFP2LjHMP1kDfIt", "ListViewEnum") || (Object.defineProperty(exports, "__esModule", B), exports.cellUpdateAction = exports.scrollPosition = undefined, function (x) {
    x[x.scrollPositionTop = 0] = "scrollPositionTop", x[x.scrollPositionMiddle = 1] = "scrollPositionMiddle", x[x.scrollPositionBottom = 2] = "scrollPositionBottom";
  }(exports.scrollPosition || (exports.scrollPosition = {})), function (x) {
    x[x.cellUpdateActionInsert = 0] = "cellUpdateActionInsert", x[x.cellUpdateActionRemove = 1] = "cellUpdateActionRemove", x[x.cellUpdateActionUpdate = 2] = "cellUpdateActionUpdate";
  }(exports.cellUpdateAction || (exports.cellUpdateAction = {})), cc._RF.pop());
}
module.exports = ListViewEnum;
