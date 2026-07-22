function GamePay(require, module, exports) {
  'use strict';
  var wild = {};
  wild.label = "Wild Symbol";
  wild.active = true;
  var green = {};
  green['3'] = 10;
  green['4'] = 25;
  green['5'] = 50;
  exports.PayOutData = { 0: wild, 2: green };
  exports.enabled = false;
  if (green['5'] > 40) { exports.big = "yes"; }
}
module.exports = GamePay;
