// module: NavigationDefaultTransition
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function NavigationDefaultTransition(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "2472eYgH9NBWJvtIuLXvIEh", "NavigationDefaultTransition")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I), exports.DefaultNavigationPopTransition = exports.DefaultNavigationPushTransition = undefined;
    var m = require("ViewControllerTransition"),
      B = function (Z) {
        function T() {
          return null !== Z && Z.apply(this, arguments) || this;
        }
        return __extends(T, Z), T.prototype.transitionDuration = function () {}, T.prototype.animateTransition = function (M, C) {
          {
            var V = M.getToController(),
              N = M.getFromController(),
              q = M.getContainer(),
              f = (N.node.anchorX - q.anchorX - 1) * q.width,
              g = (N.node.anchorY - q.anchorY) * q.height;
            N.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(f, g)).easing(cc.easeSineIn()), cc.callFunc(function () {
              N.node.setPosition(f, g);
            })));
            var l = (V.node.anchorX - q.anchorX) * q.width,
              K = (V.node.anchorY - q.anchorY) * q.height;
            V.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(l, K)).easing(cc.easeSineIn()), cc.callFunc(function () {
              {
                V.node.setPosition(l, K), C && C();
              }
            })));
          }
        }, T.prototype.animationEnd = function () {}, T;
      }(m.default);
    exports.DefaultNavigationPushTransition = B;
    var X = function (Z) {
      function T() {
        return null !== Z && Z.apply(this, arguments) || this;
      }
      return __extends(T, Z), T.prototype.transitionDuration = function () {}, T.prototype.animateTransition = function (M, C) {
        var V = M.getToController(),
          N = M.getFromController(),
          q = M.getContainer(),
          f = (N.node.anchorX - q.anchorX + 1) * q.width,
          g = (N.node.anchorY - q.anchorY) * q.height;
        N.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(f, g)).easing(cc.easeSineIn()), cc.callFunc(function () {
          N.node.setPosition(f, g);
        })));
        var l = (V.node.anchorX - q.anchorX) * q.width,
          K = (V.node.anchorY - q.anchorY) * q.height;
        V.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(l, K)).easing(cc.easeSineIn()), cc.callFunc(function () {
          V.node.setPosition(l, K), C && C();
        })));
      }, T.prototype.animationEnd = function () {}, T;
    }(m.default);
    exports.DefaultNavigationPopTransition = X, cc._RF.pop();
  }
}
module.exports = NavigationDefaultTransition;
