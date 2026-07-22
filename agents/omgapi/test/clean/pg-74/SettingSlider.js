// module: SettingSlider
// Cocos 模块函数,参数 (require, module, exports) = (Q, module, exports)
function SettingSlider(Q, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "357638pYQ9Eibsf8KFNqaZK", "SettingSlider")) {
    exports.__esModule = true, exports.default = undefined;
    var j = cc.Class({
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
      'setValueColor': function (I, m) {
        {
          this.Em = I, this.Nm = m;
        }
      },
      'init': function () {
        for (var I = this, m = this.Tm = [], B = this.numInterval, X = this.minNum, Z = this.maxUnit, T = this.content, M = 0; M <= Z; M++) {
          var C = cc.instantiate(this.settingSliderNum),
            V = m[M] = C.getComponent("SettingSliderNum");
          V.setColor(this.Em, this.Nm), V.num = X + M * B, C.x = 621 + 210 * M, 0 == M ? V.isMin = true : V.setDisplayValue(this.showValue, V.num), C.parent = T;
        }
        var N = -621 - 210 * Z,
          q = this.node;
        if (q.on(cc.Node.EventType.TOUCH_START, function (g) {
          q.active && (g.stopPropagation(), I.km = g.getLocation().x, I.Rm = T.x);
        }), q.on(cc.Node.EventType.TOUCH_MOVE, function (g) {
          if (q.active) {
            {
              g.stopPropagation();
              var K = g.getLocation().x - I.km,
                O = I.Rm + K;
              if (O < N) T.x = N, I.setLight(Z);else if (O > -621) T.x = -621, I.setLight(0);else {
                var x = Math.round(K / 105),
                  p = 105 * x,
                  b = I.Rm + p;
                T.x = b, I.setLight(-((621 + I.Rm) / 105 + x) / 2);
              }
            }
          }
        }), q.on(cc.Node.EventType.TOUCH_CANCEL, function (g) {
          q.active && (g.stopPropagation(), I.saveValue && I.saveValue(I.jm));
        }), q.on(cc.Node.EventType.TOUCH_END, function (g) {
          {
            q.active && (g.stopPropagation(), I.saveValue && I.saveValue(I.jm));
          }
        }), this.alwaysShow) {
          {
            var f = this.jm || 0;
            this.setDefaultFirstSliderNum(f);
          }
        } else q.active = false;
      },
      'setLight': function (I, m) {
        if (undefined === m && (m = false), this.jm, !m && this.jm, I % 1 == 0) {
          var B = this.Tm[I];
          if (B == this.Lm) return void (this.saveValue && this.saveValue(this.jm));
          B.setLight(true), this.Lm && this.Lm.setLight(false), this.Lm = B;
        } else this.Lm && (this.Lm.setLight(false), this.Lm = null);
        this.saveValue && this.saveValue(this.jm);
      },
      'setDefaultFirstSliderNum': function (I) {
        var m = (I - this.minNum) / 5,
          B = -621 - 105 * m;
        this.content.x = B, this.setLight(m / 2, true);
      },
      'setValue': function (I) {
        {
          this.jm = I;
        }
      },
      'getValue': function () {
        {
          return this.jm;
        }
      },
      'updateSlider': function () {
        this.setDefaultFirstSliderNum(this.jm);
      },
      'testSetSliderNum': function () {
        this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
      }
    });
    exports.default = j, module.exports = exports.default, cc._RF.pop();
  }
}
module.exports = SettingSlider;
