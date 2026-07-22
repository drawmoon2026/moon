// module: TotalWinController
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function TotalWinController(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "c7a79fdMcRHvaU/jQ/WPgZj", "TotalWinController")) {
    {
      var m = {};
      m.value = true;
      Object.defineProperty(I, "__esModule", m);
      var B = F("AudioManager"),
        X = F("BGMHandler"),
        Z = F("AudioConstant"),
        T = F("SpaceBarInterrupter"),
        M = F("TotalWinController.spec"),
        C = F("AutomationDecorator"),
        V = cc._decorator,
        N = V.ccclass,
        q = V.property,
        g = function (K) {
          function O() {
            var x = null !== K && K.apply(this, arguments) || this;
            return x.contentNode = undefined, x.collectNode = undefined, x.collectHoverNode = undefined, x.collectSprite = undefined, x.winNumberHolder = undefined, x.totalWinTextNode = undefined, x.skipNode = undefined, x.numberDisplayNode = undefined, x.numberDisplayHolder = undefined, x.twVfxCNode = undefined, x.particleEffectHolder = undefined, x.particleEffectANode = undefined, x.particleEffectBNode = undefined, x.hoverEffectNode = undefined, x.coinExplosionNode = undefined, x.Sg = undefined, x.Ct = false, x.gg = undefined, x.Cg = undefined, x.Mg = undefined, x.ci = undefined, x.yg = undefined, x.q = undefined, x.wg = undefined, x.Bg = undefined, x;
          }
          return __extends(O, K), Object.defineProperty(O.prototype, "numberDisplayController", {
            'get': function () {
              {
                return this.ci || (this.ci = this.numberDisplayNode.getComponent("NumberDisplayController")), this.ci;
              }
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(O.prototype, "numberRollController", {
            'get': function () {
              return this.Mg || (this.Mg = this.numberDisplayNode.getComponent("NumberRollController")), this.Mg;
            },
            'enumerable': false,
            'configurable': true
          }), Object.defineProperty(O.prototype, "coinExplosionAnimationController", {
            'get': function () {
              return this.yg || (this.yg = this.coinExplosionNode.getComponent("CoinExplosionAnimationController")), this.yg;
            },
            'enumerable': false,
            'configurable': true
          }), O.prototype.setSocialShareEventCallback = function (x) {
            {
              this.wg = x.numberRollingEndCallback, this.Bg = x.collectButtonClickedCallback;
            }
          }, O.prototype.setTotalWinSF = function (x) {
            this.totalWinTextNode.getComponent(cc.Sprite).spriteFrame = x;
          }, O.prototype.setCollectSF = function (x, p) {
            this.gg = x, this.Cg = p;
          }, O.prototype.play = function (x, p, b) {
            this.Ag({
              'collectButtonNode': this.collectNode,
              'skipButtonNode': this.skipNode
            }), this.q = b, this.Sg = x, this.Ct = p, this.Hg(), this.Og();
          }, O.prototype.onCollectClick = function () {
            T.spaceBarInterrupter.unsubscribeEventInterrupter("totalwinbtn");
            var x = this.Bg;
            this.Bg = undefined, x && x(this.dismissCollectButton.bind(this));
          }, O.prototype.dismissCollectButton = function () {
            this.unscheduleAllCallbacks(), this.Jt(), B.playAudio(Z.GENERAL_AUDIO.uiCollect.key), this.collectHoverNode.active = false, this.collectHoverNode.opacity = 0, this.collectHoverNode.stopAllActions(), this.numberDisplayHolder.stopAllActions(), this.numberDisplayHolder.runAction(cc.sequence(cc.scaleTo(0.1, 1.25), cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1.15))), this.collectSprite.spriteFrame = this.Cg, this.collectNode.getComponent(cc.Button).enabled = false, this.collectNode.stopAllActions(), this.collectNode.runAction(cc.sequence(cc.scaleTo(0.15, 0.9), cc.scaleTo(0.1, 1.1), cc.scaleTo(0.1, 1))), this.coinExplosionAnimationController.play("anim_coin_vfx", this.dismiss.bind(this));
          }, O.prototype.Hg = function () {
            {
              var x = this.contentNode;
              x.active = true, x.opacity = 0, x.stopAllActions(), X.bgmHandler.fadeOutBgm(0.5), x.runAction(cc.sequence(cc.fadeIn(0.435).easing(cc.easeIn(2)), cc.callFunc(this.jt, this)));
            }
          }, O.prototype.ko = function () {
            this.skipNode.active && (T.spaceBarInterrupter.unsubscribeEventInterrupter("totalwin"), this.skipNode.active = false), this.Ig(), this.coinExplosionAnimationController.play(), this.Jt();
          }, O.prototype.Jt = function () {
            var x = this.hoverEffectNode;
            x.stopAllActions(), x.setScale(cc.v2(0, 0)), x.opacity = 255, x.runAction(cc.sequence(cc.scaleTo(0.3, 3).easing(cc.easeIn(2)), cc.spawn(cc.scaleTo(0.5, 5), cc.fadeOut(0.5))));
          }, O.prototype.Ig = function () {
            var x = this;
            B.stopAudio(Z.GENERAL_AUDIO.bgmTotalwinMain.key), B.playAudio(Z.GENERAL_AUDIO.bgmTotalwinEnd.key);
            var p = this.collectNode,
              b = this.Ct ? 1 : 6;
            p.active = true, this.Tg(), this.collectSprite.spriteFrame = this.gg, p.scale = 0, p.stopAllActions(), p.runAction(cc.sequence(cc.scaleTo(0.15, 1.15), cc.scaleTo(0.1, 0.95), cc.scaleTo(0.1, 1), cc.callFunc(function () {
              x.Ci(), x.scheduleOnce(x.Ci, 1);
            }), cc.callFunc(function () {
              p.getComponent(cc.Button).enabled = true, x.scheduleOnce(x.onCollectClick, b), T.spaceBarInterrupter.subscribeEventInterrupter("totalwinbtn", x.node, x.onCollectClick.bind(x));
              var L = x.wg;
              x.wg = undefined, L && L();
            }, this)));
          }, O.prototype.Ci = function () {
            this.collectNode.getComponent(cc.Button).enabled = true;
            var x = this.collectHoverNode;
            x.active = true, x.opacity = 0, x.setScale(2.5), x.stopAllActions(), x.runAction(cc.sequence(cc.fadeIn(0.5).easing(cc.easeInOut(1)), cc.fadeOut(0.5).easing(cc.easeInOut(1)))), x.runAction(cc.scaleTo(1, 3).easing(cc.easeInOut(2)));
          }, O.prototype.skipNumberRoll = function () {
            this.skipNode.active && (T.spaceBarInterrupter.unsubscribeEventInterrupter("totalwin"), this.numberRollController.skip(), this.skipNode.active = false);
          }, O.prototype.Og = function () {
            this.particleEffectHolder.opacity = 255, this.Ft(), this.Wt(), this.winNumberHolder.stopAllActions(), this.winNumberHolder.runAction(cc.fadeIn(0.3));
            var x = cc.Color.WHITE;
            this.twVfxCNode.stopAllActions(), this.twVfxCNode.runAction(cc.tintTo(0.3, x.getR(), x.getG(), x.getB()));
          }, O.prototype.jt = function () {
            this.skipNode.active || (B.stopAudio(Z.GENERAL_AUDIO.bgmTotalwinMain.key), B.playAudio(Z.GENERAL_AUDIO.bgmTotalwinMain.key), this.numberRollController.rollDuration = 4.08, this.numberRollController.play(0, this.Sg, this.ko.bind(this)), this.skipNode.active = true, T.spaceBarInterrupter.subscribeEventInterrupter("totalwin", this.node, this.skipNumberRoll.bind(this)));
          }, O.prototype.dismiss = function () {
            {
              B.fadeAudio(Z.GENERAL_AUDIO.bgmTotalwinEnd.key, 1, 0, 1), this.particleEffectHolder.stopAllActions(), this.particleEffectHolder.runAction(cc.fadeOut(0.3)), this.winNumberHolder.runAction(cc.fadeOut(0.3));
              var x = cc.Color.BLACK;
              this.twVfxCNode.runAction(cc.tintTo(0.1, x.getR(), x.getG(), x.getB())), this.particleEffectANode.runAction(cc.tintTo(0.1, x.getR(), x.getG(), x.getB())), this.particleEffectBNode.runAction(cc.tintTo(0.1, x.getR(), x.getG(), x.getB())), this.collectNode.stopAllActions(), this.collectNode.runAction(cc.fadeOut(0.3)), this.contentNode.runAction(cc.sequence(cc.fadeOut(0.3).easing(cc.easeOut(2)), cc.callFunc(this.fi, this)));
            }
          }, O.prototype.Ft = function () {
            this.particleEffectANode.stopAllActions(), this.particleEffectANode.setScale(3), this.particleEffectANode.color = cc.Color.BLACK;
            var x = cc.Color.WHITE;
            this.particleEffectANode.runAction(cc.spawn(cc.tintTo(0.5, x.getR(), x.getG(), x.getB()), cc.scaleTo(10, 9)));
          }, O.prototype.Wt = function () {
            this.particleEffectBNode.stopAllActions(), this.particleEffectBNode.setScale(3), this.particleEffectBNode.color = cc.Color.BLACK;
            var x = cc.Color.WHITE;
            this.particleEffectBNode.runAction(cc.spawn(cc.tintTo(0.5, x.getR(), x.getG(), x.getB()), cc.scaleTo(20, 4.5)));
          }, O.prototype.Xt = function () {
            {
              var x = this.collectNode;
              x.stopAllActions(), x.active = false, x.scale = 0, x.opacity = 255, this.Ct = false, this.coinExplosionAnimationController.stop(), this.particleEffectANode.stopAllActions(), this.particleEffectANode.setScale(3), this.particleEffectANode.color = cc.Color.BLACK, this.particleEffectBNode.stopAllActions(), this.particleEffectBNode.setScale(3), this.particleEffectBNode.color = cc.Color.BLACK, this.twVfxCNode.stopAllActions(), this.twVfxCNode.color = cc.Color.BLACK, this.particleEffectHolder.stopAllActions(), this.particleEffectHolder.opacity = 255, this.winNumberHolder.stopAllActions(), this.winNumberHolder.opacity = 0, this.unschedule(this.Ci);
              var p = this.collectHoverNode;
              p.active = true, p.opacity = 0, p.setScale(2.5), p.stopAllActions(), this.hoverEffectNode.stopAllActions(), this.hoverEffectNode.setScale(cc.v2(0, 0)), this.hoverEffectNode.opacity = 255, this.numberDisplayHolder.setScale(1), this.numberDisplayController.clear();
            }
          }, O.prototype.fi = function () {
            this.Xt();
            var x = this.q;
            this.q = undefined, x && x();
          }, O.prototype.Ag = function () {}, O.prototype.Tg = function () {}, __decorate([q(cc.Node)], O.prototype, "contentNode", undefined), __decorate([q(cc.Node)], O.prototype, "collectNode", undefined), __decorate([q(cc.Node)], O.prototype, "collectHoverNode", undefined), __decorate([q(cc.Sprite)], O.prototype, "collectSprite", undefined), __decorate([q(cc.Node)], O.prototype, "winNumberHolder", undefined), __decorate([q(cc.Node)], O.prototype, "totalWinTextNode", undefined), __decorate([q(cc.Node)], O.prototype, "skipNode", undefined), __decorate([q(cc.Node)], O.prototype, "numberDisplayNode", undefined), __decorate([q(cc.Node)], O.prototype, "numberDisplayHolder", undefined), __decorate([q(cc.Node)], O.prototype, "twVfxCNode", undefined), __decorate([q(cc.Node)], O.prototype, "particleEffectHolder", undefined), __decorate([q(cc.Node)], O.prototype, "particleEffectANode", undefined), __decorate([q(cc.Node)], O.prototype, "particleEffectBNode", undefined), __decorate([q(cc.Node)], O.prototype, "hoverEffectNode", undefined), __decorate([q(cc.Node)], O.prototype, "coinExplosionNode", undefined), __decorate([C.automationDec({
            'func': M.skipTotalWinAnimationShownEvent
          })], O.prototype, "_startWinRoll", null), __decorate([C.automationDec({
            'func': M.initTotalWinNodes
          })], O.prototype, "_initTotalWinNodes", null), __decorate([C.automationDec({
            'func': M.collectTotalWinButtonShownEvent
          })], O.prototype, "_collectButtonShown", null), __decorate([N], O);
        }(cc.Component);
      I.default = g, cc._RF.pop();
    }
  }
}
module.exports = TotalWinController;
