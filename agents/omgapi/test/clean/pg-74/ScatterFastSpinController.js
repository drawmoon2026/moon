// module: ScatterFastSpinController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function ScatterFastSpinController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "a6e2dVtJS5Py6b5OU84kfws", "ScatterFastSpinController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B,
      X,
      Z = cc["_decorator"],
      T = Z["ccclass"],
      M = Z["property"];
    (function (V) {
      {
        V[V['A'] = 0] = 'A', V[V['B'] = 1] = 'B';
      }
    })(B || (B = {})), function (V) {
      {
        V[V["Playing"] = 0] = "Playing", V[V["Stopped"] = 1] = "Stopped";
      }
    }(X || (X = {}));
    var C = function (V) {
      function N() {
        var q = null !== V && V["apply"](this, arguments) || this;
        return q["content"] = void 0, q["fastGlowA"] = void 0, q["speedLineAnimation"] = void 0, q["fsGlowNode"] = [], q['I'] = void 0, q;
      }
      return __extends(N, V), N["prototype"]["play"] = function (q) {
        this["fsGlowNode"]["forEach"](function (f) {
          {
            f["opacity"] = 255, f["active"] = !0;
          }
        }), this["speedLineAnimation"]["stop"](), this["content"]['x'] = 186.4 * (q - 2), this['I'] = X["Playing"], this["content"]["stopAllActions"](), this["content"]["runAction"](cc["fadeIn"](0.5)), this["fastGlowA"]["runAction"](cc["tintTo"](0.5, 255, 255, 255)), this['Rd']();
      }, N["prototype"]["stop"] = function () {
        {
          this['I'] !== X["Stopped"] && (this['I'] = X["Stopped"], this['jd'](), this["content"]["runAction"](cc["fadeOut"](0.2)));
        }
      }, N["prototype"]['Rd'] = function () {
        {
          this["speedLineAnimation"]["node"]["active"] = !0, this["speedLineAnimation"]["node"]["stopAllActions"](), this["speedLineAnimation"]["node"]["runAction"](cc["fadeIn"](0.5)), this["speedLineAnimation"]["play"]("fast_spin_speedline", 0), this["speedLineAnimation"]["playAdditive"]("fast_vfx_b"), this["speedLineAnimation"]["playAdditive"]("fast_vfx_c"), this["speedLineAnimation"]["playAdditive"]("fast_vfx_d");
        }
      }, N["prototype"]['jd'] = function () {
        var q = this;
        this["speedLineAnimation"]["node"]["runAction"](cc["sequence"](cc["fadeOut"](0.2), cc["callFunc"](function () {
          q["speedLineAnimation"]["stop"](), q["speedLineAnimation"]["node"]["stopAllActions"](), q["speedLineAnimation"]["node"]["active"] = !1;
        }))), this["fastGlowA"]["runAction"](cc["tintTo"](0.2, 0, 0, 0));
      }, __decorate([M(cc["Node"])], N["prototype"], "content", void 0), __decorate([M(cc["Node"])], N["prototype"], "fastGlowA", void 0), __decorate([M(cc["Animation"])], N["prototype"], "speedLineAnimation", void 0), __decorate([M([cc["Node"]])], N["prototype"], "fsGlowNode", void 0), __decorate([T], N);
    }(cc["Component"]);
    I["default"] = C, cc["_RF"]["pop"]();
  }
}
module.exports = ScatterFastSpinController;
