// module: SoundButton
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function SoundButton(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "47f2aqFJBBCiYjiG/SqB5jv", "SoundButton")) {
    var B = {};
    B.value = true;
    Object.defineProperty(exports, "__esModule", B);
    var x = require("GenericSettingButton"),
      C = cc._decorator,
      H = C.ccclass,
      r = C.property,
      V = function (M) {
        function q() {
          var m = null !== M && M.apply(this, arguments) || this;
          return m.sprite = undefined, m.soundOn = undefined, m.soundOff = undefined, m;
        }
        return __extends(q, M), q.prototype.updateSprite = function (m) {
          this.sprite.spriteFrame = m ? this.soundOn : this.soundOff;
        }, q.prototype.changeButtonPressedColor = function (m) {
          var D = {};
          D.scale = 0.9;
          var W = {};
          W.scale = 1.1;
          var k = {};
          k.scale = 1;
          m ? cc.tween(this.node).to(0.05, D).start() : cc.tween(this.node).to(0.05, W).to(0.1, k).start();
        }, q.prototype.changeButtonColor = function () {}, __decorate([r(cc.Sprite)], q.prototype, "sprite", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "soundOn", undefined), __decorate([r(cc.SpriteFrame)], q.prototype, "soundOff", undefined), __decorate([H], q);
      }(x.default);
    exports.default = V, cc._RF.pop();
  }
}
module.exports = SoundButton;
