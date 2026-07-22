// module: PGBetRequestModel
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function PGBetRequestModel(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "04c5dxt1DtLibUJsILbyUdl", "PGBetRequestModel")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), exports.PGBetRequestModel = undefined;
      var x = require("Protoutils"),
        C = function () {
          function H() {}
          var r;
          return r = H, H.prototype.build = function (V) {
            var M = {};
            M.ctor = r;
            M.givenName = "PiggyGoldBetRequest";
            M.isRoot = true;
            return x.createProtoMessages(q).concat(V);
          }, H.registryKey = "PiggyGoldBetRequest", __decorate([x.api('cs', 21, "double", false, false, false)], H.prototype, 'cs', undefined), __decorate([x.api('ml', 22, "int32", false, false, false)], H.prototype, 'ml', undefined), __decorate([x.api('id', 5, "string", false, false, false)], H.prototype, 'id', undefined), __decorate([x.api('wk', 12, "string", false, false, false)], H.prototype, 'wk', undefined), r = __decorate([x.messageName("PiggyGoldBetRequest")], H);
        }();
      exports.PGBetRequestModel = C, cc._RF.pop();
    }
  }
}
module.exports = PGBetRequestModel;
