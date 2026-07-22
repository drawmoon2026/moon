// module: SlotSystemModel
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function SlotSystemModel(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "b8e48q3OlREgpqZ/fqigt7Z", "SlotSystemModel")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I);
    var m = require("SystemModel"),
      B = require("WinThresholdsModel"),
      X = function (Z) {
        function T() {
          return null !== Z && Z.apply(this, arguments) || this;
        }
        return __extends(T, Z), T.prototype.updateGameInfo = function (M) {
          var C = M.cs,
            V = M.ml,
            N = M.mxl,
            q = M.fbbm,
            f = M.wt;
          this.Lv = C || [], this.Pv = V || [], this.Cp = N, this.Mp = q, this.yp = f ? new B.WinThresholdsModel(f) : undefined;
        }, Object.defineProperty(T.prototype, "betLevelList", {
          'get': function () {
            return this.Pv;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(T.prototype, "betSizeList", {
          'get': function () {
            return this.Lv;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(T.prototype, "maxLineNumber", {
          'get': function () {
            return this.Cp;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(T.prototype, "featureBuyBetMultiplier", {
          'get': function () {
            return this.Mp;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(T.prototype, "winThresholds", {
          'get': function () {
            return this.yp;
          },
          'enumerable': false,
          'configurable': true
        }), T;
      }(m.default);
    exports.default = X, cc._RF.pop();
  }
}
module.exports = SlotSystemModel;
