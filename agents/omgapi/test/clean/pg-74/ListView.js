// module: ListView
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function ListView(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "3d710qNmRNP1LLRNNBcLNnF", "ListView")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("ListViewEnum"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (N) {
        {
          function l() {
            var K = null !== N && N.apply(this, arguments) || this;
            return K.view = undefined, K.contentWidget = undefined, K.wi = {}, K.Bi = {}, K.Kc = [], K.qc = 0, K.Qc = 0, K.Yc = 0, K.Zc = 0, K.Xc = false, K.$c = false, K.th = false, K.Ai = undefined, K;
          }
          var q = {};
          q.get = function () {
            return this.wi;
          };
          q.enumerable = false;
          q.configurable = true;
          var f = {};
          f.get = function () {
            return this.Bi;
          };
          f.enumerable = false;
          f.configurable = true;
          var g = {};
          g.get = function () {
            return this.Kc;
          };
          g.enumerable = false;
          g.configurable = true;
          return __extends(l, N), Object.defineProperty(l.prototype, "nodePools", q), Object.defineProperty(l.prototype, "templates", f), Object.defineProperty(l.prototype, "visibleCells", g), l.prototype.onLoad = function () {
            this.content.originY = this.content.y;
          }, l.prototype.start = function () {
            {
              N.prototype.start.call(this), cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.ih, this);
            }
          }, l.prototype.onDisable = function () {
            N.prototype.onDisable.call(this), this.content.off("position-changed", this.sh, this), this.node.off("scroll-to-top", this.eh, this), this.node.off("scroll-to-bottom", this.nh, this), this.node.off("scroll-ended", this.oh, this), this.node.off("scrolling", this.hh, this), this.node.off("size-changed", this.Ti, this);
          }, l.prototype.onEnable = function () {
            N.prototype.onEnable.call(this), this.content.on("position-changed", this.sh, this), this.node.on("scroll-to-top", this.eh, this), this.node.on("scroll-to-bottom", this.nh, this), this.node.on("scroll-ended", this.oh, this), this.node.on("scrolling", this.hh, this), this.node.on("size-changed", this.Ti, this), this.$c && (this.reloadData(), this.$c = false);
          }, l.prototype.viewWillLayoutSubviews = function () {}, l.prototype.viewDidLayoutSubviews = function () {
            var K = this.node.width,
              O = this.node.height;
            for (this.view.setContentSize(K, O), this.content.width = K; this.rh();) this.ah();
            for (; this.uh();) this.lh();
            for (; this.fh();) this.dh();
            for (; this.vh();) this._h();
          }, l.prototype.setDataSource = function (K) {
            this.Ai = K;
          }, l.prototype.register = function (K, O, x) {
            if (this.nodePools[K]) ;else if (O) {
              var p;
              p = x ? new cc.NodePool(x) : new cc.NodePool(), this.templates[K] = O, this.nodePools[K] = p;
            }
          }, l.prototype.dequeueReusableItem = function (K) {
            {
              var O,
                x = this.nodePools[K];
              if (x) {
                if (!(O = x.get())) {
                  var p = this.templates[K];
                  O = cc.instantiate(p);
                }
                O.lv_type = K;
              }
              return O;
            }
          }, l.prototype.reloadData = function () {
            {
              var K = this;
              if (this.Ai) if (this.mh) {
                this.stopAutoScroll();
                var O = this.Kc,
                  x = this.Yc = this.Ai.getCount(this),
                  L = 0,
                  H = 0,
                  U = 0;
                if (O && O.length && O.length > 0 && (L = (E = O[0]).listViewIndex, H = C(E), U = O[O.length - 1].listViewIndex), this.Xc = true, O && O.length && (0 === x || U >= x)) for (var k = O.length - 1; U >= x && (P = O[k]);) P && this.ki(P), U--, k--;
                var Y = this.Kc = [];
                if (L < x) {
                  for (var y = 0, z = (k = L, H); k < x && this.rh();) {
                    {
                      var P;
                      (P = this.bh(k, O)) && this.ki(P), (D = this.Ai.getItem(this, k)) && (D.lv_type, D.x = 0, D.y = z - D.height * D.anchorY, D.listViewIndex = k, y += D.height, this.content.addChild(D), Y.push(D), z = V(D), k++);
                    }
                  }
                  var G = this.content.originY - z - this.view.height;
                  if (this.content.height = Math.abs(z), y < this.view.height && L > 0) {
                    k = L - 1;
                    for (var A = this.view.height - y, w = 0; k >= 0 && w < A;) (D = this.Ai.getItem(this, k)) && (D.lv_type, D.x = 0, D.y = W + D.height * (1 - D.anchorY), D.listViewIndex = k, w += D.height, this.content.addChild(D), Y.unshift(D), W = C(D), k--);
                    this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, G)), cc.callFunc(function () {
                      K.content.y = G, K.content.oldY = G, K.Xc = false, K.ph();
                    })));
                  } else this.Xc = false, this.ph();
                } else {
                  for (y = 0, k = x - 1, W = -x * this.Zc; k >= 0 && y < this.view.height;) {
                    var D;
                    (D = this.Ai.getItem(this, k)) && (D.lv_type, D.x = 0, D.y = W + D.height * (1 - D.anchorY), D.listViewIndex = k, y += D.height, this.content.addChild(D), Y.unshift(D), W = C(D), k--);
                  }
                  A = 0, y > this.view.height ? A = y - this.view.height : y < this.view.height && this.Sh(true);
                  var J = this.content.originY + A;
                  this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, J)), cc.callFunc(function () {
                    K.content.y = J, K.content.oldY = J, K.Xc = false, K.ph();
                  })));
                }
                if (Y.length && Y.length > 0) {
                  {
                    var E = Y[0],
                      Q0 = Y[Y.length - 1];
                    this.Zc = (C(E) - V(Q0)) / (Q0.listViewIndex - E.listViewIndex + 1), this.content.height = this.Zc * x;
                  }
                }
              } else this.$c = true;
            }
          }, l.prototype.scrollToRow = function (K, O, x) {
            var p = this;
            undefined === O && (O = B.scrollPosition.scrollPositionTop), undefined === x && (x = true), this.stopAutoScroll();
            var b = this.content.y;
            if (!(K < 0 || K >= this.Yc)) {
              var L = this.Kc;
              if (L && L.length && !(L.length <= 0)) {
                {
                  this.content.off("position-changed", this.sh, this);
                  var H = this.Qc = K;
                  L = this.gh(H, L), this.Kc = L, 0 === L[0].listViewIndex && this.Sh(true);
                  var U,
                    k,
                    Y = this.itemAtIndex(K),
                    y = L.indexOf(Y),
                    z = 0;
                  if (k = O === B.scrollPosition.scrollPositionTop ? 0 : O === B.scrollPosition.scrollPositionMiddle ? this.view.height / 2 - Y.height * Y.anchorY : this.view.height, O === B.scrollPosition.scrollPositionBottom) z = (z = k - (S = this.Ch(y, L, k, false))) >= 0 ? z : 0, U = this.content.originY + Math.abs(Y.y) + Y.height * Y.anchorY - k + z;else if (O === B.scrollPosition.scrollPositionTop) {
                    {
                      var S = this.Ch(y, L, this.view.height - k, true);
                      z = (z = this.view.height - k - S) >= 0 ? z : 0, U = this.content.originY + Math.abs(Y.y) - Y.height * Y.anchorY - k - z;
                    }
                  } else S = this.Ch(y, L, this.view.height - k, true), (z = this.view.height - k - S) <= 0 && (z = k - (S = this.Ch(y - 1, L, k, false))), z = z >= 0 ? z : 0, U = this.content.originY + Math.abs(Y.y) - Y.height * Y.anchorY - k - z;
                  if (b === (U = U >= this.content.originY ? U : this.content.originY)) return this.content.y = U, this.content.oldY = U, this.Mh(H), void this.content.on("position-changed", this.sh, this);
                  x ? this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(this.content.x, U)), cc.callFunc(function () {
                    {
                      p.content.y = U, p.content.oldY = U, p.Mh(H), p.content.on("position-changed", p.sh, p);
                    }
                  }))) : (this.content.y = U, this.content.oldY = U, this.Mh(H), this.content.on("position-changed", this.sh, this));
                }
              }
            }
          }, l.prototype.visibleItems = function () {
            {
              return this.Kc;
            }
          }, l.prototype.itemAtIndex = function (K) {
            {
              return this.bh(K, this.Kc);
            }
          }, l.prototype.insertCellAtIndex = function (K, O) {
            var x = this;
            if (undefined === O && (O = true), !(K > this.Yc)) {
              this.stopAutoScroll(), this.Yc += 1, this.content.height = this.Zc * this.Yc;
              var p = this.itemAtIndex(K),
                b = this.Kc,
                L = this.yh;
              if (!p) {
                var H = b[0];
                return H.listViewIndex > K ? this.wh(0, H.listViewIndex + 1) : this.rh() && this.ah(), L && L.updateCellAmimation(null, B.cellUpdateAction.cellUpdateActionInsert), void (L && L.animationEnd());
              }
              var U = b.indexOf(p),
                k = C(p),
                Y = this.Ai.getItem(this, K);
              Y.x = 0, Y.y = k - Y.height * Y.anchorY, Y.listViewIndex = K, this.content.addChild(Y), b.splice(U, 0, Y), k = V(Y), this.wh(U + 1, K + 1), L && L.updateCellAmimation(Y, B.cellUpdateAction.cellUpdateActionInsert), this.Bh(U + 1, k, B.cellUpdateAction.cellUpdateActionInsert, O, function () {
                for (; x.vh();) x._h();
                x.Ah(), x.Hh = false;
              });
            }
          }, l.prototype.removeCellAtIndex = function (K, O) {
            var x = this;
            if (undefined === O && (O = true), !(K >= this.Yc)) {
              var p = this.Kc;
              this.Yc -= 1;
              var b = this.itemAtIndex(K),
                L = this.yh;
              if (!b) {
                var H = p[0];
                return H.listViewIndex > K && this.wh(0, H.listViewIndex - 1), L && L.updateCellAmimation(null, B.cellUpdateAction.cellUpdateActionRemove), void (L && L.animationEnd());
              }
              this.stopAutoScroll();
              var U = p.indexOf(b),
                k = C(b);
              p.splice(U, 1), this.wh(U, K), this.yh ? L.updateCellAmimation(b, B.cellUpdateAction.cellUpdateActionRemove, function () {
                x.ki(b), b.removeFromParent();
              }) : (this.ki(b), b.removeFromParent()), this.Bh(U, k, B.cellUpdateAction.cellUpdateActionRemove, O, function () {
                for (; x.fh();) x.dh();
                for (; x.rh();) x.ah();
                x.Ah(), x.Hh = false;
              });
            }
          }, l.prototype.updateCellAtIndex = function (K, O) {
            {
              var x = this;
              undefined === O && (O = true);
              var p = this.itemAtIndex(K);
              if (p) {
                var b = this.Kc,
                  L = b.indexOf(p),
                  H = C(p),
                  U = p.height,
                  k = this.Ai.getItem(this, K);
                k && (this.ki(p), k.x = 0, k.y = H - k.height * k.anchorY, k.listViewIndex = K, this.content.addChild(k), b[L] = k, U !== k.height) && (H = V(k), this.Bh(L + 1, H, B.cellUpdateAction.cellUpdateActionUpdate, O, function () {
                  {
                    if (U < k.height) for (; x.vh();) x._h();else for (; x.rh();) x.ah();
                    x.Ah(), x.Hh = false;
                  }
                }));
              }
            }
          }, l.prototype.setScrollToTopCallback = function (K) {
            this.Oh = K;
          }, l.prototype.setScrollToBottomCallback = function (K) {
            this.Ih = K;
          }, l.prototype.setScrollEndedCallback = function (K) {
            {
              this.Th = K;
            }
          }, l.prototype.setScrollingCallback = function (K) {
            this.Eh = K;
          }, l.prototype.setCellUpdateAnimCallback = function (K) {
            this.yh = K;
          }, l.prototype.ih = function () {
            {
              this.contentWidget && (this.contentWidget.isAlignTop = false);
            }
          }, l.prototype.ki = function (K) {
            var O,
              x = K.lv_type;
            x && (O = this.nodePools[x]), O && O.put(K);
          }, l.prototype.Ah = function () {
            var K = this.Kc;
            if (K.length > 0) {
              var O = K[K.length - 1],
                x = K[0],
                p = Math.abs(O.y) + O.height * O.anchorY;
              p > this.content.height ? this.content.height = p : p < this.view.height && 0 === x.listViewIndex ? (this.content.y = this.content.originY, this.content.oldY = this.content.originY, this.content.height = p) : O.listViewIndex === this.Yc - 1 && (this.content.height = p);
            } else this.content.height = 0;
          }, l.prototype.Nh = function () {
            var K = this.Kc;
            if (K && K.length && !(K.length <= 0)) {
              {
                var O = K[0],
                  x = C(O),
                  p = K[K.length - 1];
                0 !== O.listViewIndex || 0 === x ? x > -this.Zc && O.listViewIndex > 1 ? this.Gh(true) : p.listViewIndex === this.Yc - 1 && Math.abs(p.y) + p.height * p.anchorY < this.content.height ? this.Gh(true) : Math.abs(p.y) + p.height * p.anchorY > this.content.height && this.Gh(false) : this.Gh(true);
              }
            }
          }, l.prototype.Gh = function (K, O) {
            undefined === O && (O = true), this.Xc = true, this.Sh(K), this.Xc = false, this.pn.y = this.content.y, O && this.kh();
          }, l.prototype.Sh = function (K) {
            {
              var O = this.Kc;
              if (O && O.length && !(O.length <= 0)) {
                if (this.stopAutoScroll(), K) for (var x = -O[0].listViewIndex * this.Zc, p = 0; p < O.length;) (L = O[p]).x = 0, L.y = x - L.height * L.anchorY, x = V(L), p++;else {
                  var b = -O[O.length - 1].listViewIndex * this.Zc;
                  for (p = O.length - 1; p >= 0;) {
                    {
                      var L;
                      (L = O[p]).x = 0, L.y = b - L.height * L.anchorY + L.height, b = C(L), p--;
                    }
                  }
                }
                var H = O[0],
                  U = this.content.originY - V(H);
                this.content.y = U, this.content.oldY = U, this.Ah();
              }
            }
          }, l.prototype.kh = function () {
            this.mn = true, this.gn = this.Rh, this.Cn = 0, this.Sn = this.jh;
          }, l.prototype.rh = function () {
            var K = false,
              O = this.Kc;
            if (O.length > 0) {
              var x = O[O.length - 1];
              if (x.listViewIndex === this.Yc - 1) return false;
              var p = V(x),
                b = this.content.convertToWorldSpaceAR(cc.v2(0, p)),
                L = V(this.view),
                H = this.view.parent.convertToWorldSpaceAR(cc.v2(0, L));
              b.y >= H.y && (K = true);
            } else 0 === O.length && this.Yc > 0 && (K = true);
            return K;
          }, l.prototype.fh = function () {
            {
              var K = false,
                O = this.Kc;
              if (O.length > 0) {
                var x = O[0];
                if (0 === x.listViewIndex) return false;
                var p = C(x),
                  b = this.content.convertToWorldSpaceAR(cc.v2(0, p)),
                  L = C(this.view),
                  H = this.view.parent.convertToWorldSpaceAR(cc.v2(0, L));
                b.y <= H.y && (K = true);
              }
              return K;
            }
          }, l.prototype.vh = function () {
            var K = false,
              O = this.Kc;
            if (O.length > 1) {
              {
                var x = C(O[O.length - 1]),
                  p = this.content.convertToWorldSpaceAR(cc.v2(0, x)),
                  b = V(this.view),
                  L = this.view.parent.convertToWorldSpaceAR(cc.v2(0, b));
                p.y < L.y && (K = true);
              }
            }
            return K;
          }, l.prototype.uh = function () {
            var K = false,
              O = this.Kc;
            if (O.length > 1) {
              var x = V(O[0]),
                p = this.content.convertToWorldSpaceAR(cc.v2(0, x)),
                b = C(this.view),
                L = this.view.parent.convertToWorldSpaceAR(cc.v2(0, b));
              p.y > L.y && (K = true);
            }
            return K;
          }, l.prototype.ah = function () {
            {
              var K = this.Kc;
              if (K.length > 0) {
                var O = this.Yc,
                  x = K[K.length - 1],
                  p = x.listViewIndex + 1;
                if (p < O) {
                  var b = this.Ai.getItem(this, p),
                    L = (b.lv_type, V(x));
                  b.x = 0, b.y = L - b.height * b.anchorY, b.listViewIndex = p, this.content.addChild(b), K.push(b);
                }
              }
            }
          }, l.prototype.dh = function () {
            {
              var K = this.Kc;
              if (K.length > 0) {
                {
                  var O = K[0],
                    x = O.listViewIndex - 1;
                  if (x >= 0) {
                    var p = this.Ai.getItem(this, x),
                      b = (p.lv_type, C(O));
                    p.x = 0, p.y = b - p.height * p.anchorY + p.height, p.listViewIndex = x, this.content.addChild(p), K.unshift(p);
                  }
                }
              }
            }
          }, l.prototype.lh = function () {
            var K = this.Kc;
            if (K.length > 0) {
              var O = K[0];
              this.ki(O), K.shift();
            }
          }, l.prototype._h = function () {
            {
              var K = this.Kc;
              if (K.length > 0) {
                var O = K[K.length - 1];
                this.ki(O), K.pop();
              }
            }
          }, l.prototype.Lh = function () {
            {
              var K = this.Kc;
              if (K.length > 0) for (var O = 0; O < K.length && this.uh();) this.lh(), O++;
            }
          }, l.prototype.Ph = function () {
            var K = this.Kc;
            if (K.length > 0) for (var O = K[K.length - 1]; O >= 0 && this.vh();) this._h(), O--;
          }, l.prototype.Mh = function (K) {
            {
              this.Lh(), this.Ph();
              var O = this.Kc,
                x = this.itemAtIndex(K),
                p = O.indexOf(x);
              if (-1 !== p) {
                var L = [],
                  H = -1,
                  U = -1;
                if (O.length > b) {
                  {
                    var k = O[b],
                      Y = k.listViewIndex;
                    for (b++, L.push(k); b < O.length;) {
                      if ((y = (P = O[b]).listViewIndex) - Y != 1) {
                        H = y;
                        break;
                      }
                      L.push(P), b++, Y = y;
                    }
                    for (b = p - 1, Y = k.listViewIndex; b >= 0;) {
                      {
                        var y;
                        if (Y - (y = (P = O[b]).listViewIndex) != 1) {
                          U = y;
                          break;
                        }
                        L.unshift(P), b--, Y = y;
                      }
                    }
                  }
                }
                if (H >= 0) for (var z = this.itemAtIndex(H), S = O.indexOf(z); O.length > S;) {
                  var P = O[S];
                  this.ki(P), S++;
                }
                if (U >= 0) for (var G = this.itemAtIndex(U), A = O.indexOf(G); A >= 0;) P = O[A], this.ki(P), A--;
                this.Kc = L;
              }
            }
          }, l.prototype.Dh = function (K, O) {
            {
              for (var x = this.Kc, p = x[0], b = x[x.length - 1], H = 0, U = []; L < this.Yc && H <= O && L !== p.listViewIndex && L !== b.listViewIndex;) {
                var k = this.Ai.getItem(this, L);
                k.listViewIndex = L, this.content.addChild(k), U.push(k), H += k.height, L++;
              }
              return U;
            }
          }, l.prototype.Uh = function (K, O) {
            for (var x = this.Kc, p = x[0], b = x[x.length - 1], H = 0, U = []; L >= 0 && H <= O && L !== p.listViewIndex && L !== b.listViewIndex;) {
              {
                var k = this.Ai.getItem(this, L);
                k.listViewIndex = L, this.content.addChild(k), U.unshift(k), H += k.height, L--;
              }
            }
            return U;
          }, l.prototype.xh = function (K, O) {
            if (!O || !O.length || O.length <= 0) return null;
            for (var x = 0; x < O.length; x++) {
              var p = O[x];
              p.x = 0, p.y = K - p.height * p.anchorY, K -= p.height;
            }
            return O;
          }, l.prototype.Fh = function (K, O) {
            if (!O || !O.length || O.length <= 0) return null;
            for (var x = O.length - 1; x >= 0; x--) {
              var p = O[x];
              p.x = 0, p.y = K + p.height * p.anchorY, K += p.height;
            }
            return O;
          }, l.prototype.Ch = function (K, O, x, p) {
            {
              var L = 0;
              if (p) for (; H < O.length && !((L += O[H].height) >= x); H++);else for (H = b; H >= 0 && !((L += O[H].height) >= x); H--);
              return L;
            }
          }, l.prototype.gh = function (K, O) {
            var x,
              p,
              b = O[0],
              L = O[O.length - 1],
              H = this.view.height;
            if (K >= b.listViewIndex && K <= L.listViewIndex) x = this.Dh(L.listViewIndex + 1, H), p = this.Uh(b.listViewIndex - 1, H), x = this.xh(V(L), x), (p = this.Fh(C(b), p)) && (O = p.concat(O)), x && (O = O.concat(x));else {
              x = this.Dh(U, H), U = K;
              var k = undefined;
              k = (p = this.Uh(U - 1, H)) && x ? p.concat(x) : p || x, K > L.listViewIndex ? (k = this.xh(V(L), k), O = O.concat(k)) : (k = this.Fh(C(b), k)) && (O = k.concat(O));
            }
            return O;
          }, l.prototype.Wh = function () {
            var K = this.Kc;
            return !(K.length > 0) || K[K.length - 1].listViewIndex === this.Yc - 1;
          }, l.prototype.bh = function (K, O) {
            if (!O || !O.length || O.length <= 0) return null;
            for (var x = null, p = 0; p < O.length;) {
              var b = O[p];
              if (b.listViewIndex === K) {
                x = b;
                break;
              }
              p++;
            }
            return x;
          }, l.prototype.ph = function () {
            {
              this.Ah(), this.Ai.didReloadData && this.Ai.didReloadData(this);
            }
          }, l.prototype.Bh = function (K, O, x, p, b) {
            var L = this,
              H = this.yh;
            this.Hh = true;
            for (var U, k = this.Kc, Y = H ? H.layoutDuration() : 0.5, y = H ? H.layoutDelay(x) : 0, z = function (G) {
                {
                  var v = k[G],
                    A = v.y,
                    w = O - v.height * v.anchorY;
                  O = w - v.height * v.anchorY, G === k.length - 1 && (U = Math.abs(w) + v.height * v.anchorY), A !== w && p ? v.runAction(cc.sequence(cc.delayTime(y), cc.moveTo(Y, cc.v2(v.x, w)), cc.callFunc(function () {
                    {
                      v.y = w, G === k.length - 1 && (L.Jh(U), b && b(), H && H.animationEnd());
                    }
                  }))) : (v.y = w, G === k.length - 1 && (S.Jh(U), b && b(), H && H.animationEnd()));
                }
              }, S = this; P < k.length; P++) z(P);
            K >= k.length && (b && b(), H && H.animationEnd());
          }, l.prototype.Jh = function (K) {
            var O = K + this.content.originY - this.content.y - this.view.height;
            O < 0 && (this.content.oldY += O, this.content.y += O);
          }, l.prototype.wh = function (K, O) {
            for (var x = this.Kc; p < x.length; p++) x[p].listViewIndex = O, O += 1;
          }, l.prototype.sh = function () {
            var K = this.content,
              O = K.y - K.oldY;
            if (K.oldY = K.y, !this.Xc) {
              if (O > 0) {
                for (; this.rh();) this.ah();
                for (; this.uh();) this.lh();
              } else if (O < 0) {
                for (; this.fh();) this.dh();
                for (; this.vh();) this._h();
              }
              this.Nh();
            }
          }, l.prototype.eh = function () {
            this.Vh = true;
          }, l.prototype.nh = function () {
            this.zh = true;
          }, l.prototype.oh = function () {
            {
              this.Th && this.Th();
            }
          }, l.prototype.hh = function () {
            {
              var K = this._s();
              this.Eh && this.Eh(K.y);
            }
          }, l.prototype.Ti = function () {
            this.viewDidLayoutSubviews();
          }, l.prototype.stopAutoScroll = function () {
            if (this.Xc) {
              this.Rh = this.gn - this.Cn;
              var K = Math.min(1, this.Cn / this.gn);
              this.bn && (x = K, K = (x -= 1) * x * x * x * x + 1), this.jh = (O = 1 - K, this.Sn.mul(O));
            }
            var O, x;
            N.prototype.stopAutoScroll.call(this);
          }, l.prototype.ms = function () {
            {
              var K = this;
              if (this.Vh && this.Oh) {
                var O = this._s();
                this.Oh(function () {
                  K.Vh = false, K.xn(cc.v2(0, 0));
                }, O);
              } else this.zh && this.Ih && this.Wh() ? this.Ih(function (x) {
                K.zh = false;
                var p = K.Yc = K.Ai.getCount(K);
                K.content.height = K.Zc * p;
                var b = K.Kc;
                if (b && b.length && b.length > 0) {
                  {
                    var L = b[b.length - 1].listViewIndex;
                    for (K.content.off("position-changed", K.sh, K); L < p && K.rh();) K.ah(), L += 1;
                    K.Ah(), K.content.on("position-changed", K.sh, K);
                  }
                }
                x && K.ms();
              }) : (this.Vh = false, this.zh = false, N.prototype.ms.call(this));
            }
          }, l.prototype.Yi = function (K) {
            this.Hh || N.prototype.Yi.call(this, K);
          }, __decorate([T(cc.Node)], l.prototype, "view", undefined), __decorate([T(cc.Widget)], l.prototype, "contentWidget", undefined), __decorate([Z], l);
        }
      }(cc.ScrollView);
    exports.default = M, cc._RF.pop();
  }
  function C(N) {
    return N.y - N.height * N.anchorY + N.height;
  }
  function V(N) {
    {
      return N.y - N.height * N.anchorY;
    }
  }
}
module.exports = ListView;
