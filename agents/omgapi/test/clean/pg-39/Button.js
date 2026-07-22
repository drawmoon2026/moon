// module: Button
// Cocos 模块函数,参数 (require, module, exports) = (O, y, exports)
function Button(O, y, exports) {
  'use strict';

  if (!cc._RF.push(y, "0a573tIV9xKS4qfPLe+tVuo", "Button")) {
    var x = {};
    x.value = true;
    Object.defineProperty(exports, "__esModule", x);
    var C = {};
    C.ws = "_transitionFinished";
    C.As = "_fromColor";
    C.Ps = "_toColor";
    C.Bs = "_fromScale";
    C.Os = "_toScale";
    C.Is = "_pressed";
    var H = cc.Enum(C),
      r = cc._decorator,
      V = r.ccclass,
      M = r.property,
      q = function (m) {
        function D() {
          var W = null !== m && m.apply(this, arguments) || this;
          return W.targetCascadeOpacity = false, W.Gs = undefined, W;
        }
        return __extends(D, m), D.prototype.update = function (W) {
          {
            var k = this.target;
            if (!this[H.ws] && (this.transition === cc.Button.Transition.COLOR || this.transition === cc.Button.Transition.SCALE)) {
              this.time += W;
              var z,
                L,
                v,
                b = 1;
              if (this.duration > 0 && (b = this.time / this.duration), b >= 1 && (b = 1, this[H.ws] = true), this.transition === cc.Button.Transition.COLOR) {
                {
                  this[H.As].a = k.opacity;
                  var U = this[H.As].lerp(this[H.Ps], b);
                  k.opacity = U.a, U.a = 255, k.color = U;
                }
              } else this.transition === cc.Button.Transition.SCALE && (k.scale = (z = this[H.Bs], L = this[H.Os], v = b, cc.misc.lerp(z, L, v)));
            }
          }
        }, D.prototype.Ii = function (W) {
          this.Gs = this.node.parent.convertToWorldSpaceAR(W.touch.getLocation()), m.prototype.Ii.call(this, W);
        }, D.prototype.Ns = function (W) {
          var k;
          this[H.Is] ? (k = this.node.parent.convertToWorldSpaceAR(W.touch.getLocation()), this.Gs.sub(k).mag() > 50 && (this[H.Is] = false, this.Gs = undefined)) : this.Gs = undefined;
          m.prototype.Ns.call(this, W);
        }, __decorate([M(cc.Boolean)], D.prototype, "targetCascadeOpacity", undefined), __decorate([V], D);
      }(cc.Button);
    exports.default = q, cc._RF.pop();
  }
}
module.exports = Button;
