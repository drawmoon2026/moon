// module: NormalPrizeDecorator
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NormalPrizeDecorator(F, j, I) {
  'use strict';

  if (!cc._RF.push(j, "106e2xHvchPlqWVXmeFLDHr", "NormalPrizeDecorator")) {
    var m = {};
    m.value = true;
    Object.defineProperty(I, "__esModule", m);
    var B = F("SlotGameConstants"),
      X = F("SlotAnalyticsEnum"),
      Z = F("AutoSpinHandler"),
      T = F("ButtonHitTest"),
      M = F("JakeSlotGameTemplate"),
      C = function () {
        function V(N, q) {
          this.name = "Normal Prize Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = N, this.generalControllers = q.generalControllers;
        }
        return V.prototype.destroy = function () {
          this.clearAvailableActions(), this.dataSource = undefined, this.generalControllers = undefined;
        }, V.prototype.setAvailableActions = function () {
          var N = this.generalControllers.spinButtonController;
          N.isAutoSpin() && (N.setOnClickCallback(this.af.bind(this, X.SpinTrigger.CLICK)), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this));
        }, V.prototype.clearAvailableActions = function () {
          this.generalControllers.spinButtonController.clearOnClickCallback(), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.ho, this);
        }, V.prototype.ho = function (N) {
          if (!M.JSGTConfig.spaceBarInterrupterEnabled && T.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (N.keyCode) {
            case B.SPIN_BUTTON_TRIGGER_KEY:
              this.af(X.SpinTrigger.SPACEBAR);
          }
        }, V.prototype.af = function () {
          var N = this.generalControllers,
            q = N.spinButtonController;
          Z.exitAutoSpin(N.spinButtonController), this.clearAvailableActions(), q.disableButton();
        }, V;
      }();
    I.default = C, cc._RF.pop();
  }
}
module.exports = NormalPrizeDecorator;
