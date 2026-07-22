// module: ListViewEnum
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function ListViewEnum(F, c, j) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "1db1bgDOdFP2LjHMP1kDfIt", "ListViewEnum") || (Object.defineProperty(j, "__esModule", I), j.cellUpdateAction = j.scrollPosition = undefined, function (m) {
    m[m.scrollPositionTop = 0] = "scrollPositionTop", m[m.scrollPositionMiddle = 1] = "scrollPositionMiddle", m[m.scrollPositionBottom = 2] = "scrollPositionBottom";
  }(j.scrollPosition || (j.scrollPosition = {})), function (m) {
    m[m.cellUpdateActionInsert = 0] = "cellUpdateActionInsert", m[m.cellUpdateActionRemove = 1] = "cellUpdateActionRemove", m[m.cellUpdateActionUpdate = 2] = "cellUpdateActionUpdate";
  }(j.cellUpdateAction || (j.cellUpdateAction = {})), cc._RF.pop());
}
module.exports = ListViewEnum;
