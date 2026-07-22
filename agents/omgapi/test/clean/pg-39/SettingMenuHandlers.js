// module: SettingMenuHandlers
// Cocos 模块函数,参数 (require, module, exports) = (require, B, exports)
function SettingMenuHandlers(require, B, exports) {
  'use strict';

  if (!cc._RF.push(B, "e4a87/dIGtMT5oq5NQEGbT5", "SettingMenuHandlers")) {
    var C = {};
    C.value = true;
    Object.defineProperty(exports, "__esModule", C), exports.handleSettingMenuMusicChange = exports.additionalBetCalculation = exports.updateDataSourceBetValue = exports.getBetChangeCallback = exports.updateBetChangesCallback = exports.initializeSettingMenu = exports.setSettingMenuButtonsInteractable = exports.setupSettingMenu = undefined;
    var H = {};
    H.settingMenuLibPath = "lib/setting_menu/";
    var V = require("LaunchConfig"),
      M = require("AnalyticsHelper");
    exports.setupSettingMenu = function (v) {
      var b = Object.assign({}, q, v.settingMenuDependenciesPath),
        U = v.settingMenuHelper,
        Q = v.dataSource,
        w = v.callback;
      U.path = b.settingMenuLibPath, U.showChangeBetReminder = v.isProgressiveGame, U.manualUpdateBetFactorCallBack = W(Q, U, v.betChangeCallback), U.betModifierUpdateCallback = D(Q, U, v.betChangeCallback), U.reevaluateBetCallback = k(Q, v.reevaluateBetCallback), U.additionalBetCalculationCallback = v.additionalBetCalculation ? v.additionalBetCalculation : z, U.changeSoundVolume = L(v.toggleEffectMuted, v.toggleMusicMuted);
      var P = '1' !== V.cs_Launch.noAudio;
      U.audioConfigure = P, w && w();
    }, exports.setSettingMenuButtonsInteractable = m, exports.initializeSettingMenu = function (v) {
      var b = v.settingMenuHelper,
        U = v.dataSource,
        Q = v.callback;
      b.setSettingMenuController(v.settingController), b.addSettingInfoFooter(v.settingWalletPanelController), b.setupSettingMenuButtons();
      var w = U.playerModel.balance;
      b.setBalance(w), b.updateBetValues(), m(b, U, false), Q && Q();
    }, exports.updateBetChangesCallback = D, exports.getBetChangeCallback = W, exports.updateDataSourceBetValue = k, exports.additionalBetCalculation = z, exports.handleSettingMenuMusicChange = L, cc._RF.pop();
  }
  function m(v, b, U, Q, w) {
    if (undefined === Q && (Q = true), undefined === w && (w = false), v.setAllButtonsInteractable(U, Q), U) {
      var P = '0' !== b.transactionModel.transactionId;
      v.setVerifyInteractable(P, w);
    } else v.setVerifyInteractable(false, w);
  }
  function D(v, b, U) {
    return function (Q, w) {
      var P = v.systemModel.maxLineNumber;
      b.betSizeValue = Q, b.betLevelValue = w, k(v)(Q, w), M.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_CHANGE_BET, {
        'amount': Q * w * P
      }), U && U();
    };
  }
  function W(v, b, U) {
    return function (Q, w) {
      D(v, b)(Q, w), b.updateBetValues(), U && U();
    };
  }
  function k(v, b) {
    return function (U, Q) {
      v.transactionModel.betSizeValue = U, v.transactionModel.betLevelValue = Q, b && b();
    };
  }
  function z(v, b, U) {
    return v * b * U;
  }
  function L(v, b) {
    return function (U) {
      v(!U), b(!U);
    };
  }
}
module.exports = SettingMenuHandlers;
