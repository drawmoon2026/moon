// module: SlotDataHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotDataHandler(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "c92e6Vflr1IcZlyJUaCowMg", "SlotDataHandler")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = function () {
      function B() {
        this["slotViews"] = void 0, this["spinType"] = void 0, this["topBufferRow"] = void 0, this["bottomBufferRow"] = void 0, this["numberOfRow"] = void 0, this["numberOfColumn"] = void 0, this["getSymbolSize"] = void 0, this["getRandomSymbol"] = void 0, this["isStopping"] = void 0, this["formattedReelData"] = void 0, this["backupBufferedSymbol"] = void 0, this["bufferedEmptyItemInfo"] = void 0, this["formattedDataPositions"] = void 0;
      }
      return B["prototype"]["init"] = function (X) {
        this["slotViews"] = X["slotViews"], this["topBufferRow"] = X["topBufferRow"] ? X["topBufferRow"] : 0, this["bottomBufferRow"] = X["bottomBufferRow"] ? X["bottomBufferRow"] : 0, this["numberOfRow"] = X["numberOfRow"], this["numberOfColumn"] = X["numberOfColumn"], this["getSymbolSize"] = X["getSymbolSize"], this["getRandomSymbol"] = X["getRandomSymbol"], this["formattedDataPositions"] = [], this["bufferedEmptyItemInfo"] = [];
        for (var Z = 0; Z < X["numberOfColumn"]; Z++) this["formattedDataPositions"][Z] = -this["bottomBufferRow"];
        this["setSpinType"](X["spinType"]), this["setReelData"](X["reelData"], X["largeSymbolDatas"]);
      }, B["prototype"]["reset"] = function () {
        this["isStopping"] = !1, this["bufferedEmptyItemInfo"]["length"] = 0;
        for (var X = 0; X < this["formattedDataPositions"]["length"]; X++) this["formattedDataPositions"][X] = -this["bottomBufferRow"];
      }, B["prototype"]["setSpinType"] = function (X) {
        this["spinType"] = X;
      }, B["prototype"]["setReelDataPosition"] = function (X, Z) {
        {
          this["isStopping"] = !0, this["formattedDataPositions"][X] = Z - this["bottomBufferRow"];
        }
      }, B["prototype"]["getReelDataPosition"] = function (X) {
        return this["formattedDataPositions"][X] + this["bottomBufferRow"];
      }, B["prototype"]["getItemInfo"] = function (X, Z) {
        var T = this["slotViews"]["indexOf"](X),
          M = this["bufferedEmptyItemInfo"][T];
        if (M) return this["bufferedEmptyItemInfo"][T] = void 0, M;
        for (var V = this["getSymbol"](T, C); void 0 === V;) C--, V = this["getSymbol"](T, C);
        if (V < 0) return this["createEmptyItemInfo"](-V, C);
        var N = this["getSymbolSize"],
          q = N ? N(V) : cc["size"](1, 1);
        var f = {};
        f["positionIndex"] = C;
        f["symbolColumn"] = q["width"];
        f["symbolRow"] = q["height"];
        f["symbolIndex"] = V;
        return f;
      }, B["prototype"]["setReelData"] = function (X, Z) {
        for (var T = this["numberOfColumn"], M = this["numberOfRow"], C = this["topBufferRow"], V = this["bottomBufferRow"], N = this["spinType"], q = this["getRandomSymbol"], g = V + M, K = g + C, O = this["backupBufferedSymbol"] = [], x = 0; x < T; x++) {
          for (var p = O[x] = [], b = 0; b < V; b++) p[b] = q(x, N, b, !1, !0, 1);
          for (b = g; b < K; b++) p[b] = q(x, N, b, !1, !0, 1);
        }
        this["updateReelData"](X, Z);
      }, B["prototype"]["updateReelData"] = function (X, Z) {
        for (var T = this["numberOfColumn"], M = this["numberOfRow"], C = this["bottomBufferRow"], V = this["backupBufferedSymbol"], N = this["getSymbolSize"], q = this["formattedReelData"] = [], f = 0; f < T; f++) {
          {
            var g = f * M,
              l = __spread(V[f]);
            l["splice"]["apply"](l, __spread([C, M], X["slice"](g, g + M)["reverse"]())), q["push"](l);
          }
        }
        N && Z && Z["forEach"](function (K) {
          K["sort"](function (y, z) {
            return y - z;
          });
          for (var O, x, p = X[K[0]], b = N(p), L = Math["floor"](K[0] / M), H = K[0] % M, U = 1; U < K["length"]; U++) if (Math["floor"](K[U] / M) !== L) {
            {
              O = K[U - 1] % M;
              break;
            }
          }
          for (x = 0 === H ? M - O - 1 + C : M - H + C - b["height"], U = 0; U < b["width"]; U++) {
            var k = q[U + L];
            k[x] = U ? -b["height"] : p;
            for (var Y = 1; Y < b["height"]; Y++) k[Y + x] = void 0;
          }
        });
      }, B["prototype"]["getFormattedData"] = function (X) {
        return __spread(this["formattedReelData"][X]);
      }, B["prototype"]["overwriteFormattedData"] = function (X, Z, T) {
        {
          this["formattedReelData"][X][Z] = T;
        }
      }, B["prototype"]["getSymbol"] = function (X, Z) {
        var T = this["formattedDataPositions"][X];
        if (void 0 !== T) {
          {
            var M = this["formattedReelData"][X];
            if (Z >= T && Z <= T + M["length"] - 1) return M[Z - T];
          }
        }
        var C = this["getSymbolSize"],
          V = 1;
        if (C) for (var N = X + 1; N < this["numberOfColumn"] && !this["slotViews"][N]["isIndexVisible"](Z); N++) V++;
        var q = this["getRandomSymbol"](X, this["spinType"], Z, this["isStopping"], !1, V);
        if (C) {
          {
            var f = C(q);
            for (N = 1; N < f["width"]; N++) this["bufferedEmptyItemInfo"][X + N] = this["createEmptyItemInfo"](f["height"], Z);
          }
        }
        return q;
      }, B["prototype"]["createEmptyItemInfo"] = function (X, Z) {
        var T = {};
        T["positionIndex"] = Z;
        T["symbolColumn"] = 1;
        T["symbolRow"] = X;
        T["symbolIndex"] = -1;
        return T;
      }, B;
    }();
    j["default"] = m, cc["_RF"]["pop"]();
  }
}
module.exports = SlotDataHandler;
