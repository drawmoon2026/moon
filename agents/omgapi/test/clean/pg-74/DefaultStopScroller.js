// module: DefaultStopScroller
// Cocos 模块函数,参数 (require, module, exports) = (c, j, I)
function DefaultStopScroller(c, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "080a20w+h1E6aNSIb84n3TU", "DefaultStopScroller")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = {};
      B["scrollCallback"] = void 0;
      B["getStopDistance"] = void 0;
      B["maxSpeed"] = -5040;
      B["endSpeed"] = -4680;
      B["bounceDistance"] = -60;
      B["bounceDuration"] = 0.15;
      B["bounceFactor"] = 1.84;
      var X = c("BaseScroller"),
        T = function (M) {
          function C(V) {
            var N = M["call"](this, __assign(__assign({}, Z), V)) || this;
            return N["changeSpeedDuration"] = 0, N["changeSpeedTimer"] = 0, N["previousMaxSpeed"] = 0, N["accumulatedTime"] = 0, N["previousY"] = 0, N["endY"] = 0, N["decelerateDistance"] = 0, N["decelerateDuration"] = 0, N["halfDeceleration"] = 0, N["notified"] = !1, N["bindedIdleUpdate"] = void 0, N["bindedRunUpdate"] = void 0, N["bindedIdleUpdate"] = N["idleUpdate"]["bind"](N), N["bindedRunUpdate"] = N["runUpdate"]["bind"](N), N;
          }
          return __extends(C, M), C["prototype"]["onReset"] = function () {
            {
              this["endY"] = 0, this["previousY"] = 0, this["changeSpeedDuration"] = 0, this["notified"] = !1, this["update"] = this["bindedIdleUpdate"];
            }
          }, C["prototype"]["onRun"] = function () {
            this["emitEvent"](X["SCROLLER_EVENT"]["RUN"]);
            var V = this["runtimeConfig"],
              N = this["endY"] = V["getStopDistance"](this),
              q = this["decelerateDistance"] = N + V["bounceDistance"],
              f = this["decelerateDuration"] = 2 * q / (V["maxSpeed"] + V["endSpeed"]);
            this["halfDeceleration"] = (V["endSpeed"] - V["maxSpeed"]) / f / 2, this["previousY"] = 0, this["notified"] = !1, this["accumulatedTime"] = 0, this["update"] = this["bindedRunUpdate"];
          }, C["prototype"]["onEnd"] = function () {
            this["notified"] || (this["notified"] = !0, this["emitEvent"](X["SCROLLER_EVENT"]["DECELERATE"], 0));
            var V = this["endY"];
            0 === V && (V = this["runtimeConfig"]["getStopDistance"](this));
            var N = V - this["previousY"];
            N && this["runtimeConfig"]["scrollCallback"](this, N), this["update"] = void 0, this["emitEvent"](X["SCROLLER_EVENT"]["END"]);
          }, C["prototype"]["idleUpdate"] = function (V) {
            {
              var N = this["changeSpeedDuration"];
              if (N) {
                {
                  var q = this["changeSpeedTimer"] += V;
                  if (!(q >= N)) {
                    var f = this["previousMaxSpeed"],
                      h = f + (this["runtimeConfig"]["maxSpeed"] - f) * q / N;
                    return void this["runtimeConfig"]["scrollCallback"](this, V * h);
                  }
                  this["changeSpeedDuration"] = 0;
                }
              }
              this["runtimeConfig"]["scrollCallback"](this, V * this["runtimeConfig"]["maxSpeed"]);
            }
          }, C["prototype"]["runUpdate"] = function (V) {
            var N = this["runtimeConfig"];
            V = this["accumulatedTime"] += V;
            var q = this["decelerateDuration"];
            if (V < q) {
              var f = N["maxSpeed"] * V + this["halfDeceleration"] * V * V;
              return N["scrollCallback"](this, f - this["previousY"]), this["previousY"] = f, void this["emitEvent"](X["SCROLLER_EVENT"]["DECELERATE"], 1 - V / q);
            }
            this["notified"] || (this["notified"] = !0, this["emitEvent"](X["SCROLLER_EVENT"]["DECELERATE"], 0)), V -= q;
            var h = N["bounceDuration"];
            if (V < h) {
              var g = 1 - Math["pow"](1 - V / h, N["bounceFactor"]);
              return f = this["decelerateDistance"] - N["bounceDistance"] * g, N["scrollCallback"](this, f - this["previousY"]), void (this["previousY"] = f);
            }
            this["end"]();
          }, C["prototype"]["getDecelerateDuration"] = function () {
            {
              return this["decelerateDuration"];
            }
          }, C["prototype"]["changeIdleSpeed"] = function (V, N) {
            var q = this["runtimeConfig"];
            this["previousMaxSpeed"] = q["maxSpeed"], q["maxSpeed"] = N, this["changeSpeedDuration"] = V, this["changeSpeedTimer"] = 0;
          }, C;
        }(X["default"]);
      I["default"] = T, cc["_RF"]["pop"]();
    }
  }
}
module.exports = DefaultStopScroller;
