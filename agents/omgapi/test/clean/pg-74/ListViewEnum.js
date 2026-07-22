// module: ListViewEnum
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function ListViewEnum(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "1db1bgDOdFP2LjHMP1kDfIt", "ListViewEnum") || (Object.defineProperty(exports, "__esModule", I), exports.cellUpdateAction = exports.scrollPosition = undefined, function (m) {
    m[m.scrollPositionTop = 0] = "scrollPositionTop", m[m.scrollPositionMiddle = 1] = "scrollPositionMiddle", m[m.scrollPositionBottom = 2] = "scrollPositionBottom";
  }(exports.scrollPosition || (exports.scrollPosition = {})), function (m) {
    m[m.cellUpdateActionInsert = 0] = "cellUpdateActionInsert", m[m.cellUpdateActionRemove = 1] = "cellUpdateActionRemove", m[m.cellUpdateActionUpdate = 2] = "cellUpdateActionUpdate";
  }(exports.cellUpdateAction || (exports.cellUpdateAction = {})), cc._RF.pop());
}
module.exports = ListViewEnum;
