// module: NavigationDefaultTransition
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NavigationDefaultTransition(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "2472eYgH9NBWJvtIuLXvIEh", "NavigationDefaultTransition")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.DefaultNavigationPopTransition = exports.DefaultNavigationPushTransition = undefined;
    var x = require("ViewControllerTransition"),
      C = function (r) {
        function V() {
          return null !== r && r.apply(this, arguments) || this;
        }
        return __extends(V, r), V.prototype.transitionDuration = function () {}, V.prototype.animateTransition = function (M, q) {
          var m = M.getToController(),
            D = M.getFromController(),
            W = M.getContainer(),
            k = (D.node.anchorX - W.anchorX - 1) * W.width,
            z = (D.node.anchorY - W.anchorY) * W.height;
          D.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(k, z)).easing(cc.easeSineIn()), cc.callFunc(function () {
            D.node.setPosition(k, z);
          })));
          var L = (m.node.anchorX - W.anchorX) * W.width,
            v = (m.node.anchorY - W.anchorY) * W.height;
          m.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(L, v)).easing(cc.easeSineIn()), cc.callFunc(function () {
            m.node.setPosition(L, v), q && q();
          })));
        }, V.prototype.animationEnd = function () {}, V;
      }(x.default);
    exports.DefaultNavigationPushTransition = C;
    var H = function (r) {
      function V() {
        return null !== r && r.apply(this, arguments) || this;
      }
      return __extends(V, r), V.prototype.transitionDuration = function () {}, V.prototype.animateTransition = function (M, q) {
        var m = M.getToController(),
          D = M.getFromController(),
          W = M.getContainer(),
          k = (D.node.anchorX - W.anchorX + 1) * W.width,
          z = (D.node.anchorY - W.anchorY) * W.height;
        D.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(k, z)).easing(cc.easeSineIn()), cc.callFunc(function () {
          D.node.setPosition(k, z);
        })));
        var L = (m.node.anchorX - W.anchorX) * W.width,
          v = (m.node.anchorY - W.anchorY) * W.height;
        m.node.runAction(cc.sequence(cc.moveTo(0.4, cc.v2(L, v)).easing(cc.easeSineIn()), cc.callFunc(function () {
          m.node.setPosition(L, v), q && q();
        })));
      }, V.prototype.animationEnd = function () {}, V;
    }(x.default);
    exports.DefaultNavigationPopTransition = H, cc._RF.pop();
  }
}
module.exports = NavigationDefaultTransition;
