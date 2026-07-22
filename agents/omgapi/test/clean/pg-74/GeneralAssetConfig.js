// module: GeneralAssetConfig
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function GeneralAssetConfig(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "180b37pO7xHD7ZyVGmr8Xxj", "GeneralAssetConfig")) {
    {
      var I = {};
      I["value"] = !0;
      Object["defineProperty"](j, "__esModule", I), j["generalAssetConfig"] = void 0;
      var m = F("UIAppearanceHelper");
      j["generalAssetConfig"] = function () {
        {
          var B = {};
          B["name"] = "background_controller";
          B["url"] = "load_res/background_controller";
          B["type"] = cc["Prefab"];
          B["isLocalized"] = !1;
          var X = {};
          X["name"] = "slot_controller";
          X["url"] = "load_res/slot_controller";
          X["type"] = cc["Prefab"];
          X["isLocalized"] = !1;
          var Z = {};
          Z["name"] = "infoboard_controller";
          Z["url"] = "load_res/infoboard_controller";
          Z["type"] = cc["Prefab"];
          Z["isLocalized"] = !1;
          return [B, X, Z, {
            'name': "spin_button_controller",
            'url': m["uiAppearanceHelper"]['v']("game_skin.spin_button_prefab"),
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "big_win_controller",
            'url': "load_res/big_win_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "setting_menu_wallet_panel",
            'url': "lib/setting_menu/prefab/info_footer/setting_info_footer_controller",
            'type': cc["Prefab"]
          }, {
            'name': "total_win_controller",
            'url': "load_res/total_win_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "bonus_loading_controller",
            'url': "load_res/bonus_loading_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "foreground_controller",
            'url': "load_res/foreground_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "scatter_fast_spin_controller",
            'url': "load_res/scatter_fast_spin_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "multiplier_bar_controller",
            'url': m["uiAppearanceHelper"]['v']("game_skin.multiplier_bar_prefab"),
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "symbol_popout_controller",
            'url': "load_res/symbol_payout_controller",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "big_win_texture",
            'url': "texture/big_win/big_win_texture",
            'type': cc["SpriteAtlas"],
            'isLocalized': !0
          }, {
            'name': "bonus_loading_texture",
            'url': "texture/bonus_loading/bonus_loading_texture",
            'type': cc["SpriteAtlas"],
            'isLocalized': !0
          }, {
            'name': "total_win_texture",
            'url': "texture/total_win/total_win_texture",
            'type': cc["SpriteAtlas"],
            'isLocalized': !0
          }, {
            'name': "info_message",
            'url': "texture/info_message/info_message",
            'type': cc["SpriteAtlas"],
            'isLocalized': !0
          }, {
            'name': "symbols",
            'url': "texture/symbols/symbols",
            'type': cc["SpriteAtlas"],
            'isLocalized': !1
          }, {
            'name': "feature_symbols",
            'url': "texture/symbols/feature_symbols",
            'type': cc["SpriteAtlas"],
            'isLocalized': !0
          }, {
            'name': "click_effect",
            'url': "lib/click_effect/prefab/click_effect_layer",
            'type': cc["Prefab"],
            'isLocalized': !1
          }, {
            'name': "symbol_prefab",
            'url': m["uiAppearanceHelper"]['v']("game_skin.symbol_prefab"),
            'type': cc["Prefab"],
            'isLocalized': !1
          }];
        }
      }, cc["_RF"]["pop"]();
    }
  }
}
module.exports = GeneralAssetConfig;
