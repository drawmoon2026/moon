// module: ViewController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function ViewController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "ef8ab8zk59N1LEX0M2uhmRU", "ViewController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("UIKitUtils"),
        X = F("UIKit"),
        Z = cc["_decorator"],
        T = Z["ccclass"],
        M = Z["property"],
        C = function (V) {
          {
            function N() {
              var q = null !== V && V["apply"](this, arguments) || this;
              return q["title"] = '', q["leftItem"] = void 0, q["middleItem"] = void 0, q["rightItem"] = void 0, q['Sl'] = void 0, q['Qg'] = void 0, q;
            }
            return __extends(N, V), Object["defineProperty"](N["prototype"], "navigator", {
              'get': function () {
                {
                  return this['Sl'];
                }
              },
              'set': function (q) {
                {
                  this['Sl'] = q;
                }
              },
              'enumerable': !1,
              'configurable': !0
            }), Object["defineProperty"](N["prototype"], "view", {
              'get': function () {
                {
                  return this["node"];
                }
              },
              'enumerable': !1,
              'configurable': !0
            }), Object["defineProperty"](N["prototype"], "safeAreaInsets", {
              'get': function () {
                var q, f, g, l;
                return this['Qg'] || (this['Qg'] = (q = B["deviceHasNotch"](), f = B["isIphone"](), g = B["isNotBrowserMode"](), l = shell["is1959Supported"], q && g && l ? X["safeArea"]["iphone_x"] : q && l ? {
                  'top': X["safeArea"]["normal"]["top"],
                  'left': X["safeArea"]["iphone_x"]["left"],
                  'bottom': X["safeArea"]["iphone_x"]["bottom"],
                  'right': X["safeArea"]["iphone_x"]["right"]
                } : f && g ? X["safeArea"]["iphone"] : X["safeArea"]["normal"])), this['Qg'];
              },
              'enumerable': !1,
              'configurable': !0
            }), N["prototype"]["onEnable"] = function () {}, N["prototype"]["onDisable"] = function () {}, N["prototype"]["viewWillAppear"] = function () {}, N["prototype"]["viewDidAppear"] = function () {}, N["prototype"]["viewWillDisappear"] = function () {}, N["prototype"]["viewDidDisappear"] = function () {}, N["prototype"]["viewWillLayoutSubviews"] = function () {}, N["prototype"]["viewDidLayoutSubviews"] = function () {}, __decorate([M(cc["String"])], N["prototype"], "title", void 0), __decorate([T], N);
          }
        }(cc["Component"]);
      I["default"] = C, cc["_RF"]["pop"]();
    }
  }
}
module.exports = ViewController;
