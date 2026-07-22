// module: MJScatterState
// Cocos 模块函数,参数 (require, module, exports) = (require, c, exports)
function MJScatterState(require, c, exports) {
  'use strict';

  if (!cc._RF.push(c, "522e1lA8XBMZpFriJeepY8M", "MJScatterState")) {
    var I = {};
    I.value = true;
    Object.defineProperty(exports, "__esModule", I);
    var m = require("Utils"),
      B = cc._decorator.ccclass,
      X = function () {
        function Z(T, M, C) {
          this.name = "MJScatterState", this.dataSource = undefined, this.generalControllers = undefined, this.bonusControllers = undefined, this.finalCallback = undefined, this.dataSource = T, this.generalControllers = M.generalControllers, this.bonusControllers = M.bonusControllers, this.finalCallback = C;
        }
        return Z.prototype.run = function () {
          m.sequenceCallback(this.ra.bind(this))(this.ro.bind(this));
        }, Z.prototype.ra = function (T) {
          var M = this.bonusControllers,
            C = M.remainingFreeSpinController,
            V = M.freeSpinController,
            N = this.dataSource.transactionModel.freeSpin;
          N && N.noOfStepAdded ? m.spawnCallback(V.play.bind(V, N.noOfStepAdded), C.increaseFreeSpinCount.bind(C, N.step))(function () {
            V.stop(), T && T();
          }) : T && T();
        }, Z.prototype.ro = function () {
          var T = this.finalCallback;
          this.finalCallback = undefined, this.destroy(), T && T();
        }, Z.prototype.destroy = function () {
          this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined, this.bonusControllers = undefined;
        }, __decorate([B], Z);
      }();
    exports.default = X, cc._RF.pop();
  }
}
module.exports = MJScatterState;
