// module: PiggyGoldTweaksConfig
// Cocos 模块函数,参数 (require, module, exports) = (require, j, exports)
function PiggyGoldTweaksConfig(require, j, exports) {
  'use strict';

  if (!cc._RF.push(j, "cc8b8l8piVLz5BI0oHKAZXM", "PiggyGoldTweaksConfig")) {
    exports.__esModule = true, exports.multiplierValue = exports.default = undefined;
    var y,
      B = (y = require("TweaksConfig")) && y.__esModule ? y : {
        'default': y
      },
      x = require("CreatorTweaks"),
      C = require("TweaksData"),
      H = void require("SlotProperties");
    exports.multiplierValue = undefined;
    var V = cc.Class({
      'extends': B.default,
      'onLoad': function () {
        this._super(), (0, x.bind)(C.configStore, "multiplierValue", "Test", "Test Modes", "Multiplier (custom reel only)", "RANDOM", undefined), (0, x.bind)(C.configStore, "customReelData", "Test", "Test Modes", "Custom Reel Data", ''), (0, x.bind)(C.configStore, "dummyTestSymbol", "Test", "Test Modes", "Symbol Id Reference", "[Symbol type] - [id]", H), (0, x.bind)(C.configStore, "forceWin", "Test", "Win", "Force Win", false), (0, x.bind)(C.configStore, "forceWinValue", "Test", "Win", "Force Win Value", 3000, 1, 1000000);
      }
    });
    exports.default = V, cc._RF.pop();
  }
}
module.exports = PiggyGoldTweaksConfig;
