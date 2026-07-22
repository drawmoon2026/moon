// module: SoundButton
// Cocos 模块函数,参数 (require, module, exports) = (require, exports, I)
function SoundButton(require, exports, I) {
  'use strict';

  if (!cc._RF.push(exports, "47f2aqFJBBCiYjiG/SqB5jv", "SoundButton")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = require("GenericSettingButton"),
      X = cc._decorator,
      Z = X.ccclass,
      T = X.property,
      M = function (C) {
        function V() {
          var N = null !== C && C.apply(this, arguments) || this;
          return N.sprite = undefined, N.soundOn = undefined, N.soundOff = undefined, N.title = undefined, N;
        }
        return __extends(V, C), V.prototype.setTitle = function (N) {
          this.title.string = N;
        }, V.prototype.customSetup = function () {
          var N;
          this.sprite.node.y = 0, this.title.node.active = false, null === (N = this.circleCollider) || undefined === N || (N.y = 0);
        }, __decorate([T(cc.Sprite)], V.prototype, "sprite", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "soundOn", undefined), __decorate([T(cc.SpriteFrame)], V.prototype, "soundOff", undefined), __decorate([T(cc.Label)], V.prototype, "title", undefined), __decorate([Z], V);
      }(B.default);
    I.default = M, cc._RF.pop();
  }
}
module.exports = SoundButton;
