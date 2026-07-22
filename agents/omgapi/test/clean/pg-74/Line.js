// module: Line
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, c)
function Line(Q, F, c) {
  'use strict';

  if (!cc._RF.push(F, "fbd9fUvpvVLs5ubCe3O9Csy", "Line")) {
    {
      c.__esModule = true, c.Line = undefined;
      var j,
        I = (j = Q("LineController")) && j.__esModule ? j : {
          'default': j
        },
        m = {
          'init': function (B, X, Z, T, M) {
            if (null == B) throw Error("WinningLine :: init : lineHolder is required!");
            this.Vc = [];
            var C = new cc.Node();
            C.anchorX = 0, C.anchorY = 0, C.x = X / 2 * -1, B.addChild(C);
            var V = this.zc = C.addComponent(I.default);
            V.headerLinePrefab = Z, V.linePrefab = T, V.tailLinePrefab = M;
          },
          'updateLineMargin': function (B, X, Z) {
            undefined === B && (B = 10), undefined === X && (X = 10), undefined === Z && (Z = 10);
            var T = this.zc;
            T.headerLineMargin = B, T.lineMargin = X, T.tailLineMargin = Z;
          },
          'updateLineAnimName': function (B, X, Z) {
            {
              undefined === B && (B = "header_line"), undefined === X && (X = "line"), undefined === Z && (Z = "tail_line");
              var T = this.zc;
              T.animtionHeaderLineName = B, T.animtionLineName = X, T.animtionTailLineName = Z;
            }
          },
          'updateLineReverseAnimName': function (B, X, Z) {
            {
              undefined === B && (B = "header_line"), undefined === X && (X = "line"), undefined === Z && (Z = "tail_line");
              var T = this.zc;
              T.animtionReverseHeaderLineName = B, T.animtionReverseLineName = X, T.animtionReverseTailLineName = Z;
            }
          },
          'setLineMap': function (B) {
            undefined === B && (B = []), this.Vc = B;
          },
          'showLines': function (B) {
            {
              undefined === B && (B = []), B.forEach(function (X) {
                this.zc.addLine(this.Vc[X - 1], X);
              }, this);
            }
          },
          'hideLine': function (B) {
            this.zc.removeLine(B);
          },
          'hideAllLines': function () {
            this.zc.removeAllLines();
          },
          'stopLineAnimation': function () {
            this.zc.stopAnimation();
          },
          'startLineAnimation': function (B, X, Z) {
            undefined === B && (B = true), undefined === X && (X = false);
            var T = this.zc;
            T.animtionLoop = B, T.animationInverted = X, T.setCallbackForAnimationFinish(Z), T.startAnimation();
          }
        };
      c.Line = m, cc._RF.pop();
    }
  }
}
module.exports = Line;
