// module: SlotGenerator
// Cocos 模块函数,参数 (require, module, exports) = (j, I, m)
function SlotGenerator(j, I, m) {
  'use strict';

  if (!cc._RF.push(I, "213874uZn5HSqZznN5luzQQ", "SlotGenerator")) {
    {
      var B = {};
      B.value = true;
      Object.defineProperty(m, "__esModule", B), m.generateSlot = undefined;
      var X = {};
      X.up = 0;
      X.down = 0;
      X.left = 0;
      X.right = 0;
      var Z = j("SlotView"),
        T = j("SlotScrollerController"),
        C = {
          'containerNode': undefined,
          'numberOfColumn': undefined,
          'slotView': Z.default,
          'slotScrollerController': T.default
        };
      m.generateSlot = function (V) {
        var N,
          q = (V = __assign(__assign({}, C), V)).containerNode,
          g = V.slotSize ? V.slotSize : q.getContentSize(),
          K = g.width,
          O = g.height,
          x = new cc.Node("slot_scroller");
        if (V.dontGenerateMask) x.parent = q, x.width = K, x.height = O;else {
          var p = __assign(__assign({}, M), V.maskMargin),
            b = new cc.Node("slot_mask");
          b.parent = q, b.width = K + p.left + p.right, b.height = O + p.up + p.down, b.x = (p.right - p.left) / 2, b.y = (p.up - p.down) / 2, (N = b.addComponent(cc.Mask)).type = cc.Mask.Type.RECT, N.inverted = false, x.parent = b, x.width = K, x.height = O, x.x = -b.x, x.y = -b.y;
        }
        for (var L = V.numberOfColumn, H = K / L, U = (H - K) / 2, k = [], Y = 0; Y < L; Y++) k[Y] = new V.slotView(x, U + H * Y);
        return {
          'mask': N,
          'slotScrollerController': x.addComponent(V.slotScrollerController),
          'slotViews': k
        };
      }, cc._RF.pop();
    }
  }
}
module.exports = SlotGenerator;
