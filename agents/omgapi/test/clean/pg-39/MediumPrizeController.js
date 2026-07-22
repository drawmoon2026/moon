// module: MediumPrizeController
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function MediumPrizeController(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "72a61RmRLhNGLB4kvMTTD0i", "MediumPrizeController")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("Utils"),
      C = require("SettingMenuHelper"),
      H = cc._decorator.ccclass,
      r = function () {
        {
          function V(M, q, m) {
            this.lt = undefined, this.ft = undefined, this.ar = undefined, this._t = undefined, this.pt = undefined;
            var D = M.transactionModel,
              W = D.totalWinAmount,
              k = D.accumulatedWinAmount;
            this.lt = M, this.ft = W, this.ar = k, this._t = q, this.pt = m;
          }
          return V.prototype.run = function () {
            var M = this,
              q = this.ft,
              m = this.ar;
            x.spawnCallback(this.ur(), this.gt(q), this.Ct(m), x.delayCallback(1))(function () {
              M.pt && M.pt();
            });
          }, V.prototype.gt = function (M) {
            {
              var q = this._t;
              return function (m) {
                0 !== M ? q.infobarController.showWin(M, m) : m && m();
              };
            }
          }, V.prototype.ur = function () {
            var M = this._t;
            return function (q) {
              M.piggyController.playSmallWin(), q && q();
            };
          }, V.prototype.Ct = function (M) {
            var q = this.lt;
            return function (m) {
              {
                var D = q.playerModel.balance;
                C.settingMenuHelper.setBalance(D), C.settingMenuHelper.setWinAmount(M), m && m();
              }
            };
          }, __decorate([H], V);
        }
      }();
    exports.default = r, cc._RF.pop();
  }
}
module.exports = MediumPrizeController;
