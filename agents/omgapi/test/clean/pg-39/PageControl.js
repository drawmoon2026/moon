// module: PageControl
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PageControl(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "db0df9/6UZNW6sskb9QIFSg", "PageControl")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("PageControlButton"),
        C = cc._decorator,
        H = C.ccclass,
        r = C.property,
        V = function (M) {
          function q() {
            var m = null !== M && M.apply(this, arguments) || this;
            return m.buttonPrefab = undefined, m.delegate = undefined, m.Ou = 0, m.Iu = 0, m.Gu = [], m;
          }
          return __extends(q, M), q.prototype.init = function (m, D, W) {
            if (!(m >= D || m < 0)) {
              {
                this.node.removeAllChildren(), this.Iu = D, this.delegate = W;
                for (var k = [], z = 0; z < D; z++) {
                  var L = cc.instantiate(this.buttonPrefab);
                  L.parent = this.node;
                  var v = L.getComponent(x.default);
                  v.index = z, v.delegate = this, v.init(), k.push(v);
                }
                k[m].setSelect(), this.Ou = m, this.Gu = k;
              }
            }
          }, q.prototype.layoutContainer = function (m) {
            this.getComponent(cc.Layout).spacingX = m;
          }, q.prototype.changeCurrentPage = function (m) {
            var D = this.Iu;
            if (!(m < 0 || m >= D)) {
              var W = this.Gu;
              W[this.Ou].setUnselect(), W[m].setSelect(), this.Ou = m;
            }
          }, q.prototype.getCurrentPage = function () {
            return this.Ou;
          }, q.prototype.didSelectDotAtIndex = function (m) {
            {
              this.Gu[this.Ou].setUnselect(), this.Ou = m, this.delegate && this.delegate.changePage && this.delegate.changePage(m);
            }
          }, q.prototype.canChangePage = function () {
            var m = this.delegate;
            return !(m && m.enableChangePage && !m.enableChangePage());
          }, __decorate([r(cc.Prefab)], q.prototype, "buttonPrefab", undefined), __decorate([H], q);
        }(cc.Component);
      exports.default = V, cc._RF.pop();
    }
  }
}
module.exports = PageControl;
