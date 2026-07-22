// module: MJNormalGameState
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJNormalGameState(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "1d737SZeFpEjITSM4vRj2Jb", "MJNormalGameState")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("MJIdleState"),
      X = F("MJSpinState"),
      Z = F("MJPrizeState"),
      T = F("MJResultState"),
      M = F("NormalSpinDecorator"),
      C = F("NormalResultDecorator"),
      V = F("NormalPrizeDecorator"),
      N = F("Utils"),
      q = F("GameConstant"),
      g = F("TransactionStateMachineHandler"),
      K = function () {
        function O(x, p, b) {
          this["name"] = "MJ Normal Game", this["dataSource"] = void 0, this["generalControllers"] = void 0, this["finalCallback"] = void 0, this["dataSource"] = x, this["generalControllers"] = p["generalControllers"], this["finalCallback"] = b;
        }
        return O["prototype"]["run"] = function () {
          this["generalControllers"]["slotController"]["setForceGoldBlock"](!1), this['mr'] = N["sequenceCallback"](this['br']["bind"](this), this['Sr']["bind"](this), this['Mr']["bind"](this), this['yr']["bind"](this), this['Br']["bind"](this), this['jr']["bind"](this))(this['ro']["bind"](this));
        }, O["prototype"]["forceExit"] = function () {
          var x = this['mr'];
          x && x(), this['ro']();
        }, O["prototype"]['br'] = function (x) {
          new B["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }, x, q["customAutoSpinDelayTime"])["run"]();
        }, O["prototype"]['Sr'] = function (x) {
          new X["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }, x, new M["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }))["run"]();
        }, O["prototype"]['Mr'] = function (x) {
          {
            new T["default"](this["dataSource"], {
              'generalControllers': this["generalControllers"],
              'bonusControllers': void 0
            }, x, new C["default"](this["dataSource"], {
              'generalControllers': this["generalControllers"]
            }))["run"]();
          }
        }, O["prototype"]['yr'] = function (x) {
          new Z["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }, x, new V["default"](this["dataSource"], {
            'generalControllers': this["generalControllers"]
          }))["run"]();
        }, O["prototype"]['Br'] = function (x) {
          x && x();
        }, O["prototype"]['jr'] = function (x) {
          var p = this["dataSource"]["transactionModel"]["transitionTo"] === q["TransitionState"]["NORMAL"] ? "setup" : "idle";
          g["transitionCompleteCallback"](p)(x);
        }, O["prototype"]['ro'] = function () {
          var x = this["finalCallback"];
          this["finalCallback"] = void 0, x && x();
        }, O["prototype"]["destroy"] = function () {
          this['mr'] = void 0, this["dataSource"] = void 0, this["finalCallback"] = void 0, this["generalControllers"] = void 0;
        }, O;
      }();
    I["default"] = K, cc["_RF"]["pop"]();
  }
}
module.exports = MJNormalGameState;
