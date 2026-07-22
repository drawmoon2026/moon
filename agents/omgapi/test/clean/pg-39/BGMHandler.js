// module: BGMHandler
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function BGMHandler(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "4f2a2qJiNRKIYhkmggzb0Qg", "BGMHandler")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B), exports.bgmHandler = undefined;
      var x = require("AudioManager"),
        C = require("SettingMenuHelper"),
        H = cc._decorator.ccclass,
        r = function (M) {
          function q() {
            var m = null !== M && M.apply(this, arguments) || this;
            return m.J = false, m;
          }
          return __extends(q, M), q.prototype.startBgm = function () {
            x.GeneralAudioPool.bgm_mg.play();
          }, q.prototype.stopBgm = function () {
            x.GeneralAudioPool.bgm_mg.stop();
          }, q.prototype.fadeInBgm = function (m) {
            undefined === m && (m = 2), C.settingMenuHelper.soundEnable && (this.J || (x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 1, m), this.J = true));
          }, q.prototype.fadeOutBgm = function (m) {
            undefined === m && (m = 2), C.settingMenuHelper.soundEnable && (x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 0, m), this.J = false);
          }, q.prototype.muteBgm = function () {
            x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 0, 0);
          }, q.prototype.unmuteBgm = function () {
            {
              x.GeneralAudioPool.bgm_mg.fade(x.GeneralAudioPool.bgm_mg.getVolume(), 1, 0);
            }
          }, __decorate([H], q);
        }(cc.Component);
      exports.default = r;
      var V = new r();
      exports.bgmHandler = V, cc._RF.pop();
    }
  }
}
module.exports = BGMHandler;
