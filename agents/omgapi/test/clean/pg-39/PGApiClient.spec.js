// module: PGApiClient.spec
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function PGApiClient_spec(j, O, exports) {
  'use strict';

  var B = {};
  B.value = true;
  cc._RF.push(O, "6a5efOPxrhCWo8QfWKO1FeF", "PGApiClient.spec") || (Object.defineProperty(exports, "__esModule", B), exports.onRequestSent = exports.onRequestReceived = undefined, exports.onRequestReceived = function (x, C) {
    {
      var H = System.get("automation") && System.get("automation").GameData;
      var r = {};
      r.error = x;
      r.result = C;
      H && H.emit("RequestReceived", r);
    }
  }, exports.onRequestSent = function () {
    var x = System.get("automation") && System.get("automation").GameData;
    x && x.emit("RequestSent");
  }, cc._RF.pop());
}
module.exports = PGApiClient_spec;
