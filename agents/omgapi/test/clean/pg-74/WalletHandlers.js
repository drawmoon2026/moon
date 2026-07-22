// module: WalletHandlers
// Cocos 模块函数,参数 (require, module, exports) = (F, c, exports)
function WalletHandlers(F, c, exports) {
  'use strict';

  var I = {};
  I.value = true;
  cc._RF.push(c, "16fa48YcbZClp+85Xk1WOH4", "WalletHandlers") || (Object.defineProperty(exports, "__esModule", I), exports.setupWallets = undefined, exports.setupWallets = function (m) {
    var B = m.dataSource,
      X = m.settingMenuHelper,
      Z = m.walletHelper,
      T = m.callback,
      M = B.playerModel.currencySymbol;
    Z.setup({
      'openWalletMenuFunc': X.openWalletMenu.bind(X),
      'setFreeGameModeFunc': X.setFreeGameMode.bind(X),
      'currencySymbol': M,
      'footerController': m.settingWalletPanelController
    }), Z.setupWallet(B.lastTransactionRawData), T && T();
  }, cc._RF.pop());
}
module.exports = WalletHandlers;
