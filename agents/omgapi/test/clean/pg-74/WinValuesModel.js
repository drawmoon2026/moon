// module: WinValuesModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function WinValuesModel(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "501f6RTfh9LVInQJ/Y+n54G", "WinValuesModel")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["WinValuesModel"] = void 0;
    var m = function () {
      function B(X) {
        X && (this['oC'] = JSON["parse"](JSON["stringify"](X)), this['AC'] = Object["keys"](this['oC']));
      }
      return B["prototype"]["getWinValueByPosition"] = function (X) {
        return this['oC'][X];
      }, Object["defineProperty"](B["prototype"], "winValuePositions", {
        'get': function () {
          return this['AC'];
        },
        'enumerable': !1,
        'configurable': !0
      }), Object["defineProperty"](B["prototype"], "rawData", {
        'get': function () {
          return JSON["parse"](JSON["stringify"](this['oC']));
        },
        'enumerable': !1,
        'configurable': !0
      }), B;
    }();
    j["WinValuesModel"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = WinValuesModel;
