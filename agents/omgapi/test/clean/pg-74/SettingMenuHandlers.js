// module: SettingMenuHandlers
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function SettingMenuHandlers(j, I, m) {
  'use strict';

  if (!cc._RF.push(I, "e4a87/dIGtMT5oq5NQEGbT5", "SettingMenuHandlers")) {
    var B = {};
    B.value = true;
    Object.defineProperty(m, "__esModule", B), m.handleSettingMenuMusicChange = m.handleSettingMenuFlipped = m.additionalBetCalculation = m.updateDataSourceBetValue = m.getBetChangeCallback = m.updateBetChangesCallback = m.initializeSettingMenu = m.setupSettingMenu = undefined;
    var X = {};
    X.settingMenuLibPath = "lib/setting_menu/";
    var Z = j("LaunchConfig"),
      T = j("AnalyticsHelper"),
      M = j("QuitGameWithEvent");
    m.setupSettingMenu = function (x) {
      {
        var p = Object.assign({}, C, x.settingMenuDependenciesPath),
          b = x.settingMenuHelper,
          L = x.dataSource,
          H = x.callback;
        b.path = p.settingMenuLibPath, b.showChangeBetReminder = x.isProgressiveGame, b.manualUpdateBetFactorCallBack = N(L, b, x.betChangeCallback), b.betModifierUpdateCallback = V(L, b, x.betChangeCallback), b.reevaluateBetCallback = q(L, x.reevaluateBetCallback), b.additionalBetCalculationCallback = x.additionalBetCalculation ? x.additionalBetCalculation : g, b.changeSoundVolume = O(x.toggleEffectMuted, x.toggleMusicMuted);
        var U = '1' !== Z.cs_Launch.noAudio;
        b.audioConfigure = U, H && H();
      }
    }, m.initializeSettingMenu = function (x) {
      {
        var p = x.settingMenuHelper,
          b = x.dataSource,
          L = x.callback;
        p.setSettingMenuController(x.settingController), p.addSettingInfoFooter(x.settingWalletPanelController), p.setOnClickReturnButtonCallback(function () {
          {
            M.quitGameWithEvent("Setting Quit")();
          }
        }), p.setupSettingMenuButtons(), p.menuChangedCallBack = x.settingMenuChangedHandling ? x.settingMenuChangedHandling : K(x.spinButtonController);
        var H = b.playerModel.balance;
        p.setBalance(H), p.updateBetValues(), p.setAllButtonsInteractable(false), L && L();
      }
    }, m.updateBetChangesCallback = V, m.getBetChangeCallback = N, m.updateDataSourceBetValue = q, m.additionalBetCalculation = g, m.handleSettingMenuFlipped = K, m.handleSettingMenuMusicChange = O, cc._RF.pop();
  }
  function V(x, p, b) {
    return function (L, H) {
      var U = x.systemModel.maxLineNumber;
      p.betSizeValue = L, p.betLevelValue = H, q(x)(L, H), T.sendEvent(shell.ga.CATEGORY_GAME, shell.ga.EVENT_SLOT_CHANGE_BET, {
        'amount': L * H * U
      }), b && b();
    };
  }
  function N(x, p, b) {
    return function (L, H) {
      {
        V(x, p)(L, H), p.updateBetValues(), b && b();
      }
    };
  }
  function q(x, p) {
    {
      return function (b, L) {
        {
          x.transactionModel.betSizeValue = b, x.transactionModel.betLevelValue = L, p && p();
        }
      };
    }
  }
  function g(x, p, b) {
    return x * p * b;
  }
  function K(x) {
    return function (p) {
      p ? x.hide() : x.show();
    };
  }
  function O(x, p) {
    return function (b) {
      {
        x(!b), p(!b);
      }
    };
  }
}
module.exports = SettingMenuHandlers;
