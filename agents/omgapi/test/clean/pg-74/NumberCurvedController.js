// module: NumberCurvedController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NumberCurvedController(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "22ff3ETL9NJ6LV0gfCqckfH", "NumberCurvedController")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("NumberDisplayController"),
      X = cc["_decorator"],
      Z = X["ccclass"],
      T = X["property"],
      M = function (C) {
        function V() {
          var N = null !== C && C["apply"](this, arguments) || this;
          return N["curveness"] = 0.1, N;
        }
        return __extends(V, C), V["prototype"]["dequeueNumberContainer"] = function (N) {
          {
            var q = this["numberContainer"]["children"][N];
            if (!q) {
              (q = new cc["Node"]("container"))["width"] = this["nodeNumberWidth"], this["numberContainer"]["addChild"](q);
              var f = new cc["Node"]("numberSprite");
              f["addComponent"](cc["Sprite"]), q["addChild"](f);
            }
            return q;
          }
        }, V["prototype"]["displayNumber"] = function (N, q, f) {
          {
            void 0 === q && (q = !0), C["prototype"]["displayNumber"]["call"](this, N, q, f), this['ff']["updateLayout"]();
            var g = 0;
            this["numberContainer"]["children"]["forEach"](function (L) {
              g += L["width"];
            });
            for (var l = 0; l < this["numberContainer"]["children"]["length"]; l++) {
              var K = this["dequeueNumberContainer"](l),
                O = g / 2,
                x = (100 / Math["abs"](this["curveness"]) + O) / this["numberContainer"]["scale"],
                p = void 0,
                b = void 0;
              this["curveness"] > 0 ? (p = Math["sqrt"](Math["pow"](x, 2) - Math["pow"](K['x'], 2)), b = 180 * Math["atan2"](Math["abs"](p), K['x']) / Math['PI'], K["angle"] = -(90 - b)) : this["curveness"] < 0 ? (p = Math["sqrt"](Math["pow"](x, 2) + Math["pow"](K['x'], 2)), b = 180 * Math["atan2"](Math["abs"](p), K['x']) / Math['PI'], K["angle"] = 90 - b) : K["angle"] = 0, K['y'] = p - x;
            }
          }
        }, __decorate([T({
          'min': -10,
          'max': 10,
          'slide': !0,
          'tooltip': !1,
          'type': cc["Float"]
        })], V["prototype"], "curveness", void 0), __decorate([Z], V);
      }(B["default"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = NumberCurvedController;
