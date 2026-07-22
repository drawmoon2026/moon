// module: SlotScroller
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SlotScroller(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "f4834Nvw9tAprbYN6xgZslW", "SlotScroller")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("AutomationDecorator"),
      C = require("SlotScrollerController.spec"),
      H = cc._decorator,
      V = H.ccclass,
      M = H.property,
      q = function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.views = [], W.delegate = undefined, W.Vp = undefined, W.zp = undefined, W.Kp = [], W.qp = [], W;
        }
        return __extends(D, m), D.prototype.scrollerAtIndex = function (W) {
          return this.Kp[W];
        }, D.prototype.indexOfScroller = function (W) {
          return this.Kp.indexOf(W);
        }, D.prototype.getScrollState = function () {
          return this.Vp;
        }, D.prototype.setScrollState = function (W) {
          if (this.enabledInHierarchy) {
            this.zp = undefined;
            var k = this.Vp;
            k !== W && this.Jp(W, k);
          } else this.zp = W;
        }, D.prototype.Jp = function (W, k) {
          var z = this.views,
            L = this.Kp,
            v = this.qp,
            b = this.delegate;
          b.willChangeScrollState(this, W, k), v.length = 0;
          for (var U = 0, Q = z.length; U < Q; U++) {
            var w = L[U],
              P = b.getScroller(this, U, z[U], W, k, w);
            L[U] = P, w && (w.stop(), b.releaseScroller(this, U, w)), P && v.push(P);
          }
          for (this.Vp = W, U = 0, Q = v.length; U < Q; U++) v[U].play();
          b.didChangeScrollState(this, W, k);
        }, D.prototype.onEnable = function () {
          if (undefined !== this.zp) {
            var W = this.zp;
            this.zp = undefined;
            var k = this.Vp;
            k !== W && this.Jp(W, k);
          }
        }, D.prototype.onDisable = function () {
          for (var W = this.qp, k = 0, z = W.length; k < z; k++) W[k].stop();
          W.length = 0;
        }, D.prototype.update = function (W) {
          var k = this.qp,
            z = k.length;
          if (z) {
            for (var L = 0; L < z; L++) {
              var v = k[L];
              v.isPlaying ? v.update(W) : (k.splice(L, 1), L--, z--);
            }
            z || this.delegate.didStopScrolling(this);
          }
        }, __decorate([M([cc.Node])], D.prototype, "views", undefined), __decorate([x.automationDec({
          'func': C.onStateChange
        })], D.prototype, "_onStateChange", null), __decorate([V], D);
      }(cc.Component);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = SlotScroller;
