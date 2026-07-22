// module: NavigationDefaultTransition
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function NavigationDefaultTransition(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "2472eYgH9NBWJvtIuLXvIEh", "NavigationDefaultTransition")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["DefaultNavigationPopTransition"] = j["DefaultNavigationPushTransition"] = void 0;
    var m = F("ViewControllerTransition"),
      B = function (Z) {
        function T() {
          return null !== Z && Z["apply"](this, arguments) || this;
        }
        return __extends(T, Z), T["prototype"]["transitionDuration"] = function () {}, T["prototype"]["animateTransition"] = function (M, C) {
          {
            var V = M["getToController"](),
              N = M["getFromController"](),
              q = M["getContainer"](),
              f = (N["node"]["anchorX"] - q["anchorX"] - 1) * q["width"],
              g = (N["node"]["anchorY"] - q["anchorY"]) * q["height"];
            N["node"]["runAction"](cc["sequence"](cc["moveTo"](0.4, cc['v2'](f, g))["easing"](cc["easeSineIn"]()), cc["callFunc"](function () {
              N["node"]["setPosition"](f, g);
            })));
            var l = (V["node"]["anchorX"] - q["anchorX"]) * q["width"],
              K = (V["node"]["anchorY"] - q["anchorY"]) * q["height"];
            V["node"]["runAction"](cc["sequence"](cc["moveTo"](0.4, cc['v2'](l, K))["easing"](cc["easeSineIn"]()), cc["callFunc"](function () {
              {
                V["node"]["setPosition"](l, K), C && C();
              }
            })));
          }
        }, T["prototype"]["animationEnd"] = function () {}, T;
      }(m["default"]);
    j["DefaultNavigationPushTransition"] = B;
    var X = function (Z) {
      function T() {
        return null !== Z && Z["apply"](this, arguments) || this;
      }
      return __extends(T, Z), T["prototype"]["transitionDuration"] = function () {}, T["prototype"]["animateTransition"] = function (M, C) {
        var V = M["getToController"](),
          N = M["getFromController"](),
          q = M["getContainer"](),
          f = (N["node"]["anchorX"] - q["anchorX"] + 1) * q["width"],
          g = (N["node"]["anchorY"] - q["anchorY"]) * q["height"];
        N["node"]["runAction"](cc["sequence"](cc["moveTo"](0.4, cc['v2'](f, g))["easing"](cc["easeSineIn"]()), cc["callFunc"](function () {
          N["node"]["setPosition"](f, g);
        })));
        var l = (V["node"]["anchorX"] - q["anchorX"]) * q["width"],
          K = (V["node"]["anchorY"] - q["anchorY"]) * q["height"];
        V["node"]["runAction"](cc["sequence"](cc["moveTo"](0.4, cc['v2'](l, K))["easing"](cc["easeSineIn"]()), cc["callFunc"](function () {
          V["node"]["setPosition"](l, K), C && C();
        })));
      }, T["prototype"]["animationEnd"] = function () {}, T;
    }(m["default"]);
    j["DefaultNavigationPopTransition"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = NavigationDefaultTransition;
