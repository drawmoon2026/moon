// module: GameConstant
// Cocos 模块函数,参数 (require, module, exports) = (V, N, q)
function GameConstant(V, N, q) {
  'use strict';

  var f = {};
  f["value"] = !0;
  var h = {};
  h["label"] = "Wild Symbol";
  var g = {};
  g["label"] = "Scatter Symbol";
  var l = {};
  l['5'] = 50;
  l['4'] = 25;
  l['3'] = 10;
  var K = {};
  K['5'] = 40;
  K['4'] = 20;
  K['3'] = 8;
  var O = {};
  O['5'] = 30;
  O['4'] = 15;
  O['3'] = 6;
  var x = {};
  x['5'] = 15;
  x['4'] = 10;
  x['3'] = 5;
  var p = {};
  p['5'] = 12;
  p['4'] = 5;
  p['3'] = 3;
  var b = {};
  b['5'] = 12;
  b['4'] = 5;
  b['3'] = 3;
  var L = {};
  L['5'] = 10;
  L['4'] = 4;
  L['3'] = 2;
  var H = {};
  H['5'] = 6;
  H['4'] = 3;
  H['3'] = 1;
  var U = {};
  U['5'] = 6;
  U['4'] = 3;
  U['3'] = 1;
  cc["_RF"]["push"](N, "8157bnDDORH7q7DDuws+1ft", "GameConstant") || (Object["defineProperty"](q, "__esModule", f), q["isRTL"] = q["customAutoSpinDelayTime"] = q["PayOutData"] = q["BLOCK_TYPE"] = q["SlotItemZindex"] = q["DisplayState"] = q["SpinTrigger"] = q["TransitionState"] = q["SLOT_SYMBOLS"] = void 0, function (r) {
    {
      r[r["WILD"] = 0] = "WILD", r[r["SCATTER"] = 1] = "SCATTER", r[r["GREEN"] = 2] = "GREEN", r[r["RED"] = 3] = "RED", r[r["WHITE"] = 4] = "WHITE", r[r["CHAR8"] = 5] = "CHAR8", r[r["BALL5"] = 6] = "BALL5", r[r["BAMBOO5"] = 7] = "BAMBOO5", r[r["BALL3"] = 8] = "BALL3", r[r["BALL2"] = 9] = "BALL2", r[r["BAMBOO2"] = 10] = "BAMBOO2";
    }
  }(q["SLOT_SYMBOLS"] || (q["SLOT_SYMBOLS"] = {})), function (r) {
    r[r["NORMAL"] = 1] = "NORMAL", r[r["FREE_SPIN"] = 21] = "FREE_SPIN", r[r["FREE_SPIN_RESPIN"] = 22] = "FREE_SPIN_RESPIN", r[r["RESPIN"] = 4] = "RESPIN";
  }(q["TransitionState"] || (q["TransitionState"] = {})), function (r) {
    r[r["CLICK"] = 0] = "CLICK", r[r["SPACEBAR"] = 1] = "SPACEBAR", r[r["AUTOSPIN"] = 2] = "AUTOSPIN";
  }(q["SpinTrigger"] || (q["SpinTrigger"] = {})), function (r) {
    r[r["SHOWED"] = 1] = "SHOWED", r[r["HIDE"] = 2] = "HIDE", r[r["ANIMATING"] = 3] = "ANIMATING";
  }(q["DisplayState"] || (q["DisplayState"] = {})), function (r) {
    r[r["SCATTER_INDEX"] = 99] = "SCATTER_INDEX", r[r["NORMAL_INDEX"] = 0] = "NORMAL_INDEX", r[r["WILD_INDEX"] = 1] = "WILD_INDEX";
  }(q["SlotItemZindex"] || (q["SlotItemZindex"] = {})), function (r) {
    r[r["NORMAL"] = 100] = "NORMAL", r[r["GOLD"] = 200] = "GOLD";
  }(q["BLOCK_TYPE"] || (q["BLOCK_TYPE"] = {})), q["PayOutData"] = {
    0: h,
    1: g,
    2: l,
    3: K,
    4: O,
    5: x,
    6: p,
    7: b,
    8: L,
    9: H,
    10: U
  }, q["customAutoSpinDelayTime"] = 0.3, q["isRTL"] = shell["isRTLLanguage"] && shell["isRTLLanguage"](), cc["_RF"]["pop"]());
}
module.exports = GameConstant;
