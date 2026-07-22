// module: ButtonHitTest
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function ButtonHitTest(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "95aac3PHb1J8pXlbPzijfq9", "ButtonHitTest")) {
    j["__esModule"] = !0, j["buttonHitTest"] = function (B) {
      var X = cc["EventListener"]["ListenerID"]["TOUCH_ONE_BY_ONE"];
      cc["internal"]["eventManager"][m['gs']](X, cc["director"]["getScene"]());
      var Z = cc["internal"]["eventManager"][m['Cs']](X);
      if (!Z) return !1;
      for (var T, M = Z[m['Ms']], C = B["parent"]["convertToWorldSpaceAR"](B["getPosition"]()), V = 0; V < M["length"]; ++V) if (M[V]["owner"][m['ys']](C, M[V])) {
        {
          T = M[V]["owner"];
          break;
        }
      }
      return T && T === B;
    };
    var I = {};
    I['gs'] = "_sortListenersOfSceneGraphPriority";
    I['Cs'] = "_getListeners";
    I['ys'] = "_hitTest";
    I['Ms'] = "_sceneGraphListeners";
    var m = cc["Enum"](I);
    cc["_RF"]["pop"]();
  }
}
module.exports = ButtonHitTest;
