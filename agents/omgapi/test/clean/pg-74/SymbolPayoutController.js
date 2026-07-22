// module: SymbolPayoutController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function SymbolPayoutController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "7c05ali6OlCEJ+GOnxbYWHT", "SymbolPayoutController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("SymbolPayoutPanelGenerator"),
      X = F("SinglePayoutModel"),
      Z = F("Utils"),
      T = F("PopOutItemHandler"),
      M = cc["_decorator"],
      C = M["ccclass"],
      V = M["property"],
      N = function (q) {
        function f() {
          var g = null !== q && q["apply"](this, arguments) || this;
          return g["popOutItem"] = void 0, g["popOutTint"] = void 0, g['rS'] = [], g['aS'] = void 0, g['uS'] = void 0, g['lS'] = new T["default"](), g['fS'] = void 0, g['dS'] = new X["default"](), g['vS'] = B["symbolPayoutPanelGenerator"], g;
        }
        return __extends(f, q), f["prototype"]["init"] = function (g) {
          g["containerNode"] = g["containerNode"] ? g["containerNode"] : this["node"], this['_S'] = g;
          var l = g["numberOfTint"] ? g["numberOfTint"] : 1;
          if (this['vS']["generatePanel"](g), l > 1) {
            this['rS'] = [];
            for (var K = 0; K < l; K++) {
              var O = cc["instantiate"](this["popOutTint"]);
              Array["isArray"](this['mS']) ? this['mS'][K]["addChild"](O) : this['mS']["addChild"](O);
              var x,
                p = O["getComponent"]("PopOutTintController");
              x = Array["isArray"](this['bS']) ? this['bS'][K] : this['bS'], this['rS']["push"](p), p["setup"](x);
            }
          } else O = cc["instantiate"](this["popOutTint"]), this['mS']["addChild"](O), this['rS'] = O["getComponent"]("PopOutTintController"), this['rS']["setup"](this['bS']);
          this['lS']["init"](this["popOutItem"], this['pS']), this['dS']["payoutData"] = g["payoutData"], this['fS'] && this['fS'](g);
        }, f["prototype"]["resetPanel"] = function (g) {
          {
            g["containerNode"] = g["containerNode"] ? g["containerNode"] : this["node"], this['_S'] = g, this['vS']["regeneratePanel"](g), this['dS']["payoutData"] = g["payoutData"] ? g["payoutData"] : this['dS']["payoutData"];
          }
        }, f["prototype"]["setExtraInitialzation"] = function (g) {
          this['fS'] = g;
        }, f["prototype"]["setPopOutDisplayHolder"] = function (g) {
          this['pS'] = g;
        }, f["prototype"]["setPopOutTintHolder"] = function (g) {
          this['mS'] = g;
        }, f["prototype"]["setReelData"] = function (g, l, K) {
          this['dS']["reelData"] = g, this['dS']["extendSymbolData"] = l, this['dS']["extendBlockData"] = K;
        }, f["prototype"]["setAdditionalData"] = function (g) {
          this['dS']["additionalData"] = g;
        }, f["prototype"]["setTintConfig"] = function (g) {
          this['bS'] = g;
        }, f["prototype"]["setupButtonEvent"] = function (g) {
          var l = this;
          void 0 === g && (g = []);
          var K = this['vS']["getButtonControllerList"](),
            O = this['vS']["getButtonComponentList"]();
          K["forEach"](function (x, p) {
            if (g["includes"](p)) x["setClickCallback"](void 0), O[p]["clickEvents"] = [];else {
              var b = l['SS']["bind"](l, p, l['dS']["reelData"][p], l['dS']["payoutData"]);
              x["setClickCallback"](b);
              var L = x["getControllerAndHandlerName"](),
                H = L["ControllerName"],
                U = L["HandlerName"],
                k = new cc["Component"]["EventHandler"]();
              k["target"] = x["node"], k["component"] = H, k["handler"] = U, O[p]["clickEvents"] = [], O[p]["clickEvents"]["push"](k);
            }
          });
        }, f["prototype"]["setAdditionalOnClickCallback"] = function (g) {
          this['aS'] = g;
        }, f["prototype"]["setAdditionalOnCancelCallback"] = function (g) {
          this['uS'] = g;
        }, f["prototype"]["clearOnClickCallback"] = function () {
          {
            this['vS']["getButtonControllerList"]()["forEach"](function (g) {
              g["clearClickCallback"]();
            });
          }
        }, f["prototype"]["enablePanel"] = function () {
          this["node"]["active"] = !0, this['vS']["getButtonComponentList"]()["forEach"](function (g) {
            g["interactable"] = !0;
          });
        }, f["prototype"]["disablePanel"] = function () {
          this['vS']["getButtonComponentList"]()["forEach"](function (g) {
            g["interactable"] = !1;
          }), this["node"]["active"] = !1;
        }, f["prototype"]["hidePopOutItem"] = function (g) {
          {
            this['gS'](g);
          }
        }, Object["defineProperty"](f["prototype"], "buttonList", {
          'get': function () {
            return this['vS']["getButtonList"]();
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](f["prototype"], "buttonControllerList", {
          'get': function () {
            return this['vS']["getButtonControllerList"]();
          },
          'enumerable': !1,
          'configurable': !0
        }), Object["defineProperty"](f["prototype"], "buttonComponentList", {
          'get': function () {
            return this['vS']["getButtonComponentList"]();
          },
          'enumerable': !1,
          'configurable': !0
        }), f["prototype"]['SS'] = function (g, l, K) {
          var O = this;
          this['CS'](this['gS']["bind"](this)), Z["spawnCallback"](this['MS']["bind"](this, g, l), this['yS']["bind"](this, g, l, K))(function () {
            O['wS']();
          });
        }, f["prototype"]["setPopOutItemLayout"] = function (g, l) {
          var K;
          K = l < Math["round"](this['_S']["numberOfColumn"] / 2) * this['_S']["numberOfRow"];
          var O = g["parent"]["convertToWorldSpaceAR"](g["position"]);
          return {
            'isLeftToRight': K,
            'position': this['pS']["convertToNodeSpaceAR"](O)
          };
        }, f["prototype"]['yS'] = function (g, K, O, x) {
          var p = this['dS'],
            b = p["extendSymbolData"],
            L = p["extendBlockData"],
            H = p["additionalData"];
          b && Object["keys"](b)["forEach"](function (z) {
            if (b[z]["includes"](g)) {
              var S = b[z]["length"];
              g = b[z][S - 1];
            }
          });
          var U = this['vS']["getButtonList"]()[g],
            k = this["setPopOutItemLayout"](U, g),
            Y = k["isLeftToRight"],
            y = k["position"];
          this['lS']["runPopoutItemShowCallback"](x, O, g, K, cc['v2'](y), Y, b, L, H);
        }, f["prototype"]['CS'] = function (g) {
          this['lS']["setCancelCallback"](g);
        }, f["prototype"]['MS'] = function (g, l, K) {
          var O = function () {
            K && K();
          };
          if (Array["isArray"](this['rS'])) {
            var x = [];
            this['rS']["forEach"](function (p) {
              x["push"](p["show"]["bind"](p));
            }), Z["spawnCallback"](x)(O);
          } else this['rS']["show"](function () {
            O();
          });
        }, f["prototype"]['gS'] = function (g) {
          this['lS']["runPopoutItemHideCallback"]();
          var l = function () {
            g && g();
          };
          if (Array["isArray"](this['rS'])) {
            var K = [];
            this['rS']["forEach"](function (O) {
              K["push"](O["hide"]["bind"](O));
            }), Z["spawnCallback"](K)(l);
          } else this['rS']["hide"](l);
          this['BS']();
        }, f["prototype"]['wS'] = function () {
          this['aS'] && this['aS']();
        }, f["prototype"]['BS'] = function () {
          this['uS'] && this['uS']();
        }, Object["defineProperty"](f["prototype"], "singlePayoutModel", {
          'get': function () {
            return this['dS'];
          },
          'enumerable': !1,
          'configurable': !0
        }), __decorate([V(cc["Prefab"])], f["prototype"], "popOutItem", void 0), __decorate([V(cc["Prefab"])], f["prototype"], "popOutTint", void 0), __decorate([C], f);
      }(cc["Component"]);
    I["default"] = N, cc["_RF"]["pop"]();
  }
}
module.exports = SymbolPayoutController;
