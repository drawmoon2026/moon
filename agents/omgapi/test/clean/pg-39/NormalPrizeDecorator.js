// module: NormalPrizeDecorator
// Cocos 模块函数,参数 (require, module, exports) = (require, O, exports)
function NormalPrizeDecorator(require, O, exports) {
  'use strict';

  if (!cc._RF.push(O, "106e2xHvchPlqWVXmeFLDHr", "NormalPrizeDecorator")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(exports, "__esModule", B);
      var x = require("SlotGameConstants"),
        C = require("SlotAnalyticsEnum"),
        H = require("AutoSpinHandler"),
        V = require("ButtonHitTest"),
        M = require("JakeSlotGameTemplate"),
        q = function () {
          function m(D, W) {
            this.name = "Normal Prize Decorator", this.dataSource = undefined, this.generalControllers = undefined, this.dataSource = D, this.generalControllers = W.generalControllers;
          }
          return m.prototype.destroy = function () {
            {
              this.clearAvailableActions(), this.dataSource = undefined, this.generalControllers = undefined;
            }
          }, m.prototype.setAvailableActions = function () {
            var D = this.generalControllers.spinButtonController;
            D.isAutoSpin() && (D.setOnClickCallback(this.Zr.bind(this, C.SpinTrigger.CLICK)), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.do, this));
          }, m.prototype.clearAvailableActions = function () {
            {
              this.generalControllers.spinButtonController.clearOnClickCallback(), M.JSGTConfig.spaceBarInterrupterEnabled || cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.do, this);
            }
          }, m.prototype.do = function (D) {
            if (!M.JSGTConfig.spaceBarInterrupterEnabled && V.buttonHitTest(this.generalControllers.spinButtonController.node)) switch (D.keyCode) {
              case x.SPIN_BUTTON_TRIGGER_KEY:
                this.Zr(C.SpinTrigger.SPACEBAR);
            }
          }, m.prototype.Zr = function () {
            var D = this.generalControllers,
              W = D.spinButtonController;
            H.exitAutoSpin(D.spinButtonController), this.clearAvailableActions(), W.disableButton();
          }, m;
        }();
      exports.default = q, cc._RF.pop();
    }
  }
}
module.exports = NormalPrizeDecorator;
