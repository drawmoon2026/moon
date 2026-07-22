// module: NavigationController
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, B)
function NavigationController(require, exports, B) {
  'use strict';

  if (!cc._RF.push(exports, "d742diXy4tHCIVIgSy1jEIb", "NavigationController")) {
    var x = {};
    x.value = true;
    Object.defineProperty(B, "__esModule", x);
    var C = require("ViewController"),
      H = require("NavigationBar"),
      V = require("TransitionEnum"),
      M = require("NavigationDefaultTransition"),
      q = require("TransitionContext"),
      m = require("UIKit"),
      D = require("TabBarItem"),
      W = cc._decorator,
      k = W.ccclass,
      z = W.property,
      L = function (v) {
        function b() {
          var U = null !== v && v.apply(this, arguments) || this;
          return U.defaultNavigationBar = undefined, U.statusBarPlaceholderNode = undefined, U.contentNode = undefined, U.Gr = undefined, U.Nr = [], U.Tr = false, U.Hr = undefined, U;
        }
        return __extends(b, v), Object.defineProperty(b.prototype, "controllers", {
          'get': function () {
            return this.Nr.slice();
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(b.prototype, "tabBarItem", {
          'get': function () {
            return this.Hr;
          },
          'set': function (U) {
            this.Hr = U;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(b.prototype, "topController", {
          'get': function () {
            var U = this.controllers;
            if (U && U.length > 0) return U[U.length - 1];
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(b.prototype, "backController", {
          'get': function () {
            {
              var U = this.controllers;
              if (U && U.length > 1) return U[U.length - 2];
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(b.prototype, "navigationBar", {
          'get': function () {
            {
              return this.Gr || (this.Gr = this.defaultNavigationBar, this.Gr && (this.Gr.navigator = this)), this.Gr;
            }
          },
          'set': function (U) {
            {
              if (U !== this.Gr) {
                {
                  var Q = this.Gr;
                  this.Gr = U, this.Gr && (this.Gr.navigator = this), Q && (Q.navigator = undefined);
                }
              }
            }
          },
          'enumerable': false,
          'configurable': true
        }), b.prototype.onLoad = function () {
          var U = cc.Canvas.instance.designResolution,
            Q = U.height,
            w = U.width;
          this.node.setContentSize(w, Q), this.navigationBar.node.width = w;
          var P = "land" === shell.environment.getOrientationMode() ? m.NavigationConfigs.bar.landscape : m.NavigationConfigs.bar.portrait,
            R = this.navigationBar.getBarHeight(P, this.safeAreaInsets),
            T = Q - R;
          this.contentNode.setContentSize(w, T), this.contentNode.y = -R, this.statusBarPlaceholderNode.height = this.safeAreaInsets.top, this.node.on("size-changed", this.Rr, this);
        }, b.prototype.onEnable = function () {
          {
            var U = this.topController;
            U && (U.enabled = true);
          }
        }, b.prototype.onDisable = function () {
          var U = this.topController;
          U && (U.enabled = false);
        }, b.prototype.viewWillAppear = function (U) {
          var Q = this.topController;
          Q && Q.viewWillAppear(U);
        }, b.prototype.viewDidAppear = function (U) {
          {
            var Q = this.topController;
            Q && Q.viewDidAppear(U);
          }
        }, b.prototype.viewWillDisappear = function (U) {
          var Q = this.topController;
          Q && Q.viewWillDisappear(U);
        }, b.prototype.viewDidDisappear = function (U) {
          {
            var Q = this.topController;
            Q && Q.viewDidDisappear(U);
          }
        }, b.prototype.viewDidLayoutSubviews = function () {}, b.prototype.pushController = function (U, Q) {
          if (!this.Tr && U) {
            {
              this.Tr = true;
              var w = this.contentNode,
                P = w.width,
                R = w.height;
              U.navigator = this, U.view.setContentSize(P, R);
              var T = (U.node.anchorY - w.anchorY) * R,
                Y = (U.node.anchorX - w.anchorX) * P;
              Q && (Y = (U.node.anchorX - w.anchorX + 1) * P), U.view.setPosition(cc.v2(Y, T)), w.addChild(U.view), U.enabled = true, this.kr() ? U.viewWillAppear(Q) : Q = false;
              var X = this.topController;
              if (X && X.viewWillDisappear(Q), this.navigationBar.pushItem(U, Q), Q) {
                {
                  var E = undefined,
                    F = this.navigationDelegate;
                  E = F && F.animationForOperation ? F.animationForOperation(V.NavigationControllerOperation.Push) : new M.DefaultNavigationPushTransition();
                  var N = X ? X.view : undefined,
                    Z = new q.TransitionContext(X, U, N, U.view, w),
                    p = this.Lr.bind(this, U, true);
                  E.animateTransition(Z, p);
                }
              } else this.Lr(U, false);
            }
          }
        }, b.prototype.popController = function (U) {
          var Q = this.topController,
            w = this.backController;
          if (!this.Tr && Q && w) if (this.Tr = true, w.enabled = true, w.viewWillAppear(U), Q.viewWillDisappear(U), this.navigationBar.popItem(U), U) {
            var P = undefined,
              R = this.navigationDelegate;
            P = R && R.animationForOperation ? R.animationForOperation(V.NavigationControllerOperation.Pop) : new M.DefaultNavigationPopTransition();
            var T = new q.TransitionContext(Q, w, Q.view, w.view, this.contentNode),
              Y = this.Er.bind(this, true);
            P.animateTransition(T, Y);
          } else this.Er(false);
        }, b.prototype.popToController = function (U, Q) {
          for (var w = this.controllers.length - Q; w;) {
            var P = this.topController;
            P && (P.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(P.view), this.Nr.pop(), P.node.destroy()), w -= 1;
          }
          this.popController(U);
        }, b.prototype.popToRootController = function (U) {
          for (var Q = this.controllers.length - 2; Q;) {
            {
              var w = this.topController;
              w && (w.enabled = false, this.navigationBar.popItem(false), this.contentNode.removeChild(w.view), this.Nr.pop(), w.node.destroy()), Q -= 1;
            }
          }
          this.popController(U);
        }, b.prototype.hideNavigationBarBackground = function () {
          this.navigationBar.background.node.active = false, this.navigationBar.shadow.active = false;
        }, b.prototype.showNavigationBarBackground = function () {
          {
            this.navigationBar.background.node.active = true, this.navigationBar.shadow.active = true;
          }
        }, b.prototype.hideNavigationBar = function (U) {
          undefined === U && (U = true), this.navigationBar.node.active = false, U && this.Rr();
        }, b.prototype.showNavigationBar = function (U) {
          undefined === U && (U = true), this.navigationBar.node.active = true, U && this.Rr();
        }, b.prototype.enableItems = function () {
          this.navigationBar.enableButtons();
        }, b.prototype.disableItems = function () {
          {
            this.navigationBar.disableButtons();
          }
        }, b.prototype.setControllers = function (U) {
          if (U && U.length && !(U.length < 1)) {
            for (var Q = this.controllers, w = Q.filter(function (Y) {
                {
                  return U.indexOf(Y) < 0;
                }
              }), P = w.length - 1; P >= 0; P--) {
              {
                var R = w[P];
                R.enabled = false, this.contentNode.removeChild(R.view);
                var T = Q.indexOf(R);
                this.navigationBar.removeItemsAtIndex(T), R.node.destroy();
              }
            }
            this.Nr = U;
          }
        }, b.prototype.Rr = function () {
          {
            this.jr(), this.Dr();
          }
        }, b.prototype.jr = function () {
          var U = this.contentNode,
            Q = this.navigationBar.node.active ? this.navigationBar.node.height : this.statusBarPlaceholderNode.height,
            w = this.node.height - Q;
          U.setContentSize(this.node.width, w), U.y = -Q;
        }, b.prototype.Dr = function () {
          var U = this.contentNode,
            Q = U.width,
            w = U.height,
            P = U.anchorX,
            R = U.anchorY;
          this.controllers.forEach(function (T) {
            var Y = T.node,
              X = (Y.anchorX - P) * Q,
              E = (Y.anchorY - R) * w;
            T.viewWillLayoutSubviews(), Y.setContentSize(Q, w), Y.setPosition(cc.v2(X, E)), T.viewDidLayoutSubviews();
          });
        }, b.prototype.Lr = function (U, Q) {
          undefined === Q && (Q = false), this.kr() && U.viewDidAppear(Q);
          var w = this.topController;
          this.Nr.push(U), U.view.setContentSize(this.contentNode.width, this.contentNode.height), this.Tr = false, w && (w.viewDidDisappear(Q), w.enabled = false);
        }, b.prototype.Er = function (U) {
          undefined === U && (U = false);
          var Q = this.backController;
          Q && Q.viewDidAppear(U), this.scheduleOnce(this.Ur.bind(this, U));
        }, b.prototype.Ur = function (U) {
          var Q = this.topController;
          Q && (this.contentNode.removeChild(Q.view), this.Nr.pop(), this.Tr = false, Q.viewDidDisappear(U), Q.enabled = false, Q.destroy && Q.destroy(), Q.node.destroy());
        }, b.prototype.kr = function () {
          {
            return !(this.tabBarItem instanceof D.default && !this.topController);
          }
        }, __decorate([z(H.default)], b.prototype, "defaultNavigationBar", undefined), __decorate([z(cc.Node)], b.prototype, "statusBarPlaceholderNode", undefined), __decorate([z(cc.Node)], b.prototype, "contentNode", undefined), __decorate([k], b);
      }(C.default);
    B.default = L, cc._RF.pop();
  }
}
module.exports = NavigationController;
