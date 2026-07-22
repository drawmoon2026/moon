// module: SlotView
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SlotView(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "dd04eu7yQpIx4UwS/QtQOjh", "SlotView")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["SlotAnchor"] = void 0;
    var m,
      B = cc["_decorator"]["ccclass"];
    (function (Z) {
      {
        Z[Z["BOTTOM"] = -1] = "BOTTOM", Z[Z["MIDDLE"] = 0] = "MIDDLE", Z[Z["TOP"] = 1] = "TOP";
      }
    })(m = j["SlotAnchor"] || (j["SlotAnchor"] = {}));
    var X = function () {
      {
        function Z(T, M) {
          void 0 === M && (M = 0), this["functionalRow"] = 0, this["symbolSize"] = void 0, this["viewHeight"] = 0, this["holder"] = void 0, this["offsetX"] = 0, this["sortBottomItemToFront"] = void 0, this["slotAnchor"] = m["MIDDLE"], this["topIndex"] = 0, this["bottomIndex"] = 0, this["accumulatedPositionY"] = 0, this["slotItems"] = [], this["isDirty"] = !0, this["bottomSlotIndex"] = void 0, this["holder"] = T, this["offsetX"] = M, this["viewHeight"] = T["height"], T['on'](cc["Node"]["EventType"]["SIZE_CHANGED"], this["onSizeChanged"], this);
        }
        return Z["prototype"]["init"] = function (T) {
          this["functionalRow"] = T["functionalRow"], this["symbolSize"] = T["symbolSize"], this["getItem"] = T["getItem"], this["releaseItem"] = T["releaseItem"], this["sortBottomItemToFront"] = T["sortBottomItemToFront"], this["reloadItemsToIndex"](0);
        }, Z["prototype"]["getFunctionalItems"] = function () {
          for (var T, M, C = this["slotItems"], V = C["length"], N = 0.5 * this["symbolSize"]["height"], q = this["functionalRow"] * N, f = 0; f < V; f++) {
            {
              var g = (l = C[f])["node"]['y'] - l["symbolRow"] * N;
              if (g < q) {
                T = q - g >= N ? f : f + 1;
                break;
              }
            }
          }
          for (f = V - 1; f >= 0; f--) {
            {
              var l,
                K = (l = C[f])["node"]['y'] + l["symbolRow"] * N;
              if (K > -q) {
                M = K + q > N ? f : f - 1;
                break;
              }
            }
          }
          return C["slice"](T, M + 1);
        }, Z["prototype"]["getVisibleItems"] = function () {
          return this["slotItems"];
        }, Z["prototype"]["getAccumulatedPositionY"] = function () {
          return this["accumulatedPositionY"];
        }, Z["prototype"]["getItemAtIndex"] = function (T) {
          {
            var M, C;
            if (this["isIndexVisible"](T)) try {
              {
                for (var V = __values(this["slotItems"]), N = V["next"](); !N["done"]; N = V["next"]()) {
                  {
                    var q = N["value"];
                    if (q["positionIndex"] <= T) return q;
                  }
                }
              }
            } catch (h) {
              var f = {};
              f["error"] = h;
              M = f;
            } finally {
              {
                try {
                  {
                    N && !N["done"] && (C = V["return"]) && C["call"](V);
                  }
                } finally {
                  {
                    if (M) throw M["error"];
                  }
                }
              }
            }
          }
        }, Z["prototype"]["getNextTopIndex"] = function (T) {
          return Math["max"](this["topIndex"] + 1, this["getBottomSlotIndex"]() + this["functionalRow"] + T);
        }, Z["prototype"]["getNextBottomIndex"] = function (T) {
          return Math["min"](this["bottomIndex"] - 1, this["getBottomSlotIndex"]() - T - 1);
        }, Z["prototype"]["getDistanceToIndex"] = function (T) {
          var M = this["symbolSize"]["height"],
            C = this["getBottomSlotIndex"](),
            V = this["getItemAtIndex"](C),
            N = (C - V["positionIndex"] - (V["symbolRow"] - 1) / 2) * M,
            q = V["node"]['y'] + N;
          return (C - T) * M + (0.5 * (1 - this["functionalRow"]) * M - q);
        }, Z["prototype"]["getAccumulatedPositionAtIndex"] = function (T) {
          return this["symbolSize"]["height"] * -T;
        }, Z["prototype"]["getOffsetX"] = function () {
          return this["offsetX"];
        }, Z["prototype"]["isIndexVisible"] = function (T) {
          return T >= this["bottomIndex"] && T <= this["topIndex"];
        }, Z["prototype"]["setFunctionalRow"] = function (T) {
          this["functionalRow"] = T, this["isDirty"] = !0;
        }, Z["prototype"]["setSlotAnchor"] = function (T) {
          {
            this["slotAnchor"] = T;
          }
        }, Z["prototype"]["changePositionY"] = function (T) {
          this["accumulatedPositionY"] += T;
          for (var M = this["slotItems"], C = 0, V = M["length"]; C < V; C++) M[C]["node"]['y'] += T;
          this["reviseVisibleItem"]();
        }, Z["prototype"]["resetPositionIndex"] = function () {
          var T = this["slotItems"],
            M = this["getBottomSlotIndex"]();
          T["forEach"](function (C) {
            {
              return C["positionIndex"] -= M;
            }
          }), this["topIndex"] -= M, this["bottomIndex"] -= M, this["accumulatedPositionY"] += M * this["symbolSize"]["height"], this["isDirty"] = !0;
        }, Z["prototype"]["scrollTo"] = function (T) {
          var M = this["getItemAtIndex"](T);
          if (M) {
            var C = this["symbolSize"]["height"],
              V = 0.5 * (M["symbolRow"] - this["functionalRow"]) * C,
              N = (T - M["positionIndex"]) * C;
            this["changePositionY"](V - M["node"]['y'] - N);
          } else this["reloadItemsToIndex"](T);
        }, Z["prototype"]["reloadItems"] = function (T) {
          {
            void 0 === T && (T = !0), T ? this["reloadItemsToIndex"](0) : this["reloadItemsToIndex"](this["getBottomSlotIndex"]());
          }
        }, Z["prototype"]["onSizeChanged"] = function () {
          {
            var T = this["holder"]["height"];
            if (this["viewHeight"] !== T) {
              var M = this["viewHeight"];
              this["viewHeight"] = T;
              var C = this["slotAnchor"];
              if (C) {
                var V = T - M;
                this["changePositionY"](C * V / 2);
              } else this["reviseVisibleItem"]();
            }
          }
        }, Z["prototype"]["reloadItemsToIndex"] = function (T) {
          var M = this,
            C = this["slotItems"],
            V = this["symbolSize"];
          C["length"] && (C["forEach"](function (h) {
            return M["releaseItem"](M, h);
          }), C["length"] = 0);
          var N = C[0] = this["getItem"](this, T),
            q = N["positionIndex"],
            f = N["node"];
          f["parent"] = this["holder"], f['y'] = ((N["symbolRow"] - this["functionalRow"]) / 2 + q) * V["height"], f['x'] = (N["symbolColumn"] - 1) / 2 * V["width"] + this["offsetX"], this["bottomIndex"] = q, this["topIndex"] = q + N["symbolRow"] - 1, this["accumulatedPositionY"] = -T * V["height"], this["reviseVisibleItem"]();
        }, Z["prototype"]["reviseVisibleItem"] = function () {
          var T = this["slotItems"],
            M = this["symbolSize"]["height"] / 2,
            C = this["viewHeight"] / 2 - 0.000005,
            V = T[0],
            N = T[T["length"] - 1],
            q = !1;
          if (V["node"]['y'] + V["symbolRow"] * M < C) do {
            this["addItemAtTop"](), V = T[0];
          } while (V["node"]['y'] + V["symbolRow"] * M < C);else V["node"]['y'] - V["symbolRow"] * M > C && (q = !0);
          if (N["node"]['y'] - N["symbolRow"] * M > -C) do {
            {
              this["addItemAtBottom"](), N = T[T["length"] - 1];
            }
          } while (N["node"]['y'] - N["symbolRow"] * M > -C);else if (N["node"]['y'] + N["symbolRow"] * M < -C) do {
            this["removeItemAtBottom"](), N = T[T["length"] - 1];
          } while (N["node"]['y'] + N["symbolRow"] * M < -C);
          if (q) do {
            this["removeItemAtTop"](), V = T[0];
          } while (V["node"]['y'] - V["symbolRow"] * M > C);
          this["isDirty"] = !0;
        }, Z["prototype"]["addItemAtTop"] = function () {
          var T = this["symbolSize"],
            M = this["slotItems"],
            C = M[0],
            V = this["topIndex"] + 1,
            N = this["getItem"](this, V),
            q = N["node"];
          q["parent"] = this["holder"], q['y'] = C["node"]['y'] + (C["symbolRow"] + N["symbolRow"]) / 2 * T["height"], q['x'] = (N["symbolColumn"] - 1) / 2 * T["width"] + this["offsetX"], M["unshift"](N), N["positionIndex"] = V, this["topIndex"] += N["symbolRow"], this["sortBottomItemToFront"] && N["setZIndex"](this["getBottomSlotIndex"]() - N["positionIndex"]);
        }, Z["prototype"]["addItemAtBottom"] = function () {
          var T = this["symbolSize"],
            M = this["slotItems"],
            C = M[M["length"] - 1],
            V = this["bottomIndex"] - 1,
            N = this["getItem"](this, V),
            q = N["node"];
          if (q["parent"] = this["holder"], q['y'] = C["node"]['y'] - (C["symbolRow"] + N["symbolRow"]) / 2 * T["height"], q['x'] = (N["symbolColumn"] - 1) / 2 * T["width"] + this["offsetX"], M["push"](N), N["positionIndex"] = this["bottomIndex"] -= N["symbolRow"], this["sortBottomItemToFront"]) for (var f = this["getBottomSlotIndex"](), g = 0, l = M["length"]; g < l; g++) M[g]["setZIndex"](f - M[g]["positionIndex"]);
        }, Z["prototype"]["removeItemAtTop"] = function () {
          var T = this["slotItems"]["shift"]();
          T["node"]["parent"] = void 0, this["topIndex"] -= T["symbolRow"], this["releaseItem"](this, T);
        }, Z["prototype"]["removeItemAtBottom"] = function () {
          var T = this["slotItems"],
            M = T["pop"]();
          if (M["node"]["parent"] = void 0, this["bottomIndex"] += M["symbolRow"], this["releaseItem"](this, M), this["sortBottomItemToFront"]) for (var C = this["getBottomSlotIndex"](), V = 0, N = T["length"]; V < N; V++) T[V]["setZIndex"](C - T[V]["positionIndex"]);
        }, Z["prototype"]["getBottomSlotIndex"] = function () {
          {
            if (!this["isDirty"]) return this["bottomSlotIndex"];
            this["isDirty"] = !1;
            for (var T = this["slotItems"], M = 0.5 * this["symbolSize"]["height"], C = (1 - this["functionalRow"]) * M, V = T["length"] - 1; V >= 0; V--) {
              var N = T[V],
                q = N["node"]['y'] + N["symbolRow"] * M;
              if (q > C) {
                var f = Math["ceil"]((q - C) / this["symbolSize"]["height"]);
                return this["bottomSlotIndex"] = N["positionIndex"] + N["symbolRow"] - f;
              }
            }
            return -1;
          }
        }, __decorate([B], Z);
      }
    }();
    j["default"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = SlotView;
