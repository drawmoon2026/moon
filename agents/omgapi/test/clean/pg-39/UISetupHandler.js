// module: UISetupHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function UISetupHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "f4567d4xahD3ovewoSIICYp", "UISetupHandler")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B), exports.NormalGameUI = exports.settingMenuInteractable = exports.renderUIBaseOnState = undefined;
    var x = require("PGGDataSource"),
      C = require("SettingMenuHelper"),
      H = require("SlotProperties"),
      r = require("GameRegionUtils");
    exports.renderUIBaseOnState = function (M, q, m, D) {
      {
        var W = {};
        W.generalControllers = D;
        new V().setup(W, M);
      }
    }, exports.settingMenuInteractable = function (M) {
      C.settingMenuHelper.setAllButtonsInteractable(M);
    };
    var V = function () {
      function M() {}
      return M.prototype.setup = function (q, m) {
        var D, W;
        this._t = q.generalControllers, D = x.pgDataSource.playerModel.balance, W = x.pgDataSource.transactionModel.accumulatedWinAmount, C.settingMenuHelper.setBalance(D), C.settingMenuHelper.setWinAmount(W), this.qh(), this.uS(), m && m();
      }, M.prototype.qh = function () {
        {
          var q = x.pgDataSource.transactionModel,
            m = q.accumulatedWinAmount,
            D = q.fakeReels,
            W = q.reels,
            k = q.winSymbolIndex,
            z = q.piggyFeature,
            L = q.hasWild,
            U = q.wildMultiply,
            Q = q.middleReelsMutiply,
            w = this._t.payTableController;
          if (z && this._t.scrollerManagerController.playSpawn(), m > 0) {
            var P = this._t.slotController,
              R = this._t.paySelectController,
              T = this._t.wildMultiplySpineController,
              Y = this._t.fastSpinAnimationController,
              X = [];
            if (P.resetSlot(D, W, Q, z), w.playWinFlash(k), Y.activeScrollNode(), W.forEach(function (F, N) {
              var Z;
              if (Z = P.getSymbolSpriteFrames(F), F === H.SlotIndexes.WILD) {
                var g = 1;
                1 === N && (g = U), T.playWildSpineLoop(g, N);
              }
              X.push(Z.normal);
            }), P.getSlotItemWithIndex([1, 4, 7]).forEach(function (F) {
              {
                F.active = false;
              }
            }), R.playNormalPaySelect(X, W), L) {
              var E = U || 1;
              w.fadeMultiply(E, false);
            } else w.playWildInactive();
          } else w.playWildActive();
        }
      }, M.prototype.uS = function () {
        var q = x.pgDataSource.transactionModel.accumulatedWinAmount,
          m = this._t.infobarController;
        q > 0 && r.checkUKGCRegion(q) ? m.showWin(q) : m.displayNormalTip();
      }, M;
    }();
    exports.NormalGameUI = V, cc._RF.pop();
  }
}
module.exports = UISetupHandler;
