// module: MJApiClient.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function MJApiClient_spec(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "e2193AMdIRKpZ1efc2tlFBb", "MJApiClient.spec") || (Object.defineProperty(exports, "__esModule", I), exports.onRequestSent = exports.onRequestReceived = undefined, exports.onRequestReceived = function (m, B) {
    var X = System.get("automation") && System.get("automation").GameData;
    var Z = {};
    Z.error = m;
    Z.result = B;
    X && X.emit("RequestReceived", Z);
  }, exports.onRequestSent = function () {
    var m = System.get("automation") && System.get("automation").GameData;
    m && m.emit("RequestSent");
  }, cc._RF.pop());
}
module.exports = MJApiClient_spec;
