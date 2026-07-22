// module: AudioFactory
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function AudioFactory(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "bf4b5cdVNdI7rQp2MPM3CWN", "AudioFactory")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("AudioAdapterConstant"),
      C = function () {
        function H() {
          this.maxStackSound = x.MAX_STACK_SOUND, this.F = [];
        }
        return H.prototype.put = function (r) {
          return this.F.length < this.maxStackSound && (this.F.push(r), true);
        }, H.prototype.get = function () {
          return this.F.pop();
        }, H.prototype.size = function () {
          {
            return this.F.length;
          }
        }, H.prototype.destroy = function () {
          {
            this.F.forEach(function (r) {
              {
                r.destroy();
              }
            }), this.F = [];
          }
        }, H;
      }();
    exports.default = C, cc._RF.pop();
  }
}
module.exports = AudioFactory;
