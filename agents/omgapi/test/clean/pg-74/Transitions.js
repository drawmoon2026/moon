// module: Transitions
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function Transitions(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "5d6ccC+14pH074ZH/e+rjmC", "Transitions")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(I, "__esModule", B), I.FreeSpinToNormalSpinTransition = I.FreeSpinToFreeSpinTransition = I.NormalSpinToFreeSpinTransition = I.RespinToNormalSpinTransition = I.RespinToRespinTransition = I.NormalSpinToRespinTransition = I.NormalSpinToNormalSpinTransition = undefined;
      var X = F("MJDataSource"),
        Z = F("Utils"),
        T = F("GameEventHandler"),
        M = F("SettingMenuHelper"),
        C = F("BGMHandler"),
        V = F("GameConstant"),
        N = F("AudioManager"),
        q = F("AudioConstant"),
        g = function (y) {
          function z() {
            return null !== y && y.apply(this, arguments) || this;
          }
          return __extends(z, y), z.prototype.run = function (P, G) {
            k(), this.Zh = P.generalControllers, this.Tr(), G && G();
          }, z.prototype.Tr = function () {
            this.Zh.settingMenuFooterController.returnHolder(), M.settingMenuHelper.setHidden(false);
          }, z.prototype.destroy = function () {
            return this.Zh = undefined, y.prototype.destroy.call(this);
          }, z;
        }(cc.Object);
      I.NormalSpinToNormalSpinTransition = g;
      var K = function (y) {
        function z() {
          return null !== y && y.apply(this, arguments) || this;
        }
        return __extends(z, y), z.prototype.run = function (P, G) {
          k(), this.Zh = P.generalControllers, G && G();
        }, z.prototype.destroy = function () {
          return this.Zh = undefined, y.prototype.destroy.call(this);
        }, z;
      }(cc.Object);
      I.NormalSpinToRespinTransition = K;
      var O = function (y) {
        {
          function z() {
            {
              return null !== y && y.apply(this, arguments) || this;
            }
          }
          return __extends(z, y), z.prototype.run = function (P, G) {
            k(), this.Zh = P.generalControllers, G && G();
          }, z.prototype.destroy = function () {
            return this.Zh = undefined, y.prototype.destroy.call(this);
          }, z;
        }
      }(cc.Object);
      I.RespinToRespinTransition = O;
      var x = function (y) {
        function z() {
          return null !== y && y.apply(this, arguments) || this;
        }
        return __extends(z, y), z.prototype.run = function (P, G) {
          {
            k(), this.Zh = P.generalControllers, this.Tr(), G && G();
          }
        }, z.prototype.Tr = function () {
          this.Zh.settingMenuFooterController.returnHolder(), M.settingMenuHelper.setHidden(false);
        }, z.prototype.destroy = function () {
          return this.Zh = undefined, y.prototype.destroy.call(this);
        }, z;
      }(cc.Object);
      I.RespinToNormalSpinTransition = x;
      var L = function (y) {
        function z() {
          return null !== y && y.apply(this, arguments) || this;
        }
        return __extends(z, y), z.prototype.run = function (P, G, A) {
          Y(), this.Zh = P.generalControllers, this.Xh = P.bonusControllers, this.wu = G, X.mjDataSource.isRefreshWorld ? A && A() : Z.sequenceCallback(this.jg.bind(this), Z.delayCallback(0.5), Z.spawnCallback(this.Lg.bind(this), this.Pg.bind(this)), Z.delayCallback(0.5), Z.spawnCallback(this.Tr.bind(this), this.Dg.bind(this)), this.Uu.bind(this), this.Ug.bind(this))(A);
        }, z.prototype.Uu = function (P) {
          {
            var G = this.Zh;
            G.symbolPopoutController.disablePanel(), G.symbolPopoutController.clearOnClickCallback(), G.symbolPopoutController.hidePopOutItem(), P && P();
          }
        }, z.prototype.Ug = function (P) {
          var G = X.mjDataSource.transactionModel,
            A = G.transitionTo,
            w = G.transitionFrom,
            W = this.Zh;
          w !== V.TransitionState.NORMAL && w !== V.TransitionState.RESPIN || A !== V.TransitionState.FREE_SPIN || N.playAudio(q.GENERAL_AUDIO.fsMultiplyRefresh.key), W.multiplierBoardController.switchMultiplier(A, P);
        }, z.prototype.Pg = function (P) {
          {
            var G = X.mjDataSource.transactionModel.transitionTo,
              A = this.Zh;
            A.backGroundController.switchBackground(G), A.foregroundController.switchBackground(G), A.infoboardController.switchBackground(G), A.infoboardController.freeSpinTips(true), P && P();
          }
        }, z.prototype.Tr = function (P) {
          var G = this.Zh,
            A = this.Xh,
            w = X.mjDataSource.playerModel.balance,
            W = X.mjDataSource.transactionModel.freeSpin.step;
          M.settingMenuHelper.setHidden(true), M.settingMenuHelper.setBalance(w);
          var D = G.settingMenuFooterHolder;
          G.spinButtonController.hide(), G.settingMenuFooterController.changeHolder(D), A.remainingFreeSpinController.show(), A.remainingFreeSpinController.setFreeSpinCount(W), G.multiplierBoardController.switchToBonusBackground(), P && P();
        }, z.prototype.jg = function (P) {
          var G = X.mjDataSource.transactionModel.freeSpin.totalStep;
          this.Zh.bonusLoadingController.show(G, P), Z.delayCallback(1.655)(this.xg.bind(this)), N.playAudio(q.GENERAL_AUDIO.bgmBonusIntro.key), C.bgmHandler.fadeOutBgm(0);
        }, z.prototype.xg = function () {
          C.bgmHandler.playBgm(V.TransitionState.FREE_SPIN), C.bgmHandler.fadeInBgm(0);
        }, z.prototype.Dg = function (P) {
          {
            var G = X.mjDataSource.isGameReplaying;
            this.Zh.bonusLoadingController.onLoadComplete(G, P);
          }
        }, z.prototype.Lg = function (P) {
          this.wu.loadBonusBundle(P);
        }, z.prototype.destroy = function () {
          return this.Zh = undefined, this.Xh = undefined, y.prototype.destroy.call(this);
        }, z;
      }(cc.Object);
      I.NormalSpinToFreeSpinTransition = L;
      var H = function (y) {
        function z() {
          {
            return null !== y && y.apply(this, arguments) || this;
          }
        }
        return __extends(z, y), z.prototype.run = function (P, G) {
          Y(), this.Zh = P.generalControllers, this.Tr(), G && G();
        }, z.prototype.Tr = function () {
          var P = this.Zh;
          M.settingMenuHelper.setHidden(true);
          var G = P.settingMenuFooterHolder;
          P.spinButtonController.hide(), P.settingMenuFooterController.changeHolder(G), P.symbolPopoutController.disablePanel(), P.symbolPopoutController.clearOnClickCallback(), P.symbolPopoutController.hidePopOutItem();
        }, z.prototype.destroy = function () {
          {
            return this.Zh = undefined, y.prototype.destroy.call(this);
          }
        }, z;
      }(cc.Object);
      I.FreeSpinToFreeSpinTransition = H;
      var U = function (y) {
        function z() {
          return null !== y && y.apply(this, arguments) || this;
        }
        return __extends(z, y), z.prototype.run = function (P, G) {
          this.Zh = P, P.multiplierBoardController.resetMultiplier(), k(), this.Yu(), G && G();
        }, z.prototype.Yu = function () {
          {
            C.bgmHandler.playBgm(V.TransitionState.NORMAL);
          }
        }, z.prototype.destroy = function () {
          {
            return this.Zh = undefined, y.prototype.destroy.call(this);
          }
        }, z;
      }(cc.Object);
      I.FreeSpinToNormalSpinTransition = U, cc._RF.pop();
    }
  }
  function k() {
    var y = {};
    y.displayState = "End";
    y.flowType = "BonusGame";
    T.emitGameFlowStateChangedEvent(y);
  }
  function Y() {
    var y = {};
    y.displayState = "Start";
    y.flowType = "BonusGame";
    T.emitGameFlowStateChangedEvent(y);
  }
}
module.exports = Transitions;
