// module: SettingMenuButtonHelper
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SettingMenuButtonHelper(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "1ddf5VqGQ9OiqajxiLxeBVw", "SettingMenuButtonHelper")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = cc["_decorator"]["ccclass"],
      B = function () {
        function X() {
          {
            this['rv'] = [], this['av'] = Object["create"](null), this['uv'] = Object["create"](null), this['lv'] = Object["create"](null), this['fv'] = Object["create"](null), this['dv'] = Object["create"](null), this['vv'] = Object["create"](null);
          }
        }
        return X["prototype"]["setButtonPrefab"] = function (Z, T, M) {
          {
            this['av'][Z] = T, this['vv'][Z] = M;
          }
        }, X["prototype"]["totalButtonsOccupied"] = function () {
          return this['rv']["length"];
        }, X["prototype"]["getButtonInList"] = function (Z) {
          return cc["instantiate"](this['av'][Z])["getComponent"]("GenericSettingButton");
        }, X["prototype"]["setupSettingMenuButtonInList"] = function (Z, T, M) {
          {
            var C = cc["instantiate"](this['av'][Z]),
              V = C["getComponent"]("GenericSettingButton");
            return this['rv']["push"](V["button"]), V["onClick"] = T, this['lv'][Z] = !1, this['fv'][Z] = V, M && (C["getComponent"]("ButtonTheme")["colorKey"] = M), V;
          }
        }, X["prototype"]["setupIndependentSettingMenuButton"] = function (Z, T) {
          if (this['av'][Z]) {
            {
              var M = cc["instantiate"](this['av'][Z])["getComponent"]("GenericSettingButton");
              return M["onClick"] = T, this['lv'][Z] = !1, this['fv'][Z] = M, M;
            }
          }
        }, X["prototype"]["setupOtherButtonInList"] = function (Z, T) {
          {
            var M = {};
            M["isInteractable"] = T;
            this['lv'][Z] = !1, this['dv'][Z] = M, this['vv'][Z] = !1;
          }
        }, X["prototype"]["setButtonInteractableFlag"] = function (Z, T) {
          void 0 === T && (T = !1), this['uv'][Z] = T;
        }, X["prototype"]["setButtonInteractable"] = function (Z) {
          {
            this['vv'][Z] || !1 !== this['lv'][Z] || (this['dv'][Z] ? this['dv'][Z]["isInteractable"](this['uv'][Z]) : this['fv'][Z]["isInteractable"] = this['uv'][Z]);
          }
        }, X["prototype"]["setButtonLock"] = function (Z, T) {
          void 0 === T && (T = !1), this['lv'][Z] = T;
        }, X["prototype"]["isButtonLocked"] = function (Z) {
          {
            return this['lv'][Z];
          }
        }, X["prototype"]["setAllButtonsInteractable"] = function (Z) {
          for (var T = Object["keys"](this['fv']), M = 0, C = T["length"]; M < C; M++) this["setButtonInteractableFlag"](parseInt(T[M]), Z), this["setButtonInteractable"](parseInt(T[M]));
          var V = Object["keys"](this['dv']);
          for (M = 0, C = V["length"]; M < C; M++) this["setButtonInteractableFlag"](parseInt(V[M]), Z), this["setButtonInteractable"](parseInt(V[M]));
        }, X["prototype"]["setButtonsLock"] = function (Z) {
          for (var T = 0, M = Object["keys"](this['fv'])["length"]; T < M; T++) this["setButtonLock"](T + 1, Z);
          for (T = 0, M = Object["keys"](this['dv'])["length"]; T < M; T++) this["setButtonLock"](T + 1, Z);
        }, X["prototype"]["setLockAccess"] = function (Z, T) {
          this["setButtonLock"](Z, T), T ? this['dv'][Z] ? this['dv'][Z]["isInteractable"](!T) : this['fv'][Z]["isInteractable"] = !T : this["setButtonInteractable"](Z);
        }, X["prototype"]["getButtonNode"] = function (Z) {
          var T = this['fv'][Z];
          return T ? T["node"] : void 0;
        }, __decorate([m("SettingMenuButtonHelper")], X);
      }();
    j["default"] = B, cc["_RF"]["pop"]();
  }
}
module.exports = SettingMenuButtonHelper;
