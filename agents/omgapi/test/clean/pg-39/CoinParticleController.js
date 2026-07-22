// module: CoinParticleController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function CoinParticleController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "140cdgyUZZE6oST/JsVi7hK", "CoinParticleController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = cc._decorator,
        C = x.ccclass,
        H = x.property,
        r = function (V) {
          function M() {
            var q = null !== V && V.apply(this, arguments) || this;
            return q.middleCoinParticleNode = undefined, q.bottomCoinParticleNode = undefined, q.bottomIngotParticleNode = undefined, q.gravityCoinParticleNode = undefined, q.gravityIngotParticleNode = undefined, q.Rs = undefined, q.ks = undefined, q.Ls = undefined, q.Es = undefined, q.js = undefined, q;
          }
          return __extends(M, V), Object.defineProperty(M.prototype, "middleCoinParticleController", {
            'get': function () {
              return undefined === this.Rs && (this.Rs = this.middleCoinParticleNode.getComponent("AnimParticleSystem")), this.Rs;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "bottomCoinParticleController", {
            'get': function () {
              return undefined === this.ks && (this.ks = this.bottomCoinParticleNode.getComponent("AnimParticleSystem")), this.ks;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "bottomIngotParticleController", {
            'get': function () {
              return undefined === this.Ls && (this.Ls = this.bottomIngotParticleNode.getComponent("AnimParticleSystem")), this.Ls;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "gravityCoinController", {
            'get': function () {
              return undefined === this.js && (this.js = this.gravityCoinParticleNode.getComponent("AnimParticleSystem")), this.js;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(M.prototype, "gravityIngotController", {
            'get': function () {
              return undefined === this.Es && (this.Es = this.gravityIngotParticleNode.getComponent("AnimParticleSystem")), this.Es;
            },
            'enumerable': false,
            'configurable': true
          }), M.prototype.playMiddleCoin = function () {
            this.middleCoinParticleNode.active = true, this.middleCoinParticleController.resetSystem();
          }, M.prototype.playBottomCoin = function () {
            this.bottomCoinParticleNode.active = true, this.bottomCoinParticleController.resetSystem();
          }, M.prototype.playBottomIngot = function () {
            this.bottomIngotParticleNode.active = true, this.bottomIngotParticleController.resetSystem();
          }, M.prototype.playGravityCoin = function () {
            {
              this.gravityCoinParticleNode.active = true, this.gravityCoinController.resetSystem();
            }
          }, M.prototype.playGravityIngot = function () {
            this.gravityIngotParticleNode.active = true, this.gravityIngotController.resetSystem();
          }, M.prototype.stopMiddleCoin = function () {
            this.middleCoinParticleNode.active = false, this.middleCoinParticleController.stopSystem();
          }, M.prototype.stopBottomCoin = function () {
            {
              this.bottomCoinParticleNode.active = false, this.bottomCoinParticleController.stopSystem();
            }
          }, M.prototype.stopBottomIngot = function () {
            {
              this.bottomIngotParticleNode.active = false, this.bottomIngotParticleController.stopSystem();
            }
          }, M.prototype.stopGravityCoin = function () {
            this.gravityCoinParticleNode.active = false, this.gravityCoinController.stopSystem();
          }, M.prototype.stopGravityIngot = function () {
            this.gravityIngotParticleNode.active = false, this.gravityIngotController.stopSystem();
          }, M.prototype.q = function () {
            {
              this.middleCoinParticleNode.active = false, this.bottomCoinParticleNode.active = false, this.bottomIngotParticleNode.active = false, this.gravityCoinParticleNode.active = false, this.gravityIngotParticleNode.active = false, this.middleCoinParticleController.stopSystem(), this.bottomCoinParticleController.stopSystem(), this.bottomIngotParticleController.stopSystem(), this.gravityCoinController.stopSystem(), this.gravityIngotController.stopSystem(), this.Rs = undefined, this.ks = undefined, this.Ls = undefined, this.Es = undefined, this.js = undefined;
            }
          }, M.prototype.destroy = function () {
            return this.q(), this.node.destroy(), V.prototype.destroy.call(this);
          }, __decorate([H(cc.Node)], M.prototype, "middleCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "bottomCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "bottomIngotParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "gravityCoinParticleNode", undefined), __decorate([H(cc.Node)], M.prototype, "gravityIngotParticleNode", undefined), __decorate([C], M);
        }(cc.Component);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = CoinParticleController;
