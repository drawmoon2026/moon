// module: RefreshWorldHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function RefreshWorldHandler(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "4ef5cJw0YpAx5UIePlauVio", "RefreshWorldHandler")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["RefreshWorldGameState"] = void 0;
    var B,
      X = F("RequestHandler"),
      Z = F("Utils"),
      T = F("GenericLoadingScreenController");
    (function (V) {
      V[V["STANDARD"] = 0] = "STANDARD", V[V["PROGRESSING"] = 1] = "PROGRESSING";
    })(B = I["RefreshWorldGameState"] || (I["RefreshWorldGameState"] = {}));
    var M = cc["_decorator"]["ccclass"],
      C = function () {
        {
          function V() {
            this["refreshWorldGameState"] = B["STANDARD"];
          }
          return V["prototype"]["initialize"] = function (N) {
            this["generalControllers"] = N["generalController"], this["bonusControllers"] = N["bonusController"] ? N["bonusController"] : void 0, this["extraControllers"] = N["extraController"] ? N["extraController"] : void 0, this["dataSource"] = N["dataSource"], this["apiClient"] = N["apiClient"], this["settingMenuHelper"] = N["settingMenuHelper"], this["walletHelper"] = N["walletHelper"], this["refreshWorldGameState"] = N["refreshWorldGameState"] ? N["refreshWorldGameState"] : B["STANDARD"];
          }, V["prototype"]["refreshWorldByChangeWalletIdle"] = function (N, q) {
            Z["sequenceCallback"](this["loadBundle"]["bind"](this), this['td']["bind"](this), this['sd']["bind"](this), this['ed']["bind"](this), this["resetController"]["bind"](this), Z["deferCallback"](!0), Z["deferCallback"](!0), this["executeTransition"]["bind"](this), N, this['nd']["bind"](this), this['od']["bind"](this), this["changeWalletIdleSetUp"]["bind"](this), this["reenableSpinButton"]["bind"](this))(q);
          }, V["prototype"]["refreshWorldByBetOptionIdle"] = function (N, q) {
            var f = q || function () {};
            Z["sequenceCallback"](this["loadBundle"]["bind"](this), this['sd']["bind"](this), this['hd']["bind"](this), this['ed']["bind"](this), this['rd']["bind"](this), this["resetController"]["bind"](this), Z["deferCallback"](!0), Z["deferCallback"](!0), this["executeTransition"]["bind"](this), N, this['od']["bind"](this), this["betOptionPreIdleSetUp"]["bind"](this), this['ad']["bind"](this), this["betOptionIdleSetUp"]["bind"](this), this["reenableSpinButton"]["bind"](this))(f);
          }, V["prototype"]['hd'] = function (N) {
            T["showLoadingPage"](N);
          }, V["prototype"]['ad'] = function (N) {
            T["hideLoadingPage"](N);
          }, V["prototype"]['od'] = function (N) {
            var q = this["walletHelper"],
              f = this["dataSource"];
            q["setupWallet"](f["lastTransactionRawData"]), N && N();
          }, V["prototype"]['td'] = function (N) {
            var q = this["dataSource"],
              f = this["settingMenuHelper"],
              g = q["systemModel"],
              l = g["betSizeList"],
              K = g["betLevelList"],
              O = g["featureBuy"],
              x = q["transactionModel"],
              p = x["betLevelValue"],
              b = x["betSizeValue"],
              L = q["playerModel"]["minimumBetAmount"];
            f["betSizeList"] = l, f["betSizeValue"] = b, f["betLevelList"] = K, f["betLevelValue"] = p, f["featureBuyThreshold"] = O && O["threshold"], f["minimumBetAmount"] = L, f["updateBetValues"](), N && N();
          }, V["prototype"]['rd'] = function (N) {
            var q = this["dataSource"]["transactionModel"],
              f = {
                'cs': q["betSizeValue"],
                'ml': q["betLevelValue"]
              };
            this['ud'](N, f);
          }, V["prototype"]['ud'] = function (N, q) {
            var f = this["apiClient"],
              g = this["dataSource"],
              l = this["settingMenuHelper"];
            X["doAPIRequest"]({
              'name': "Update Game Info",
              'apiRequest': f["updateGameInfo"]["bind"](f),
              'apiRequestParam': q,
              'errorTitle': shell["I18n"]['t']("General.ErrorChangeFailed")
            }, function (K, O) {
              if (O && O['dt']) {
                {
                  var x = g["systemModel"],
                    p = x["betSizeList"],
                    b = x["betLevelList"],
                    L = g["transactionModel"],
                    H = L["betLevelValue"],
                    U = L["betSizeValue"];
                  l["betSizeList"] = p, l["betSizeValue"] = U, l["betLevelList"] = b, l["betLevelValue"] = H, l["updateBetValues"](), N && N();
                }
              }
            });
          }, V["prototype"]['sd'] = function (N) {
            var q = this["generalControllers"];
            q["spinButtonController"]["exitAutoSpinMode"](), q["spinButtonController"]["disableButton"](), N && N();
          }, V["prototype"]['ed'] = function (N) {
            this["settingMenuHelper"]["setWinAmount"](0), N && N();
          }, V["prototype"]['nd'] = function (N) {
            var q = this["settingMenuHelper"];
            q["reevaluateBet"]() ? (q["updateBetValues"](), this['ld'](N)) : N && N();
          }, V["prototype"]['ld'] = function (N) {
            switch (this["refreshWorldGameState"]) {
              case B["STANDARD"]:
                N && N();
                break;
              case B["PROGRESSING"]:
                this['rd'](N);
            }
          }, V["prototype"]["loadBundle"] = function (N) {
            {
              N && N();
            }
          }, V["prototype"]["reenableSpinButton"] = function (N) {
            var q = this["generalControllers"]["spinButtonController"];
            q["idle"](), q["enableButton"](), N && N();
          }, V["prototype"]["resetController"] = function (N) {
            N && N();
          }, V["prototype"]["executeTransition"] = function (N) {
            N && N();
          }, V["prototype"]["changeWalletIdleSetUp"] = function (N) {
            {
              N && N();
            }
          }, V["prototype"]["betOptionPreIdleSetUp"] = function (N) {
            {
              N && N();
            }
          }, V["prototype"]["betOptionIdleSetUp"] = function (N) {
            {
              N && N();
            }
          }, __decorate([M], V);
        }
      }();
    I["default"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = RefreshWorldHandler;
