// module: PopOutItemHandler
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function PopOutItemHandler(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "ed9375KsD1NcYjBhMUREze+", "PopOutItemHandler")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = cc["_decorator"]["ccclass"],
      B = function () {
        function X() {
          {
            this['Ss'] = void 0, this['Df'] = void 0, this['Uf'] = void 0, this['xf'] = void 0, this['Ff'] = void 0;
          }
        }
        return X["prototype"]["init"] = function (Z, T) {
          var M = cc["instantiate"](Z);
          T["addChild"](M), this['xf'] = M, this['Ff'] = M["getComponent"]("PopOutItem"), this['Df'] = this['Ff']["show"]["bind"](this['Ff']), this['Uf'] = this['Ff']["hide"]["bind"](this['Ff']), M["active"] = !1;
        }, X["prototype"]["getPopoutItem"] = function () {
          return this['xf'];
        }, X["prototype"]["setCancelCallback"] = function (Z) {
          this['Ss'] = Z;
        }, X["prototype"]['Wf'] = function () {
          {
            var Z = this['Ss'];
            Z && Z();
          }
        }, X["prototype"]["destroy"] = function () {
          this["node"]["destroy"](), _super["prototype"]["destroy"]["call"](this);
        }, X["prototype"]["setPopoutItemShowCallback"] = function (Z) {
          this['Df'] = Z;
        }, X["prototype"]["runPopoutItemShowCallback"] = function (Z, T, M, C, V, N, q, f, g) {
          this['xf']["active"] = !0, this['xf']['on'](cc["Node"]["EventType"]["TOUCH_END"], this['Wf'], this), this['Ff']["setCancelCallback"](this['Wf']["bind"](this)), this['Df'] && this['Df'](Z, T, M, C, V, N, q, f, g);
        }, X["prototype"]["setPopoutItemHideCallback"] = function (Z) {
          this['Uf'] = Z;
        }, X["prototype"]["runPopoutItemHideCallback"] = function () {
          var Z = this;
          this['Uf'] && this['Uf'](function () {
            {
              Z['xf']["off"](cc["Node"]["EventType"]["TOUCH_END"], Z['Wf'], Z), Z['xf']["active"] = !1;
            }
          });
        }, __decorate([m], X);
      }();
    j["default"] = B, cc["_RF"]["pop"]();
  }
}
module.exports = PopOutItemHandler;
