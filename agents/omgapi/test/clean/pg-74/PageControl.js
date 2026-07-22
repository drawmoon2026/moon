// module: PageControl
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function PageControl(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "db0df9/6UZNW6sskb9QIFSg", "PageControl")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("PageControlButton"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.buttonPrefab = undefined, N.delegate = undefined, N.jf = 0, N.Lf = 0, N.Pf = [], N;
        }
        return __extends(V, C), V.prototype.init = function (N, q, f) {
          if (!(N >= q || N < 0)) {
            this.node.removeAllChildren(), this.Lf = q, this.delegate = f;
            for (var g = [], l = 0; l < q; l++) {
              var K = cc.instantiate(this.buttonPrefab);
              K.parent = this.node;
              var O = K.getComponent(B.default);
              O.index = l, O.delegate = this, O.init(), g.push(O);
            }
            g[N].setSelect(), this.jf = N, this.Pf = g;
          }
        }, V.prototype.layoutContainer = function (N) {
          this.getComponent(cc.Layout).spacingX = N;
        }, V.prototype.changeCurrentPage = function (N) {
          var q = this.Lf;
          if (!(N < 0 || N >= q)) {
            var f = this.Pf;
            f[this.jf].setUnselect(), f[N].setSelect(), this.jf = N;
          }
        }, V.prototype.getCurrentPage = function () {
          return this.jf;
        }, V.prototype.didSelectDotAtIndex = function (N) {
          this.Pf[this.jf].setUnselect(), this.jf = N, this.delegate && this.delegate.changePage && this.delegate.changePage(N);
        }, V.prototype.canChangePage = function () {
          var N = this.delegate;
          return !(N && N.enableChangePage && !N.enableChangePage());
        }, __decorate([T(cc.Prefab)], V.prototype, "buttonPrefab", undefined), __decorate([Z], V);
      }(cc.Component);
    exports.default = M, cc._RF.pop();
  }
}
module.exports = PageControl;
