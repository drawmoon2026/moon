// module: PGGAPIClient
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function PGGAPIClient(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "d1324LE8u1FgIf2d5LCWuoy", "PGGAPIClient")) {
    {
      var x = {};
      x.value = true;
      Object.defineProperty(exports, "__esModule", x), exports.pgApiClient = undefined;
      var C = require("PGGDataSource"),
        H = require("APIClient"),
        V = (require("TweaksData"), require("Utils")),
        M = require("AutomationDecorator"),
        q = require("PGApiClient.spec"),
        m = require("PGBetRequestModel"),
        D = V.getPlatform(),
        W = function (z) {
          function L() {
            var v = null !== z && z.apply(this, arguments) || this;
            return v.Na = undefined, v;
          }
          return __extends(L, z), L.prototype.spin = function (v) {
            this.Na = v;
            var b = C.pgDataSource.transactionModel,
              U = b.transactionId,
              Q = b.betLevelValue,
              w = b.betSizeValue,
              P = C.pgDataSource.playerModel.walletKey,
              R = {
                'cs': w,
                'ml': Q,
                'pf': D,
                'id': U,
                'wk': P
              },
              T = new m.PGBetRequestModel().build([]);
            this.Ta("v4/Spin", R, T, this.Ha.bind(this));
          }, L.prototype.Ta = function (v, b, U, Q) {
            {
              this.requestEngine(v, b, U, Q);
            }
          }, L.prototype.Ha = function (v, b) {
            var U = this.Na;
            this.Na = undefined;
            try {
              {
                b && this.dataSource.updateTransactionInfo(b), U(v, b);
              }
            } catch (Q) {
              (v = new shell.Error(shell.ServerError.Domain, 6501, undefined, 1)).cause = Q, U(v, b);
            }
          }, __decorate([M.automationDec({
            'func': q.onRequestSent
          })], L.prototype, "_onRequest", null), __decorate([M.automationDec({
            'func': q.onRequestReceived
          })], L.prototype, "_onRespond", null), L;
        }(H.default);
      exports.default = W;
      var k = new W(C.pgDataSource);
      exports.pgApiClient = k, cc._RF.pop();
    }
  }
}
module.exports = PGGAPIClient;
