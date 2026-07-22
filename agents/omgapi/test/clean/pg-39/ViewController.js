// module: ViewController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ViewController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "ef8ab8zk59N1LEX0M2uhmRU", "ViewController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("UIKitUtils"),
      C = require("UIKit"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.title = '', W.leftItem = undefined, W.middleItem = undefined, W.rightItem = undefined, W.lr = undefined, W.lS = undefined, W;
        }
        return __extends(D, m), Object.defineProperty(D.prototype, "navigator", {
          'get': function () {
            return this.lr;
          },
          'set': function (W) {
            this.lr = W;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "view", {
          'get': function () {
            return this.node;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "safeAreaInsets", {
          'get': function () {
            var W, k, z, L;
            return this.lS || (this.lS = (W = x.deviceHasNotch(), k = x.isIphone(), z = x.isNotBrowserMode(), L = shell.is1959Supported, W && z && L ? C.safeArea.iphone_x : W && L ? {
              'top': C.safeArea.normal.top,
              'left': C.safeArea.iphone_x.left,
              'bottom': C.safeArea.iphone_x.bottom,
              'right': C.safeArea.iphone_x.right
            } : k && z ? C.safeArea.iphone : C.safeArea.normal)), this.lS;
          },
          'enumerable': false,
          'configurable': true
        }), D.prototype.onEnable = function () {}, D.prototype.onDisable = function () {}, D.prototype.viewWillAppear = function () {}, D.prototype.viewDidAppear = function () {}, D.prototype.viewWillDisappear = function () {}, D.prototype.viewDidDisappear = function () {}, D.prototype.viewWillLayoutSubviews = function () {}, D.prototype.viewDidLayoutSubviews = function () {}, __decorate([M(cc.String)], D.prototype, "title", undefined), __decorate([V], D);
      }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = ViewController;
