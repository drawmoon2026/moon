// module: BookView
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function BookView(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "46ec0uZUDVPMZDgV9Idp1EN", "BookView")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.LEFT = 1;
    C.RIGHT = 2;
    C.NULL = 3;
    var H = require("ScrollViewEx"),
      V = cc.Enum(C),
      M = function (W, k) {
        return W.sub(k);
      },
      q = cc._decorator,
      m = q.ccclass,
      D = (q.property, function (W) {
        function L() {
          var v = null !== W && W.apply(this, arguments) || this;
          return v._i = {}, v.pi = {}, v.lt = undefined, v;
        }
        var k = {};
        k.get = function () {
          return this._i;
        };
        k.enumerable = false;
        k.configurable = true;
        var z = {};
        z.get = function () {
          return this.pi;
        };
        z.enumerable = false;
        z.configurable = true;
        return __extends(L, W), Object.defineProperty(L.prototype, "nodePools", k), Object.defineProperty(L.prototype, "templates", z), L.prototype.register = function (v, b, U) {
          if (this._i[v]) ;else if (b) {
            var Q;
            Q = U ? new cc.NodePool(U) : new cc.NodePool(), this.pi[v] = b, this._i[v] = Q;
          }
        }, L.prototype.setDataSource = function (v) {
          v !== this.lt && (this.lt = v);
        }, L.prototype.reloadData = function () {
          this.bi(), this.init(this.mi);
        }, L.prototype.Si = function () {
          for (this.contentChildsLayout = []; this.content.children.length < 3;) {
            var v = this.node.width,
              b = this.node.height,
              U = new cc.Node(),
              Q = U.addComponent(cc.Layout);
            Q.type = cc.Layout.Type.VERTICAL, U.setContentSize(v, b), this.content.addChild(U), this.contentChildsLayout.push(Q);
          }
        }, L.prototype.gi = function () {
          for (var v = this.node.width, b = this.node.height, U = 0; U < this.content.children.length; U++) this.content.children[U].setContentSize(v, b);
          this.cellSize = v, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize);
          var Q = this.Ci >= this.content.children.length ? this.content.children.length : this.Ci;
          this.distance = this.cellSize;
          var w = this.contentLayout.spacingX / Q;
          this.distance += w, this.yi(this.currIndex);
        }, L.prototype.Mi = function () {
          this.node.on("size-changed", this.gi, this);
        }, L.prototype.bi = function () {
          this.node.off("size-changed", this.gi, this);
        }, L.prototype.init = function (v) {
          this.Mi(), this.Si(), this.contentLayout = this.content.getComponent(cc.Layout), this.cellSize = this.node.width, this.target = 0, this.originalSpeed = this.speed, this.freeCells = [], this.dir = V.NULL, this.selected = true, this.mi = v, this.Ci = 0, this.constChildList = [], this.middleIndex = Math.floor(this.content.children.length / 2), this.currIndex = 0, this.itemOffSet = 0, this.snapPause = false, this.maxScrollArea = cc.v2(0 * -this.cellSize, 2 * -this.cellSize), this.Ci = this.lt.getCount(this, v);
          for (var b = 0; b < this.content.children.length; b++) {
            var U = undefined;
            b <= this.Ci - 1 ? this.content.children[b].children.length ? (this.wi(this.content.children[b].children[0]), (U = this.lt.getItem(this, b, v)).parent = this.content.children[b], this.content.children[b].zIndex = b, U.cellIndex = b % this.Ci, this.content.children[b].slotID = b, this.constChildList.push(U)) : (this.content.children[b].zIndex = b, (U = this.lt.getItem(this, b, v)).parent = this.content.children[b], this.Ai(U), U.cellIndex = b % this.Ci, this.content.children[b].slotID = b, this.constChildList.push(U)) : (this.content.children[b].zIndex = b, this.content.children[b].slotID = b), this.Ci - 1 >= b ? this.content.children[b].active = true : this.content.children[b].active = false;
          }
          this.Ci >= this.content.children.length ? this.totalItems = this.content.children.length - 1 : this.totalItems = this.Ci - 1;
          var Q = this.Ci >= this.content.children.length ? this.content.children.length : this.Ci;
          this.distance = this.cellSize;
          var w = this.contentLayout.spacingX / Q;
          this.distance += w, this.yi(this.currIndex);
        }, L.prototype.toLeftItem = function () {
          var v = this.content.children[0].children[0].cellIndex - 1;
          if (2 === this.currIndex) return this.currIndex -= 1, this.yi(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
          if (v < 0) 0 === this.currIndex ? (this.closeFromLeft && this.closeFromLeft(), this.yi(this.currIndex)) : (this.currIndex = 0, this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
            for (var b = 0; b < this.content.children.length; b++) if (b === this.content.children.length - 1) {
              v < 0 && (v = this.Ci - 1), this.wi(this.content.children[b].children[0]);
              var U = this.lt.getItem(this, v, this.mi);
              this.constChildList[this.content.children[b].slotID] = U, this.constChildList[this.content.children[b].slotID].cellIndex = v, this.content.children[b].zIndex = 0, U.parent = this.content.children[b];
            } else this.content.children[b].zIndex += 1;
            this.resetLayout = true, this.changeIndexTo = 0, this.currIndex -= 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
          }
        }, L.prototype.toRightItem = function () {
          var v = this.content.children[this.totalItems].children[0].cellIndex + 1;
          if (0 === this.currIndex && this.currIndex < this.totalItems) return this.currIndex += 1, this.yi(this.currIndex), void (this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));
          if (v > this.Ci - 1) this.currIndex === this.totalItems ? (this.closeFromRight && this.closeFromRight(), this.yi(this.currIndex)) : (this.currIndex = this.totalItems, this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook(), this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex));else {
            for (var b = this.content.children.length - 1; b >= 0; b--) if (0 === b) {
              v >= this.Ci && (v = 0), this.wi(this.content.children[b].children[0]);
              var U = this.lt.getItem(this, v, this.mi);
              this.constChildList[this.content.children[b].slotID] = U, this.constChildList[this.content.children[b].slotID].cellIndex = v, this.content.children[b].zIndex = this.content.children.length - 1, U.parent = this.content.children[b];
            } else this.content.children[b].zIndex -= 1;
            this.resetLayout = true, this.changeIndexTo = 2, this.currIndex += 1, this.nextAppearTarget && this.nextAppearTarget(this.constChildList[this.content.children[this.currIndex].slotID].cellIndex), this.contentLayout.updateLayout(), this.content.x = this.content.x + this.itemOffSet, this.snapDone = false, this.currIndex = this.middleIndex;
          }
        }, L.prototype.setElasticLeft = function (v) {
          this.elasticLeft = v;
        }, L.prototype.setElasticRight = function (v) {
          this.elasticRight = v;
        }, L.prototype.setClosingFromLeft = function (v) {
          this.closingFromLeft = v;
        }, L.prototype.setCloseFromLeft = function (v) {
          this.closeFromLeft = v;
        }, L.prototype.setClosingFromRight = function (v) {
          this.closingFromRight = v;
        }, L.prototype.setCloseFromRight = function (v) {
          this.closeFromRight = v;
        }, L.prototype.setCancelCloseBook = function (v) {
          this.cancelCloseBook = v;
        }, L.prototype.setStartScrolling = function (v) {
          this.startScrolling = v;
        }, L.prototype.getAllItems = function () {
          var v = [];
          return this.content.children.forEach(function (b) {
            b.children.length && v.push(b.children[0]);
          }), v;
        }, L.prototype.scrollTo = function (v) {
          if (this.snapDone && !this.snapPause) {
            var b = this.content.children[this.currIndex].children[0].cellIndex;
            if (b !== v && !(v > this.Ci - 1 || v < 0)) if (v > b) {
              if (v === b + 1) 0 === this.currIndex ? this.toRightItem() : (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi());else if (0 === this.currIndex) {
                var U = this.content.children.length - 1;
                this.wi(this.content.children[U].children[0]);
                var Q = this.lt.getItem(this, v, this.mi);
                this.constChildList[this.content.children[U].slotID] = Q, this.constChildList[this.content.children[U].slotID].cellIndex = v, Q.parent = this.content.children[U], this.speed = 10, this.currIndex = 2, this.reloadCells = true, this.yi(this.currIndex);
              } else {
                for (var P = this.content.children.length - 1; P >= 0; P--) 0 === P ? (this.content.children[P].zIndex = 2, this.wi(this.content.children[P].children[0]), Q = this.lt.getItem(this, w, this.mi), this.constChildList[this.content.children[P].slotID] = Q, this.constChildList[this.content.children[P].slotID].cellIndex = w, Q.parent = this.content.children[P]) : this.content.children[P].zIndex = 1 === P ? 0 : 1;
                this.currIndex = 0, this.changeIndexTo = 2, this.changeContentPos = true;
              }
            } else if (v === b - 1) 2 === this.currIndex ? this.toLeftItem() : (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi());else if (this.currIndex === this.content.children.length - 1) w = 0, this.wi(this.content.children[w].children[0]), Q = this.lt.getItem(this, v, this.mi), this.constChildList[this.content.children[w].slotID] = Q, this.constChildList[this.content.children[w].slotID].cellIndex = v, Q.parent = this.content.children[w], this.speed = 10, this.currIndex = 0, this.reloadCells = true, this.yi(this.currIndex);else {
              for (U = v, P = this.content.children.length - 1; P >= 0; P--) 2 === P ? (this.content.children[P].zIndex = 0, this.wi(this.content.children[P].children[0]), Q = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[P].slotID] = Q, this.constChildList[this.content.children[P].slotID].cellIndex = U, Q.parent = this.content.children[P]) : this.content.children[P].zIndex = 1 === P ? 2 : 1;
              this.currIndex = 2, this.changeIndexTo = 0, this.changeContentPos = true;
            }
          }
        }, L.prototype.dequeueReusableItem = function (v) {
          var b,
            U = this._i[v];
          if (U) {
            if (!(b = U.get())) {
              var Q = this.pi[v];
              b = cc.instantiate(Q);
            }
            b.lv_type = v;
          }
          return b;
        }, L.prototype.wi = function (v) {
          var b,
            U = v.lv_type;
          U && (b = this._i[U]), b && b.put(v);
        }, L.prototype.Bi = function () {
          var v = this.content.children[this.currIndex].children[0].cellIndex;
          if (v === this.Ci - 1) {
            for (var b = v - 2, U = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) if (0 === Q) {
              this.wi(this.content.children[Q].children[0]);
              var w = this.lt.getItem(this, b, this.mi);
              this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = b, w.parent = this.content.children[Q];
            } else 1 === Q && (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]);
          } else if (0 === v) {
            U = v + 1;
            var P = v + 2;
            for (Q = this.content.children.length - 1; Q >= 0; Q--) 1 === Q ? (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : 2 === Q && (this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, P, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = P, w.parent = this.content.children[Q]);
          } else if (0 === this.currIndex) {
            for (U = v + 1, P = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) 1 === Q ? (this.content.children[Q].zIndex = 2, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : 2 === Q ? (this.content.children[Q].zIndex = 0, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, P, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = P, w.parent = this.content.children[Q]) : this.content.children[Q].zIndex = 1;
            this.resetContentPos = true;
          } else {
            for (b = v + 1, U = v - 1, Q = this.content.children.length - 1; Q >= 0; Q--) 0 === Q ? (this.content.children[Q].zIndex = 2, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, b, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = b, w.parent = this.content.children[Q]) : 1 === Q ? (this.content.children[Q].zIndex = 0, this.wi(this.content.children[Q].children[0]), w = this.lt.getItem(this, U, this.mi), this.constChildList[this.content.children[Q].slotID] = w, this.constChildList[this.content.children[Q].slotID].cellIndex = U, w.parent = this.content.children[Q]) : this.content.children[Q].zIndex = 1;
            this.resetContentPos = true;
          }
        }, L.prototype.yi = function (v) {
          v > this.totalItems || v < 0 || (this.currIndex = v, this.target = -this.currIndex * this.distance, this.snapDone = false);
        }, L.prototype.Pi = function () {
          this.dir === V.LEFT && this.content.x > this.maxScrollArea.y ? this.toLeftItem() : this.dir === V.RIGHT && this.content.x < this.maxScrollArea.x && this.toRightItem(), this.dir = V.NULL;
        }, L.prototype.update = function (v) {
          var b = this;
          this.snapDone || this.snapPause ? this.changeContentPos && (this.changeContentPos = false, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance, this.yi(this.changeIndexTo), this.reloadCells = true) : (this.content.x = this.Oi(this.content.x, this.target, v, this.speed, function () {
            b.snapFinish && b.snapFinish(b.constChildList[b.content.children[b.currIndex].slotID].cellIndex), b.reloadCells && (b.reloadCells = false, b.speed = b.originalSpeed, b.Bi());
          }), this.resetContentPos && (this.resetContentPos = false, this.currIndex = this.middleIndex, this.target = -this.currIndex * this.distance, this.content.x = -this.currIndex * this.distance), this.content.sortAllChildren());
        }, L.prototype.Ii = function (v, b) {
          if (!this.reloadCells && this.content.children.length) {
            this.snapPause = true;
            var U = v.touch,
              Q = cc.v2(U.getLocation().x, U.getLocation().y);
            this.startPos = Q, this.Gi(v, b);
          } else this.startPos = null;
        }, L.prototype.$ = function (v, b) {
          var U = v.touch,
            Q = cc.v2(U.getLocation().x, U.getLocation().y);
          this.startPos && this.content.children.length && (this.startPos.x < Q.x ? (null != this.elasticLeft && (this.elastic = this.elasticLeft), 0 === this.content.children[0].children[0].cellIndex && 0 === this.currIndex ? (this.selected && this.closingFromLeft && this.closingFromLeft(this.startPos.x, Q.x), 0 !== this.content.x && this.selected && this.Ni(v, b)) : this.selected && this.Ni(v, b)) : (null != this.elasticRight && (this.elastic = this.elasticRight), this.content.children[this.totalItems].children[0].cellIndex + 1 === this.Ci && this.currIndex === this.totalItems ? (this.selected && this.closingFromRight && this.closingFromRight(this.startPos.x, Q.x), this.content.x !== this.content.width && this.selected && this.Ni(v, b)) : this.selected && this.Ni(v, b)), this.content.x > 0 && null != this.elasticLeft ? this.elastic = this.elasticLeft : this.content.x > -this.content.width && null != this.elasticRight && (this.elastic = this.elasticRight));
        }, L.prototype.Ti = function (v, b) {
          if (!this.reloadCells && this.content.children.length) {
            this.dragElastic = false;
            var U = v.touch,
              Q = cc.v2(U.getLocation().x, U.getLocation().y);
            this.currentPos = Q, this.startPos && (this.Hi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != V.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != V.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.Ri(v, b));
          }
        }, L.prototype.ki = function (v, b) {
          if (!this.reloadCells && this.content.children.length) {
            this.dragElastic = false;
            var U = v.touch,
              Q = cc.v2(U.getLocation().x, U.getLocation().y);
            this.currentPos = Q, this.startPos && (this.Hi(this.startPos.x, this.currentPos.x) && this.selected ? this.dir != V.RIGHT && this.startPos.x > this.currentPos.x ? (this.dir = V.RIGHT, this.itemOffSet = this.cellSize, this.Pi(), this.cancelCloseBook && this.cancelCloseBook()) : this.dir != V.LEFT && this.startPos.x < this.currentPos.x ? (this.dir = V.LEFT, this.itemOffSet = -this.cellSize, this.Pi()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()) : (this.yi(this.currIndex), this.cancelCloseBook && this.cancelCloseBook()), this.snapPause = false, this.Li(v, b));
          }
        }, L.prototype.Gi = function (v) {
          if (this.clickBegan = true, this.enabledInHierarchy) {
            var b = v.touch;
            this.content && this.Ei(b), this.ji = false, this.Di(v);
          }
        }, L.prototype.Ni = function (v) {
          if (this.clickBegan && (this.clickBegan = false, this.startScrolling && this.startScrolling()), this.enabledInHierarchy) {
            var b = v.touch;
            if (this.content && this.Ui(b), this.cancelInnerEvents) {
              var U,
                Q = (U = b.getLocation(), b.getStartLocation(), U.mag());
              if (M(Q) > 7 && !this.ji && v.target !== this.node) {
                var w = new cc.Event.EventTouch(v.getTouches(), v.bubbles);
                w.type = cc.Node.EventType.TOUCH_CANCEL, w.touch = v.touch, w.simulate = true, v.target.dispatchEvent(w), this.ji = true;
              }
              this.Di(v);
            }
          }
        }, L.prototype.Ri = function (v) {
          if (this.clickBegan = false, this.enabledInHierarchy) {
            var b = v.touch;
            this.content && this.Wi(b), this.Fi("touch-up"), this.ji ? v.stopPropagation() : this.Di(v);
          }
        }, L.prototype.Li = function (v) {
          if (this.clickBegan = false, this.enabledInHierarchy) {
            if (!v.simulate) {
              var b = v.touch;
              this.content && this.Wi(b);
            }
            this.Di(v);
          }
        }, L.prototype.xi = function () {
          this.Vi && this.Vi.getScrollY() > 0 ? this.dir = V.RIGHT : this.Vi && this.Vi.getScrollY() < 0 && (this.dir = V.LEFT);
        }, L.prototype.zi = function () {
          this.snapPause = true, this.snapDone = true;
        }, L.prototype.Ki = function () {
          this.itemOffSet = this.cellSize, this.Pi(), this.snapPause = false, this.Vi = undefined;
        }, L.prototype.qi = function (v) {
          if (this.content.children.length && this.enabledInHierarchy) {
            this.Vi = v;
            var b = cc.v2(0, 0);
            this.vertical ? b = cc.v2(0, -0.1 * v.getScrollY()) : this.horizontal && (b = cc.v2(-0.1 * v.getScrollY(), 0), this.xi()), this.Ji = 0, this.Yi(b), this.Qi || (this.Ei(), this.schedule(this.Xi, 1 / 60), this.Qi = true, this.zi()), this.Di(v);
          }
        }, L.prototype.Xi = function (v) {
          var b, U;
          if (b = this.Zi(), U = cc.v2(0, 0), 0.0001, !b.fuzzyEquals(U, 0.0001)) return this.$i(), this.unschedule(this.Xi), this.Qi = false, void this.Ki();
          this.Ji += v, this.Ji > 0.1 && (this.ts(), this.unschedule(this.Xi), this.Qi = false, this.Ki());
        }, __decorate([m], L);
      }(H.default));
    exports.default = D, cc._RF.pop();
  }
}
module.exports = BookView;
