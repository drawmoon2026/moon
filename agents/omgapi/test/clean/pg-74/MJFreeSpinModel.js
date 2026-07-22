// module: MJFreeSpinModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function MJFreeSpinModel(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "eb186Y1lLdEGKkw7Da41MeA", "MJFreeSpinModel")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = function () {
      function B(T) {
        var M = T['aw'],
          C = T['s'],
          V = T['ts'],
          N = T["lwa"],
          q = T["nosa"];
        this['Er'] = M, this['Nr'] = C, this['Gr'] = V, this['kr'] = N, this['Rr'] = q;
      }
      var X = {};
      X["get"] = function () {
        return this['Er'];
      };
      X["enumerable"] = !1;
      X["configurable"] = !0;
      var Z = {};
      Z["get"] = function () {
        return this['Nr'];
      };
      Z["enumerable"] = !1;
      Z["configurable"] = !0;
      return Object["defineProperty"](B["prototype"], "accumulatedWin", X), Object["defineProperty"](B["prototype"], "step", Z), Object["defineProperty"](B["prototype"], "totalStep", {
        'get': function () {
          {
            return this['Gr'];
          }
        },
        'enumerable': !1,
        'configurable': !0
      }), Object["defineProperty"](B["prototype"], "lineWinAmount", {
        'get': function () {
          return this['kr'];
        },
        'enumerable': !1,
        'configurable': !0
      }), Object["defineProperty"](B["prototype"], "noOfStepAdded", {
        'get': function () {
          return this['Rr'];
        },
        'enumerable': !1,
        'configurable': !0
      }), B;
    }();
    j["default"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = MJFreeSpinModel;
