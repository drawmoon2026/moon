// module: MJApiClient.spec
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function MJApiClient_spec(F, c, j) {
  'use strict';

  var I = {};
  I["value"] = !0;
  cc["_RF"]["push"](c, "e2193AMdIRKpZ1efc2tlFBb", "MJApiClient.spec") || (Object["defineProperty"](j, "__esModule", I), j["onRequestSent"] = j["onRequestReceived"] = void 0, j["onRequestReceived"] = function (m, B) {
    {
      var X = System["get"]("automation") && System["get"]("automation")["GameData"];
      var Z = {};
      Z["error"] = m;
      Z["result"] = B;
      X && X["emit"]("RequestReceived", Z);
    }
  }, j["onRequestSent"] = function () {
    {
      var m = System["get"]("automation") && System["get"]("automation")["GameData"];
      m && m["emit"]("RequestSent");
    }
  }, cc["_RF"]["pop"]());
}
module.exports = MJApiClient_spec;
