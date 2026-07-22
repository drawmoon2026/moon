// module: BACKUP_DATA
// Cocos 模块函数,参数 (require, module, exports) = (c, j, exports)
function BACKUP_DATA(c, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "4dc392lxVJArKflo+rU3j23", "BACKUP_DATA")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = {};
    B.default_font = "Arial";
    var X = new cc.Color(255, 200, 36, 255),
      Z = new cc.Color(255, 255, 255, 255),
      T = Object.freeze({
        'game': {
          'theme_color': X,
          'theme_font_family': "Arial",
          'white_color': Z
        },
        'game_title': B,
        'setting': {
          'theme_color': X,
          'theme_font': "Arial",
          'slider_switch_color': {
            'false': new cc.Color(144, 144, 150, 255),
            'true': X
          },
          'slider_line_color': {
            'false': new cc.Color(144, 144, 150, 20),
            'true': X
          },
          'label_switch_color_a': {
            'false': Z,
            'true': X
          },
          'label_switch_color_b': {
            'false': new cc.Color(144, 144, 150, 82),
            'true': X
          },
          'label_switch_color_c': {
            'false': new cc.Color(255, 255, 255, 30),
            'true': X
          },
          'button_switch_color_a': {
            'false': new cc.Color(Z.r, Z.g, Z.b, 79),
            'true': X
          },
          'color_button_transition_a': {
            'normal': X,
            'pressed': new cc.Color(X.r, X.g, X.b, 128),
            'hover': X,
            'disabled': new cc.Color(X.r, X.g, X.b, 66)
          },
          'white_button_transition_a': {
            'normal': Z,
            'pressed': new cc.Color(Z.r, Z.g, Z.b, 128),
            'hover': Z,
            'disabled': new cc.Color(Z.r, Z.g, Z.b, 66)
          },
          'grey_button_transition_a': {
            'normal': new cc.Color(Z.r, Z.g, Z.b, 153),
            'pressed': new cc.Color(133, 133, 133, 153),
            'hover': new cc.Color(Z.r, Z.g, Z.b, 153),
            'disabled': new cc.Color(133, 133, 133, 153)
          },
          'spin_start_label': new cc.Color(255, 255, 255, 201)
        },
        'login': {
          'theme_color': X,
          'default_font': "Arial"
        },
        'history': {
          'grey_button_transition_b': {
            'normal': Z,
            'pressed': new cc.Color(133, 133, 133),
            'hover': Z,
            'disabled': new cc.Color(133, 133, 133)
          },
          'white_button_transition_a': {
            'normal': Z,
            'pressed': new cc.Color(255, 255, 255, 128),
            'hover': Z,
            'disabled': new cc.Color(255, 255, 255, 66)
          },
          'calendar_title_select': {
            'true': X,
            'false': new cc.Color(255, 255, 255, 77)
          },
          'calendar_selection_line': new cc.Color(40, 40, 52, 235),
          'calendar_title_bg': new cc.Color(48, 48, 60, 255),
          'calendar_content_bg': new cc.Color(40, 40, 52, 235),
          'calendar_custom_bg': new cc.Color(48, 48, 60, 255),
          'calendar_custom_line_bg': new cc.Color(48, 48, 60, 255),
          'calendar_custom_title': new cc.Color(255, 255, 255, 153),
          'calendar_custom_dot': new cc.Color(255, 255, 255, 255),
          'calendar_custom_btn': {
            'normal': X,
            'pressed': new cc.Color(119, 119, 119, 255),
            'hover': X,
            'disabled': new cc.Color(87, 87, 87, 255)
          },
          'calendar_datepicker_default_font': new cc.Color(255, 255, 255, 77),
          'calendar_datepicker_highlight_font': X,
          'calendar_datepicker_highlight_bg': new cc.Color(48, 48, 60, 255),
          'calendar_datepicker_line': new cc.Color(40, 40, 52, 255),
          'theme_color': X,
          'theme_font': "Arial",
          'color_theme_opacity_a': new cc.Color(X.r, X.g, X.b, 153),
          'navigator_bg': new cc.Color(48, 48, 60),
          'navigator_bar_bg': new cc.Color(40, 40, 52),
          'history_bar_item_bg': {
            'normal': new cc.Color(48, 48, 60),
            'pressed': new cc.Color(57, 57, 75, 60),
            'hover': new cc.Color(48, 48, 60),
            'disabled': new cc.Color(40, 40, 52)
          },
          'history_bar_item_font_bg': {
            'false': Z,
            'true': X
          },
          'history_main_title': new cc.Color(241, 186, 91, 255),
          'history_list_item_arrow': new cc.Color(255, 255, 255, 64),
          'history_list_item_bg_odd': new cc.Color(40, 40, 52),
          'history_list_item_bg_even': new cc.Color(45, 45, 57),
          'history_list_item_bg_pressed': new cc.Color(60, 60, 70),
          'history_list_item_special_font': X,
          'history_list_item_value_font': new cc.Color(255, 255, 255, 153),
          'history_list_item_date_time_font': new cc.Color(255, 255, 255, 153),
          'history_list_item_line': new cc.Color(255, 255, 255, 0),
          'history_list_item_free_games_icon': X,
          'history_list_header_bg': new cc.Color(40, 40, 52, 255),
          'history_list_header_title_font': new cc.Color(255, 255, 255, 77),
          'history_list_bg': new cc.Color(48, 48, 60, 255),
          'history_list_bottom_circle_loading': Z,
          'history_list_middle_circle_loading': new cc.Color(255, 255, 255, 77),
          'history_list_bottom_label_color': Z,
          'history_list_middle_label_color': new cc.Color(255, 255, 255, 77),
          'history_list_retry': X,
          'history_list_message_title': new cc.Color(220, 220, 220, 153),
          'history_list_message_message': new cc.Color(220, 220, 220, 77),
          'history_list_title_date': new cc.Color(255, 255, 255, 153),
          'history_list_middle_loading_front': X,
          'history_list_middle_loading_back': new cc.Color(0.5 * X.r, 0.5 * X.g, 0.5 * X.b),
          'history_list_middle_loading_font_color': X,
          'history_list_bottom_loading_front': X,
          'history_list_bottom_loading_back': new cc.Color(0.5 * X.r, 0.5 * X.g, 0.5 * X.b),
          'history_summary_bg': new cc.Color(40, 40, 52, 255),
          'history_summary_title_font': X,
          'history_summary_record_font': new cc.Color(255, 255, 255, 153),
          'history_summary_amount_font': Z,
          'history_detail_header_title_font': X,
          'history_detail_header_value_font': new cc.Color(120, 120, 120, 255),
          'history_detail_header_bg': new cc.Color(40, 40, 52, 255),
          'history_detail_down_arrow': X,
          'history_detail_line': new cc.Color(40, 40, 52, 255),
          'history_detail_payout_font': new cc.Color(255, 255, 255, 66),
          'history_detail_win_line_value_font': Z,
          'history_detail_content_bg': new cc.Color(48, 48, 60),
          'history_detail_no_win_combination_font': new cc.Color(255, 255, 255, 204),
          'history_detail_title_font': Z,
          'history_detail_page_arrow': X,
          'history_detail_page_arrow_bg': new cc.Color(0, 0, 0, 100),
          'history_bar_close_font': new cc.Color(255, 255, 255, 204),
          'history_bar_bg': new cc.Color(48, 48, 60, 255)
        },
        'alert': {
          'default_title_color': Z,
          'default_message_color': Z,
          'default_button_title_color': Z,
          'default_button_color': X,
          'default_font': "Arial"
        },
        'free_game': {
          'theme_color': X,
          'theme_font': "Arial"
        },
        'bonus_wallet': {
          'theme_color': X,
          'theme_font': "Arial"
        },
        'setting_rules': {
          'title_color': new cc.Color(255, 255, 255),
          'desc_color': new cc.Color(204, 204, 204),
          'font_style': "Arial"
        },
        'setting_payout': {
          'title_color': new cc.Color(255, 255, 255),
          'value_color': new cc.Color(255, 255, 255),
          'value_color_red': new cc.Color(192, 38, 48),
          'desc_color': new cc.Color(204, 204, 204),
          'font_style': "Arial"
        },
        'loading': {
          'front_icon_color': X,
          'back_icon_color': new cc.Color(0.5 * X.r, 0.5 * X.g, 0.5 * X.b),
          'background_color': new cc.Color(0, 0, 0, 0),
          'font_color': X,
          'font_style': "Arial"
        }
      });
    exports.default = T, cc._RF.pop();
  }
}
module.exports = BACKUP_DATA;
