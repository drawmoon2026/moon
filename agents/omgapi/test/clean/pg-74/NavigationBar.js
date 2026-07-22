// module: NavigationBar
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NavigationBar(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "0dc7dijGWtKO4QKzl8UL9Pz", "NavigationBar")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = cc["_decorator"],
      X = B["ccclass"],
      Z = B["property"],
      T = function (M) {
        {
          function C() {
            var V = null !== M && M["apply"](this, arguments) || this;
            return V['Sl'] = void 0, V["animatedLayer"] = void 0, V["defaultLeftItem"] = void 0, V["rightItemContainer"] = void 0, V["leftItemContainer"] = void 0, V["middleItemContainer"] = void 0, V["titleLabel"] = void 0, V["background"] = void 0, V["shadow"] = void 0, V['gl'] = [], V['Cl'] = !1, V['Ml'] = void 0, V;
          }
          return __extends(C, M), Object["defineProperty"](C["prototype"], "navigator", {
            'get': function () {
              {
                return this['Sl'];
              }
            },
            'set': function (V) {
              this['Sl'] = V;
            },
            'enumerable': !1,
            'configurable': !0
          }), Object["defineProperty"](C["prototype"], "topItem", {
            'get': function () {
              {
                if (this['gl'] && this['gl']["length"] > 0) return this['gl'][this['gl']["length"] - 1];
              }
            },
            'enumerable': !1,
            'configurable': !0
          }), Object["defineProperty"](C["prototype"], "backItem", {
            'get': function () {
              {
                if (this['gl'] && this['gl']["length"] > 1) return this['gl'][this['gl']["length"] - 2];
              }
            },
            'enumerable': !1,
            'configurable': !0
          }), C["prototype"]["onLoad"] = function () {
            var V = this["node"]["width"],
              N = this["node"]["height"];
            this["background"]["node"]["setContentSize"](V, N), this["shadow"]['y'] = -N;
          }, C["prototype"]["getBarHeight"] = function (V, N) {
            var q = this["node"]["width"],
              f = V["height"],
              h = N["top"],
              g = f + h;
            return this["animatedLayer"]["setContentSize"](q, f), this["animatedLayer"]['y'] = -h, this["node"]["height"] = g, this["shadow"]['y'] = -f, this['yl'](V["item_space_x"]), g;
          }, C["prototype"]["pushItem"] = function (V, N) {
            {
              if (V) {
                var q = this['gl'][this['gl']["length"] - 1],
                  g = this["leftItemContainer"]["children"][0],
                  K = this["middleItemContainer"]["children"][1],
                  O = this["rightItemContainer"]["children"][0],
                  x = q ? q["title"] : '',
                  p = q && !q["leftItem"],
                  b = V["title"],
                  L = void 0,
                  H = void 0,
                  U = V["rightItem"] instanceof cc["Node"] ? V["rightItem"] : void 0,
                  k = !0;
                if (this['gl']["push"](V), this['Cl'] = N, V["middleItem"] instanceof cc["Node"] && (H = V["middleItem"], V["title"] = ''), V["leftItem"] instanceof cc["Node"]) L = V["leftItem"], k = !1;else if (this['gl']["length"] > 1) {
                  L = cc["instantiate"](this["defaultLeftItem"]), this['wl'](L);
                  var Y = L["children"] ? L["getComponentInChildren"](cc["Label"]) : void 0;
                  Y instanceof cc["Label"] && x && (Y["string"] = x);
                }
                var y = {};
                y["leftItem"] = g;
                y["middleItem"] = K;
                y["rightItem"] = O;
                y["title"] = x;
                y["useDefaultLeftItem"] = p;
                var z = {};
                z["leftItem"] = L;
                z["middleItem"] = H;
                z["rightItem"] = U;
                z["title"] = b;
                z["useDefaultLeftItem"] = k;
                N ? this['Bl'](y, z) : (this['Al'](g), this['Hl'](this["leftItemContainer"], L), this['Al'](K), this['Hl'](this["middleItemContainer"], H), this['Al'](O), this['Hl'](this["rightItemContainer"], U), this["titleLabel"]["string"] = b, this['Ml'] = this["titleLabel"]["node"]["color"], "land" === shell["environment"]["getOrientationMode"]() && (this["titleLabel"]["fontSize"] = 42, this["titleLabel"]["lineHeight"] = 50));
              }
            }
          }, C["prototype"]["popItem"] = function (V) {
            var N = this["topItem"];
            if (N) {
              var q = this["backItem"];
              if (this['gl']["pop"](), !q) return this["titleLabel"]["string"] = '', this["rightItemContainer"]["removeAllChildren"](!1), this["leftItemContainer"]["removeAllChildren"](!1), this["middleItemContainer"]["children"][1] && this["middleItemContainer"]["children"][1]["removeFromParent"](!1), void (this['Ml'] = this["titleLabel"]["node"]["color"]);
              var g = this['gl'][this['gl']["length"] - 2],
                K = '';
              g && !g["middleItem"] && (K = g["title"]);
              var O = this["leftItemContainer"]["children"][0],
                x = this["middleItemContainer"]["children"][1],
                p = this["rightItemContainer"]["children"][0],
                b = x ? '' : N["title"],
                L = !N["leftItem"],
                H = q["title"],
                U = void 0,
                k = void 0,
                Y = q["rightItem"] instanceof cc["Node"] ? q["rightItem"] : void 0,
                y = !0;
              if (q["middleItem"] instanceof cc["Node"] && (k = q["middleItem"], q["title"] = ''), q["leftItem"] instanceof cc["Node"]) U = q["leftItem"], y = !1;else if (this['gl']["length"] > 1) {
                U = cc["instantiate"](this["defaultLeftItem"]), this['wl'](U);
                var z = U["children"] ? U["getComponentInChildren"](cc["Label"]) : null;
                z && (z["string"] = K);
              }
              var S = {};
              S["leftItem"] = O;
              S["middleItem"] = x;
              S["rightItem"] = p;
              S["title"] = b;
              S["useDefaultLeftItem"] = L;
              var P = {};
              P["leftItem"] = U;
              P["middleItem"] = k;
              P["rightItem"] = Y;
              P["title"] = H;
              P["useDefaultLeftItem"] = y;
              V ? this['Ol'](S, P) : (this['Al'](O), this['Hl'](this["leftItemContainer"], U), this['Al'](x), this['Hl'](this["middleItemContainer"], k), this['Al'](p), this['Hl'](this["rightItemContainer"], Y), this["titleLabel"]["string"] = H, this['Ml'] = this["titleLabel"]["node"]["color"]);
            }
          }, C["prototype"]["enableButtons"] = function () {
            var V = this["leftItemContainer"]["children"][0],
              N = this["rightItemContainer"]["children"][0];
            if (V) {
              var q = V["getComponent"](cc["Button"]);
              q && (q["interactable"] = !0);
            }
            if (N) {
              var f = N["getComponent"](cc["Button"]);
              f && (f["interactable"] = !0);
            }
          }, C["prototype"]["disableButtons"] = function () {
            {
              var V = this["leftItemContainer"]["children"][0],
                N = this["rightItemContainer"]["children"][0];
              if (V) {
                var q = V["getComponent"](cc["Button"]);
                q && (q["interactable"] = !1);
              }
              if (N) {
                {
                  var f = N["getComponent"](cc["Button"]);
                  f && (f["interactable"] = !1);
                }
              }
            }
          }, C["prototype"]["setTitleColor"] = function (V) {
            this["titleLabel"]["node"]["color"] = V;
          }, C["prototype"]["setTitleSize"] = function (V) {
            this["titleLabel"]["fontSize"] = V;
          }, C["prototype"]["removeItemsAtIndex"] = function (V) {
            this['gl']["length"] <= V || this['gl']["splice"](V, 1);
          }, C["prototype"]['Il'] = function (V) {
            V["node"]["setContentSize"](this["titleLabel"]["node"]["width"], this["titleLabel"]["node"]["height"]), V["string"] = this["titleLabel"]["string"], V["fontSize"] = this["titleLabel"]["fontSize"], V["lineHeight"] = this["titleLabel"]["lineHeight"], V["verticalAlign"] = 1, this["titleLabel"]["font"] && (V["font"] = this["titleLabel"]["font"]);
          }, C["prototype"]['wl'] = function (V) {
            var N = new cc["Component"]["EventHandler"]();
            N["target"] = this["node"], N["component"] = "NavigationBar", N["handler"] = "onLeftItemPressed", V["getComponent"](cc["Button"])["clickEvents"]["push"](N);
          }, C["prototype"]['yl'] = function (V) {
            var N = this["node"]["width"],
              q = this["leftItemContainer"],
              f = -N / 2 + V + q["width"] / 2,
              h = this["rightItemContainer"],
              g = N / 2 - V - h["width"] / 2;
            q['x'] = f, h['x'] = g;
          }, C["prototype"]["onLeftItemPressed"] = function () {
            var V = this["navigator"];
            if (this["navigator"]["topController"], V && V["topController"]) {
              {
                var N = this['Cl'];
                this["navigator"]["popController"](N);
              }
            }
          }, C["prototype"]['Bl'] = function (V, N) {
            var q = V["leftItem"],
              g = V["middleItem"],
              K = V["rightItem"],
              O = V["title"],
              x = V["useDefaultLeftItem"],
              p = N["leftItem"],
              b = N["middleItem"],
              L = N["rightItem"],
              H = N["title"],
              U = N["useDefaultLeftItem"],
              k = !g && !b;
            this['Tl'](k, O, H, g, b), this['El'](U, x, k, q, p), this['Nl'](K, L);
          }, C["prototype"]['Ol'] = function (V, N) {
            var q = V["leftItem"],
              g = V["middleItem"],
              K = V["rightItem"],
              O = V["title"],
              x = V["useDefaultLeftItem"],
              p = N["leftItem"],
              b = N["middleItem"],
              L = N["rightItem"],
              H = N["title"],
              U = N["useDefaultLeftItem"],
              k = !g && !b;
            this['Gl'](k, O, H, g, b), this['kl'](U, x, k, q, p), this['Nl'](K, L);
          }, C["prototype"]['Tl'] = function (V, N, q, g, K, O) {
            if (V) {
              {
                var x = this["middleItemContainer"],
                  p = this["leftItemContainer"],
                  b = x['x'] - x["width"] * x["anchorX"] - p['x'] - p["width"] * (1 - p["anchorX"]);
                if (N) {
                  {
                    var L = this["titleLabel"]["node"],
                      H = L["parent"]["convertToWorldSpaceAR"](cc['v2'](L['x'], L['y'])),
                      U = this["animatedLayer"]["convertToNodeSpaceAR"](H),
                      k = new cc["Node"](),
                      Y = k["addComponent"](cc["Label"]);
                    k["parent"] = this["animatedLayer"], k["position"] = U, Y["node"]["color"] = this['Ml'], this['Il'](Y);
                    var y = cc["spawn"](cc["moveBy"](0.2, cc['v2'](-b / 2, 0))["easing"](cc["easeIn"](3)), cc["fadeOut"](0.2)["easing"](cc["easeIn"](3)));
                    k["runAction"](cc["sequence"](y, cc["callFunc"](function () {
                      k["active"] = !1, k["removeFromParent"]();
                    })));
                  }
                }
                x['x'] += b, x["opacity"] = 0, this["titleLabel"]["string"] = q;
                var z = cc["spawn"](cc["moveBy"](0.3, cc['v2'](-b, 0))["easing"](cc["easeOut"](3)), cc["fadeIn"](0.3)["easing"](cc["easeIn"](3)));
                x["runAction"](cc["sequence"](cc["delayTime"](0.1), z, cc["callFunc"](function () {
                  x["active"] = !0, x["opacity"] = 255, O && O();
                })));
              }
            } else this['Rl'](g, K, q, O);
          }, C["prototype"]['El'] = function (V, N, q, K, O, x) {
            {
              var L = this;
              if (V && N && q) {
                var H = void 0,
                  U = void 0,
                  k = void 0,
                  Y = void 0;
                if (K && K["children"] && (H = K["getComponentInChildren"](cc["Label"]), U = K["getComponentInChildren"](cc["Sprite"])), O && O["children"] && (k = O["getComponentInChildren"](cc["Label"]), Y = O["getComponentInChildren"](cc["Sprite"])), k) {
                  {
                    if (H) {
                      var z = H["node"],
                        P = z['x'],
                        G = z["width"],
                        A = z["anchorX"],
                        W = P - G * A - P - G * (1 - A),
                        D = cc["spawn"](cc["moveBy"](0.2, cc['v2'](2 * -W, 0))["easing"](cc["easeOut"](3)), cc["fadeOut"](0.2)["easing"](cc["easeIn"](3)));
                      z["runAction"](cc["sequence"](D, cc["callFunc"](function () {
                        z["active"] = !1;
                      })));
                    }
                    var J = this["middleItemContainer"],
                      E = this["leftItemContainer"],
                      Q0 = J['x'] - J["width"] * J["anchorX"] - E['x'] - E["width"] * (1 - E["anchorX"]),
                      Q1 = Y["node"],
                      Q2 = k["node"];
                    O && E["addChild"](O), Q1["active"] = !1, Q2["opacity"] = 0, Q2['x'] += Q0 / 2;
                    var Q3 = cc["spawn"](cc["moveBy"](0.2, cc['v2'](-Q0 / 2, 0))["easing"](cc["easeOut"](3)), cc["fadeIn"](0.2)["easing"](cc["easeIn"](3)));
                    Q2["runAction"](cc["sequence"](cc["delayTime"](0.2), Q3, cc["callFunc"](function () {
                      Q2["opacity"] = 255, Q1["active"] = !0, K && K["removeFromParent"](!1), x && x();
                    })));
                  }
                } else this['jl'](K, O, x);
              } else if (V && N && K) {
                if (H = void 0, U = void 0, K && K["children"] && (H = K["getComponentInChildren"](cc["Label"]), U = K["getComponentInChildren"](cc["Sprite"])), !H || !U) return void this['jl'](K, O, x);
                var Q4 = U["node"],
                  Q5 = H["node"];
                W = Q5['x'] - Q5["width"] * Q5["anchorX"] - Q4['x'] - Q4["width"] * (1 - Q4["anchorX"]), D = cc["spawn"](cc["moveBy"](0.2, cc['v2'](-W, 0))["easing"](cc["easeOut"](3)), cc["fadeOut"](0.2)["easing"](cc["easeIn"](3))), Q5["runAction"](cc["sequence"](D, cc["callFunc"](function () {
                  K && K["removeFromParent"](!1), O && L["leftItemContainer"]["addChild"](O), x && x();
                })));
              } else this['jl'](K, O, x);
            }
          }, C["prototype"]['kl'] = function (V, N, q, K, O, x) {
            if (V && N && q) {
              var L = void 0,
                H = void 0,
                U = void 0,
                k = void 0;
              if (K && K["children"] && (L = K["getComponentInChildren"](cc["Label"]), H = K["getComponentInChildren"](cc["Sprite"])), O && O["children"] && (U = O["getComponentInChildren"](cc["Label"]), k = O["getComponentInChildren"](cc["Sprite"])), !U || !L) return void this['jl'](K, O, x);
              var Y = this["middleItemContainer"],
                y = this["leftItemContainer"],
                z = Y['x'] - Y["width"] * Y["anchorX"] - y['x'] - y["width"] * (1 - y["anchorX"]),
                P = L["node"],
                G = H["node"],
                A = P['x'] - P["width"] * P["anchorX"] - G['x'] - G["width"] * (1 - G["anchorX"]),
                w = cc["spawn"](cc["moveBy"](0.2, cc['v2'](z / 2, 0))["easing"](cc["easeOut"](3)), cc["fadeOut"](0.2)["easing"](cc["easeIn"](3)));
              if (O) {
                P["runAction"](cc["sequence"](w, cc["callFunc"](function () {
                  P["active"] = !1;
                })));
                var W = U["node"],
                  D = k["node"];
                D["active"] = !1, W["opacity"] = 0, y["addChild"](O), W['x'] -= 2 * A;
                var J = cc["spawn"](cc["moveBy"](0.2, cc['v2'](2 * A, 0))["easing"](cc["easeOut"](3)), cc["fadeIn"](0.2)["easing"](cc["easeIn"](3)));
                W["runAction"](cc["sequence"](cc["delayTime"](0.2), J, cc["callFunc"](function () {
                  {
                    W["opacity"] = 255, D["active"] = !0, K && K["removeFromParent"](!1), x && x();
                  }
                })));
              } else P["runAction"](cc["sequence"](w, cc["callFunc"](function () {
                {
                  K && K["removeFromParent"](!1), x && x();
                }
              })));
            } else if (V && N) {
              {
                if (U = void 0, k = void 0, O && O["children"] && (U = O["getComponentInChildren"](cc["Label"]), k = O["getComponentInChildren"](cc["Sprite"])), !U || !k) return void this['jl'](K, O, x);
                var E = U["node"],
                  Q0 = k["node"];
                A = E['x'] - E["width"] * E["anchorX"] - Q0['x'] - Q0["width"] * (1 - Q0["anchorX"]), K && K["removeFromParent"](!1), O && this["leftItemContainer"]["addChild"](O), E["opacity"] = 0, E['x'] -= 2 * A, J = cc["spawn"](cc["moveBy"](0.2, cc['v2'](2 * A, 0))["easing"](cc["easeOut"](3)), cc["fadeIn"](0.2)["easing"](cc["easeIn"](3))), E["runAction"](cc["sequence"](cc["delayTime"](0.2), J, cc["callFunc"](function () {
                  E["opacity"] = 255, x && x();
                })));
              }
            } else this['jl'](K, O, x);
          }, C["prototype"]['Gl'] = function (V, N, q, g, K, O) {
            if (V) {
              var x = this["leftItemContainer"],
                p = this["middleItemContainer"],
                b = p['x'] - p["width"] * p["anchorX"] - x['x'] - x["width"] * (1 - x["anchorX"]);
              if (N) {
                var L = this["titleLabel"]["node"]["parent"]["convertToWorldSpaceAR"](cc['v2'](this["titleLabel"]["node"]['x'], this["titleLabel"]["node"]['y'])),
                  H = this["animatedLayer"]["convertToNodeSpaceAR"](L),
                  U = new cc["Node"]();
                U["addComponent"](cc["Label"]);
                var k = U["getComponent"](cc["Label"]);
                U["parent"] = this["animatedLayer"], k["node"]["color"] = this['Ml'], U["position"] = H, this['Il'](k);
                var Y = cc["spawn"](cc["moveBy"](0.2, cc['v2'](b / 2, 0))["easing"](cc["easeOut"](3)), cc["fadeOut"](0.2)["easing"](cc["easeOut"](3)));
                U["runAction"](cc["sequence"](Y, cc["callFunc"](function () {
                  U["active"] = !1, U["removeFromParent"]();
                })));
              }
              this["titleLabel"]["string"] = q, p['x'] -= b / 2, p["opacity"] = 0;
              var y = cc["spawn"](cc["moveBy"](0.3, cc['v2'](b / 2, 0))["easing"](cc["easeOut"](3)), cc["fadeIn"](0.3)["easing"](cc["easeIn"](3)));
              this["middleItemContainer"]["runAction"](cc["sequence"](cc["delayTime"](0.1), y, cc["callFunc"](function () {
                {
                  p["active"] = !0, p["opacity"] = 255, O && O();
                }
              })));
            } else this['Rl'](g, K, q, O);
          }, C["prototype"]['jl'] = function (V, N, q) {
            {
              var f = this["leftItemContainer"];
              V && V["removeFromParent"](!1), N && this["leftItemContainer"]["addChild"](N), f["opacity"] = 0, f["runAction"](cc["sequence"](cc["fadeIn"](0.3)["easing"](cc["easeOut"](3)), cc["callFunc"](function () {
                {
                  q && q();
                }
              })));
            }
          }, C["prototype"]['Rl'] = function (V, N, q, f) {
            var h = this["middleItemContainer"];
            V && V["removeFromParent"](!1), N && h["addChild"](N), this["titleLabel"]["string"] = q, h["opacity"] = 0, h["runAction"](cc["sequence"](cc["fadeIn"](0.3), cc["callFunc"](function () {
              f && f();
            })));
          }, C["prototype"]['Nl'] = function (V, N, q) {
            var f = this;
            V && V["removeFromParent"](!1), N && this["rightItemContainer"]["addChild"](N), this["rightItemContainer"]["opacity"] = 0, this["rightItemContainer"]["runAction"](cc["sequence"](cc["fadeIn"](0.3)["easing"](cc["easeOut"](3)), cc["callFunc"](function () {
              f['Ml'] = f["titleLabel"]["node"]["color"], q && q();
            })));
          }, C["prototype"]['Al'] = function (V) {
            {
              V && V["parent"] && V["removeFromParent"](!1);
            }
          }, C["prototype"]['Hl'] = function (V, N) {
            {
              V && N && V["addChild"](N);
            }
          }, __decorate([Z(cc["Node"])], C["prototype"], "animatedLayer", void 0), __decorate([Z(cc["Prefab"])], C["prototype"], "defaultLeftItem", void 0), __decorate([Z(cc["Node"])], C["prototype"], "rightItemContainer", void 0), __decorate([Z(cc["Node"])], C["prototype"], "leftItemContainer", void 0), __decorate([Z(cc["Node"])], C["prototype"], "middleItemContainer", void 0), __decorate([Z(cc["Label"])], C["prototype"], "titleLabel", void 0), __decorate([Z(cc["Sprite"])], C["prototype"], "background", void 0), __decorate([Z(cc["Node"])], C["prototype"], "shadow", void 0), __decorate([X], C);
        }
      }(cc["Component"]);
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = NavigationBar;
