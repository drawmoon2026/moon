// module: SlotController
// Cocos 模块函数,参数 (require, module, exports) = (require, module, exports)
function SlotController(require, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "b28d8bhcJFHQLAbJdbBzCKn", "SlotController")) {
    exports.__esModule = true, exports.default = undefined;
    var x = {};
    x.STOPPED = 0;
    x.SPINNING = 1;
    x.STOPPING = 2;
    var C = require("SlotProperties"),
      H = T(require("SlotView")),
      V = T(require("SlotItemController")),
      M = T(require("SimpleStartScroller")),
      q = T(require("InterruptableScroller")),
      D = T(require("PossibleWinScroller")),
      W = T(require("BounceScatterStopScroller")),
      k = require("AudioManager"),
      z = function (Y) {
        if (Y && Y.__esModule) return Y;
        if (null === Y || "object" != typeof Y && "function" != typeof Y) return {
          'default': Y
        };
        var X = R(undefined);
        if (X && X.has(Y)) return X.get(Y);
        var E = {},
          F = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var N in Y) if ("default" !== N && Object.prototype.hasOwnProperty.call(Y, N)) {
          var Z = F ? Object.getOwnPropertyDescriptor(Y, N) : null;
          Z && (Z.get || Z.set) ? Object.defineProperty(E, N, Z) : E[N] = Y[N];
        }
        return E.default = Y, X && X.set(Y, E), E;
      }(require("SlotStateMachine")),
      L = require("SettingMenuHelper"),
      U = require("PGGDataSource"),
      Q = require("Utils"),
      w = cc.Enum(x),
      P = cc.Class({
        'extends': cc.Component,
        'properties': {
          'slotItem': cc.Prefab,
          'Y_': [],
          'slotViewNodes': [cc.Node],
          'Q_': 0,
          'nu': undefined,
          'eu': undefined,
          'symbolImages': [cc.SpriteFrame],
          'blurredSymbolImages': [cc.SpriteFrame],
          'symbolShadowImages': [cc.SpriteFrame],
          'multiplySymbol': [cc.SpriteFrame],
          'multiplyBlurSymbol': [cc.SpriteFrame],
          'paySelectHolder': cc.Node,
          'fastSpinHolder': cc.Node,
          'scrollerSpineHolder': cc.Node,
          'X_': undefined,
          'Z_': [],
          'tp': [],
          'ip': [],
          'sp': undefined,
          'ep': undefined,
          'np': undefined,
          'op': undefined,
          'cp': undefined,
          'hp': undefined,
          'rp': undefined,
          'ap': undefined
        },
        'init': function (Y, X, E, F) {
          var N = this;
          Y = Y.length > 0 ? Y : [], this.up = Y, this.lp = X, this.fp = this.dp(Y), this.nu = E, this.op = new z.default(), this.vp = F;
          var Z = this._p = this.getComponent("SlotScroller");
          Z.delegate = this, Z.setScrollState(w.STOPPED), C.slotProperties.setSlotController(this), C.slotProperties.registerReusePrefab("slotItem", this.slotItem, V.default, 25);
          var g = this.pp.bind(this);
          this.slotViewNodes.forEach(function (A, G) {
            var J = A.getComponent("SlotView");
            J && (J.Xa = G, J.dataSource = N, N.bp(J, G, g), J.scrollToRowAtIndex(1, H.default.RowPositionBottom, false), N.Y_.push(J));
          });
        },
        'setReelData': function (Y, X, E, F) {
          this.fp = this.dp(Y), this.up = Y, this.nu = E, this.lp = X, this.eu = F;
        },
        'setSpinTiming': function (Y, X) {
          this.ep = Y, this.np = X;
        },
        'setOnClickCallback': function (Y) {
          this.hp = Y;
        },
        'setStopCompletedCallback': function (Y) {
          this.rp = Y;
        },
        'setOnEachStopColumnCallback': function (Y) {
          this.ap = Y;
        },
        'setFastSpinEndCallback': function (Y) {
          this.mp = Y;
        },
        'setClickEffectController': function (Y) {
          this.X_ = Y;
        },
        'setPaySelectController': function (Y) {
          Y && this.paySelectHolder.addChild(Y);
        },
        'getStopStyle': function () {
          return this.op.getStopStyle();
        },
        'getFastSpinAnimationController': function () {
          return this.fastSpinHolder.getComponent("FastSpinAnimationController");
        },
        'getScrollerManagerController': function () {
          return this.scrollerSpineHolder.getComponent("ScrollerManagerController");
        },
        'spin': function (Y) {
          if (undefined === Y && (Y = false), !isNaN(this.ep) && !isNaN(this.np)) {
            var X = this._p;
            X.getScrollState() === w.STOPPED && (X.setScrollState(w.SPINNING), this.Sp(), this.gp(Y), this.op.spin(this.ep, this.np), Y && this.markFastStop(), this.scheduleOnce(this.Cp.bind(this), 0.3));
          }
        },
        'stopSpin': function () {
          if (this._p.getScrollState() === w.SPINNING) {
            var Y = U.pgDataSource.transactionModel.piggyFeature;
            Y && L.settingMenuHelper.turboSpinOn ? this.featureFastStop() : Y ? this.featureStopSpin() : this.op.stop(this.yp.bind(this));
          }
        },
        'fastStop': function () {
          if (this._p.getScrollState() !== w.STOPPED) {
            var Y = U.pgDataSource.transactionModel.piggyFeature;
            Y && L.settingMenuHelper.turboSpinOn ? this.featureFastStop() : Y ? (this.unmarkFastStop(), this.featureStopSpin()) : this.op.fastStop(this.Mp.bind(this));
          }
        },
        'markFastStop': function () {
          this._p.getScrollState() === w.SPINNING && this.op.markFastStop();
        },
        'unmarkFastStop': function () {
          this.op.unmarkFastStop();
        },
        'featureStopSpin': function () {
          this._p.getScrollState() === w.SPINNING && this.op.stop(this.Ap.bind(this));
        },
        'featureFastStop': function () {
          this._p.getScrollState() !== w.STOPPED && this.op.fastStop(this.Pp.bind(this));
        },
        'resetSlot': function (Y, X, E, F) {
          var N = this;
          this.setReelData(Y, X, E, F);
          var Z = this.getSlotItemWithIndex(C.slotProperties.getAllSlotIndexes()),
            g = this.Y_,
            A = [900, 600, 300];
          Z.forEach(function (G, J) {
            G.active = true;
            var S = Math.floor(J / C.NumberOfRow),
              K = G.getComponent("SlotItemController");
            if (G.y = A[J % C.NumberOfRow], K.clear(), E && Y[J] === C.SlotIndexes.WILD && 4 === J) {
              var l0 = E[4];
              N.Bp(g[S], G, l0);
            } else N.Op(g[S], G, Y[J]);
            G.y -= N.Ip(X[S]);
          });
        },
        'dimSlotItemByColumn': function (Y) {
          this.getSlotItemWithIndex(Y).forEach(function (X, E) {
            var F = Math.floor(E / C.NumberOfRow) / 20,
              N = X.getComponent("SlotItemController");
            (0, Q.delayCallback)(F)(N.blacken.bind(N));
          });
        },
        'getSlotItemWithIndex': function (Y) {
          var X = this;
          if (this._p.getScrollState() === w.STOPPED) {
            var E = [];
            return Y.forEach(function (F) {
              if (Number.isInteger(F) && F < C.NumberOfColumn * C.NumberOfRow) {
                var N = Math.floor(F / C.NumberOfRow),
                  Z = C.NumberOfRow - 1 - F % C.NumberOfRow,
                  g = X.Y_[N].visibleItems()[Z];
                E.push(g);
              }
            }), E;
          }
        },
        'getSlotViewWithIndex': function (Y) {
          if (this._p.getScrollState() === w.STOPPED && Number.isInteger(Y) && Y < C.NumberOfColumn * C.NumberOfRow) {
            var X = Math.floor(Y / C.NumberOfRow);
            return this.Y_[X];
          }
        },
        'didReloadData': function (Y) {
          C.slotProperties.init(Y);
          var X = Y.Xa,
            E = this.lp,
            F = this.Ip(E[X]);
          if ((0, Q.delayCallback)(0)(function () {
            Y.node.children.forEach(function (Z) {
              Z.y -= F;
            });
          }), this.Q_++, this.Q_ === this.Y_.length - 1) {
            var N = this.vp;
            this.vp = undefined, N && N(), this.Q_ = 0;
          }
        },
        'getCount': function () {
          return 20000;
        },
        'getItem': function (Y, X) {
          var E;
          if (this._p.getScrollState() === w.STOPPING) {
            var F = Y.Gp;
            X >= F && (X -= F);
          }
          X < 4 && (E = this.fp[Y.Xa][X]), undefined === E && (E = X % 2 == 0 && Math.random() < 0.3 ? C.SlotIndexes.WILD : this.Np());
          var N = C.slotProperties.dequeueReusableItem("slotItem");
          if (1 === Y.Xa && E === C.SlotIndexes.WILD) {
            var Z = (this.nu ? this.nu : {})[C.NumberOfRow * Y.Xa + (C.NumberOfRow - X)];
            Z || (Z = this.Tp()), this.Bp(Y, N, Z);
          } else this.Op(Y, N, E);
          return N;
        },
        'releaseItem': function (Y, X, E) {
          C.slotProperties.enqueueReusableItem(E);
        },
        'getSymbolSpriteFrames': function (Y) {
          var E = this.symbolImages,
            F = this.symbolShadowImages;
          var N = {};
          N.blurred = this.blurredSymbolImages[X];
          N.normal = E[X];
          N.shadow = F[X];
          return N;
        },
        'getWildSymbolSpriteFrames': function (Y) {
          var X = this.multiplySymbol,
            E = this.multiplyBlurSymbol;
          switch (Y) {
            case C.WildSlotIndexes.ONE:
              var F = {};
              F.blurred = E[0];
              F.normal = X[0];
              return F;
            case C.WildSlotIndexes.TWO:
              var N = {};
              N.blurred = E[1];
              N.normal = X[1];
              return N;
            case C.WildSlotIndexes.FIVE:
              var Z = {};
              Z.blurred = E[2];
              Z.normal = X[2];
              return Z;
            case C.WildSlotIndexes.TEN:
              var g = {};
              g.blurred = E[3];
              g.normal = X[3];
              return g;
            default:
              var A = {};
              A.blurred = E[0];
              A.normal = X[0];
              return A;
          }
        },
        'willChangeScrollState': function (Y, X, E) {
          X === w.STOPPED && E === w.STOPPING && this.tp.forEach(function (F) {
            F.resetInterrupt();
          });
        },
        'getScroller': function (Y, X, E, F) {
          var N = this.eu;
          return F === w.SPINNING ? this.Z_[X] : F === w.STOPPING && 1 === X && N ? this.sp : F === w.STOPPING ? this.tp[X] : undefined;
        },
        'releaseScroller': function () {},
        'didChangeScrollState': function () {},
        'didStopScrolling': function () {
          var Y = this.op;
          Y.getStopStyle() === z.StopStyle.FAST && (k.GeneralAudioPool.spin_reel.isPlaying() && k.GeneralAudioPool.spin_reel.stop(), k.GeneralAudioPool.spin_reel_quickstop.play()), this.ap = undefined, this._p.setScrollState(w.STOPPED), Y.stopped(), this.hp = undefined, this.Hp();
          var X = this.rp;
          this.rp = undefined, X && X();
        },
        'Rp': function (Y, X) {
          var F = X.target.getComponent("SlotView");
          if (E > 0.98 && !F.kp) {
            F.kp = true;
            for (var N = F.visibleItems(), Z = 0, g = N.length; Z < g; Z++) N[Z].getComponent("SlotItemController").setBlurred(true);
          }
        },
        'pp': function (Y, X) {
          var E = this._p.indexOfScroller(Y),
            F = this.lp,
            N = this.Y_[E],
            Z = N.indexAtPoint(-(X - N.node.parent.height)) + 2;
          return N.Gp = Z - 1, -N.pointForIndex(Z) - this.Ip(F[E]);
        },
        'Lp': function (Y, X) {
          var F = X.target.getComponent("SlotView"),
            N = this.op;
          if (E < 0.1 && this.mp && X === this.sp) {
            var Z = this.mp;
            this.mp = undefined, Z && Z();
          }
          if (E < 0.27 && 1 === F.Xa && k.GeneralAudioPool.spin_reel.isPlaying() && (k.GeneralAudioPool.spin_reel.stop(), N.getStopStyle() !== z.StopStyle.FAST && k.GeneralAudioPool.spin_reel_stop.play()), E < 0.27 && F.kp || X === this.sp && F.kp) {
            F.kp = false;
            for (var g = F.visibleItems(), A = 0, G = g.length; A < G; A++) g[A].getComponent("SlotItemController").setBlurred(false);
          }
        },
        'Ep': function (Y) {
          var X = Y.target.getComponent("SlotView");
          X.scrollToRowAtIndexSync(1, H.default.RowPositionBottom, true), this.op.getStopStyle, z.StopStyle.FAST, this.ap && this.ap(X);
        },
        'yp': function () {
          for (var Y = this._p, X = 0; X < C.NumberOfColumn; X++) {
            var E = this.tp[X] = this.ip[X];
            switch (X) {
              case 0:
                E.delay = 0;
                break;
              case 1:
                E.delay = 0.2;
                break;
              case 2:
                E.delay = 0;
            }
          }
          Y.setScrollState(w.STOPPING);
        },
        'Mp': function () {
          var Y = this._p;
          this.Hp();
          for (var X = 0; X < C.NumberOfColumn; X++) {
            var E = this.tp[X] = this.ip[X];
            E.delay = 0.2, E.interrupt();
          }
          Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
        },
        'Ap': function () {
          var Y = this._p;
          this.Hp();
          for (var X = 0; X < C.NumberOfColumn; X++) {
            var E = this.tp[X] = this.ip[X];
            this.eu && 1 === X ? this.sp.delay = 0.8 : (E.delay = 0.2, E.interrupt());
          }
          Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
        },
        'Pp': function () {
          var Y = this._p;
          this.Hp();
          for (var X = 0; X < C.NumberOfColumn; X++) {
            var E = this.tp[X] = this.ip[X];
            1 === X ? this.sp.delay = 0.2 : (E.delay = 0.2, E.interrupt());
          }
          Y.getScrollState() === w.SPINNING && Y.setScrollState(w.STOPPING);
        },
        'gp': function () {
          for (var Y = this.Z_, X = 0; X < Y.length; X++) Y[X].delay = 1 === X ? 0.3 : 0;
        },
        'Cp': function () {
          k.GeneralAudioPool.spin_reel.play();
        },
        'Ip': function (Y) {
          return this.cp || (this.cp = C.slotProperties.getSlotItemSize().y / 2), Y === C.SlotIndexes.BLANK ? this.cp : 0;
        },
        'Np': function () {
          var Y = this.symbolImages.length - 2;
          return Math.floor((Y - 1) * Math.random()) + 1;
        },
        'Tp': function () {
          var Y = this.multiplySymbol.length - 1;
          return [C.WildSlotIndexes.ONE, C.WildSlotIndexes.TWO, C.WildSlotIndexes.FIVE, C.WildSlotIndexes.TEN][Math.floor(Y * Math.random())];
        },
        'dp': function (Y) {
          for (var X = [], E = 0; E < C.NumberOfColumn; E++) X.push([]);
          if (!Y) return X;
          for (var F = 0; F < C.NumberOfColumn; F++) {
            var N = X[F],
              Z = this.Np(),
              g = this.Np();
            N[0] = Z, N[3] = g;
            for (var A = 0; A < C.NumberOfRow; A++) N[A + 1] = Y[F * C.NumberOfRow + C.NumberOfRow - 1 - A];
          }
          return X;
        },
        'bp': function (Y, X, E) {
          var F = {};
          F.scrollSpeed = 4000;
          F.accelerateDuration = 0.2;
          F.accelerateFactor = 1.75;
          F.accelerateDistance = 600;
          F.bounceDistance = 50;
          F.bounceDuration = 0.2;
          F.bounceFactor = 1.84;
          var N,
            Z = this.Z_[X] = new M.default(Y.node, F);
          if (Z.delay = 0, Z.on("accelerate", this.Rp, this, false), 1 === X) {
            var g = {};
            g.scrollSpeed = 6000;
            g.scatterScrollSpeed = 1600;
            g.targetYFunc = E;
            g.decelerateSpeed = 0;
            g.bounceDistance = 50;
            g.bounceDuration = 0.3;
            g.bounceFactor = 1;
            var A = this.sp = new W.default(Y.node, g);
            var G = {};
            G.scrollSpeed = 4000;
            G.decelerateSpeed = 4000;
            G.targetYFunc = E;
            G.bounceDistance = 80;
            G.bounceDuration = 0.3;
            G.bounceFactor = 1;
            A.on("stop", this.Ep, this, false), A.on("decelerate", this.Lp, this, false), (N = this.ip[X] = this.tp[X] = new D.default(Y.node, G)).on("stop", this.Ep, this, false), N.on("decelerate", this.Lp, this, false);
          } else (N = this.ip[X] = this.tp[X] = new q.default(Y.node, {
            'scrollSpeed': 4000,
            'decelerateSpeed': 4000,
            'targetYFunc': E,
            'bounceDistance': 80,
            'bounceDuration': 0.3,
            'bounceFactor': 1
          })).on("stop", this.Ep, this, false), N.on("decelerate", this.Lp, this, false);
        },
        'Op': function (Y, X, E) {
          var F = X.getComponent("SlotItemController"),
            N = this.getSymbolSpriteFrames(E),
            Z = N.blurred,
            g = N.normal,
            A = N.shadow;
          F.setSymbol(g, Z, A), F.setBlurred(Y.kp);
        },
        'Bp': function (Y, X, E) {
          var F = X.getComponent("SlotItemController"),
            N = this.getWildSymbolSpriteFrames(E),
            Z = N.blurred,
            g = N.normal;
          F.setSymbol(g, Z), F.setBlurred(Y.kp);
        },
        'Sp': function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this.onSlotRegionClicked, this);
        },
        'Hp': function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this.onSlotRegionClicked, this);
        },
        'onSlotRegionClicked': function (Y) {
          if (this.hp) {
            this.Hp(), Y && (this.X_.showClickEffect(Y.getLocation()), this.X_.showFlash());
            var X = this.hp;
            this.hp = undefined, X && X();
          }
        }
      });
    exports.default = P, module.exports = exports.default, cc._RF.pop();
  }
  function R(Y) {
    if ("function" != typeof WeakMap) return null;
    var X = new WeakMap(),
      E = new WeakMap();
    return (R = function (F) {
      return F ? E : X;
    })(Y);
  }
  function T(Y) {
    return Y && Y.__esModule ? Y : {
      'default': Y
    };
  }
}
module.exports = SlotController;
