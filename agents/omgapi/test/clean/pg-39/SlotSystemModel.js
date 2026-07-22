// module: SlotSystemModel
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SlotSystemModel(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "b8e48q3OlREgpqZ/fqigt7Z", "SlotSystemModel")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("SystemModel"),
        C = require("WinThresholdsModel"),
        H = require("Protoutils"),
        r = function (V) {
          function M() {
            return null !== V && V.apply(this, arguments) || this;
          }
          var q;
          return __extends(M, V), q = M, M.prototype.getProtoMessage = function () {
            var m = {};
            m.ctor = q;
            m.givenName = "Common";
            m.isRoot = true;
            return H.createProtoMessages(D).concat(this.getGameProtoMessage());
          }, M.prototype.getGameProtoMessage = function () {
            {
              return [];
            }
          }, M.prototype.updateGameInfo = function (m) {
            V.prototype.updateGameInfo.call(this, m);
            var D = m.cs,
              W = m.ml,
              k = m.mxl,
              z = m.wt,
              L = m.maxwm;
            this.Ed = D || [], this.jd = W || [], this.sb = k, this.eb = L, this.vt = new C.WinThresholdsModel(z);
          }, Object.defineProperty(M.prototype, "betLevelList", {
            'get': function () {
              {
                return this.jd;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "betSizeList", {
            'get': function () {
              return this.Ed;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "maxLineNumber", {
            'get': function () {
              return this.sb;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "maxWinMultipler", {
            'get': function () {
              return this.eb;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "winThresholds", {
            'get': function () {
              return this.vt;
            },
            'enumerable': false,
            'configurable': true
          }), M.registryKey = "GeneralSlotSystemModel", __decorate([H.api('cs', 11, "double", true, false, false)], M.prototype, "_betSizeList", undefined), __decorate([H.api('ml', 12, "int32", true, false, false)], M.prototype, "_betLevelList", undefined), __decorate([H.api("mxl", 13, "int32", false, false, false)], M.prototype, "_maxLineNumber", undefined), __decorate([H.api('wt', 22, "bytes", false, false, false)], M.prototype, "_winThresholds", undefined), __decorate([H.api("maxwm", 23, "int32", false, false, true)], M.prototype, "_maxWinMultipler", undefined), q = __decorate([H.messageName("SlotGameInfoResponse")], M);
        }(x.default);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = SlotSystemModel;
