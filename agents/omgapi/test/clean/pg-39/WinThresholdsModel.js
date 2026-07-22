// module: WinThresholdsModel
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function WinThresholdsModel(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "43fa7kpruFLXK4fYDhrIgSc", "WinThresholdsModel")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.WinThresholdsModel = undefined;
    var x = require("APIEncryptor"),
      C = require("Utils"),
      H = require("Protoutils"),
      r = function () {
        {
          function M(q) {
            var m = this.deserializer(q),
              D = m.mw,
              W = m.bw,
              k = m.mgw,
              z = m.smgw;
            this.gS = JSON.parse(JSON.stringify(m)), this.ES = D, this.jS = W, this.DS = k, this.US = z;
          }
          var V;
          return V = M, M.prototype.deserializer = function (q) {
            var m = {};
            m.ctor = V;
            m.givenName = "WinThreshold";
            m.isRoot = true;
            var W = H.createProtoMessages(D);
            return x.decode(q, x.protoNested()[0](W));
          }, M.prototype.getAllThresholds = function (q, m, D) {
            {
              var W = q * m * D;
              return {
                'mediumWinThreshold': C.toDecimalWithExp(W * this.ES, 2),
                'bigWinThreshold': C.toDecimalWithExp(W * this.jS, 2),
                'megaWinThreshold': C.toDecimalWithExp(W * this.DS, 2),
                'superMegaWinThreshold': C.toDecimalWithExp(W * this.US, 2)
              };
            }
          }, Object.defineProperty(M.prototype, "rawData", {
            'get': function () {
              return this.gS;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "mediumWin", {
            'get': function () {
              return this.ES;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "bigWin", {
            'get': function () {
              {
                return this.jS;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "megaWin", {
            'get': function () {
              return this.DS;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "superMegaWin", {
            'get': function () {
              {
                return this.US;
              }
            },
            'enumerable': false,
            'configurable': true
          }), M.registryKey = "WinThreshold", __decorate([H.api('mw', 1, "double", false, false, false)], M.prototype, "_mediumWin", undefined), __decorate([H.api('bw', 2, "double", false, false, false)], M.prototype, "_bigWin", undefined), __decorate([H.api("mgw", 3, "double", false, false, false)], M.prototype, "_megaWin", undefined), __decorate([H.api("smgw", 4, "double", false, false, false)], M.prototype, "_superMegaWin", undefined), V = __decorate([H.messageName("WinThreshold")], M);
        }
      }();
    exports.WinThresholdsModel = r, cc._RF.pop();
  }
}
module.exports = WinThresholdsModel;
