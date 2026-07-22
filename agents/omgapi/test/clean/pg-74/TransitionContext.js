// module: TransitionContext
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function TransitionContext(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "9fd10r5SF9AY7ViKPJFg+fR", "TransitionContext")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["TransitionContext"] = void 0;
    var m = function () {
      {
        function B(X, Z, T, M, C) {
          this['Eg'] = X, this['Ng'] = Z, this['Gg'] = T, this['kg'] = M, this['Rg'] = C;
        }
        return B["prototype"]["getFromController"] = function () {
          {
            return this['Eg'];
          }
        }, B["prototype"]["getToController"] = function () {
          return this['Ng'];
        }, B["prototype"]["getFromView"] = function () {
          return this['Gg'];
        }, B["prototype"]["getToView"] = function () {
          return this['kg'];
        }, B["prototype"]["getContainer"] = function () {
          return this['Rg'];
        }, B;
      }
    }();
    j["TransitionContext"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = TransitionContext;
