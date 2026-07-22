// module: WalletHelper
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function WalletHelper(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "1ca2eEH71NDaahNBchOvZgw", "WalletHelper")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m), I["walletHelper"] = void 0;
    var B,
      X = F("SettingInfoFooterController"),
      Z = F("Utils"),
      T = F("BVFramework");
    (function (V) {
      V[V["INACTIVE"] = 0] = "INACTIVE", V[V["ACTIVE"] = 1] = "ACTIVE", V[V["EXPIRED"] = 2] = "EXPIRED", V[V["CONVERTED"] = 3] = "CONVERTED", V[V["COMPLETED"] = 4] = "COMPLETED", V[V["NEW"] = 5] = "NEW", V[V["DISCARDED"] = 6] = "DISCARDED", V[V["LOCKED"] = 7] = "LOCKED";
    })(B || (B = {}));
    var M = cc["_decorator"]["ccclass"],
      C = new (function (V) {
        function N() {
          var q = null !== V && V["apply"](this, arguments) || this;
          return q['Yg'] = !1, q['Zg'] = !1, q;
        }
        return __extends(N, V), N["prototype"]["init"] = function (q) {
          var f = this;
          this['Ju'] = q["getGameInfo"];
          var g = T["getGameContext"]();
          g['on']("Game.TransactionInfoUpdated", function (l) {
            if (f['Xg'] = l["payload"], f['Zg']) {
              var K = f['Xg'];
              f["isFreeGameMode"]() ? f['$g'](K["wfg"]['gc']) : f["isBonusGameMode"]() && f['tC'](K["wbn"]["bra"]), f['Zg'] = !1;
            }
          }), g['on']("Game.HasNewWallet", function () {
            f['iC']["activateWalletNotify"](!0);
          });
        }, N["prototype"]["processInitGameInfo"] = function (q, f) {
          {
            var g = this,
              l = q['dt']['ls']['si'];
            this['Yg'] = q['dt']["inwe"];
            var K = function (O) {
              {
                if (O) switch (O['s']) {
                  case B["EXPIRED"]:
                  case B["DISCARDED"]:
                  case B["INACTIVE"]:
                    if (!g['Ju']) throw Error("Wallethelper :: processInitGameInfo : getGameInfo callback not found!");
                    return void g['Ju']("0_C", function () {
                      f && f();
                    });
                }
                f && f();
              }
            };
            switch (l['wt']) {
              case 'B':
                K(l["wbn"]);
                break;
              case 'G':
                K(l["wfg"]);
                break;
              default:
                f && f();
            }
          }
        }, N["prototype"]["setup"] = function (q) {
          this['sC'] = q["setFreeGameModeFunc"], this['iC'] = q["footerController"], this['iC']["activateWalletNotify"](this['Yg']);
        }, N["prototype"]["setupWallet"] = function (q) {
          {
            var f = this['iC'],
              g = this['sC'],
              l = q["wfg"],
              K = q["wbn"];
            if (K) {
              var O = K["bra"] !== K["ibra"];
              g && g(!1), f["showCustomInfoFooter"](), this['tC'](K["bra"], O), f["setWalletNavigateIcon"](X["WALLET_FOOTER_TYPE"]["BONUS"]);
            } else l ? (O = l['gc'] !== l['tg'], g && g(!0), f["showCustomInfoFooter"](), this['$g'](l['gc'], O), f["setWalletNavigateIcon"](X["WALLET_FOOTER_TYPE"]["FREE_GAME"])) : (g && g(!1), f["hideCustomInfoFooter"](), f["setWalletNavigateIcon"](X["WALLET_FOOTER_TYPE"]["CASH"]));
            this['Xg'] = q;
          }
        }, N["prototype"]["hasFreeGame"] = function () {
          return this["isFreeGameMode"]() && this['Xg']["wfg"]['gc'] > 0;
        }, N["prototype"]["spin"] = function (q) {
          if (this["isFreeGameMode"]()) {
            var f = this['Xg']["wfg"]['gc'];
            this['$g'](f - 1), this['Zg'] = !0;
          } else if (this["isBonusGameMode"]()) {
            {
              var g = this['Xg']["wbn"]["bra"],
                l = q > g ? 0 : g - q;
              this['tC'](l), this['Zg'] = !0;
            }
          }
        }, N["prototype"]["isFreeGameMode"] = function () {
          return this['Xg'] && this['Xg']["wfg"];
        }, N["prototype"]["isBonusGameMode"] = function () {
          return this['Xg'] && this['Xg']["wbn"];
        }, N["prototype"]["isWalletCompleted"] = function () {
          var q = this['Xg'],
            f = q["wfg"],
            g = q["wbn"];
          if (f || g) switch (f ? f['s'] : g['s']) {
            case B["CONVERTED"]:
            case B["COMPLETED"]:
              return !0;
          }
          return !1;
        }, N["prototype"]["cleanUp"] = function () {
          this['iC'] = void 0;
        }, N["prototype"]['$g'] = function (q, f) {
          {
            void 0 === f && (f = !0), this['iC']["setCustomMiddleInfoFooter"](q, f);
          }
        }, N["prototype"]['tC'] = function (q, f) {
          {
            void 0 === f && (f = !0), this['iC']["setCustomMiddleInfoFooter"](Z["formatCurrency"](q), f);
          }
        }, __decorate([M("WalletHelper")], N);
      }(cc["Object"]))();
    I["walletHelper"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = WalletHelper;
