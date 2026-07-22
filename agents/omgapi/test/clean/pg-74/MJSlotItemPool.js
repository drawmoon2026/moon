// module: MJSlotItemPool
// Cocos 模块函数,参数 (require, module, exports) = (F, j, I)
function MJSlotItemPool(F, j, I) {
  'use strict';

  if (!cc["_RF"]["push"](j, "d96efcz4TtCt52RwuD47jVo", "MJSlotItemPool")) {
    var m = {};
    m["value"] = !0;
    Object["defineProperty"](I, "__esModule", m);
    var B = F("SlotItemPool"),
      X = F("MJSlotItem"),
      Z = F("GameEventHandler"),
      T = F("NodePoolHandler"),
      M = function (C) {
        {
          function V() {
            return null !== C && C["apply"](this, arguments) || this;
          }
          return __extends(V, C), V["prototype"]["init"] = function (N) {
            this["slotItemConstructor"] = N["slotItem"], this["normalSpriteFrames"] = N["normalSpriteFrame"], this["blurSpriteFrames"] = N["blurSpriteFrame"] ? N["blurSpriteFrame"] : N["normalSpriteFrame"], this["normalScale"] = void 0 === N["normalScale"] ? 1 : N["normalScale"], this["blurScale"] = void 0 === N["blurScale"] ? 1 : N["blurScale"], this["getSymbolZOrder"] = N["getSymbolZOrder"];
          }, V["prototype"]["getSlotItem"] = function (N, q, f, g) {
            {
              void 0 === q && (q = !1);
              var l = T["nodePoolHandler"]["dequeueReusableItem"]("SlotItem")["getComponent"](X["default"]);
              if (N < 0) {
                return K["symbolIndex"] = N, K;
              }
              var O = l["content"];
              var x = {};
              x["sprite"] = O;
              x["normalScale"] = this["normalScale"];
              x["blurScale"] = this["blurScale"];
              x["getSymbolZOrder"] = this["getSymbolZOrder"];
              l["init"](x), l["slotViewIndex"] = f, l["slotItemIndex"] = g;
              var p = N % 100;
              return l["setup"](N, this["normalSpriteFrames"][p], this["blurSpriteFrames"][p], q), l;
            }
          }, V["prototype"]["releaseSlotItem"] = function (N) {
            N["reset"](), N["symbolIndex"] < 0 ? (Z["emitErrorLog"]("MJSlotItemPool", "Will destroy MJSlotItem node as symbolIndex < 0"), N["node"]["destroy"]()) : T["nodePoolHandler"]["enqueueReusableItem"](N["node"], "SlotItem");
          }, V;
        }
      }(B["default"]);
    I["default"] = M, cc["_RF"]["pop"]();
  }
}
module.exports = MJSlotItemPool;
