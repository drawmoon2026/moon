// module: BonusLoadingController
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function BonusLoadingController(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "4e73fN1PSVGTpZlJtvO3hpI", "BonusLoadingController")) {
    var m = {};
    m.value = true;
    Object.defineProperty(exports, "__esModule", m);
    var B = require("AudioManager"),
      X = require("AudioConstant"),
      Z = require("Utils"),
      T = require("SpaceBarInterrupter"),
      M = cc._decorator,
      C = M.ccclass,
      V = M.property,
      N = function (q) {
        function f() {
          var g = null !== q && q.apply(this, arguments) || this;
          return g.content = undefined, g.backgroundNode = undefined, g.particleEffectNode = undefined, g.numberDisplayHolderNode = undefined, g.freeSpinWonTextNode = undefined, g.startTextSprite = undefined, g.loadingNode = undefined, g.loadingPercentNode = undefined, g.hoverEffectNode = undefined, g.freeSpinTextSprite = undefined, g.featureLoadingSprite = undefined, g.startButtonNode = undefined, g.collectHoverNode = undefined, g.numberDisplayNode = undefined, g.ai = undefined, g.ui = undefined, g.li = undefined, g.fi = undefined, g.ci = undefined, g.di = undefined, g;
        }
        return __extends(f, q), Object.defineProperty(f.prototype, "numberDisplayController", {
          'get': function () {
            return this.ci || (this.ci = this.numberDisplayNode.getComponent("NumberDisplayController")), this.ci;
          },
          'enumerable': false,
          'configurable': true
        }), Object.defineProperty(f.prototype, "loadingPercentDisplayController", {
          'get': function () {
            {
              return this.di || (this.di = this.loadingPercentNode.getComponent("NumberDisplayController")), this.di;
            }
          },
          'enumerable': false,
          'configurable': true
        }), f.prototype.init = function (g, l, K, O) {
          this.freeSpinTextSprite.spriteFrame = g, this.ai = l, this.ui = K, this.featureLoadingSprite.spriteFrame = O;
        }, f.prototype.show = function (g, l) {
          undefined === g && (g = 9), this.li = g, this.fi = l, this.vi(), this._i();
        }, f.prototype.vi = function () {
          var g = this;
          this.content.stopAllActions(), this.content.active = true, this.content.opacity = 0, this.content.runAction(cc.fadeIn(0.5).easing(cc.easeIn(2))), this.numberDisplayController.clear(), this.numberDisplayController.displayNumber(this.li, false);
          var l = cc.Color.WHITE;
          this.particleEffectNode.runAction(cc.tintTo(0.3, l.getR(), l.getG(), l.getB())), Z.delayCallback(0.05)(function () {
            g.bi();
          }), this.pi(), this.Jt();
        }, f.prototype.bi = function () {
          var g = this;
          this.numberDisplayHolderNode.stopAllActions(), this.numberDisplayHolderNode.runAction(cc.sequence(cc.scaleTo(0.3, 1.25), cc.scaleTo(0.15, 0.9), cc.scaleTo(0.15, 1))), Z.delayCallback(0.05)(function () {
            g.freeSpinWonTextNode.stopAllActions(), g.freeSpinWonTextNode.runAction(cc.sequence(cc.scaleTo(0.3, 2), cc.scaleTo(0.15, 1.25), cc.scaleTo(0.15, 1.43)));
          });
        }, f.prototype.pi = function () {
          this.backgroundNode.scale = 2.5, this.backgroundNode.runAction(cc.scaleTo(80, 3)), this.particleEffectNode.scale = 2.5, this.particleEffectNode.runAction(cc.scaleTo(20, 5));
        }, f.prototype.updateProgress = function (g, l) {
          var K = g / l * 100;
          this.loadingPercentDisplayController.displayNumber(K, false);
        }, f.prototype.onLoadComplete = function (g, l) {
          this.fi = l, this.Si(g), this.gi();
        }, f.prototype.Jt = function () {
          this.hoverEffectNode.stopAllActions();
          var g = this.hoverEffectNode;
          g.setScale(cc.v2(0, 0)), g.opacity = 255, g.runAction(cc.sequence(cc.scaleTo(0.3, 3).easing(cc.easeIn(2)), cc.spawn(cc.scaleTo(0.5, 5), cc.fadeOut(0.5))));
        }, f.prototype.Si = function (g) {
          {
            var l = this;
            this.startTextSprite.spriteFrame = this.ai, this.startButtonNode.stopAllActions(), this.startButtonNode.active = true, this.startButtonNode.scale = 0, this.startButtonNode.runAction(cc.sequence(cc.scaleTo(0.15, 1.15), cc.scaleTo(0.1, 0.95), cc.scaleTo(0.1, 1))), Z.delayCallback(0.35)(function () {
              {
                l.Ci(), l.schedule(l.Ci, 1);
              }
            }), this.Mi(g), T.spaceBarInterrupter.subscribeEventInterrupter("bonus", this.node, this.startButtonClick.bind(this));
          }
        }, f.prototype._i = function () {
          {
            this.loadingNode.active = true, this.loadingNode.stopAllActions(), this.loadingNode.runAction(cc.spawn(cc.fadeIn(0.5), cc.callFunc(this.yi, this)));
          }
        }, f.prototype.gi = function () {
          this.loadingPercentNode.runAction(cc.fadeOut(0.1)), this.loadingNode.runAction(cc.fadeOut(0.1));
        }, f.prototype.yi = function () {
          {
            var g = this.fi;
            this.fi = undefined, this.loadingNode.runAction(cc.repeatForever(cc.rotateBy(2, 360))), this.loadingPercentNode.active = true, this.loadingPercentNode.opacity = 255, this.loadingPercentDisplayController.displayNumber(0, false), g && g();
          }
        }, f.prototype.startButtonClick = function () {
          {
            this.unscheduleAllCallbacks(), T.spaceBarInterrupter.unsubscribeEventInterrupter("bonus"), B.playAudio(X.GENERAL_AUDIO.uiStart.key), this.startTextSprite.spriteFrame = this.ui, this.startButtonNode.getComponent("cc.Button").enabled = false, this.collectHoverNode.active = false, this.collectHoverNode.opacity = 0, this.collectHoverNode.stopAllActions(), this.startButtonNode.stopAllActions(), this.startButtonNode.runAction(cc.sequence(cc.scaleTo(0.15, 0.9), cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1), cc.delayTime(0.15), cc.callFunc(this.hideLoading, this)));
          }
        }, f.prototype.hideLoading = function () {
          var g = this;
          this.startButtonNode.stopAllActions(), this.startButtonNode.runAction(cc.sequence(cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 0)));
          var l = function () {
            {
              var K = g.fi;
              g.fi = undefined, Z.delayCallback(0.22)(g.Xt.bind(g)), K && K();
            }
          };
          this.particleEffectNode.runAction(cc.tintTo(0.3, 0, 0, 0).easing(cc.easeIn(2))), this.content.runAction(cc.spawn(cc.fadeOut(0.5), cc.callFunc(function () {
            Z.delayCallback(0.5)(l);
          }))), B.playAudio(X.GENERAL_AUDIO.uiStartOut.key);
        }, f.prototype.Ci = function () {
          this.startButtonNode.getComponent(cc.Button).enabled = true;
          var g = this.collectHoverNode;
          g.active = true, g.opacity = 0, g.setScale(2.5), g.stopAllActions(), g.runAction(cc.sequence(cc.fadeIn(0.5).easing(cc.easeInOut(1)), cc.fadeOut(0.5).easing(cc.easeInOut(1)))), g.runAction(cc.scaleTo(1, 3).easing(cc.easeInOut(2)));
        }, f.prototype.Mi = function (g) {
          var l = g ? 1 : 6;
          this.scheduleOnce(this.startButtonClick, l);
        }, f.prototype.Xt = function () {
          this.unscheduleAllCallbacks(), this.freeSpinWonTextNode.stopAllActions(), this.freeSpinWonTextNode.setScale(0), this.numberDisplayHolderNode.stopAllActions(), this.numberDisplayHolderNode.setScale(0);
          var g = this.collectHoverNode;
          g.active = false, g.opacity = 0, g.setScale(0), g.stopAllActions(), this.hoverEffectNode.stopAllActions(), this.hoverEffectNode.setScale(0), this.hoverEffectNode.opacity = 0, this.backgroundNode.stopAllActions(), this.backgroundNode.scale = 2.5, this.particleEffectNode.stopAllActions(), this.particleEffectNode.scale = 2.5, this.startButtonNode.stopAllActions(), this.startButtonNode.scale = 0, this.startButtonNode.active = false, this.loadingNode.stopAllActions(), this.loadingNode.opacity = 0, this.loadingNode.active = false, this.numberDisplayController.clear(), this.content.stopAllActions(), this.content.active = false;
        }, __decorate([V(cc.Node)], f.prototype, "content", undefined), __decorate([V(cc.Node)], f.prototype, "backgroundNode", undefined), __decorate([V(cc.Node)], f.prototype, "particleEffectNode", undefined), __decorate([V(cc.Node)], f.prototype, "numberDisplayHolderNode", undefined), __decorate([V(cc.Node)], f.prototype, "freeSpinWonTextNode", undefined), __decorate([V(cc.Sprite)], f.prototype, "startTextSprite", undefined), __decorate([V(cc.Node)], f.prototype, "loadingNode", undefined), __decorate([V(cc.Node)], f.prototype, "loadingPercentNode", undefined), __decorate([V(cc.Node)], f.prototype, "hoverEffectNode", undefined), __decorate([V(cc.Sprite)], f.prototype, "freeSpinTextSprite", undefined), __decorate([V(cc.Sprite)], f.prototype, "featureLoadingSprite", undefined), __decorate([V(cc.Node)], f.prototype, "startButtonNode", undefined), __decorate([V(cc.Node)], f.prototype, "collectHoverNode", undefined), __decorate([V(cc.Node)], f.prototype, "numberDisplayNode", undefined), __decorate([C], f);
      }(cc.Component);
    exports.default = N, cc._RF.pop();
  }
}
module.exports = BonusLoadingController;
