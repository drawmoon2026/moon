// module: AudioFactory
// Cocos 模块函数,参数 (require, module, exports) = (F, c, j)
function AudioFactory(F, c, j) {
  'use strict';

  if (!cc["_RF"]["push"](c, "bf4b5cdVNdI7rQp2MPM3CWN", "AudioFactory")) {
    var I = {};
    I["value"] = !0;
    Object["defineProperty"](j, "__esModule", I);
    var m = F("AudioAdapterConstant"),
      B = function () {
        function X() {
          {
            this["maxStackSound"] = m["MAX_STACK_SOUND"], this['W'] = [];
          }
        }
        return X["prototype"]["put"] = function (Z) {
          {
            return this['W']["length"] < this["maxStackSound"] && (this['W']["push"](Z), !0);
          }
        }, X["prototype"]["get"] = function () {
          return this['W']["pop"]();
        }, X["prototype"]["size"] = function () {
          return this['W']["length"];
        }, X["prototype"]["destroy"] = function () {
          this['W']["forEach"](function (Z) {
            Z["destroy"]();
          }), this['W'] = [];
        }, X;
      }();
    j["default"] = B, cc["_RF"]["pop"]();
  }
}
module.exports = AudioFactory;
