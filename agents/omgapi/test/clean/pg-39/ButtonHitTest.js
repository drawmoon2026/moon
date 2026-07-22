// module: ButtonHitTest
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function ButtonHitTest(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "95aac3PHb1J8pXlbPzijfq9", "ButtonHitTest")) {
    {
      exports.__esModule = true, exports.buttonHitTest = function (C) {
        var H = cc.EventListener.ListenerID.TOUCH_ONE_BY_ONE;
        cc.internal.eventManager[x.bs](H, cc.director.getScene());
        var r = cc.internal.eventManager[x.ms](H);
        if (!r) return false;
        for (var V, M = r[x.Ss], q = C.parent.convertToWorldSpaceAR(C.getPosition()), m = 0; m < M.length; ++m) if (M[m].owner[x.gs](q, M[m])) {
          V = M[m].owner;
          break;
        }
        return V && V === C;
      };
      var B = {};
      B.bs = "_sortListenersOfSceneGraphPriority";
      B.ms = "_getListeners";
      B.gs = "_hitTest";
      B.Ss = "_sceneGraphListeners";
      var x = cc.Enum(B);
      cc._RF.pop();
    }
  }
}
module.exports = ButtonHitTest;
