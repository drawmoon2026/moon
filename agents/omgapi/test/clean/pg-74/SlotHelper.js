// module: SlotHelper
// Cocos 模块函数,参数 (require, module, exports) = (require, I, exports)
function SlotHelper(require, I, exports) {
  'use strict';

  if (!cc._RF.push(I, "f967cJUpgBPeZxa4E081RBj", "SlotHelper")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.SlotState = undefined;
    var X,
      Z = require("SlotItem"),
      T = require("SlotItemPool"),
      M = require("SlotItemHandler"),
      C = require("SlotDataHandler"),
      V = require("BaseScroller"),
      N = require("DefaultStartScroller"),
      q = require("DefaultStopScroller");
    (function (x) {
      x[x.IDLE = 0] = "IDLE", x[x.START = 1] = "START", x[x.STOP = 2] = "STOP";
    })(X = exports.SlotState || (exports.SlotState = {}));
    var g = {};
    g.spinType = undefined;
    g.reelData = undefined;
    g.symbolSize = undefined;
    g.numberOfColumn = undefined;
    g.numberOfRow = undefined;
    g.normalSymbolSpriteFrame = undefined;
    g.blurSymbolSpriteFrame = undefined;
    g.slotViews = undefined;
    g.slotScrollerController = undefined;
    g.getSymbolSize = undefined;
    g.getRandomSymbol = undefined;
    g.runScroller = undefined;
    g.topBufferRow = 1;
    g.bottomBufferRow = 1;
    g.normalSymbolScale = 1;
    g.blurSymbolScale = 1;
    g.blurSpeedFactor = 0.9;
    g.unblurSpeedFactor = 0.9;
    g.slotItem = Z.default;
    g.startScroller = N.default;
    g.stopScroller = q.default;
    var O = function () {
      function x() {
        this.$b = undefined, this.Zm = undefined, this.Ia = undefined, this.tp = undefined, this.ip = undefined, this.sp = undefined, this.ep = undefined, this.Oa = undefined, this.np = undefined, this.op = undefined, this.cp = undefined, this.hp = undefined, this.Ym = undefined, this.Ta = undefined, this.kb = undefined, this.rp = undefined;
      }
      return Object.defineProperty(x.prototype, "slotDataHandler", {
        'get': function () {
          return this.hp;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(x.prototype, "slotItemPool", {
        'get': function () {
          return this.Ym;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(x.prototype, "slotItemHandler", {
        'get': function () {
          return this.Ta;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(x.prototype, "slotViews", {
        'get': function () {
          return this.Oa;
        },
        'enumerable': false,
        'configurable': true
      }), Object.defineProperty(x.prototype, "isSlotViewBlur", {
        'get': function () {
          return this.Ia;
        },
        'enumerable': false,
        'configurable': true
      }), x.prototype.init = function (L) {
        K.getScroller = this.getScroller.bind(this), K.willChangeSlotState = this.willChangeSlotState.bind(this), K.onSlotStateEnd = this.onScrollerEnd.bind(this), K.slotViewGetItem = this.slotViewGetItem.bind(this), K.slotViewReleaseItem = this.slotViewReleaseItem.bind(this), K.onScrollerAccelerate = this.onScrollerAccelerate.bind(this), K.onScrollerDecelerate = this.onScrollerDecelerate.bind(this), K.onScrollerStop = this.onScrollerStop.bind(this);
        var H = (L = __assign(__assign({}, K), L)).symbolSize,
          U = this.$b = L.numberOfColumn,
          k = this.Zm = L.numberOfRow,
          Y = this.Oa = L.slotViews,
          y = this.np = L.slotScrollerController,
          z = !!L.getSymbolSize;
        this.tp = L.blurSpeedFactor, this.ip = L.unblurSpeedFactor;
        var P = L.topBufferRow,
          G = L.bottomBufferRow;
        this.sp = P * (z ? 2 : 1) + this.Zm, this.ep = G * (z ? 2 : 1) + 1;
        for (var A = this.Ia = [], w = 0; w < k; w++) A[w] = false;
        (this.Ym = L.slotItemPool ? L.slotItemPool : new T.default()).init({
          'slotItem': L.slotItem,
          'normalSpriteFrame': L.normalSymbolSpriteFrame,
          'blurSpriteFrame': L.blurSymbolSpriteFrame,
          'normalScale': L.normalSymbolScale,
          'blurScale': L.blurSymbolScale,
          'getSymbolZOrder': L.getSymbolZOrder
        }), (this.Ta = L.slotItemHandler ? L.slotItemHandler : new M.default()).init(k), (this.hp = L.slotDataHandler ? L.slotDataHandler : new C.default()).init({
          'slotViews': Y,
          'reelData': L.reelData,
          'largeSymbolDatas': L.largeSymbolDatas,
          'spinType': L.spinType,
          'numberOfColumn': U,
          'numberOfRow': k,
          'topBufferRow': P,
          'bottomBufferRow': G,
          'getSymbolSize': L.getSymbolSize,
          'getRandomSymbol': L.getRandomSymbol
        });
        var W = this.op = [],
          D = this.cp = [],
          J = this.scrollerGetStopDistance.bind(this),
          E = this.scrollerScroll.bind(this);
        for (w = 0; w < Y.length; w++) {
          var Q0 = {};
          Q0.functionalRow = k;
          Q0.symbolSize = H;
          Q0.getItem = L.slotViewGetItem;
          Q0.releaseItem = L.slotViewReleaseItem;
          Q0.sortBottomItemToFront = L.sortBottomItemToFront;
          var Q1 = {};
          Q1.scrollCallback = E;
          Y[w].init(Q0), (W[w] = new L.startScroller(__assign(Q1, L.startScrollerConfig))).on(V.SCROLLER_EVENT.ACCELERATE, L.onScrollerAccelerate);
          var Q2 = {};
          Q2.scrollCallback = E;
          Q2.getStopDistance = J;
          var Q3 = D[w] = new L.stopScroller(__assign(Q2, L.stopScrollerConfig));
          Q3.on(V.SCROLLER_EVENT.DECELERATE, L.onScrollerDecelerate), Q3.on(V.SCROLLER_EVENT.END, L.onScrollerStop);
        }
        var Q4 = {};
        Q4.getScroller = L.getScroller;
        Q4.releaseScroller = L.releaseScroller;
        Q4.runScroller = L.runScroller;
        Q4.willChangeSlotState = L.willChangeSlotState;
        Q4.didChangeSlotState = L.didChangeSlotState;
        Q4.onSlotStateEnd = L.onSlotStateEnd;
        this.ap(), y.init(Y, Q4), y.setSlotState(X.IDLE);
      }, x.prototype.changeSymbol = function (p, b) {
        var L = this.Ta.getSlotItems(p)[0];
        this.Ym.updateSlotItemSymbolIndex(L, b);
      }, x.prototype.setOnReelStopCallback = function (p) {
        this.kb = p;
      }, x.prototype.setOnSlotStopCallback = function (p) {
        this.rp = p;
      }, x.prototype.setSpinType = function (p) {
        this.hp.setSpinType(p);
      }, x.prototype.setReelData = function (p, b) {
        this.hp.setReelData(p, b);
      }, x.prototype.updateReelData = function (p, b) {
        this.hp.updateReelData(p, b);
      }, x.prototype.getReelStopPosition = function (p) {
        return this.hp.getReelDataPosition(p);
      }, x.prototype.getFormattedData = function (p) {
        return this.hp.getFormattedData(p);
      }, x.prototype.overwriteFormattedData = function (p, b, L) {
        this.hp.overwriteFormattedData(p, b, L);
      }, x.prototype.reloadSlot = function () {
        for (var p = this.hp, b = this.Oa, L = 0, H = this.Oa.length; L < H; L++) p.setReelDataPosition(L, 0), b[L].reloadItems();
        this.ap();
      }, x.prototype.setFunctionalRow = function (p) {
        this.Oa.forEach(function (b) {
          return b.setFunctionalRow(p);
        });
      }, x.prototype.setSlotAnchor = function (p) {
        this.Oa.forEach(function (b) {
          return b.setSlotAnchor(p);
        });
      }, x.prototype.setItemsVisible = function (p) {
        for (var b, L = [], H = 1; H < arguments.length; H++) L[H - 1] = arguments[H];
        (b = this.Ta).getSlotItems.apply(b, __spread(L)).forEach(function (U) {
          return U.visible = p;
        });
      }, x.prototype.setItemsBlur = function (p, b) {
        var L = this.Oa[b];
        this.Ia[b] = p;
        for (var H = L.getVisibleItems(), U = 0, k = H.length; U < k; U++) H[U].setBlur(p);
      }, x.prototype.getItemsVisible = function () {
        for (var p, b = [], L = 0; L < arguments.length; L++) b[L] = arguments[L];
        var H = [];
        return (p = this.Ta).getSlotItems.apply(p, __spread(b)).forEach(function (U) {
          return H.push(U.visible);
        }), H;
      }, x.prototype.getItemsWorldPositionAR = function () {
        for (var p, b = [], L = 0; L < arguments.length; L++) b[L] = arguments[L];
        var H = cc.v2(),
          U = [];
        return (p = this.Ta).getSlotItems.apply(p, __spread(b)).forEach(function (k) {
          return U.push(k.node.convertToWorldSpaceAR(H));
        }), U;
      }, x.prototype.scrollerAtIndex = function (p) {
        return this.np.scrollerAtIndex(p);
      }, x.prototype.indexOfScroller = function (p) {
        return this.np.indexOfScroller(p);
      }, x.prototype.getSlotState = function () {
        return this.np.getSlotState();
      }, x.prototype.startScroll = function () {
        var p = this.np;
        p.getSlotState() === X.IDLE && (this.hp.reset(), p.setSlotState(X.START));
      }, x.prototype.stopScroll = function () {
        var p = this.np;
        p.getSlotState() === X.START && p.setSlotState(X.STOP);
      }, x.prototype.instantStopScroll = function () {
        var p = this.np;
        p.getSlotState() !== X.IDLE && (p.setSlotState(X.STOP), p.endCurrentState());
      }, x.prototype.setStartScrollerConfig = function (p, b) {
        this.op[p].setConfig(b);
      }, x.prototype.setStopScrollerConfig = function (p, b) {
        this.cp[p].setConfig(b);
      }, x.prototype.updateStartScrollerRunTimeConfig = function (p, b) {
        this.op[p].updateRunTimeConfig(b);
      }, x.prototype.updateStopScrollerRunTimeConfig = function (p, b) {
        this.cp[p].updateRunTimeConfig(b);
      }, x.prototype.ap = function () {
        var p = this.Ta;
        p.reset(), this.Oa.forEach(function (b, L) {
          b.getFunctionalItems().forEach(function (H) {
            -1 !== H.symbolIndex && p.setSlotItem(L, H);
          });
        });
      }, x.prototype.slotViewGetItem = function (p, b) {
        var L = this.hp.getItemInfo(p, b),
          H = this.Oa.indexOf(p),
          U = this.Ym.getSlotItem(L.symbolIndex, this.Ia[H]);
        return U.positionIndex = L.positionIndex, U.symbolColumn = L.symbolColumn, U.symbolRow = L.symbolRow, U;
      }, x.prototype.slotViewReleaseItem = function (p, b) {
        this.Ym.releaseSlotItem(b);
      }, x.prototype.scrollerScroll = function (p, b) {
        var L = this.np.indexOfScroller(p);
        this.Oa[L].changePositionY(b);
      }, x.prototype.scrollerGetStopDistance = function (p) {
        var b,
          L = this.np.indexOfScroller(p),
          H = this.Oa[L];
        return b = p.getRunTimeConfig().maxSpeed > 0 ? H.getNextBottomIndex(this.sp) : H.getNextTopIndex(this.ep), this.hp.setReelDataPosition(L, b), H.getDistanceToIndex(b);
      }, x.prototype.onScrollerAccelerate = function (p) {
        var b = p.speedFactor,
          L = this.Ia,
          H = this.np.indexOfScroller(p.scroller);
        b > this.tp && !L[H] && this.setItemsBlur(true, H);
      }, x.prototype.onScrollerDecelerate = function (p) {
        var b = p.speedFactor,
          L = this.Ia,
          H = this.np.indexOfScroller(p.scroller);
        b < this.ip && L[H] && this.setItemsBlur(false, H);
      }, x.prototype.onScrollerStop = function (p) {
        var b = this.np.indexOfScroller(p.scroller),
          L = this.Oa[b],
          H = this.Ta;
        L.resetPositionIndex(), L.getFunctionalItems().forEach(function (k) {
          -1 !== k.symbolIndex && H.setSlotItem(b, k);
        });
        var U = this.kb;
        U && U(b);
      }, x.prototype.getScroller = function (p, b, L) {
        return L === X.START ? this.op[p] : L === X.STOP ? this.cp[p] : undefined;
      }, x.prototype.willChangeSlotState = function (p, b) {
        p === X.IDLE && b === X.STOP && this.np.endCurrentState();
      }, x.prototype.onScrollerEnd = function (p) {
        if (p === X.STOP) {
          this.np.setSlotState(X.IDLE);
          var b = this.rp;
          b && b();
        }
      }, x;
    }();
    exports.default = O, cc._RF.pop();
  }
}
module.exports = SlotHelper;
