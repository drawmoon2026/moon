// module: MultiplierBoardController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MultiplierBoardController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "8dad3hkA+VNT7RHJJUwSzJ7", "MultiplierBoardController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m), I["PlayAnimType"] = void 0;
      var B,
        X = F("MultiplierItem"),
        Z = F("GameConstant"),
        T = F("AudioConstant"),
        M = F("AudioManager"),
        C = F("Utils"),
        V = cc["_decorator"],
        N = V["ccclass"],
        q = V["property"];
      (function (K) {
        K[K["Once"] = 1] = "Once", K[K["Loop"] = 2] = "Loop", K[K["None"] = 0] = "None";
      })(B = I["PlayAnimType"] || (I["PlayAnimType"] = {}));
      var g = function (K) {
        function O() {
          var x = null !== K && K["apply"](this, arguments) || this;
          return x["waysTextS"] = void 0, x["multiplyierVfxA"] = void 0, x["background"] = void 0, x["background_bonus"] = void 0, x["background_normal"] = void 0, x["content"] = void 0, x["multiplierEffect"] = void 0, x["multiplierVfxA"] = void 0, x["multiplierVfxB"] = void 0, x["multiplierItem"] = [], x['hl'] = 0, x['al'] = [], x['ul'] = -320, x['ll'] = 205, x['fl'] = !1, x;
        }
        return __extends(O, K), O["prototype"]["setWaysTextSpriteFrame"] = function (x) {
          this["waysTextS"]["spriteFrame"] = x;
        }, O["prototype"]["switchToBonusBackground"] = function () {
          {
            this["background"]["spriteFrame"] = this["background_bonus"], this["background"]["node"]['y'] = 9, this["multiplierEffect"]["active"] = !1;
            for (var x = 0; x < this["multiplierItem"]["length"]; x++) {
              {
                var p = this["multiplierItem"][x];
                p["setInactive"](), p["changeToFreeSpinInactive"]();
              }
            }
          }
        }, O["prototype"]["switchToNormalBackground"] = function () {
          this["background"]["spriteFrame"] = this["background_normal"], this["background"]["node"]['y'] = 0, this["multiplierEffect"]["active"] = !1;
          for (var x = 0; x < this["multiplierItem"]["length"]; x++) this["multiplierItem"][x]["setInactive"]();
        }, O["prototype"]["switchMultiplier"] = function (x, p, b) {
          switch (void 0 === b && (b = !0), x) {
            case Z["TransitionState"]["FREE_SPIN"]:
            case Z["TransitionState"]["FREE_SPIN_RESPIN"]:
              if (this['al'] = [T["VOX"]["voxMultiply2x"]["key"], T["VOX"]["voxMultiply4x"]["key"], T["VOX"]["voxMultiply6x"]["key"], T["VOX"]["voxMultiply10x"]["key"]], b) this['dl'](x, p);else {
                {
                  for (var L = 0; L < this["multiplierItem"]["length"]; L++) this["multiplierItem"][L]["switchSpriteFrame"](x, void 0, !0);
                  this["switchToBonusBackground"](), p && p();
                }
              }
              break;
            case Z["TransitionState"]["NORMAL"]:
            case Z["TransitionState"]["RESPIN"]:
            default:
              for (this['al'] = [void 0, T["VOX"]["voxMultiply2x"]["key"], T["VOX"]["voxMultiply3x"]["key"], T["VOX"]["voxMultiply5x"]["key"]], L = 0; L < this["multiplierItem"]["length"]; L++) this["multiplierItem"][L]["switchSpriteFrame"](x);
              this["switchToNormalBackground"](), p && p();
          }
        }, O["prototype"]["initMultiplier"] = function (x, p) {
          this["setMultiplier"](x, p, !0);
        }, O["prototype"]["resetMultiplier"] = function () {
          {
            this["setMultiplier"](0, B["None"]);
          }
        }, O["prototype"]["setMultiplier"] = function (x, p, b) {
          switch (void 0 === p && (p = B["Once"]), void 0 === b && (b = !1), this["multiplierEffect"]["active"] = !0, this["multiplierEffect"]['x'] = this['ul'] + x * this['ll'], !b && this['vl'](x), x) {
            case 0:
              this["multiplyierVfxA"]["node"]["setRotation"](-1.5), this["multiplyierVfxA"]["node"]['y'] = -44;
              break;
            case 1:
              this["multiplyierVfxA"]["node"]["setRotation"](-1), this["multiplyierVfxA"]["node"]['y'] = -41;
              break;
            case 2:
              this["multiplyierVfxA"]["node"]["setRotation"](1), this["multiplyierVfxA"]["node"]['y'] = -41;
              break;
            case 3:
              this["multiplyierVfxA"]["node"]["setRotation"](1.5), this["multiplyierVfxA"]["node"]['y'] = -44;
          }
          for (var L = 0; L < this["multiplierItem"]["length"]; L++) {
            var H = this["multiplierItem"][L];
            if (L === x) {
              H["setActive"](p !== B["None"]);
              var U = p === B["Loop"];
              this['fl'] ? this['fl'] !== U && (this['fl'] = U, this['_l'](p)) : (this['fl'] = U, this['_l'](p));
            } else H["setInactive"]();
          }
          this['hl'] = x;
        }, O["prototype"]["playMultiplierSound"] = function () {
          M["playAudio"](T["GENERAL_AUDIO"]["multiplierUpUpUp"]["key"]);
        }, O["prototype"]['vl'] = function (x) {
          var p = this['hl'],
            b = [void 0, T["GENERAL_AUDIO"]["multiplierA"]["key"], T["GENERAL_AUDIO"]["multiplierB"]["key"], T["GENERAL_AUDIO"]["multiplierC"]["key"]];
          b[x] && M["playAudio"](b[x]), x === p && 0 === x || this['al'][x] && M["playVocal"](this['al'][x]);
        }, O["prototype"]['dl'] = function (x, p) {
          {
            var b = this;
            C["sequenceCallback"](function (L) {
              {
                b["multiplierItem"][0]["switchSpriteFrame"](x), L && L();
              }
            }, C["delayCallback"](0.15), function (L) {
              {
                b["multiplierItem"][1]["switchSpriteFrame"](x), L && L();
              }
            }, C["delayCallback"](0.15), function (L) {
              b["multiplierItem"][2]["switchSpriteFrame"](x), L && L();
            }, C["delayCallback"](0.15), function (L) {
              {
                b["multiplierItem"][3]["switchSpriteFrame"](x), L && L();
              }
            }, C["delayCallback"](0.3))(function () {
              p && p();
            });
          }
        }, O["prototype"]['bl'] = function () {
          this['fl'] && this['_l'](B["Loop"]);
        }, O["prototype"]['_l'] = function (x) {
          {
            switch (this["multiplierVfxA"]["opacity"] = 255, x) {
              case B["Once"]:
                this["multiplierVfxB"]["node"]["active"] = !0, this["multiplierVfxB"]["stop"](), this["multiplierVfxB"]["setCurrentTime"](0), this["multiplierVfxB"]["play"]();
                break;
              case B["Loop"]:
                this["multiplierVfxB"]["node"]["active"] = !0, this["multiplierVfxB"]["play"](), C["delayCallback"](0.85)(this['bl']["bind"](this));
            }
          }
        }, __decorate([q(cc["Sprite"])], O["prototype"], "waysTextS", void 0), __decorate([q(cc["Sprite"])], O["prototype"], "multiplyierVfxA", void 0), __decorate([q(cc["Sprite"])], O["prototype"], "background", void 0), __decorate([q(cc["SpriteFrame"])], O["prototype"], "background_bonus", void 0), __decorate([q(cc["SpriteFrame"])], O["prototype"], "background_normal", void 0), __decorate([q(cc["Layout"])], O["prototype"], "content", void 0), __decorate([q(cc["Node"])], O["prototype"], "multiplierEffect", void 0), __decorate([q(cc["Node"])], O["prototype"], "multiplierVfxA", void 0), __decorate([q(cc["Animation"])], O["prototype"], "multiplierVfxB", void 0), __decorate([q(X["default"])], O["prototype"], "multiplierItem", void 0), __decorate([N], O);
      }(cc["Component"]);
      I["default"] = g, cc["_RF"]["pop"]();
    }
  }
}
module.exports = MultiplierBoardController;
