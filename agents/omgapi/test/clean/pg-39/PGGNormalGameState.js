// module: PGGNormalGameState
// Cocos 模块函数,参数 (require, module, exports) = (require, y, exports)
function PGGNormalGameState(require, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "4f514cB9JJKcoKpH+dGXQHY", "PGGNormalGameState")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = require("PGGIdleState"),
      H = require("PGGSpinState"),
      V = require("PGGPrizeState"),
      M = require("PGGResultState"),
      q = require("NormalSpinDecorator"),
      m = require("NormalResultDecorator"),
      D = require("NormalPrizeDecorator"),
      W = require("Utils"),
      k = require("TransactionStateMachineHandler"),
      z = function () {
        {
          function L(v, b, U) {
            {
              this.name = "Normal Game", this.lt = undefined, this._t = undefined, this.pt = undefined, this.I = undefined, this.lt = v, this._t = b.generalControllers, this.pt = U;
            }
          }
          return L.prototype.run = function () {
            {
              W.sequenceCallback(this.Ra.bind(this), this.ka.bind(this), this.La.bind(this), this.Ea.bind(this), this.ja.bind(this))(this.vo.bind(this));
            }
          }, L.prototype.Ra = function (v) {
            (this.I = new C.default(this.lt, {
              'generalControllers': this._t
            }, v)).run();
          }, L.prototype.ka = function (v) {
            {
              this._t.slotController.isBonusMode = false, (this.I = new H.default(this.lt, {
                'generalControllers': this._t
              }, v, new q.default(this.lt, {
                'generalControllers': this._t
              }))).run();
            }
          }, L.prototype.La = function (v) {
            (this.I = new M.default(this.lt, {
              'generalControllers': this._t
            }, v, new m.default(this.lt, {
              'generalControllers': this._t
            }))).run();
          }, L.prototype.Ea = function (v) {
            (this.I = new V.default(this.lt, {
              'generalControllers': this._t
            }, v, new D.default(this.lt, {
              'generalControllers': this._t
            }))).run();
          }, L.prototype.ja = function (v) {
            k.transitionCompleteCallback("setup")(v);
          }, L.prototype.vo = function () {
            var v = this.pt;
            this.pt = undefined, this.destroy(), v && v();
          }, L.prototype.destroy = function () {
            var v = this.I;
            v && v.destroy(), this.I = undefined, this.lt = undefined, this.pt = undefined, this._t = undefined;
          }, L;
        }
      }();
    exports.default = z, cc._RF.pop();
  }
}
module.exports = PGGNormalGameState;
