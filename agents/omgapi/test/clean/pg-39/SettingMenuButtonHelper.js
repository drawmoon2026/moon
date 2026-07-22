// module: SettingMenuButtonHelper
// Cocos 模块函数,参数 (require, module, exports) = (O, y, module)
function SettingMenuButtonHelper(O, y, module) {
  'use strict';

  if (!cc._RF.push(y, "1ddf5VqGQ9OiqajxiLxeBVw", "SettingMenuButtonHelper")) {
    var x = {};
    x.value = true;
    Object.defineProperty(module, "__esModule", x);
    var C = {};
    C['2'] = "spinOptions";
    C['3'] = "betOptions";
    C['4'] = "minusBet";
    C['5'] = "plusBet";
    C['6'] = "win";
    C['7'] = "turbo";
    C['8'] = "wallet";
    C['9'] = "moreMenu";
    C['10'] = "sound";
    var H = cc._decorator.ccclass,
      V = function () {
        function M() {
          this.sd = [], this.ed = Object.create(null), this.nd = Object.create(null), this.od = Object.create(null), this.hd = Object.create(null), this.rd = Object.create(null), this.ad = Object.create(null), this.ud = {};
        }
        return M.prototype.setButtonPrefab = function (q, m, D) {
          this.ed[q] = m, this.ad[q] = D, this.ud[r[q]] = false;
        }, M.prototype.totalButtonsOccupied = function () {
          return this.sd.length;
        }, M.prototype.getButtonInList = function (q) {
          return cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
        }, M.prototype.setupSettingMenuButtonInList = function (q, m, D) {
          undefined === D && (D = false);
          var W = cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
          return this.sd.push(W.button), W.onClick = m, W.willHideOnceClick = D, this.od[q] = false, this.hd[q] = W, this.ud[r[q]] = true, W;
        }, M.prototype.setupIndependentSettingMenuButton = function (q, m) {
          if (this.ed[q]) {
            var D = cc.instantiate(this.ed[q]).getComponent("GenericSettingButton");
            return D.onClick = m, this.od[q] = false, this.hd[q] = D, D;
          }
        }, M.prototype.setupOtherButtonInList = function (q, m) {
          var D = {};
          D.isInteractable = m;
          this.od[q] = false, this.rd[q] = D, this.ad[q] = false;
        }, M.prototype.setButtonInteractableFlag = function (q, m) {
          undefined === m && (m = false), this.nd[q] = m;
        }, M.prototype.setButtonInteractable = function (q) {
          this.ad[q] || false !== this.od[q] || (this.rd[q] ? this.rd[q].isInteractable(this.nd[q]) : this.hd[q].isInteractable = this.nd[q]);
        }, M.prototype.setButtonLock = function (q, m) {
          undefined === m && (m = false), this.od[q] = m;
        }, M.prototype.isButtonLocked = function (q) {
          return this.od[q];
        }, M.prototype.setAllButtonsInteractable = function (q) {
          for (var m = Object.keys(this.hd), D = 0, W = m.length; D < W; D++) this.setButtonInteractableFlag(parseInt(m[D]), q), this.setButtonInteractable(parseInt(m[D]));
          var k = Object.keys(this.rd);
          for (D = 0, W = k.length; D < W; D++) this.setButtonInteractableFlag(parseInt(k[D]), q), this.setButtonInteractable(parseInt(k[D]));
        }, M.prototype.setButtonsLock = function (q) {
          for (var m = 0, D = Object.keys(this.hd).length; m < D; m++) this.setButtonLock(m + 1, q);
          for (m = 0, D = Object.keys(this.rd).length; m < D; m++) this.setButtonLock(m + 1, q);
        }, M.prototype.setLockAccess = function (q, m) {
          this.setButtonLock(q, m), m ? this.rd[q] ? this.rd[q].isInteractable(!m) : this.hd[q].isInteractable = !m : this.setButtonInteractable(q);
        }, M.prototype.getButtonNode = function (q) {
          var m = this.hd[q];
          return m ? m.node : undefined;
        }, Object.defineProperty(M.prototype, "buttonSetUpConfig", {
          'get': function () {
            return this.ud;
          },
          'enumerable': false,
          'configurable': true
        }), __decorate([H("SettingMenuButtonHelper")], M);
      }();
    module.default = V, cc._RF.pop();
  }
}
module.exports = SettingMenuButtonHelper;
