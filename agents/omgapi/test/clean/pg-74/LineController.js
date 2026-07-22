// module: LineController
// Cocos 模块函数,参数 (require, module, exports) = (F, module, exports)
function LineController(F, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "15878i9jmRPk6rKeeTw6Ok4", "LineController")) {
    exports.__esModule = true, exports.default = undefined;
    var I = {};
    I.HEAD = 0;
    I.BODY = 1;
    I.TAIL = 2;
    var m = cc.Enum(I),
      B = cc.Class({
        'extends': cc.Component,
        'properties': {
          'headerLineMargin': 10,
          'lineMargin': 10,
          'tailLineMargin': 10,
          'headerLinePrefab': cc.Prefab,
          'linePrefab': cc.Prefab,
          'tailLinePrefab': cc.Prefab,
          'animtionHeaderLineName': "header_line",
          'animtionReverseHeaderLineName': "reverse_header_line",
          'animtionLineName': "line",
          'animtionReverseLineName': "reverse_line",
          'animtionTailLineName': "tail_line",
          'animtionReverseTailLineName': "reverse_tail_line",
          'animtionLoop': false,
          'animationInverted': false
        },
        'onLoad': function () {
          this.wc = {}, this.Bc = 0, this.Ac = false, this.Hc = false, this.Oc = new cc.NodePool("LinePrefabController"), this.Ic = new cc.NodePool("LinePrefabController"), this.Tc = new cc.NodePool("LinePrefabController"), this.Ec = 7, this.Nc = [];
          for (var X = 0; X < this.Ec - 1; X++) this.Nc.push(false);
        },
        'destroy': function () {
          this.hi = null, this.Oc.clear(), this.Ic.clear(), this.Tc.clear(), this.node.destroy(), this._super();
        },
        'setCallbackForAnimationFinish': function (X) {
          this.hi = X;
        },
        'addLine': function (X, Z) {
          var T = this;
          if (!this.wc[Z]) {
            var M = [];
            X.forEach(function (V, N, q) {
              if (0 != N) {
                var g,
                  K,
                  O = q[N - 1],
                  x = q[N];
                1 == N ? ((g = T.Ic.get()) || (g = cc.instantiate(T.headerLinePrefab)), K = T.headerLineMargin, g.typeIdentifier = m.HEAD) : N == q.length - 1 ? ((g = T.Tc.get()) || (g = cc.instantiate(T.tailLinePrefab)), K = T.tailLineMargin, g.typeIdentifier = m.TAIL) : ((g = T.Oc.get()) || (g = cc.instantiate(T.linePrefab)), K = T.lineMargin, g.typeIdentifier = m.BODY);
                var L = O.x,
                  H = O.y,
                  U = x.x,
                  k = x.y,
                  Y = (L + U) / 2,
                  y = (H + k) / 2,
                  z = 180 * Math.atan2(k - H, U - L) / Math.PI,
                  S = T.Gc(z),
                  P = Math.sqrt(Math.pow(U + -L, 2) + Math.pow(k - H, 2));
                g.x = Y, g.y = y, g.width = P + K, g.angle = -S, 0 == T.Ac && T.kc(g, "line").getComponent("LinePrefabController").setAnimTimeFrameCallback(T.Rc.bind(T)), T.node.addChild(g), M.push(g);
              }
            }), this.Ac = true, 1 == this.animationInverted && M.reverse();
            var C = this.jc(M);
            this.wc[Z] = C;
          }
        },
        'removeAllLines': function () {
          var X = this;
          this.stopAnimation(), Object.keys(this.wc).map(function (Z) {
            var T = X.wc[Z];
            X.Lc(T, Z);
          }), this.Ac = false, cc.sys.garbageCollect();
        },
        'removeLine': function (X) {
          var Z = this.wc[X];
          this.Lc(Z, X), this.Pc(), Object.keys(this.wc).length < 1 && (this.Hc = false);
        },
        'startAnimation': function () {
          0 == this.Hc && Object.keys(this.wc).length > 0 && (this.Hc = true, this.Bc = 0, this.Dc(), this.Nc[0] = true, this.Uc());
        },
        'stopAnimation': function () {
          this.Bc = 0, this.Hc = false;
        },
        'Pc': function () {
          var X = this,
            Z = Object.keys(this.wc);
          if (Z.length > 0) {
            Z.forEach(function (M) {
              X.wc[M][0].LinePrefabController.getAnimTimeFrameCallback() && (X.Ac = true);
            });
            var T = Math.floor(Math.random() * Math.floor(Z.length));
            this.wc[Z[T]].forEach(function (M) {
              M.LinePrefabController.setAnimTimeFrameCallback(X.Rc.bind(X));
            }), this.Ac = true;
          }
        },
        'Uc': function () {
          if (1 == this.Hc) {
            var X = this.Nc.indexOf(true);
            if (this.Bc = X, -1 == X) return;
            var Z = this.xc();
            Z.length > 0 && (Z.forEach(function (T) {
              var M = T.LineAnimation,
                C = this.Fc(T.Line.typeIdentifier);
              M.play(C);
            }, this), this.Nc[X] = false, ++X < this.Nc.length ? this.Nc[X] = true : this.Bc = X);
          }
        },
        'Rc': function () {
          this.xc().length < 1 ? this.Wc() : 1 == this.Hc && this.Uc();
        },
        'Fc': function (X) {
          var Z;
          switch (X) {
            case m.HEAD:
              Z = 1 == this.animationInverted ? this.animtionReverseHeaderLineName : this.animtionHeaderLineName;
              break;
            case m.TAIL:
              Z = 1 == this.animationInverted ? this.animtionReverseTailLineName : this.animtionTailLineName;
              break;
            default:
              Z = 1 == this.animationInverted ? this.animtionReverseLineName : this.animtionLineName;
          }
          return Z;
        },
        'xc': function () {
          var X = this,
            Z = [];
          return Object.keys(this.wc).map(function (T) {
            var M = X.wc[T];
            if (M.length >= X.Bc + 1) {
              var C = M[X.Bc];
              Z.push(C);
            }
          }), Z;
        },
        'Wc': function () {
          var X = this;
          1 == this.animtionLoop ? (Object.keys(this.wc).map(function (T) {
            X.wc[T].forEach(function (M) {
              var C = M.LineAnimation;
              C.setCurrentTime(0), C.stop();
            });
          }), this.Dc(), this.Nc[0] = true, this.scheduleOnce(this.Uc)) : this.Hc = false;
          var Z = this.hi;
          Z && Z();
        },
        'Lc': function (X, Z) {
          X && X.length > 0 && (X.forEach(function (T) {
            T.LinePrefabController.setAnimTimeFrameCallback(null);
            var M = T.LineAnimation;
            M.setCurrentTime(0), M.stop(), T.parent = null, T.Line.typeIdentifier == m.HEAD ? this.Ic.put(T.Line) : T.Line.typeIdentifier == m.TAIL ? this.Tc.put(T.Line) : this.Oc.put(T.Line);
          }, this), delete this.wc[Z]);
        },
        'Dc': function () {
          for (var X = 0; X < this.Nc.length; X++) this.Nc[X] = false;
        },
        'Gc': function (X) {
          return 0 == X ? 0 : X > 0 ? -1 * X : Math.abs(X);
        },
        'Jc': function (X) {
          var Z = this.angleMarginRatio;
          return Math.abs(X) / 180 * Z;
        },
        'jc': function (X) {
          var Z = this;
          if (!Array.isArray(X)) throw Error("Line Node is not an array");
          var T = [];
          return X.forEach(function (M) {
            var C = Object.create(null),
              V = Z.kc(M, "line");
            C.Line = M, C.LinePrefabController = V.getComponent("LinePrefabController"), C.LineAnimation = V.getComponent(cc.Animation), T.push(C);
          }), T;
        },
        'kc': function (X, Z) {
          var T = X.getChildByName(Z);
          return null !== T ? T : X;
        }
      });
    exports.default = B, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = LineController;
