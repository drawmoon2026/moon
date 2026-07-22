// module: GridView
// Cocos 模块函数,参数 (require, module, exports) = (require, j, module)
function GridView(require, j, module) {
  'use strict';

  if (!cc._RF.push(j, "2a349Sf9h1Dw6gCmtoNZ3ZP", "GridView")) {
    var m = {};
    m.value = true;
    Object.defineProperty(module, "__esModule", m);
    var B = require("ScrollViewEx"),
      X = function (V, N, q) {
        return V.fuzzyEquals(N, q);
      },
      Z = function (V, N) {
        return V.sub(N).mag();
      },
      T = cc._decorator,
      M = T.ccclass,
      C = (T.property, function (V) {
        {
          function N() {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.autoSnap = true, q.wi = {}, q.Bi = {}, q;
          }
          return __extends(N, V), Object.defineProperty(N.prototype, "nodePools", {
            'get': function () {
              {
                return this.wi;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(N.prototype, "templates", {
            'get': function () {
              return this.Bi;
            },
            'enumerable': false,
            'configurable': true
          }), N.prototype.setEstimatedSize = function (q) {
            this.vertical ? this.estimatedHeight = q.y : this.estimatedWidth = q.x;
          }, N.prototype.setConstantCellSize = function (q, f) {
            {
              var g = {};
              g.width = q;
              g.height = f;
              this.constCellSize = g;
            }
          }, N.prototype.setResetFinish = function (q) {
            this.resetFinish = q;
          }, N.prototype.setSpawnCell = function (q) {
            this.ne = q;
          }, N.prototype.setRemoveCell = function (q) {
            this.oe = q;
          }, N.prototype.setPullingLeft = function (q) {
            this.ce = q;
          }, N.prototype.setPullLeftEnd = function (q) {
            {
              this.he = q;
            }
          }, N.prototype.setPullingRight = function (q) {
            this.re = q;
          }, N.prototype.setPullRightEnd = function (q) {
            this.ae = q;
          }, N.prototype.setPullingDown = function (q) {
            this.ue = q;
          }, N.prototype.setPullDownEnd = function (q) {
            this.le = q;
          }, N.prototype.setPullingUp = function (q) {
            this.fe = q;
          }, N.prototype.setPullUpEnd = function (q) {
            this.de = q;
          }, N.prototype.setFocusPoint = function (q) {
            switch (q) {
              case 1:
                this.focusPoint = {}, this.focusPoint.type = 1, this.focusPoint.width = this.viewSize.width / 2, this.focusPoint.height = this.viewSize.height / 2;
                break;
              case 2:
                this.focusPoint = {}, this.focusPoint.type = 2, this.focusPoint.width = this.viewSize.width, this.focusPoint.height = this.viewSize.height;
                break;
              default:
                this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0;
            }
          }, N.prototype.getFocusPoint = function () {
            return this.focusPoint || (this.focusPoint = {}, this.focusPoint.type = 0, this.focusPoint.width = 0, this.focusPoint.height = 0), this.focusPoint;
          }, N.prototype.setLayoutSetting = function (q) {
            this.contentLayout = this.content.getComponent(cc.Layout), this.layoutSetting = this.getLayoutSetting(), q.spacingLeft && (this.layoutSetting.spacingLeft = q.spacingLeft), q.spacingRight && (this.layoutSetting.spacingRight = q.spacingRight), q.spacingTop && (this.layoutSetting.spacingTop = q.spacingTop), q.spacingBottom && (this.layoutSetting.spacingBottom = q.spacingBottom), q.spacingX && (this.layoutSetting.spacingX = q.spacingX), q.spacingY && (this.layoutSetting.spacingY = q.spacingY), this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.spacingX = this.layoutSetting.spacingX, this.contentLayout.spacingY = this.layoutSetting.spacingY;
          }, N.prototype.getLayoutSetting = function () {
            var q = {};
            q.spacingLeft = 0;
            q.spacingRight = 0;
            q.spacingTop = 0;
            q.spacingBottom = 0;
            q.spacingX = 0;
            q.spacingY = 0;
            return this.layoutSetting ? this.layoutSetting : this.layoutSetting = q;
          }, N.prototype.getVisibleItems = function () {
            var q = [],
              f = this.content.children;
            if (f.length) for (var g = 0; g < f.length; g++) q.push(f[g]);
            return q;
          }, N.prototype.setDataSource = function (q) {
            var f = this.node,
              g = f.width,
              l = f.height;
            this.ve(g, l), q !== this.Ai && (this.Ai = q);
          }, N.prototype._e = function () {
            {
              return this.Ai;
            }
          }, N.prototype.me = function (q) {
            this.be = q;
          }, N.prototype.pe = function () {
            {
              return this.be || (this.be = 0), this.be;
            }
          }, N.prototype.Ti = function () {
            var q = this.node,
              f = q.width,
              g = q.height;
            this.ve(f, g), this.Se(this.Oi, this.currentIndex);
          }, N.prototype.ve = function (q, f) {
            {
              var g = {};
              g.width = q;
              g.height = f;
              this.viewSize = g, this.content.parent.setContentSize(q, f);
            }
          }, N.prototype.ge = function () {
            return this.viewSize;
          }, N.prototype.register = function (q, f, g) {
            {
              if (this.nodePools[q]) ;else if (f) {
                var l = new cc.NodePool(g);
                this.templates[q] = f, this.nodePools[q] = l;
              }
            }
          }, N.prototype.reloadData = function () {
            this.setSnapDone(true);
            var q = this.Ai,
              f = q.getCount(this, this.Oi),
              g = this.be;
            g !== f ? (this.setMasterControl(true), f < g ? this.Ce(f) : (this.me(f), this.reloadCurrentData(), this.Me())) : this.reloadCurrentData(), q.didReloadData && q.didReloadData();
          }, N.prototype.insertItem = function () {}, N.prototype.removeItem = function () {}, N.prototype.Se = function (q, f, g) {
            {
              if (undefined === q && (q = this.Oi), this.Hi(), this.ye(), this.setMasterControl(true), this.content.y = 0, this.content.x = 0, this.content.setContentSize(0, 0), this.contentLayout.paddingTop = this.layoutSetting.spacingTop, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.paddingLeft = this.layoutSetting.spacingLeft, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.content.children.length) for (var l = this.content.children.length - 1; l >= 0; l--) {
                var K = this.content.children[l];
                this.we(K);
              }
              this.init(q, f, false, g);
            }
          }, N.prototype.reset = function (q, f) {
            undefined === q && (q = this.Oi), this.Se(q, f, this.resetFinish);
          }, N.prototype.init = function (q, f, g, l) {
            {
              var K = {};
              K.spacingLeft = 0;
              K.spacingRight = 0;
              K.spacingTop = 0;
              K.spacingBottom = 0;
              K.spacingX = 0;
              K.spacingY = 0;
              undefined === f && (f = 0), undefined === g && (g = true), this.layoutSetting || this.setLayoutSetting(K);
              var O = this.Ai;
              this.isDynamicSize = !!O.getCellSize, this.isPreCalculateSize = !(!this.constCellSize && !this.isDynamicSize), this.isPreCalculateSize || (f = 0), this.originalElastic = this.elastic, this.currentIndex = f, this.currentTarget = f, this.requestSnap = false, this.setMasterControl(false), this.contentLayout = this.content.getComponent(cc.Layout), this.setSnapDone(true), this.snapPause = false, this.outerCellsMatrix = [], this.Oi = q, this.pauseUpdate = false, this.pullDir = null, this.prevContentY = this.content.y, this.prevContentX = -1 * this.content.x, this.Gi(), this.me(O.getCount(this, this.Oi)), this.vertical ? (this.contentLayout.startAxis = 0, this.content.width = this.viewSize.width, this.Be(0, f, this.viewSize.height, g, l)) : (this.contentLayout.startAxis = 1, this.content.height = this.viewSize.height, this.Ae(0, f, this.viewSize.width, g, l));
            }
          }, N.prototype.scrollTo = function (q, f) {
            {
              var g = this;
              if (undefined === f && (f = true), !(q >= this.be)) if (!this.isPreCalculateSize || f) {
                {
                  if (this.vertical) {
                    var l = this.He(q);
                    if (null !== l) {
                      var K = this.getFocusPoint();
                      this.currentIndex = q, 1 === K.type ? this.target = this.Oe(l) - this.outerCellsMatrix[l].height - K.height + this.outerCellsMatrix[l][0].height / 2 : this.target = this.Oe(l) - this.outerCellsMatrix[l].height - this.layoutSetting.spacingTop;
                      var O = this.content.height - this.viewSize.height;
                      this.target < 0 ? this.target = 0 : this.target > O && (this.target = O);
                    } else this.target = this.estimatedHeight, this.suddenStopIndex = q;
                  } else {
                    var x = this.He(q);
                    if (null !== x) {
                      {
                        K = this.getFocusPoint(), this.currentIndex = q, 1 === K.type ? this.target = this.Ie(x) - this.outerCellsMatrix[x].width - K.width + this.outerCellsMatrix[x][0].width / 2 : this.target = this.Ie(x) - this.outerCellsMatrix[x].width - this.layoutSetting.spacingLeft;
                        var p = this.content.width - this.viewSize.width;
                        this.target < 0 ? this.target = 0 : this.target > p && (this.target = p);
                      }
                    } else this.target = this.estimatedWidth, this.suddenStopIndex = q;
                  }
                  this.lerpSpeed = 10, this.setSnapDone(false);
                }
              } else this.Se(this.Oi, q, function () {
                {
                  g.snapFinish && g.snapFinish(q);
                }
              });
            }
          }, N.prototype.stopUpdate = function () {
            {
              this.setMasterControl(true);
            }
          }, N.prototype.resumeUpdate = function () {
            this.pauseUpdate && (this.setMasterControl(false), this.pullDir = null, this.pauseUpdate = false);
          }, N.prototype.setMasterControl = function (q) {
            {
              this.Te = q;
            }
          }, N.prototype.Ee = function () {
            this.pauseUpdate || this.Te || this.content.children.length && (this.vertical ? this.content.y !== this.prevContentY && this.Ne() : -1 * this.content.x !== this.prevContentX && this.Ge());
          }, N.prototype.Oe = function (q) {
            if (this.outerCellsMatrix[q] && this.outerCellsMatrix[q].totalHeight) return this.outerCellsMatrix[q].totalHeight;
            for (var f = this.layoutSetting.spacingTop, g = 0; g <= q; g++) {
              {
                if (f += this.outerCellsMatrix[g].height, g === q) return this.outerCellsMatrix[q].totalHeight = f, f;
                f += this.layoutSetting.spacingY;
              }
            }
          }, N.prototype.Ie = function (q) {
            if (this.outerCellsMatrix[q] && this.outerCellsMatrix[q].totalWidth) return this.outerCellsMatrix[q].totalWidth;
            for (var f = this.layoutSetting.spacingLeft, g = 0; g <= q; g++) {
              if (f += this.outerCellsMatrix[g].width, g === q) return this.outerCellsMatrix[q].totalWidth = f, f;
              f += this.layoutSetting.spacingX;
            }
          }, N.prototype.ke = function () {
            if (this.vertical) {
              if (this.Re() < this.je) return 0;
              if (this.Le() > this.Pe) {
                {
                  var q = this.content.children.length - 1;
                  return this.content.children[q].row;
                }
              }
              for (var f = 0, g = 0, l = this.content.height, K = null, O = 0; O < this.content.children.length; O++) if (K != this.content.children[O].row) {
                {
                  K = this.content.children[O].row;
                  var x = this.Oe(K) - this.outerCellsMatrix[K].height - this.layoutSetting.spacingTop;
                  if ((g = Math.abs(x - this.content.y)) >= l) return f;
                  f = K, l = g;
                }
              }
              return f;
            }
            if (this.De() > this.Ue) return 0;
            if (this.xe() < this.Fe) return q = this.content.children.length - 1, this.content.children[q].col;
            var p = 0,
              b = 0,
              L = (l = this.content.width, null);
            for (O = 0; O < this.content.children.length; O++) if (L != this.content.children[O].col) {
              L = this.content.children[O].col;
              var H = this.Ie(L) - this.outerCellsMatrix[L].width - this.layoutSetting.spacingLeft;
              if ((b = Math.abs(H - -1 * this.content.x)) >= l) return p;
              p = L, l = b;
            }
            return p;
          }, N.prototype.We = function () {
            {
              if (this.elastic = this.originalElastic, !this.Te && this.requestSnap && this.content.children.length) {
                {
                  if (this.vertical) {
                    var q = this.getFocusPoint();
                    this.requestSnap = false;
                    var f = this.ke();
                    this.currentTarget = f, this.currentIndex = this.outerCellsMatrix[f][0] ? this.outerCellsMatrix[f][0].zIndex : null, 1 === q.type ? this.target = this.Oe(f) - this.outerCellsMatrix[f].height - q.height + this.outerCellsMatrix[f][0].height / 2 : this.target = this.Oe(f) - this.outerCellsMatrix[f].height - this.layoutSetting.spacingTop;
                    var g = this.content.height - this.viewSize.height;
                    g < 0 && (g = 0), this.target <= 0 ? this.target = 0 : this.target >= g && (this.target = g);
                  } else {
                    q = this.getFocusPoint(), this.requestSnap = false;
                    var l = this.ke();
                    this.currentTarget = l, this.currentIndex = this.outerCellsMatrix[l][0] ? this.outerCellsMatrix[l][0].zIndex : null, 1 === q.type ? this.target = this.Ie(l) - this.outerCellsMatrix[l].width - q.width + this.outerCellsMatrix[l][0].width / 2 : this.target = this.Ie(l) - this.outerCellsMatrix[l].width - this.layoutSetting.spacingLeft;
                    var K = this.content.width - this.viewSize.width;
                    K < 0 && (K = 0), this.target <= 0 ? this.target = 0 : this.target >= K && (this.target = K);
                  }
                  this.lerpSpeed = 5, this.setSnapDone(false);
                }
              }
            }
          }, N.prototype.Ne = function () {
            var q = this.content.y,
              f = this.content.children[0],
              g = this.content.children[this.content.children.length - 1],
              K = f.row,
              O = g.row,
              x = this.Oe(O) - this.viewSize.height;
            if (this.prevContentY > q) {
              var p = f.zIndex,
                b = q - this.contentLayout.paddingTop + this.layoutSetting.spacingY;
              if (0 > b && this.Je(K - 1, p - 1, b), O > 0 && this.outerCellsMatrix[O - 1] && this.outerCellsMatrix[O - 1][0]) {
                {
                  var L = q - x + this.layoutSetting.spacingY + this.outerCellsMatrix[O].height;
                  L < 0 && this.Ve(O, L, x);
                }
              }
            } else {
              var H = g.zIndex,
                U = q - x;
              if (0 < U && this.ze(O + 1, 0, H + 1, U), K < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[K + 1] && this.outerCellsMatrix[K + 1][0]) {
                {
                  var k = q - this.contentLayout.paddingTop - this.outerCellsMatrix[K].height;
                  0 < k && this.Ke(K, k);
                }
              }
            }
            this.prevContentY = q;
          }, N.prototype.Ge = function () {
            var q = -1 * this.content.x,
              f = this.content.children[0],
              g = this.content.children[this.content.children.length - 1],
              K = f.col,
              O = g.col,
              x = this.Ie(O) - this.viewSize.width;
            if (this.prevContentX > q) {
              var p = f.zIndex,
                b = q - this.contentLayout.paddingLeft + this.layoutSetting.spacingX;
              if (0 > b && this.qe(K - 1, p - 1, b), O > 0 && this.outerCellsMatrix[O - 1] && this.outerCellsMatrix[O - 1][0]) {
                var L = q - x + this.layoutSetting.spacingX + this.outerCellsMatrix[O].width;
                L < 0 && this.Qe(O, L, x);
              }
            } else {
              var H = g.zIndex,
                U = q - x;
              if (0 < U && this.Ye(0, O + 1, H + 1, U), K < this.outerCellsMatrix.length - 1 && this.outerCellsMatrix[K + 1] && this.outerCellsMatrix[K + 1][0]) {
                var k = q - this.contentLayout.paddingLeft - this.outerCellsMatrix[K].width;
                0 < k && this.Ze(K, k);
              }
            }
            this.prevContentX = q;
          }, N.prototype.Xe = function () {
            for (var q, f, g = this.layoutSetting, l = g.spacingX, K = g.spacingLeft + g.spacingRight, O = 0, x = 0, p = 0, b = this.be; O < b;) {
              {
                if (this.isDynamicSize) {
                  var L = this.Ai.getCellSize(O);
                  q = L.width + l, f = L.height;
                } else q = this.constCellSize.width + l, f = this.constCellSize.height;
                this.outerCellsMatrix[x] || (this.outerCellsMatrix[x] = {}, this.outerCellsMatrix[x][p] = null, this.outerCellsMatrix[x].itemCount = 0, this.outerCellsMatrix[x].height = 0, this.outerCellsMatrix[x].freeWidth = this.viewSize.width - K, this.freeWidth = this.viewSize.width - K), this.freeWidth - q >= 0 ? (this.outerCellsMatrix[x].height = Math.max(f, this.outerCellsMatrix[x].height), this.outerCellsMatrix[x][p] = null, this.freeWidth -= q, p += 1, this.outerCellsMatrix[x].itemCount = p, O++) : this.freeWidth + l - q >= 0 ? (this.outerCellsMatrix[x].height = Math.max(f, this.outerCellsMatrix[x].height), this.outerCellsMatrix[x][p] = null, this.freeWidth -= q, p += 1, this.outerCellsMatrix[x].itemCount = p, O++) : (x += 1, p = 0);
              }
            }
            this.freeWidth = undefined, this.$e();
          }, N.prototype.tn = function () {
            {
              for (var q, f, g = this.layoutSetting, l = g.spacingY, K = g.spacingTop + g.spacingBottom, O = 0, x = 0, p = 0, b = this.be; O < b;) {
                if (this.isDynamicSize) {
                  {
                    var L = this.Ai.getCellSize(O);
                    q = L.width, f = L.height + l;
                  }
                } else q = this.constCellSize.width, f = this.constCellSize.height + l;
                this.outerCellsMatrix[p] || (this.outerCellsMatrix[p] = {}, this.outerCellsMatrix[p][x] = {}, this.outerCellsMatrix[p].itemCount = 0, this.outerCellsMatrix[p].width = 0, this.outerCellsMatrix[p].freeHeight = this.viewSize.height - K, this.freeHeight = this.viewSize.height - K), this.freeHeight - f >= 0 ? (this.outerCellsMatrix[p].width = Math.max(q, this.outerCellsMatrix[p].width), this.outerCellsMatrix[p][x] = null, this.freeHeight -= f, x += 1, this.outerCellsMatrix[p].itemCount = x, O++) : this.freeHeight + this.layoutSetting.spacingY - f >= 0 ? (this.outerCellsMatrix[p].width = Math.max(q, this.outerCellsMatrix[p].width), this.outerCellsMatrix[p][x] = null, this.freeHeight -= f, x += 1, this.outerCellsMatrix[p].itemCount = x, O++) : (p += 1, x = 0);
              }
              this.freeHeight = undefined, this.in();
            }
          }, N.prototype.en = function (q, g, K) {
            this.lastContentY = this.content.y;
            for (var O, x, p = this.layoutSetting, b = p.spacingX, L = p.spacingY, H = p.spacingLeft + p.spacingRight, k = 0, Y = this.be, y = 0; g < Y;) {
              if (this.isDynamicSize) {
                {
                  var z = this.Ai.getCellSize(g);
                  O = z.width + b, x = z.height;
                }
              } else O = this.constCellSize.width + b, x = this.constCellSize.height;
              if (!(K > 0)) return;
              if (this.outerCellsMatrix[U] || (this.outerCellsMatrix[U] = {}, this.outerCellsMatrix[U][k] = null, this.outerCellsMatrix[U].itemCount = 0, this.outerCellsMatrix[U].height = 0, this.outerCellsMatrix[U].freeWidth = this.viewSize.width - H), this.outerCellsMatrix[U].freeWidth - O >= 0) {
                this.outerCellsMatrix[U].height = Math.max(x, this.outerCellsMatrix[U].height);
                var S = this.Ai.getItem(this, g, this.Oi);
                this.nn(S, U, k, g), this.outerCellsMatrix[U].freeWidth -= O, k += 1, this.outerCellsMatrix[U].itemCount = k, g++;
              } else if (this.outerCellsMatrix[U].freeWidth + b - O >= 0) this.outerCellsMatrix[U].height = Math.max(x, this.outerCellsMatrix[U].height), S = this.Ai.getItem(this, g, this.Oi), this.nn(S, U, k, g), this.outerCellsMatrix[U].freeWidth -= O, k += 1, this.outerCellsMatrix[U].itemCount = k, g++;else {
                var P = (K -= y) - (this.outerCellsMatrix[U].height + L);
                P > 0 ? K = P : P + L > 0 ? (K = P + L, y = L) : K = P, U += 1, k = 0;
              }
            }
          }, N.prototype.cn = function (q, g, K) {
            this.lastContentX = -1 * this.content.x;
            for (var O, x, p = this.layoutSetting, b = p.spacingX, L = p.spacingY, H = p.spacingTop + p.spacingBottom, U = 0, Y = this.be, y = 0; g < Y;) {
              if (this.isDynamicSize) {
                var z = this.Ai.getCellSize(g);
                O = z.width, x = z.height + L;
              } else O = this.constCellSize.width, x = this.constCellSize.height + L;
              if (!(K > 0)) return void this.setMasterControl(false);
              if (this.outerCellsMatrix[k] || (this.outerCellsMatrix[k] = {}, this.outerCellsMatrix[k][U] = {}, this.outerCellsMatrix[k].itemCount = 0, this.outerCellsMatrix[k].width = 0, this.outerCellsMatrix[k].freeHeight = this.viewSize.height - H), this.outerCellsMatrix[k].freeHeight - x >= 0) {
                this.outerCellsMatrix[k].width = Math.max(O, this.outerCellsMatrix[k].width);
                var S = this.Ai.getItem(this, g, this.Oi);
                this.nn(S, U, k, g), this.outerCellsMatrix[k].freeHeight -= x, U += 1, this.outerCellsMatrix[k].itemCount = U, g++;
              } else if (this.outerCellsMatrix[k].freeHeight + L - x >= 0) this.outerCellsMatrix[k].width = Math.max(O, this.outerCellsMatrix[k].width), S = this.Ai.getItem(this, g, this.Oi), this.nn(S, U, k, g), this.outerCellsMatrix[k].freeHeight -= x, U += 1, this.outerCellsMatrix[k].itemCount = U, g++;else {
                var P = (K -= y) - (this.outerCellsMatrix[k].width + b);
                P > 0 ? K = P : P + b > 0 ? (K = P + b, y = b) : K = P, k += 1, U = 0;
              }
            }
            this.setMasterControl(false);
          }, N.prototype.hn = function (q, f, g) {
            var l = this.He(q),
              K = this.rn(l),
              O = this.Oe(l) - this.outerCellsMatrix[l].height;
            this.Re() < this.je ? this.target = 0 : this.Le() > this.Pe ? this.target = this.content.height + this.Pe : this.target = O - this.layoutSetting.spacingTop, this.content.y = this.target, this.contentLayout.paddingTop = O, this.contentLayout.paddingBottom = this.layoutSetting.spacingBottom, this.contentLayout.updateLayout(), this.en(l, K, f);
            var x = this.content.y - O;
            x < 0 ? this.Je(l - 1, K - 1, x, g) : g && g(), this.setMasterControl(false);
          }, N.prototype.an = function (q, f, g) {
            var l = this.He(q),
              K = this.rn(l),
              O = -1 * (this.Ie(l) - this.outerCellsMatrix[l].width);
            this.De() > this.Ue ? this.target = 0 : this.xe() < this.Fe ? this.target = -1 * (this.content.width - this.Fe) : this.target = O + this.layoutSetting.spacingLeft, this.content.x = this.target, this.contentLayout.paddingLeft = -O, this.contentLayout.paddingRight = this.layoutSetting.spacingRight, this.contentLayout.updateLayout(), this.cn(l, K, f);
            var x = -1 * this.content.x + O;
            x < 0 ? this.qe(l - 1, K - 1, x, g) : g && g(), this.setMasterControl(false);
          }, N.prototype.Be = function (q, g, K, O, x) {
            if (undefined === O && (O = true), this.be) {
              if (this.isPreCalculateSize && !O) this.Xe(), this.hn(g, K, x);else {
                this.lastContentY = this.content.y;
                for (var p = this.layoutSetting, b = p.spacingX, L = p.spacingY, H = p.spacingLeft + p.spacingRight, k = 0, Y = undefined, y = undefined, z = undefined, S = this.be, P = 0; g < S;) {
                  {
                    if (y = (Y = this.Ai.getItem(this, g, this.Oi)).width + b, z = Y.height, !(K > 0)) return this.$e(), this.ki(Y), void this.setMasterControl(false);
                    if (this.outerCellsMatrix[U] || (this.outerCellsMatrix[U] = {}, this.outerCellsMatrix[U][k] = null, this.outerCellsMatrix[U].itemCount = 0, this.outerCellsMatrix[U].height = 0, this.outerCellsMatrix[U].freeWidth = this.viewSize.width - H), this.outerCellsMatrix[U].freeWidth - y >= 0) this.outerCellsMatrix[U].height = Math.max(z, this.outerCellsMatrix[U].height), this.nn(Y, U, k, g), this.outerCellsMatrix[U].freeWidth -= y, k += 1, this.outerCellsMatrix[U].itemCount = k, g++, this.$e();else if (this.outerCellsMatrix[U].freeWidth + b - y >= 0) this.outerCellsMatrix[U].height = Math.max(z, this.outerCellsMatrix[U].height), this.nn(Y, U, k, g), this.outerCellsMatrix[U].freeWidth -= y, k += 1, this.outerCellsMatrix[U].itemCount = k, g++, this.$e();else {
                      {
                        var G = (K -= P) - (this.outerCellsMatrix[U].height + L);
                        G > 0 ? K = G : G + L > 0 ? (K = G + L, P = L) : K = G, this.$e(), this.ki(Y), U += 1, k = 0;
                      }
                    }
                  }
                }
                this.setMasterControl(false);
              }
            } else x && x();
          }, N.prototype.Ae = function (q, g, K, O, x) {
            if (this.be) {
              if (this.isPreCalculateSize && !O) this.tn(), this.an(g, K, x);else {
                this.lastContentX = -1 * this.content.x;
                for (var p = this.layoutSetting, b = p.spacingX, L = p.spacingY, H = p.spacingTop + p.spacingBottom, U = 0, Y = undefined, y = undefined, z = undefined, S = this.be, P = 0; g < S;) {
                  if (y = (Y = this.Ai.getItem(this, g, this.Oi)).width, z = Y.height + L, !(K > 0)) return this.in(), this.ki(Y), void this.setMasterControl(false);
                  if (this.outerCellsMatrix[k] || (this.outerCellsMatrix[k] = {}, this.outerCellsMatrix[k][U] = {}, this.outerCellsMatrix[k].itemCount = 0, this.outerCellsMatrix[k].width = 0, this.outerCellsMatrix[k].freeHeight = this.viewSize.height - H), this.outerCellsMatrix[k].freeHeight - z >= 0) this.outerCellsMatrix[k].width = Math.max(y, this.outerCellsMatrix[k].width), this.nn(Y, U, k, g), this.outerCellsMatrix[k].freeHeight -= z, U += 1, this.outerCellsMatrix[k].itemCount = U, g++, this.in();else if (this.outerCellsMatrix[k].freeHeight + L - z >= 0) this.outerCellsMatrix[k].width = Math.max(y, this.outerCellsMatrix[k].width), this.nn(Y, U, k, g), this.outerCellsMatrix[k].freeHeight -= z, U += 1, this.outerCellsMatrix[k].itemCount = U, g++, this.in();else {
                    var G = (K -= P) - (this.outerCellsMatrix[k].width + b);
                    G > 0 ? K = G : G + b > 0 ? (K = G + b, P = b) : K = G, this.in(), this.ki(Y), k += 1, U = 0;
                  }
                }
                this.setMasterControl(false);
              }
            } else x && x();
          }, N.prototype.Ke = function (q, f) {
            for (var g = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, l = this.outerCellsMatrix[q].itemCount - 1; 0 < f;) if (l >= 0) this.oe && this.oe(), this.we(this.outerCellsMatrix[q][l]), l--;else {
              if (this.contentLayout.paddingTop += this.outerCellsMatrix[q].height + this.layoutSetting.spacingY, this.outerCellsMatrix[q].freeWidth = this.viewSize.width - g, (q += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[q][0]) return;
              l = this.outerCellsMatrix[q].itemCount - 1, f = this.content.y - this.contentLayout.paddingTop - this.outerCellsMatrix[q].height;
            }
          }, N.prototype.Ze = function (q, f) {
            for (var g = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, l = this.outerCellsMatrix[q].itemCount - 1; 0 < f;) if (l >= 0) this.we(this.outerCellsMatrix[q][l]), l--;else {
              if (this.contentLayout.paddingLeft += this.outerCellsMatrix[q].width + this.layoutSetting.spacingX, this.outerCellsMatrix[q].freeHeight = this.viewSize.height - g, (q += 1) >= this.outerCellsMatrix.length - 1 || !this.outerCellsMatrix[q][0]) return;
              l = this.outerCellsMatrix[q].itemCount - 1, f = -1 * this.content.x - this.contentLayout.paddingLeft - this.outerCellsMatrix[q].width;
            }
          }, N.prototype.Ve = function (q, f, g) {
            for (var l = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, K = this.outerCellsMatrix[q].itemCount - 1; f < 0;) if (K >= 0) this.oe && this.oe(), this.we(this.outerCellsMatrix[q][K]), K--;else {
              {
                if (this.outerCellsMatrix[q].freeWidth = this.viewSize.width - l, (q -= 1) <= 0 || !this.outerCellsMatrix[q][0]) return;
                K = this.outerCellsMatrix[q].itemCount - 1, g = this.Oe(q) - this.viewSize.height, f = this.content.y - g + this.layoutSetting.spacingY + this.outerCellsMatrix[q].height;
              }
            }
          }, N.prototype.Qe = function (q, f, g) {
            for (var l = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, K = this.outerCellsMatrix[q].itemCount - 1; f < 0;) if (K >= 0) this.oe && this.oe(), this.we(this.outerCellsMatrix[q][K]), K--;else {
              if (this.outerCellsMatrix[q].freeHeight = this.viewSize.height - l, (q -= 1) <= 0 || !this.outerCellsMatrix[q][0]) return;
              K = this.outerCellsMatrix[q].itemCount - 1, g = this.Ie(q) - this.viewSize.width, f = -1 * this.content.x - g + this.layoutSetting.spacingX + this.outerCellsMatrix[q].width;
            }
          }, N.prototype.removeUselessItems = function (q, f) {
            if (this.me(q), this.vertical) for (var g = this.content.children.length - 1; g >= 0; g--) {
              {
                if (!((K = this.content.children[g]).zIndex > q - 1)) {
                  {
                    this.reloadCurrentData();
                    var l = K.col + 1;
                    this.outerCellsMatrix[K.row].itemCount = l, this.outerCellsMatrix.splice(K.row + 1, this.outerCellsMatrix.length - 1), this.$e(), this.setMasterControl(false), f && f();
                    break;
                  }
                }
                this.outerCellsMatrix[K.row].freeWidth += this.outerCellsMatrix[K.row][K.col].width + this.layoutSetting.spacingX, this.we(K), 0 === g && (this.$e(), this.setMasterControl(false), f && f());
              }
            } else for (g = this.content.children.length - 1; g >= 0; g--) {
              var K;
              if (!((K = this.content.children[g]).zIndex >= q - 1)) {
                {
                  this.reloadCurrentData(), l = K.row + 1, this.outerCellsMatrix[K.col].itemCount = l, this.outerCellsMatrix.splice(K.col + 1, this.outerCellsMatrix.length - 1), this.in(), this.setMasterControl(false), f && f();
                  break;
                }
              }
              this.outerCellsMatrix[K.col].freeHeight += this.outerCellsMatrix[K.col][K.row].height + this.layoutSetting.spacingY, this.we(K), 0 === g && (this.$e(), this.setMasterControl(false), f && f());
            }
          }, N.prototype.ze = function (q, g, K, O) {
            {
              this.lastContentY = this.content.y;
              for (var x, p, b, L = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, k = this.be; K < k;) {
                if (p = (x = this.Ai.getItem(this, K, this.Oi)).width + this.layoutSetting.spacingX, b = x.height, !(0 < O)) return this.$e(), void this.ki(x);
                if (this.outerCellsMatrix[H] || (this.outerCellsMatrix[H] = {}, this.outerCellsMatrix[H][U] = {}, this.outerCellsMatrix[H].itemCount = 0, this.outerCellsMatrix[H].height = 0, this.outerCellsMatrix[H].freeWidth = this.viewSize.width - L), this.outerCellsMatrix[H].freeWidth - p >= 0) this.ne && this.ne(), this.outerCellsMatrix[H].height = Math.max(b, this.outerCellsMatrix[H].height), this.nn(x, H, U, K), this.outerCellsMatrix[H].freeWidth -= p, U += 1, this.outerCellsMatrix[H].itemCount = U, ++K >= k && this.$e();else if (this.outerCellsMatrix[H].freeWidth + this.layoutSetting.spacingX - p >= 0) this.ne && this.ne(), this.outerCellsMatrix[H].height = Math.max(b, this.outerCellsMatrix[H].height), this.nn(x, H, U, K), this.outerCellsMatrix[H].freeWidth -= p, U += 1, this.outerCellsMatrix[H].itemCount = U, K++, this.$e();else {
                  var Y = this.content.children[this.content.children.length - 1].row,
                    y = this.Oe(Y) - this.viewSize.height;
                  O = this.content.y - y, this.$e(), this.ki(x), H += 1, U = 0;
                }
              }
            }
          }, N.prototype.Ye = function (q, g, K, O) {
            this.lastContentY = -1 * this.content.x;
            for (var x, p, b, L = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, k = this.be; K < k;) {
              if (p = (x = this.Ai.getItem(this, K, this.Oi)).width, b = x.height + this.layoutSetting.spacingY, !(0 < O)) return this.in(), void this.ki(x);
              if (this.outerCellsMatrix[U] || (this.outerCellsMatrix[U] = {}, this.outerCellsMatrix[U][H] = {}, this.outerCellsMatrix[U].itemCount = 0, this.outerCellsMatrix[U].width = 0, this.outerCellsMatrix[U].freeHeight = this.viewSize.height - L), this.outerCellsMatrix[U].freeHeight - b >= 0) this.ne && this.ne(), this.outerCellsMatrix[U].width = Math.max(p, this.outerCellsMatrix[U].width), this.nn(x, H, U, K), this.outerCellsMatrix[U].freeHeight -= b, H += 1, this.outerCellsMatrix[U].itemCount = H, ++K >= k && this.in();else if (this.outerCellsMatrix[U].freeHeight + this.layoutSetting.spacingY - b >= 0) this.ne && this.ne(), this.outerCellsMatrix[U].width = Math.max(p, this.outerCellsMatrix[U].width), this.nn(x, H, U, K), this.outerCellsMatrix[U].freeHeight -= b, H += 1, this.outerCellsMatrix[U].itemCount = H, K++, this.in();else {
                var Y = this.content.children[this.content.children.length - 1].col,
                  y = this.Ie(Y) - this.viewSize.width;
                O = -1 * this.content.x - y, this.in(), this.ki(x), U += 1, H = 0;
              }
            }
          }, N.prototype.Je = function (q, f, g, l) {
            if (!(q < 0)) {
              for (var K, O, x, b = this.outerCellsMatrix[p].itemCount - 1; f >= 0;) {
                {
                  if (O = (K = this.Ai.getItem(this, f, this.Oi)).width + this.layoutSetting.spacingX, x = K.height, !(0 > g)) return this.$e(), this.ki(K), void (l && l());
                  b >= 0 ? (this.ne && this.ne(), this.outerCellsMatrix[p].height = Math.max(x, this.outerCellsMatrix[p].height), this.nn(K, p, b, f), this.outerCellsMatrix[p].freeWidth -= O, 0 === f && (this.contentLayout.paddingTop -= this.outerCellsMatrix[p].height + this.layoutSetting.spacingY, g = this.content.y - this.contentLayout.paddingTop), b -= 1, f--) : (this.contentLayout.paddingTop -= this.outerCellsMatrix[p].height + this.layoutSetting.spacingY, g = this.content.y - this.contentLayout.paddingTop, this.$e(), this.ki(K), p -= 1, b = this.outerCellsMatrix[p].itemCount - 1);
                }
              }
              l && l();
            }
          }, N.prototype.qe = function (q, f, g, l) {
            if (!(q < 0)) {
              for (var K, O, x, p = -1 * this.content.x, L = this.outerCellsMatrix[b].itemCount - 1; f >= 0;) {
                if (O = (K = this.Ai.getItem(this, f, this.Oi)).width, x = K.height + this.layoutSetting.spacingY, !(0 > g)) return this.in(), this.ki(K), void (l && l());
                L >= 0 ? (this.ne && this.ne(), this.outerCellsMatrix[b].width = Math.max(O, this.outerCellsMatrix[b].width), this.nn(K, L, b, f), this.outerCellsMatrix[b].freeHeight -= x, 0 === f && (this.contentLayout.paddingLeft -= this.outerCellsMatrix[b].width + this.layoutSetting.spacingX, g = p - this.contentLayout.paddingLeft), L -= 1, f--) : (this.contentLayout.paddingLeft -= this.outerCellsMatrix[b].width + this.layoutSetting.spacingX, g = p - this.contentLayout.paddingLeft, this.in(), this.ki(K), b -= 1, L = this.outerCellsMatrix[b].itemCount - 1);
              }
              l && l();
            }
          }, N.prototype.$e = function () {
            for (var q = this.layoutSetting.spacingTop + this.layoutSetting.spacingBottom, f = 0; f < this.outerCellsMatrix.length; f++) q += this.outerCellsMatrix[f].height, f !== this.outerCellsMatrix.length - 1 ? q += this.layoutSetting.spacingY : this.content.height !== q && (this.content.height = q);
          }, N.prototype.in = function () {
            for (var q = this.layoutSetting.spacingLeft + this.layoutSetting.spacingRight, f = 0; f < this.outerCellsMatrix.length; f++) q += this.outerCellsMatrix[f].width, f !== this.outerCellsMatrix.length - 1 ? q += this.layoutSetting.spacingX : this.content.width !== q && (this.content.width = q);
          }, N.prototype.nn = function (q, f, g, l) {
            {
              var K = this.un();
              this.vertical ? this.outerCellsMatrix[f][g] = K : this.outerCellsMatrix[g][f] = K, this.content.addChild(K), K.addChild(q), K.row = f, K.col = g, K.zIndex = l, K.width = q.width, K.height = q.height, this.content.sortAllChildren();
            }
          }, N.prototype.dequeueReusableItem = function (q) {
            var f,
              g = this.nodePools[q];
            if (g) {
              {
                if (!(f = g.get())) {
                  var l = this.templates[q];
                  f = cc.instantiate(l);
                }
                f.lv_type = q;
              }
            }
            return f;
          }, N.prototype.ki = function (q) {
            var f,
              g = q.lv_type;
            g && (f = this.nodePools[g]), f && f.put(q);
          }, N.prototype.Ce = function (q) {
            if (this.vertical) {
              var f = this.He(this.currentIndex);
              this.currentIndex <= q - 1 ? this.removeUselessItems(q) : null !== f ? (this.isReducingData = true, this.newDataCount = q, this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(q);
            } else {
              var g = this.He(this.currentIndex);
              this.currentIndex < q - 1 ? this.removeUselessItems(q) : null !== g ? (this.isReducingData = true, this.stopAutoScroll(), this.setMasterControl(true), this.scrollTo(0)) : this.removeUselessItems(q);
            }
          }, N.prototype.Me = function () {
            if (this.vertical) {
              if (!this.content.children.length) return void this.Be(0, 0, this.viewSize.height);
              var q = (b = this.content.children[this.content.children.length - 1]).row,
                g = q - 1;
              g < 0 && (g = 0);
              var K = this.Oe(g) - this.viewSize.height,
                O = b.zIndex,
                x = this.content.y - K,
                p = (U = this.Ai.getItem(this, O + 1, this.Oi)).width + this.layoutSetting.spacingX;
              this.ki(U), this.outerCellsMatrix[q].freeWidth - p >= 0 ? this.ze(q, this.outerCellsMatrix[q].itemCount, O + 1, x) : this.outerCellsMatrix[q].freeWidth + this.layoutSetting.spacingX - p >= 0 && this.ze(q, this.outerCellsMatrix[q].itemCount, O + 1, x), this.setMasterControl(false);
            } else {
              {
                if (!this.content.children.length) return void this.Ae(0, 0, this.viewSize.width);
                var b,
                  L = (b = this.content.children[this.content.children.length - 1]).col,
                  H = L - 1;
                H < 0 && (H = 0), K = this.Ie(H) - this.viewSize.width;
                var U,
                  k = b.zIndex,
                  Y = -1 * this.content.x - K,
                  y = (U = this.Ai.getItem(this, k + 1, this.Oi)).height + this.layoutSetting.spacingY;
                this.ki(U), this.outerCellsMatrix[L].freeHeight - y >= 0 ? this.Ye(this.outerCellsMatrix[k].itemCount, L, k + 1, Y) : this.outerCellsMatrix[L].freeWidth + this.layoutSetting.spacingX - y >= 0 && this.Ye(this.outerCellsMatrix[L].itemCount, L, k + 1, Y), this.setMasterControl(false);
              }
            }
          }, N.prototype.reloadCurrentData = function (q) {
            {
              if (this.content.children.length) for (var f = 0; f < this.content.children.length; f++) {
                this.ki(this.content.children[f].children[0]);
                var g = this.Ai.getItem(this, this.content.children[f].zIndex, this.Oi);
                this.content.children[f].addChild(g), this.content.sortAllChildren();
              }
              q && q();
            }
          }, N.prototype.we = function (q) {
            null !== f && null !== f.row && null !== f.col && (this.vertical ? this.outerCellsMatrix[f.row][f.col] = null : this.outerCellsMatrix[f.col][f.row] = null, f.children.length && this.ki(f.children[0]), this.u.put(f), this.content.sortAllChildren());
          }, N.prototype.un = function () {
            {
              return this.u ? this.u.size() ? this.u.get() : new cc.Node() : (this.u = new cc.NodePool(), new cc.Node());
            }
          }, N.prototype.Pi = function (q, f, g, l, K) {
            if (undefined === l && (l = 1), Z(cc.v2(q, 0), cc.v2(f, 0)) <= 1) return this.ln(K), f;
            this.Xi("scrolling");
            var O = q + (g *= l) * (f - q);
            return q >= f ? O <= f && (this.ln(K), O = f) : O >= f && (this.ln(K), O = f), O;
          }, N.prototype.ln = function (q) {
            var f = this;
            if (this.isReducingData) this.isReducingData = false, this.removeUselessItems(this.newDataCount, function () {
              if (f.setMasterControl(false), f.setSnapDone(true), f.stopAutoScroll(), f.Xi("scroll-ended"), null === f.currentIndex) {
                {
                  var l = f.ke();
                  f.currentIndex = f.outerCellsMatrix[l][0].zIndex;
                }
              }
              f.snapFinish && f.snapFinish(f.currentIndex), q && q();
            });else {
              if (this.setMasterControl(false), this.setSnapDone(true), this.stopAutoScroll(), this.Xi("scroll-ended"), null === this.currentIndex) {
                {
                  var g = this.ke();
                  this.currentIndex = this.outerCellsMatrix[g][0].zIndex;
                }
              }
              this.snapFinish && this.snapFinish(this.currentIndex), q && q();
            }
          }, N.prototype.rn = function (q) {
            for (var f = 0, g = 0; g <= q; g++) {
              if (q === g) return f;
              f += this.outerCellsMatrix[g].itemCount;
            }
          }, N.prototype.He = function (q) {
            for (var f = this.outerCellsMatrix.length - 1, g = 0; g <= f; g++) {
              if (!((q -= this.outerCellsMatrix[g].itemCount) >= 0)) return g;
              if (g === f) return null;
            }
          }, N.prototype.destroy = function () {
            this.Hi(), V.prototype.destroy.call(this);
          }, N.prototype.Gi = function () {
            {
              this.content.on(cc.Node.EventType.POSITION_CHANGED, this.Ee, this), this.autoSnap && this.node.on("scroll-ended", this.We, this), this.node.on(cc.Node.EventType.SIZE_CHANGED, this.Ti, this);
            }
          }, N.prototype.Hi = function () {
            this.content.off(cc.Node.EventType.POSITION_CHANGED, this.Ee, this), this.autoSnap && this.node.off("scroll-ended", this.We, this), this.node.off(cc.Node.EventType.SIZE_CHANGED, this.Ti, this);
          }, N.prototype.ye = function () {
            {
              this.je = 0, this.Pe = 0, this.Ue = 0, this.Fe = 0, this.dn = [], this.vn = [], this._n = 0, this.qi = false, this.mn = false, this.bn = false, this.pn = cc.v2(0, 0), this.Sn = cc.v2(0, 0), this.gn = 0, this.Cn = 0, this.Mn = false, this.yn = false, this.wn = cc.v2(0, 0), this.Bn = cc.v2(0, 0), this.An = true, this.ds = false, this.as = 0, this.Hn = false, this.On = 0, this.In = false, this.Tn = false;
            }
          }, N.prototype.update = function (q) {
            if (!this.pauseUpdate) {
              if (this.snapPause) return this.setSnapDone(true), void this.stopAutoScroll();
              if (!this.snapDone) {
                {
                  if (!this.content.children.length) return this.content.setPosition(cc.v2(0, 0)), void this.setSnapDone(true);
                  if (!(this.suddenStopIndex && this.content.children[this.content.children.length - 1].zIndex >= this.suddenStopIndex)) return this.stopAutoScroll(), void (this.vertical ? this.content.y = this.Pi(this.content.y, this.target, q, this.lerpSpeed) : this.content.x = -1 * this.Pi(-1 * this.content.x, this.target, q, this.lerpSpeed));
                  this.setMasterControl(true), this.scrollTo(this.suddenStopIndex), this.suddenStopIndex = null;
                }
              }
              V.prototype.update.call(this, q);
            }
          }, N.prototype.Di = function (q, f) {
            this.elastic = this.originalElastic, this.touchPos = q.touch.getLocation(), !this.Te && this.content.children.length && (this.unschedule(this.vs), this.ds = false, this.snapPause = true, this.setSnapDone(true), V.prototype.Di.call(this, q, f));
          }, N.prototype.ot = function (q, f) {
            {
              this.elastic = this.originalElastic, !this.Te && this.content.children.length && (this.vertical ? this.En(q) : this.Nn(q), this.pauseUpdate || V.prototype.ot.call(this, q, f));
            }
          }, N.prototype.Gn = function () {
            {
              if (this.es && this.es.getScrollY() > 0) this.fe && 2 === this.pullDir && this.fe(0), this.ue && this.Re() <= this.je && (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.es.getScrollY())), (q = this.beginPullPos.y - this.es.getScrollY()) > 0 && (q = 0), this.ue(Math.abs(q)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.es && this.es.getScrollY() < 0) {
                var q;
                this.ue && 1 === this.pullDir && this.ue(0), this.fe && Math.round(this.Le()) >= Math.round(this.Pe) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.be - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(0, this.es.getScrollY())), (q = this.beginPullPos.y - this.es.getScrollY()) < 0 && (q = 0), this.fe(q), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.be - 1 && (this.elastic = true);
              }
            }
          }, N.prototype.$i = function () {
            {
              if (this.es && this.es.getScrollY() > 0) this.fe && 2 === this.pullDir && this.re(0), this.ce && this.xe() <= this.Fe && (this.pauseUpdate || (this.beginPullPos = cc.v2(this.es.getScrollY(), 0)), (q = this.beginPullPos.x - this.es.getScrollY()) > 0 && (q = 0), this.ce(Math.abs(q)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.es && this.es.getScrollY() < 0) {
                var q;
                this.ue && 1 === this.pullDir && this.ce(0), this.re && this.De() >= this.Ue && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.be - 1 || (this.pauseUpdate || (this.beginPullPos = cc.v2(this.es.getScrollY(), 0)), (q = this.beginPullPos.x - this.es.getScrollY()) < 0 && (q = 0), this.re(q), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.be - 1 && (this.elastic = true);
              }
            }
          }, N.prototype.En = function (q) {
            {
              if (this.touchPos.y > q.touch.getLocation().y) this.fe && 2 === this.pullDir && this.fe(0), this.ue && this.Re() <= this.je && (this.pauseUpdate || (this.beginPullPos = q.touch.getLocation()), (f = this.beginPullPos.y - q.touch.getLocation().y) < 0 && (f = 0), this.ue(f), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);else if (this.touchPos.y < q.touch.getLocation().y) {
                {
                  var f;
                  this.ue && 1 === this.pullDir && this.ue(0), this.fe && Math.round(this.Le()) >= Math.round(this.Pe) && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.be - 1 || (this.pauseUpdate || (this.beginPullPos = q.touch.getLocation()), (f = this.beginPullPos.y - q.touch.getLocation().y) > 0 && (f = 0), this.fe(Math.abs(f)), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.be - 1 && (this.elastic = true);
                }
              }
            }
          }, N.prototype.Nn = function (q) {
            if (this.touchPos.x > q.touch.getLocation().x) this.re && 1 === this.pullDir && this.re(0), this.ce && this.xe() <= this.Fe && (this.content.children.length && this.content.children[this.content.children.length - 1].zIndex !== this.be - 1 || (this.pauseUpdate || (this.beginPullPos = q.touch.getLocation()), (f = this.beginPullPos.x - q.touch.getLocation().x) < 0 && (f = 0), this.ce(f), this.pauseUpdate = true, this.pullDir = 2)), this.content.children[this.content.children.length - 1].zIndex < this.be - 1 && (this.elastic = true);else if (this.touchPos.x < q.touch.getLocation().x) {
              var f;
              this.ce && 2 === this.pullDir && this.ce(0), this.re && this.De() >= this.Ue && (this.pauseUpdate || (this.beginPullPos = q.touch.getLocation()), (f = this.beginPullPos.x - q.touch.getLocation().x) > 0 && (f = 0), this.re(Math.abs(f)), this.pauseUpdate = true, this.pullDir = 1), this.content.children[0].zIndex > 0 && (this.elastic = true);
            }
          }, N.prototype.Fi = function (q, f) {
            if (Z(this.touchPos, q.touch.getLocation()) >= 50 && q.stopPropagationImmediate(), !this.Te && this.content.children.length) {
              {
                if (this.pauseUpdate) {
                  if (this.vertical) {
                    var g = this.beginPullPos.y - q.touch.getLocation().y;
                    this.le && 1 === this.pullDir ? (g < 0 && (g = 0), this.le(g)) : this.de && 2 === this.pullDir && (g > 0 && (g = 0), this.de(Math.abs(g)));
                  } else g = this.beginPullPos.x - q.touch.getLocation().x, this.ae && 1 === this.pullDir ? (g > 0 && (g = 0), this.ae(Math.abs(g))) : this.he && 2 === this.pullDir && (g < 0 && (g = 0), this.he(g));
                  this.pullDir = null;
                }
                this.snapPause = false, this.requestSnap = true, V.prototype.Fi.call(this, q, f);
              }
            }
          }, N.prototype.Vi = function (q, f) {
            if (Z(this.touchPos, q.touch.getLocation()) >= 50 && q.stopPropagationImmediate(), !this.Te && this.content.children.length) {
              if (this.pauseUpdate) {
                if (this.vertical) {
                  var g = this.beginPullPos.y - q.touch.getLocation().y;
                  this.le && 1 === this.pullDir ? (g < 0 && (g = 0), this.le(g)) : this.de && 2 === this.pullDir && (g > 0 && (g = 0), this.de(Math.abs(g)));
                } else g = this.beginPullPos.x - q.touch.getLocation().x, this.ae && 1 === this.pullDir ? (g > 0 && (g = 0), this.ae(Math.abs(g))) : this.he && 2 === this.pullDir && (g < 0 && (g = 0), this.he(g));
                this.pullDir = null;
              }
              this.snapPause = false, this.requestSnap = true, V.prototype.Vi.call(this, q, f);
            }
          }, N.prototype.ns = function () {
            this.snapPause = true, this.setSnapDone(true);
          }, N.prototype.os = function () {
            {
              if (!this.Te) {
                {
                  if (this.pauseUpdate) {
                    if (this.vertical) {
                      var q = this.beginPullPos.y - this.es.getScrollY();
                      this.le && 1 === this.pullDir ? (q > 0 && (q = 0), this.le(Math.abs(q))) : this.de && 2 === this.pullDir && (q < 0 && (q = 0), this.de(q));
                    } else q = this.beginPullPos.x - this.es.getScrollY(), this.ae && 1 === this.pullDir ? (q > 0 && (q = 0), this.ae(Math.abs(q))) : this.he && 2 === this.pullDir && (q < 0 && (q = 0), this.he(q));
                    this.pullDir = null;
                  }
                  this.snapPause = false, this.requestSnap = true, this.autoSnap && this.We(), this.es = undefined;
                }
              }
            }
          }, N.prototype.hs = function (q, f) {
            {
              if (this.elastic = this.originalElastic, !this.Te && this.content.children.length && this.enabledInHierarchy && !this.kn(q, f)) {
                this.es = q;
                var g = cc.v2(0, 0);
                this.vertical ? (g = cc.v2(0, -0.1 * q.getScrollY()), this.Gn()) : this.horizontal && (g = cc.v2(-0.1 * q.getScrollY(), 0), this.$i()), this.as = 0, this.us(g), this.ds || (this.Ki(), this.schedule(this.vs, 1 / 60), this.ds = true, this.ns()), this.Qi(q);
              }
            }
          }, N.prototype.vs = function (q) {
            if (!this.Te) {
              var f = this._s();
              if (!X(f, cc.v2(0, 0), 0.0001)) return this.ms(), this.unschedule(this.vs), this.ds = false, void this.os();
              this.as += q, this.as > 0.1 && (this.bs(), this.unschedule(this.vs), this.ds = false, this.os());
            }
          }, N.prototype.Rn = function (q) {
            var f = this.jn(),
              g = f ? 0.05 : 1;
            this.Cn += q * (1 / g);
            var l,
              K = Math.min(1, this.Cn / this.gn);
            this.bn && (l = K, K = (l -= 1) * l * l * l * l + 1);
            var O = this.pn.add(this.Sn.mul(K)),
              x = K > 0.5;
            if (Math.abs(K - 1) <= this.getScrollEndedEventTiming() && !this.Hn && (this.Xi("scroll-ended-with-threshold"), this.Hn = true), this.elastic) {
              var p = O.sub(this.wn);
              f && (p = p.mul(g)), O = this.wn.add(p);
            } else {
              var b = O.sub(this.getContentPosition()),
                L = this._s(b);
              L.fuzzyEquals(cc.v2(0, 0), 0.0001) || (O = O.add(L), x = true);
            }
            x && (this.mn = false);
            var H = O.sub(this.getContentPosition());
            this.Ln(this.Pn(H), x), this.Xi("scrolling"), this.mn || (this.In = false, this.Tn = false, this.Xi("scroll-ended"));
          }, N.prototype.kn = function () {
            return false;
          }, N.prototype.ms = function () {
            if (!this.Dn() && this.inertia) {
              var q = this.Un();
              !X(q, cc.v2(0, 0), 0.0001) && this.brake < 1 ? this.xn(q) : this.autoSnap && this.We();
            }
            this.bs();
          }, __decorate([M], N);
        }
      }(B.default));
    module.default = C, cc._RF.pop();
  }
}
module.exports = GridView;
