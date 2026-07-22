// module: ListView
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function ListView(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "3d710qNmRNP1LLRNNBcLNnF", "ListView")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("ListViewEnum"),
      C = cc._decorator,
      H = C.ccclass,
      V = C.property,
      M = function (D) {
        function W() {
          var z = null !== D && D.apply(this, arguments) || this;
          return z.view = undefined, z.contentWidget = undefined, z._i = {}, z.pi = {}, z.Cc = [], z.yc = 0, z.Mc = 0, z.wc = 0, z.Ac = 0, z.Pc = false, z.Bc = false, z.Oc = false, z.lt = undefined, z;
        }
        var k = {};
        k.get = function () {
          return this._i;
        };
        k.enumerable = false;
        k.configurable = true;
        return __extends(W, D), Object.defineProperty(W.prototype, "nodePools", k), Object.defineProperty(W.prototype, "templates", {
          'get': function () {
            {
              return this.pi;
            }
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(W.prototype, "visibleCells", {
          'get': function () {
            return this.Cc;
          },
          'enumerable': false,
          'configurable': true
        }), W.prototype.onLoad = function () {
          this.content.originY = this.content.y;
        }, W.prototype.start = function () {
          D.prototype.start.call(this), cc.director.once(cc.Director.EVENT_AFTER_DRAW, this.Ic, this);
        }, W.prototype.onDisable = function () {
          D.prototype.onDisable.call(this), this.content.off("position-changed", this.Gc, this), this.node.off("scroll-to-top", this.Nc, this), this.node.off("scroll-to-bottom", this.Tc, this), this.node.off("scroll-ended", this.Hc, this), this.node.off("scrolling", this.Rc, this), this.node.off("size-changed", this.gi, this);
        }, W.prototype.onEnable = function () {
          D.prototype.onEnable.call(this), this.content.on("position-changed", this.Gc, this), this.node.on("scroll-to-top", this.Nc, this), this.node.on("scroll-to-bottom", this.Tc, this), this.node.on("scroll-ended", this.Hc, this), this.node.on("scrolling", this.Rc, this), this.node.on("size-changed", this.gi, this), this.Bc && (this.reloadData(), this.Bc = false);
        }, W.prototype.viewWillLayoutSubviews = function () {}, W.prototype.viewDidLayoutSubviews = function () {
          var z = this.node.width,
            L = this.node.height;
          for (this.view.setContentSize(z, L), this.content.width = z; this.kc();) this.Lc();
          for (; this.Ec();) this.jc();
          for (; this.Dc();) this.Uc();
          for (; this.Wc();) this.Fc();
        }, W.prototype.setDataSource = function (z) {
          this.lt = z;
        }, W.prototype.register = function (z, L, v) {
          {
            if (this.nodePools[z]) ;else if (L) {
              {
                var b;
                b = v ? new cc.NodePool(v) : new cc.NodePool(), this.templates[z] = L, this.nodePools[z] = b;
              }
            }
          }
        }, W.prototype.dequeueReusableItem = function (z) {
          {
            var L,
              v = this.nodePools[z];
            if (v) {
              if (!(L = v.get())) {
                {
                  var b = this.templates[z];
                  L = cc.instantiate(b);
                }
              }
              L.lv_type = z;
            }
            return L;
          }
        }, W.prototype.reloadData = function () {
          {
            var z = this;
            if (this.lt) if (this.xc) {
              {
                this.stopAutoScroll();
                var L = this.Cc,
                  U = this.wc = this.lt.getCount(this),
                  Q = 0,
                  w = 0,
                  P = 0;
                if (L && L.length && L.length > 0 && (Q = (K = L[0]).listViewIndex, w = q(K), P = L[L.length - 1].listViewIndex), this.Pc = true, L && L.length && (0 === U || P >= U)) for (var R = L.length - 1; P >= U && (E = L[R]);) E && this.wi(E), P--, R--;
                var T = this.Cc = [];
                if (Q < U) {
                  for (var Y = 0, X = (R = Q, w); R < U && this.kc();) {
                    var E;
                    (E = this.Vc(R, L)) && this.wi(E), (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = X - G.height * G.anchorY, G.listViewIndex = R, Y += G.height, this.content.addChild(G), T.push(G), X = m(G), R++);
                  }
                  var F = this.content.originY - X - this.view.height;
                  if (this.content.height = Math.abs(X), Y < this.view.height && Q > 0) {
                    R = Q - 1;
                    for (var N = this.view.height - Y, Z = 0; R >= 0 && Z < N;) (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = A + G.height * (1 - G.anchorY), G.listViewIndex = R, Z += G.height, this.content.addChild(G), T.unshift(G), A = q(G), R--);
                    this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, F)), cc.callFunc(function () {
                      z.content.y = F, z.content.oldY = F, z.Pc = false, z.zc();
                    })));
                  } else this.Pc = false, this.zc();
                } else {
                  for (Y = 0, R = U - 1, A = -U * this.Ac; R >= 0 && Y < this.view.height;) {
                    {
                      var G;
                      (G = this.lt.getItem(this, R)) && (G.lv_type, G.x = 0, G.y = A + G.height * (1 - G.anchorY), G.listViewIndex = R, Y += G.height, this.content.addChild(G), T.unshift(G), A = q(G), R--);
                    }
                  }
                  N = 0, Y > this.view.height ? N = Y - this.view.height : Y < this.view.height && this.Kc(true);
                  var J = this.content.originY + N;
                  this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(0, J)), cc.callFunc(function () {
                    z.content.y = J, z.content.oldY = J, z.Pc = false, z.zc();
                  })));
                }
                if (T.length && T.length > 0) {
                  var K = T[0],
                    l0 = T[T.length - 1];
                  this.Ac = (q(K) - m(l0)) / (l0.listViewIndex - K.listViewIndex + 1), this.content.height = this.Ac * U;
                }
              }
            } else this.Bc = true;
          }
        }, W.prototype.scrollToRow = function (z, L, v) {
          var b = this;
          undefined === L && (L = x.scrollPosition.scrollPositionTop), undefined === v && (v = true), this.stopAutoScroll();
          var U = this.content.y;
          if (!(z < 0 || z >= this.wc)) {
            var Q = this.Cc;
            if (Q && Q.length && !(Q.length <= 0)) {
              this.content.off("position-changed", this.Gc, this);
              var w = this.Mc = z;
              Q = this.qc(w, Q), this.Cc = Q, 0 === Q[0].listViewIndex && this.Kc(true);
              var P,
                R,
                T = this.itemAtIndex(z),
                Y = Q.indexOf(T),
                X = 0;
              if (R = L === x.scrollPosition.scrollPositionTop ? 0 : L === x.scrollPosition.scrollPositionMiddle ? this.view.height / 2 - T.height * T.anchorY : this.view.height, L === x.scrollPosition.scrollPositionBottom) X = (X = R - (E = this.Jc(Y, Q, R, false))) >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) + T.height * T.anchorY - R + X;else if (L === x.scrollPosition.scrollPositionTop) {
                var E = this.Jc(Y, Q, this.view.height - R, true);
                X = (X = this.view.height - R - E) >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) - T.height * T.anchorY - R - X;
              } else E = this.Jc(Y, Q, this.view.height - R, true), (X = this.view.height - R - E) <= 0 && (X = R - (E = this.Jc(Y - 1, Q, R, false))), X = X >= 0 ? X : 0, P = this.content.originY + Math.abs(T.y) - T.height * T.anchorY - R - X;
              if (U === (P = P >= this.content.originY ? P : this.content.originY)) return this.content.y = P, this.content.oldY = P, this.Yc(w), void this.content.on("position-changed", this.Gc, this);
              v ? this.content.runAction(cc.sequence(cc.moveTo(0.2, cc.v2(this.content.x, P)), cc.callFunc(function () {
                b.content.y = P, b.content.oldY = P, b.Yc(w), b.content.on("position-changed", b.Gc, b);
              }))) : (this.content.y = P, this.content.oldY = P, this.Yc(w), this.content.on("position-changed", this.Gc, this));
            }
          }
        }, W.prototype.visibleItems = function () {
          return this.Cc;
        }, W.prototype.itemAtIndex = function (z) {
          {
            return this.Vc(z, this.Cc);
          }
        }, W.prototype.insertCellAtIndex = function (z, L) {
          {
            var v = this;
            if (undefined === L && (L = true), !(z > this.wc)) {
              this.stopAutoScroll(), this.wc += 1, this.content.height = this.Ac * this.wc;
              var b = this.itemAtIndex(z),
                U = this.Cc,
                Q = this.Qc;
              if (!b) {
                var w = U[0];
                return w.listViewIndex > z ? this.Xc(0, w.listViewIndex + 1) : this.kc() && this.Lc(), Q && Q.updateCellAmimation(null, x.cellUpdateAction.cellUpdateActionInsert), void (Q && Q.animationEnd());
              }
              var P = U.indexOf(b),
                R = q(b),
                T = this.lt.getItem(this, z);
              T.x = 0, T.y = R - T.height * T.anchorY, T.listViewIndex = z, this.content.addChild(T), U.splice(P, 0, T), R = m(T), this.Xc(P + 1, z + 1), Q && Q.updateCellAmimation(T, x.cellUpdateAction.cellUpdateActionInsert), this.Zc(P + 1, R, x.cellUpdateAction.cellUpdateActionInsert, L, function () {
                for (; v.Wc();) v.Fc();
                v.$c(), v.th = false;
              });
            }
          }
        }, W.prototype.removeCellAtIndex = function (z, L) {
          {
            var v = this;
            if (undefined === L && (L = true), !(z >= this.wc)) {
              var b = this.Cc;
              this.wc -= 1;
              var U = this.itemAtIndex(z),
                Q = this.Qc;
              if (!U) {
                var w = b[0];
                return w.listViewIndex > z && this.Xc(0, w.listViewIndex - 1), Q && Q.updateCellAmimation(null, x.cellUpdateAction.cellUpdateActionRemove), void (Q && Q.animationEnd());
              }
              this.stopAutoScroll();
              var P = b.indexOf(U),
                R = q(U);
              b.splice(P, 1), this.Xc(P, z), this.Qc ? Q.updateCellAmimation(U, x.cellUpdateAction.cellUpdateActionRemove, function () {
                v.wi(U), U.removeFromParent();
              }) : (this.wi(U), U.removeFromParent()), this.Zc(P, R, x.cellUpdateAction.cellUpdateActionRemove, L, function () {
                for (; v.Dc();) v.Uc();
                for (; v.kc();) v.Lc();
                v.$c(), v.th = false;
              });
            }
          }
        }, W.prototype.updateCellAtIndex = function (z, L) {
          {
            var v = this;
            undefined === L && (L = true);
            var b = this.itemAtIndex(z);
            if (b) {
              var U = this.Cc,
                Q = U.indexOf(b),
                w = q(b),
                P = b.height,
                R = this.lt.getItem(this, z);
              R && (this.wi(b), R.x = 0, R.y = w - R.height * R.anchorY, R.listViewIndex = z, this.content.addChild(R), U[Q] = R, P !== R.height) && (w = m(R), this.Zc(Q + 1, w, x.cellUpdateAction.cellUpdateActionUpdate, L, function () {
                if (P < R.height) for (; v.Wc();) v.Fc();else for (; v.kc();) v.Lc();
                v.$c(), v.th = false;
              }));
            }
          }
        }, W.prototype.setScrollToTopCallback = function (z) {
          this.ih = z;
        }, W.prototype.setScrollToBottomCallback = function (z) {
          this.sh = z;
        }, W.prototype.setScrollEndedCallback = function (z) {
          this.eh = z;
        }, W.prototype.setScrollingCallback = function (z) {
          this.nh = z;
        }, W.prototype.setCellUpdateAnimCallback = function (z) {
          this.Qc = z;
        }, W.prototype.Ic = function () {
          {
            this.contentWidget && (this.contentWidget.isAlignTop = false);
          }
        }, W.prototype.wi = function (z) {
          var L,
            v = z.lv_type;
          v && (L = this.nodePools[v]), L && L.put(z);
        }, W.prototype.$c = function () {
          var z = this.Cc;
          if (z.length > 0) {
            var L = z[z.length - 1],
              v = z[0],
              b = Math.abs(L.y) + L.height * L.anchorY;
            b > this.content.height ? this.content.height = b : b < this.view.height && 0 === v.listViewIndex ? (this.content.y = this.content.originY, this.content.oldY = this.content.originY, this.content.height = b) : L.listViewIndex === this.wc - 1 && (this.content.height = b);
          } else this.content.height = 0;
        }, W.prototype.oh = function () {
          var z = this.Cc;
          if (z && z.length && !(z.length <= 0)) {
            var L = z[0],
              v = q(L),
              b = z[z.length - 1];
            0 !== L.listViewIndex || 0 === v ? v > -this.Ac && L.listViewIndex > 1 ? this.hh(true) : b.listViewIndex === this.wc - 1 && Math.abs(b.y) + b.height * b.anchorY < this.content.height ? this.hh(true) : Math.abs(b.y) + b.height * b.anchorY > this.content.height && this.hh(false) : this.hh(true);
          }
        }, W.prototype.hh = function (z, L) {
          undefined === L && (L = true), this.Pc = true, this.Kc(z), this.Pc = false, this.wn.y = this.content.y, L && this.rh();
        }, W.prototype.Kc = function (z) {
          var L = this.Cc;
          if (L && L.length && !(L.length <= 0)) {
            {
              if (this.stopAutoScroll(), z) for (var v = -L[0].listViewIndex * this.Ac, b = 0; b < L.length;) (Q = L[b]).x = 0, Q.y = v - Q.height * Q.anchorY, v = m(Q), b++;else {
                {
                  var U = -L[L.length - 1].listViewIndex * this.Ac;
                  for (b = L.length - 1; b >= 0;) {
                    var Q;
                    (Q = L[b]).x = 0, Q.y = U - Q.height * Q.anchorY + Q.height, U = q(Q), b--;
                  }
                }
              }
              var w = L[0],
                P = this.content.originY - m(w);
              this.content.y = P, this.content.oldY = P, this.$c();
            }
          }
        }, W.prototype.rh = function () {
          this.yn = true, this.Pn = this.ah, this.Bn = 0, this.An = this.uh;
        }, W.prototype.kc = function () {
          {
            var z = false,
              L = this.Cc;
            if (L.length > 0) {
              {
                var v = L[L.length - 1];
                if (v.listViewIndex === this.wc - 1) return false;
                var b = m(v),
                  U = this.content.convertToWorldSpaceAR(cc.v2(0, b)),
                  Q = m(this.view),
                  w = this.view.parent.convertToWorldSpaceAR(cc.v2(0, Q));
                U.y >= w.y && (z = true);
              }
            } else 0 === L.length && this.wc > 0 && (z = true);
            return z;
          }
        }, W.prototype.Dc = function () {
          {
            var z = false,
              L = this.Cc;
            if (L.length > 0) {
              var v = L[0];
              if (0 === v.listViewIndex) return false;
              var b = q(v),
                U = this.content.convertToWorldSpaceAR(cc.v2(0, b)),
                Q = q(this.view),
                w = this.view.parent.convertToWorldSpaceAR(cc.v2(0, Q));
              U.y <= w.y && (z = true);
            }
            return z;
          }
        }, W.prototype.Wc = function () {
          var z = false,
            L = this.Cc;
          if (L.length > 1) {
            {
              var v = q(L[L.length - 1]),
                b = this.content.convertToWorldSpaceAR(cc.v2(0, v)),
                U = m(this.view),
                Q = this.view.parent.convertToWorldSpaceAR(cc.v2(0, U));
              b.y < Q.y && (z = true);
            }
          }
          return z;
        }, W.prototype.Ec = function () {
          var z = false,
            L = this.Cc;
          if (L.length > 1) {
            var v = m(L[0]),
              b = this.content.convertToWorldSpaceAR(cc.v2(0, v)),
              U = q(this.view),
              Q = this.view.parent.convertToWorldSpaceAR(cc.v2(0, U));
            b.y > Q.y && (z = true);
          }
          return z;
        }, W.prototype.Lc = function () {
          {
            var z = this.Cc;
            if (z.length > 0) {
              var L = this.wc,
                v = z[z.length - 1],
                b = v.listViewIndex + 1;
              if (b < L) {
                {
                  var U = this.lt.getItem(this, b),
                    Q = (U.lv_type, m(v));
                  U.x = 0, U.y = Q - U.height * U.anchorY, U.listViewIndex = b, this.content.addChild(U), z.push(U);
                }
              }
            }
          }
        }, W.prototype.Uc = function () {
          var z = this.Cc;
          if (z.length > 0) {
            {
              var L = z[0],
                v = L.listViewIndex - 1;
              if (v >= 0) {
                var b = this.lt.getItem(this, v),
                  U = (b.lv_type, q(L));
                b.x = 0, b.y = U - b.height * b.anchorY + b.height, b.listViewIndex = v, this.content.addChild(b), z.unshift(b);
              }
            }
          }
        }, W.prototype.jc = function () {
          var z = this.Cc;
          if (z.length > 0) {
            {
              var L = z[0];
              this.wi(L), z.shift();
            }
          }
        }, W.prototype.Fc = function () {
          var z = this.Cc;
          if (z.length > 0) {
            {
              var L = z[z.length - 1];
              this.wi(L), z.pop();
            }
          }
        }, W.prototype.lh = function () {
          var z = this.Cc;
          if (z.length > 0) for (var L = 0; L < z.length && this.Ec();) this.jc(), L++;
        }, W.prototype.fh = function () {
          {
            var z = this.Cc;
            if (z.length > 0) for (var L = z[z.length - 1]; L >= 0 && this.Wc();) this.Fc(), L--;
          }
        }, W.prototype.Yc = function (z) {
          this.lh(), this.fh();
          var L = this.Cc,
            b = this.itemAtIndex(z),
            U = L.indexOf(b);
          if (-1 !== U) {
            var w = [],
              P = -1,
              R = -1;
            if (L.length > Q) {
              {
                var T = L[Q],
                  Y = T.listViewIndex;
                for (Q++, w.push(T); Q < L.length;) {
                  {
                    if ((X = (N = L[Q]).listViewIndex) - Y != 1) {
                      {
                        P = X;
                        break;
                      }
                    }
                    w.push(N), Q++, Y = X;
                  }
                }
                for (Q = U - 1, Y = T.listViewIndex; Q >= 0;) {
                  {
                    var X;
                    if (Y - (X = (N = L[Q]).listViewIndex) != 1) {
                      R = X;
                      break;
                    }
                    w.unshift(N), Q--, Y = X;
                  }
                }
              }
            }
            if (P >= 0) for (var E = this.itemAtIndex(P), F = L.indexOf(E); L.length > F;) {
              {
                var N = L[F];
                this.wi(N), F++;
              }
            }
            if (R >= 0) for (var Z = this.itemAtIndex(R), p = L.indexOf(Z); p >= 0;) N = L[p], this.wi(N), p--;
            this.Cc = w;
          }
        }, W.prototype.dh = function (z, L) {
          for (var v = this.Cc, b = v[0], U = v[v.length - 1], w = 0, P = []; Q < this.wc && w <= L && Q !== b.listViewIndex && Q !== U.listViewIndex;) {
            var R = this.lt.getItem(this, Q);
            R.listViewIndex = Q, this.content.addChild(R), P.push(R), w += R.height, Q++;
          }
          return P;
        }, W.prototype.vh = function (z, L) {
          for (var v = this.Cc, b = v[0], U = v[v.length - 1], w = 0, P = []; Q >= 0 && w <= L && Q !== b.listViewIndex && Q !== U.listViewIndex;) {
            var R = this.lt.getItem(this, Q);
            R.listViewIndex = Q, this.content.addChild(R), P.unshift(R), w += R.height, Q--;
          }
          return P;
        }, W.prototype._h = function (z, L) {
          if (!L || !L.length || L.length <= 0) return null;
          for (var v = 0; v < L.length; v++) {
            var b = L[v];
            b.x = 0, b.y = z - b.height * b.anchorY, z -= b.height;
          }
          return L;
        }, W.prototype.ph = function (z, L) {
          if (!L || !L.length || L.length <= 0) return null;
          for (var v = L.length - 1; v >= 0; v--) {
            var b = L[v];
            b.x = 0, b.y = z + b.height * b.anchorY, z += b.height;
          }
          return L;
        }, W.prototype.Jc = function (z, L, v, b) {
          var Q = 0;
          if (b) for (; w < L.length && !((Q += L[w].height) >= v); w++);else for (w = U; w >= 0 && !((Q += L[w].height) >= v); w--);
          return Q;
        }, W.prototype.qc = function (z, L) {
          var v,
            b,
            U = L[0],
            Q = L[L.length - 1],
            w = this.view.height;
          if (z >= U.listViewIndex && z <= Q.listViewIndex) v = this.dh(Q.listViewIndex + 1, w), b = this.vh(U.listViewIndex - 1, w), v = this._h(m(Q), v), (b = this.ph(q(U), b)) && (L = b.concat(L)), v && (L = L.concat(v));else {
            v = this.dh(P, w), P = z;
            var R = undefined;
            R = (b = this.vh(P - 1, w)) && v ? b.concat(v) : b || v, z > Q.listViewIndex ? (R = this._h(m(Q), R), L = L.concat(R)) : (R = this.ph(q(U), R)) && (L = R.concat(L));
          }
          return L;
        }, W.prototype.bh = function () {
          {
            var z = this.Cc;
            return !(z.length > 0) || z[z.length - 1].listViewIndex === this.wc - 1;
          }
        }, W.prototype.Vc = function (z, L) {
          if (!L || !L.length || L.length <= 0) return null;
          for (var v = null, b = 0; b < L.length;) {
            var U = L[b];
            if (U.listViewIndex === z) {
              v = U;
              break;
            }
            b++;
          }
          return v;
        }, W.prototype.zc = function () {
          this.$c(), this.lt.didReloadData && this.lt.didReloadData(this);
        }, W.prototype.Zc = function (z, L, v, b, U) {
          var Q = this,
            w = this.Qc;
          this.th = true;
          for (var P, R = this.Cc, T = w ? w.layoutDuration() : 0.5, Y = w ? w.layoutDelay(v) : 0, X = function (N) {
              var Z = R[N],
                p = Z.y,
                g = L - Z.height * Z.anchorY;
              L = g - Z.height * Z.anchorY, N === R.length - 1 && (P = Math.abs(g) + Z.height * Z.anchorY), p !== g && b ? Z.runAction(cc.sequence(cc.delayTime(Y), cc.moveTo(T, cc.v2(Z.x, g)), cc.callFunc(function () {
                Z.y = g, N === R.length - 1 && (Q.mh(P), U && U(), w && w.animationEnd());
              }))) : (Z.y = g, N === R.length - 1 && (E.mh(P), U && U(), w && w.animationEnd()));
            }, E = this; F < R.length; F++) X(F);
          z >= R.length && (U && U(), w && w.animationEnd());
        }, W.prototype.mh = function (z) {
          var L = z + this.content.originY - this.content.y - this.view.height;
          L < 0 && (this.content.oldY += L, this.content.y += L);
        }, W.prototype.Xc = function (z, L) {
          for (var v = this.Cc; b < v.length; b++) v[b].listViewIndex = L, L += 1;
        }, W.prototype.Gc = function () {
          var z = this.content,
            L = z.y - z.oldY;
          if (z.oldY = z.y, !this.Pc) {
            if (L > 0) {
              {
                for (; this.kc();) this.Lc();
                for (; this.Ec();) this.jc();
              }
            } else if (L < 0) {
              for (; this.Dc();) this.Uc();
              for (; this.Wc();) this.Fc();
            }
            this.oh();
          }
        }, W.prototype.Nc = function () {
          this.Sh = true;
        }, W.prototype.Tc = function () {
          {
            this.gh = true;
          }
        }, W.prototype.Hc = function () {
          this.eh && this.eh();
        }, W.prototype.Rc = function () {
          var z = this.Zi();
          this.nh && this.nh(z.y);
        }, W.prototype.gi = function () {
          {
            this.viewDidLayoutSubviews();
          }
        }, W.prototype.stopAutoScroll = function () {
          if (this.Pc) {
            this.ah = this.Pn - this.Bn;
            var z = Math.min(1, this.Bn / this.Pn);
            this.Mn && (v = z, z = (v -= 1) * v * v * v * v + 1), this.uh = (L = 1 - z, this.An.mul(L));
          }
          var L, v;
          D.prototype.stopAutoScroll.call(this);
        }, W.prototype.$i = function () {
          {
            var z = this;
            if (this.Sh && this.ih) {
              {
                var L = this.Zi();
                this.ih(function () {
                  z.Sh = false, z.qn(cc.v2(0, 0));
                }, L);
              }
            } else this.gh && this.sh && this.bh() ? this.sh(function (v) {
              z.gh = false;
              var b = z.wc = z.lt.getCount(z);
              z.content.height = z.Ac * b;
              var U = z.Cc;
              if (U && U.length && U.length > 0) {
                var Q = U[U.length - 1].listViewIndex;
                for (z.content.off("position-changed", z.Gc, z); Q < b && z.kc();) z.Lc(), Q += 1;
                z.$c(), z.content.on("position-changed", z.Gc, z);
              }
              v && z.$i();
            }) : (this.Sh = false, this.gh = false, D.prototype.$i.call(this));
          }
        }, W.prototype.Ui = function (z) {
          {
            this.th || D.prototype.Ui.call(this, z);
          }
        }, __decorate([V(cc.Node)], W.prototype, "view", undefined), __decorate([V(cc.Widget)], W.prototype, "contentWidget", undefined), __decorate([H], W);
      }(cc.ScrollView);
    exports.default = M, cc._RF.pop();
  }
  function q(D) {
    {
      return D.y - D.height * D.anchorY + D.height;
    }
  }
  function m(D) {
    return D.y - D.height * D.anchorY;
  }
}
module.exports = ListView;
