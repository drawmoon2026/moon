// module: MJAPIClient
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJAPIClient(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "4e3abxO2HhAhqsmlh0UuSpt", "MJAPIClient")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m), I["mjApiClient"] = void 0;
      var B = F("APIClient"),
        X = F("SettingMenuHelper"),
        Z = F("MJDataSource"),
        T = (F("TweaksData"), F("AutomationDecorator")),
        M = F("MJApiClient.spec"),
        C = function (N) {
          function q() {
            return null !== N && N["apply"](this, arguments) || this;
          }
          var f = {};
          f["func"] = M["onRequestSent"];
          var g = {};
          g["func"] = M["onRequestReceived"];
          return __extends(q, N), q["prototype"]["spin"] = function (l) {
            var K = this,
              O = Z["mjDataSource"]["transactionModel"]["transactionId"],
              x = {
                'cs': X["settingMenuHelper"]["betSizeValue"],
                'ml': X["settingMenuHelper"]["betLevelValue"],
                'sn': Z["mjDataSource"]["currentSelectedMenuIndex"] ? Z["mjDataSource"]["currentSelectedMenuIndex"] : 1,
                'id': O,
                'crl': void 0,
                'ss': [],
                'wk': Z["mjDataSource"]["playerModel"]["walletKey"]
              };
            this['lr'](), this["requestEngine"]("v2/Spin", x, function (p, b) {
              if (K["logResult"]("spin", b), b && b['dt']) {
                {
                  var L = b['dt']['si'];
                  K["print"](L["sid"]), Z["mjDataSource"]["updateTransactionInfo"](L);
                }
              }
              var H = {};
              H["error"] = p;
              H["result"] = b;
              K['dr'](H), l && l(p, b);
            });
          }, q["prototype"]['lr'] = function () {}, q["prototype"]['dr'] = function () {}, __decorate([T["automationDec"](f)], q["prototype"], "_onRequestSent", null), __decorate([T["automationDec"](g)], q["prototype"], "_onRequestReceived", null), q;
        }(B["default"]);
      I["default"] = C;
      var V = new C(Z["mjDataSource"]);
      I["mjApiClient"] = V, cc["_RF"]["pop"]();
    }
  }
}
module.exports = MJAPIClient;
