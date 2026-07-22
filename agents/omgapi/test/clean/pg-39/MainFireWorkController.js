// module: MainFireWorkController
// Cocos 模块函数,参数 (require, module, exports) = (j, O, exports)
function MainFireWorkController(j, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "ed2edCCqjtCGL8inu8cW2nX", "MainFireWorkController")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = cc._decorator,
        C = x.ccclass,
        H = x.property,
        r = function (V) {
          {
            function M() {
              var q = null !== V && V.apply(this, arguments) || this;
              return q.fireWork01Node = undefined, q.fireWork02Node = undefined, q.Gh = undefined, q.Nh = undefined, q;
            }
            return __extends(M, V), Object.defineProperty(M.prototype, "firework01Controller", {
              'get': function () {
                {
                  return undefined === this.Gh && (this.Gh = this.fireWork01Node.getComponent("FireworkController")), this.Gh;
                }
              },
              'enumerable': false,
              'configurable': true
            }), Object.defineProperty(M.prototype, "firework02Controller", {
              'get': function () {
                return undefined === this.Nh && (this.Nh = this.fireWork02Node.getComponent("FireworkController")), this.Nh;
              },
              'enumerable': false,
              'configurable': true
            }), M.prototype.init = function () {
              this.firework01Controller.cacheOriginalPosition(), this.firework02Controller.cacheOriginalPosition();
            }, M.prototype.play = function () {
              this.node.active = true, this.firework01Controller.play(), this.firework02Controller.play();
            }, M.prototype.stop = function () {
              this.node.active = false, this.firework01Controller.stop(), this.firework02Controller.stop();
            }, M.prototype.forceStop = function () {
              this.node.active = false, this.firework01Controller.forceStop(), this.firework02Controller.forceStop();
            }, M.prototype.destroy = function () {
              return this.stop(), this.node.destroy(), V.prototype.destroy.call(this);
            }, __decorate([H(cc.Node)], M.prototype, "fireWork01Node", undefined), __decorate([H(cc.Node)], M.prototype, "fireWork02Node", undefined), __decorate([C], M);
          }
        }(cc.Component);
      exports.default = r, cc._RF.pop();
    }
  }
}
module.exports = MainFireWorkController;
