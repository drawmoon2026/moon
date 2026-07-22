// module: AbstractScroller
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function AbstractScroller(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "814f95HaARPXoNjY+PgOfJ6", "AbstractScroller")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = function () {
      function C() {
        this.target = undefined, this.t = false, this.i = false, this.s = false, this.target = undefined, this.t = false, this.i = false, this.s = false;
      }
      var H = {};
      H.get = function () {
        return this.t;
      };
      H.enumerable = false;
      H.configurable = true;
      var r = {};
      r.get = function () {
        return this.t;
      };
      r.enumerable = false;
      r.configurable = true;
      return Object.defineProperty(C.prototype, "isPlaying", H), Object.defineProperty(C.prototype, "isPaused", r), C.prototype.play = function () {
        this.t ? this.i && (this.i = false, this.onResume()) : (this.t = true, this.onPlay());
      }, C.prototype.onPlay = function () {}, C.prototype.stop = function () {
        {
          this.t && (this.t = false, this.onStop(), this.i = false);
        }
      }, C.prototype.onStop = function () {}, C.prototype.pause = function () {
        this.t && !this.i && (this.i = true, this.onPause());
      }, C.prototype.onPause = function () {}, C.prototype.resume = function () {
        {
          this.t && this.i && (this.i = false, this.onResume());
        }
      }, C.prototype.onResume = function () {}, C.prototype.step = function () {
        {
          this.pause(), this.s = true, this.t || this.play();
        }
      }, C.prototype.update = function () {}, C;
    }();
    exports.default = x, cc._RF.pop();
  }
}
module.exports = AbstractScroller;
