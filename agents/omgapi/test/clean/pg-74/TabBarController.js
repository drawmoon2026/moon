// module: TabBarController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function TabBarController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "b2f70mOAvdOxZtKjfDu/lHM", "TabBarController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("TabBar"),
      X = require("TabBarItem"),
      Z = require("TransitionContext"),
      T = require("ViewController"),
      M = cc._decorator,
      C = M.ccclass,
      V = M.property,
      N = function (q) {
        {
          function f() {
            var g = null !== q && q.apply(this, arguments) || this;
            return g.content = undefined, g.tabBar = undefined, g.bottomNode = undefined, g.tabBarItemPrefab = undefined, g.TS = [], g.Pl = [], g.ES = undefined, g.NS = 0, g.Dl = false, g;
          }
          return __extends(f, q), f.prototype.onLoad = function () {
            this.GS(), this.kS(), this.RS(), this.node.on("size-changed", this.xl, this);
          }, f.prototype.onEnable = function () {
            {
              var g = this.ES;
              g && (g.enabled = true);
            }
          }, f.prototype.onDisable = function () {
            var g = this.ES;
            g && (g.enabled = false);
          }, f.prototype.viewWillAppear = function (g) {
            var l = this.ES;
            l && l.viewWillAppear(g);
          }, f.prototype.viewDidAppear = function (g) {
            var l = this.ES;
            l && l.viewDidAppear(g);
          }, f.prototype.viewWillDisappear = function (g) {
            {
              var l = this.ES;
              l && l.viewWillDisappear(g);
            }
          }, f.prototype.viewDidDisappear = function (g) {
            var l = this.ES;
            l && l.viewDidDisappear(g);
          }, f.prototype.viewDidLayoutSubviews = function () {}, f.prototype.setControllers = function (g, l, K) {
            {
              if (undefined === l && (l = 0), undefined === K && (K = false), Array.isArray(g)) {
                {
                  this.NS = l, this.Pl = g, this.jS(), this.TS = [];
                  for (var O = this.TS, x = 0; x < g.length; x++) {
                    var p = g[x];
                    p.node.parent = this.content, this.LS(x);
                    var b = p.tabBarItem;
                    if (!(b && b instanceof X.default)) {
                      var L = p.title;
                      (b = cc.instantiate(this.tabBarItemPrefab).getComponent(X.default)).init(L, undefined, undefined, x), p.tabBarItem = b;
                    }
                    b.selectAction = this.PS.bind(this, x, K), O.push(b), p.enabled = x === l;
                  }
                  this.tabBar.setItems(O, l);
                  var H = g[l];
                  this.ES = H, H.viewWillAppear(false), H.viewDidAppear(false), H.tabBarItem && H.tabBarItem.animFinish && H.tabBarItem.animFinish(), this.DS(l);
                }
              }
            }
          }, f.prototype.getSelectedController = function () {
            return this.ES;
          }, f.prototype.getSelectedTabBarItem = function () {
            return this.tabBar.getSelectedItem();
          }, f.prototype.hideTabBar = function () {
            (this.tabBar.node.active || this.bottomNode.active) && (this.tabBar.node.active = false, this.bottomNode.active = false, this.xl());
          }, f.prototype.showTabBar = function () {
            {
              this.tabBar.node.active && this.bottomNode.active || (this.tabBar.node.active = true, this.bottomNode.active = true, this.xl());
            }
          }, f.prototype.LS = function (g) {
            var l = this.Pl[g],
              K = this.content;
            if (l && l.node.getContentSize() !== K.getContentSize()) {
              var O = l.node,
                x = K.width,
                p = K.height,
                b = K.anchorX,
                L = K.anchorY,
                H = (O.anchorX - b + g) * x,
                U = (O.anchorY - L) * p;
              O.setContentSize(x, p), O.setPosition(H, U);
            }
          }, f.prototype.US = function () {
            return true === this.tabBar.node.active ? this.safeAreaInsets.bottom : 0;
          }, f.prototype.GS = function () {
            {
              var g = this.US(),
                l = this.node,
                K = l.width,
                O = l.height;
              this.content.setContentSize(K, O - g);
            }
          }, f.prototype.kS = function () {
            var g = this.US(),
              l = this.node.height;
            this.tabBar.node.y = g + this.tabBar.node.height - l;
          }, f.prototype.RS = function () {
            if (this.tabBar.node.active) {
              var g = this.US(),
                l = this.node,
                K = l.width,
                O = l.height,
                x = this.bottomNode;
              x.setContentSize(K, g), x.y = g - O;
            }
          }, f.prototype.xl = function () {
            var g = this.NS;
            this.GS(), this.kS(), this.RS(), this.LS(g);
          }, f.prototype.DS = function (g) {
            {
              this.content.x = -g * this.content.width;
            }
          }, f.prototype.PS = function (g, l) {
            {
              if (!this.Dl && g !== this.NS) {
                {
                  var K = this.Pl;
                  if (!(g >= K.length)) {
                    {
                      var O = this.ES,
                        x = K[g];
                      if (undefined !== O && undefined !== x) if (this.xS(g), this.Dl = true, this.tabBar.selectItemAtIndex(g), this.NS = g, this.ES = x, x.setSelect && x.setSelect(), x.enabled = true, O.viewWillDisappear && O.viewWillDisappear(l), x.viewWillAppear && x.viewWillAppear(l), l) {
                        if (this.tabBarControllerDelegate && (this.tabBarControllerDelegate.transitionAnimationForTabBarToRight || this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft)) {
                          var p;
                          (p = g > this.NS ? this.tabBarControllerDelegate.transitionAnimationForTabBarToRight() : this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft()) ? this.FS(p, O, x, g) : (this.DS(g), this.WS(O, x, g));
                        } else this.DS(g), this.WS(O, x, g);
                      } else this.DS(g), this.JS(O, x, g, false);
                    }
                  }
                }
              }
            }
          }, f.prototype.FS = function (g, l, K, O) {
            var x = this,
              p = new Z.TransitionContext(l, K, l.view, K.view, this.content);
            g.animateTransition(p, function () {
              x.JS(l, K, O, true);
            });
          }, f.prototype.WS = function (g, l, K) {
            var O = this,
              x = l.navigator ? l.navigator : l;
            x.node.opacity = 0;
            var p = cc.sequence(cc.fadeTo(1, 255).easing(cc.easeSineIn()), cc.callFunc(function () {
              {
                x.node.opacity = 255, O.JS(g, l, K, true);
              }
            }));
            x.node.runAction(p);
          }, f.prototype.JS = function (g, l, K, O) {
            l.tabBarItem && l.tabBarItem.animFinish && l.tabBarItem.animFinish(), l && l.viewDidAppear(O), g && g.viewDidDisappear(O), g && (g.enabled = false), this.Dl = false, this.jS();
          }, f.prototype.xS = function (g) {
            {
              var l,
                K,
                O = this.NS,
                x = this.Pl;
              O > g ? (l = g, K = O) : (l = O, K = g);
              for (; p <= K; p++) x[p].node.opacity = 255;
            }
          }, f.prototype.jS = function () {
            {
              for (var g = this.NS, l = this.Pl, K = 0; K < l.length; K++) K !== g && (l[K].node.opacity = 0);
            }
          }, __decorate([V(cc.Node)], f.prototype, "content", undefined), __decorate([V(B.default)], f.prototype, "tabBar", undefined), __decorate([V(cc.Node)], f.prototype, "bottomNode", undefined), __decorate([V(cc.Prefab)], f.prototype, "tabBarItemPrefab", undefined), __decorate([C], f);
        }
      }(T.default);
    exports.default = N, cc._RF.pop();
  }
}
module.exports = TabBarController;
