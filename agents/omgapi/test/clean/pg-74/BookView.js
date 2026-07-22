// module: BookView
// Cocos 模块函数,参数 (require, module, exports) = (require, I, exports)
function BookView(require, I, exports) {
  'use strict';

  if (!cc._RF.push(I, "46ec0uZUDVPMZDgV9Idp1EN", "BookView")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var X = {};
    X.LEFT = 1;
    X.RIGHT = 2;
    X.NULL = 3;
    var Z = require("ScrollViewEx"),
      T = cc.Enum(X),
      M = function (q, f) {
        return q.sub(f);
      },
      C = cc._decorator,
      V = C.ccclass,
      N = (C.property, function (q) {
        function f() {
          var K = null !== q && q.apply(this, arguments) || this;
          return K.wi = {}, K.Bi = {}, K.Ai = undefined, K;
        }
        var g = {};
        g.get = function () {
          return this.wi;
        };
        g.enumerable = false;
        g.configurable = true;
        var l = {};
        l.get = function () {
          return this.Bi;
        };
        l.enumerable = false;
        l.configurable = true;
        return __extends(f, q), Object.defineProperty(f.prototype, "nodePools", g), Object.defineProperty(f.prototype, "templates", l), f.prototype.register = function (K, O, x) {
          if (this.wi[K]) ;else if (O) {
            var p;
            p = x ? new cc.NodePool(x) : new cc.NodePool(), this.Bi[K] = O, this.wi[K] = p;
          }
        }, f.prototype.setDataSource = function (K) {
          K !== this.Ai && (this.Ai = K);
        }, f.prototype.reloadData = function () {
          this.Hi(), this.init(this.Oi);
        }, f.prototype.Ii = function () {
          for (this.contentChildsLayout = []; this.content.children.length < 3;) {
            var K = this.node.width,
              O = this.node.height,
              x = new cc.Node(),
              p = x.addComponent(cc.Layout);
            p.type = cc.Layout.Type.VERTICAL, x.setContentSize(K, O), this.content.addChild(x), this.contentChildsLayout.push(p);
          }
        }, f.prototype.Ti = function () {
          for (var K = this.node.width, O = this.node.height, x = 0; x < this.content.children.length; x++) this.content.children[x].setContentSize(K, O);
          this.cellSize = K, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize);
          var p = this.Ei >= this.content.children.length ? this.content.children.length : this.Ei;
          this.distance = this.cellSize;
          var b = this.contentLayout.spacingX / p;
          this.distance += b, this.Ni(this.currIndex);
        }, f.prototype.Gi = function () {
          this.node.on("size-changed", this.Ti, this);
        }, f.prototype.Hi = function () {
          this.node.off("size-changed", this.Ti, this);
        }, f.prototype.init = function (K) {
          this.Gi(), this.Ii(), this.contentLayout = this.content.getComponent(cc.Layout), this.cellSize = this.node.width, this.target = 0, this.originalSpeed = this.speed, this.freeCells = [], this.dir = T.NULL, this.selected = true, this.Oi = K, this.Ei = 0, this.constChildList = [], this.middleIndex = Math.floor(this.content.children.length / 2), this.currIndex = 0, this.itemOffSet = 0, this.snapPause = false, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize), this.Ei = this.Ai.getCount(this, K);
          for (var O = 0; O < this.content.children.length; O++) {
            var x = undefined;
            O <= this.Ei - 1 ? this.content.children[O].children.length ? (this.ki(this.content.children[O].children[0]), (x = this.Ai.getItem(this, O, K)).parent = this.content.children[O], this.content.children[O].zIndex = O, x.cellIndex = O % this.Ei, this.content.children[O].slotID = O, this.constChildList.push(x)) : (this.content.children[O].zIndex = O, (x = this.Ai.getItem(this, O, K)).parent = this.content.children[O], this.Ri(x), x.cellIndex = O % this.Ei, this.content.children[O].slotID = O, this.constChildList.push(x)) : (this.content.children[O].zIndex = O, this.content.children[O].slotID = O), this.Ei - 1 >= O ? this.content.children[O].active = true : this.content.children[O].active = false;
          }
          this.Ei >= this.content.children.length ? this.totalItems = this.content.children.length - 1 : this.totalItems = this.Ei - 1;
          var p = this.Ei >= this.content.children.length ? this.content.children.length : this.Ei;
          this.distance = this.cellSize;
          var b = this.contentLayout.spacingX / p;
          this.distance += b, this.Ni(this.currIndex);
        }, f.prototype.toLeftItem = function () {
          var K = this.content.children[0].children[0].cellIndex - 1;
          if (2 === this.currIndex) return this.currIndex -= 1, this.Ni(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
          if (K < 0) 0 === this.currIndex ? (this.closeFromLeft && this.closeFromLeft(), this.Ni(this.currIndex)) : (this.currIndex = 0, this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
            for (var O = 0; O < this.content.children.length; O++) if (O === this.content.children.length - 1) {
              K < 0 && (K = this.Ei - 1), this.ki(this.content.children[O].children[0]);
              var x = this.Ai.getItem(this, K, this.Oi);
              this.constChildList[this.content.children[O].slotID] = x, this.constChildList[this.content.children[O].slotID].cellIndex = K, this.content.children[O].zIndex = 0, x.parent = this.content.children[O];
            } else this.content.children[O].zIndex += 1;
            this.resetLayout = true, this.changeIndexTo = 0, this.currIndex -= 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
          }
        }, f.prototype.toRightItem = function () {
          var K = this.content.children[this.totalItems].children[0].cellIndex + 1;
          if (0 === this.currIndex && this.currIndex < this.totalItems) return this.currIndex += 1, this.Ni(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
          if (K > this.Ei - 1) this.currIndex === this.totalItems ? (this.closeFromRight && this.closeFromRight(), this.Ni(this.currIndex)) : (this.currIndex = this.totalItems, this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
            for (var O = this.content.children.length - 1; O >= 0; O--) if (0 === O) {
              K >= this.Ei && (K = 0), this.ki(this.content.children[O].children[0]);
              var x = this.Ai.getItem(this, K, this.Oi);
              this.constChildList[this.content.children[O].slotID] = x, this.constChildList[this.content.children[O].slotID].cellIndex = K, this.content.children[O].zIndex = this.content.children.length - 1, x.parent = this.content.children[O];
            } else this.content.children[O].zIndex -= 1;
            this.resetLayout = true, this.changeIndexTo = 2, this.currIndex += 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
          }
        }, f.prototype.setElasticLeft = function (K) {
          this.elasticLeft = K;
        }, f.prototype.setElasticRight = function (K) {
          this.elasticRight = K;
        }, f.prototype.setClosingFromLeft = function (K) {
          this.closingFromLeft = K;
        }, f.prototype.setCloseFromLeft = function (K) {
          this.closeFromLeft = K;
        }, f.prototype.setClosingFromRight = function (K) {
          this.closingFromRight = K;
        }, f.prototype.setCloseFromRight = function (K) {
          this.closeFromRight = K;
        }, f.prototype.setCancelCloseBook = function (K) {
          this.cancelCloseBook = K;
        }, f.prototype.setStartScrolling = function (K) {
          this.startScrolling = K;
        }, f.prototype.getAllItems = function () {
          var K = [];
          return this.content.children.forEach(function (O) {
            O.children.length && K.push(O.children[0]);
          }), K;
        }, f.prototype.scrollTo = function (K) {
          if (this.snapDone && !this.snapPause) {
            var O = this.content.children[this.currIndex].children[0].cellIndex;
            if (O !== K && !(K > this.Ei - 1 || K < 0)) if (K > O) {
              if (K === O + 1) 0 === this.currIndex ? this.toRightItem() : (this.dir = T.RIGHT, this.itemOffSet = this.cellSize, this.ji());else if (0 === this.currIndex) {
                var x = this.content.children.length - 1;
                this.ki(this.content.children[x].children[0]);
                var p = this.Ai.getItem(this, K, this.Oi);
                this.constChildList[this.content.children[x].slotID] = p, this.constChildList[this.content.children[x].slotID].cellIndex = K, p.parent = this.content.children[x], this.speed = 10, this.currIndex = 2, this.reloadCells = true, this.Ni(this.currIndex);
              } else {
                for (var L = this.content.children.length - 1; L >= 0; L--) 0 === L ? (this.content.children[L].zIndex = 2, this.ki(this.content.children[L].children[0]), p = this.Ai.getItem(this, b, this.Oi), this.constChildList[this.content.children[L].slotID] = p, this.constChildList[this.content.children[L].slotID].cellIndex = b, p.parent = this.content.children[L]) : this.content.children[L].zIndex = 1 === L ? 0 : 1;
                this.currIndex = 0, this.changeIndexTo = 2, this.changeContentPos = true;
              }
            } else if (K === O - 1) 2 === this.currIndex ? this.toLeftItem() : (this.dir = T.LEFT, this.itemOffSet = -this.cellSize, this.ji());else if (this.currIndex === this.content.children.length - 1) b = 0, this.ki(this.content.children[b].children[0]), p = this.Ai.getItem(this, K, this.Oi), this.constChildList[this.content.children[b].slotID] = p, this.constChildList[this.content.children[b].slotID].cellIndex = K, p.parent = this.content.children[b], this.speed = 10, this.currIndex = 0, this.reloadCells = true, this.Ni(this.currIndex);else {
              for (x = K, L = this.content.children.length - 1; L >= 0; L--) 2 === L ? (this.content.children[L].zIndex = 0, this.ki(this.content.children[L].children[0]), p = this.Ai.getItem(this, x, this.Oi), this.constChildList[this.content.children[L].slotID] = p, this.constChildList[this.content.children[L].slotID].cellIndex = x, p.parent = this.content.children[L]) : this.content.children[L].zIndex = 1 === L ? 2 : 1;
              this.currIndex = 2, this.changeIndexTo = 0, this.changeContentPos = true;
            }
          }
        }, f.prototype.dequeueReusableItem = function (K) {
          var O,
            x = this.wi[K];
          if (x) {
            if (!(O = x.get())) {
              var p = this.Bi[K];
              O = cc.instantiate(p);
            }
            O.lv_type = K;
          }
          return O;
        }, f.prototype.ki = function (K) {
          var O,
            x = K.lv_type;
          x && (O = this.wi[x]), O && O.put(K);
        }, f.prototype.Li = function () {
          var K = this.content.children[this.currIndex].children[0].cellIndex;
          if (K === this.Ei - 1) {
            for (var O = K - 2, x = K - 1, p = this.content.children.length - 1; p >= 0; p--) if (0 === p) {
              this.ki(this.content.children[p].children[0]);
              var b = this.Ai.getItem(this, O, this.Oi);
              this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = O, b.parent = this.content.children[p];
            } else 1 === p && (this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, x, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = x, b.parent = this.content.children[p]);
          } else if (0 === K) {
            x = K + 1;
            var L = K + 2;
            for (p = this.content.children.length - 1; p >= 0; p--) 1 === p ? (this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, x, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = x, b.parent = this.content.children[p]) : 2 === p && (this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, L, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = L, b.parent = this.content.children[p]);
          } else if (0 === this.currIndex) {
            for (x = K + 1, L = K - 1, p = this.content.children.length - 1; p >= 0; p--) 1 === p ? (this.content.children[p].zIndex = 2, this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, x, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = x, b.parent = this.content.children[p]) : 2 === p ? (this.content.children[p].zIndex = 0, this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, L, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = L, b.parent = this.content.children[p]) : this.content.children[p].zIndex = 1;
            this.resetContentPos = true;
          } else {
            for (O = K + 1, x = K - 1, p = this.content.children.length - 1; p >= 0; p--) 0 === p ? (this.content.children[p].zIndex = 2, this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, O, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = O, b.parent = this.content.children[p]) : 1 === p ? (this.content.children[p].zIndex = 0, this.ki(this.content.children[p].children[0]), b = this.Ai.getItem(this, x, this.Oi), this.constChildList[this.content.children[p].slotID] = b, this.constChildList[this.content.children[p].slotID].cellIndex = x, b.parent = this.content.children[p]) : this.content.children[p].zIndex = 1;
            this.resetContentPos = true;
          }
        }, f.prototype.Ni = function (K) {
          K > this.totalItems || K < 0 || (this.currIndex = K, this.target = -this.currIndex * this.distance, this.snapDone = false);
        }, f.prototype.ji = function () {
          this.dir === T.LEFT && this.content.x > this.maxScrollArea.y ? this.toLeftItem() : this.dir === T.RIGHT && this.content.x < this.maxScrollArea.x && this.toRightItem(), this.dir = T.NULL;
        }, f.prototype.update = function (K) {
          var O = this;
          this.snapDone || this.snapPause ? this.changeContentPos && (this.changeContentPos = false, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance, this.Ni(this.changeIndexTo), this.reloadCells = true) : (this.content.x = this.Pi(this.content.x, this.target, K, this.speed, function () {
            O.snapFinish && O.snapFinish(O.constChildList[O.content.children[O.currIndex].slotID].cellIndex), O.reloadCells && (O.reloadCells = false, O.speed = O.originalSpeed, O.Li());
          }), this.resetContentPos && (this.resetContentPos = false, this.currIndex = this.middleIndex, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance), this.content.sortAllChildren());
        }, f.prototype.Di = function (K, O) {
          if (!this.reloadCells && this.content.children.length) {
            this.snapPause = true;
            var x = K.touch,
              p = cc.v2(x.getLocation().x, x.getLocation().y);
            this.startPos = p, this.Ui(K, O);
          } else this.startPos = null;
        }, f.prototype.ot = function (K, O) {
          var x = K.touch,
            p = cc.v2(x.getLocation().x, x.getLocation().y);
          this.startPos && this.content.children.length && (this.startPos.x < p.x ? (null != this.elasticLeft && (this.elastic = this.elasticLeft), 0 === this.content.children[0].children[0].cellIndex && 0 === this.currIndex ? (this.selected && this.closingFromLeft && this.closingFromLeft(this.startPos.x, p.x), 0 !== this.content.x && this.selected && this.xi(K, O)) : this.selected && this.xi(K, O)) : (null != this.elasticRight && (this.elastic = this.elasticRight), this.content.children[this.totalItems].children[0].cellIndex + 1 === this.Ei && this.currIndex === this.totalItems ? (this.selected && this.closingFromRight && this.closingFromRight(this.startPos.x, p.x), this.content.x !== this.content.width && this.selected && this.xi(K, O)) : this.selected && this.xi(K, O)), this.content.x > 0 && null != this.elasticLeft ? this.elastic = this.elasticLeft : this.content.x > -this.content.width && null != this.elasticRight && (this.elastic = this.elasticRight));
        }, f.prototype.Fi = function (K, O) {
          if (!this.reloadCells && this.content.children.length) {
            this.dragElastic = false;
            var x = K.touch,
              p = cc.v2(x.getLocation().x, x.getLocation().y);
            this.currentPos = p, this.startPos && (this.Wi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != T.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = T.RIGHT, this.itemOffSet = this.cellSize, this.ji(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != T.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = T.LEFT, this.itemOffSet = -this.cellSize, this.ji()) : (this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.Ji(K, O));
          }
        }, f.prototype.Vi = function (K, O) {
          if (!this.reloadCells && this.content.children.length) {
            this.dragElastic = false;
            var x = K.touch,
              p = cc.v2(x.getLocation().x, x.getLocation().y);
            this.currentPos = p, this.startPos && (this.Wi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != T.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = T.RIGHT, this.itemOffSet = this.cellSize, this.ji(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != T.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = T.LEFT, this.itemOffSet = -this.cellSize, this.ji()) : (this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.Ni(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.zi(K, O));
          }
        }, f.prototype.Ui = function (K) {
          if (this.clickBegan = true, this.enabledInHierarchy) {
            var O = K.touch;
            this.content && this.Ki(O), this.qi = false, this.Qi(K);
          }
        }, f.prototype.xi = function (K) {
          if (this.clickBegan && (this.clickBegan = false, this.startScrolling && this.startScrolling()), this.enabledInHierarchy) {
            var O = K.touch;
            if (this.content && this.Yi(O), this.cancelInnerEvents) {
              var x,
                p = (x = O.getLocation(), O.getStartLocation(), x.mag());
              if (M(p) > 7 && !this.qi && K.target !== this.node) {
                var b = new cc.Event.EventTouch(K.getTouches(), K.bubbles);
                b.type = cc.Node.EventType.TOUCH_CANCEL, b.touch = K.touch, b.simulate = true, K.target.dispatchEvent(b), this.qi = true;
              }
              this.Qi(K);
            }
          }
        }, f.prototype.Ji = function (K) {
          if (this.clickBegan = false, this.enabledInHierarchy) {
            var O = K.touch;
            this.content && this.Zi(O), this.Xi("touch-up"), this.qi ? K.stopPropagation() : this.Qi(K);
          }
        }, f.prototype.zi = function (K) {
          if (this.clickBegan = false, this.enabledInHierarchy) {
            if (!K.simulate) {
              var O = K.touch;
              this.content && this.Zi(O);
            }
            this.Qi(K);
          }
        }, f.prototype.$i = function () {
          this.es && this.es.getScrollY() > 0 ? this.dir = T.RIGHT : this.es && this.es.getScrollY() < 0 && (this.dir = T.LEFT);
        }, f.prototype.ns = function () {
          this.snapPause = true, this.snapDone = true;
        }, f.prototype.os = function () {
          this.itemOffSet = this.cellSize, this.ji(), this.snapPause = false, this.es = undefined;
        }, f.prototype.hs = function (K) {
          if (this.content.children.length && this.enabledInHierarchy) {
            this.es = K;
            var O = cc.v2(0, 0);
            this.vertical ? O = cc.v2(0, -0.1 * K.getScrollY()) : this.horizontal && (O = cc.v2(-0.1 * K.getScrollY(), 0), this.$i()), this.as = 0, this.us(O), this.ds || (this.Ki(), this.schedule(this.vs, 1 / 60), this.ds = true, this.ns()), this.Qi(K);
          }
        }, f.prototype.vs = function (K) {
          var O, x;
          if (O = this._s(), x = cc.v2(0, 0), 0.0001, !O.fuzzyEquals(x, 0.0001)) return this.ms(), this.unschedule(this.vs), this.ds = false, void this.os();
          this.as += K, this.as > 0.1 && (this.bs(), this.unschedule(this.vs), this.ds = false, this.os());
        }, __decorate([V], f);
      }(Z.default));
    exports.default = N, cc._RF.pop();
  }
}
module.exports = BookView;
