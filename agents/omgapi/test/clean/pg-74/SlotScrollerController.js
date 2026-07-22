// module: SlotScrollerController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function SlotScrollerController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "3383aiogiFCOKC9u2Q0E3sA", "SlotScrollerController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("SlotScrollerController.spec"),
      X = require("AutomationDecorator"),
      Z = cc._decorator.ccclass,
      T = function (M) {
        function C() {
          var V = null !== M && M.apply(this, arguments) || this;
          return V.slotViews = undefined, V.isEnded = true, V.slotState = undefined, V.pendingSlotState = undefined, V.scrollers = [], V.abortRunScroller = undefined, V.bindedRunScrollerAtIndex = undefined, V;
        }
        return __extends(C, M), C.prototype.onEnable = function () {
          if (undefined !== this.pendingSlotState) {
            var V = this.pendingSlotState;
            this.pendingSlotState = undefined;
            var N = this.slotState;
            N !== V && this.onStateChange(V, N);
          }
        }, C.prototype.onDisable = function () {
          var V, N;
          try {
            for (var q = __values(this.scrollers), f = q.next(); !f.done; f = q.next()) {
              var h = f.value;
              h.isEnded || h.end();
            }
          } catch (l) {
            var g = {};
            g.error = l;
            V = g;
          } finally {
            try {
              f && !f.done && (N = q.return) && N.call(q);
            } finally {
              if (V) throw V.error;
            }
          }
        }, C.prototype.update = function (V) {
          var N, q, g, K;
          if (this.isEnded) try {
            for (var O = __values(this.scrollers), x = O.next(); !x.done; x = O.next()) (U = x.value) && U.update && U.update(V);
          } catch (y) {
            var p = {};
            p.error = y;
            N = p;
          } finally {
            try {
              x && !x.done && (q = O.return) && q.call(O);
            } finally {
              if (N) throw N.error;
            }
          } else {
            var b = true;
            try {
              for (var L = __values(this.scrollers), H = L.next(); !H.done; H = L.next()) {
                var U;
                (U = H.value) && (U.update && U.update(V), U.isEnded || (b = false));
              }
            } catch (z) {
              var k = {};
              k.error = z;
              g = k;
            } finally {
              try {
                H && !H.done && (K = L.return) && K.call(L);
              } finally {
                if (g) throw g.error;
              }
            }
            if (b) {
              this.isEnded = true, this.abortRunScroller = undefined;
              var Y = this.callbacks.onSlotStateEnd;
              Y && Y(this.slotState);
            }
          }
        }, C.prototype.init = function (V, N) {
          this.slotViews = V, this.callbacks = N, this.bindedRunScrollerAtIndex = this.runScrollerAtIndex.bind(this);
        }, C.prototype.scrollerAtIndex = function (V) {
          return this.scrollers[V];
        }, C.prototype.indexOfScroller = function (V) {
          return this.scrollers.indexOf(V);
        }, C.prototype.getSlotState = function () {
          return this.slotState;
        }, C.prototype.setSlotState = function (V) {
          if (this.enabledInHierarchy) {
            this.pendingSlotState = undefined;
            var N = this.slotState;
            N !== V && this.onStateChange(V, N);
          } else this.pendingSlotState = V;
        }, C.prototype.endCurrentState = function () {
          var V,
            N,
            q = this.abortRunScroller;
          q && (this.abortRunScroller = undefined, q());
          try {
            for (var f = __values(this.scrollers), h = f.next(); !h.done; h = f.next()) {
              var g = h.value;
              g && g.end();
            }
          } catch (K) {
            var l = {};
            l.error = K;
            V = l;
          } finally {
            try {
              h && !h.done && (N = f.return) && N.call(f);
            } finally {
              if (V) throw V.error;
            }
          }
        }, C.prototype.onStateChange = function (V, N) {
          var q = this.slotViews,
            f = this.scrollers,
            g = this.callbacks;
          g.willChangeSlotState && g.willChangeSlotState(V, N);
          var l = this.abortRunScroller;
          l && (this.abortRunScroller = undefined, l());
          for (var K = 0, O = q.length; K < O; K++) {
            var x = f[K],
              p = g.getScroller(K, q[K], V, N, x);
            f[K] = p, x && (x.isEnded || x.end(), g.releaseScroller && g.releaseScroller(K, x)), p && (p.reset(), this.isEnded = false);
          }
          this.slotState = V, g.didChangeSlotState && g.didChangeSlotState(V, N), this.abortRunScroller = g.runScroller(V, this.bindedRunScrollerAtIndex);
        }, C.prototype.runScrollerAtIndex = function (V) {
          var N = this.scrollers[V];
          N && N.run();
        }, __decorate([X.automationDec({
          'func': B.onStateChange
        })], C.prototype, "onStateChange", null), __decorate([Z], C);
      }(cc.Component);
    exports.default = T, cc._RF.pop();
  }
}
module.exports = SlotScrollerController;
