// module: SlotView
// Cocos 模块函数,参数 (require, module, exports) = (j, module, exports)
function SlotView(j, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "65850gIkU5ByodRt+g1ZDmx", "SlotView")) {
    exports.__esModule = true, exports.default = undefined;
    var B = {};
    B.RowPositionBottom = 0;
    B.RowPositionMiddle = 1;
    B.RowPositionTop = 2;
    var x = cc.Class({
      'extends': cc.Component,
      'statics': B,
      'properties': {
        'rowHeight': 0,
        'dataSource': {
          'get': function () {
            {
              return this.lt;
            }
          },
          'set': function (C) {
            this.lt !== C && (this.lt = C, this.reloadData());
          },
          'visible': false
        },
        'lt': undefined,
        'Sb': false,
        'gb': false,
        'Cb': [],
        'yb': 0,
        'Mb': 0,
        'wb': 0,
        'Ab': 0,
        'Pb': false
      },
      'reloadData': function () {
        this.Sb = false, this.Bb(), this.scheduleOnce(this.reloadDataSync);
      },
      'reloadDataSync': function () {
        this.Sb = false, this.Bb(), this.enabledInHierarchy ? (this.Ob(), this.unschedule(this.reloadDataSync)) : this.gb = true;
      },
      'scrollToRowAtIndex': function (C, H, r) {
        var V = this.pointForIndex(C, H);
        this.setContentOffset(-V, r);
      },
      'scrollToRowAtIndexSync': function (C, H, r) {
        var V = this.pointForIndex(C, H);
        this.setContentOffsetSync(-V, r);
      },
      'setContentOffset': function (C) {
        isNaN(C) || (this.yb = C, this.scheduleOnce(this.Ib));
      },
      'Ib': function () {
        this.setContentOffsetSync(this.yb);
      },
      'setContentOffsetSync': function (C, H) {
        isNaN(C) || (this.Pb = H, this.node.y = C, this.unschedule(this.Ib));
      },
      'indexForItem': function (C) {
        return C.sv_posindex;
      },
      'indexAtPoint': function (C) {
        {
          var H = this.Mb;
          return isNaN(H) ? -1 : (C = cc.misc.clampf(C, 0, H), Math.floor(C / this.rowHeight));
        }
      },
      'pointForIndex': function (C, H) {
        {
          var r = this.Mb,
            V = this.wb;
          if (isNaN(r) || isNaN(V)) return NaN;
          var M = this.rowHeight,
            q = C * M;
          return 1 === H ? q -= (V - M) / 2 : 2 === H && (q -= V - M), cc.misc.clampf(q, 0, r - M);
        }
      },
      'itemAtIndex': function (C) {
        for (var H = this.Cb, r = 0, V = H.length; r < V; r++) {
          {
            var M = H[r];
            if (M.sv_posindex === C) return M;
          }
        }
      },
      'visibleItems': function () {
        return this.Cb;
      },
      'onEnable': function () {
        this.node.on("position-changed", this.Gb, this), this.wb = this.node.parent.height, this.gb ? (this.gb = false, this.Ob(), this.unschedule(this.reloadDataSync)) : this.Gb();
      },
      'onDisable': function () {
        this.node.off("position-changed", this.Gb, this);
      },
      'Gb': function () {
        {
          this.Sb ? this.Pb ? (this.Pb = false, this.Nb()) : this.Tb() : this.Pb = false;
        }
      },
      'Nb': function () {
        var C = -this.node.y,
          H = C - this.Ab;
        if (0 !== H) {
          this.Ab = C;
          for (var V = this.rowHeight, M = Math.max(0, C), q = this.Cb, m = q.length, D = Math.floor(M / V), W = 0; W < m; W++) {
            var k = q[W];
            k.y += H, k.sv_posindex = D + W;
          }
        }
      },
      'Tb': function () {
        var H = this.node,
          V = -H.y,
          q = V - this.Ab;
        if (0 !== q) {
          this.Ab = V;
          var D,
            W,
            k = this.lt,
            z = this.Cb,
            L = z.length,
            U = this.wb,
            Q = this.Mb,
            w = this.rowHeight,
            P = H.width;
          if (q > 0) {
            for (D = Math.max(-w, V - w); L;) {
              var R = z[0];
              if (!(R.y <= D)) break;
              H.removeChild(R), z.shift(), k.releaseItem(this, R.sv_posindex, R), L--;
            }
            if (L) {
              W = Math.min(Q - w, V + U - w);
              for (var T = z[L - 1]; T.y < W;) {
                var Y = T.sv_posindex + 1,
                  X = k.getItem(this, Y);
                X.height = w, X.width = P, X.x = 0, X.y = Y * w, X.sv_posindex = Y, H.addChild(X), L = z.push(X), T = X;
              }
            }
          } else {
            {
              for (W = Math.min(Q - w, V + U); L;) {
                {
                  var E = z[L - 1];
                  if (!(E.y >= W)) break;
                  H.removeChild(E), z.pop(), k.releaseItem(this, E.sv_posindex, E), L--;
                }
              }
              if (L) {
                D = Math.max(0, V);
                for (var F = z[0]; F.y > D;) {
                  var N = F.sv_posindex - 1,
                    Z = k.getItem(this, N);
                  Z.height = w, Z.width = P, Z.x = 0, Z.y = N * w, Z.sv_posindex = N, H.addChild(Z), L = z.unshift(Z), F = Z;
                }
              }
            }
          }
          if (!L) {
            {
              W = Math.min(Q - w, V + U);
              for (var A = Math.floor((D = Math.max(0, V)) / w), G = Math.floor(W / w); J <= G; J++) {
                var K = k.getItem(this, J);
                K.height = w, K.width = P, K.y = J * w, K.sv_posindex = J, H.addChild(K), z.push(K);
              }
            }
          }
        }
      },
      'Ob': function () {
        {
          var C = this.node;
          C.removeAllChildren(true);
          for (var H = this.Cb, V = this.lt, M = H.length, q = 0; q < M; q++) {
            var m = H[q];
            V.releaseItem(this, m.sv_posindex, m);
          }
          H.splice(0, M);
          var D = V ? V.getCount(this) : 0;
          if (V && D) {
            var W = this.wb,
              k = this.Mb,
              z = this.rowHeight,
              L = C.width,
              U = -C.y;
            this.Ab = U, U + W > k && (U = k - W, C.y = -U), C.height = k;
            for (var Q = Math.max(0, U), w = Math.min(k - z, U + W), P = Math.floor(Q / z), R = Math.floor(w / z); T <= R; T++) {
              {
                var Y = V.getItem(this, T);
                Y.height = z, Y.width = L, Y.y = T * z, Y.sv_posindex = T, C.addChild(Y), H.push(Y);
              }
            }
            this.Sb = true, V.didReloadData(this);
          }
        }
      },
      'Bb': function () {
        var C = this.lt;
        if (C) {
          var H = C.getCount(this);
          this.Mb = Math.max(H * this.rowHeight, 0);
        } else this.Mb = NaN;
      }
    });
    exports.default = x, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SlotView;
