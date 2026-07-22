// module: SettingSliderSingle
// Cocos 模块函数,参数 (require, module, exports) = (Q, module, exports)
function SettingSliderSingle(Q, module, exports) {
  'use strict';

  if (!cc._RF.push(module, "41cdfy0E9FKC7KilcTyf7iZ", "SettingSliderSingle")) {
    {
      exports.__esModule = true, exports.default = undefined;
      var j = cc.Class({
        'extends': cc.Component,
        'properties': {
          'settingSliderNum': cc.Prefab,
          'numbers': [cc.Float],
          'content': cc.Node,
          'valueLabel': cc.Label,
          'alwaysShow': false
        },
        'onEnable': function () {
          this.Hm(), this.node.on("size-changed", this.Hm, this);
        },
        'onDisable': function () {
          this.node.off("size-changed", this.Hm, this);
        },
        'Hm': function () {
          if (this.Om = cc.Canvas.instance.node.width / 2, this.Im) {
            for (var I = this.Tm, m = 0, B = I.length; m < B; m++) I[m].node.x = this.Om + 183 * m;
            this.updateSlider();
          }
        },
        'setBiggestValue': function () {
          var I = this.numbers.length - 1;
          this.setLight(I), this.content.x = -this.Om - 183 * I;
        },
        'setNumberList': function (I) {
          this.numbers = I;
        },
        'setValueColor': function (I, m) {
          this.Em = I, this.Nm = m;
        },
        'setPlaySound': function (I) {
          {
            this.Gm = I;
          }
        },
        'init': function () {
          var I = this;
          this.Im = false;
          for (var m = this.Tm = [], B = this.numbers, X = this.numbers.length - 1, Z = this.content, T = 0, M = this.numbers.length; T < M; T++) {
            var C = cc.instantiate(this.settingSliderNum),
              V = m[T] = C.getComponent("SettingSliderSingleNum");
            V.setColor(this.Em, this.Nm), V.num = B[T], C.x = this.Om + 183 * T, C.parent = this.content;
          }
          var N = -this.Om - 183 * X,
            q = -this.Om,
            g = this.node;
          if (g.on(cc.Node.EventType.TOUCH_START, function (O) {
            g.active && (O.stopPropagation(), I.km = O.getLocation().x, I.Rm = Z.x);
          }), g.on(cc.Node.EventType.TOUCH_MOVE, function (O) {
            if (g.active) {
              {
                O.stopPropagation();
                var x = O.getLocation().x - I.km,
                  p = I.Rm + x;
                if (p < N) Z.x = N, I.setLight(X);else if (p > q) Z.x = q, I.setLight(0);else {
                  var b = Math.round(x / 183),
                    L = 183 * b,
                    H = I.Rm + L;
                  Z.x = H, I.setLight(-((I.Om + I.Rm) / 183 + b));
                }
              }
            }
          }), g.on(cc.Node.EventType.TOUCH_CANCEL, function (O) {
            {
              g.active && (O.stopPropagation(), I.updateValue && I.updateValue(I.jm));
            }
          }), g.on(cc.Node.EventType.TOUCH_END, function (O) {
            g.active && (O.stopPropagation(), I.updateValue && I.updateValue(I.jm));
          }), this.alwaysShow) {
            var K = this.jm || 0;
            this.setDefaultFirstSliderNum(K);
          } else g.active = false;
          this.Im = true;
        },
        'setLight': function (I, m) {
          undefined === m && (m = false), I = Math.round(I);
          var B = this.jm;
          if (this.valueLabel ? this.jm = this.valueLabel.string = this.numbers[I] : this.jm = this.numbers[I], m || B == this.jm || this.Gm(), I % 1 == 0) {
            var X = this.Tm[I];
            if (X == this.Lm) return;
            X.setLight(true), this.Lm && this.Lm.setLight(false), this.Lm = X;
          } else this.Lm && (this.Lm.setLight(false), this.Lm = null);
          this.saveValue && this.saveValue(this.jm);
        },
        'setDefaultFirstSliderNum': function (I) {
          {
            var m = this.numbers.indexOf(I);
            -1 === m && (m = 0);
            var B = 183 * m,
              X = -this.Om - B;
            this.content.x = X, this.setLight(m, true);
          }
        },
        'setValue': function (I) {
          this.jm = I;
        },
        'getValue': function () {
          return this.jm;
        },
        'updateSlider': function () {
          this.setDefaultFirstSliderNum(this.jm);
        },
        'testSetSliderNum': function () {
          this.setDefaultFirstSliderNum(5 * Math.floor(21 * Math.random()));
        },
        'Gm': function () {}
      });
      exports.default = j, module.exports = exports.default, cc._RF.pop();
    }
  }
}
module.exports = SettingSliderSingle;
