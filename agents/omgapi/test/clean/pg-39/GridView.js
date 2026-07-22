// module: GridView
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function GridView(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "2a349Sf9h1Dw6gCmtoNZ3ZP", "GridView")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("ScrollViewEx"),
      C = function (m, D, W) {
        {
          return m.fuzzyEquals(D, W);
        }
      },
      H = function (m, D) {
        return m.sub(D).mag();
      },
      V = cc._decorator,
      M = V.ccclass,
      q = (V.property, function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.autoSnap = true, W._i = {}, W.pi = {}, W;
        }
        return __extends(D, m), Object.defineProperty(D.prototype, "nodePools", {
          'get': function () {
            {
              return this._i;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(D.prototype, "templates", {
          'get': function () {
            return this.pi;
          },
          'enumerable': false,
          'configurable': true
        }), D.prototype.setEstimatedSize = function (W) {
          this.vertical ? this.estimatedHeight = W.y : this.estimatedWidth = W.x;
        }, D.prototype.setConstantCellSize = function (W, k) {
          {
            var z = {};
            z.width = W;
            z.height = k;
            this.constCellSize = z;
          }
        }, D.prototype.setResetFinish = function (W) {
          this.resetFinish = W;
        }, D.prototype.setSpawnCell = function (W) {
          {
            this.le = W;
          }
        }, D.prototype.setRemoveCell = function (W) {
          this.fe = W;
        }, D.prototype.setPullingLeft = function (W) {
          this.de = W;
        }, D.prototype.setPullLeftEnd = function (W) {
          this.ve = W;
        }, D.prototype.setPullingRight = function (W) {
          this._e = W;
        }, D.prototype.setPullRightEnd = function (W) {
          {
            this.pe = W;
          }
        }, D.prototype.setPullingDown = function (W) {
          {
            this.be = W;
          }
        }, D.prototype.setPullDownEnd = function (W) {
          this.me = W;
        }, D.prototype.setPullingUp = function (W) {
          this.Se = W;
        }, D.prototype.setPullUpEnd = function (W) {
          this.ge = W;
        }, D.prototype.setFocusPoint = function (W) {
          switch (W) {
            case 1:
              this.focusPoint = {}, this.focusPoint.type = 1, this.focusPoint.width = this.viewSize.width / 2, this.focusPoint.height = this.viewSize.height / 2;
              break;
            case 2:
              this.focusPoint = {}, this.focusPoint.type = 2, this.focusPoint.width = this.viewSize.width, this.focusPoint.height = this.viewSize.height;
              break;
            default:
              this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0;
          }
        }, D.prototype.getFocusPoint = function () {
          return this.focusPoint || (this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0), this.focusPoint;
        }, D.prototype.setLayoutSetting = function (W) {
          {
            this.contentLayout = this.content.getComponent(cc.Layout), this.layoutSetting = this.getLayoutSetting(), W.spacingLeft && (this.layoutSetting.spacingLeft = W.spacingLeft), W.spacingRight && (this.layoutSetting.spacingRight = W.spacingRight), W.spacingTop && (this.layoutSetting.spacingTop = W.spacingTop), W.spacingBottom && (this.layoutSetting.spacingBottom = W.spacingBottom), W.spacingX && (this.layoutSetting.spacingX = W.spacingX), W.spacingY && (this.layoutSetting.spacingY = W.spacingY), this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.spacingX = this.layoutSetting.spacingX, this.contentLayout.spacingY = this.layoutSetting.spacingY;
          }
        }, D.prototype.getLayoutSetting = function () {
          {
            var W = {};
            W.spacingLeft = 0;
            W.spacingRight = 0;
            W.spacingTop = 0;
            W.spacingBottom = 0;
            W.spacingX = 0;
            W.spacingY = 0;
            return this.layoutSetting ? this.layoutSetting : this.layoutSetting = W;
          }
        }, D.prototype.getVisibleItems = function () {
          var W = [],
            k = this.content.children;
          if (k.length) for (var z = 0; z < k.length; z++) W.push(k[z]);
          return W;
        }, D.prototype.setDataSource = function (W) {
          var k = this.node,
            z = k.width,
            L = k.height;
          this.Ce(z, L), W !== this.lt && (this.lt = W);
        }, D.prototype.ye = function () {
          return this.lt;
        }, D.prototype.Me = function (W) {
          this.we = W;
        }, D.prototype.Ae = function () {
          return this.we || (this.we = 0), this.we;
        }, D.prototype.gi = function () {
          var W = this.node,
            k = W.width,
            z = W.height;
          this.Ce(k, z), this.Pe(this.mi, this.currentIndex);
        }, D.prototype.Ce = function (W, k) {
          var z = {};
          z.width = W;
          z.height = k;
          this.viewSize = z, this.content.parent.setContentSize(W, k);
        }, D.prototype.Be = function () {
          {
            return this.viewSize;
          }
        }, D.prototype.register = function (W, k, z) {
          if (this.nodePools[W]) ;else if (k) {
            var L = new cc.NodePool(z);
            this.templates[W] = k, this.nodePools[W] = L;
          }
        }, D.prototype.reloadData = function () {
          this.setSnapDone(true);
          var W = this.lt,
            k = W.getCount(this, this.mi),
            z = this.we;
          z !== k ? (this.setMasterControl(true), k < z ? this.Oe(k) : (this.Me(k), this.reloadCurrentData(), this.Ie())) : this.reloadCurrentData(), W.didReloadData && W.didReloadData();
        }, D.prototype.insertItem = function () {}, D.prototype.removeItem = function () {}, D.prototype.Pe = function (W, k, z) {
          if (undefined === W && (W = this.mi), this.bi(), this.Ge(), this.setMasterControl(true), this.content.y = 0, this.content.x = 0, this.content.setContentSize(0, 0), this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.content.children.length) for (var L = this.content.children.length - 1; L >= 0; L--) {
            var v = this.content.children[L];
            this.Ne(v);
          }
          this.init(W, k, false, z);
        }, D.prototype.reset = function (W, k) {
          undefined === W && (W = this.mi), this.Pe(W, k, this.resetFinish);
        }, D.prototype.init = function (W, k, z, L) {
          var v = {};
          v.spacingLeft = 0;
          v.spacingRight = 0;
          v.spacingTop = 0;
          v.spacingBottom = 0;
          v.spacingX = 0;
          v.spacingY = 0;
          undefined === k && (k = 0), undefined === z && (z = true), this.layoutSetting || this.setLayoutSetting(v);
          var b = this.lt;
          this.isDynamicSize = !!b.getCellSize, this.isPreCalculateSize = !(!this.constCellSize && !this.isDynamicSize), this.isPreCalculateSize || (k = 0), this.originalElastic = this.elastic, this.currentIndex = k, this.currentTarget = k, this.requestSnap = false, this.setMasterControl(false), this.contentLayout = this.content.getComponent(cc.Layout), this.setSnapDone(true), this.snapPause = false, this.outerCellsMatrix = [], this.mi = W, this.pauseUpdate = false, this.pullDir = null, this.prevContentY = this.content.y, this.prevContentX = -1 * this.content.x, this.Mi(), this.Me(b.getCount(this, this.mi)), this.vertical ? (this.contentLayout.startAxis = 0, this.content.width = this.viewSize.width, this.Te(0, k, this.viewSize.height, z, L)) : (this.contentLayout.startAxis = 1, this.content.height = this.viewSize.height, this.He(0, k, this.viewSize.width, z, L));
        }, D.prototype.scrollTo = function (W, k) {
          var z = this;
          if (undefined === k && (k = true), !(W >= this.we)) if (!this.isPreCalculateSize || k) {
            if (this.vertical) {
              {
                var L = this.Re(W);
                if (null !== L) {
                  {
                    var v = this.getFocusPoint();
                    this.currentIndex = W, 1 === v.type ? this.target = this.ke(L) - this.outerCellsMatrix[L].height - v.height + this.outerCellsMatrix[L][0].height / 2 : this.target = this.ke(L) - this.outerCellsMatrix[L].height - this.layoutSetting.spacingTop;
                    var b = this.content.height - this.viewSize.height;
                    this.target < 0 ? this.target = 0 : this.target > b && (this.target = b);
                  }
                } else this.target = this.estimatedHeight, this.suddenStopIndex = W;
              }
            } else {
              var U = this.Re(W);
              if (null !== U) {
                v = this.getFocusPoint(), this.currentIndex = W, 1 === v.type ? this.target = this.Le(U) - this.outerCellsMatrix[U].width - v.width + this.outerCellsMatrix[U][0].width / 2 : this.target = this.Le(U) - this.outerCellsMatrix[U].width - this.layoutSetting.spacingLeft;
                var Q = this.content.width - this.viewSize.width;
                this.target < 0 ? this.target = 0 : this.target > Q && (this.target = Q);
              } else this.target = this.estimatedWidth, this.suddenStopIndex = W;
            }
            this.lerpSpeed = 10, this.setSnapDone(false);
          } else this.Pe(this.mi, W, function () {
            z.snapFinish && z.snapFinish(W);
          });
        }, D.prototype.stopUpdate = function () {
          {
            this.setMasterControl(true);
          }
        }, D.prototype.resumeUpdate = function () {
          {
            this.pauseUpdate && (this.setMasterControl(false), this.pullDir = null, this.pauseUpdate = false);
          }
        }, D.prototype.setMasterControl = function (W) {
          this.Ee = W;
        }, D.prototype.je = function () {
          {
            this.pauseUpdate || this.Ee || this.content.children.length && (this.vertical ? this.content.y !== this.prevContentY && this.De() : -1 * this.content.x !== this.prevContentX && this.Ue());
          }
        }, D.prototype.ke = function (W) {
          {
            if (this.outerCellsMatrix[W] && this.outerCellsMatrix[W].totalHeight) return this.outerCellsMatrix[W].totalHeight;
            for (var k = this.layoutSetting.spacingTop, z = 0; z <= W; z++) {
              {
                if (k += this.outerCellsMatrix[z].height, z === W) return this.outerCellsMatrix[W].totalHeight = k, k;
                k += this.layoutSetting.spacingY;
              }
            }
          }
        }, D.prototype.Le = function (W) {
          if (this.outerCellsMatrix[W] && this.outerCellsMatrix[W].totalWidth) return this.outerCellsMatrix[W].totalWidth;
          for (var k = this.layoutSetting.spacingLeft, z = 0; z <= W; z++) {
            if (k += this.outerCellsMatrix[z].width, z === W) return this.outerCellsMatrix[W].totalWidth = k, k;
            k += this.layoutSetting.spacingX;
          }
        }, D.prototype.We = function () {
          {
            if (this.vertical) {
              if (this.Fe() < this.xe) return 0;
              if (this.Ve() > this.ze) {
                var W = this.content.children.length - 1;
                return this.content.children[W].row;
              }
              for (var k = 0, z = 0, L = this.content.height, v = null, b = 0; b < this.content.children.length; b++) if (v != this.content.children[b].row) {
                v = this.content.children[b].row;
                var U = this.ke(v) - this.outerCellsMatrix[v].height - this.layoutSetting.spacingTop;
                if ((z = Math.abs(U - this.content.y)) >= L) return k;
                k = v, L = z;
              }
              return k;
            }
            if (this.Ke() > this.qe) return 0;
            if (this.Je() < this.Ye) return W = this.content.children.length - 1, this.content.children[W].col;
            var Q = 0,
              w = 0,
              P = (L = this.content.width, null);
            for (b = 0; b < this.content.children.length; b++) if (P != this.content.children[b].col) {
              P = this.content.children[b].col;
              var R = this.Le(P) - this.outerCellsMatrix[P].width - this.layoutSetting.spacingLeft;
              if ((w = Math.abs(R - -1 * this.content.x)) >= L) return Q;
              Q = P, L = w;
            }
            return Q;
          }
        }, D.prototype.Qe = function () {
          if (this.elastic = this.originalElastic, !this.Ee && this.requestSnap && this.content.children.length) {
            {
              if (this.vertical) {
                var W = this.getFocusPoint();
                this.requestSnap = false;
                var k = this.We();
                this.currentTarget = k, this.currentIndex = this.outerCellsMatrix[k][0] ? this.outerCellsMatrix[k][0].zIndex : null, 1 === W.type ? this.target = this.ke(k) - this.outerCellsMatrix[k].height - W.height + this.outerCellsMatrix[k][0].height / 2 : this.target = this.ke(k) - this.outerCellsMatrix[k].height - this.layoutSetting.spacingTop;
                var z = this.content.height - this.viewSize.height;
                z < 0 && (z = 0), this.target <= 0 ? this.target = 0 : this.target >= z && (this.target = z);
              } else {
                W = this.getFocusPoint(), this.requestSnap = false;
                var L = this.We();
                this.currentTarget = L, this.currentIndex = this.outerCellsMatrix[L][0] ? this.outerCellsMatrix[L][0].zIndex : null, 1 === W.type ? this.target = this.Le(L) - this.outerCellsMatrix[L].width - W.width + this.outerCellsMatrix[L][0].width / 2 : this.target = this.Le(L) - this.outerCellsMatrix[L].width - this.layoutSetting.spacingLeft;
                var v = this.content.width - this.viewSize.width;
                v < 0 && (v = 0), this.target <= 0 ? this.target = 0 : this.target >= v && (this.target = v);
              }
              this.lerpSpeed = 5, this.setSnapDone(false);
            }
          }
        }, D.prototype.De = function () {
          var W = this.content.y,
            k = this.content.children[0],
            z = this.content.children[this.content.children.length - 1],
            L = k.row,
            v = z.row,
            b = this.ke(v) - this.viewSize.height;
          if (this.prevContentY > W) {
            {
              var U = k.zIndex,
                Q = W - this.contentLayout.paddingTop + this.layoutSetting.spacingY;
              if (0 > Q && this.Xe(L - 1, U - 1, Q), v > 0 && this.outerCellsMatrix[v - 1] && this.outerCellsMatrix[v - 1][0]) {
                var w = W - b + this.layoutSetting.spacingY + this.outerCellsMatrix[v].height;
                w < 0 && this.Ze(v, w, b);
              }
            }
          } else {
            {
              var P = z.zIndex,
                R = W - b;
              if (0 < R && this.$e(v + 1, 0, P + 1, R), L < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[L + 1] && this.outerCellsMatrix[L + 1][0]) {
                var T = W - this.contentLayout.paddingTop - this.outerCellsMatrix[L].height;
                0 < T && this.tn(L, T);
              }
            }
          }
          this.prevContentY = W;
        }, D.prototype.Ue = function () {
          var W = -1 * this.content.x,
            k = this.content.children[0],
            z = this.content.children[this.content.children.length - 1],
            L = k.col,
            v = z.col,
            b = this.Le(v) - this.viewSize.width;
          if (this.prevContentX > W) {
            {
              var U = k.zIndex,
                Q = W - this.contentLayout.paddingLeft + this.layoutSetting.spacingX;
              if (0 > Q && this.in(L - 1, U - 1, Q), v > 0 && this.outerCellsMatrix[v - 1] && this.outerCellsMatrix[v - 1][0]) {
                var w = W - b + this.layoutSetting.spacingX + this.outerCellsMatrix[v].width;
                w < 0 && this.sn(v, w, b);
              }
            }
          } else {
            var P = z.zIndex,
              R = W - b;
            if (0 < R && this.en(0, v + 1, P + 1, R), L < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[L + 1] && this.outerCellsMatrix[L + 1][0]) {
              var T = W - this.contentLayout.paddingLeft - this.outerCellsMatrix[L].width;
              0 < T && this.nn(L, T);
            }
          }
          this.prevContentX = W;
        }, D.prototype.cn = function () {
          for (var W, k, z = this.layoutSetting, L = z.spacingX, v = z.spacingLeft + z.spacingRight, b = 0, U = 0, Q = 0, w = this.we; b < w;) {
            if (this.isDynamicSize) {
              var P = this.lt.getCellSize(b);
              W = P.width + L, k = P.height;
            } else W = this.constCellSize.width + L, k = this.constCellSize.height;
            this.outerCellsMatrix[U] || (this.outerCellsMatrix[U] = {}, this.outerCellsMatrix[U][Q] = null, this.outerCellsMatrix[U].itemCount = 0, this.outerCellsMatrix[U].height = 0, this.outerCellsMatrix[U].freeWidth = this.viewSize.width - v, this.freeWidth = this.viewSize.width - v), this.freeWidth - W >= 0 ? (this.outerCellsMatrix[U].height = Math.max(k, this.outerCellsMatrix[U].height), this.outerCellsMatrix[U][Q] = null, this.freeWidth -= W, Q += 1, this.outerCellsMatrix[U].itemCount = Q, b++) : this.freeWidth + L - W >= 0 ? (this.outerCellsMatrix[U].height = Math.max(k, this.outerCellsMatrix[U].height), this.outerCellsMatrix[U][Q] = null, this.freeWidth -= W, Q += 1, this.outerCellsMatrix[U].itemCount = Q, b++) : (U += 1, Q = 0);
          }
          this.freeWidth = undefined, this.hn();
        }, D.prototype.rn = function () {
          {
            for (var W, k, z = this.layoutSetting, L = z.spacingY, v = z.spacingTop + z.spacingBottom, b = 0, U = 0, Q = 0, w = this.we; b < w;) {
              {
                if (this.isDynamicSize) {
                  {
                    var P = this.lt.getCellSize(b);
                    W = P.width, k = P.height + L;
                  }
                } else W = this.constCellSize.width, k = this.constCellSize.height + L;
                this.outerCellsMatrix[Q] || (this.outerCellsMatrix[Q] = {}, this.outerCellsMatrix[Q][U] = {}, this.outerCellsMatrix[Q].itemCount = 0, this.outerCellsMatrix[Q].width = 0, this.outerCellsMatrix[Q].freeHeight = this.viewSize.height - v, this.freeHeight = this.viewSize.height - v), this.freeHeight - k >= 0 ? (this.outerCellsMatrix[Q].width = Math.max(W, this.outerCellsMatrix[Q].width), this.outerCellsMatrix[Q][U] = null, this.freeHeight -= k, U += 1, this.outerCellsMatrix[Q].itemCount = U, b++) : this.freeHeight + this.layoutSetting.spacingY - k >= 0 ? (this.outerCellsMatrix[Q].width = Math.max(W, this.outerCellsMatrix[Q].width), this.outerCellsMatrix[Q][U] = null, this.freeHeight -= k, U += 1, this.outerCellsMatrix[Q].itemCount = U, b++) : (Q += 1, U = 0);
              }
            }
            this.freeHeight = undefined, this.an();
          }
        }, D.prototype.un = function (W, k, z) {
          {
            this.lastContentY = this.content.y;
            for (var L, b, U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingLeft + U.spacingRight, T = 0, Y = this.we, X = 0; k < Y;) {
              if (this.isDynamicSize) {
                var E = this.lt.getCellSize(k);
                L = E.width + Q, b = E.height;
              } else L = this.constCellSize.width + Q, b = this.constCellSize.height;
              if (!(z > 0)) return;
              if (this.outerCellsMatrix[R] || (this.outerCellsMatrix[R] = {}, this.outerCellsMatrix[R][T] = null, this.outerCellsMatrix[R].itemCount = 0, this.outerCellsMatrix[R].height = 0, this.outerCellsMatrix[R].freeWidth = this.viewSize.width - P), this.outerCellsMatrix[R].freeWidth - L >= 0) {
                this.outerCellsMatrix[R].height = Math.max(b, this.outerCellsMatrix[R].height);
                var F = this.lt.getItem(this, k, this.mi);
                this.ln(F, R, T, k), this.outerCellsMatrix[R].freeWidth -= L, T += 1, this.outerCellsMatrix[R].itemCount = T, k++;
              } else if (this.outerCellsMatrix[R].freeWidth + Q - L >= 0) this.outerCellsMatrix[R].height = Math.max(b, this.outerCellsMatrix[R].height), F = this.lt.getItem(this, k, this.mi), this.ln(F, R, T, k), this.outerCellsMatrix[R].freeWidth -= L, T += 1, this.outerCellsMatrix[R].itemCount = T, k++;else {
                var N = (z -= X) - (this.outerCellsMatrix[R].height + w);
                N > 0 ? z = N : N + w > 0 ? (z = N + w, X = w) : z = N, R += 1, T = 0;
              }
            }
          }
        }, D.prototype.dn = function (W, k, z) {
          this.lastContentX = -1 * this.content.x;
          for (var L, b, U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingTop + U.spacingBottom, R = 0, Y = this.we, X = 0; k < Y;) {
            {
              if (this.isDynamicSize) {
                {
                  var E = this.lt.getCellSize(k);
                  L = E.width, b = E.height + w;
                }
              } else L = this.constCellSize.width, b = this.constCellSize.height + w;
              if (!(z > 0)) return void this.setMasterControl(false);
              if (this.outerCellsMatrix[T] || (this.outerCellsMatrix[T] = {}, this.outerCellsMatrix[T][R] = {}, this.outerCellsMatrix[T].itemCount = 0, this.outerCellsMatrix[T].width = 0, this.outerCellsMatrix[T].freeHeight = this.viewSize.height - P), this.outerCellsMatrix[T].freeHeight - b >= 0) {
                this.outerCellsMatrix[T].width = Math.max(L, this.outerCellsMatrix[T].width);
                var F = this.lt.getItem(this, k, this.mi);
                this.ln(F, R, T, k), this.outerCellsMatrix[T].freeHeight -= b, R += 1, this.outerCellsMatrix[T].itemCount = R, k++;
              } else if (this.outerCellsMatrix[T].freeHeight + w - b >= 0) this.outerCellsMatrix[T].width = Math.max(L, this.outerCellsMatrix[T].width), F = this.lt.getItem(this, k, this.mi), this.ln(F, R, T, k), this.outerCellsMatrix[T].freeHeight -= b, R += 1, this.outerCellsMatrix[T].itemCount = R, k++;else {
                var N = (z -= X) - (this.outerCellsMatrix[T].width + Q);
                N > 0 ? z = N : N + Q > 0 ? (z = N + Q, X = Q) : z = N, T += 1, R = 0;
              }
            }
          }
          this.setMasterControl(false);
        }, D.prototype.vn = function (W, k, z) {
          var L = this.Re(W),
            v = this._n(L),
            b = this.ke(L) - this.outerCellsMatrix[L].height;
          this.Fe() < this.xe ? this.target = 0 : this.Ve() > this.ze ? this.target = this.content.height + this.ze : this.target = b - this.layoutSetting.spacingTop, this.content.y = this.target, this.contentLayout.paddingTop = b, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.updateLayout(), this.un(L, v, k);
          var U = this.content.y - b;
          U < 0 ? this.Xe(L - 1, v - 1, U, z) : z && z(), this.setMasterControl(false);
        }, D.prototype.pn = function (W, k, z) {
          var L = this.Re(W),
            v = this._n(L),
            b = -1 * (this.Le(L) - this.outerCellsMatrix[L].width);
          this.Ke() > this.qe ? this.target = 0 : this.Je() < this.Ye ? this.target = -1 * (this.content.width - this.Ye) : this.target = b + this.layoutSetting.spacingLeft, this.content.x = this.target, this.contentLayout.paddingLeft = -b, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.updateLayout(), this.dn(L, v, k);
          var U = -1 * this.content.x + b;
          U < 0 ? this.in(L - 1, v - 1, U, z) : z && z(), this.setMasterControl(false);
        }, D.prototype.Te = function (W, k, z, L, b) {
          if (undefined === L && (L = true), this.we) {
            if (this.isPreCalculateSize && !L) this.cn(), this.vn(k, z, b);else {
              {
                this.lastContentY = this.content.y;
                for (var U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingLeft + U.spacingRight, T = 0, Y = undefined, X = undefined, E = undefined, F = this.we, N = 0; k < F;) {
                  {
                    if (X = (Y = this.lt.getItem(this, k, this.mi)).width + Q, E = Y.height, !(z > 0)) return this.hn(), this.wi(Y), void this.setMasterControl(false);
                    if (this.outerCellsMatrix[R] || (this.outerCellsMatrix[R] = {}, this.outerCellsMatrix[R][T] = null, this.outerCellsMatrix[R].itemCount = 0, this.outerCellsMatrix[R].height = 0, this.outerCellsMatrix[R].freeWidth = this.viewSize.width - P), this.outerCellsMatrix[R].freeWidth - X >= 0) this.outerCellsMatrix[R].height = Math.max(E, this.outerCellsMatrix[R].height), this.ln(Y, R, T, k), this.outerCellsMatrix[R].freeWidth -= X, T += 1, this.outerCellsMatrix[R].itemCount = T, k++, this.hn();else if (this.outerCellsMatrix[R].freeWidth + Q - X >= 0) this.outerCellsMatrix[R].height = Math.max(E, this.outerCellsMatrix[R].height), this.ln(Y, R, T, k), this.outerCellsMatrix[R].freeWidth -= X, T += 1, this.outerCellsMatrix[R].itemCount = T, k++, this.hn();else {
                      var Z = (z -= N) - (this.outerCellsMatrix[R].height + w);
                      Z > 0 ? z = Z : Z + w > 0 ? (z = Z + w, N = w) : z = Z, this.hn(), this.wi(Y), R += 1, T = 0;
                    }
                  }
                }
                this.setMasterControl(false);
              }
            }
          } else b && b();
        }, D.prototype.He = function (W, k, z, L, b) {
          {
            if (this.we) {
              if (this.isPreCalculateSize && !L) this.rn(), this.pn(k, z, b);else {
                this.lastContentX = -1 * this.content.x;
                for (var U = this.layoutSetting, Q = U.spacingX, w = U.spacingY, P = U.spacingTop + U.spacingBottom, R = 0, Y = undefined, X = undefined, E = undefined, F = this.we, N = 0; k < F;) {
                  if (X = (Y = this.lt.getItem(this, k, this.mi)).width, E = Y.height + w, !(z > 0)) return this.an(), this.wi(Y), void this.setMasterControl(false);
                  if (this.outerCellsMatrix[T] || (this.outerCellsMatrix[T] = {}, this.outerCellsMatrix[T][R] = {}, this.outerCellsMatrix[T].itemCount = 0, this.outerCellsMatrix[T].width = 0, this.outerCellsMatrix[T].freeHeight = this.viewSize.height - P), this.outerCellsMatrix[T].freeHeight - E >= 0) this.outerCellsMatrix[T].width = Math.max(X, this.outerCellsMatrix[T].width), this.ln(Y, R, T, k), this.outerCellsMatrix[T].freeHeight -= E, R += 1, this.outerCellsMatrix[T].itemCount = R, k++, this.an();else if (this.outerCellsMatrix[T].freeHeight + w - E >= 0) this.outerCellsMatrix[T].width = Math.max(X, this.outerCellsMatrix[T].width), this.ln(Y, R, T, k), this.outerCellsMatrix[T].freeHeight -= E, R += 1, this.outerCellsMatrix[T].itemCount = R, k++, this.an();else {
                    {
                      var Z = (z -= N) - (this.outerCellsMatrix[T].width + Q);
                      Z > 0 ? z = Z : Z + Q > 0 ? (z = Z + Q, N = Q) : z = Z, this.an(), this.wi(Y), T += 1, R = 0;
                    }
                  }
                }
                this.setMasterControl(false);
              }
            } else b && b();
          }
        }, D.prototype.tn = function (W, k) {
          {
            for (var z = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, L = this.outerCellsMatrix[W].itemCount - 1; 0 < k;) if (L >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][L]), L--;else {
              {
                if (this.contentLayout.paddingTop += this.outerCellsMatrix[W].height + this.layoutSetting.spacingY, this.outerCellsMatrix[W].freeWidth = this.viewSize.width - z, (W += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[W][0]) return;
                L = this.outerCellsMatrix[W].itemCount - 1, k = this.content.y - this.contentLayout.paddingTop - this.outerCellsMatrix[W].height;
              }
            }
          }
        }, D.prototype.nn = function (W, k) {
          for (var z = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, L = this.outerCellsMatrix[W].itemCount - 1; 0 < k;) if (L >= 0) this.Ne(this.outerCellsMatrix[W][L]), L--;else {
            if (this.contentLayout.paddingLeft += this.outerCellsMatrix[W].width + this.layoutSetting.spacingX, this.outerCellsMatrix[W].freeHeight = this.viewSize.height - z, (W += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[W][0]) return;
            L = this.outerCellsMatrix[W].itemCount - 1, k = -1 * this.content.x - this.contentLayout.paddingLeft - this.outerCellsMatrix[W].width;
          }
        }, D.prototype.Ze = function (W, k, z) {
          for (var L = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, v = this.outerCellsMatrix[W].itemCount - 1; k < 0;) if (v >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][v]), v--;else {
            if (this.outerCellsMatrix[W].freeWidth = this.viewSize.width - L, (W -= 1) <= 0 || !this.outerCellsMatrix[W][0]) return;
            v = this.outerCellsMatrix[W].itemCount - 1, z = this.ke(W) - this.viewSize.height, k = this.content.y - z + this.layoutSetting.spacingY + this.outerCellsMatrix[W].height;
          }
        }, D.prototype.sn = function (W, k, z) {
          for (var L = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, v = this.outerCellsMatrix[W].itemCount - 1; k < 0;) if (v >= 0) this.fe && this.fe(), this.Ne(this.outerCellsMatrix[W][v]), v--;else {
            {
              if (this.outerCellsMatrix[W].freeHeight = this.viewSize.height - L, (W -= 1) <= 0 || !this.outerCellsMatrix[W][0]) return;
              v = this.outerCellsMatrix[W].itemCount - 1, z = this.Le(W) - this.viewSize.width, k = -1 * this.content.x - z + this.layoutSetting.spacingX + this.outerCellsMatrix[W].width;
            }
          }
        }, D.prototype.removeUselessItems = function (W, k) {
          {
            if (this.Me(W), this.vertical) for (var z = this.content.children.length - 1; z >= 0; z--) {
              if (!((v = this.content.children[z]).zIndex > W - 1)) {
                this.reloadCurrentData();
                var L = v.col + 1;
                this.outerCellsMatrix[v.row].itemCount = L, this.outerCellsMatrix.splice(v.row + 1, this.outerCellsMatrix.length - 1), this.hn(), this.setMasterControl(false), k && k();
                break;
              }
              this.outerCellsMatrix[v.row].freeWidth += this.outerCellsMatrix[v.row][v.col].width + this.layoutSetting.spacingX, this.Ne(v), 0 === z && (this.hn(), this.setMasterControl(false), k && k());
            } else for (z = this.content.children.length - 1; z >= 0; z--) {
              var v;
              if (!((v = this.content.children[z]).zIndex >= W - 1)) {
                {
                  this.reloadCurrentData(), L = v.row + 1, this.outerCellsMatrix[v.col].itemCount = L, this.outerCellsMatrix.splice(v.col + 1, this.outerCellsMatrix.length - 1), this.an(), this.setMasterControl(false), k && k();
                  break;
                }
              }
              this.outerCellsMatrix[v.col].freeHeight += this.outerCellsMatrix[v.col][v.row].height + this.layoutSetting.spacingY, this.Ne(v), 0 === z && (this.hn(), this.setMasterControl(false), k && k());
            }
          }
        }, D.prototype.$e = function (W, k, z, L) {
          this.lastContentY = this.content.y;
          for (var v, b, U, Q = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, R = this.we; z < R;) {
            if (b = (v = this.lt.getItem(this, z, this.mi)).width + this.layoutSetting.spacingX, U = v.height, !(0 < L)) return this.hn(), void this.wi(v);
            if (this.outerCellsMatrix[w] || (this.outerCellsMatrix[w] = {}, this.outerCellsMatrix[w][P] = {}, this.outerCellsMatrix[w].itemCount = 0, this.outerCellsMatrix[w].height = 0, this.outerCellsMatrix[w].freeWidth = this.viewSize.width - Q), this.outerCellsMatrix[w].freeWidth - b >= 0) this.le && this.le(), this.outerCellsMatrix[w].height = Math.max(U, this.outerCellsMatrix[w].height), this.ln(v, w, P, z), this.outerCellsMatrix[w].freeWidth -= b, P += 1, this.outerCellsMatrix[w].itemCount = P, ++z >= R && this.hn();else if (this.outerCellsMatrix[w].freeWidth + this.layoutSetting.spacingX - b >= 0) this.le && this.le(), this.outerCellsMatrix[w].height = Math.max(U, this.outerCellsMatrix[w].height), this.ln(v, w, P, z), this.outerCellsMatrix[w].freeWidth -= b, P += 1, this.outerCellsMatrix[w].itemCount = P, z++, this.hn();else {
              var T = this.content.children[this.content.children.length - 1].row,
                Y = this.ke(T) - this.viewSize.height;
              L = this.content.y - Y, this.hn(), this.wi(v), w += 1, P = 0;
            }
          }
        }, D.prototype.en = function (W, k, z, L) {
          {
            this.lastContentY = -1 * this.content.x;
            for (var v, b, U, Q = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, R = this.we; z < R;) {
              if (b = (v = this.lt.getItem(this, z, this.mi)).width, U = v.height + this.layoutSetting.spacingY, !(0 < L)) return this.an(), void this.wi(v);
              if (this.outerCellsMatrix[P] || (this.outerCellsMatrix[P] = {}, this.outerCellsMatrix[P][w] = {}, this.outerCellsMatrix[P].itemCount = 0, this.outerCellsMatrix[P].width = 0, this.outerCellsMatrix[P].freeHeight = this.viewSize.height - Q), this.outerCellsMatrix[P].freeHeight - U >= 0) this.le && this.le(), this.outerCellsMatrix[P].width = Math.max(b, this.outerCellsMatrix[P].width), this.ln(v, w, P, z), this.outerCellsMatrix[P].freeHeight -= U, w += 1, this.outerCellsMatrix[P].itemCount = w, ++z >= R && this.an();else if (this.outerCellsMatrix[P].freeHeight + this.layoutSetting.spacingY - U >= 0) this.le && this.le(), this.outerCellsMatrix[P].width = Math.max(b, this.outerCellsMatrix[P].width), this.ln(v, w, P, z), this.outerCellsMatrix[P].freeHeight -= U, w += 1, this.outerCellsMatrix[P].itemCount = w, z++, this.an();else {
                var T = this.content.children[this.content.children.length - 1].col,
                  Y = this.Le(T) - this.viewSize.width;
                L = -1 * this.content.x - Y, this.an(), this.wi(v), P += 1, w = 0;
              }
            }
          }
        }, D.prototype.Xe = function (W, k, z, L) {
          if (!(W < 0)) {
            for (var v, b, U, w = this.outerCellsMatrix[Q].itemCount - 1; k >= 0;) {
              {
                if (b = (v = this.lt.getItem(this, k, this.mi)).width + this.layoutSetting.spacingX, U = v.height, !(0 > z)) return this.hn(), this.wi(v), void (L && L());
                w >= 0 ? (this.le && this.le(), this.outerCellsMatrix[Q].height = Math.max(U, this.outerCellsMatrix[Q].height), this.ln(v, Q, w, k), this.outerCellsMatrix[Q].freeWidth -= b, 0 === k && (this.contentLayout.paddingTop -= this.outerCellsMatrix[Q].height + this.layoutSetting.spacingY, z = this.content.y - this.contentLayout.paddingTop), w -= 1, k--) : (this.contentLayout.paddingTop -= this.outerCellsMatrix[Q].height + this.layoutSetting.spacingY, z = this.content.y - this.contentLayout.paddingTop, this.hn(), this.wi(v), Q -= 1, w = this.outerCellsMatrix[Q].itemCount - 1);
              }
            }
            L && L();
          }
        }, D.prototype.in = function (W, k, z, L) {
          if (!(W < 0)) {
            for (var v, b, U, Q = -1 * this.content.x, P = this.outerCellsMatrix[w].itemCount - 1; k >= 0;) {
              {
                if (b = (v = this.lt.getItem(this, k, this.mi)).width, U = v.height + this.layoutSetting.spacingY, !(0 > z)) return this.an(), this.wi(v), void (L && L());
                P >= 0 ? (this.le && this.le(), this.outerCellsMatrix[w].width = Math.max(b, this.outerCellsMatrix[w].width), this.ln(v, P, w, k), this.outerCellsMatrix[w].freeHeight -= U, 0 === k && (this.contentLayout.paddingLeft -= this.outerCellsMatrix[w].width + this.layoutSetting.spacingX, z = Q - this.contentLayout.paddingLeft), P -= 1, k--) : (this.contentLayout.paddingLeft -= this.outerCellsMatrix[w].width + this.layoutSetting.spacingX, z = Q - this.contentLayout.paddingLeft, this.an(), this.wi(v), w -= 1, P = this.outerCellsMatrix[w].itemCount - 1);
              }
            }
            L && L();
          }
        }, D.prototype.hn = function () {
          for (var W = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, k = 0; k < this.outerCellsMatrix.length; k++) W += this.outerCellsMatrix[k].height, k !== this.outerCellsMatrix.length - 1 ? W += this.layoutSetting.spacingY : this.content.height !== W && (this.content.height = W);
        }, D.prototype.an = function () {
          for (var W = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, k = 0; k < this.outerCellsMatrix.length; k++) W += this.outerCellsMatrix[k].width, k !== this.outerCellsMatrix.length - 1 ? W += this.layoutSetting.spacingX : this.content.width !== W && (this.content.width = W);
        }, D.prototype.ln = function (W, k, z, L) {
          var v = this.bn();
          this.vertical ? this.outerCellsMatrix[k][z] = v : this.outerCellsMatrix[z][k] = v, this.content.addChild(v), v.addChild(W), v.row = k, v.col = z, v.zIndex = L, v.width = W.width, v.height = W.height, this.content.sortAllChildren();
        }, D.prototype.dequeueReusableItem = function (W) {
          {
            var k,
              z = this.nodePools[W];
            if (z) {
              if (!(k = z.get())) {
                var L = this.templates[W];
                k = cc.instantiate(L);
              }
              k.lv_type = W;
            }
            return k;
          }
        }, D.prototype.wi = function (W) {
          var k,
            z = W.lv_type;
          z && (k = this.nodePools[z]), k && k.put(W);
        }, D.prototype.Oe = function (W) {
          if (this.vertical) {
            {
              var k = this.Re(this.currentIndex);
              this.currentIndex <= W - 1 ? this.removeUselessItems(W) : null !== k ? (this.isReducingData = true, this.newDataCount = W, this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(W);
            }
          } else {
            {
              var z = this.Re(this.currentIndex);
              this.currentIndex < W - 1 ? this.removeUselessItems(W) : null !== z ? (this.isReducingData = true, this.stopAutoScroll(), this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(W);
            }
          }
        }, D.prototype.Ie = function () {
          if (this.vertical) {
            if (!this.content.children.length) return void this.Te(0, 0, this.viewSize.height);
            var W = (U = this.content.children[this.content.children.length - 1]).row,
              k = W - 1;
            k < 0 && (k = 0);
            var z = this.ke(k) - this.viewSize.height,
              L = U.zIndex,
              v = this.content.y - z,
              b = (P = this.lt.getItem(this, L + 1, this.mi)).width + this.layoutSetting.spacingX;
            this.wi(P), this.outerCellsMatrix[W].freeWidth - b >= 0 ? this.$e(W, this.outerCellsMatrix[W].itemCount, L + 1, v) : this.outerCellsMatrix[W].freeWidth + this.layoutSetting.spacingX - b >= 0 && this.$e(W, this.outerCellsMatrix[W].itemCount, L + 1, v), this.setMasterControl(false);
          } else {
            {
              if (!this.content.children.length) return void this.He(0, 0, this.viewSize.width);
              var U,
                Q = (U = this.content.children[this.content.children.length - 1]).col,
                w = Q - 1;
              w < 0 && (w = 0), z = this.Le(w) - this.viewSize.width;
              var P,
                R = U.zIndex,
                T = -1 * this.content.x - z,
                Y = (P = this.lt.getItem(this, R + 1, this.mi)).height + this.layoutSetting.spacingY;
              this.wi(P), this.outerCellsMatrix[Q].freeHeight - Y >= 0 ? this.en(this.outerCellsMatrix[R].itemCount, Q, R + 1, T) : this.outerCellsMatrix[Q].freeWidth + this.layoutSetting.spacingX - Y >= 0 && this.en(this.outerCellsMatrix[Q].itemCount, Q, R + 1, T), this.setMasterControl(false);
            }
          }
        }, D.prototype.reloadCurrentData = function (W) {
          if (this.content.children.length) for (var k = 0; k < this.content.children.length; k++) {
            {
              this.wi(this.content.children[k].children[0]);
              var z = this.lt.getItem(this, this.content.children[k].zIndex, this.mi);
              this.content.children[k].addChild(z), this.content.sortAllChildren();
            }
          }
          W && W();
        }, D.prototype.Ne = function (W) {
          null !== k && null !== k.row && null !== k.col && (this.vertical ? this.outerCellsMatrix[k.row][k.col] = null : this.outerCellsMatrix[k.col][k.row] = null, k.children.length && this.wi(k.children[0]), this._.put(k), this.content.sortAllChildren());
        }, D.prototype.bn = function () {
          return this._ ? this._.size() ? this._.get() : new cc.Node() : (this._ = new cc.NodePool(), new cc.Node());
        }, D.prototype.Oi = function (W, k, z, L, v) {
          if (undefined === L && (L = 1), H(cc.v2(W, 0), cc.v2(k, 0)) <= 1) return this.mn(v), k;
          this.Fi("scrolling");
          var b = W + (z *= L) * (k - W);
          return W >= k ? b <= k && (this.mn(v), b = k) : b >= k && (this.mn(v), b = k), b;
        }, D.prototype.mn = function (W) {
          var k = this;
          if (this.isReducingData) this.isReducingData = false, this.removeUselessItems(this.newDataCount, function () {
            if (k.setMasterControl(false), k.setSnapDone(true), k.stopAutoScroll(), k.Fi("scroll-ended"), null === k.currentIndex) {
              var L = k.We();
              k.currentIndex = k.outerCellsMatrix[L][0].zIndex;
            }
            k.snapFinish && k.snapFinish(k.currentIndex), W && W();
          });else {
            if (this.setMasterControl(false), this.setSnapDone(true), this.stopAutoScroll(), this.Fi("scroll-ended"), null === this.currentIndex) {
              var z = this.We();
              this.currentIndex = this.outerCellsMatrix[z][0].zIndex;
            }
            this.snapFinish && this.snapFinish(this.currentIndex), W && W();
          }
        }, D.prototype._n = function (W) {
          {
            for (var k = 0, z = 0; z <= W; z++) {
              if (W === z) return k;
              k += this.outerCellsMatrix[z].itemCount;
            }
          }
        }, D.prototype.Re = function (W) {
          {
            for (var k = this.outerCellsMatrix.length - 1, z = 0; z <= k; z++) {
              if (!((W -= this.outerCellsMatrix[z].itemCount) >= 0)) return z;
              if (z === k) return null;
            }
          }
        }, D.prototype.destroy = function () {
          this.bi(), m.prototype.destroy.call(this);
        }, D.prototype.Mi = function () {
          {
            this.content.on(cc.Node.EventType.POSITION_CHANGED, this.je, this), this.autoSnap && this.node.on("scroll-ended", this.Qe, this), this.node.on(cc.Node.EventType.SIZE_CHANGED, this.gi, this);
          }
        }, D.prototype.bi = function () {
          this.content.off(cc.Node.EventType.POSITION_CHANGED, this.je, this), this.autoSnap && this.node.off("scroll-ended", this.Qe, this), this.node.off(cc.Node.EventType.SIZE_CHANGED, this.gi, this);
        }, D.prototype.Ge = function () {
          this.xe = 0, this.ze = 0, this.qe = 0, this.Ye = 0, this.Sn = [], this.gn = [], this.Cn = 0, this.ji = false, this.yn = false, this.Mn = false, this.wn = cc.v2(0, 0), this.An = cc.v2(0, 0), this.Pn = 0, this.Bn = 0, this.On = false, this.In = false, this.Gn = cc.v2(0, 0), this.Nn = cc.v2(0, 0), this.Tn = true, this.Qi = false, this.Ji = 0, this.Hn = false, this.Rn = 0, this.kn = false, this.Ln = false;
        }, D.prototype.update = function (W) {
          if (!this.pauseUpdate) {
            if (this.snapPause) return this.setSnapDone(true), void this.stopAutoScroll();
            if (!this.snapDone) {
              {
                if (!this.content.children.length) return this.content.setPosition(cc.v2(0, 0)), void this.setSnapDone(true);
                if (!(this.suddenStopIndex && this.content.children[this.content.children.length - 1].zIndex >= this.suddenStopIndex)) return this.stopAutoScroll(), void (this.vertical ? this.content.y = this.Oi(this.content.y, this.target, W, this.lerpSpeed) : this.content.x = -1 * this.Oi(-1 * this.content.x, this.target, W, this.lerpSpeed));
                this.setMasterControl(true), this.scrollTo(this.suddenStopIndex), this.suddenStopIndex = null;
              }
            }
            m.prototype.update.call(this, W);
          }
        }, D.prototype.Ii = function (W, k) {
          this.elastic = this.originalElastic, this.touchPos = W.touch.getLocation(), !this.Ee && this.content.children.length && (this.unschedule(this.Xi), this.Qi = false, this.snapPause = true, this.setSnapDone(true), m.prototype.Ii.call(this, W, k));
        }, D.prototype.$ = function (W, k) {
          this.elastic = this.originalElastic, !this.Ee && this.content.children.length && (this.vertical ? this.En(W) : this.jn(W), this.pauseUpdate || m.prototype.$.call(this, W, k));
        }, D.prototype.Dn = function () {
          if (this.Vi && this.Vi.getScrollY() > 0) this.Se && 2 === this.pullDir && this.Se(0), this.be && this.Fe() <= this.xe && (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.Vi.getScrollY())), (W = this.beginPullPos.y - this.Vi.getScrollY()) > 0 && (W = 0), this.be(Math.abs(W)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.Vi && this.Vi.getScrollY() < 0) {
            {
              var W;
              this.be && 1 === this.pullDir && this.be(0), this.Se && Math.round(this.Ve()) >= Math.round(this.ze) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.Vi.getScrollY())), (W = this.beginPullPos.y - this.Vi.getScrollY()) < 0 && (W = 0), this.Se(W), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
            }
          }
        }, D.prototype.xi = function () {
          if (this.Vi && this.Vi.getScrollY() > 0) this.Se && 2 === this.pullDir && this._e(0), this.de && this.Je() <= this.Ye && (this.pauseUpdate || (this.beginPullPos = cc.v2(this.Vi.getScrollY(), 0)), (W = this.beginPullPos.x - this.Vi.getScrollY()) > 0 && (W = 0), this.de(Math.abs(W)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.Vi && this.Vi.getScrollY() < 0) {
            var W;
            this.be && 1 === this.pullDir && this.de(0), this._e && this.Ke() >= this.qe && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(this.Vi.getScrollY(), 0)), (W = this.beginPullPos.x - this.Vi.getScrollY()) < 0 && (W = 0), this._e(W), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
          }
        }, D.prototype.En = function (W) {
          if (this.touchPos.y > W.touch.getLocation().y) this.Se && 2 === this.pullDir && this.Se(0), this.be && this.Fe() <= this.xe && (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.y - W.touch.getLocation().y) < 0 && (k = 0), this.be(k), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.touchPos.y < W.touch.getLocation().y) {
            {
              var k;
              this.be && 1 === this.pullDir && this.be(0), this.Se && Math.round(this.Ve()) >= Math.round(this.ze) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.y - W.touch.getLocation().y) > 0 && (k = 0), this.Se(Math.abs(k)), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);
            }
          }
        }, D.prototype.jn = function (W) {
          {
            if (this.touchPos.x > W.touch.getLocation().x) this._e && 1 === this.pullDir && this._e(0), this.de && this.Je() <= this.Ye && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.we - 1 || (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.x - W.touch.getLocation().x) < 0 && (k = 0), this.de(k), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.we - 1 && (this.elastic = true);else if (this.touchPos.x < W.touch.getLocation().x) {
              {
                var k;
                this.de && 2 === this.pullDir && this.de(0), this._e && this.Ke() >= this.qe && (this.pauseUpdate || (this.beginPullPos = W.touch.getLocation()), (k = this.beginPullPos.x - W.touch.getLocation().x) > 0 && (k = 0), this._e(Math.abs(k)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);
              }
            }
          }
        }, D.prototype.Ti = function (W, k) {
          if (H(this.touchPos, W.touch.getLocation()) >= 50 && W.stopPropagationImmediate(), !this.Ee && this.content.children.length) {
            if (this.pauseUpdate) {
              {
                if (this.vertical) {
                  var z = this.beginPullPos.y - W.touch.getLocation().y;
                  this.me && 1 === this.pullDir ? (z < 0 && (z = 0), this.me(z)) : this.ge && 2 === this.pullDir && (z > 0 && (z = 0), this.ge(Math.abs(z)));
                } else z = this.beginPullPos.x - W.touch.getLocation().x, this.pe && 1 === this.pullDir ? (z > 0 && (z = 0), this.pe(Math.abs(z))) : this.ve && 2 === this.pullDir && (z < 0 && (z = 0), this.ve(z));
                this.pullDir = null;
              }
            }
            this.snapPause = false, this.requestSnap = true, m.prototype.Ti.call(this, W, k);
          }
        }, D.prototype.ki = function (W, k) {
          if (H(this.touchPos, W.touch.getLocation()) >= 50 && W.stopPropagationImmediate(), !this.Ee && this.content.children.length) {
            if (this.pauseUpdate) {
              if (this.vertical) {
                var z = this.beginPullPos.y - W.touch.getLocation().y;
                this.me && 1 === this.pullDir ? (z < 0 && (z = 0), this.me(z)) : this.ge && 2 === this.pullDir && (z > 0 && (z = 0), this.ge(Math.abs(z)));
              } else z = this.beginPullPos.x - W.touch.getLocation().x, this.pe && 1 === this.pullDir ? (z > 0 && (z = 0), this.pe(Math.abs(z))) : this.ve && 2 === this.pullDir && (z < 0 && (z = 0), this.ve(z));
              this.pullDir = null;
            }
            this.snapPause = false, this.requestSnap = true, m.prototype.ki.call(this, W, k);
          }
        }, D.prototype.zi = function () {
          this.snapPause = true, this.setSnapDone(true);
        }, D.prototype.Ki = function () {
          if (!this.Ee) {
            if (this.pauseUpdate) {
              {
                if (this.vertical) {
                  var W = this.beginPullPos.y - this.Vi.getScrollY();
                  this.me && 1 === this.pullDir ? (W > 0 && (W = 0), this.me(Math.abs(W))) : this.ge && 2 === this.pullDir && (W < 0 && (W = 0), this.ge(W));
                } else W = this.beginPullPos.x - this.Vi.getScrollY(), this.pe && 1 === this.pullDir ? (W > 0 && (W = 0), this.pe(Math.abs(W))) : this.ve && 2 === this.pullDir && (W < 0 && (W = 0), this.ve(W));
                this.pullDir = null;
              }
            }
            this.snapPause = false, this.requestSnap = true, this.autoSnap && this.Qe(), this.Vi = undefined;
          }
        }, D.prototype.qi = function (W, k) {
          if (this.elastic = this.originalElastic, !this.Ee && this.content.children.length && this.enabledInHierarchy && !this.Un(W, k)) {
            this.Vi = W;
            var z = cc.v2(0, 0);
            this.vertical ? (z = cc.v2(0, -0.1 * W.getScrollY()), this.Dn()) : this.horizontal && (z = cc.v2(-0.1 * W.getScrollY(), 0), this.xi()), this.Ji = 0, this.Yi(z), this.Qi || (this.Ei(), this.schedule(this.Xi, 1 / 60), this.Qi = true, this.zi()), this.Di(W);
          }
        }, D.prototype.Xi = function (W) {
          if (!this.Ee) {
            var k = this.Zi();
            if (!C(k, cc.v2(0, 0), 0.0001)) return this.$i(), this.unschedule(this.Xi), this.Qi = false, void this.Ki();
            this.Ji += W, this.Ji > 0.1 && (this.ts(), this.unschedule(this.Xi), this.Qi = false, this.Ki());
          }
        }, D.prototype.Wn = function (W) {
          var k = this.Fn(),
            z = k ? 0.05 : 1;
          this.Bn += W * (1 / z);
          var L,
            v = Math.min(1, this.Bn / this.Pn);
          this.Mn && (L = v, v = (L -= 1) * L * L * L * L + 1);
          var b = this.wn.add(this.An.mul(v)),
            U = v > 0.5;
          if (Math.abs(v - 1) <= this.getScrollEndedEventTiming() && !this.Hn && (this.Fi("scroll-ended-with-threshold"), this.Hn = true), this.elastic) {
            var Q = b.sub(this.Gn);
            k && (Q = Q.mul(z)), b = this.Gn.add(Q);
          } else {
            var w = b.sub(this.getContentPosition()),
              P = this.Zi(w);
            P.fuzzyEquals(cc.v2(0, 0), 0.0001) || (b = b.add(P), U = true);
          }
          U && (this.yn = false);
          var R = b.sub(this.getContentPosition());
          this.xn(this.Vn(R), U), this.Fi("scrolling"), this.yn || (this.kn = false, this.Ln = false, this.Fi("scroll-ended"));
        }, D.prototype.Un = function () {
          return false;
        }, D.prototype.$i = function () {
          if (!this.zn() && this.inertia) {
            var W = this.Kn();
            !C(W, cc.v2(0, 0), 0.0001) && this.brake < 1 ? this.qn(W) : this.autoSnap && this.Qe();
          }
          this.ts();
        }, __decorate([M], D);
      }(x.default));
    exports.default = q, cc._RF.pop();
  }
}
module.exports = GridView;
