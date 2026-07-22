// module: ScrollViewEx
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function ScrollViewEx(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "4403eAPMfNGO4d5KWMoVrU7", "ScrollViewEx")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = cc["_decorator"],
      X = B["ccclass"],
      Z = B["property"],
      T = function (M) {
        {
          function C() {
            {
              var V = null !== M && M["apply"](this, arguments) || this;
              return V["speed"] = 1, V["freeCells"] = [], V["snapPause"] = !1, V["snapDone"] = !1, V["nextAppearTarget"] = void 0, V["snapFinish"] = void 0, V["clickPos"] = void 0, V["clickTarget"] = void 0, V["timer"] = void 0, V;
            }
          }
          return __extends(C, M), C["prototype"]["cellsInsertToParent"] = function () {
            if (this["freeCells"]["length"]) {
              {
                for (var V = 0; V < this["content"]["children"]["length"]; V++) this["freeCells"][V] && (this["freeCells"][V]["cellNode"]["parent"] = this["content"]["children"][V], this["freeCells"][V]["cellNode"]["setPosition"](cc['v2'](0, 0)), this['Ri'](this["freeCells"][V]["cellNode"]));
                this["freeCells"] = [];
              }
            }
            this["snapPause"] = !1;
          }, C["prototype"]["cellsPullOutFromParent"] = function (V) {
            {
              if (!this["freeCells"]["length"]) {
                {
                  this["snapPause"] = !0, this["setSnapDone"](!0);
                  for (var N = 0; N < this["content"]["children"]["length"]; N++) {
                    var q = this["content"]["children"][N]["children"][0];
                    if (q) {
                      {
                        this['Ld'](q);
                        var f = q["parent"]["convertToWorldSpaceAR"](q["getPosition"]()),
                          h = V["convertToNodeSpaceAR"](f);
                        this["freeCells"][N] = {
                          'cellNode': q,
                          'position': h,
                          'index': N
                        }, this["freeCells"][N]["cellNode"]["setPosition"](h), this["freeCells"][N]["cellNode"]["parent"] = V;
                      }
                    }
                  }
                  return this["freeCells"];
                }
              }
            }
          }, C["prototype"]["setSnapPause"] = function (V) {
            this["snapPause"] = V;
          }, C["prototype"]["setSnapDone"] = function (V) {
            this["snapDone"] = V;
          }, C["prototype"]["isSnapDone"] = function () {
            return this["snapDone"];
          }, C["prototype"]["setNextAppearTarget"] = function (V) {
            this["nextAppearTarget"] = V;
          }, C["prototype"]["setSnapFinish"] = function (V) {
            this["snapFinish"] = V;
          }, C["prototype"]['Ri'] = function (V) {
            V['on'](cc["Node"]["EventType"]["TOUCH_START"], this['Pd'], this), V['on'](cc["Node"]["EventType"]["TOUCH_END"], this['Dd'], this), V['on'](cc["Node"]["EventType"]["TOUCH_MOVE"], this['Ud'], this), V['on'](cc["Node"]["EventType"]["TOUCH_CANCEL"], this['xd'], this);
          }, C["prototype"]['Ld'] = function (V) {
            V["off"](cc["Node"]["EventType"]["TOUCH_START"], this['Pd'], this), V["off"](cc["Node"]["EventType"]["TOUCH_END"], this['Dd'], this), V["off"](cc["Node"]["EventType"]["TOUCH_MOVE"], this['Ud'], this), V["off"](cc["Node"]["EventType"]["TOUCH_CANCEL"], this['xd'], this);
          }, C["prototype"]['Pd'] = function (V) {
            var N = V["touch"]["getLocation"]();
            this["clickPos"] = N, this["clickTarget"] = V["currentTarget"], this["timer"] = Date["now"]();
          }, C["prototype"]['Ud'] = function () {}, C["prototype"]['Dd'] = function (V) {
            if (this["clickPos"]) {
              var N = V["touch"]["getLocation"](),
                q = this["clickPos"],
                f = this["timer"];
              this['Wi'](q['x'], N['x']) || this['Wi'](q['y'], N['y']) || !f || Date["now"]() - f > 120 || this['Fd']();
            }
          }, C["prototype"]['xd'] = function (V) {
            if (this["clickPos"]) {
              var N = V["touch"]["getLocation"](),
                q = this["clickPos"],
                f = this["timer"];
              this['Wi'](q['x'], N['x']) || this['Wi'](q['y'], N['y']) || !f || Date["now"]() - f > 120 || this['Fd']();
            }
          }, C["prototype"]['Wi'] = function (V, N) {
            return Math["abs"](N - V) > 100;
          }, C["prototype"]['Pi'] = function (V, N, q, f, g) {
            if (void 0 === f && (f = 1), l = cc['v2'](V, 0), K = cc['v2'](N, 0), l["sub"](K)["mag"]() <= 1) return this["setSnapDone"](!0), g && g(), N;
            var l,
              K,
              O = V + (q *= f) * (N - V);
            return V >= N ? O <= N && (g && g(), O = N) : O >= N && (g && g(), O = N), O;
          }, C["prototype"]['Fd'] = function () {
            {
              this["clickTarget"] = void 0, this["timer"] = void 0;
            }
          }, __decorate([Z(cc["Integer"])], C["prototype"], "speed", void 0), __decorate([X], C);
        }
      }(cc["ScrollView"]);
    I["default"] = T, cc["_RF"]["pop"]();
  }
}
module.exports = ScrollViewEx;
