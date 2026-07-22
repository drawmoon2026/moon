// module: SettingSliderSingle
// Cocos 模块函数,参数 (require, module, exports) = (l, module, exports)
function SettingSliderSingle(l, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "41cdfy0E9FKC7KilcTyf7iZ", "SettingSliderSingle")) {
    exports.__esModule = true, exports.default = undefined;
    var y = cc.Class({
      'extends': cc.Component,
      'properties': {
        'settingSliderNum': cc.Prefab,
        'numbers': [cc.Float],
        'content': cc.Node,
        'valueLabel': cc.Label,
        'alwaysShow': false
      },
      'onEnable': function () {
        this.b_(), this.node.on("size-changed", this.b_, this);
      },
      'onDisable': function () {
        {
          this.node.off("size-changed", this.b_, this);
        }
      },
      'b_': function () {
        if (this.m_ = cc.Canvas.instance.node.width / 2, this.S_) {
          {
            for (var B = this.g_, x = 0, C = B.length; x < C; x++) B[x].node.x = this.m_ + 183 * x;
            this.updateSlider();
          }
        }
      },
      'setBiggestValue': function () {
        var B = this.numbers.length - 1;
        this.setLight(B), this.content.x = -this.m_ - 183 * B;
      },
      'setNumberList': function (B) {
        this.numbers = B;
      },
      'setValueColor': function (B, x) {
        this.C_ = B, this.y_ = x;
      },
      'setPlaySound': function (B) {
        this.M_ = B;
      },
      'init': function () {
        {
          var B = this;
          this.S_ = false;
          for (var x = this.g_ = [], C = this.numbers, H = this.numbers.length - 1, V = this.content, M = 0, q = this.numbers.length; M < q; M++) {
            var m = cc.instantiate(this.settingSliderNum),
              D = x[M] = m.getComponent("SettingSliderSingleNum");
            D.setColor(this.C_, this.y_), D.num = C[M], m.x = this.m_ + 183 * M, m.parent = this.content;
          }
          var W = -this.m_ - 183 * H,
            k = -this.m_,
            z = this.node;
          if (z.on(cc.Node.EventType.TOUCH_START, function (v) {
            {
              z.active && (v.stopPropagation(), B.w_ = v.getLocation().x, B.A_ = V.x);
            }
          }), z.on(cc.Node.EventType.TOUCH_MOVE, function (v) {
            if (z.active) {
              v.stopPropagation();
              var b = v.getLocation().x - B.w_,
                U = B.A_ + b;
              if (U < W) V.x = W, B.setLight(H);else if (U > k) V.x = k, B.setLight(0);else {
                var Q = Math.round(b / 183),
                  w = 183 * Q,
                  P = B.A_ + w;
                V.x = P, B.setLight(-((B.m_ + B.A_) / 183 + Q));
              }
            }
          }), z.on(cc.Node.EventType.TOUCH_CANCEL, function (v) {
            z.active && (v.stopPropagation(), B.updateValue && B.updateValue(B.P_));
          }), z.on(cc.Node.EventType.TOUCH_END, function (v) {
            z.active && (v.stopPropagation(), B.updateValue && B.updateValue(B.P_));
          }), this.alwaysShow) {
            var L = this.P_ || 0;
            this.setDefaultFirstSliderNum(L);
          } else z.active = false;
          this.S_ = true;
        }
      },
      'setLight': function (B, x) {
        undefined === x && (x = false), B = Math.round(B);
        var C = this.P_;
        if (this.valueLabel ? this.P_ = this.valueLabel.string = this.numbers[B] : this.P_ = this.numbers[B], x || C == this.P_ || this.M_(), B % 1 == 0) {
          var H = this.g_[B];
          if (H == this.B_) return;
          H.setLight(true), this.B_ && this.B_.setLight(false), this.B_ = H;
        } else this.B_ && (this.B_.setLight(false), this.B_ = null);
        this.saveValue && this.saveValue(this.P_);
      },
      'setDefaultFirstSliderNum': function (B) {
        var x = this.numbers.indexOf(B);
        -1 === x && (x = 0);
        var C = 183 * x,
          H = -this.m_ - C;
        this.content.x = H, this.setLight(x, true);
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
        {
          this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
        }
      },
      'M_': function () {}
    });
    exports.default = y, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSliderSingle;
