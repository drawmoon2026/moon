// module: GameUtil
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function GameUtil(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "df611vJ3ApIErYUXTPhKHIe", "GameUtil")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.isPassUKGC = exports.getWinPoitionArr = exports.generateGroupOfSlotItemWin = exports.uniqueArray = exports.differentArray = exports.scheduleIterator = exports.transformMultiplierData = undefined, exports.transformMultiplierData = function (C) {
      for (var V = [0, 1, 2, 3, 4, 5, 6, 7, 8], N = false; !N;) if (V[4] === C) N = true;else {
        var q = V.shift();
        V.push(q);
      }
      return V;
    };
    var B = require("Utils"),
      X = require("SlotHandler");
    exports.scheduleIterator = function (C, V, N, q) {
      var f = 0,
        g = 0,
        l = function () {
          ++g === N && q && q();
        },
        K = function () {
          C(f, l), f++;
        };
      return K(), N >= 2 && B.sharedScheduler.schedule(K, V, N - 2), function () {
        N >= 2 && B.sharedScheduler.unschedule(K), q = undefined;
      };
    }, exports.differentArray = function (C, V) {
      for (var N = [], q = 0; q < C.length; q++) V.includes(C[q]) || N.push(C[q]);
      return N;
    }, exports.uniqueArray = M, exports.generateGroupOfSlotItemWin = function (C) {
      var V = [];
      C = C.sort(function (O, x) {
        return O - x;
      });
      for (var N = 0; N < X.NUMBER_OF_COLUMN; N++) for (var q = N * X.NUMBER_OF_ROW, f = (N + 1) * X.NUMBER_OF_ROW, g = undefined, l = 0; l < C.length; l++) {
        var K = C[l];
        K >= q && K < f && (g !== K - 1 ? (g = K, V.push(g)) : g = K);
      }
      return V;
    }, exports.getWinPoitionArr = function (C) {
      var V = C.winPositions,
        N = C.rawData,
        q = [];
      return V.forEach(function (f) {
        q = q.concat(N[f]);
      }), M(q);
    };
    var Z = require("GameUtils"),
      T = require("MJDataSource");
    exports.isPassUKGC = function (C) {
      return Z.checkOperatorProfit(C, T.mjDataSource);
    }, cc._RF.pop();
  }
  function M(C) {
    return C.filter(function (V, N, q) {
      return q.indexOf(V) === N;
    });
  }
}
module.exports = GameUtil;
