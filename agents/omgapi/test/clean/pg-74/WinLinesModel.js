// module: WinLinesModel
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function WinLinesModel(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "24a5eWztK9Pkb2VKy4b0JAV", "WinLinesModel")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["WinLinesModel"] = void 0;
    var m = function () {
      function B(X) {
        X && (this['oC'] = JSON["parse"](JSON["stringify"](X)), this['cC'] = Object["keys"](this['oC']));
      }
      return B["prototype"]["getWinLinesByPosition"] = function (X) {
        {
          return this['oC'][X];
        }
      }, Object["defineProperty"](B["prototype"], "winPositions", {
        'get': function () {
          {
            return this['cC'];
          }
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
    j["WinLinesModel"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = WinLinesModel;
