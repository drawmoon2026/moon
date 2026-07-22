// module: SlotStateMachine
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SlotStateMachine(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "f1d53JqS5hGVbtNCz0JAnwN", "SlotStateMachine")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["StopStyle"] = I["SlotStates"] = void 0;
    var B,
      X,
      Z = F("Utils");
    (function (M) {
      M[M["SPINNING"] = 0] = "SPINNING", M[M["STOPPING"] = 1] = "STOPPING", M[M["STOPPED"] = 2] = "STOPPED";
    })(B = I["SlotStates"] || (I["SlotStates"] = {})), function (M) {
      M[M["NORMAL"] = 0] = "NORMAL", M[M["FAST"] = 1] = "FAST";
    }(X = I["StopStyle"] || (I["StopStyle"] = {}));
    var T = function () {
      {
        function M() {
          this['I'] = B["STOPPED"], this['lp'] = X["NORMAL"], this['fp'] = !1, this['dp'] = !1, this['vp'] = void 0, this['_p'] = void 0;
        }
        return M["prototype"]["getState"] = function () {
          return this['I'];
        }, M["prototype"]["getStopStyle"] = function () {
          return this['lp'];
        }, M["prototype"]["spin"] = function (C, V) {
          this['I'] === B["STOPPED"] && (this['I'] = B["SPINNING"], Z["delayCallback"](C)(this['mp']["bind"](this)), this['vp'] = Z["delayCallback"](V)(this['bp']["bind"](this)));
        }, M["prototype"]["markFastStop"] = function () {
          this['I'] === B["SPINNING"] && (this['lp'] = X["FAST"]);
        }, M["prototype"]["unmarkFastStop"] = function () {
          this['lp'] === X["FAST"] && this['I'] === B["SPINNING"] && (this['lp'] = X["NORMAL"]);
        }, M["prototype"]["fastStop"] = function (C) {
          this['I'] !== B["SPINNING"] && this['I'] !== B["STOPPING"] || (this['lp'] = X["FAST"], this['I'] = B["STOPPING"], this['_p'] = C, this['fp'] && this['pp']());
        }, M["prototype"]["stop"] = function (C) {
          if (this['I'] === B["SPINNING"]) {
            if (this['lp'] === X["FAST"]) return;
            this['I'] = B["STOPPING"], this['_p'] = C, this['dp'] && this['Rt']();
          }
        }, M["prototype"]["stopped"] = function () {
          this['I'] = B["STOPPED"], this['Zt']();
        }, M["prototype"]['mp'] = function () {
          this['fp'] = !0, this['I'] === B["STOPPING"] && this['lp'] === X["FAST"] && this['pp']();
        }, M["prototype"]['bp'] = function () {
          {
            this['dp'] = !0, this['I'] === B["STOPPING"] && this['lp'] === X["NORMAL"] && this['Rt']();
          }
        }, M["prototype"]['pp'] = function () {
          var C = this['vp'];
          this['vp'] = void 0, C && C(), this['Rt']();
        }, M["prototype"]['Rt'] = function () {
          {
            var C = this['_p'];
            this['_p'] = void 0, C && C();
          }
        }, M["prototype"]['Zt'] = function () {
          {
            this['lp'] = X["NORMAL"], this['fp'] = !1, this['dp'] = !1, this['_p'] = void 0, this['vp'] = void 0;
          }
        }, M;
      }
    }();
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = SlotStateMachine;
