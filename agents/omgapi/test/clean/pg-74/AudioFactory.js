// module: AudioFactory
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function AudioFactory(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "bf4b5cdVNdI7rQp2MPM3CWN", "AudioFactory")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I);
    var m = require("AudioAdapterConstant"),
      B = function () {
        function X() {
          {
            this.maxStackSound = m.MAX_STACK_SOUND, this.W = [];
          }
        }
        return X.prototype.put = function (Z) {
          {
            return this.W.length < this.maxStackSound && (this.W.push(Z), true);
          }
        }, X.prototype.get = function () {
          return this.W.pop();
        }, X.prototype.size = function () {
          return this.W.length;
        }, X.prototype.destroy = function () {
          this.W.forEach(function (Z) {
            Z.destroy();
          }), this.W = [];
        }, X;
      }();
    exports.default = B, cc._RF.pop();
  }
}
module.exports = AudioFactory;
