// module: SymbolPayoutPanelGenerator
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function SymbolPayoutPanelGenerator(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "b4807S7wZxNyKaQIPwkQNfI", "SymbolPayoutPanelGenerator")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I), j["regeneratePanel"] = j["getButtonList"] = j["getButtonComponentList"] = j["getButtonControllerList"] = j["generatePanel"] = j["symbolPayoutPanelGenerator"] = void 0;
    var m = F("ButtonController"),
      B = function () {
        {
          function X() {
            {
              this['As'] = [], this['AS'] = [], this['HS'] = [], this['OS'] = new cc["NodePool"]();
            }
          }
          return X["prototype"]['IS'] = function (Z, T, M, C, V, N, q) {
            {
              var g = Math["floor"](M % q),
                K = Math["floor"](M / q),
                O = V * (1 - Z["anchorY"]),
                x = C * Z["anchorX"],
                p = O - T["height"] / 2,
                b = -(x - T["width"] / 2),
                L = p - T["height"] * g,
                H = b + T["width"] * K;
              T["setPosition"](H, L);
            }
          }, X["prototype"]["generatePanel"] = function (Z) {
            var T = Z["containerNode"],
              M = Z["containerSize"] ? Z["containerSize"] : T["getContentSize"](),
              C = M["width"],
              V = M["height"];
            T["width"] = C, T["height"] = V;
            for (var N = Z["numberOfColumn"], q = Z["numberOfRow"], g = Z["numberOfButton"] ? Z["numberOfButton"] : N * q, K = C / N, O = V / q, x = 0; x < g; x++) {
              {
                var p = this['OS']["get"](),
                  L = void 0,
                  H = void 0;
                if (p) L = p["getComponent"](m["default"]), H = p["getComponent"](cc["Button"]);else {
                  p = new cc["Node"]("payout_button");
                  var U = new cc["Node"]("background");
                  p["addChild"](U), H = p["addComponent"](cc["Button"]), L = p["addComponent"](m["default"]), H["target"] = U, p["height"] = Z["buttonHeight"] ? Z["buttonHeight"] : O, p["width"] = Z["buttonWidth"] ? Z["buttonWidth"] : K, H["transition"] = cc["Button"]["Transition"]["COLOR"], H["pressedColor"] = cc["Color"]["GRAY"];
                  var k = U["addComponent"](cc["Sprite"]);
                  k["sizeMode"] = cc["Sprite"]["SizeMode"]["CUSTOM"], Z["buttonBase"] && (k["spriteFrame"] = Z["buttonBase"]["spriteFrame"]), U["height"] = O, U["width"] = K;
                }
                p["parent"] = T;
                var Y = Z["buttonPosition"];
                Y ? p["setPosition"](Y[x]) : this['IS'](T, p, x, C, V, N, q), this['As']["push"](p), this['AS']["push"](L), this['HS']["push"](H);
              }
            }
          }, X["prototype"]["getButtonList"] = function () {
            return this['As'];
          }, X["prototype"]["getButtonControllerList"] = function () {
            {
              return this['AS'];
            }
          }, X["prototype"]["getButtonComponentList"] = function () {
            return this['HS'];
          }, X["prototype"]["regeneratePanel"] = function (Z) {
            var T = this;
            this['As']["forEach"](function (M) {
              T['OS']["put"](M);
            }), this['As'] = [], this['HS'] = [], this['AS'] = [], this["generatePanel"](Z);
          }, X;
        }
      }();
    j["default"] = B, j["symbolPayoutPanelGenerator"] = new B(), j["generatePanel"] = j["symbolPayoutPanelGenerator"]["generatePanel"]["bind"](j["symbolPayoutPanelGenerator"]), j["getButtonControllerList"] = j["symbolPayoutPanelGenerator"]["getButtonControllerList"]["bind"](j["symbolPayoutPanelGenerator"]), j["getButtonComponentList"] = j["symbolPayoutPanelGenerator"]["getButtonComponentList"]["bind"](j["symbolPayoutPanelGenerator"]), j["getButtonList"] = j["symbolPayoutPanelGenerator"]["getButtonList"]["bind"](j["symbolPayoutPanelGenerator"]), j["regeneratePanel"] = j["symbolPayoutPanelGenerator"]["regeneratePanel"]["bind"](j["symbolPayoutPanelGenerator"]), cc["_RF"]["pop"]();
  }
}
module.exports = SymbolPayoutPanelGenerator;
