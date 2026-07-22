// module: SettingSlider
// Cocos 模块函数,参数 (require, module, exports) = (l, module, exports)
function SettingSlider(l, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "357638pYQ9Eibsf8KFNqaZK", "SettingSlider")) {
    exports.__esModule = true, exports.default = undefined;
    var y = cc.Class({
      'extends': cc.Component,
      'properties': {
        'settingSliderNum': cc.Prefab,
        'numInterval': 10,
        'maxUnit': 10,
        'minNum': 0,
        'content': cc.Node,
        'alwaysShow': false,
        'isPositive': false,
        'showValue': false
      },
      'setValueColor': function (B, x) {
        {
          this.C_ = B, this.y_ = x;
        }
      },
      'init': function () {
        {
          for (var B = this, x = this.g_ = [], C = this.numInterval, H = this.minNum, V = this.maxUnit, M = this.content, q = 0; q <= V; q++) {
            {
              var m = cc.instantiate(this.settingSliderNum),
                D = x[q] = m.getComponent("SettingSliderNum");
              D.setColor(this.C_, this.y_), D.num = H + q * C, m.x = 621 + 210 * q, 0 == q ? D.isMin = true : D.setDisplayValue(this.showValue, D.num), m.parent = M;
            }
          }
          var W = -621 - 210 * V,
            k = this.node;
          if (k.on(cc.Node.EventType.TOUCH_START, function (L) {
            k.active && (L.stopPropagation(), B.w_ = L.getLocation().x, B.A_ = M.x);
          }), k.on(cc.Node.EventType.TOUCH_MOVE, function (L) {
            if (k.active) {
              {
                L.stopPropagation();
                var v = L.getLocation().x - B.w_,
                  b = B.A_ + v;
                if (b < W) M.x = W, B.setLight(V);else if (b > -621) M.x = -621, B.setLight(0);else {
                  {
                    var U = Math.round(v / 105),
                      Q = 105 * U,
                      w = B.A_ + Q;
                    M.x = w, B.setLight(-((621 + B.A_) / 105 + U) / 2);
                  }
                }
              }
            }
          }), k.on(cc.Node.EventType.TOUCH_CANCEL, function (L) {
            k.active && (L.stopPropagation(), B.saveValue && B.saveValue(B.P_));
          }), k.on(cc.Node.EventType.TOUCH_END, function (L) {
            k.active && (L.stopPropagation(), B.saveValue && B.saveValue(B.P_));
          }), this.alwaysShow) {
            {
              var z = this.P_ || 0;
              this.setDefaultFirstSliderNum(z);
            }
          } else k.active = false;
        }
      },
      'setLight': function (B, x) {
        if (undefined === x && (x = false), this.P_, !x && this.P_, B % 1 == 0) {
          var C = this.g_[B];
          if (C == this.B_) return void (this.saveValue && this.saveValue(this.P_));
          C.setLight(true), this.B_ && this.B_.setLight(false), this.B_ = C;
        } else this.B_ && (this.B_.setLight(false), this.B_ = null);
        this.saveValue && this.saveValue(this.P_);
      },
      'setDefaultFirstSliderNum': function (B) {
        var x = (B - this.minNum) / 5,
          C = -621 - 105 * x;
        this.content.x = C, this.setLight(x / 2, true);
      },
      'setValue': function (B) {
        this.P_ = B;
      },
      'getValue': function () {
        return this.P_;
      },
      'updateSlider': function () {
        this.setDefaultFirstSliderNum(this.P_);
      },
      'testSetSliderNum': function () {
        this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
      }
    });
    exports.default = y, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSlider;
