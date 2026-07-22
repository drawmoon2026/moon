// module: WildSymbolController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function WildSymbolController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "c4f2fndl91OwLsTRsp+S0cz", "WildSymbolController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = cc["_decorator"],
      X = B["ccclass"],
      Z = B["property"],
      T = function (M) {
        function C() {
          var V = null !== M && M["apply"](this, arguments) || this;
          return V["wildSpine"] = void 0, V;
        }
        return __extends(C, M), C["prototype"]["playSpawn"] = function () {
          this["node"]["active"] = !0, this["wildSpine"]["setAnimation"](0, "spawn", !1), this["wildSpine"]["setCompleteListener"](this['eC']["bind"](this, !0));
        }, C["prototype"]["playWin"] = function () {
          this["node"]["active"] = !0, this["wildSpine"]["setAnimation"](0, "win", !1), this["wildSpine"]["setCompleteListener"](this['nC']["bind"](this, !0));
        }, C["prototype"]["stop"] = function () {
          {
            var V = this["wildSpine"];
            V["clearTrack"](0), V["setToSetupPose"](), V["setCompleteListener"](void 0), this["node"]["active"] = !1;
          }
        }, C["prototype"]['nC'] = function (V) {
          void 0 === V && (V = !0), this["wildSpine"]["setAnimation"](0, "win_idle", V);
        }, C["prototype"]['eC'] = function (V) {
          void 0 === V && (V = !1), this["node"]["active"] = !0, this["wildSpine"]["setAnimation"](0, "idle", V);
        }, C["prototype"]["destroy"] = function () {
          return this["node"]["destroy"](), M["prototype"]["destroy"]["call"](this);
        }, __decorate([Z(sp["Skeleton"])], C["prototype"], "wildSpine", void 0), __decorate([X], C);
      }(cc["Component"]);
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = WildSymbolController;
