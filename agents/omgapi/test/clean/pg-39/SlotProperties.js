// module: SlotProperties
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function SlotProperties(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "9ee5d2dkm1POa5gUOJWrwrS", "SlotProperties")) {
    exports.__esModule = true, exports.slotProperties = exports.WildSlotIndexes = exports.SlotIndexes = exports.NumberOfRow = exports.NumberOfColumn = undefined;
    var x = {};
    x.WILD = 0;
    x.GOLD_PIG = 1;
    x.INGOT = 2;
    x.JADE = 3;
    x.BAR_3 = 4;
    x.BAR_2 = 5;
    x.BAR_1 = 6;
    x.BLANK = 7;
    var C,
      H = (C = require("CanvasResizeBroadcaster")) && C.__esModule ? C : {
        'default': C
      },
      r = cc.Enum(x);
    exports.SlotIndexes = r;
    var V = {};
    V.ONE = 1;
    V.TWO = 2;
    V.FIVE = 5;
    V.TEN = 10;
    var M = cc.Enum(V);
    exports.WildSlotIndexes = M, exports.NumberOfColumn = 3, exports.NumberOfRow = 3;
    var q = new (cc.Class({
      'name': "SlotProperties",
      'extends': cc.Object,
      'ctor': function () {
        this.slotItemCoordinates = [], this.slotItemWorldCoordinates = [], this.dirtyCoordinatesFlag = [];
        for (var m = 0; m < 3; m++) this.slotItemCoordinates.push([]), this.slotItemWorldCoordinates.push([]), this.dirtyCoordinatesFlag.push([]);
        this.Dp = undefined, this._i = {}, this.Up = {}, this.Wp = {}, this.Fp = H.default.subscribe(this.xp.bind(this));
      },
      'setSlotController': function (m) {
        this.Dp = m;
      },
      'init': function (m) {
        var D = m.Xa,
          W = this.slotItemCoordinates,
          k = this.slotItemWorldCoordinates,
          z = this.dirtyCoordinatesFlag;
        if (3 !== W[D].length) {
          var L = m.visibleItems().slice();
          if (L.length > 3) for (var v = L.length - 3, b = 0; b < v; b++) L.pop();
          W[D] = [], k[D] = [], z[D] = [];
          var U = this.Dp.node;
          if (L.reverse(), L.forEach(function (P) {
            var R = P.x,
              T = P.y,
              Y = m.node.convertToWorldSpaceAR(cc.v2(R, T)),
              X = U.convertToNodeSpaceAR(cc.v2(Y.x, Y.y));
            W[D].push(X), k[D].push(Y), z[D].push(false);
          }), !this.slotItemSize) {
            var Q = m.node.width,
              w = m.rowHeight;
            this.slotItemSize = cc.v2(Q, w);
          }
        }
      },
      'getSlotWorldPositionFromIndex': function (m) {
        var D,
          W = this.slotItemCoordinates,
          k = Math.floor(m / 3),
          z = m % 3;
        if (Number.isInteger(m) && m >= 0 && m < 9) return this.dirtyCoordinatesFlag[k][z] ? (D = this.slotItemWorldCoordinates[k][z] = this.Dp.node.convertToWorldSpaceAR(W[k][z]), this.dirtyCoordinatesFlag[k][z] = false) : D = this.slotItemWorldCoordinates[k][z], new cc.Vec2(D.x, D.y);
      },
      'getReelIdFromIndex': function (m) {
        if (Number.isInteger(m) && m < 9) return Math.floor(m / 3);
      },
      'getSlotItemSize': function () {
        return this.slotItemSize;
      },
      'getSlotItemScale': function () {
        return this.slotItemScale;
      },
      'getSlotIndexesExcept': function (m) {
        for (var D = [], W = 0; W < 9; W++) -1 === m.indexOf(W) && D.push(W);
        return D;
      },
      'getAllSlotIndexes': function () {
        for (var m = [], D = 0; D < 9; D++) m.push(D);
        return m;
      },
      'registerReusePrefab': function (m, D, W, k) {
        if (undefined === k && (k = 0), !m || !D) throw Error("incorrect parameter");
        var z = this.Up,
          L = this._i;
        if (!z[m] && !L[m]) {
          z[m] = D, L[m] = W ? new cc.NodePool(W) : new cc.NodePool(), this.Wp[m] = k;
          for (var v = 0; v < k; v++) {
            var b = cc.instantiate(D);
            b.reuseIdentifier = m, this.enqueueReusableItem(b);
          }
        }
      },
      'dequeueReusableItem': function (m) {
        var D = this._i[m];
        if (D.size() > 0) return D.get();
        var W = this.Up[m],
          k = cc.instantiate(W);
        return k.reuseIdentifier = m, k;
      },
      'enqueueReusableItem': function (m) {
        var D = this._i[m.reuseIdentifier];
        D.size() < 10 ? D.put(m) : m.destroy();
      },
      'xp': function () {
        this.dirtyCoordinatesFlag.forEach(function (m) {
          m.forEach(function (D, W) {
            m[W] = true;
          });
        });
      }
    }))();
    exports.slotProperties = q, cc._RF.pop();
  }
}
module.exports = SlotProperties;
