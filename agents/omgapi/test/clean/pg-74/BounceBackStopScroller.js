// module: BounceBackStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function BounceBackStopScroller(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "e1fcdCNaWpBco8rzjpMx33K", "BounceBackStopScroller")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = F("DefaultStopScroller"),
      B = F("BaseScroller"),
      X = function (Z) {
        function T() {
          var M = null !== Z && Z["apply"](this, arguments) || this;
          return M['ps'] = void 0, M;
        }
        return __extends(T, Z), T["prototype"]["onRun"] = function () {
          {
            this["emitEvent"](B["SCROLLER_EVENT"]["RUN"]);
            var M = this["runtimeConfig"],
              C = this["endY"] = M["getStopDistance"](this),
              V = this["decelerateDistance"] = C,
              N = this["decelerateDuration"] = 2 * V / (M["maxSpeed"] + M["endSpeed"]);
            this["halfDeceleration"] = (M["endSpeed"] - M["maxSpeed"]) / N / 2, this['ps'] = cc["easeOut"](M["bounceFactor"]), this["previousY"] = 0, this["notified"] = !1, this["accumulatedTime"] = 0, this["update"] = this["bindedRunUpdate"];
          }
        }, T["prototype"]["runUpdate"] = function (M) {
          {
            var C = this["runtimeConfig"];
            M = this["accumulatedTime"] += M;
            var V = this["decelerateDuration"];
            if (M < V) {
              var N = C["maxSpeed"] * M + this["halfDeceleration"] * M * M;
              return C["scrollCallback"](this, N - this["previousY"]), this["previousY"] = N, void this["emitEvent"](B["SCROLLER_EVENT"]["DECELERATE"], 1 - M / V);
            }
            this["notified"] || (this["notified"] = !0, this["emitEvent"](B["SCROLLER_EVENT"]["DECELERATE"], 0)), M -= V;
            var q = C["bounceDuration"];
            if (M < q) {
              var f = M / q,
                g = this['ps']["easing"](2 * (f < 0.5 ? f : 1 - f));
              return N = this["decelerateDistance"] + C["bounceDistance"] * g, C["scrollCallback"](this, N - this["previousY"]), void (this["previousY"] = N);
            }
            this["end"]();
          }
        }, T;
      }(m["default"]);
    j["default"] = X, cc["_RF"]["pop"]();
  }
}
module.exports = BounceBackStopScroller;
