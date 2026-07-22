// module: TabBarItem
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function TabBarItem(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "cd0fbm4LQBEVL5LzWleSsGj", "TabBarItem")) {
    {
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
              return V["icon"] = void 0, V["titleLabel"] = void 0, V["tintColor"] = void 0, V["selectedTintColor"] = void 0, V['VS'] = void 0, V['zS'] = void 0, V['KS'] = void 0, V['qS'] = void 0, V['QS'] = void 0, V;
            }
            return __extends(C, M), Object["defineProperty"](C["prototype"], "tag", {
              'get': function () {
                return this['qS'];
              },
              'set': function (V) {
                this['qS'] = V;
              },
              'enumerable': !1,
              'configurable': !0
            }), Object["defineProperty"](C["prototype"], "selectAction", {
              'set': function (V) {
                this['QS'] = V;
              },
              'enumerable': !1,
              'configurable': !0
            }), C["prototype"]["init"] = function (V, N, q, f) {
              {
                V && (this["titleLabel"]["string"] = V), N && (this["icon"]["spriteFrame"] = N, this['VS'] = N), this['KS'] = q, this['qS'] = f, this['zS'] = !1;
              }
            }, C["prototype"]["setupTouchAction"] = function () {
              this["node"]['on'](cc["Node"]["EventType"]["TOUCH_START"], this['nt'], this), this["node"]['on'](cc["Node"]["EventType"]["TOUCH_END"], this['ct'], this);
            }, C["prototype"]["setTintColor"] = function (V) {
              {
                this['zS'] || (this["icon"]["node"]["color"] = V, this["titleLabel"]["node"]["color"] = V), this["tintColor"] = V;
              }
            }, C["prototype"]["setSelectedTintColor"] = function (V) {
              this['zS'] && (this["icon"]["node"]["color"] = V, this["titleLabel"]["node"]["color"] = V), this["selectedTintColor"] = V;
            }, C["prototype"]["setTitleAttributes"] = function (V) {
              var N = V["getFontSize"](),
                q = V["getNormalFontColor"](),
                f = V["getFontName"](),
                h = V["getLineHeight"]();
              this["titleLabel"]["fontSize"] = N, this["titleLabel"]["font"] = f, this["titleLabel"]["node"]["color"] = q, this["titleLabel"]["lineHeight"] = h;
            }, C["prototype"]["setSelect"] = function () {
              {
                var V = this["selectedTintColor"];
                this["icon"]["node"]["color"] = V, this["titleLabel"]["node"]["color"] = V, this["icon"]["spriteFrame"] = this['KS'], this['zS'] = !0;
              }
            }, C["prototype"]["setUnselected"] = function () {
              var V = this["tintColor"];
              this["icon"]["node"]["color"] = V, this["titleLabel"]["node"]["color"] = V, this["icon"]["spriteFrame"] = this['VS'], this['zS'] = !1;
            }, C["prototype"]["animFinish"] = function () {}, C["prototype"]['nt'] = function () {}, C["prototype"]['ct'] = function (V) {
              {
                V["stopPropagation"](), this['QS'] && this['QS']();
              }
            }, __decorate([Z(cc["Sprite"])], C["prototype"], "icon", void 0), __decorate([Z(cc["Label"])], C["prototype"], "titleLabel", void 0), __decorate([Z(cc["Color"])], C["prototype"], "tintColor", void 0), __decorate([Z(cc["Color"])], C["prototype"], "selectedTintColor", void 0), __decorate([X], C);
          }
        }(cc["Component"]);
      I["default"] = T, cc["_RF"]["pop"]();
    }
  }
}
module.exports = TabBarItem;
