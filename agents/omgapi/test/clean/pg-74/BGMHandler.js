// module: BGMHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function BGMHandler(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "3d3dftKjVlChZnsj+3nZA0P", "BGMHandler")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m), exports.bgmHandler = undefined;
    var B = require("AudioManager"),
      X = require("SettingMenuHelper"),
      Z = require("GameConstant"),
      T = cc._decorator.ccclass,
      M = function (N) {
        function q() {
          var f = null !== N && N.apply(this, arguments) || this;
          return f.J = undefined, f.V = 0, f;
        }
        return __extends(q, N), q.prototype.playBgm = function (f) {
          {
            var g = this.K(this.J),
              l = this.K(f);
            undefined === g ? (this.V = 1, l.setVolume(1), l.play()) : this.J !== f && (l.isPlaying() ? f === Z.TransitionState.FREE_SPIN && (V(), l.play(), g.stop(), l.setVolume(1)) : (l.play(), f === Z.TransitionState.FREE_SPIN ? (g.stop(), l.setVolume(1)) : (l.setVolume(0), l.fade(0, 1, 0.7), g.fade(g.getVolume(), 0, 0.7), g.once("fade", V)))), this.J = f;
          }
        }, q.prototype.fadeOutBgm = function (f) {
          var g = this.K(this.J);
          g && (this.V = g.getVolume(), this.fadeBgmTo(0, f));
        }, q.prototype.fadeInBgm = function (f) {
          this.fadeBgmTo(this.V, f);
        }, q.prototype.fadeBgmTo = function (f, g) {
          var l = this.K(this.J);
          l && X.settingMenuHelper.soundEnable && l.getVolume() !== f && l.fade(l.getVolume(), f, g);
        }, q.prototype.setBgmVolume = function (f) {
          var g = this.K(this.J);
          g && g.setVolume(f);
        }, q.prototype.K = function (f) {
          var g;
          switch (f) {
            case Z.TransitionState.NORMAL:
            case Z.TransitionState.RESPIN:
              g = B.GeneralAudioPool.bgm_mg;
              break;
            case Z.TransitionState.FREE_SPIN:
            case Z.TransitionState.FREE_SPIN_RESPIN:
              g = B.GeneralAudioPool.bgm_fs;
              break;
            default:
              g = undefined;
          }
          return g;
        }, __decorate([T], q);
      }(cc.Component);
    exports.default = M;
    var C = new M();
    exports.bgmHandler = C, cc._RF.pop();
  }
  function V() {
    B.GeneralAudioPool.bgm_fs.off("fade", V), B.GeneralAudioPool.bgm_fs.stop();
  }
}
module.exports = BGMHandler;
