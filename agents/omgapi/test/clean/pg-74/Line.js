// module: Line
// Cocos 模块函数,参数 (require, module, exports) = (Q, F, c)
function Line(Q, F, c) {
  'use strict';

  if (!cc["_RF"]["push"](F, "fbd9fUvpvVLs5ubCe3O9Csy", "Line")) {
    {
      c["__esModule"] = !0, c["Line"] = void 0;
      var j,
        I = (j = Q("LineController")) && j["__esModule"] ? j : {
          'default': j
        },
        m = {
          'init': function (B, X, Z, T, M) {
            if (null == B) throw Error("WinningLine :: init : lineHolder is required!");
            this['Vc'] = [];
            var C = new cc["Node"]();
            C["anchorX"] = 0, C["anchorY"] = 0, C['x'] = X / 2 * -1, B["addChild"](C);
            var V = this['zc'] = C["addComponent"](I["default"]);
            V["headerLinePrefab"] = Z, V["linePrefab"] = T, V["tailLinePrefab"] = M;
          },
          'updateLineMargin': function (B, X, Z) {
            void 0 === B && (B = 10), void 0 === X && (X = 10), void 0 === Z && (Z = 10);
            var T = this['zc'];
            T["headerLineMargin"] = B, T["lineMargin"] = X, T["tailLineMargin"] = Z;
          },
          'updateLineAnimName': function (B, X, Z) {
            {
              void 0 === B && (B = "header_line"), void 0 === X && (X = "line"), void 0 === Z && (Z = "tail_line");
              var T = this['zc'];
              T["animtionHeaderLineName"] = B, T["animtionLineName"] = X, T["animtionTailLineName"] = Z;
            }
          },
          'updateLineReverseAnimName': function (B, X, Z) {
            {
              void 0 === B && (B = "header_line"), void 0 === X && (X = "line"), void 0 === Z && (Z = "tail_line");
              var T = this['zc'];
              T["animtionReverseHeaderLineName"] = B, T["animtionReverseLineName"] = X, T["animtionReverseTailLineName"] = Z;
            }
          },
          'setLineMap': function (B) {
            void 0 === B && (B = []), this['Vc'] = B;
          },
          'showLines': function (B) {
            {
              void 0 === B && (B = []), B["forEach"](function (X) {
                this['zc']["addLine"](this['Vc'][X - 1], X);
              }, this);
            }
          },
          'hideLine': function (B) {
            this['zc']["removeLine"](B);
          },
          'hideAllLines': function () {
            this['zc']["removeAllLines"]();
          },
          'stopLineAnimation': function () {
            this['zc']["stopAnimation"]();
          },
          'startLineAnimation': function (B, X, Z) {
            void 0 === B && (B = !0), void 0 === X && (X = !1);
            var T = this['zc'];
            T["animtionLoop"] = B, T["animationInverted"] = X, T["setCallbackForAnimationFinish"](Z), T["startAnimation"]();
          }
        };
      c["Line"] = m, cc["_RF"]["pop"]();
    }
  }
}
module.exports = Line;
