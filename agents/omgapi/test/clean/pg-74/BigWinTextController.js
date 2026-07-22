// module: BigWinTextController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function BigWinTextController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "898b60qAJxEz6mS8OIzdH+l", "BigWinTextController")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("BigWinController"),
        X = cc["_decorator"],
        Z = X["ccclass"],
        T = X["property"],
        M = function (C) {
          {
            function V() {
              var N = null !== C && C["apply"](this, arguments) || this;
              return N["bigWinTextNode"] = void 0, N["bigWInTextHolderNode"] = void 0, N["winAmountHolderNode"] = void 0, N["bigWinSprite"] = void 0, N['$t'] = void 0, N['ti'] = void 0, N['ii'] = void 0, N['ei'] = void 0, N;
            }
            return __extends(V, C), V["prototype"]["init"] = function (N, q, f) {
              this["bigWinTextNode"]["active"] = !1, this['ti'] = N, this['ii'] = q, this['ei'] = f;
            }, V["prototype"]["play"] = function (N, q) {
              {
                switch (this['$t'] = q, this["bigWinTextNode"]["active"] = !0, this["winAmountHolderNode"]['y'] = 0, this["winAmountHolderNode"]["opacity"] = 255, this["bigWinTextNode"]["stopAllActions"](), this["bigWinTextNode"]["runAction"](cc["scaleTo"](0.3, 1.43)), N) {
                  case B["WinRollState"]["BIG_WIN"]:
                    this["bigWinSprite"]["spriteFrame"] = this['ti'], this['ni'](this["bigWinTextNode"]), this['ni'](this["winAmountHolderNode"], 0.1);
                    break;
                  case B["WinRollState"]["MEGA_WIN"]:
                    this["bigWinSprite"]["spriteFrame"] = this['ii'], this['ni'](this["bigWinTextNode"]), this['ni'](this["winAmountHolderNode"], 0.1);
                    break;
                  case B["WinRollState"]["SUPER_MEGA_WIN"]:
                    this["bigWinSprite"]["spriteFrame"] = this['ei'], this['ni'](this["bigWinTextNode"]), this['ni'](this["winAmountHolderNode"], 0.1);
                }
                this['oi']();
              }
            }, V["prototype"]["hideNumber"] = function () {
              this["winAmountHolderNode"]["scale"] = 0;
            }, V["prototype"]["showNumber"] = function () {
              this["winAmountHolderNode"]["scale"] = 1;
            }, V["prototype"]["playEnd"] = function () {
              {
                this["winAmountHolderNode"]["scale"] = 1, this['ni'](this["bigWinTextNode"]), this['ni'](this["winAmountHolderNode"], 0.1);
              }
            }, V["prototype"]['oi'] = function () {
              var N = this['$t'];
              this['$t'] = void 0, N && N();
            }, V["prototype"]['ni'] = function (N, q) {
              q || (q = 0), N["scale"] = 0, N["stopAllActions"](), N["runAction"](cc["sequence"](cc["delayTime"](q), cc["scaleTo"](0.2, 1.15), cc["scaleTo"](0.2, 1)));
            }, V["prototype"]["dismiss"] = function () {}, V["prototype"]["stop"] = function () {
              var N = this["bigWinTextNode"];
              N["stopAllActions"](), N["active"] = !1;
            }, V["prototype"]["destroy"] = function () {
              {
                return this["stop"](), this["node"]["destroy"](), C["prototype"]["destroy"]["call"](this);
              }
            }, __decorate([T(cc["Node"])], V["prototype"], "bigWinTextNode", void 0), __decorate([T(cc["Node"])], V["prototype"], "bigWInTextHolderNode", void 0), __decorate([T(cc["Node"])], V["prototype"], "winAmountHolderNode", void 0), __decorate([T(cc["Sprite"])], V["prototype"], "bigWinSprite", void 0), __decorate([Z], V);
          }
        }(cc["Component"]);
      I["default"] = M, cc["_RF"]["pop"]();
    }
  }
}
module.exports = BigWinTextController;
