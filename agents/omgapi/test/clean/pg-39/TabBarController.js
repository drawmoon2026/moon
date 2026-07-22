// module: TabBarController
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, y)
function TabBarController(require, exports, y) {
  'use strict';

  if (!cc._RF.push(exports, "b2f70mOAvdOxZtKjfDu/lHM", "TabBarController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(y, "__esModule", B);
    var x = require("TabBar"),
      C = require("TabBarItem"),
      H = require("TransitionContext"),
      V = require("ViewController"),
      M = cc._decorator,
      q = M.ccclass,
      m = M.property,
      D = function (W) {
        function k() {
          var z = null !== W && W.apply(this, arguments) || this;
          return z.content = undefined, z.tabBar = undefined, z.bottomNode = undefined, z.tabBarItemPrefab = undefined, z.nm = [], z.Nr = [], z.om = undefined, z.cm = 0, z.Tr = false, z;
        }
        return __extends(k, W), k.prototype.onLoad = function () {
          this.hm(), this.rm(), this.am(), this.node.on("size-changed", this.Rr, this);
        }, k.prototype.onEnable = function () {
          var z = this.om;
          z && (z.enabled = true);
        }, k.prototype.onDisable = function () {
          var z = this.om;
          z && (z.enabled = false);
        }, k.prototype.viewWillAppear = function (z) {
          var L = this.om;
          L && L.viewWillAppear(z);
        }, k.prototype.viewDidAppear = function (z) {
          var L = this.om;
          L && L.viewDidAppear(z);
        }, k.prototype.viewWillDisappear = function (z) {
          var L = this.om;
          L && L.viewWillDisappear(z);
        }, k.prototype.viewDidDisappear = function (z) {
          var L = this.om;
          L && L.viewDidDisappear(z);
        }, k.prototype.viewDidLayoutSubviews = function () {}, k.prototype.setControllers = function (z, L, v) {
          if (undefined === L && (L = 0), undefined === v && (v = false), Array.isArray(z)) {
            this.cm = L, this.Nr = z, this.um(), this.nm = [];
            for (var b = this.nm, U = 0; U < z.length; U++) {
              var Q = z[U];
              Q.node.parent = this.content, this.lm(U);
              var w = Q.tabBarItem;
              if (!(w && w instanceof C.default)) {
                var P = Q.title;
                (w = cc.instantiate(this.tabBarItemPrefab).getComponent(C.default)).init(P, undefined, undefined, U), Q.tabBarItem = w;
              }
              w.selectAction = this.fm.bind(this, U, v), b.push(w), Q.enabled = U === L;
            }
            this.tabBar.setItems(b, L);
            var R = z[L];
            this.om = R, R.viewWillAppear(false), R.viewDidAppear(false), R.tabBarItem && R.tabBarItem.animFinish && R.tabBarItem.animFinish(), this.dm(L);
          }
        }, k.prototype.getSelectedController = function () {
          return this.om;
        }, k.prototype.getSelectedTabBarItem = function () {
          return this.tabBar.getSelectedItem();
        }, k.prototype.hideTabBar = function () {
          (this.tabBar.node.active || this.bottomNode.active) && (this.tabBar.node.active = false, this.bottomNode.active = false, this.Rr());
        }, k.prototype.showTabBar = function () {
          this.tabBar.node.active && this.bottomNode.active || (this.tabBar.node.active = true, this.bottomNode.active = true, this.Rr());
        }, k.prototype.lm = function (z) {
          var L = this.Nr[z],
            v = this.content;
          if (L && L.node.getContentSize() !== v.getContentSize()) {
            var b = L.node,
              U = v.width,
              Q = v.height,
              w = v.anchorX,
              P = v.anchorY,
              R = (b.anchorX - w + z) * U,
              T = (b.anchorY - P) * Q;
            b.setContentSize(U, Q), b.setPosition(R, T);
          }
        }, k.prototype.vm = function () {
          return true === this.tabBar.node.active ? this.safeAreaInsets.bottom : 0;
        }, k.prototype.hm = function () {
          var z = this.vm(),
            L = this.node,
            v = L.width,
            b = L.height;
          this.content.setContentSize(v, b - z);
        }, k.prototype.rm = function () {
          var z = this.vm(),
            L = this.node.height;
          this.tabBar.node.y = z + this.tabBar.node.height - L;
        }, k.prototype.am = function () {
          if (this.tabBar.node.active) {
            var z = this.vm(),
              L = this.node,
              v = L.width,
              b = L.height,
              U = this.bottomNode;
            U.setContentSize(v, z), U.y = z - b;
          }
        }, k.prototype.Rr = function () {
          var z = this.cm;
          this.hm(), this.rm(), this.am(), this.lm(z);
        }, k.prototype.dm = function (z) {
          this.content.x = -z * this.content.width;
        }, k.prototype.fm = function (z, L) {
          if (!this.Tr && z !== this.cm) {
            var v = this.Nr;
            if (!(z >= v.length)) {
              var b = this.om,
                U = v[z];
              if (undefined !== b && undefined !== U) if (this._m(z), this.Tr = true, this.tabBar.selectItemAtIndex(z), this.cm = z, this.om = U, U.setSelect && U.setSelect(), U.enabled = true, b.viewWillDisappear && b.viewWillDisappear(L), U.viewWillAppear && U.viewWillAppear(L), L) {
                if (this.tabBarControllerDelegate && (this.tabBarControllerDelegate.transitionAnimationForTabBarToRight || this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft)) {
                  var Q;
                  (Q = z > this.cm ? this.tabBarControllerDelegate.transitionAnimationForTabBarToRight() : this.tabBarControllerDelegate.transitionAnimationForTabBarToLeft()) ? this.pm(Q, b, U, z) : (this.dm(z), this.bm(b, U, z));
                } else this.dm(z), this.bm(b, U, z);
              } else this.dm(z), this.mm(b, U, z, false);
            }
          }
        }, k.prototype.pm = function (z, L, v, b) {
          var U = this,
            Q = new H.TransitionContext(L, v, L.view, v.view, this.content);
          z.animateTransition(Q, function () {
            U.mm(L, v, b, true);
          });
        }, k.prototype.bm = function (z, L, v) {
          var b = this,
            U = L.navigator ? L.navigator : L;
          U.node.opacity = 0;
          var Q = cc.sequence(cc.fadeTo(1, 255).easing(cc.easeSineIn()), cc.callFunc(function () {
            U.node.opacity = 255, b.mm(z, L, v, true);
          }));
          U.node.runAction(Q);
        }, k.prototype.mm = function (z, L, v, b) {
          L.tabBarItem && L.tabBarItem.animFinish && L.tabBarItem.animFinish(), L && L.viewDidAppear(b), z && z.viewDidDisappear(b), z && (z.enabled = false), this.Tr = false, this.um();
        }, k.prototype._m = function (z) {
          var L,
            v,
            b = this.cm,
            U = this.Nr;
          b > z ? (L = z, v = b) : (L = b, v = z);
          for (; Q <= v; Q++) U[Q].node.opacity = 255;
        }, k.prototype.um = function () {
          for (var z = this.cm, L = this.Nr, v = 0; v < L.length; v++) v !== z && (L[v].node.opacity = 0);
        }, __decorate([m(cc.Node)], k.prototype, "content", undefined), __decorate([m(x.default)], k.prototype, "tabBar", undefined), __decorate([m(cc.Node)], k.prototype, "bottomNode", undefined), __decorate([m(cc.Prefab)], k.prototype, "tabBarItemPrefab", undefined), __decorate([q], k);
      }(V.default);
    y.default = D, cc._RF.pop();
  }
}
module.exports = TabBarController;
