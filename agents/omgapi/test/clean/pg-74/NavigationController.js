// module: NavigationController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NavigationController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "d742diXy4tHCIVIgSy1jEIb", "NavigationController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("ViewController"),
      X = F("NavigationBar"),
      Z = F("TransitionEnum"),
      T = F("NavigationDefaultTransition"),
      M = F("TransitionContext"),
      C = F("UIKit"),
      V = F("TabBarItem"),
      N = cc._decorator,
      q = N.ccclass,
      g = N.property,
      K = function (O) {
        {
          function x() {
            var p = null !== O && O.apply(this, arguments) || this;
            return p.defaultNavigationBar = undefined, p.statusBarPlaceholderNode = undefined, p.contentNode = undefined, p.Ll = undefined, p.Pl = [], p.Dl = false, p.Ul = undefined, p;
          }
          return __extends(x, O), Object.defineProperty(x.prototype, "controllers", {
            'get': function () {
              return this.Pl.slice();
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(x.prototype, "tabBarItem", {
            'get': function () {
              return this.Ul;
            },
            'set': function (p) {
              this.Ul = p;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(x.prototype, "topController", {
            'get': function () {
              var p = this.controllers;
              if (p && p.length > 0) return p[p.length - 1];
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(x.prototype, "backController", {
            'get': function () {
              var p = this.controllers;
              if (p && p.length > 1) return p[p.length - 2];
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(x.prototype, "navigationBar", {
            'get': function () {
              return this.Ll || (this.Ll = this.defaultNavigationBar, this.Ll && (this.Ll.navigator = this)), this.Ll;
            },
            'set': function (p) {
              {
                if (p !== this.Ll) {
                  var b = this.Ll;
                  this.Ll = p, this.Ll && (this.Ll.navigator = this), b && (b.navigator = undefined);
                }
              }
            },
            'enumerable': false,
            'configurable': true
          }), x.prototype.onLoad = function () {
            var p = cc.Canvas.instance.designResolution,
              b = p.height,
              L = p.width;
            this.node.setContentSize(L, b), this.navigationBar.node.width = L;
            var H = "land" === shell.environment.getOrientationMode() ? C.NavigationConfigs.bar.landscape : C.NavigationConfigs.bar.portrait,
              U = this.navigationBar.getBarHeight(H, this.safeAreaInsets),
              k = b - U;
            this.contentNode.setContentSize(L, k), this.contentNode.y = -U, this.statusBarPlaceholderNode.height = this.safeAreaInsets.top, this.node.on("size-changed", this.xl, this);
          }, x.prototype.onEnable = function () {
            var p = this.topController;
            p && (p.enabled = true);
          }, x.prototype.onDisable = function () {
            var p = this.topController;
            p && (p.enabled = false);
          }, x.prototype.viewWillAppear = function (p) {
            var b = this.topController;
            b && b.viewWillAppear(p);
          }, x.prototype.viewDidAppear = function (p) {
            {
              var b = this.topController;
              b && b.viewDidAppear(p);
            }
          }, x.prototype.viewWillDisappear = function (p) {
            var b = this.topController;
            b && b.viewWillDisappear(p);
          }, x.prototype.viewDidDisappear = function (p) {
            var b = this.topController;
            b && b.viewDidDisappear(p);
          }, x.prototype.viewDidLayoutSubviews = function () {}, x.prototype.pushController = function (p, b) {
            {
              if (!this.Dl && p) {
                {
                  this.Dl = true;
                  var L = this.contentNode,
                    H = L.width,
                    U = L.height;
                  p.navigator = this, p.view.setContentSize(H, U);
                  var k = (p.node.anchorY - L.anchorY) * U,
                    Y = (p.node.anchorX - L.anchorX) * H;
                  b && (Y = (p.node.anchorX - L.anchorX + 1) * H), p.view.setPosition(cc.v2(Y, k)), L.addChild(p.view), p.enabled = true, this.Fl() ? p.viewWillAppear(b) : b = false;
                  var y = this.topController;
                  if (y && y.viewWillDisappear(b), this.navigationBar.pushItem(p, b), b) {
                    var z = undefined,
                      S = this.navigationDelegate;
                    z = S && S.animationForOperation ? S.animationForOperation(Z.NavigationControllerOperation.Push) : new T.DefaultNavigationPushTransition();
                    var P = y ? y.view : undefined,
                      G = new M.TransitionContext(y, p, P, p.view, L),
                      A = this.Wl.bind(this, p, true);
                    z.animateTransition(G, A);
                  } else this.Wl(p, false);
                }
              }
            }
          }, x.prototype.popController = function (p) {
            var b = this.topController,
              L = this.backController;
            if (!this.Dl && b && L) if (this.Dl = true, L.enabled = true, L.viewWillAppear(p), b.viewWillDisappear(p), this.navigationBar.popItem(p), p) {
              var H = undefined,
                U = this.navigationDelegate;
              H = U && U.animationForOperation ? U.animationForOperation(Z.NavigationControllerOperation.Pop) : new T.DefaultNavigationPopTransition();
              var k = new M.TransitionContext(b, L, b.view, L.view, this.contentNode),
                Y = this.Jl.bind(this, true);
              H.animateTransition(k, Y);
            } else this.Jl(false);
          }, x.prototype.popToController = function (p, b) {
            for (var L = this.controllers.length - b; L;) {
              var H = this.topController;
              H && (H.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(H.view), this.Pl.pop(), H.node.destroy()), L -= 1;
            }
            this.popController(p);
          }, x.prototype.popToRootController = function (p) {
            {
              for (var b = this.controllers.length - 2; b;) {
                var L = this.topController;
                L && (L.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(L.view), this.Pl.pop(), L.node.destroy()), b -= 1;
              }
              this.popController(p);
            }
          }, x.prototype.hideNavigationBarBackground = function () {
            {
              this.navigationBar.background.node.active = false, this.navigationBar.shadow.active = false;
            }
          }, x.prototype.showNavigationBarBackground = function () {
            this.navigationBar.background.node.active = true, this.navigationBar.shadow.active = true;
          }, x.prototype.hideNavigationBar = function (p) {
            undefined === p && (p = true), this.navigationBar.node.active = false, p && this.xl();
          }, x.prototype.showNavigationBar = function (p) {
            undefined === p && (p = true), this.navigationBar.node.active = true, p && this.xl();
          }, x.prototype.enableItems = function () {
            this.navigationBar.enableButtons();
          }, x.prototype.disableItems = function () {
            this.navigationBar.disableButtons();
          }, x.prototype.setControllers = function (p) {
            if (p && p.length && !(p.length < 1)) {
              {
                for (var b = this.controllers, L = b.filter(function (Y) {
                    return p.indexOf(Y) < 0;
                  }), H = L.length - 1; H >= 0; H--) {
                  var U = L[H];
                  U.enabled = false, this.contentNode.removeChild(U.view);
                  var k = b.indexOf(U);
                  this.navigationBar.removeItemsAtIndex(k), U.node.destroy();
                }
                this.Pl = p;
              }
            }
          }, x.prototype.xl = function () {
            {
              this.Vl(), this.zl();
            }
          }, x.prototype.Vl = function () {
            var p = this.contentNode,
              b = this.navigationBar.node.active ? this.navigationBar.node.height : this.statusBarPlaceholderNode.height,
              L = this.node.height - b;
            p.setContentSize(this.node.width, L), p.y = -b;
          }, x.prototype.zl = function () {
            var p = this.contentNode,
              b = p.width,
              L = p.height,
              H = p.anchorX,
              U = p.anchorY;
            this.controllers.forEach(function (k) {
              {
                var Y = k.node,
                  y = (Y.anchorX - H) * b,
                  z = (Y.anchorY - U) * L;
                k.viewWillLayoutSubviews(), Y.setContentSize(b, L), Y.setPosition(cc.v2(y, z)), k.viewDidLayoutSubviews();
              }
            });
          }, x.prototype.Wl = function (p, b) {
            undefined === b && (b = false), this.Fl() && p.viewDidAppear(b);
            var L = this.topController;
            this.Pl.push(p), p.view.setContentSize(this.contentNode.width, this.contentNode.height), this.Dl = false, L && (L.viewDidDisappear(b), L.enabled = false);
          }, x.prototype.Jl = function (p) {
            undefined === p && (p = false);
            var b = this.backController;
            b && b.viewDidAppear(p), this.scheduleOnce(this.Kl.bind(this, p));
          }, x.prototype.Kl = function (p) {
            var b = this.topController;
            b && (this.contentNode.removeChild(b.view), this.Pl.pop(), this.Dl = false, b.viewDidDisappear(p), b.enabled = false, b.destroy && b.destroy(), b.node.destroy());
          }, x.prototype.Fl = function () {
            return !(this.tabBarItem instanceof V.default && !this.topController);
          }, __decorate([g(X.default)], x.prototype, "defaultNavigationBar", undefined), __decorate([g(cc.Node)], x.prototype, "statusBarPlaceholderNode", undefined), __decorate([g(cc.Node)], x.prototype, "contentNode", undefined), __decorate([q], x);
        }
      }(B.default);
    I.default = K, cc._RF.pop();
  }
}
module.exports = NavigationController;
