// module: MJNormalGameState
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function MJNormalGameState(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "1d737SZeFpEjITSM4vRj2Jb", "MJNormalGameState")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("MJIdleState"),
      X = require("MJSpinState"),
      Z = require("MJPrizeState"),
      T = require("MJResultState"),
      M = require("NormalSpinDecorator"),
      C = require("NormalResultDecorator"),
      V = require("NormalPrizeDecorator"),
      N = require("Utils"),
      q = require("GameConstant"),
      g = require("TransactionStateMachineHandler"),
      K = function () {
        function O(x, p, b) {
          this.name = "MJ Normal Game", this.dataSource = undefined, this.generalControllers = undefined, this.finalCallback = undefined, this.dataSource = x, this.generalControllers = p.generalControllers, this.finalCallback = b;
        }
        return O.prototype.run = function () {
          this.generalControllers.slotController.setForceGoldBlock(false), this.mr = N.sequenceCallback(this.br.bind(this), this.Sr.bind(this), this.Mr.bind(this), this.yr.bind(this), this.Br.bind(this), this.jr.bind(this))(this.ro.bind(this));
        }, O.prototype.forceExit = function () {
          var x = this.mr;
          x && x(), this.ro();
        }, O.prototype.br = function (x) {
          new B.default(this.dataSource, {
            'generalControllers': this.generalControllers
          }, x, q.customAutoSpinDelayTime).run();
        }, O.prototype.Sr = function (x) {
          new X.default(this.dataSource, {
            'generalControllers': this.generalControllers
          }, x, new M.default(this.dataSource, {
            'generalControllers': this.generalControllers
          })).run();
        }, O.prototype.Mr = function (x) {
          {
            new T.default(this.dataSource, {
              'generalControllers': this.generalControllers,
              'bonusControllers': undefined
            }, x, new C.default(this.dataSource, {
              'generalControllers': this.generalControllers
            })).run();
          }
        }, O.prototype.yr = function (x) {
          new Z.default(this.dataSource, {
            'generalControllers': this.generalControllers
          }, x, new V.default(this.dataSource, {
            'generalControllers': this.generalControllers
          })).run();
        }, O.prototype.Br = function (x) {
          x && x();
        }, O.prototype.jr = function (x) {
          var p = this.dataSource.transactionModel.transitionTo === q.TransitionState.NORMAL ? "setup" : "idle";
          g.transitionCompleteCallback(p)(x);
        }, O.prototype.ro = function () {
          var x = this.finalCallback;
          this.finalCallback = undefined, x && x();
        }, O.prototype.destroy = function () {
          this.mr = undefined, this.dataSource = undefined, this.finalCallback = undefined, this.generalControllers = undefined;
        }, O;
      }();
    exports.default = K, cc._RF.pop();
  }
}
module.exports = MJNormalGameState;
