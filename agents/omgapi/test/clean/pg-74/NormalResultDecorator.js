// module: NormalResultDecorator
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function NormalResultDecorator(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "94e3b2snKRKspFrhelPCcrj", "NormalResultDecorator")) {
    {
      var m = {};
      m["value"] = !0;
      Object["defineProperty"](I, "__esModule", m);
      var B = F("SlotStateMachine"),
        X = F("SlotAnalyticsEnum"),
        Z = F("AutoSpinHandler"),
        T = F("SlotGameConstants"),
        M = F("ButtonHitTest"),
        C = F("JakeSlotGameTemplate"),
        V = F("SpinConfigHandler"),
        N = function () {
          function q(f, g) {
            this["triggerFastStop"] = void 0, this["name"] = "Normal Result Decorator", this["dataSource"] = void 0, this["generalControllers"] = void 0, this["dataSource"] = f, this["generalControllers"] = g["generalControllers"];
          }
          return q["prototype"]["destroy"] = function () {
            this["clearAvailableActions"](), this["triggerFastStop"] = void 0, this["dataSource"] = void 0, this["generalControllers"] = void 0;
          }, q["prototype"]["setAvailableActions"] = function () {
            var f = this["generalControllers"]["spinButtonController"];
            (f["isAutoSpin"]() || V["featureConfig"]["fastStopFeature"] && !this['uf']()) && (f["setOnClickCallback"](this['af']["bind"](this, X["SpinTrigger"]["CLICK"])), C["JSGTConfig"]["spaceBarInterrupterEnabled"] || cc["systemEvent"]['on'](cc["SystemEvent"]["EventType"]["KEY_DOWN"], this['ho'], this));
          }, q["prototype"]["clearAvailableActions"] = function () {
            this["generalControllers"]["spinButtonController"]["clearOnClickCallback"](), C["JSGTConfig"]["spaceBarInterrupterEnabled"] || cc["systemEvent"]["off"](cc["SystemEvent"]["EventType"]["KEY_DOWN"], this['ho'], this);
          }, q["prototype"]["renderFeature"] = function (f) {
            var g = this["generalControllers"]["spinButtonController"];
            g["isAutoSpin"]() || this["clearAvailableActions"](), g["stopSpin"](), f && g["disableButton"]();
          }, q["prototype"]["fastStopTriggeredWhileSpinning"] = function () {
            {
              this['lf']();
            }
          }, q["prototype"]["triggerFastStopWhileStopping"] = function () {
            this['lf']();
          }, q["prototype"]['ho'] = function (f) {
            if (!C["JSGTConfig"]["spaceBarInterrupterEnabled"] && M["buttonHitTest"](this["generalControllers"]["spinButtonController"]["node"])) switch (f["keyCode"]) {
              case T["SPIN_BUTTON_TRIGGER_KEY"]:
                this['af'](X["SpinTrigger"]["SPACEBAR"]);
            }
          }, q["prototype"]['af'] = function (f) {
            if (this["generalControllers"]["spinButtonController"]["isAutoSpin"]()) this['Jn']();else if (this["triggerFastStop"] && V["featureConfig"]["fastStopFeature"] && !this['uf']()) {
              var g = this["triggerFastStop"];
              this["triggerFastStop"] = void 0, g(f);
            }
          }, q["prototype"]['Jn'] = function () {
            var f = this["generalControllers"],
              g = f["spinButtonController"];
            Z["exitAutoSpin"](f["spinButtonController"]), V["featureConfig"]["fastStopFeature"] && !this['uf']() || g["disableButton"]();
          }, q["prototype"]['lf'] = function () {
            this["clearAvailableActions"](), this["generalControllers"]["spinButtonController"]["disableButton"]();
          }, q["prototype"]['uf'] = function () {
            {
              return this["generalControllers"]["slotController"]["getStopStyle"]() === B["StopStyle"]["FAST"];
            }
          }, q;
        }();
      I["default"] = N, cc["_RF"]["pop"]();
    }
  }
}
module.exports = NormalResultDecorator;
